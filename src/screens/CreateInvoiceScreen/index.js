import {
  Alert,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import React, { useEffect, useState } from "react";
import {
  useFocusEffect,
  useNavigation,
  useRoute,
} from "@react-navigation/native";
import DropDownPicker from "react-native-dropdown-picker";
import { Button, List, RadioButton } from "react-native-paper";
import { API, graphqlOperation } from "aws-amplify";
import { listProperties } from "../HomeScreen/queries";
import { ActivityIndicator } from "react-native";
import { SafeAreaView } from "react-native";
import { listTasksByProperty } from "../../graphql/queries";
import { iconStyler } from "../../services/styler";
import { createInvoices } from "../../graphql/mutations";
import {
  addAttachmentInvoice,
  uploadFile,
} from "../../services/uploaderService";
import { printToFile } from "../../services/pdfPrint";
import { dateTimeFormatter } from "../../services/datetimeFormatter";

DropDownPicker.setListMode("MODAL");

const CreateInvoiceScreen = () => {
  const [propertyData, setPropertyData] = useState([]);

  const [taskData, setTaskData] = useState([]);

  //Property input state holder
  const [propertyID, setPropertyID] = useState();

  //Tasks input state holder
  const [taskIDs, setTaskIDs] = useState();

  const [taskAmount, setTaskAmount] = useState();

  const [taskRemarks, setTaskRemarks] = useState();

  //Form Output for invoice
  //schema {propertyID, invoiceTaskData:[{id, title, amount, remarks}], totalAmount, discount, invoiceRemarks}

  const [formOutput, setFormOutput] = useState([]);

  const [isLoading, setIsLoading] = useState(false);

  const [isTaskLoading, setIsTaskLoading] = useState(false);

  const [isPropertyOpen, setPropertyOpen] = useState(false);

  const [isTaskOpen, setTaskOpen] = useState(false);

  const [fileUri, setFileUri] = useState("");

  const [storageKey, setStorageKey] = useState("");

  const route = useRoute();

  const navigation = useNavigation();

  const userID = route?.params.user.id;

  const user = route?.params.user;

  useEffect(() => {
    setPropertyData([]);
    getProperties();
  }, []);

  useEffect(() => {
    setTaskIDs();
    setTaskData([]);
    if (propertyID) {
      getTasks(propertyID);
    }
  }, [propertyID]);

  useEffect(() => {
    summation();
  }, [
    formOutput.additionalCharges,
    formOutput.discount,
    formOutput.invoiceTaskData,
  ]);

  const getProperties = async () => {
    setIsLoading(true);
    const results = await API.graphql(
      graphqlOperation(listProperties, { filter: { usersID: { eq: userID } } })
    );

    const fetchedResults = results.data.listProperties.items;

    const data = fetchedResults.map((item) => {
      setPropertyData((k) => [...k, { label: item.title, value: item.id }]);
    });

    console.log("fetched", data);

    setIsLoading(false);
  };

  const getTasks = async (propertyID) => {
    setIsTaskLoading(true);

    const results = await API.graphql(
      graphqlOperation(listTasksByProperty, {
        propertiesID: propertyID,
        sortDirection: "DESC",
        filter: { active: { eq: true } },
      })
    );

    const fetchedResults = results.data.listTasksByProperty.items;

    const data = fetchedResults.map((item) => {
      setTaskData((k) => [
        ...k,
        {
          label: `${item.title} | ${item.status}`,
          value: item.id,
          taskType: item.taskType,
        },
      ]);
    });

    setIsTaskLoading(false);
  };

  const handleAddTask = () => {
    if (!numericTest(taskAmount)) {
      Alert.alert("Amount should be in 00.00 format");
      return;
    }

    const newArray2 = formOutput?.invoiceTaskData
      ? [
          ...formOutput.invoiceTaskData,
          {
            id: taskIDs,
            data: taskData.filter((i) => i.value === taskIDs),
            amount: taskAmount,
            remarks: taskRemarks,
          },
        ]
      : [
          {
            id: taskIDs,
            data: taskData.filter((i) => i.value === taskIDs),
            amount: taskAmount,
            remarks: taskRemarks,
          },
        ];

    const newData = formOutput
      ? { ...formOutput, propertyID: propertyID, invoiceTaskData: newArray2 }
      : { propertyID: propertyID, invoiceTaskData: newArray2 };

    setFormOutput(newData);

    setTaskIDs(null);
    setTaskAmount(null);
    setTaskRemarks(null);
    setTaskData((i) => i.filter((k) => k.value !== taskIDs));
  };

  deleteTask = (deleteTaskID) => {
    const deletedTask = formOutput.invoiceTaskData.filter(
      (i) => i.id == deleteTaskID
    );

    setTaskData((i) => [...i, deletedTask[0].data[0]]);

    const updatedObject = formOutput.invoiceTaskData.filter(
      (i) => i.id !== deleteTaskID
    );
    const newData = { ...formOutput, invoiceTaskData: updatedObject };
    setFormOutput(newData);
  };

  const summation = () => {
    console.log(formOutput);

    let subTotal = parseFloat(0);

    if (formOutput.invoiceTaskData) {
      formOutput.invoiceTaskData.map((i) => {
        subTotal += parseFloat(i.amount);
        console.log(subTotal);
      });

      subTotal += formOutput.additionalCharges
        ? parseFloat(formOutput.additionalCharges)
        : 0;

      subTotal -= formOutput.discount ? parseFloat(formOutput.discount) : 0;

      console.log(subTotal.toFixed(2));

      setFormOutput(
        formOutput
          ? (k) => ({ ...k, totalAmount: subTotal.toFixed(2) })
          : { totalAmount: subTotal.toFixed(2) }
      );
    }
  };

  const formSubmit = async () => {
    // console.log(formOutput);

    setIsLoading(true);
    console.log(formOutput);

    const invoiceData = {
      title: "Works Invoice",
      invoiceNo: Math.random().toFixed(2) + "-" + userID,
      active: true,
      invoiceAmount: formOutput.totalAmount,
      tasks: JSON.stringify(formOutput.invoiceTaskData),
      additionalCharges: formOutput.additionalCharges,
      discount: formOutput.discount,
      usersID: userID,
      userName: user.username,
      userEmail: user.email,
      remarks: formOutput.invoiceRemarks,
      status: "UNPAID",
    };

    const createdInvoice = await API.graphql(
      graphqlOperation(createInvoices, { input: invoiceData })
    );

    console.log(createdInvoice);

    const invoicePrintData = {
      invoiceNo: invoiceData.invoiceNo,
      issuedDate: dateTimeFormatter(new Date()),
      customerName: invoiceData.userName,
      customerEmail: invoiceData.userEmail,
      tasks: formOutput.invoiceTaskData,
      additionalCharges: formOutput.additionalCharges
        ? formOutput.additionalCharges
        : 0,
      discount: formOutput.discount ? formOutput.discount : 0,
      invoiceAmount: invoiceData.invoiceAmount,
      remarks: invoiceData.remarks,
    };

    const uri = await printToFile(invoicePrintData);

    const file = {
      uri: uri,
      name: "Works Invoice" + userID,
    };

    const addAttachment = await addAttachmentInvoice(
      file,
      createdInvoice.data.createInvoices.id
    );

    console.warn("success");

    setIsLoading(false);

    navigation.navigate("Invoices", { user: user });
  };

  const numericTest = (text) => {
    // Regular expression to match numbers with up to 2 decimal places
    const regex = /^\d+(\.\d{0,2})?$/;

    // Check if the input matches the regular expression
    const isValidInput = regex.test(text);

    return isValidInput ? true : false;
  };

  if (isLoading) {
    return <ActivityIndicator size={"large"} color={"#512da8"} />;
  }

  return (
    <View style={styles.container}>
      <DropDownPicker
        placeholder="Select a Property"
        items={propertyData}
        containerStyle={styles.dropdownContainer}
        style={styles.dropdown}
        itemStyle={styles.dropdownItem}
        dropDownStyle={styles.dropdown}
        searchable={true}
        value={propertyID}
        setValue={setPropertyID}
        open={isPropertyOpen}
        setOpen={() => setPropertyOpen((o) => !o)}
      />
      {isTaskLoading && <ActivityIndicator size={"large"} color={"#512da8"} />}
      {taskData.length > 0 && (
        <DropDownPicker
          placeholder="Select Tasks"
          items={taskData}
          containerStyle={styles.dropdownContainer}
          style={styles.dropdown}
          itemStyle={styles.dropdownItem}
          dropDownStyle={styles.dropdown}
          searchable={true}
          value={taskIDs}
          setValue={setTaskIDs}
          open={isTaskOpen}
          setOpen={() => setTaskOpen((o) => !o)}
        />
      )}
      {taskIDs && (
        <View>
          <TextInput
            placeholder="Task Amount (0.00)*"
            value={taskAmount}
            keyboardType="numeric"
            onChangeText={(t) => setTaskAmount(t)}
            style={styles.input}
          />
          <TextInput
            placeholder="Task Remarks*"
            value={taskRemarks}
            onChangeText={(t) => setTaskRemarks(t)}
            style={styles.input}
          />
          <Button
            style={{ marginTop: 20, marginBottom: 10 }}
            buttonColor="#805158"
            icon="plus-box"
            mode="contained"
            onPress={handleAddTask}
          >
            Add Task Item
          </Button>
        </View>
      )}

      {formOutput.invoiceTaskData?.length > 0 &&
        formOutput.invoiceTaskData.map((i) => {
          return (
            <View style={{ alignItems: "center", justifyContent: "center" }}>
              <List.Item
                title={i.data[0].label}
                description={i.remarks}
                style={styles.tasks}
                left={(props) => (
                  <List.Icon
                    icon={({ color }) =>
                      iconStyler(i.data[0].taskType, 24, color)
                    }
                  />
                )}
                right={(props) => (
                  <View style={{ flexDirection: "row" }}>
                    <Text style={{ alignSelf: "center" }}>
                      RM {parseFloat(i.amount).toFixed(2)}
                    </Text>
                    <Pressable onPress={() => deleteTask(i.id)}>
                      <List.Icon icon="window-close" size={10} />
                    </Pressable>
                  </View>
                )}
              />
            </View>
          );
        })}

      <TextInput
        placeholder="Invoice Remarks"
        value={formOutput?.invoiceRemarks}
        onChangeText={(t) =>
          setFormOutput((u) => {
            return { ...u, invoiceRemarks: t };
          })
        }
        style={styles.input}
      />
      {/* <TextInput
        placeholder="Payment Details*"
        value={paymentDetails}
        onChangeText={(t) => setPaymentDetails(t)}
        style={styles.input}
      /> */}

      <TextInput
        placeholder="Additional Charges (0.00)"
        keyboardType="numeric"
        value={formOutput?.additionalCharges}
        onChangeText={(t) =>
          setFormOutput((u) => {
            return { ...u, additionalCharges: t };
          })
        }
        style={styles.input}
      />
      <TextInput
        placeholder="Discount (0.00)"
        keyboardType="numeric"
        value={formOutput?.discount}
        onChangeText={(t) =>
          setFormOutput((u) => {
            return { ...u, discount: t };
          })
        }
        style={styles.input}
      />
      <Text style={styles.totalAmount}>Total: {formOutput?.totalAmount} </Text>
      <Button onPress={formSubmit}>Submit</Button>
      <TextInput value={fileUri} />
      <TextInput value={storageKey} />
    </View>
  );
};

export default CreateInvoiceScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 16,
    paddingTop: 24,
    backgroundColor: "#f2f2f2",
  },
  formField: {
    marginBottom: 16,
    zIndex: 0,
  },
  input: {
    backgroundColor: "#fff",
    paddingHorizontal: 12,
    paddingVertical: 10,
    fontSize: 16,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 4,
    zIndex: 0,
    marginTop: 10,
  },
  dropdownContainer: {
    height: 40,
    marginBottom: 16,
    zIndex: 2,
  },
  dropdown: {
    backgroundColor: "#fff",
    borderColor: "#ccc",
    borderWidth: 1,
    borderRadius: 4,
    zIndex: 0,
  },
  dropdownItem: {
    justifyContent: "flex-start",
    zIndex: 1,
  },
  tasks: {
    paddingLeft: 10,
    borderBottomColor: "#cccccc",
    borderBottomWidth: 1,
  },
  totalAmount: {
    padding: 5,
    fontSize: 20,
    fontWeight: 600,
  },
});
