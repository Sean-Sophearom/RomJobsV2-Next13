"use client";

import { useTypeSafeTranslation } from "@/app/i18n/client";
import { useSelectedLayoutSegment } from "next/navigation";

interface NavbarLinksProps {
  lng: "en" | "kh";
}

export default function NavbarLinks({ lng }: NavbarLinksProps) {
  const { t } = useTypeSafeTranslation(lng);
  console.log(useSelectedLayoutSegment());
  return <div>{t("navbar.about-us")}</div>;
}
