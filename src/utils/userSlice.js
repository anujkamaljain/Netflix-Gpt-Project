import { createSlice } from "@reduxjs/toolkit";
import { act } from "react";

const userSlice = createSlice({
  name: "user",
  initialState: {
    API_KEY: null,
  },
  reducers: {
    addUser: (state, action) => {
      return action.payload;
    },
    addAPI_KEY: (state, action) => {
      state.API_KEY = action.payload;
    },
    removeAPI_KEY: (state,action) => {
      state.API_KEY = null;
    },
    removeUser: (state, action) => {
      state = null;
      action.payload = null;
      return null;
    },
  },
});

export const { addUser, removeUser, addAPI_KEY, removeAPI_KEY } = userSlice.actions;

export default userSlice.reducer;
