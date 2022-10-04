import { createSlice } from "@reduxjs/toolkit";
import Cookies from "js-cookie";

const initialState = {
  user: null,
};

export const AuthSlice = createSlice({
  name: "Auth",
  initialState,
  reducers: {
    login: (state, action) => {
      state.bookmarks = action.payload;
    },
  },
});

export const { login } = AuthSlice.actions;

export default AuthSlice.reducer;
