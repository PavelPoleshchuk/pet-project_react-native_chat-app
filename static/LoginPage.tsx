import React from "react";
import { Alert, TextInput, View, Button, StyleSheet, Text } from "react-native";
import { styled } from "styled-components/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "./Navigation";
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from "../core/reduxToolkit/store";
import { setName, setUrl } from "../core/reduxToolkit/slices";

const PostImage = styled.Image`
  width: 60px;
  height: 60px;
  border-radius: 15px;
  margin-right: 15px;
`;
interface IProps {
  navigation: NativeStackNavigationProp<RootStackParamList, "LoginPage">;
  }

  
export const LoginPage = ({ navigation }:IProps) => {
  const { name, url } = useSelector((state: RootState) => state.reduxState);
  const dispatch = useDispatch();

  const setLogin = () => {
    if (name.length < 3 || url.length == 0) {
      Alert.alert(
        "Warning!",
        "Please add Name(at least 3 letters) and URL. If you enter only the name, the default URL will be used"
      );
    } else {
      navigation.navigate("HomeScreen", {
        refreshInit: 0,
      });
    }
  };

  return (
    <View style={styles.body}>
      <TextInput
        style={styles.input}
        placeholder="Type here to enter Name"
        onChangeText={(value) => dispatch(setName(value))}
      />
      <TextInput
        style={styles.input}
        placeholder="Type here to enter photo URL string"
        onChangeText={(value) => dispatch(setUrl(value))}
        defaultValue={url}
      />
      <Button title="Save Name and avatar URL" onPress={setLogin} />
      <Text style={styles.text}>{`current username: "${name}"`}</Text>
      <Text style={styles.text}>{`current avatar:`}</Text>
      <PostImage source={{ uri: url }} />
    </View>
  );
};

const styles = StyleSheet.create({
  body: {
    padding: 10,
  },
  text: {
    marginTop: 10,
  },

  input: {
    height: 40,
    borderBottomColor: "grey",
    borderBottomWidth: 2,
    marginBottom: 10,
    fontSize: 15,
  },
});
