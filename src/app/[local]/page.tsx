import { useTranslations } from "next-intl";
import { Button } from "@/components/ui/button";

export default function Index() {
  const t = useTranslations("Index");
  return (
    <div>
      <h1>{t("title")}</h1>
      <Button size={"sm"}>button</Button>
    </div>
  );
}
