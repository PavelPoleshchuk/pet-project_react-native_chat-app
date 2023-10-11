export function editPost(setIsLoading, id, body) {
  setIsLoading(true);
  fetch(`https://651eed7444a3a8aa476936f2.mockapi.io/posts/${id}`, {
    method: "PATCH",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(body),
  })
    .then((res) => res.json())
    // .then((data) => setState(data))
    .catch(() => Alert.alert("Oops..", "Fetch function editPost error"))
    .finally(() => setIsLoading(false));
}
