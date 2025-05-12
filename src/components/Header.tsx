import AccountMenu from "./AccountMenu";
import Image from "next/image";
import logo from "@/assets/images/logo.svg";
import Link from "next/link";
export default function Header() {
  return (
    <header className="flex items-center p-4 justify-between bg-gradient-to-b from-gray-900 to-gray-600 border-b  border-gray-500 shadow-md shadow-gray-300/50">
      <Link href={"/admin"}>
        <Image className="ml-18" src={logo} alt="Logo home" />
      </Link>
      <AccountMenu />
    </header>
  );
}
