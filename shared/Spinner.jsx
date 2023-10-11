import React from "react";
import { View, Text, ActivityIndicator } from "react-native";

export function Spinner() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <ActivityIndicator size="large" />
      <Text
        style={{
          marginTop: 20,
        }}
      >
        Loading...
      </Text>
    </View>
  );
}
