import prisma from "@/lib/prisma";
import { useSession } from "next-auth/react";

const getPosts = async () => await prisma.post.findMany();

export default async function Home() {
  const posts = await getPosts();
  return <main>hi</main>;
}
