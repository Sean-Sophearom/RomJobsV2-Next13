"use client";
import { signIn } from "next-auth/react";

interface SigninButtonProps {
  provider?: "google" | "email";
}

const SigninButton: React.FC<SigninButtonProps> = ({ provider = "stirng" }) => {
  return <button onClick={() => signIn("google", { callbackUrl: "/" })}>Signin</button>;
};

export default SigninButton;
