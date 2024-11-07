import { createSlice } from "@reduxjs/toolkit";

import { registerDB, loginDB, logoutDB } from "./operations";

const initialState = {
  user: {
    id: "",
    login: null,
    email: null,
  },
  isLogged: false,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setUserInfo(state, action) {
      state.user = action.payload;
      state.isLogged = true;
    },
    clearUserInfo(state) {
      state.userInfo = null;
      state.isLogged = false;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(registerDB.fulfilled, (state, action) => {
        state.isLogged = true;
        state.user = action.payload;
        state.error = null;
      })
      .addCase(registerDB.rejected, (state, action) => {
        state.isLogged = false;
        state.error = action.payload;
      })
      .addCase(loginDB.fulfilled, (state, action) => {
        state.isLogged = true;
        state.user = action.payload;
        state.error = null;
      })
      .addCase(loginDB.rejected, (state, action) => {
        state.isLogged = false;
        state.error = action.payload;
      })
      .addCase(logoutDB.fulfilled, (state) => {
        state.user = { login: null, email: null, userId: "" };
        state.isLogged = false;
        state.error = null;
      });
  },
});

export const { setUserInfo, clearUserInfo } = authSlice.actions;

export const authReducer = authSlice.reducer;
