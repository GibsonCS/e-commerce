"use client";
import Image from "next/image";
import Logo from "@/assets/images/logo.png";
import { login } from "@/lib/login";
import {LoaderCircle } from 'lucide-react'
 
import { useActionState } from "react";

export default  function Login() {
  const [state, formAction, isPending ] = useActionState(login, null)

  return (
    <>
      <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <Image alt="Your Company" src={Logo} className="mx-auto "></Image>
          <h2 className="pt-2 text-center text-2xl/9 font-bold tracking-tight">
            Faça login com sua conta
          </h2>
        </div>
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
         {!state?.success && <span>{state?.message}</span> }
          <form action={formAction} className="space-y-6">
            <div>
             
              <label htmlFor="email" className="block text-sm/6 font-medium ">
                Email
              </label>
              <div className="mt-2">
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  autoComplete="email"
                  className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                />
              </div>
            </div>
            <div>
              <div className="flex items-center justify-between">
                <label
                  htmlFor="password"
                  className="block text-sm/6 font-medium"
                >
                  Senha
                </label>
                <div className="text-sm">
                  <a
                    href="#"
                    className="font-semibold text-emerald-400 hover:text-indigo-500"
                  >
                    Esqueceu a senha?
                  </a>
                </div>
              </div>
              <div className="mt-2">
                <input
                  id="password"
                  name="password"
                  type="password"
                  required
                  autoComplete="current-password"
                  className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                />
              </div>
            </div>
            <div className="flex flex-col gap-2">
             
                <button
                className="flex w-full justify-center rounded-md bg-gradient-to-l hover:shadow hover:shadow-emerald-500 transition-all from-emerald-800 to-emerald-500 px-3 py-1.5 text-sm/6 font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 cursor-pointer"
                >
                {isPending === false ? 'Entrar' : <span className=" animate-spin "><LoaderCircle /></span> }
              </button>
            </div>
          </form>
          <p className="mt-10 text-center text-sm/6 text-gray-500">
            Não tem cadastro?{" "}
            <a
              href="#"
              className="font-semibold text-emerald-400 hover:text-indigo-500"
            >
              Clique aqui
            </a>
          </p>
        </div>
      </div>
    </>
  );
}
