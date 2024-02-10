import { configureStore } from "@reduxjs/toolkit";
import threadReducer from "./reducers/threadReducer";

export const store = configureStore({
  reducer: {
    thread: threadReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
