import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface UserState {
  user: null | {
    uid: string;
    email: string;
    displayName: string;
  };
}

const initialState: UserState = {
  user: null,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    addUser: (state, action: PayloadAction<UserState["user"]>) => {
      state.user = action.payload;
    },
    setUser: (state, action: PayloadAction<UserState["user"]>) => {
      state.user = action.payload;
    },
    clearUser: (state) => {
      state.user = null;
    },
  },
});

export const { addUser, setUser, clearUser } = userSlice.actions;
export default userSlice.reducer;
