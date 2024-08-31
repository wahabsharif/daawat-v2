import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import axios from "axios";
import { Menu } from "@/types/types";

const NEXT_PUBLIC_API_URL = process.env.NEXT_PUBLIC_API_URL;

interface MenuDetailProps {
  onTitleChange: (title: string) => void;
}

const MenuDetail: React.FC<MenuDetailProps> = ({ onTitleChange }) => {
  const { id } = useParams();
  const [menu, setMenu] = useState<Menu | null>(null);

  useEffect(() => {
    if (id) {
      const fetchMenu = async () => {
        try {
          const response = await axios.get(
            `${NEXT_PUBLIC_API_URL}api/menus/${id}`
          );
          setMenu(response.data);
          if (response.data && onTitleChange) {
            onTitleChange(response.data.title);
          }
        } catch (error) {
          console.error("Failed to fetch menu", error);
        }
      };

      fetchMenu();
    }
  }, [id, onTitleChange]);

  if (!menu) return <div>Loading...</div>;

  return (
    <div>
      <h1>{menu.title}</h1>
      <p>{menu.description}</p>
      <div>
        {menu.itemPrice.map((item, index) => (
          <div key={index}>
            {item.shortDescription}: ${item.price.toFixed(2)}
          </div>
        ))}
      </div>
    </div>
  );
};

export default MenuDetail;
