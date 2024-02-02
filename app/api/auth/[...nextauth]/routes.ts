import { db } from "@/app/_lib/prisma";
import { PrismaAdapter } from "@auth/prisma-adapter";
import NextAuth from "next-auth";
import { Adapter } from "next-auth/adapters";
import GoogleProveider from "next-auth/providers/google";

const handler = NextAuth({
  adapter: PrismaAdapter(db) as Adapter,
  providers: [
    GoogleProveider({
      clientId: "",
      clientSecret: "",
    }),
  ],
});

export { handler as GET, handler as POST };
