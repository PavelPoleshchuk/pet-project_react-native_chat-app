import { BASE_URL } from "./addPost";
import { Alert } from "react-native";


export function deletePost(setIsLoading, id, setState) {
  setIsLoading(true);
  fetch(`${BASE_URL}/${id}`, {
    method: "DELETE",
  })
    .then((res) => res.json())
    .then((data) => setState(data))
    .catch(() => Alert.alert("Oops..", "Fetch deletePost error"))
    .finally(() => setIsLoading(false));
}
