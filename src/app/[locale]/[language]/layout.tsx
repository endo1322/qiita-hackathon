"use client";

import Header from "@/components/Header";
import NavMenu from "@/components/NavMenu";

function LanguageTopLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex flex-col w-full h-full">
      <Header />
      <div className="flex flex-row h-full">
        <NavMenu />
        <div className="flex-grow overflow-y-auto">{children}</div>
      </div>
    </div>
  );
}

export default LanguageTopLayout;
