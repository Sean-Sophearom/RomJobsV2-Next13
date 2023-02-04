"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname, useSearchParams } from "next/navigation";
import { useMemo } from "react";

const langs = {
  kh: {
    src: "https://cdn-icons-png.flaticon.com/512/323/323310.png",
    alt: "United States flag",
    href: "/en",
  },
  en: {
    src: "https://cdn-icons-png.flaticon.com/128/197/197505.png",
    alt: "Cambodia flag",
    href: "/kh",
  },
};

interface LanguageSwitcherProps {
  lng: "en" | "kh";
}

export const LanguageSwitcher: React.FC<LanguageSwitcherProps> = ({ lng }) => {
  const cur = langs[lng];
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const targetHref = useMemo(() => {
    console.log("regenerated target href");

    let href = cur.href + pathname?.slice(3);
    let i = 0;
    for (const [key, value] of searchParams.entries()) {
      if (i === 0) (href += `?${key}=${value}`) && i++;
      else href += `&${key}=${value}`;
    }
    return href;
  }, [pathname, searchParams, cur.href]);
  return (
    <Link href={targetHref} className="rounded-full">
      <Image src={cur.src} alt={cur.alt} width={128} height={128} className="w-[2em] aspect-square" />
    </Link>
  );
};
