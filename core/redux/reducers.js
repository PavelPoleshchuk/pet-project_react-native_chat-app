import { SET_USER_NAME, SET_USER_URL } from "./actions";

const initialState = {
  name: "",
  url: "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/588.jpg",
};

function userReducer(state = initialState, action) {
  switch (action.type) {
    case SET_USER_NAME:
      return { ...state, name: action.payload };
    case SET_USER_URL:
      return { ...state, url: action.payload };
    default:
      return state;
  }
}

export default userReducer;
