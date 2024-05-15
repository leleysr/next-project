"use client";

import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { useAuthContext } from "../../context/AuthContext";

export default function MyAccount() {
  const [isLogout, setIsLogout] = useState<boolean>(false);
  const { userInfo, setUserInfo } = useAuthContext();
  const router = useRouter();
  useEffect(() => {
    if (!isLogout && router && (!userInfo || !userInfo.email)) {
      router.push("/login");
    }
  }, [userInfo, router, isLogout]);

  if (!userInfo || !userInfo.email)
    return (
      <div className="flex items-center justify-center font-semibold p-4">
        Restricted page
      </div>
    );

  const handleClick = () => {
    setIsLogout(true);
    setUserInfo({
      email: "",
      password: "",
    });
    router.push("/");
  };

  return (
    <div className="flex min-h-screen max-w-lg flex-col items-center justify-start gap-3 p-4 mx-auto">
      <h1 className="text-xl font-semibold">My informations</h1>

      <div className="w-full flex flex-col items-start justify-center bg-[#dadada] rounded-lg p-3">
        <p>
          <span className="font-semibold">Email:</span> {userInfo?.email}
        </p>
        <p>
          <span className="font-semibold">Password:</span> {userInfo?.password}
        </p>
      </div>
      <div className="w-full">
        <button
          className="w-full h-8 bg-[#a12323] text-white rounded"
          onClick={handleClick}
        >
          Logout
        </button>
      </div>
    </div>
  );
}
