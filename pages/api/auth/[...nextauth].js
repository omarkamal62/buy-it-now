import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

import User from "../../../backend/models/user";
import bcrypt from "bcryptjs";
import dbConnect from "../../../backend/config/dbConnect";

export default async function auth(req, res) {
  return await NextAuth(req, res, {
    session: {
      strategy: "jwt",
    },
    providers: [
      CredentialsProvider({
        async authorize(credentials, req) {
          dbConnect();

          const { email, password } = credentials;

          const user = await User.findOne({ email }).select("+password");

          if (!user) {
            throw new Error("Invalid Email or Password");
          }

          const isPasswordMatched = await bcrypt.compare(
            password,
            user.password
          );

          if (!isPasswordMatched) {
            throw new Error("Invalid Email or Password");
          }

          return user;
        },
      }),
    ],
    pages: {
      signIn: "/login",
    },
    callbacks: {
      jwt: async ({ user, token }) => {
        user && (token.user = user);

        return token;
      },
      session: async ({ token, session }) => {
        session.user = token.user;

        delete session?.user?.password;

        return session;
      },
    },
    secret: process.env.NEXTAUTH_SECRET,
  });
}
