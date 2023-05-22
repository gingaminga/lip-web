import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface IInitialState {
  calendarTimestamp: number;
}

const initialState: IInitialState = {
  calendarTimestamp: new Date().getTime(),
};

const todoSlice = createSlice({
  name: "todo", // 액션 타입 prefix
  initialState,
  reducers: {
    setCalendarTimestamp: (state, { payload }: PayloadAction<number>) => {
      state.calendarTimestamp = payload;
    },
  },
});

export const { setCalendarTimestamp } = todoSlice.actions;

export default todoSlice.reducer;
