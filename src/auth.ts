import NextAuth, {CredentialsSignin} from "next-auth"
import Credentials from "next-auth/providers/credentials";
import connectDB from "@/dbConfig/dbConfig";
import {User} from '@/models/User'
import {compare} from "bcryptjs"
//Destructing NextAuth
export const { handlers, signIn, signOut, auth } = NextAuth({
    providers: [
        Credentials({
            //Specify name of provider
            name: 'Credentials',
            //for our default sign-in page
            credentials: {
                email: {label: "Email", type: "email"},
                password: {label: "Password", type: "password"}
            },
            authorize: async (credentials)=>{
                const email = credentials.email as string | undefined;
                const password = credentials.password as string | undefined;

                if (!email || !password){
                    throw new CredentialsSignin('Please provide both email and password')
                }

                await connectDB();

                const user = await User.findOne({email}).select('+password + role')
                if(!user){
                    throw new Error("Invalid Email or Password");
                }

                if (!user.password){
                    throw new Error("Invalid Email or Password");
                }

                const isMatched = await compare(password, user.password)

                if(!isMatched){
                    throw new Error("Password did not match");
                }

                const userData = {
                    firstname: user.firstName,
                    lastname: user.lastName,
                    email: user.email,
                    role: user.role,
                    id: user._id
                }

                return userData;
            },
        })
    ],
    pages : {
        signIn : "/login",
    },

})
