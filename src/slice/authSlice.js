import { createSlice } from "@reduxjs/toolkit";
import { setItem } from "../helpers/persistence-storage";

const initialState = {
  isLoading: false,
  loggedIn: false,
  user: null,
  error: null,
};

export const authSlice = createSlice({
  name: "auth",
  initialState: initialState,
  reducers: {
    signUserStart: (state) => {
      state.isLoading = true;
      state.loggedIn = false;
      state.user = null;
      state.error = null;
    },
    signUserSuccess: (state, action) => {
      state.isLoading = false;
      state.loggedIn = true;
      state.user = action.payload;
      setItem("token", action.payload.token);
      state.error = null;
    },
    signUserFailure: (state, action) => {
      state.isLoading = false;
      state.loggedIn = false;
      state.user = null;
      state.error = action.payload;
    },
    logoutUser: (state) => {
      state.user = null;
      state.loggedIn = false;
    },
  },
});

export const { signUserStart, signUserSuccess, signUserFailure, logoutUser } =
  authSlice.actions;

export default authSlice.reducer;
