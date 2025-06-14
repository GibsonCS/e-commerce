import Login from "@/components/login";
import { auth } from "../../../auth";
import { redirect } from "next/navigation";

export default async function LoginPage() {
  const session = await auth();

  if (session) return redirect("/admin");

  return (
    <>
      <Login />
    </>
  );
}
