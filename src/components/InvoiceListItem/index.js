import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { FontAwesome5 } from "@expo/vector-icons";

const InvoiceListItem = ({ invoice }) => {
  return (
    <Pressable onPress={onPress} android_ripple={{ radius: 200 }}>
      <List.Item
        title={invoice.title}
        description={invoice.status}
        left={() => (
          <List.Icon
            icon={({ color }) => <FontAwesome5 name="document" color={color} />}
          />
        )}
        style={{
          paddingTop: 50,
          paddingLeft: 10,
          borderBottomColor: "#cccccc",
          borderBottomWidth: 1,
        }}
        right={() => (
          <View style={{ justifyContent: "center" }}>
            <Text>{invoice.createdAt}</Text>
          </View>
        )}
      />
    </Pressable>
  );
};

export default InvoiceListItem;

const styles = StyleSheet.create({});
