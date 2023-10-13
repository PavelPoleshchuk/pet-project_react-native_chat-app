import { Alert } from "react-native";
import { BASE_URL } from "./addPost";
import { IItemData } from "../static/HomeScreen";

export function fetchPosts(
  setIsLoading: React.Dispatch<React.SetStateAction<boolean>>,
  setPosts: React.Dispatch<React.SetStateAction<IItemData[]>>
) {
  setIsLoading(true);
  fetch(BASE_URL)
    .then((res) => res.json())
    .then((data) => setPosts(data))
    .catch(() => Alert.alert("Oops..", "FetchPosts error"))
    .finally(() => setIsLoading(false));
}
