import { SessionProvider } from "next-auth/react";

export default function AuthSessiopProvider({ children }) {
  return <SessionProvider session={session}>
    {children}
  </SessionProvider>;
}
