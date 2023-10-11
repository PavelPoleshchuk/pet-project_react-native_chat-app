import React, { useEffect, useState } from "react";
import {
  StatusBar,
  View,
  Alert,
  FlatList,
  RefreshControl,
  TouchableOpacity,
} from "react-native";
import { Post } from "../shared/Post";
import { Spinner } from "../shared/Spinner";
import styled from "styled-components/native";
import { Ionicons } from "@expo/vector-icons";

const PlusButton = styled.TouchableOpacity`
  position: absolute;
  bottom: 25px;
  right: 25px;
  width: 70px;
  height: 70px;
  border-radius: 50px;
  justify-content: center;
  align-items: center;
  background-color: #3b8ad5;
  opacity: 0.7;
`;

export function HomeScreen({ route, navigation }) {
  const [rerender, setRerender] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const [posts, setPosts] = useState([]);
  const { refreshInit } = route.params;

  useEffect(() => setRerender(refreshInit), [refreshInit]);

  function fetchPosts() {
    setIsLoading(true);
    fetch("https://651eed7444a3a8aa476936f2.mockapi.io/posts")
      .then((res) => res.json())
      .then((data) => setPosts(data))
      .catch(() => Alert.alert("Oops..", "Fetch function HomeScreen error"))
      .finally(() => setIsLoading(false));
  }
  useEffect(fetchPosts, [rerender]);

  if (isLoading) {
    return <Spinner />;
  }
  return (
    <View style={{flex: 1}}>
      <FlatList
        
        refreshControl={
          <RefreshControl refreshing={isLoading} onRefresh={fetchPosts} />
        }
        data={posts}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() => {
              navigation.navigate("PostScreen", {
                id: item.id,
                title: item.title,
              });
            }}
          >
            <Post
              text={item.text}
              imageUrl={item.imageUrl}
              date={item.date.slice(0, 10) + " " + item.date.slice(11, 16)}
              author={item.title}
            />
          </TouchableOpacity>
        )}
        keyExtractor={(item) => item.id}
      />
      <PlusButton
        onPress={() => {
          navigation.navigate("PostAddScreen");
        }}
      >
        <Ionicons name="ios-add" size={40} color="white" />
      </PlusButton>
      <StatusBar style="auto" />
    </View>
  );
}
