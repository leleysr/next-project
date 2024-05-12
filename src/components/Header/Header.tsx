import Link from "next/link";

export default function Header() {
  return (
    <header>
      <div className="flex items-center justify-center bg-[#2f2f6b] p-3">
        <ul className="flex items-center justify-center gap-2">
          <li className="text-white">
            <Link href="/">Home</Link>
          </li>
          <li className="text-white">
            <Link href="/contact">Contato</Link>
          </li>
          <li className="text-white">
            <Link href="/about">Sobre</Link>
          </li>
          <li className="text-white">
            <Link href="/users">Usuários</Link>
          </li>
        </ul>
      </div>
    </header>
  );
}
