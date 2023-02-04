import { Session } from "next-auth";
import { Logo } from "@/components/ServerComp";
import { LanguageSwitcher } from "../Atoms/LanguageSwitcher";
import { useTypeSafeTranslation } from "@/app/i18n";
import dynamic from "next/dynamic";

const NavbarLinks = dynamic(() => import("../Atoms/NavbarLinks"), { ssr: false });

interface NavbarProps {
  session: Session | null;
  lng: "en" | "kh";
}

export async function Navbar({ lng, session }: NavbarProps) {
  const { t } = await useTypeSafeTranslation(lng);

  return (
    <div className="container flex justify-between items-center">
      <Logo />

      <NavbarLinks lng={lng} />

      <LanguageSwitcher lng={lng} />
    </div>
  );
}
