import { Session } from "next-auth";
import Link from "next/link";
import { Logo } from "@/components/exporter";

interface NavbarProps {
  session: Session | null;
}

export const Navbar: React.FC<NavbarProps> = ({}) => {
  //   if (session) return <h1>this guy rocks</h1>;

  return (
    <div className="container">
      <Logo />
      <Link href="/">Home</Link>
      <Link href="/auth/signin">Signin</Link>
    </div>
  );
};
