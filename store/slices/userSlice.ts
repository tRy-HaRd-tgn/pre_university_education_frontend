import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

interface UserState {
  auth?: boolean;
  name?: string;
  surname?: string;
  patronymic?: string;
  picture?: string;
  email?: string;
  courses?: string[];
}

const initialState: UserState = {
  auth: false,
  name: "",
  surname: "",
  patronymic: "",
  picture: "",
  email: "",
  courses: [],
};

export const userSlice = createSlice({
  name: "usering",
  initialState,
  reducers: {
    updateAuth: (state, action: PayloadAction<boolean>) => {
      state.auth = action.payload;
    },
    updateUserInfo: (state, action: PayloadAction<UserState>) => {
      state.auth = action.payload.auth;
      state.name = action.payload.name;
      state.surname = action.payload.surname;
      state.patronymic = action.payload.patronymic;
      state.picture = action.payload.picture;
      state.email = action.payload.email;
    },
    updateFIO: (state, action: PayloadAction<UserState>) => {
      state.name = action.payload.name;
      state.surname = action.payload.surname;
      state.patronymic = action.payload.patronymic;
    },
    updateUserCourses: (state, action: PayloadAction<string[]>) => {
      state.courses = action.payload;
    },
  },
});

export const { updateAuth, updateUserInfo, updateFIO, updateUserCourses } =
  userSlice.actions;
export default userSlice.reducer;
