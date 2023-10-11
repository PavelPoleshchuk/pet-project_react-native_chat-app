import React, { useState, useEffect } from "react";
import { View, StatusBar, Button, TextInput } from "react-native";
import { Spinner } from "../shared/Spinner";
import { editPost } from "../core/editPost";
import { fetchPost } from "../core/fetchPost";
import { getDateInIsoString } from "../tools/getDateInIsoString";

export function PostEditScreen({ route, navigation }) {
  const [isLoading, setIsLoading] = useState(false);
  const [text, setText] = useState("");
  const { id, title } = route.params;

  useEffect(() => {
    navigation.setOptions({ title: `Edit post: "${title}"` });
  }, []);

  useEffect(
    () => fetchPost(setIsLoading, id, (data) => setText(data.text)),
    []
  );

  if (isLoading) {
    return <Spinner />;
  }
  return (
    <View style={{ padding: 10 }}>
      <TextInput
        style={{
          borderColor: "grey",
          borderWidth: 2,
          fontSize: 20,
          padding: 10,
        }}
        multiline={true}
        value={String(text)}
        onChangeText={(value) => setText(value)}
      />

      <Button
        title="Save post"
        onPress={() => {
          editPost(setIsLoading, id, {
            text: text,
            date: getDateInIsoString(),
          });
          navigation.navigate("HomeScreen", {
            refreshInit: Date.now(),
          });
        }}
      />
      <StatusBar style="auto" />
    </View>
  );
}
