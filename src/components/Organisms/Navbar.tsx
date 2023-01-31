import { authOptions } from "@/pages/api/auth/[...nextauth]";
import { getServerSession, Session } from "next-auth";
import { useSession } from "next-auth/react";
import Link from "next/link";

interface NavbarProps {
  session: Session | null;
}

export const Navbar: React.FC<NavbarProps> = ({ session }) => {
  //   if (session) return <h1>this guy rocks</h1>;

  return (
    <div>
      <Link href="/">Home</Link>
      <Link href="/auth/signin">Signin</Link>
    </div>
  );
};
