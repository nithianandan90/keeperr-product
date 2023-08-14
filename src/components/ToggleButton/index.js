import React, { useState } from "react";
import { Text } from "react-native";
import Toggle from "react-native-toggle-element";

const ToggleButtonExample = ({ toggleValue, setToggleValue }) => {
  return (
    <Toggle
      value={toggleValue}
      onPress={(newState) => setToggleValue(newState)}
      leftComponent={
        <Text style={{ fontSize: 12, fontWeight: 600, color: "white" }}>
          Owner
        </Text>
      }
      rightComponent={
        <Text style={{ fontSize: 12, fontWeight: 600, color: "white" }}>
          Tenant
        </Text>
      }
      trackBar={{
        width: 120,
      }}
      trackBarStyle={{
        backgroundColor: "#CDCCCD",
        height: 40,
      }}
      thumbStyle={{
        backgroundColor: "#512da8",
        color: "black",
        height: 40,
      }}
      containerStyle={{
        marginTop: 20,
      }}
    />
  );
};

export default ToggleButtonExample;
