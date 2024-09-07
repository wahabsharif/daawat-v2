import AddHiTeaForm from "@/components/hiTea/AddHiTeaForm";
import AdminLayout from "@/layouts/AdminLayout";

export const metadata = {
  title: "Daawat - Dashboard",
};

export default function HiTeaPage() {
  return (
    <AdminLayout>
      <div>
        <AddHiTeaForm />
      </div>
    </AdminLayout>
  );
}
