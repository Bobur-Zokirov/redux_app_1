import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../slice/authSlice";
import articleReducer from "../slice/articleSlice";

export default configureStore({
  reducer: {
    auth: authReducer,
    article: articleReducer,
  },
  devTools: process.env.NODE_ENV !== "production",
});
