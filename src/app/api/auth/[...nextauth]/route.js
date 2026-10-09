import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google";
import bcrypt from "bcryptjs";
import { dbConnect } from "@/lib/dbConnect";

export const authOptions = {
  session: {
    strategy: "jwt",
  },

  providers: [
    CredentialsProvider({
      name: "Credentials",

      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" },
      },

      async authorize(credentials) {
        if (!credentials?.email || !credentials?.password) {
          return null;
        }

        const usersCollection = await dbConnect("users");
        const user = await usersCollection.findOne({
          email: credentials.email,
        });

        if (!user?.password) {
          return null;
        }

        const isPasswordOk = await bcrypt.compare(
          credentials.password,
          user.password,
        );

        if (!isPasswordOk) {
          return null;
        }

        return {
          id: user._id.toString(),
          name: user.name,
          email: user.email,
          image: user.image ?? null,
          role: user.role ?? "user",
        };
      },
    }),

    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
  ],

  pages: {
    signIn: "/login",
  },

  callbacks: {
    // Google login hole user MongoDB-te save korbo
    async signIn({ user, account }) {
      if (account?.provider === "google") {
        if (!user.email) return false;

        const usersCollection = await dbConnect("users");

        await usersCollection.updateOne(
          { email: user.email },
          {
            $setOnInsert: {
              name: user.name ?? "",
              email: user.email,
              image: user.image ?? null,
              role: "user",
              provider: account.provider,
              createdAt: new Date(),
            },
          },
          { upsert: true },
        );
      }

      return true;
    },
    // JWT-te database-er role add korbe
    async jwt({ token, user }) {
      if (user?.email) {
        const usersCollection = await dbConnect("users");

        const dbUser = await usersCollection.findOne(
          { email: user.email },
          { projection: { role: 1 } },
        );

        token.role = dbUser?.role ?? "user";
      } else if (token.email) {
        const usersCollection = await dbConnect("users");

        const dbUser = await usersCollection.findOne(
          { email: token.email },
          { projection: { role: 1 } },
        );

        token.role = dbUser?.role ?? "user";
      }

      return token;
    },

    // Session-e role expose korbe
    async session({ session, token }) {
      if (session.user) {
        session.user.role = token.role ?? "user";
      }

      return session;
    },
  },
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
