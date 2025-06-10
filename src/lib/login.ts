'use server'

import { redirect } from "next/navigation";
import { signIn } from "../../auth";

export async function login(_currentState: unknown, formData: FormData) {
  const email = formData.get("email");
  const password = formData.get("password");

  try {
    //signIn function call authorize function from auth.ts
    await signIn("credentials", {
      email,
      password,
      redirect: false
    })
  }
  catch (error) {
    console.error(error)
    return { success: false, message: 'Usuário nao existe' }
  }
  return redirect('http://localhost:3000/admin')
}

