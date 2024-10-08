import HiTeaList from "@/components/hiTea/HiTeaList";
import AdminLayout from "@/layouts/AdminLayout";
import Link from "next/link";

export const metadata = {
  title: "Daawat - Dashboard",
};

export default function HiTeaPage() {
  return (
    <AdminLayout>
      <HiTeaList />
    </AdminLayout>
  );
}
