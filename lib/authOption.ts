import { NextAuthOptions } from "next-auth";
import CredentialProvider from "next-auth/providers/credentials";
import connectDb from "./connectdb";
import UserModel from "@/models/User";
import bcrypt from "bcryptjs";

export const authOption: NextAuthOptions = {
  providers: [
    CredentialProvider({
      name: "Credentials",
      credentials: {
        email: {
          label: "Email",
          placeholder: "Enter Email Address",
          type: "text",
        },
        password: {
          label: "Password",
          placeholder: "Enter Password",
          type: "text",
        },
      },
      async authorize(credentials) {
        if (!credentials?.email || !credentials?.password) {
          throw new Error("user details not found");
        }
        try {
          await connectDb();

          const user = await UserModel.findOne({
            email: credentials.email,
          });
          if (!user) {
            throw new Error("Eamil address not found");
          }

          const isValid = await bcrypt.compare(
            credentials.password,
            user.password
          );
          if (!isValid) {
            throw new Error("Password is Incorrect");
          }
          return {
            id: user._id.toString(),
            email: user.email,
          };
        } catch (error) {
          console.error("authentication failed", error);
          throw error;
        }
      },
    }),
  ],
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.id = user.id.toString();
      }
      return token;
    },
    async session({ session, token }) {
      if (session.user) {
        session.user.id = token.id as string;
      }
      return session;
    },
  },
  pages: {
    signIn: "/login",
    error: "/login",
  },
  session: {
    strategy: "jwt",
    maxAge: 30 * 24 * 60 * 60,
  },
  secret: process.env.NEXTAUTH_SECRET,
};
