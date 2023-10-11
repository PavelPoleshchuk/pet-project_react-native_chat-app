import { BASE_URL } from "./addPost";
import { Alert } from "react-native";

export function editPost(setIsLoading, id, body) {
  setIsLoading(true);
  fetch(`${BASE_URL}/${id}`, {
    method: "PATCH",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(body),
  })
    .catch(() => Alert.alert("Oops..", "Fetch function editPost error"))
    .finally(() => setIsLoading(false));
}
