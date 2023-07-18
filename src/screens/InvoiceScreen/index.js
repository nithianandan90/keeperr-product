import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { useRoute } from "@react-navigation/native";
import { FlatList } from "react-native";
import { Button, Chip, List } from "react-native-paper";
import { FontAwesome5, MaterialIcons } from "@expo/vector-icons";
import { dateTimeFormatter } from "../../services/datetimeFormatter";
import { Octicons } from "@expo/vector-icons/build/Icons";

const InvoiceScreen = () => {
  const route = useRoute();

  const invoice = route.params.invoice;

  console.log("invoice", invoice);

  return (
    <View style={styles.detailsContainer}>
      <FlatList
        ListHeaderComponent={() => (
          <View>
            <Chip style={{ margin: 10 }} icon="information">
              {invoice.status}
            </Chip>
            <List.Item
              title={invoice.title}
              description={`Invoice No: ${invoice.invoiceNo}`}
              left={() => (
                <List.Icon
                  icon={({ color }) => (
                    <FontAwesome5
                      name={"file-invoice"}
                      size={24}
                      color={color}
                    />
                  )}
                />
              )}
              style={{ paddingLeft: 25 }}
            />
            <List.Item
              title={`RM ${invoice.invoiceAmount}`}
              left={() => (
                <List.Icon
                  icon={({ color }) => (
                    <MaterialIcons name={"payment"} size={24} color={color} />
                  )}
                />
              )}
              style={{ paddingLeft: 25 }}
            />
            <View style={styles.datesContainer}>
              <List.Item
                left={() => <Text>Invoice Issued:</Text>}
                right={() => (
                  <Text>{dateTimeFormatter(invoice.createdAt)}</Text>
                )}
                style={{ paddingLeft: 10 }}
              />
            </View>
          </View>
        )}
        style={styles.updatesContainer}
        data={JSON.parse(invoice.tasks)}
        renderItem={({ item }) => {
          return (
            <List.Item
              title={item.data[0].label}
              description={item.remarks}
              style={{ paddingLeft: 25 }}
              left={() => (
                <List.Icon
                  icon={({ color }) => (
                    <Octicons name="tasklist" size={24} color={"grey"} />
                  )}
                />
              )}
              right={() => <Text>RM {parseFloat(item.amount).toFixed(2)}</Text>}
            />
          );
        }}
        ListFooterComponent={() => (
          <View style={styles.filesContainer}>
            <>
              <Button icon="file" mode="contained" onPress={() => {}}>
                View Invoice pdf
              </Button>
            </>
          </View>
        )}
      />
    </View>
  );
};

export default InvoiceScreen;

const styles = StyleSheet.create({
  statusContainer: {
    padding: 20,
    width: "100%",
    alignItems: "center",
    backgroundColor: "#80A46F",
    zIndex: 0.5,
  },
  detailsContainer: {
    flex: 1,
    alignItems: "center",
  },
  statusText: {
    fontSize: 20,
    fontWeight: "600",
    color: "white",
  },
  darkText: {
    fontSize: 24,
    color: "black",
  },
  assignContainer: {
    width: "100%",
    padding: 10,
    margin: 10,
    // backgroundColor: '#e6e6e6',
    borderRadius: 10,
  },
  datesContainer: {
    width: "100%",
    margin: 10,
    padding: 10,
    marginBottom: 10,
    // backgroundColor: '#e6e6e6',
    borderRadius: 10,
  },
  updatesContainer: {
    width: "100%",

    // backgroundColor: '#e6e6e6',
    borderRadius: 10,
  },
  filesContainer: {
    width: "100%",
    height: 200,
    padding: 10,
    marginBottom: 10,
    borderRadius: 10,
  },
  iconContainer: {
    position: "absolute",
    top: 40,
    left: 10,
    zindex: 1,
  },
});
