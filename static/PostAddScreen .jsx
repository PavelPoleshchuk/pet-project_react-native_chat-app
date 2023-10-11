import React, { useState, useEffect } from "react";
import { View, StatusBar, Button, Alert } from "react-native";
import styled from "styled-components/native";
import { Spinner } from "../shared/Spinner";
import { addPost } from "../core/addPost";
import { getDateInIsoString } from "../tools/getDateInIsoString";

const AddTextInput = styled.TextInput`
  height: 60px;
  border-bottom-color: grey;
  border-bottom-width: 2px;
  margin-bottom: 10px;
  font-size: 20px;
`;

export function PostAddScreen({ navigation }) {
  const [isLoading, setIsLoading] = useState(false);
  const [title, setTitle] = useState("");
  const [imageUrl, setImageUrl] = useState(
    "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/588.jpg"
  );
  const [text, setText] = useState("");
  const body = { title, imageUrl, text, date: getDateInIsoString() };

  if (isLoading) {
    return <Spinner />;
  }
  return (
    <View style={{ padding: 10 }}>
      <AddTextInput
        placeholder="Please enter title"
        onChangeText={(newText) => setTitle(newText)}
        defaultValue={title}
      />
      <AddTextInput
        placeholder="Please enter text"
        multiline={true}
        onChangeText={(newText) => setText(newText)}
        defaultValue={text}
      />
      <AddTextInput
        style={{ height: 150 }}
        placeholder="Please enter a link to the image. For example - https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/588.jpg"
        multiline={true}
        onChangeText={(newText) => setImageUrl(newText)}
        defaultValue={""}
      />
      <Button
        title="Add post"
        onPress={() => {
          if (!title && !text) {
            Alert.alert("Oops..", "Please enter Title and Text");
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
