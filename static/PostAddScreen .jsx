import React, { useState } from "react";
import { View, StatusBar, Button, Alert, Text } from "react-native";
import styled from "styled-components/native";
import { Spinner } from "../shared/Spinner";
import { addPost } from "../core/addPost";
import { getDateInIsoString } from "../tools/getDateInIsoString";
import { useSelector } from "react-redux";

const AddTextInput = styled.TextInput`
  height: 100px;
  border-bottom-color: grey;
  border-bottom-width: 2px;
  font-size: 20px;
`;

export function PostAddScreen({ navigation }) {
  const { name, url } = useSelector((state) => state.userReducer);
  const [isLoading, setIsLoading] = useState(false);

  const [text, setText] = useState("");
  const body = {
    title: name,
    imageUrl: url,
    text,
    date: getDateInIsoString(),
  };

  if (isLoading) {
    return <Spinner />;
  }
  return (
    <View style={{ padding: 10 }}>
      <AddTextInput
        placeholder="Please enter text"
        multiline={true}
        onChangeText={(newText) => setText(newText)}
      />
      <Text>{`Author: ${name}`}</Text>
      <Button
        title="Add post"
        onPress={() => {
          if (text.length < 2) {
            Alert.alert("Oops..", "Please enter Text(min 2 letters)");
            return;
          }
          addPost(setIsLoading, body);
          navigation.navigate("HomeScreen", {
            refreshInit: Date.now(),
          });
        }}
      />
      <StatusBar style="auto" />
    </View>
  );
}
