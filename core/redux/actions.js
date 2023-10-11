export const SET_USER_NAME = "SET_USER_NAME";
export const SET_USER_URL = "SET_USER_URL";

export const setName = (name) => {
  return {
    type: SET_USER_NAME,
    payload: name,
  };
};

export const setUrl = (url) => {
  return {
    type: SET_USER_URL,
    payload: url,
  };
};
