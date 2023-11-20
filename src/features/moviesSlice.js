import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

const moviesSlice = createSlice({
  name: "movies",
  initialState,
  reducers: {
    addMovie(state, action) {
      return [...state, action.payload];
    },
  },
});

export const { addMovie } = moviesSlice.actions;
export default moviesSlice.reducer;
