import React, { useState, useEffect } from "react";
import { View, StatusBar, Button, Alert } from "react-native";
import styled from "styled-components/native";
import { Spinner } from "../shared/Spinner";
import { deletePost } from "../core/deletePost";
import { fetchPost } from "../core/fetchPost";
import { useSelector } from "react-redux";

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
  const { name, url } = useSelector((state) => state.userReducer);
  const [isLoading, setIsLoading] = useState(false);
  const [state, setState] = useState({});
  const { id, title } = route.params;

  useEffect(() => {
    navigation.setOptions({ title });
  }, []);

  useEffect(() => fetchPost(setIsLoading, id, setState), []);

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
            if (name !== title) {
              Alert.alert(
                "Oops..",
                "You cannot delete this post because you are not the author."
              );
              return;
            }
            deletePost(setIsLoading, id, setState);
            navigation.navigate("HomeScreen", {
              refreshInit: Date.now(),
            });
          }}
        />
        <Button
          title="Edit post"
          onPress={() => {
            if (name !== title) {
              Alert.alert(
                "Oops..",
                "You cannot edit this post because you are not the author."
              );
              return;
            }
            navigation.navigate("PostEditScreen", { id, title });
          }}
        />
      </View>

      <StatusBar style="auto" />
    </View>
  );
}
