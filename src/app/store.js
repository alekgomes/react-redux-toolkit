import { configureStore } from "@reduxjs/toolkit";
import userSlice from "../features/usersSlice";

export const store = configureStore({
  reducer: {
    users: userSlice,
  },
});
