import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store";
import { threadType } from "@/types/thread";

type ThreadState = {
  techName: null | string;
  threads: Array<threadType>;
};

const initialState: ThreadState = {
  techName: null,
  threads: [],
};

export const threadSlice = createSlice({
  name: "thread",
  initialState: initialState,
  reducers: {
    setThreads: (state, action: PayloadAction<ThreadState>) => {
      state.techName = action.payload.techName;
      state.threads = action.payload.threads;
    },
  },
});

export const { setThreads } = threadSlice.actions;

export const selectTech = (state: RootState) => state.thread.techName;

export const selectThreads = (state: RootState) => state.thread.threads;

export default threadSlice.reducer;
