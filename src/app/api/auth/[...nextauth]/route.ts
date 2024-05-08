import { authOptions } from "@/lib/nextauth";
import NextAuth from "next-auth/next";

const handler = NextAuth(authOptions);

console.log("handler: ", handler);

export { handler as GET, handler as POST };
