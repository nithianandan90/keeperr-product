import React, { useEffect, useState } from "react";
import {
  View,
  TextInput,
  StyleSheet,
  Text,
  Pressable,
  ActivityIndicator,
  FlatList,
  Alert,
} from "react-native";
import DropDownPicker from "react-native-dropdown-picker";
import {
  getFileInfo,
  pickImage,
  addAttachmentProperty,
} from "../../services/uploaderService";
import { Button, Chip, List, RadioButton, Snackbar } from "react-native-paper";
import {
  useIsFocused,
  useNavigation,
  useRoute,
} from "@react-navigation/native";
import { API, graphqlOperation } from "aws-amplify";
import {
  createProperties,
  createTenants,
  deleteTenants,
  updateProperties,
  updateTenants,
} from "../../graphql/mutations";
import { listUsers } from "../../graphql/queries";

// const userData = [
//   { label: 'User 1', value: '7e8b9a0f-fee3-40ea-a090-cbbc8b2c60d1' },
//   { label: 'User 2', value: 'cb6ab0b9-4712-4e2c-a722-fd288a226896' },
//   { label: 'User 3', value: 'User 3' },
//   { label: 'User 4', value: 'User 4' },
//   { label: 'User 5', value: 'User 5' },
// ];

const TaskEdit = () => {
  const [title, setTitle] = useState("");
  const [streetAddress, setStreetAddress] = useState("");
  const [postcode, setPostcode] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [headerPic, setHeaderPic] = useState("");
  const [type, setType] = useState("");
  const [physicalAccess, setPhysicalAccess] = useState(false);
  const [status, setStatus] = useState(false);
  const [userID, setUserID] = useState(false);
  const [tenantIDs, setTenantIDs] = useState([]);

  const [image, setImage] = useState(false);
  const [userData, setUserData] = useState([]);
  const [sbVisible, setSbVisible] = useState(false);
  const [sbMessage, setSbMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const [isPropertyOpen, setPropertyOpen] = useState(false);
  const [isTenantOpen, setTenantOpen] = useState(false);

  const route = useRoute();

  const navigation = useNavigation();

  const existingProperty = route?.params?.property;

  const isFocused = useIsFocused();

  useEffect(() => {
    getUserData();

    if (existingProperty) {
      navigation.setOptions({ title: "Edit Property" });
      setUserID(existingProperty.usersID);
      setPostcode(existingProperty.postcode.toString());
      setTitle(existingProperty.title);
      setStreetAddress(existingProperty.streetAddress);

      setCity(existingProperty.city);
      setState(existingProperty.state);
      setType(existingProperty.type);
      setStatus(existingProperty.status);

      existingProperty.Tenants.items.map((item) => {
        if (!item._deleted) {
          console.log("item", item.userID);
          setTenantIDs((k) => {
            return k ? [...k, item.userID] : [userID];
          });
        }
      });
    } else {
      clearState();
    }
  }, [isFocused]);

  const getUserData = async () => {
    setUserData([]);
    setIsLoading(true);
    const results = await API.graphql(graphqlOperation(listUsers));
    const fetchedUsers = results.data.listUsers.items.filter(
      (k) => !k._deleted
    );

    const data = fetchedUsers.map((item) => {
      setUserData((k) => [...k, { label: item.email, value: item.id }]);
    });

    setIsLoading(false);
  };

  const togglePropertyDropdown = () => {
    setPropertyOpen(!isPropertyOpen);
  };

  const toggleTenantDropdown = () => {
    setTenantOpen(!isTenantOpen);
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

    setImage(results);
  };

  const showDeleteConfirm = async () => {
    return Alert.alert(
      "Are your sure?",
      "Are you sure you want to remove this property?",
      [
        // The "Yes" button
        {
          text: "Yes",
          onPress: async () => {
            await API.graphql(
              graphqlOperation(updateProperties, {
                input: {
                  id: existingProperty.id,
                  active: false,
                  _version: existingProperty._version,
                },
              })
            );
            clearState();
            navigation.navigate("Properties");
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

  const clearState = () => {
    setUserID("");
    setPostcode("");
    setTitle("");
    setStreetAddress("");

    setCity("");
    setState("");
    setType("");
    setStatus("");
  };

  const handleSubmit = async () => {
    // Perform form submission logic here
    // You can access the form values from the component's state

    const submitData = [
      title,
      streetAddress,
      postcode,
      city,
      state,
      type,
      status,
      userID,
      tenantIDs,
    ];

    console.log(submitData);

    if (submitData.some((k) => k === "")) {
      setSbVisible(true);
      setSbMessage("Fill in all required fields");
      return;
    }

    const newProperty = {
      title: title,
      streetAddress: streetAddress,
      postcode: postcode,
      active: true,
      city: city,
      state: state,
      type: type,
      status: status,
      usersID: userID,
    };

    setIsLoading(true);

    let propertyID = "";

    if (existingProperty) {
      //create if not there, update if there
      if (existingProperty.Tenants.items.length > 0) {
        existingProperty.Tenants.items.map(async (item) => {
          if (item) {
            await API.graphql(
              graphqlOperation(deleteTenants, {
                input: { id: item.id, _version: item._version },
              })
            );
          }
        });
      }

      if (tenantIDs.length > 0) {
        tenantIDs.map(async (item) => {
          await API.graphql(
            graphqlOperation(createTenants, {
              input: {
                propertiesID: existingProperty.id,
                userID: item,
                active: true,
              },
            })
          );
        });
      }

      const updatedProperty = await API.graphql(
        graphqlOperation(updateProperties, {
          input: {
            id: existingProperty.id,
            _version: existingProperty._version,
            ...newProperty,
          },
        })
      );

      propertyID = existingProperty.id;
    } else {
      const returnedNewProperty = await API.graphql(
        graphqlOperation(createProperties, { input: newProperty })
      );
      propertyID = returnedNewProperty.data.createProperties.id;

      tenantIDs.map(async (item) => {
        await API.graphql(
          graphqlOperation(createTenants, {
            input: {
              propertiesID: propertyID,
              userID: item,
              active: true,
            },
          })
        );
      });
    }

    if (image) {
      const attachment = await addAttachmentProperty(image, propertyID);
    }

    setIsLoading(false);
    clearState();

    navigation.navigate("Properties");
  };

  if (isLoading) {
    return <ActivityIndicator size={"large"} color={"#512da8"} />;
  }

  // console.log("documents", documents);

  return (
    <View style={{ flexDirection: "column" }}>
      <FlatList
        keyboardShouldPersistTaps="always"
        ListHeaderComponent={
          <View nestedScrollEnabled={false} style={styles.container}>
            {existingProperty && (
              <Text
                style={{
                  paddingHorizontal: 12,
                  marginBottom: 10,
                  fontSize: 20,
                }}
              >
                {existingProperty?.title}, {existingProperty?.streetAddress},{" "}
                {existingProperty?.postcode}, {existingProperty?.state}{" "}
              </Text>
            )}
            <View style={styles.formField}>
              {/* {property&&(  
                <Text style={{paddingHorizontal:12, marginBottom:10, fontSize:20}}>{property?.title}, {property?.streetAddress}, {property?.postcode}, {property?.state} </Text>
            )}   */}

              <DropDownPicker
                placeholder="Select a user"
                items={userData.filter((k) => !tenantIDs.includes(k.value))}
                searchable={true}
                containerStyle={styles.dropdownContainer}
                style={styles.dropdown}
                itemStyle={styles.dropdownItem}
                dropDownStyle={styles.dropdown}
                value={userID}
                setValue={setUserID}
                open={isPropertyOpen}
                setOpen={togglePropertyDropdown}
                disabled={existingProperty ? true : false}
              />

              <Text
                style={{
                  paddingHorizontal: 12,
                  marginBottom: 10,
                  fontSize: 15,
                  marginTop: 20,
                  fontWeight: "600",
                }}
              >
                Property Type*:
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
                  <RadioButton value="Residential" />
                  <Text>Residential</Text>
                </View>
                <View
                  style={{
                    paddingHorizontal: 5,
                    flexDirection: "row",
                    alignItems: "center",
                  }}
                >
                  <RadioButton value="Commercial" />
                  <Text>Commercial</Text>
                </View>
                <View
                  style={{
                    paddingHorizontal: 5,
                    flexDirection: "row",
                    alignItems: "center",
                  }}
                >
                  <RadioButton value="Industrial" />
                  <Text>Industrial</Text>
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
                Property Status*:
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
                  <RadioButton value="OWNER-OCCUPPIED" />
                  <Text>Owner-occuppied</Text>
                </View>
                <View
                  style={{
                    paddingHorizontal: 5,
                    flexDirection: "row",
                    alignItems: "center",
                  }}
                >
                  <RadioButton value="TENANTED" />
                  <Text>Tenanted</Text>
                </View>
                <View
                  style={{
                    paddingHorizontal: 5,
                    flexDirection: "row",
                    alignItems: "center",
                  }}
                >
                  <RadioButton value="VACANT" />
                  <Text>Vacant</Text>
                </View>
              </RadioButton.Group>

              {status === "TENANTED" && (
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
                    items={userData.filter((k) => k.value !== userID)}
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

              <TextInput
                placeholder="Title*"
                value={title}
                onChangeText={(t) => setTitle(t)}
                style={styles.input}
              />

              <TextInput
                placeholder="Street Address*"
                value={streetAddress}
                onChangeText={(t) => setStreetAddress(t)}
                style={styles.input}
              />

              <TextInput
                placeholder="Postcode*"
                value={postcode}
                onChangeText={(t) => setPostcode(t)}
                style={styles.input}
              />
              <TextInput
                placeholder="City*"
                value={city}
                onChangeText={(t) => setCity(t)}
                style={styles.input}
              />

              <TextInput
                placeholder="State*"
                value={state}
                onChangeText={(t) => setState(t)}
                style={styles.input}
              />

              {image && (
                <List.Item
                  title={image.uri?.split("/").pop()}
                  left={(props) => <List.Icon {...props} icon="image" />}
                  right={(props) => (
                    <Pressable
                      onPress={() => {
                        setImage("");
                      }}
                    >
                      <List.Icon {...props} icon="delete" />
                    </Pressable>
                  )}
                />
              )}

              <Chip
                icon="upload"
                onPress={imagePicker}
                style={{ width: 200, alignSelf: "center", margin: 10 }}
              >
                Upload Image
              </Chip>

              <Button
                style={{ marginTop: 20, marginBottom: 10 }}
                buttonColor="#805158"
                icon="airplane"
                mode="contained"
                onPress={handleSubmit}
              >
                Submit
              </Button>

              {existingProperty && (
                <Button
                  buttonColor="#665a6f"
                  icon="delete"
                  mode="contained"
                  onPress={showDeleteConfirm}
                >
                  Delete Property
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
          </View>
        }
      />
    </View>
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
