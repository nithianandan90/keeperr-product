import React, { useEffect, useState } from "react";
import {
  View,
  TextInput,
  StyleSheet,
  Text,
  ScrollView,
  Pressable,
  ActivityIndicator,
  Alert,
} from "react-native";
import DateTimePicker from "@react-native-community/datetimepicker";
import {
  getFileInfo,
  pickImage,
  pickDocument,
  addAttachment,
} from "../../services/uploaderService";
import {
  Button,
  Chip,
  List,
  RadioButton,
  Snackbar,
  Switch,
} from "react-native-paper";
import {
  useIsFocused,
  useNavigation,
  useRoute,
} from "@react-navigation/native";
import { API, graphqlOperation } from "aws-amplify";
import {
  createNotifications,
  createTask,
  createTenantTasks,
  deleteTenantTasks,
  updateTask,
} from "../../graphql/mutations";
import { listUsers } from "../../graphql/queries";
import DropDownPicker from "react-native-dropdown-picker";

const propertyData = [
  { label: "Property 1", value: "Property 1" },
  { label: "Property 2", value: "Property 2" },
  { label: "Property 3", value: "Property 3" },
  { label: "Property 4", value: "Property 4" },
  { label: "Property 5", value: "Property 5" },
];

const TaskEdit = () => {
  // const [property, setProperty] = useState('');
  const [status, setStatus] = useState("");
  const [type, setType] = useState("");
  const [recurrence, setRecurrence] = useState("");

  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [title, setTitle] = useState("");
  const [subTitle, setSubTitle] = useState("");

  const [startMode, setStartMode] = useState("date");
  const [startShow, setStartShow] = useState(false);
  const [endMode, setEndMode] = useState("date");
  const [endShow, setEndShow] = useState(false);
  const [images, setImages] = useState([]);
  const [documents, setDocuments] = useState([]);
  const [sbVisible, setSbVisible] = useState(false);
  const [sbMessage, setSbMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [latestUpdate, setLatestUpdate] = useState("");

  const [ownerOnly, setOwnerOnly] = useState(false);

  const [tenantIDs, setTenantIDs] = useState([]);
  const [isTenantOpen, setTenantOpen] = useState(false);
  const [userData, setUserData] = useState([]);

  const route = useRoute();

  const navigation = useNavigation();

  const existingTask = route?.params?.task;

  const property = route.params.property;

  const isFocused = useIsFocused();

  useEffect(() => {
    // setProperty(route.params.property)
    getTenantData();

    if (existingTask) {
      navigation.setOptions({ title: "Edit Task" });

      setOwnerOnly(existingTask.ownerOnly);
      setStatus(existingTask.status);
      setType(existingTask.taskType);
      setRecurrence(existingTask.recurrence);
      setStartDate(existingTask.startDate);
      setEndDate(existingTask.completionDate);
      setTitle(existingTask.title);
      setSubTitle(existingTask.subTitle);
    }

    existingTask.TenantTasks.items.map((item) => {
      if (!item._deleted) {
        setTenantIDs((k) => {
          return k ? [...k, item.userID] : [userID];
        });
      }
    });
  }, [existingTask, property, isFocused]);

  const onStartDateChange = (event, selectedDate) => {
    const currentDate = selectedDate;
    setStartShow(false);
    if (event.type === "dismissed") {
      setStartDate("");
      return;
    }
    setStartDate(currentDate);
  };

  const onEndDateChange = (event, selectedDate) => {
    const currentDate = selectedDate;
    setEndShow(false);
    if (event.type === "dismissed") {
      setEndDate("");
      return;
    }
    setEndDate(currentDate);
  };

  //Upload Functions

  const imagePicker = async () => {
    const results = await pickImage();

    if (results.cancelled) {
      return;
    }

    const fileInfo = await getFileInfo(results.uri);

    if (fileInfo.size > 26000000) {
      setSbVisible(true);
      setSbMessage("Image size exceeds 25 mb");
      return;
    }

    if (images) {
      setImages((k) => [...k, results]);
    } else {
      setImages(results);
    }
  };

  const documentPicker = async () => {
    const results = await pickDocument();

    const fileInfo = await getFileInfo(results.uri);

    if (fileInfo.size > 26000000) {
      setSbVisible(true);
      setSbMessage("Document size exceeds 25 mb");
      return;
    }

    if (results.type === "cancel") {
      return;
    }

    if (images) {
      setDocuments((k) => [...k, results]);
    } else {
      setDocuments(results);
    }
  };

  const showDeleteConfirm = async () => {
    return Alert.alert(
      "Are your sure?",
      "Are you sure you want to remove this task?",
      [
        // The "Yes" button
        {
          text: "Yes",
          onPress: async () => {
            await API.graphql(
              graphqlOperation(updateTask, {
                input: {
                  id: existingTask.id,
                  active: false,
                  _version: existingTask._version,
                },
              })
            );
            navigation.navigate("Property Details", { property });
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

  const getTenantData = async () => {
    setUserData([]);
    setIsLoading(true);
    const results = await API.graphql(graphqlOperation(listUsers));
    const fetchedUsers = results.data.listUsers.items.filter(
      (k) => !k._deleted
    );

    const data = fetchedUsers.map((item) => {
      property.Tenants.items.map((i) => {
        if (i.userID === item.id && !i._deleted) {
          setUserData((k) => [...k, { label: item.email, value: item.id }]);
        }
      });
    });

    setIsLoading(false);
  };

  const toggleTenantDropdown = () => {
    setTenantOpen(!isTenantOpen);
  };

  const handleSubmit = async () => {
    // Perform form submission logic here
    // You can access the form values from the component's state

    const submitData = [property, status, title, subTitle, recurrence];

    if (submitData.some((k) => k === "")) {
      setSbVisible(true);
      setSbMessage("Fill in all required fields");
      return;
    }

    // console.log('Submitted Form:', {
    //   property,
    //   status,
    //   startDate,
    //   endDate,
    //   title,
    //   subTitle,
    //   recurrence,
    // });

    const newTask = {
      status: status,
      createdAt: new Date(),
      title: title,
      subTitle: subTitle,
      taskType: type,
      active: true,
      ownerOnly: ownerOnly,
      recurrence: recurrence,
      startDate: startDate ? startDate : null,
      completionDate: endDate ? endDate : null,
      propertiesID: property.id,
      usersID: property.usersID,
    };

    setIsLoading(true);

    let taskID = "";

    if (existingTask) {
      const updatedTask = await API.graphql(
        graphqlOperation(updateTask, {
          input: {
            id: existingTask.id,
            _version: existingTask._version,
            ...newTask,
          },
        })
      );

      if (latestUpdate) {
        const taskUpdate = await API.graphql(
          graphqlOperation(createNotifications, {
            input: {
              taskID: existingTask.id,
              updateDetails: latestUpdate,
              usersID: property.usersID,
            },
          })
        );
      }

      taskID = existingTask.id;

      //create if not there, update if there

      console.log(existingTask.TenantTasks.items);
      if (existingTask.TenantTasks.items.length > 0) {
        existingTask.TenantTasks.items.map(async (item) => {
          if (item) {
            await API.graphql(
              graphqlOperation(deleteTenantTasks, {
                input: { id: item.id, _version: item._version },
              })
            );
          }
        });
      }

      if (tenantIDs.length > 0) {
        tenantIDs.map(async (item) => {
          await API.graphql(
            graphqlOperation(createTenantTasks, {
              input: {
                taskID: existingTask.id,
                userID: item,
                active: true,
              },
            })
          );
        });
      }
    } else {
      const returnedNewTask = await API.graphql(
        graphqlOperation(createTask, { input: newTask })
      );
      taskID = returnedNewTask.data.createTask.id;

      const taskUpdate = await API.graphql(
        graphqlOperation(createNotifications, {
          input: {
            taskID: taskID,
            updateDetails: "Task created",
            usersID: property.usersID,
          },
        })
      );

      tenantIDs.map(async (item) => {
        await API.graphql(
          graphqlOperation(createTenantTasks, {
            input: {
              taskID: taskID,
              userID: item,
              active: true,
            },
          })
        );
      });
    }

    //for each image and document, create a new attachment

    const imageUpload = await Promise.all(
      images.map(async (image) => {
        const attachment = await addAttachment(image, taskID);
      })
    );

    const documentUpload = await Promise.all(
      documents.map(async (document) => {
        const attachment = await addAttachment(document, taskID);
      })
    );

    setIsLoading(false);

    // console.warn('completed');

    navigation.navigate("Property Details", { property });
  };

  // console.log("documents", documents);

  if (isLoading) {
    return <ActivityIndicator size={"large"} color={"#512da8"} />;
  }

  return (
    <ScrollView nestedScrollEnabled={true} style={styles.container}>
      <View style={styles.formField}>
        {property && (
          <Text
            style={{ paddingHorizontal: 12, marginBottom: 10, fontSize: 20 }}
          >
            {property?.title}, {property?.streetAddress}, {property?.postcode},{" "}
            {property?.state}{" "}
          </Text>
        )}

        <View style={{ margin: 15 }}>
          <View style={{ flexDirection: "row" }}>
            <Text style={{ fontWeight: "600" }}>Owner Only </Text>
            <Switch
              value={ownerOnly}
              onValueChange={() => {
                setOwnerOnly(!ownerOnly);
                setTenantIDs([]);
              }}
            />
          </View>
        </View>

        {!ownerOnly && (
          <>
            <Text
              style={{
                paddingHorizontal: 12,
                marginBottom: 10,
                fontSize: 15,
                marginTop: 20,
                fontWeight: "600",
              }}
            >
              Select Tenants
            </Text>
            <DropDownPicker
              multiple={true}
              placeholder="Select a user"
              items={userData.filter((k) => k !== property.usersID)}
              searchable={true}
              containerStyle={styles.dropdownContainer}
              style={styles.dropdown}
              itemStyle={styles.dropdownItem}
              dropDownStyle={styles.dropdown}
              value={tenantIDs}
              setValue={setTenantIDs}
              open={isTenantOpen}
              setOpen={toggleTenantDropdown}
            />
          </>
        )}

        <Text
          style={{
            paddingHorizontal: 12,
            marginBottom: 10,
            fontSize: 15,
            fontWeight: "600",
          }}
        >
          Task Status*:
        </Text>
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
            <RadioButton value="TO COMMENCE" />
            <Text>TO COMMENCE</Text>
          </View>
          <View
            style={{
              paddingHorizontal: 5,
              flexDirection: "row",
              alignItems: "center",
            }}
          >
            <RadioButton value="ONGOING" />
            <Text>ONGOING</Text>
          </View>
          {existingTask && (
            <View
              style={{
                paddingHorizontal: 5,
                flexDirection: "row",
                alignItems: "center",
              }}
            >
              <RadioButton value="COMPLETED" />
              <Text>COMPLETED</Text>
            </View>
          )}
        </RadioButton.Group>

        <Text
          style={{
            paddingHorizontal: 12,
            marginBottom: 10,
            fontSize: 15,
            marginTop: 20,
            fontWeight: "600",
          }}
        >
          Task Type*:
        </Text>
        <RadioButton.Group
          onValueChange={(newValue) => setType(newValue)}
          value={type}
        >
          <View
            style={{
              paddingHorizontal: 5,
              flexDirection: "row",
              alignItems: "center",
            }}
          >
            <RadioButton value="plumbing" />
            <Text>Plumbing</Text>
          </View>
          <View
            style={{
              paddingHorizontal: 5,
              flexDirection: "row",
              alignItems: "center",
            }}
          >
            <RadioButton value="roofing" />
            <Text>Roofing</Text>
          </View>
          <View
            style={{
              paddingHorizontal: 5,
              flexDirection: "row",
              alignItems: "center",
            }}
          >
            <RadioButton value="electrical" />
            <Text>Electrical</Text>
          </View>
          <View
            style={{
              paddingHorizontal: 5,
              flexDirection: "row",
              alignItems: "center",
            }}
          >
            <RadioButton value="structural" />
            <Text>Structural</Text>
          </View>
          <View
            style={{
              paddingHorizontal: 5,
              flexDirection: "row",
              alignItems: "center",
            }}
          >
            <RadioButton value="admin" />
            <Text>Admin</Text>
          </View>
          <View
            style={{
              paddingHorizontal: 5,
              flexDirection: "row",
              alignItems: "center",
            }}
          >
            <RadioButton value="revenue" />
            <Text>Revenue Management</Text>
          </View>
        </RadioButton.Group>

        <Text
          style={{
            paddingHorizontal: 12,
            marginBottom: 10,
            fontSize: 15,
            marginTop: 20,
            fontWeight: "600",
          }}
        >
          Task Recurrence*:
        </Text>
        <RadioButton.Group
          onValueChange={(newValue) => setRecurrence(newValue)}
          value={recurrence}
        >
          <View
            style={{
              paddingHorizontal: 5,
              flexDirection: "row",
              alignItems: "center",
            }}
          >
            <RadioButton value="ONE-OFF" />
            <Text>One-off</Text>
          </View>
          <View
            style={{
              paddingHorizontal: 5,
              flexDirection: "row",
              alignItems: "center",
            }}
          >
            <RadioButton value="RECURRING" />
            <Text>Recurring</Text>
          </View>
        </RadioButton.Group>

        {/* <DropDownPicker
        placeholder="Task Type"
        items={[
          { label: 'Plumbing', value: 'PLUMBING' },
          { label: 'Electrical', value: 'ELECTRICAL' },
          { label: 'Roofing', value: 'ROOFING' },
        ]}
        value={type}
        containerStyle={styles.dropdownContainer}
        style={styles.dropdown}
        itemStyle={styles.dropdownItem}
        dropDownStyle={styles.dropdown}
        setValue={setType}
        open={isTypeOpen}
        setOpen={toggleTypeDropdown}
      /> */}

        {/* Rest of the code remains the same */}

        <TextInput
          placeholder="Task Title*"
          value={title}
          onChangeText={(t) => setTitle(t)}
          style={styles.input}
        />

        <TextInput
          placeholder="Task Details*"
          value={subTitle}
          onChangeText={(st) => setSubTitle(st)}
          style={styles.input}
        />
        {existingTask && (
          <TextInput
            placeholder="Task Update"
            value={latestUpdate}
            onChangeText={(u) => setLatestUpdate(u)}
            style={styles.input}
          />
        )}

        <View style={{ alignItems: "center", marginTop: 10 }}>
          <Text>Start Date/ Time: {startDate?.toLocaleString()}</Text>

          <View style={{ flexDirection: "row", justifyContent: "center" }}>
            <View style={{ margin: 10 }}>
              <Button
                style={{}}
                onPress={() => {
                  setStartShow(true);
                  setStartMode("date");
                }}
                mode="contained"
              >
                Start Date
              </Button>
            </View>
            <View style={{ margin: 10 }}>
              <Button
                style={{}}
                onPress={() => {
                  setStartShow(true);
                  setStartMode("time");
                }}
                mode="contained"
              >
                Start Time
              </Button>
            </View>
          </View>
          {startShow && (
            <DateTimePicker
              value={new Date()}
              mode={startMode}
              is24Hour={true}
              onChange={onStartDateChange}
            />
          )}
        </View>

        <View style={{ alignItems: "center", marginTop: 10 }}>
          <Text>Completion Date/ Time: {endDate?.toLocaleString()}</Text>
          <View style={{ flexDirection: "row", justifyContent: "center" }}>
            <View style={{ margin: 10 }}>
              <Button
                style={{}}
                onPress={() => {
                  setEndShow(true);
                  setEndMode("date");
                }}
                mode="contained"
              >
                End Date
              </Button>
            </View>
            <View style={{ margin: 10 }}>
              <Button
                style={{}}
                onPress={() => {
                  setEndShow(true);
                  setEndMode("time");
                }}
                mode="contained"
              >
                End Time
              </Button>
            </View>
          </View>
          {endShow && (
            <DateTimePicker
              value={new Date()}
              mode={endMode}
              is24Hour={true}
              onChange={onEndDateChange}
            />
          )}
        </View>

        {images &&
          images.map((item) => {
            if (!item.cancelled) {
              return (
                <List.Item
                  title={item.name ? item?.name : item.uri?.split("/").pop()}
                  left={(props) => <List.Icon {...props} icon="image" />}
                  right={(props) => (
                    <Pressable
                      onPress={() => {
                        setImages((k) => k.filter((k) => k.uri !== item.uri));
                      }}
                    >
                      <List.Icon {...props} icon="delete" />
                    </Pressable>
                  )}
                />
              );
            }

            // return (<Text>{item.name?(item.name):(item.uri.split('/').pop())}</Text>)
          })}

        <Chip
          icon="upload"
          onPress={imagePicker}
          style={{ width: 200, alignSelf: "center", margin: 10 }}
        >
          Upload Image
        </Chip>

        {documents &&
          documents.map((item) => {
            return (
              <List.Item
                title={item.name}
                left={(props) => <List.Icon {...props} icon="file" />}
                right={(props) => (
                  <Pressable
                    onPress={() => {
                      setDocuments((k) => k.filter((k) => k.uri !== item.uri));
                    }}
                  >
                    <List.Icon {...props} icon="delete" />
                  </Pressable>
                )}
              />
            );
          })}

        <Chip
          icon="upload"
          onPress={documentPicker}
          style={{ width: 200, alignSelf: "center", margin: 10 }}
        >
          Upload Documents
        </Chip>

        {/* <Button style={{}}title="Submit" onPress={handleSubmit} /> */}

        <Button
          style={{ marginTop: 20, marginBottom: 10 }}
          buttonColor="#805158"
          icon="airplane"
          mode="contained"
          onPress={handleSubmit}
        >
          Submit
        </Button>

        {existingTask && (
          <Button
            style={{ marginBottom: 10 }}
            buttonColor="#665a6f"
            icon="delete"
            mode="contained"
            onPress={showDeleteConfirm}
          >
            Delete Task
          </Button>
        )}
      </View>

      <Snackbar
        style={{ marginBottom: 20 }}
        visible={sbVisible}
        onDismiss={() => {
          setSbVisible(false);
        }}
        action={{
          label: "Close",
          onPress: () => {
            setSbVisible(false);
          },
        }}
      >
        {sbMessage}
      </Snackbar>
    </ScrollView>
  );
};

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
});

export default TaskEdit;
