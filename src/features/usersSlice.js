import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

const userSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    addUser(state, action) {
      return [...state, action.payload];
    },
  },
});

export const { addUser } = userSlice.actions;
export default userSlice.reducer;
