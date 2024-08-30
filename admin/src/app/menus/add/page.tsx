import AddMenuForm from "@/components/menu/AddMenuForm";
import AdminLayout from "@/layouts/AdminLayout";

export const metadata = {
  title: "Daawat - Dashboard",
};

export default function AddMenuPage() {
  return (
    <AdminLayout>
      <AddMenuForm />
    </AdminLayout>
  );
}
