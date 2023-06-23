import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { User } from "./types";

export const name = "@user";

export const initialState = {
  user: {
    username: "",
  },
};

interface UserState {
  user: User;
}

const user = createSlice({
  name,
  initialState,
  reducers: {
    setUser: (state: UserState, action: PayloadAction<User>) => {
      state.user = action.payload;
    },
  },
});

export const { setUser } = user.actions;

export default user.reducer;
