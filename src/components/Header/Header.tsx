"use client";
import Link from "next/link";
import { useAuthContext } from "../../context/AuthContext";

export default function Header() {
  const { userInfo } = useAuthContext();
  return (
    <header>
      <div className="flex items-center justify-center  bg-[#2f2f6b] p-3">
        <ul className="flex flex-wrap items-center justify-center gap-3">
          <li className="text-white">
            <Link href="/">Home</Link>
          </li>
          <li className="text-white">
            <Link href="/contact">Contact</Link>
          </li>
          <li className="text-white">
            <Link href="/about">About</Link>
          </li>
          <li className="text-white">
            <Link href="/users">Users</Link>
          </li>
          <li className="text-white">
            {userInfo.email ? (
              <Link href="/my-account">My Account</Link>
            ) : (
              <Link href="/login">Login</Link>
            )}
          </li>
        </ul>
      </div>
    </header>
  );
}
