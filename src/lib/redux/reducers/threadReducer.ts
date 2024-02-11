import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store";
import { threadType } from "@/types/thread";
import { messageType } from "@/types/message";

type ThreadState = {
  thread: null | threadType;
  messages: Array<messageType>;
};

const initialState: ThreadState = {
  thread: null,
  messages: [],
};

export const threadSlice = createSlice({
  name: "thread",
  initialState: initialState,
  reducers: {
    setThread: (state, action: PayloadAction<ThreadState>) => {
      state.thread = action.payload.thread;
      state.messages = action.payload.messages;
    },
  },
});

export const { setThread } = threadSlice.actions;

export const selectThread = (state: RootState) => state.thread.thread;

export const selectMessages = (state: RootState) => state.thread.messages;

export default threadSlice.reducer;
