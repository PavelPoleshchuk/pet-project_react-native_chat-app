import React, { useState, useEffect } from "react";
import { View, StatusBar, Button, TextInput } from "react-native";
import { Spinner } from "../shared/Spinner";
import { editPost } from "../core/editPost";
import { getDateInIsoString } from "../tools/getDateInIsoString";

export function PostEditScreen({ route, navigation }) {
  const [isLoading, setIsLoading] = useState(false);
  const [state, setState] = useState("");
  const { id, title } = route.params;

  useEffect(() => {
    navigation.setOptions({ title: `Edit post: "${title}"` });
  }, []);

  function fetchPost() {
    setIsLoading(true);
    fetch(`https://651eed7444a3a8aa476936f2.mockapi.io/posts/${id}`)
      .then((res) => res.json())
      .then((data) => setState(data.text))
      .catch(() => Alert.alert("Oops", "Fetch PostScreen error"))
      .finally(() => setIsLoading(false));
  }

  useEffect(fetchPost, []);

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
        value={state}
        onChangeText={(newText) => setState(newText)}
      />

      <Button
        title="Save post"
        onPress={() => {
          editPost(setIsLoading, id, {
            text: state,
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
