"use client";

import { trpc } from "@/utils/trpc/trpc";
import React, { createContext, useContext, ReactNode } from "react";
import { useDispatch } from "react-redux";
import { setThread } from "../redux/reducers/threadReducer";

// コンテキストを作成
const ThreadContext = createContext<number | undefined>(undefined);

// TechProviderコンポーネント
export const ThreadProvider: React.FC<{
  threadId: number;
  children: ReactNode;
}> = ({ threadId, children }) => {
  const dispatch = useDispatch();
  const threadData = trpc.thread.findUniqueById.useQuery({
    id: threadId,
    isMessages: true,
    isUser: true,
  }).data;
  console.log(threadId, typeof threadId);

  // techが変わるたびにスレッドを取得する
  React.useEffect(() => {
    if (threadData) {
      dispatch(
        setThread({ thread: threadData, messages: threadData.messages })
      );
    }
    console.log(threadData);
  }, [threadData]);

  return (
    <ThreadContext.Provider value={threadId}>{children}</ThreadContext.Provider>
  );
};

// カスタムフック
export const useTech = () => useContext(ThreadContext);
