import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import { HomeScreen } from "./HomeScreen";
import { PostScreen } from "./PostScreen";
import { PostEditScreen } from "./PostEditScreen";
import { PostAddScreen } from "./PostAddScreen ";
import { LoginPage } from "./LoginPage";
import { store } from "../core/reduxToolkit/store";
import { Provider } from "react-redux";

export type RootStackParamList = {
  LoginPage: undefined;
  HomeScreen: {
    refreshInit: number;
  };
  PostScreen: {
    id: string;
    title: string;
  };
  PostEditScreen: {
    id: string;
    title: string;
  };
  PostAddScreen: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

export const Navigation = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerStyle: {
              backgroundColor: "#f9832e",
            },
            headerTintColor: "#fff",
            headerTitleStyle: {
              fontWeight: "bold",
            },
          }}
        >
          <Stack.Screen
            name="LoginPage"
            component={LoginPage}
            options={{
              title: "Enter username and avatar Url",
            }}
          />
          <Stack.Screen
            name="HomeScreen"
            component={HomeScreen}
            options={{
              title: "All posts",
            }}
          />
          <Stack.Screen
            name="PostScreen"
            component={PostScreen}
            options={{
              title: "Post",
            }}
          />
          <Stack.Screen
            name="PostEditScreen"
            component={PostEditScreen}
            options={{
              title: "Edit post",
            }}
          />
          <Stack.Screen
            name="PostAddScreen"
            component={PostAddScreen}
            options={{
              title: "Add post",
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
};
