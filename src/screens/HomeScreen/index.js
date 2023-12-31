import {
  ActivityIndicator,
  FlatList,
  StyleSheet,
  Text,
  View,
} from "react-native";
import React, { useEffect, useState } from "react";
import FacilitiesItem from "../../components/FacilitiesItem";
import { API, graphqlOperation } from "aws-amplify";
import "@azure/core-asynciterator-polyfill";
import { listProperties } from "./queries";
import { useAuthContext } from "../../context/AuthContext";
import { useIsFocused, useNavigation } from "@react-navigation/native";
import { MaterialIcons } from "@expo/vector-icons";
import ToggleButtonExample from "../../components/ToggleButton";
import { listTenants } from "../../graphql/queries";

const HomeScreen = () => {
  const navigation = useNavigation();

  const [properties, setProperties] = useState([]);
  const [tenantedProperties, setTenantedProperties] = useState([]);
  const [tasks, setTasks] = useState([]);
  const { dbUser } = useAuthContext();
  const [isLoading, setIsLoading] = useState(false);
  const [toggleValue, setToggleValue] = useState(false);

  const admin = ["MANAGER", "PARTNER"];

  const adminChecker = admin.some((k) => k === dbUser?.userType);

  const isFocused = useIsFocused();
  useEffect(() => {
    setTenantedProperties([]);
    getResult();
    getTenanted();
    if (adminChecker) {
      navigation.setOptions({
        headerRight: () => (
          <View style={{ marginRight: 10 }}>
            <MaterialIcons
              onPress={() => {
                navigation.navigate("Add Property");
              }}
              name="add-business"
              size={30}
              color="gray"
            />
          </View>
        ),
      });
    }

    // const removeListener = Hub.listen('datastore', async ({ payload }) => {

    //   if (payload.event === 'syncQueriesReady') {
    //     console.log('DataStore ready');
    //     getResult();
    //   }
    // });

    // console.log('Starting DataStore');
    // DataStore.start();

    // return () => removeListener();
  }, [isFocused, dbUser]);

  const getResult = async () => {
    // const propertiesResult = await DataStore.query(Properties);

    setIsLoading(true);

    if (dbUser) {
      const result = await API.graphql(
        graphqlOperation(
          listProperties,
          adminChecker
            ? { filter: { active: { eq: true } } }
            : { filter: { usersID: { eq: dbUser.id }, active: { eq: true } } }
        )
      );

      // const tasks = await result.Tasks;

      const propertiesResult = result.data.listProperties.items.filter(
        (item) => !item._deleted
      );

      if (propertiesResult) {
        if (!Array.isArray(propertiesResult)) {
          const result_array = [propertiesResult];

          setProperties(result_array);
        } else {
          setProperties(propertiesResult);
        }
      }
    }
    setIsLoading(false);
  };

  const getTenanted = async () => {
    let tenantedProperties = [];

    const tenanted = await API.graphql(
      graphqlOperation(listTenants, { filter: { userID: { eq: dbUser.id } } })
    );

    tenanted.data.listTenants.items.map((item) => {
      if (!item._deleted) {
        tenantedProperties.push(item.propertiesID);
        console.log(item.propertiesID);
      }
    });

    // console.log("tenanted", tenanted.data.listTenants.items);

    let orArray = [];
    tenanted.data.listTenants.items.map((item) => {
      if (!item._deleted) {
        orArray.push({ id: { eq: item.propertiesID } });
      }
    });

    if (orArray.length > 0) {
      const results = await API.graphql(
        graphqlOperation(listProperties, { filter: { or: orArray } })
      );

      setTenantedProperties(results.data.listProperties.items);
    }
  };

  //  useEffect(()=>{
  //     getResult().then((result)=>{console.log(jsonFormat(result)); setProperties(result)});

  //     Auth.currentAuthenticatedUser({bypassCache: true}).then((result)=>{console.log(jsonFormat(result))})

  //  },[]);

  // console.log(jsonFormat(properties));

  // console.log(jsonFormat(properties));

  if (!properties || isLoading) {
    return <ActivityIndicator size={"large"} color={"#512da8"} />;
  }

  return (
    <View style={{ flex: 1, width: "100%" }}>
      <View style={{ alignItems: "center" }}>
        {!adminChecker && (
          <ToggleButtonExample
            toggleValue={toggleValue}
            setToggleValue={setToggleValue}
          />
        )}
      </View>
      <FlatList
        data={!toggleValue ? properties : tenantedProperties}
        renderItem={({ item }) => {
          return <FacilitiesItem property={item} />;
        }}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({});
