import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: {
    username: "",
    password: "",
  },
  userAppointments: [],
};

export const loginSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    login: (state, action) => {
      action.payload.username = state.user.username;
      action.payload.password = state.user.password;
    },
  },
});

export const { login } = loginSlice.actions;
