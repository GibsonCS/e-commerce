import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";

export const { signIn, signOut, auth, handlers } = NextAuth({
  //Provider the auth type
  providers: [
    Credentials({
      credentials: {
        email: {},
        password: {},
      },
      // This function is called when sigIn() is called
      authorize: async (credentials) => {
        if (credentials.password === "123") {
          //This return object must have the id or name attribute
          return {
            id: "123",
            name: "Gibson",
          };
        }
        throw new Error('Credenciais incorretas');
      },
    }),
  ],
  //Change default page (/api/auth/sigin) to custom login page
  pages: {
    signIn: "/login",
  },
  session: {
    strategy: "jwt",
  },
});
