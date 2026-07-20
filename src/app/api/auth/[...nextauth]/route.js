// import { dbConnect } from "@/lib/dbConnect";
//mongose er jonno use

import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import bcrypt from "bcryptjs";
import GoogleProvider from "next-auth/providers/google";
import { dbConnect } from "@/lib/dbConnect";


export const authOptions = {
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: {
          label: "Email",
          type: "email",
          placeholder: "Enter your email",
        },
        password: {
          label: "Password",
          type: "password",
          placeholder: "Enter your password",
        },
      },

      async authorize(credentials) {
        const { email, password } = credentials;
        console.log("login email and password", email, password);

        //check user database ase kina
        const user = await dbConnect("users").findOne({ email });
        if (!user) {
          return null;
        }

        //has password compere korchi sob tik ase check korar jorno
        const isPasswordOk = await bcrypt.compare(password, user.password);
        if (isPasswordOk) {
          return user;
        }

        return null;
      },
    }),
    // google provider
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
  ],

  //custom login page
  pages: { signIn: "/login" },
};

const handler = NextAuth(authOptions);
//next auth getting started/Initialization eta chara login form asbe na
export { handler as GET, handler as POST };
