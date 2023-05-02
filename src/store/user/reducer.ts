import type { IUserData } from "@/types/user";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const INIT_USER_INFO: IUserData = {
  createdAt: "",
  id: -1,
  nickname: "",
  oauthKey: -1,
  oauthType: "",
  updatedAt: "",
};

interface IInitialState {
  userInfo: IUserData;
}

const initialState: IInitialState = {
  userInfo: INIT_USER_INFO,
};

const userSlice = createSlice({
  name: "user", // 액션 타입 prefix
  initialState,
  reducers: {
    setUserInfo: (state, { payload }: PayloadAction<IUserData>) => {
      state.userInfo = payload;
    },
  },
});

export const { setUserInfo } = userSlice.actions;

export default userSlice.reducer;
