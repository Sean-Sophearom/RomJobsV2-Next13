import { LangProps, useTypeSafeTranslation } from "@/app/i18n";

export default async function Home({ params: { lng } }: LangProps) {
  const { t } = await useTypeSafeTranslation(lng);
  return <main className="container">{t("title")}</main>;
}
