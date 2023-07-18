import { FlatList, Pressable, StyleSheet, Text, View } from "react-native";
import React, { useEffect } from "react";
import { useState } from "react";
import { API, graphqlOperation } from "aws-amplify";
import { listInvoices } from "../../graphql/queries";
import { useNavigation, useRoute } from "@react-navigation/native";
import { List } from "react-native-paper";
import { ActivityIndicator } from "react-native";
import { useAuthContext } from "../../context/AuthContext";
import { dateTimeFormatter } from "../../services/datetimeFormatter";
import { Alert } from "react-native";
import { updateInvoices } from "../../graphql/mutations";
import { AntDesign } from "@expo/vector-icons";

const InvoicesScreen = () => {
  const [invoices, setInvoices] = useState();
  const [isLoading, setIsLoading] = useState(false);

  const route = useRoute();

  const navigation = useNavigation();

  const userID = route.params.userID;

  const { dbUser } = useAuthContext();

  const admin = ["MANAGER", "PARTNER"];

  const adminChecker = admin.some((k) => k === dbUser?.userType);

  useEffect(() => {
    getInvoices();
    navigation.setOptions({
      headerRight: () => (
        <View style={{ flexDirection: "row" }}>
          <AntDesign
            onPress={() => {
              navigation.navigate("Create Invoice", { userID: userID });
            }}
            name="plus"
            size={24}
            color="gray"
            style={{ marginRight: 10 }}
          />
        </View>
      ),
    });
  }, []);

  const getInvoices = async () => {
    setIsLoading(true);

    const fetchedResults = await API.graphql(
      graphqlOperation(listInvoices, {
        filter: {
          usersID: { eq: userID },
          active: { ne: false },
        },
      })
    );

    const result = fetchedResults.data.listInvoices.items;

    setInvoices(result);

    setIsLoading(false);

    console.log("task", result);

    // console.log("invoices result", fetchedResults.data.listInvoices.items);
    //extract the values and the json
  };

  const deleteInvoice = async (item) => {
    return Alert.alert(
      "Are your sure?",
      "Are you sure you want to remove this invoice?",
      [
        // The "Yes" button
        {
          text: "Yes",
          onPress: async () => {
            setIsLoading(true);
            await API.graphql(
              graphqlOperation(updateInvoices, {
                input: { id: item.id, active: false, _version: item._version },
              })
            );
            await getInvoices();
            setIsLoading(false);
          },
        },
        // The "No" button
        // Does nothing but dismiss the dialog when tapped
        {
          text: "No",
        },
      ]
    );
  };

  const renderInvoices = ({ item }) => {
    if (!item) {
      return;
    }

    return (
      <>
        <Pressable
          onPress={() => {
            navigation.navigate("Invoice", { invoice: item });
          }}
          android_ripple={{ radius: 200 }}
        >
          <View style={{ padding: 10 }}>
            <List.Item
              title={`${item.title} #${item.invoiceNo}`}
              description={`Amount: RM ${item.invoiceAmount}\n${item.status}`}
              descriptionNumberOfLines={2}
              left={(props) => <List.Icon {...props} icon="file-document" />}
              right={(props) => (
                <View>
                  {adminChecker && (
                    <Pressable onPress={() => deleteInvoice(item)}>
                      <List.Icon {...props} icon="delete" />
                    </Pressable>
                  )}
                  <Text>{dateTimeFormatter(item.createdAt, "dateOnly")}</Text>
                </View>
              )}
            />
          </View>
        </Pressable>
      </>
    );
  };

  if (isLoading) {
    return <ActivityIndicator size={"large"} color={"#512da8"} />;
  }

  return (
    <View>
      <FlatList
        data={invoices}
        renderItem={renderInvoices}
        keyExtractor={(item) => item?.id}
      />
    </View>
  );
};

export default InvoicesScreen;

const styles = StyleSheet.create({});
