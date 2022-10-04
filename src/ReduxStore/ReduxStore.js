import { configureStore } from "@reduxjs/toolkit";
import BookmarkListReducer from "../Features/BookmarkList/BookmarkListSlice";
import AuthReducer from "../Features/Auth/AuthSlice";
export const store = configureStore({
  reducer: {
    BookmarkList: BookmarkListReducer,
    Auth: AuthReducer,
  },
});
