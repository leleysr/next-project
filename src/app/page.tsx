"use client";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { useAuthContext } from "../context/AuthContext";

export default function Home() {
  const { userInfo } = useAuthContext();
  const router = useRouter();

  useEffect(() => {
    if (router && (!userInfo || !userInfo.email)) {
      router.push("/login");
    }
  }, [userInfo, router]);

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <header>
        <div>Bem-vindo ao Meu Site, {userInfo?.email}</div>
      </header>
    </main>
  );
}
