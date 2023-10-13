export const BASE_URL = "https://651eed7444a3a8aa476936f2.mockapi.io/posts";
import { Alert } from "react-native";

export type IFetchBody = {
  text: string;
  title: string;
  imageUrl: string;
  date: string;
};

export function addPost(
  setIsLoading: React.Dispatch<React.SetStateAction<boolean>>,
  body: IFetchBody
) {
  setIsLoading(true);
  fetch(BASE_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(body),
  })
    .catch(() => Alert.alert("Oops..", "Fetch addPost error"))
    .finally(() => setIsLoading(false));
}
