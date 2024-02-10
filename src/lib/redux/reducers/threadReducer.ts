import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store";

type ThreadState = {
  tech: null | string;
  thread: null | string;
};

const initialState: ThreadState = {
  tech: null,
  thread: null,
};

export const threadSlice = createSlice({
  name: "thread",
  initialState: initialState,
  reducers: {
    setThread: (state, action: PayloadAction<ThreadState>) => {
      state.tech = action.payload.tech;
      state.thread = action.payload.thread;
    },
  },
});

export const { setThread } = threadSlice.actions;

export const selectTech = (state: RootState) => state.thread.tech;

export const selectThread = (state: RootState) => state.thread.thread;

export default threadSlice.reducer;
