import Image from "next/image";
import Link from "next/link";

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
  return (
    <Link href={cur.href} className="rounded-full">
      <Image src={cur.src} alt={cur.alt} width={128} height={128} className="w-[2em] aspect-square" />
    </Link>
  );
};
