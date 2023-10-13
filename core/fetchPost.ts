import { Alert } from "react-native";
import { BASE_URL } from "./addPost";
import { IItemData } from "../static/HomeScreen";

export function fetchPost(
  setIsLoading: React.Dispatch<React.SetStateAction<boolean>>,
  id: string,
  setState: (data:IItemData)=>void
) {
  setIsLoading(true);
  fetch(`${BASE_URL}/${id}`)
    .then((res) => res.json())
    .then((data:IItemData) => setState(data))
    .catch(() => Alert.alert("Oops", "fetchPost error"))
    .finally(() => setIsLoading(false));
}
