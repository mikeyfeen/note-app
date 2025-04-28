import NextAuth from "next-auth";
import type {NextAuthOptions} from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import GitHubProvider from "next-auth/providers/github";
import { FirestoreAdapter  } from "@next-auth/firebase-adapter";
import { cert } from "firebase-admin/app"



export const authOptions: NextAuthOptions = {
  providers: [
    GitHubProvider({
      clientId: process.env.GITHUB_ID ?? "",
      clientSecret: process.env.GITHUB_SECRET ?? "",
    }),
  ],
  adapter: FirestoreAdapter(),

}



const handler = NextAuth(authOptions);


export { handler as GET, handler as POST };
