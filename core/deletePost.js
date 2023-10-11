export function deletePost(setIsLoading, id, setState) {
  setIsLoading(true);
  fetch(`https://651eed7444a3a8aa476936f2.mockapi.io/posts/${id}`, {
    method: "DELETE",
  })
    .then((res) => res.json())
    .then((data) => setState(data))
    .catch(() => Alert.alert("Oops..", "Fetch PostScreen error"))
    .finally(() => setIsLoading(false));
}