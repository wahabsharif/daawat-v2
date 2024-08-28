import React, { ReactNode } from "react";
import "@/styles/auth.css";

const AuthLayout = ({ children }: { children: ReactNode }) => {
  return (
    <main className="flex items-center justify-center h-screen w-screen">
      {children}
    </main>
  );
};

export default AuthLayout;
