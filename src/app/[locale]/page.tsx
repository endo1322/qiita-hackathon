"use client";

import { useTranslations } from "next-intl";
import { trpc } from "@/utils/trpc/trpc";
import { Button } from "@/components/ui/button";

export default function Index() {
  const t = useTranslations("Index");
  const hello = trpc.hello.useQuery({ id: 1 });
  console.log(hello.data);
  return (
    <div>
      <h1 className="bg-white">{t("title")}</h1>
      {!hello.data ? (
        <div>Loading...</div>
      ) : (
        <div>
          <p className="font-bold">{hello.data[0].name}</p>
        </div>
      )}
      <Button size={"sm"}>button</Button>
    </div>
  );
}
