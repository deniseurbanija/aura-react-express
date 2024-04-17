import { configureStore } from "@reduxjs/toolkit";
import { loginSlice } from "./reducer";
const store = configureStore({
  reducer: loginSlice.reducer,
});

export default store;
