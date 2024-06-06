import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
const handler = NextAuth({
  providers: [
    CredentialsProvider({
      name: "credentials",
      credentials: {
        username: { label: "Usuario", type: "text" },
        password: { label: "Contraseña", type: "password" },
      },
      authorize(credentials, req) {
        console.log(credentials);
        return true;
      },
    }),
  ],
});

export { handler as GET, handler as POST };
