"use client";
import { trpc } from "@/utils/trpc/trpc";

export default function Home() {
  const hello = trpc.hello.useQuery({ text: "client" });
  if (!hello.data) {
    return <div>Loading...</div>;
  }
  return (
    <div>
      <p className="font-bold">{hello.data.greeting}</p>
    </div>
  );
}
