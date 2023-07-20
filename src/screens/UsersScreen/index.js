import {
  ActivityIndicator,
  FlatList,
  StyleSheet,
  TextInput,
  View,
} from "react-native";
import React, { useState } from "react";
import { API, graphqlOperation } from "aws-amplify";
import { listUsers, listUsersByDate } from "../../graphql/queries";
import { useEffect } from "react";
import { Pressable } from "react-native";
import { List } from "react-native-paper";
import { useNavigation } from "@react-navigation/native";

const UsersScreen = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredUsers, setFilteredUsers] = useState([]);
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const navigation = useNavigation();

  useEffect(() => {
    getUsers();
    navigation.setOptions({ title: "Clients" });
  }, []);

  const timeChecker = (date) => {
    const currentDateTime = new Date();
    const twentyFourHoursAgo = new Date(currentDateTime - 24 * 60 * 60 * 1000);
    return new Date(date) > twentyFourHoursAgo;
  };

  const handleSearch = (text) => {
    setSearchQuery(text);
    const filtered = users.filter(
      (user) =>
        user?.email.toLowerCase().includes(text.toLowerCase()) ||
        user?.id.toLowerCase().includes(text.toLowerCase())
    );
    setFilteredUsers(filtered);
  };

  const getUsers = async () => {
    setIsLoading(true);

    const results = await API.graphql(
      graphqlOperation(listUsersByDate, {
        userType: "CLIENT",
        sortDirection: "DESC",
      })
    );

    // console.log(JSON.stringify(results.data.listUsersByDate.items, null, 2));

    const activeUsers = results.data.listUsersByDate.items.filter(
      (item) => !item._deleted
    );

    setUsers(activeUsers);
    setFilteredUsers(activeUsers);

    setIsLoading(false);

    // console.log("user list", JSON.stringify(results, null, 2));
  };

  const renderUserItem = ({ item }) => {
    if (!item) {
      return;
    }

    return (
      <>
        <Pressable
          onPress={() => {
            navigation.navigate("Property User", { propertyUser: item });
          }}
          android_ripple={{ radius: 200 }}
        >
          <View style={{ padding: 10 }}>
            <List.Item
              title={item?.email}
              description={`ID: ${item.id}`}
              left={(props) => (
                <List.Icon
                  {...props}
                  icon="account-cog"
                  color={timeChecker(item.createdAt) ? "green" : "black"}
                />
              )}
              right={(props) => (
                <Pressable onPress={() => {}}>
                  <List.Icon {...props} icon="eye" />
                </Pressable>
              )}
            />
          </View>
        </Pressable>
      </>
    );
  };

  if (isLoading) {
    return <ActivityIndicator size="large" color={"#512da8"} />;
  }

  return (
    <View style={{ flex: 1 }}>
      <TextInput
        placeholder="Search Users"
        value={searchQuery}
        onChangeText={handleSearch}
        style={{ padding: 10, backgroundColor: "#f2f2f2" }}
      />
      {users && (
        <FlatList
          data={filteredUsers}
          renderItem={renderUserItem}
          keyExtractor={(item) => item?.id}
        />
      )}
    </View>
  );
};

export default UsersScreen;

const styles = StyleSheet.create({});
