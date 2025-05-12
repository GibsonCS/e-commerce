import Image from "next/image";
import logo from "@/assets/images/logo.svg";

export function Footer() {
  return (
    <footer className="flex p-6 justify-center bg-gradient-to-b from-gray-900 to-gray-700 border-t border-gray-800">
      <Image className="w-16 opacity-15" src={logo} alt="Legal Course Logo" />
    </footer>
  );
}
