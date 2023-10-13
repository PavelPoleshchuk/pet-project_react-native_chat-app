import React, { useEffect, useState } from "react";
import {
  StatusBar,
  View,
  FlatList,
  RefreshControl,
  TouchableOpacity,
} from "react-native";
import { Post } from "../shared/Post";
import { Spinner } from "../shared/Spinner";
import styled from "styled-components/native";
import { Ionicons } from "@expo/vector-icons";
import { fetchPosts } from "../core/fetchPosts";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "./Navigation";

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
export interface IItemData {
  date: string;
  title: string;
  imageUrl: string;
  text: string;
  id: string;
}
interface IProps {
  route: {params:{refreshInit:number}};
  navigation: NativeStackNavigationProp<RootStackParamList, "HomeScreen">;
}

export function HomeScreen({ route, navigation }: IProps) {
  const [rerender, setRerender] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const [posts, setPosts] = useState<IItemData[]>([]);
  const { refreshInit } = route.params;

  useEffect(() => setRerender(refreshInit), [refreshInit]);

  useEffect(() => fetchPosts(setIsLoading, setPosts), [rerender]);

  if (isLoading) {
    return <Spinner />;
  }
  return (
    <View style={{ flex: 1 }}>
      <FlatList
        refreshControl={
          <RefreshControl
            refreshing={isLoading}
            onRefresh={() => fetchPosts(setIsLoading, setPosts)}
          />
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
      <StatusBar/>
    </View>
  );
}
