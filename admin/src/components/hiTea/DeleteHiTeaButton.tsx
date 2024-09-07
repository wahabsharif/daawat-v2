import { useRouter } from "next/navigation";

const DeleteHiTeaButton = ({ id }: { id: string }) => {
  const router = useRouter();

  const handleDelete = async () => {
    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}api/hi-tea/${id}`,
        {
          method: "DELETE",
        }
      );
      if (response.ok) {
        router.push("/hi-tea"); // Redirect to the Hi-Tea list page
        router.refresh(); // Refresh the page to update the list
      } else {
        console.error("Failed to delete Hi-Tea");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <button onClick={handleDelete} style={{ color: "red" }}>
      Delete
    </button>
  );
};

export default DeleteHiTeaButton;
