import AddWeddingMenuForm from "@/components/wedding/AddWeddingMenuForm";
import WeddingMenuList from "@/components/wedding/WeddingMenuList";
import AdminLayout from "@/layouts/AdminLayout";

export const metadata = {
  title: "Daawat - Dashboard",
};

export default function AddWeddingMenuPage() {
  return (
    <AdminLayout>
      <AddWeddingMenuForm />
    </AdminLayout>
  );
}
