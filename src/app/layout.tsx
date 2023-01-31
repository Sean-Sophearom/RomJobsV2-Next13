import "./globals.css";
import { Inter } from "@next/font/google";
import { Navbar } from "@/components";
import { getServerSession } from "next-auth";
import { authOptions } from "@/pages/api/auth/[...nextauth]";
const inter = Inter({ subsets: ["latin"] });

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  const session = await getServerSession(authOptions);

  return (
    <html lang="en">
      <head />
      <body className={inter.className}>
        <div>
          <Navbar session={session} />
          {children}
        </div>
      </body>
    </html>
  );
}
