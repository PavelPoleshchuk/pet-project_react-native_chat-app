export const cutText = (str:string, strLength:number) => {
  if (str.length >= strLength) {
    return str.substring(0, strLength) + "...";
  }

  return str;
};
