"use client";

import { trpc } from "@/utils/trpc/trpc";
import React, { createContext, useContext, ReactNode } from "react";
import { useDispatch } from "react-redux";
import { setThreads } from "../redux/reducers/threadReducer";

// コンテキストを作成
const TechContext = createContext<string | undefined>(undefined);

// TechProviderコンポーネント
export const TechProvider: React.FC<{ tech: string; children: ReactNode }> = ({
  tech,
  children,
}) => {
  const dispatch = useDispatch();
  const techData = trpc.tech.findUniqueByName.useQuery({
    name: tech,
    isThreads: true,
  }).data;

  // techが変わるたびにスレッドを取得する
  React.useEffect(() => {
    if (techData) {
      dispatch(setThreads({ techName: tech, threads: techData.threads }));
    }
  }, [techData]);

  return <TechContext.Provider value={tech}>{children}</TechContext.Provider>;
};

// カスタムフック
export const useTech = () => useContext(TechContext);
