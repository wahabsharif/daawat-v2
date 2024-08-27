import LoginForm from "@/components/auth/LoginForm";
import AuthLayout from "@/layouts/AuthLayout";
import React from "react";

export const metadata = {
  title: "Authentication",
};

export default function page() {
  return (
    <AuthLayout>
      <LoginForm />
    </AuthLayout>
  );
}
