import NextAuth, { NextAuthOptions } from "next-auth";
import InstagramProvider from "next-auth/providers/instagram";

export const authOptions: NextAuthOptions = {
  providers: [
    InstagramProvider({
      clientId: process.env.INSTAGRAM_CLIENT_ID,
      clientSecret: process.env.INSTAGRAM_CLIENT_SECRET,
      authorization: { params: { scope: ["user_profile", "user_media"] } },
    }),
  ],
  callbacks: {
    async jwt({ token, account }) {
      // Persist the OAuth access_token to the token right after signin
      // console.log(account);
      // console.log(token);
      if (account) {
        token.accessToken = account.access_token;
        token.userId = account.user_id;
      }

      // console.log(token);
      return token;
    },
    async session({ session, token, user }: any) {
      // Send properties to the client, like an access_token from a provider.
      // console.log(session);
      // console.log(token);
      // console.log(user);
      session.accessToken = token.accessToken;
      session.userId = token.userId;
      return session;
    },
  },

  pages: {
    signIn: "/signin",
    error: "/api/auth/error",
  },
  secret: process.env.NEXT_PUBLIC_SECRET,
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
