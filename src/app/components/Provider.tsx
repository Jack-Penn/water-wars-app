"use client";
import { SessionProvider } from "next-auth/react";
import { FunctionComponent, ReactNode } from "react";

interface ProviderProps {
  children: ReactNode;
}

const Provider: FunctionComponent<ProviderProps> = ({ children }) => {
  return <SessionProvider>{children}</SessionProvider>;
};

export default Provider;
