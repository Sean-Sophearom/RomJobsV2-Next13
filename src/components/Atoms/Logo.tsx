import Link from "next/link";

interface LogoProps {
  size?: "small" | "medium" | "large";
  className?: string;
}

const fontSize = { small: "", medium: "text-2xl", large: "" };

export const Logo: React.FC<LogoProps> = ({ size = "medium", className = "" }) => {
  return (
    <Link href="/" className={`text-purple-500 font-semibold ${fontSize[size]} ${className}`}>
      RomJOBS
    </Link>
  );
};
