export const BASE_URL = "https://651eed7444a3a8aa476936f2.mockapi.io/posts";
import { Alert } from "react-native";


export function addPost(setIsLoading, body) {
  setIsLoading(true);
  fetch(BASE_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(body),
  })
    .catch(() => Alert.alert("Oops..", "Fetch addPost error"))
    .finally(() => setIsLoading(false));
}
