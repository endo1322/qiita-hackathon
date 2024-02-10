"use client";

import Header from "@/components/Header";
import NavMenu from "@/components/NavMenu";

function ThreadTopLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex flex-col w-full h-full">
      <Header />
      <div className="flex flex-row h-full overflow-hidden">
        <NavMenu />
        <div className="flex-grow px-5 my-3 overflow-y-auto">{children}</div>
      </div>
    </div>
  );
}

export default ThreadTopLayout;
