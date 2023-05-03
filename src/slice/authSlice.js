import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLoading: false,
  loggedIN: false,
  user: null,
  error: null,
};

export const authSlice = createSlice({
  name: "auth",
  initialState: initialState,
  reducers: {
    // LOGIN
    loginUserStart: (state) => {
      state.isLoading = true;
    },
    loginUserSuccess: (state) => {},
    loginUserFailure: (state) => {},
    // REGISTER
    registerUserStart: (state) => {
      state.isLoading = true;
    },
    registerUserSuccess: (state) => {
      state.isLoading = false;
      state.loggedIN = true;
      state.error = null;
    },
    registerUserFailure: (state) => {
      state.isLoading = false;
      state.loggedIN = false;
      state.error = "xato ketdi";
    },
  },
});

export const {
  loginUserStart,
  registerUserStart,
  registerUserSuccess,
  registerUserFailure,
} = authSlice.actions;

export default authSlice.reducer;
