import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import { HomeScreen } from "./HomeScreen";
import { PostScreen } from "./PostScreen";
import { PostEditScreen } from "./PostEditScreen";
import { PostAddScreen } from "./PostAddScreen ";
import { LoginPage } from "./LoginPage";
import { Provider } from 'react-redux';
import {Store} from "../core/redux/store"


const Stack = createNativeStackNavigator();

export const Navigation = () => {
  return (
    <Provider store={Store}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="LoginPage"
            component={LoginPage}
            options={{ title: "Enter username and avatar Url" }}
          />
          <Stack.Screen
            name="HomeScreen"
            component={HomeScreen}
            options={{ title: "All posts" }}
          />
          <Stack.Screen
            name="PostScreen"
            component={PostScreen}
            options={{ title: "Post" }}
          />
          <Stack.Screen
            name="PostEditScreen"
            component={PostEditScreen}
            options={{ title: "Edit post" }}
          />
          <Stack.Screen
            name="PostAddScreen"
            component={PostAddScreen}
            options={{ title: "Add post" }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
};
