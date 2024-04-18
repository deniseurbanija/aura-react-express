import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  userActive: {},
  userAppointments: [],
};

export const userSlice = createSlice({
  name: "userData",
  initialState: initialState,
  reducers: {
    setUserActive: (state, action) => {
      state.userActive = action.payload;
    },
    setUserAppointments: (state, action) => {
      state.userAppointments = action.payload;
    },
  },
});

export const { setUserActive, setUserAppointments } = userSlice.actions;
