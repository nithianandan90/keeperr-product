import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import ChatsScreen from "../screens/ChatsScreen/ChatsScreen";
import {
  Ionicons,
  Entypo,
  MaterialCommunityIcons,
  FontAwesome5,
} from "@expo/vector-icons";
import HomeScreen from "../screens/HomeScreen";
import ProfileScreen from "../screens/ProfileScreen";
import UsersScreen from "../screens/UsersScreen";

const Tab = createBottomTabNavigator();

const MainTabNavigatorAdmin = () => {
  return (
    <Tab.Navigator
      initialRouteName="Chats"
      screenOptions={{
        tabBarActiveTintColor: "#512da8",
        tabBarStyle: { backgroundColor: "whitesmoke" },
        headerStyle: { backgroundColor: "whitesmoke" },
      }}
    >
      <Tab.Screen
        name="Properties"
        component={HomeScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons
              name="office-building-marker"
              size={24}
              color={color}
            />
          ),
        }}
      />

      <Tab.Screen
        name="Chats"
        component={ChatsScreen}
        options={({ navigation }) => ({
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="ios-chatbubbles-sharp" size={size} color={color} />
          ),
          // headerRight: () => (
          //   <Entypo
          //     onPress={() => navigation.navigate('Contacts')}
          //     name="new-message"
          //     size={18}
          //     color={'royalblue'}
          //     style={{ marginRight: 15 }}
          //   />
          // ),
        })}
      />
      <Tab.Screen
        name="UserScreen"
        component={UsersScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <FontAwesome5 name="users" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Settings"
        component={ProfileScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="settings-outline" size={size} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default MainTabNavigatorAdmin;
