import NextAuth from 'next-auth';
import GoogleProvider from 'next-auth/providers/google';

// app/_lib/auth.ts & .env.local
export const {
  handlers: { GET, POST },
  auth,
  signOut,
} = NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID as string,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
    }),
  ],
  callbacks: {
    async redirect({ baseUrl }) {
      // console.log(url, baseUrl);
      // if (url.startsWith('/')) return `${baseUrl}${url}`;
      // else if (new URL(url).origin === baseUrl) return url;
      return baseUrl;
    },
  },
  secret: process.env.AUTH_SECRET as string,
});
