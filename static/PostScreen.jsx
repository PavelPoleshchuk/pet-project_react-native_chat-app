import React, { useState, useEffect } from "react";
import { View, StatusBar, Button } from "react-native";
import styled from "styled-components/native";
import { Spinner } from "../shared/Spinner";
import { deletePost } from "../core/deletePost";

const PostImage = styled.Image`
  border-radius: 10px;
  width: 100%;
  height: 250px;
  margin-bottom: 10px;
`;
const PostText = styled.Text`
  padding: 15px;
  border-radius: 10px;
  font-size: 18px;
  line-height: 24px;
  border-width: 1px;
  border-color: gray;
  margin-bottom: 10px;
`;

export function PostScreen({ route, navigation }) {
  const [isLoading, setIsLoading] = useState(false);
  const [state, setState] = useState({});
  const { id, title, refreshInit } = route.params;

  useEffect(() => {
    navigation.setOptions({ title });
  }, []);

  function fetchPost() {
    setIsLoading(true);
    fetch(`https://651eed7444a3a8aa476936f2.mockapi.io/posts/${id}`)
      .then((res) => res.json())
      .then((data) => setState(data))
      .catch(() => Alert.alert("Oops", "Fetch PostScreen error"))
      .finally(() => setIsLoading(false));
  }

  useEffect(fetchPost, []);

  if (isLoading) {
    return <Spinner />;
  }
  return (
    <View style={{ padding: 10 }}>
      <PostImage
        source={{
          uri: state.imageUrl,
        }}
      />
      <PostText>{state.text}</PostText>
      <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
        <Button
          title="Delete post"
          onPress={() => {
            deletePost(setIsLoading, id, setState);
            navigation.navigate("HomeScreen");
          }}
        />
        <Button
          title="Edit post"
          onPress={() => {
            navigation.navigate("PostEditScreen", { id, title });
          }}
        />
      </View>

      <StatusBar style="auto" />
    </View>
  );
}
