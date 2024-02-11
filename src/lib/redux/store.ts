import { configureStore } from "@reduxjs/toolkit";
import threadReducer from "./reducers/threadReducer";
import techReducer from "./reducers/techReducer";

export const store = configureStore({
  reducer: {
    tech: techReducer,
    thread: threadReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
