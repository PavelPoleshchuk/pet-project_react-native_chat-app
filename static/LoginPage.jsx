import React, { useState } from "react";
import { Text, TextInput, View, Button } from "react-native";

export const LoginPage = ({ navigation }) => {
  const [text, setText] = useState("");
  return (
    <View style={{ padding: 10 }}>
      <TextInput
        style={{
          height: 40,
          borderBottomColor: "grey",
          borderBottomWidth: 2,
          marginBottom: 10,
          fontSize: 20,
        }}
        placeholder="Type here to enter login"
        onChangeText={(newText) => setText(newText)}
        defaultValue={text}
      />
      <Button
        title="Press me"
        onPress={() => {
          navigation.navigate("HomeScreen", {
            refreshInit: 0,
          });
        }}
      />
    </View>
  );
};
