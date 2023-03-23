import { rootReducer } from "@/store/root-reducer";
import { configureStore } from "@reduxjs/toolkit";

/**
 * @description store 생성
 */
const store = configureStore({
  reducer: rootReducer,
});

export default store;

export type TRootState = ReturnType<typeof store.getState>;
export type TAppDispatch = typeof store.dispatch;
