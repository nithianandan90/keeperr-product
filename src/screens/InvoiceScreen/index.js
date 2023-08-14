import { StyleSheet, Text, View } from "react-native";
import React, { useEffect, useState } from "react";
import { useRoute } from "@react-navigation/native";
import { FlatList } from "react-native";
import { Button, Chip, List, RadioButton } from "react-native-paper";
import { FontAwesome5, MaterialIcons } from "@expo/vector-icons";
import { dateTimeFormatter } from "../../services/datetimeFormatter";
import { Octicons } from "@expo/vector-icons/build/Icons";
import { downloadFile, getInvoiceFile } from "../../services/downloaderService";
import { useAuthContext } from "../../context/AuthContext";
import { API, graphqlOperation } from "aws-amplify";
import { updateInvoices } from "../../graphql/mutations";
import { ActivityIndicator } from "react-native";

const InvoiceScreen = () => {
  const route = useRoute();

  const [uri, setUri] = useState();

  const [isLoading, setIsLoading] = useState(false);

  const [status, setStatus] = useState();

  const invoice = route.params.invoice;
  const { dbUser } = useAuthContext();

  const admin = ["MANAGER", "PARTNER"];

  const adminChecker = admin.some((k) => k === dbUser?.userType);

  useEffect(() => {
    setIsLoading(true);

    getInvoiceFile(invoice.id).then((k) => {
      setUri(k);
      setIsLoading(false);
    });
  }, []);

  useEffect(() => {
    if (invoice) {
      setStatus(invoice.status);
    }
  }, [invoice]);

  const updateInvoice = async () => {
    const results = await API.graphql(
      graphqlOperation(updateInvoices, {
        input: { id: invoice.id, status: status, _version: invoice._version },
      })
    );

    console.log(results);
    setStatus(results.data.updateInvoices.status);
  };

  if (isLoading) {
    return <ActivityIndicator size="large" color={"#512da8"} />;
  }

  return (
    <View style={styles.detailsContainer}>
      <FlatList
        ListHeaderComponent={() => (
          <View>
            <Chip style={{ margin: 10 }} icon="information">
              {status}
            </Chip>
            <List.Item
              title={invoice?.title}
              description={`Invoice No: ${invoice?.invoiceNo}`}
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
              title={`Total: RM ${invoice?.invoiceAmount}`}
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
                  <Text>{dateTimeFormatter(invoice?.createdAt)}</Text>
                )}
                style={{ paddingLeft: 10 }}
              />
              <List.Item
                left={() => <Text>Bank Details:</Text>}
                right={() => (
                  <Text>{`Bank: Maybank \nAccount: 564052536287 \nName: Retail Revolution \nSdn. Bhd. `}</Text>
                )}
                style={{ paddingLeft: 10 }}
              />
            </View>
          </View>
        )}
        style={styles.updatesContainer}
        data={JSON.parse(invoice?.tasks)}
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
          <>
            {/* Use task details view files to get the pdf  */}

            <View style={styles.datesContainer}>
              <List.Item
                left={() => <Text>Additional Charges:</Text>}
                right={() => (
                  <Text>{`RM ${parseFloat(invoice?.additionalCharges).toFixed(
                    2
                  )}`}</Text>
                )}
                style={{ paddingLeft: 10 }}
              />
              <List.Item
                left={() => <Text>Discount:</Text>}
                right={() => (
                  <Text>{`RM (${parseFloat(invoice?.discount).toFixed(
                    2
                  )})`}</Text>
                )}
                style={{ paddingLeft: 10 }}
              />
              <List.Item
                left={() => <Text>Remarks:</Text>}
                right={() => <Text>{invoice?.remarks}</Text>}
                style={{ paddingLeft: 10 }}
              />
            </View>

            {uri && (
              <Button
                style={{ marginBottom: 10 }}
                icon="file"
                mode="contained"
                onPress={() => {
                  downloadFile(uri, "Invoice.pdf");
                }}
              >
                View Invoice pdf
              </Button>
            )}

            {adminChecker && (
              <View>
                <View style={{ marginLeft: 10, marginBottom: 10 }}>
                  <RadioButton.Group
                    onValueChange={(newValue) => setStatus(newValue)}
                    value={status}
                  >
                    <View
                      style={{
                        paddingHorizontal: 5,
                        flexDirection: "row",
                        alignItems: "center",
                      }}
                    >
                      <RadioButton value="PAID" />
                      <Text>PAID</Text>
                    </View>
                    <View
                      style={{
                        paddingHorizontal: 5,
                        flexDirection: "row",
                        alignItems: "center",
                      }}
                    >
                      <RadioButton value="UNPAID" />
                      <Text>UNPAID</Text>
                    </View>
                    <View
                      style={{
                        paddingHorizontal: 5,
                        flexDirection: "row",
                        alignItems: "center",
                      }}
                    >
                      <RadioButton value="OVERDUE" />
                      <Text>OVERDUE</Text>
                    </View>
                  </RadioButton.Group>
                </View>
                <Button
                  style={{ marginBottom: 10 }}
                  icon="airplane"
                  mode="contained"
                  onPress={() => {
                    updateInvoice();
                  }}
                >
                  Update Invoice
                </Button>
              </View>
            )}
          </>
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
