import { Session } from "next-auth";
import { Logo, LanguageSwitcher } from "@/components/ServerComp";

interface NavbarProps {
  session: Session | null;
  lng: "en" | "kh";
}

export const Navbar: React.FC<NavbarProps> = ({ lng, session }) => {
  //   if (session) return <h1>this guy rocks</h1>;

  return (
    <div className="container flex justify-between items-center">
      <Logo />
      <LanguageSwitcher lng={lng} />
    </div>
  );
};