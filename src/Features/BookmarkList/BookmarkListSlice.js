import { createSlice } from "@reduxjs/toolkit";
import Cookies from "js-cookie";

const initialState = {
  bookmarks: Cookies.get("Bookmarks")
    ? JSON.parse(Cookies.get("Bookmarks"))
    : [],
};

export const BookmarkListSlice = createSlice({
  name: "BookmarkList",
  initialState,
  reducers: {
    emptyList: (state) => {
      state.bookmarks = [];
    },
    append: (state, action) => {
      state.bookmarks = state.bookmarks.concat(action.payload);
    },
    remove: (state, action) => {
      state.bookmarks = state.bookmarks.filter(
        (item) => item.id !== action.payload
      );
    },
  },
});

export const { append, emptyList, remove } = BookmarkListSlice.actions;

export default BookmarkListSlice.reducer;
