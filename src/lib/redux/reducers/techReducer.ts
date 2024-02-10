import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store";
import { threadType } from "@/types/thread";

type TechState = {
  techName: null | string;
  threads: Array<threadType>;
};

const initialState: TechState = {
  techName: null,
  threads: [],
};

export const techSlice = createSlice({
  name: "tech",
  initialState: initialState,
  reducers: {
    setTech: (state, action: PayloadAction<TechState>) => {
      state.techName = action.payload.techName;
      state.threads = action.payload.threads;
    },
  },
});

export const { setTech } = techSlice.actions;

export const selectTech = (state: RootState) => state.tech.techName;

export const selectThreads = (state: RootState) => state.tech.threads;

export default techSlice.reducer;
