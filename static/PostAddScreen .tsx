import React, { useState } from "react";
import { View, StatusBar, Button, Alert, Text } from "react-native";
import styled from "styled-components/native";
import { Spinner } from "../shared/Spinner";
import { addPost } from "../core/addPost";
import { getDateInIsoString } from "../tools/getDateInIsoString";
import { useSelector } from "react-redux";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "./Navigation";
import { RootState } from "../core/reduxToolkit/store";

const AddTextInput = styled.TextInput`
  height: 100px;
  border-bottom-color: grey;
  border-bottom-width: 2px;
  font-size: 20px;
`;

interface IProps {
  navigation: NativeStackNavigationProp<RootStackParamList, "PostAddScreen">;
}
export function PostAddScreen({ navigation }:IProps) {
  const { name, url } = useSelector((state: RootState) => state.reduxState);
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
      <StatusBar />
    </View>
  );
}
