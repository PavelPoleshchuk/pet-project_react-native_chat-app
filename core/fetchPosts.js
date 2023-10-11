import {Alert} from 'react-native'
import { BASE_URL } from "./addPost";

export function fetchPosts(setIsLoading, setPosts) {
  setIsLoading(true);
  fetch(BASE_URL)
    .then((res) => res.json())
    .then((data) => setPosts(data))
    .catch(() => Alert.alert("Oops..", "Fetch function HomeScreen error"))
    .finally(() => setIsLoading(false));
}