import { configureStore } from "@reduxjs/toolkit";
import BookmarkListReducer from '../Features/BookmarkList/BookmarkListSlice';

export const store = configureStore({
  reducer: {
    BookmarkList: BookmarkListReducer,
  },
});
