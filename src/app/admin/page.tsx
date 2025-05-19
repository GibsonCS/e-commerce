import Aside from "@/components/Aside";
import { auth } from "../../../auth";
import { redirect } from "next/navigation";

export default async function AdminPage() {
  //Get session data
  const session = await auth();
  if (!session) redirect("/login");

  return (
    <div className="flex h-full">
      <Aside />
      <span className="p-4">Bem vindo, {session?.user?.name}</span>
    </div>
  );
}
