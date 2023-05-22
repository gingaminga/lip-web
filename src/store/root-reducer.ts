import themeReducer from "@/store/theme/reducer";
import todoReducer from "@/store/todo/reducer";
import userReducer from "@/store/user/reducer";
import { combineReducers } from "@reduxjs/toolkit";

/**
 * @description 모든 reducer 병합
 */
export const rootReducer = combineReducers({
  theme: themeReducer,
  todo: todoReducer,
  user: userReducer,
});
