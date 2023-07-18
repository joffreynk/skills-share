import connection from "@/utils/db.js";
import NextAuth from "next-auth";
import GithubProvider from "next-auth/providers/github";
import GoogleProvider from "next-auth/providers/google";
import bcrypt from "bcrypt";
import User from "@/models/userModel.js";
import Credentials from "next-auth/providers/credentials";

const handler = NextAuth({
  providers: [
    GithubProvider({
      clientId: process.env.GITHUB_CLIENT_ID,
      clientSecret: process.env.GITHUB_CLIENT_SECRET,
    }),
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
    Credentials({
      id: "credentials",
      name: "Credentials",
      async authorize(credentials) {
        await connection();
        try {
          const user = await User.findOne({ email: credentials.email });
          if (user) {
            const ckeckPassword = await bcrypt.compare(credentials.password, user.password);
            if (ckeckPassword) {
              return user;
            } else {
              throw new Error("Wrong credentials! Please try again");
            }
          } else {
            throw new Error("User not found");
          }
        } catch (error) {
          throw new Error(error.message)
        }
   
      },
    }),
  ],
  secret: process.env.NEXTAUTH_SECRET,
  pages: {
    error: "/dashboard/login",
  },
});

export { handler as GET, handler as POST };
