"use client";

import { trpc } from "@/utils/trpc/trpc";
import React, { createContext, useContext, ReactNode } from "react";
import { useDispatch } from "react-redux";
import { setTech } from "../redux/reducers/techReducer";

// コンテキストを作成
const TechContext = createContext<string | undefined>(undefined);

// TechProviderコンポーネント
export const TechProvider: React.FC<{
  techName: string;
  children: ReactNode;
}> = ({ techName, children }) => {
  const dispatch = useDispatch();
  const techData = trpc.tech.findUniqueByName.useQuery({
    name: techName,
    isThreads: true,
  }).data;

  // techが変わるたびにスレッドを取得する
  React.useEffect(() => {
    if (techData) {
      dispatch(setTech({ techName: techName, threads: techData.threads }));
      console.log(techData);
    }
  }, [techData]);

  return (
    <TechContext.Provider value={techName}>{children}</TechContext.Provider>
  );
};

// カスタムフック
export const useTech = () => useContext(TechContext);
