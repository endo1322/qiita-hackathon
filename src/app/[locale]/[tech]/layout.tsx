import React from "react";
import { TechProvider } from "@/lib/context/tech";

const TechLayout = ({
  children,
  params: { tech },
}: {
  children: React.ReactNode;
  params: { tech: string };
}) => {
  return <TechProvider tech={tech}>{children}</TechProvider>;
};

export default TechLayout;
