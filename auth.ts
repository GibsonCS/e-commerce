import NextAuth from "next-auth"
import Credentials from "next-auth/providers/credentials"

export const { handlers, signIn, signOut, auth } = NextAuth({
    providers: [Credentials({
        credentials: {
            email: {
                type: 'email'
            },
            password: {
                type: "password"
            }
        },
        //It should return a type credentials
        authorize: async (credentials) => {
            if (!credentials) return null

            if (credentials.password === '123') {
                const user = {
                    id: 'sdsdf',
                    email: 'email',
                    password: ''
                }
                return user
            }
            return null
        }
    })],
})