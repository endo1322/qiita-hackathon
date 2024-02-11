import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store";
import { threadType } from "@/types/thread";
import { techType } from "@/types/tech";

type TechState = {
  tech: null | techType;
  threads: Array<threadType>;
};

const initialState: TechState = {
  tech: null,
  threads: [],
};

export const techSlice = createSlice({
  name: "tech",
  initialState: initialState,
  reducers: {
    setTech: (state, action: PayloadAction<TechState>) => {
      state.tech = action.payload.tech;
      state.threads = action.payload.threads;
    },
  },
});

export const { setTech } = techSlice.actions;

export const selectTech = (state: RootState) => state.tech.tech;

export const selectThreads = (state: RootState) => state.tech.threads;

export default techSlice.reducer;
