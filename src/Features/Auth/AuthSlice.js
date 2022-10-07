import { createSlice } from "@reduxjs/toolkit";
import Cookies from "js-cookie";

const initialState = {
  user: Cookies.get("user") ? JSON.parse(Cookies.get("user")) : null,
};

export const AuthSlice = createSlice({
  name: "Auth",
  initialState,
  reducers: {
    login: (state, actions) => {
      state.user = actions.payload;
      Cookies.set("user", JSON.stringify(state.user));
    },
  },
});

export const { login, logout } = AuthSlice.actions;

export default AuthSlice.reducer;
