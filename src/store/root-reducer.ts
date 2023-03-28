import themeReducer from "@/store/theme/reducer";
import { combineReducers } from "@reduxjs/toolkit";

/**
 * @description 모든 reducer 병합
 */
export const rootReducer = combineReducers({
  theme: themeReducer,
});
