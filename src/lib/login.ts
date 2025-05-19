import { signIn } from "next-auth/react";
import { redirect } from "next/navigation";

export async function login(formData: FormData) {
  const email = formData.get("email");
  const password = formData.get("password");

  //signIn function call authorize function from auth.ts
  const result = await signIn("credentials", {
    email,
    password,
    redirect: false,
  });

  if (!result || result.error) {
    return { error: "Usuário não encontrado" };
  }
  redirect("/admin");
}
