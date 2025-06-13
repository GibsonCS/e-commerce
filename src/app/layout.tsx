import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "EXtude",
  description: "Course for judge area",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-br">
      <body>
        <main className="min-h-screen">{children}</main>
      </body>
    </html>
  );
}
