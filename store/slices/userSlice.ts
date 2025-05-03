import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

interface UserState {
  auth: boolean;
}

const initialState: UserState = {
  auth: true,
};

export const userSlice = createSlice({
  name: "usering",
  initialState,
  reducers: {
    updateAuth: (state, action: PayloadAction<boolean>) => {
      state.auth = action.payload;
    },
  },
});

export const { updateAuth } = userSlice.actions;
export default userSlice.reducer;
