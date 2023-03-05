import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
  name: "user",
  initialState: {
    userData: {
      full_name: null,
      user_name: null,
      email_address: null,
      about_yourself: null,
      contact: null,
      account_type: null,
      gender: null,
    },
  },
  reducers: {
    login: (state, action) => {
      state.userData = action.payload;
    },
    logout: (state) => {
      state.user = null;
    },
  },
});

export const { login, logout } = userSlice.actions;

export const selectUser = (state) => state.user.user;

export default userSlice.reducer;
