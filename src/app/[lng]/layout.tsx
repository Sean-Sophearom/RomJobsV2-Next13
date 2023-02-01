// "use client";

// import "./globals.css";
// import { Inter } from "@next/font/google";
// import { getServerSession } from "next-auth";
// import { authOptions } from "@/pages/api/auth/[...nextauth]";
// import { Navbar } from "@/components";
// import { Button } from "./Button";
// import { appWithTranslation } from "next-i18next";

// const inter = Inter({ subsets: ["latin"] });

// const RootLayout = function ({ children }: { children: React.ReactNode }) {
//   // const session = await getServerSession(authOptions);

//   return (
//     <html lang="en">
//       <head />

//       <body className={inter.className}>
//         <div>
//           <Navbar session={null} />
//           <Button />
//           {children}
//         </div>
//       </body>
//     </html>
//   );
// };

import { LangProps } from "@/app/i18n";
import { dir } from "i18next";

import "./globals.css";
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
