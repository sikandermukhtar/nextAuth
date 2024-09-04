import NextAuth from "next-auth"

//Destructing NextAuth
export const { handlers, signIn, signOut, auth } = NextAuth({
    providers: [],
})
