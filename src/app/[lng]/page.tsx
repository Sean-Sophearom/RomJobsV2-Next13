import { LangProps, useTypeSafeTranslation } from "@/app/i18n";
import { Button } from "@/components/ClientComp";
import Link from "next/link";

export default async function Home({ params: { lng } }: LangProps) {
  const { t } = await useTypeSafeTranslation(lng);
  return <main className="container">{t("title")}</main>;
}
