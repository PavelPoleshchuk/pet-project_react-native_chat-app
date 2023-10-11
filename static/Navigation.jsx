import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import { HomeScreen } from "./HomeScreen";
import { PostScreen } from "./PostScreen";
import { PostEditScreen } from "./PostEditScreen";
import { PostAddScreen } from "./PostAddScreen ";
import { LoginPage } from "./LoginPage";

const Stack = createNativeStackNavigator();

export const Navigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="LoginPage"
          component={LoginPage}
          options={{ title: "Enter login" }}
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
  );
};
