import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type TTheme = "dark" | "light";

interface IInitialState {
  value: TTheme;
}

const initialState: IInitialState = {
  value: "light",
};

const themeSlice = createSlice({
  name: "theme", // 액션 타입 prefix
  initialState,
  reducers: {
    setTheme: (state, { payload }: PayloadAction<TTheme>) => {
      state.value = payload;
    },
  },
});

export const { setTheme } = themeSlice.actions;

export default themeSlice.reducer;
