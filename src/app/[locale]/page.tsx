"use client";

import { useTranslations } from "next-intl";
import { trpc } from "@/utils/trpc/trpc";
import { Button } from "@/components/ui/button";

export default function Index() {
  const t = useTranslations("Index");
  return (
    <div>
      <h1 className="bg-white">{t("title")}</h1>
      <Button size={"sm"}>button</Button>
    </div>
  );
}
