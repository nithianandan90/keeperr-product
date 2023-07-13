import { FlatList, Pressable, StyleSheet, Text, View } from "react-native";
import React, { useEffect } from "react";
import { useState } from "react";
import { API, graphqlOperation } from "aws-amplify";
import { listInvoices } from "../../graphql/queries";
import { useRoute } from "@react-navigation/native";
import { List } from "react-native-paper";
import { ActivityIndicator } from "react-native";

const InvoicesScreen = () => {
  const [invoices, setInvoices] = useState();
  const [isLoading, setIsLoading] = useState(false);

  const route = useRoute();

  const userID = route.params.userID;

  useEffect(() => {
    getInvoices();
  }, []);

  const getInvoices = async () => {
    setIsLoading(true);

    const fetchedResults = await API.graphql(
      graphqlOperation(listInvoices, {
        filter: { usersID: { eq: userID } },
      })
    );

    const result = fetchedResults.data.listInvoices.items;

    setInvoices(result);

    setIsLoading(false);

    console.log("task", result);

    // console.log("invoices result", fetchedResults.data.listInvoices.items);
    //extract the values and the json
  };

  const renderInvoices = ({ item }) => {
    if (!item) {
      return;
    }

    return (
      <>
        <Pressable onPress={() => {}} android_ripple={{ radius: 200 }}>
          <View style={{ padding: 10 }}>
            <List.Item
              title={`${item.title} #${item.invoiceNo}`}
              description={`Amount: ${item.invoiceAmount}`}
              left={(props) => <List.Icon {...props} icon="account-cog" />}
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
