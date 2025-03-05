import { createSlice } from "@reduxjs/toolkit";
import {
  loginThunk,
  logoutThunk,
  refreshUser,
  registerThunk,
} from "./operation";

const initialState = {
  user: {
    name: null,
    email: null,
  },
  token: null,
  isLoggedIn: false,
  isRefreshing: false,
};

const slice = createSlice({
  name: "auth",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(registerThunk.fulfilled, (state, action) => {
        state.user = action.payload.user;
        state.token = action.payload.token;
        state.isLoggedIn = true;
      })
      .addCase(loginThunk.fulfilled, (state, action) => {
        state.token = action.payload.token;
        state.user = action.payload.user;
        state.isLoggedIn = true;
      })
      .addCase(loginThunk.pending, (state) => {
        state.isLoggedIn = true;
      })
      .addCase(loginThunk.rejected, (state) => {
        state.isLoggedIn = true;
      })
      .addCase(refreshUser.fulfilled, (state, action) => {
        state.user = action.payload;
        state.isLoggedIn = true;
        state.isRefreshing = false;
      })
      .addCase(refreshUser.pending, (state) => {
        state.isRefreshing = true;
      })
      .addCase(refreshUser.rejected, (state) => {
        state.isRefreshing = false;
      })
      .addCase(logoutThunk.fulfilled, () => initialState);
  },
});
export const authReducer = slice.reducer;
