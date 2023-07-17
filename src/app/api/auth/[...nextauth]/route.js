import connection from "@/utils/db"
import NextAuth from "next-auth"
import CredentialsProvder  from "next-auth/providers/credentials"
import GithubProvider from "next-auth/providers/github"
import GoogleProvider from "next-auth/providers/google"
import bcrypt from 'bcrypt'

const handler =  NextAuth({
  providers: [
    GithubProvider({
      clientId: process.env.GITHUB_CLIENT_ID,
      clientSecret: process.env.GITHUB_CLIENT_SECRET,
    }),
    GoogleProvider({
      clientId: process.env.GITHUB_CLIENT_ID,
      clientSecret: process.env.GITHUB_CLIENT_SECRET,
    }),
    CredentialsProvder({
      id: 'credentials',
      name: 'Credentials',
      async authorize(credentials) {
        await connection();
        try {
          const user = userModel.findOne({ email: credentials.email });

          if (user) {
            const ckeckPassword = await bcrypt.compare( credentials.password, user.password)
            if (ckeckPassword) {
              const {password, others} = user
              return others
            }else {
              throw new Error('Wrong credentials! Please try again')
            }
          }else {
            throw new Error('User not found')
          }
        } catch (error) {
          throw new Error(error.message)
        }
      },
    })
  ],
})

export { handler as GET, handler as POST} 