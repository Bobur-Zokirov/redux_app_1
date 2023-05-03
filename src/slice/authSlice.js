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
    signUserStart: (state) => {
      state.isLoading = true;
      state.loggedIN = false;
      state.user = null;
      state.error = null;
    },
    signUserSuccess: (state, action) => {
      state.isLoading = false;
      state.loggedIN = true;
      state.user = action.payload;
      state.error = null;
    },
    signUserFailure: (state, action) => {
      state.isLoading = false;
      state.loggedIN = false;
      state.user = null;
      state.error = action.payload;
    },
  },
});

export const { signUserStart, signUserSuccess, signUserFailure } =
  authSlice.actions;

export default authSlice.reducer;
