import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  bookmarks: [],
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

export const { append, emptyList,remove } = BookmarkListSlice.actions;

export default BookmarkListSlice.reducer;
