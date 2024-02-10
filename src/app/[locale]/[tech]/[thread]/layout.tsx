"use client";

import Header from "@/components/Header";
import NavMenu from "@/components/NavMenu";
import { ThreadProvider } from "@/lib/context/thread";

function ThreadTopLayout({
  children,
  params: { thread },
}: {
  children: React.ReactNode;
  params: { thread: string };
}) {
  return (
    <ThreadProvider threadId={Number(thread)}>
      <div className="flex flex-col w-full h-full">
        <Header />
        <div className="flex flex-row h-full overflow-hidden">
          <NavMenu />
          <div className="flex-grow px-5 my-3 overflow-y-auto">{children}</div>
        </div>
      </div>
    </ThreadProvider>
  );
}

export default ThreadTopLayout;
