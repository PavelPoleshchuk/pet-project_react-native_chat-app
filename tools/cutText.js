export const cutText = (str, strLength) => {
  if (str.length >= strLength) {
    return str.substring(0, strLength) + "...";
  }

  return str;
};
