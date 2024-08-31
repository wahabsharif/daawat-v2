import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import axios from "axios";
import { Menu } from "@/types/types";
import SingleLoader from "@/components/common/Loaders/SingleLoader";

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
            `${process.env.NEXT_PUBLIC_API_URL}api/menus/${id}`
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

  if (!menu)
    return (
      <div>
        <SingleLoader />
      </div>
    );

  // Formatter for prices
  const formatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "PKR",
    maximumFractionDigits: 0,
  });

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-2">{menu.title}</h1>
      {menu.description && <p className="text-lg mb-4">{menu.description}</p>}

      <div className="mb-4">
        <h2 className="text-xl font-semibold mb-2">Prices</h2>
        {menu.itemPrice.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {menu.itemPrice.map((item, index) => (
              <div
                key={index}
                className="p-4 border rounded-lg cursor-pointer shadow-sm"
              >
                <p className="text-sm font-medium">{item.shortDescription}</p>
                <p className="text-lg font-semibold">
                  {formatter.format(item.price)}
                </p>
              </div>
            ))}
          </div>
        ) : (
          <p>No prices available.</p>
        )}
      </div>

      {menu.addOns.length > 0 && (
        <div className="mb-4">
          <h2 className="text-xl font-semibold">Add-Ons</h2>
          <ul>
            {menu.addOns.map((addOn, index) => (
              <li key={index} className="text-sm mb-1">
                {addOn}
              </li>
            ))}
          </ul>
        </div>
      )}

      {menu.packaging.length > 0 && (
        <div className="mb-4">
          <h2 className="text-xl font-semibold">Packaging</h2>
          <ul>
            {menu.packaging.map((pack, index) => (
              <li key={index} className="text-sm mb-1">
                {pack}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default MenuDetail;
