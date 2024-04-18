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
    addUserAppointment: (state, action) => {
      state.userAppointments.push(action.payload);
    },
  },
});

export const { setUserActive, setUserAppointments, addUserAppointment } = userSlice.actions;
