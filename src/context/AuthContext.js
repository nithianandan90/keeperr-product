import { createContext, useState, useEffect, useContext } from "react";
import { Auth, API, graphqlOperation } from "aws-amplify";
import { getUser, listFirebaseTokens, listUsers } from "../graphql/queries";
import {
  createFirebaseTokens,
  createUser,
  deleteFirebaseTokens,
  updateUser,
} from "../graphql/mutations";
import messaging from "@react-native-firebase/messaging";
import * as Notifications from "expo-notifications";
import * as Linking from "expo-linking";
import { Alert } from "react-native";
import { startActivityAsync, ActivityAction } from "expo-intent-launcher";
import * as RootNavigation from "../navigation/RootNavigation";
import { sendNotificationToDevice } from "../services/pushNotificationService";

const AuthContext = createContext({});

const AuthContextProvider = ({ children }) => {
  const [authUser, setAuthUser] = useState(null);
  const [dbUser, setDbUser] = useState(null);
  const [newToken, setNewToken] = useState(null);
  const [createdToken, setCreatedToken] = useState();
  const sub = authUser?.attributes?.sub;
  const firebaseMessaging = messaging;
  const navigation = RootNavigation;

  useEffect(() => {
    syncUser();
    getNotificationsPermission();

    firebaseMessaging()
      .getInitialNotification()
      .then(async (remoteMessage) => {
        if (remoteMessage) {
          console.log(
            "Notification caused app to open from quit state:",
            remoteMessage.notification
          );
        }
      });

    firebaseMessaging().onNotificationOpenedApp(async (remoteMessage) => {
      console.log(
        "Notification caused app to open from background state:",
        remoteMessage.notification
      );

      if (remoteMessage.data.chatRoomID) {
        navigation.navigate("Chat", {
          id: remoteMessage.data.chatRoomID,
          name: remoteMessage.data.propertyTitle,
        });
      }
    });

    firebaseMessaging().setBackgroundMessageHandler(async (remoteMessage) => {
      console.log("Message handled in the background!", remoteMessage);
    });

    // const unsubscribe = firebaseMessaging().onMessage(async (remoteMessage) => {
    //   Alert.alert("A new FCM message arrived!", JSON.stringify(remoteMessage));
    // });

    // return unsubscribe;
  }, []);

  const requestUserPermission = async () => {
    const authStatus = await firebaseMessaging().requestPermission();
    // const enabled =
    //   authStatus === firebaseMessaging.AuthorizationStatus.AUTHORIZED ||
    //   authStatus === firebaseMessaging.AuthorizationStatus.PROVISIONAL;

    // if (enabled) {
    //   console.log('Authorization status:', authStatus);
    // }
  };

  const handleYesButtonPress = async () => {
    // if (Platform.OS === 'android') {
    //   await startActivityAsync(ActivityAction.NOTIFICATION_SETTINGS
    //     );
    // } else {
    //   Linking.openSettings();
    // }
  };

  const getNotificationsPermission = async () => {
    const fullStatus = await Notifications.getPermissionsAsync();
    const { status: existingStatus } =
      await Notifications.getPermissionsAsync();
    let finalStatus = existingStatus;
    if (existingStatus !== "granted") {
      console.log("here");
      const { status } = await Notifications.requestPermissionsAsync();
      finalStatus = status;
      console.log(fullStatus);
    }
    if (finalStatus !== "granted") {
      //show again when user
      // Alert.alert(
      //   'Notifications',
      //   'Enable app notifications to receive updates',
      //   [
      //     { text: 'No', onPress: () => console.log('No Pressed'), style: 'cancel' },
      //     { text: 'Yes', onPress: handleYesButtonPress },
      //   ],
      //   { cancelable: false }
      // );

      const { status } = await Notifications.requestPermissionsAsync();
      finalStatus = status;
      return;
    }
  };

  //Function to update user

  const updateUserDetails = async (updateDbUser, userName, telephone) => {
    const updatedUser = await API.graphql(
      graphqlOperation(updateUser, {
        input: {
          id: updateDbUser.id,
          username: userName,
          telephone: telephone,
          _version: updateDbUser._version,
        },
      })
    );
  };

  //Functio to  changes

  const syncUser = async () => {
    const authUser = await Auth.currentAuthenticatedUser({ bypassCache: true });

    setAuthUser(authUser);

    const userData = await API.graphql(
      graphqlOperation(getUser, { id: authUser.attributes.sub })
    );

    //if user in database
    if (userData.data.getUser) {
      if (requestUserPermission()) {
        //return fcm token for the device

        const token = await firebaseMessaging().getToken();

        console.log("run sync", token, userData.data.getUser.id);

        //store the tokens on a seperate table?

        const updatedUser = await API.graphql(
          graphqlOperation(updateUser, {
            input: {
              id: userData.data.getUser.id,
              firebaseToken: token,
              _version: userData.data.getUser._version,
            },
          })
        );

        const createToken = await API.graphql(
          graphqlOperation(createFirebaseTokens, {
            input: {
              userType: userData.data.getUser.userType,
              token: token,
              usersID: userData.data.getUser.id,
            },
          })
        );

        // 20/07/23 insert into token table when user signs in

        setCreatedToken(createToken.data.createFirebaseTokens);

        setDbUser(updatedUser.data.updateUser);
      } else {
        setDbUser(userData.data.getUser);
        console.log("Failed token status", authStatus);
      }

      return;
    }

    // 20/07/23 new user signup
    const newUser = {
      id: authUser.attributes.sub,
      email: authUser.attributes.email,
      status: "Hey im on chat",
      userType: "CLIENT",
    };

    const newUserResponse = await API.graphql(
      graphqlOperation(createUser, { input: newUser })
    );

    console.log("new User", newUserResponse);

    if (requestUserPermission()) {
      //return fcm token for the device

      const token = await firebaseMessaging().getToken();

      console.log("token", token, newUserResponse.data.createUser.id);

      const updatedUser = await API.graphql(
        graphqlOperation(updateUser, {
          input: {
            id: newUserResponse.data.createUser.id,
            firebaseToken: token,
          },
        })
      );

      const createToken = await API.graphql(
        graphqlOperation(createFirebaseTokens, {
          input: {
            userType: newUserResponse.data.createUser.userType,
            token: token,
            usersID: newUserResponse.data.createUser.id,
          },
        })
      );

      // 20/07/23 insert into token table when user signs in

      setCreatedToken(createToken.data.createFirebaseTokens);

      setDbUser(updatedUser.data.updateUser);
    } else {
      setDbUser(newUserResponse.data.createUser);
      console.log("Failed token status", authStatus);
    }

    //send push notification to all the managers
    const managerTokens = await API.graphql(
      graphqlOperation(listFirebaseTokens, {
        filter: { userType: { eq: "MANAGER" } },
      })
    );

    const notificationData = {
      notification: {
        title: "New User Sign Up",
        body: newUserResponse.data.createUser.email,
      },
      data: {
        userID: newUserResponse.data.createUser.id,
      },
    };

    managerTokens.data.listFirebaseTokens.items.map((item) => {
      sendNotificationToDevice((deviceId = item.token), notificationData);
    });
  };

  const signOut = async () => {
    console.log("db User", dbUser._version, dbUser.id);
    const updatedUser = await API.graphql(
      graphqlOperation(updateUser, {
        input: { id: dbUser.id, firebaseToken: "", _version: dbUser._version },
      })
    );

    // 20/07/23 delete from tokens table when user sign out
    if (createdToken) {
      const deleteTokens = await API.graphql(
        graphqlOperation(deleteFirebaseTokens, {
          input: { id: createdToken.id, _version: createdToken._version },
        })
      );
    }

    console.log("signout user", updatedUser);
    Auth.signOut();
  };

  return (
    <AuthContext.Provider
      value={{
        authUser,
        dbUser,
        sub,
        setDbUser,
        updateUserDetails,
        signOut,
        firebaseMessaging,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContextProvider;

export const useAuthContext = () => useContext(AuthContext);
