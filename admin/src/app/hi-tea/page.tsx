import HiTeaManager from "@/components/hiTea/HiTeaManager";
import AdminLayout from "@/layouts/AdminLayout";

export const metadata = {
  title: "Daawat - Dashboard",
};

export default function HiTeaPage() {
  return (
    <AdminLayout>
      <div>
        <HiTeaManager />
      </div>
    </AdminLayout>
  );
}
