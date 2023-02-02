import { LangProps } from "@/app/i18n";
import { dir } from "i18next";

import "@/styles/globals.css";
import { Inter } from "@next/font/google";
import { getServerSession } from "next-auth";
import { authOptions } from "@/pages/api/auth/[...nextauth]";
import { Navbar } from "@/components/ServerComp";

interface LayoutProps extends LangProps {
  children: React.ReactNode;
}

const inter = Inter({ subsets: ["latin"] });

export default async function RootLayout({ children, params: { lng } }: LayoutProps) {
  const session = await getServerSession(authOptions);
  return (
    <html lang={lng} dir={dir(lng)}>
      <head />
      <body className={inter.className}>
        <Navbar session={session} />
        {children}
      </body>
    </html>
  );
}
