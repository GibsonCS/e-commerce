import { Footer } from "@/components/Footer";
import Header from "@/components/Header";
import { Roboto } from "next/font/google";

const roboto = Roboto({
  subsets: ["latin"],
  weight: "400",
});

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section
      className={`flex min-h-screen bg-gradient-to-br from-gray-950 to-gray-800 ${roboto.className} `}
    >
      <div className="flex flex-col flex-1">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </div>
    </section>
  );
}
