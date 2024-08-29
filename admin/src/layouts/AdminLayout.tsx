import React, { ReactNode } from "react";
import ProtectedRoute from "@/components/auth/ProtectedRoute";
import "@/styles/globals.css";
import SideBar from "@/components/common/SideBar/SideBar";

export const metadata = {
  title: "Daawat Dashboard",
};

const AdminLayout = ({ children }: { children: ReactNode }) => {
  return (
    <ProtectedRoute>
      <div className="flex h-screen w-full">
        <SideBar />
        <main className="admin-layout">{children}</main>
      </div>
    </ProtectedRoute>
  );
};

export default AdminLayout;
