'use client'

import { SessionProvider } from "next-auth/react";

export default function AuthSessiopProvider({ children }) {
  return <SessionProvider >
    {children}
  </SessionProvider>;
}

//<SessionProvider session={session}>