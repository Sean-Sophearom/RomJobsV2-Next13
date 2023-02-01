import { LangProps, useTypeSafeTranslation } from "@/app/i18n";
import { Button } from "@/components/ClientComp";
import Link from "next/link";

export default async function Home({ params: { lng } }: LangProps) {
  const { t } = await useTypeSafeTranslation(lng);
  return (
    <main>
      {t("title")}
      <Link href={lng == "en" ? "kh" : "en"}>kh</Link>
      <Button variant="secondary">Hello</Button>
    </main>
  );
}
