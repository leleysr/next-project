"use client";

import { useAuthContext } from "../context/AuthContext";

export default function Home() {
  const { userInfo } = useAuthContext();

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-4">
      <div>
        <div className="text-xl font-semibold">
          Bem-vindo ao Meu Site
          {userInfo?.email ? `, ${userInfo?.email}!` : "!"}
        </div>
      </div>
    </main>
  );
}
