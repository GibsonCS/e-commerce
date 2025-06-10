import { Roboto } from "next/font/google";

const roboto = Roboto({
  subsets: ["latin"],
  weight: "400",
});

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <section className="min-h-screen" >{children}</section>
}
