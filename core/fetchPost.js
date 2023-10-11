import { Alert } from "react-native";
import { BASE_URL } from "./addPost";

export function fetchPost(setIsLoading, id, setState) {
  setIsLoading(true);
  fetch(`${BASE_URL}/${id}`)
    .then((res) => res.json())
    .then((data) => setState(data))
    .catch(() => Alert.alert("Oops", "Fetch PostScreen error"))
    .finally(() => setIsLoading(false));
}
