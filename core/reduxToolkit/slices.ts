import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export const DEFAULT_AVATAR_URL="https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/1002.jpg"

const dataSlice = createSlice({
  name: "reduxData",
  initialState: {
    name: "",
    url: DEFAULT_AVATAR_URL,
  },

  reducers: {
    setName(state, action: PayloadAction<string>) {
      state.name = action.payload;
    },
    setUrl(state, action: PayloadAction<string>) {
      state.url = action.payload;
    },
  },
});

export const { setName, setUrl } = dataSlice.actions;
export default dataSlice.reducer;
