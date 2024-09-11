// components/EditForm.tsx

import React from "react";

interface Pricing {
  persons: number;
  price: number;
}

interface WeddingMenu {
  _id: string;
  title: string;
  items: {
    itemsTitle: string;
    items: string[];
  }[];
  pricing: Pricing[];
}

interface EditFormProps {
  menu: WeddingMenu;
  onClose: () => void;
  onSave: (updatedMenu: WeddingMenu) => void;
}

const EditForm: React.FC<EditFormProps> = ({ menu, onClose, onSave }) => {
  const [editingMenu, setEditingMenu] = React.useState<WeddingMenu>(menu);

  const handleChangeItemGroupTitle = (index: number, value: string) => {
    const newItems = [...editingMenu.items];
    newItems[index].itemsTitle = value;
    setEditingMenu({ ...editingMenu, items: newItems });
  };

  const handleChangeItem = (
    groupIndex: number,
    itemIndex: number,
    value: string
  ) => {
    const newItems = [...editingMenu.items];
    newItems[groupIndex].items[itemIndex] = value;
    setEditingMenu({ ...editingMenu, items: newItems });
  };

  const handleAddItemGroup = () => {
    const newItems = [...editingMenu.items, { itemsTitle: "", items: [""] }];
    setEditingMenu({ ...editingMenu, items: newItems });
  };

  const handleAddItem = (groupIndex: number) => {
    const newItems = [...editingMenu.items];
    newItems[groupIndex].items.push("");
    setEditingMenu({ ...editingMenu, items: newItems });
  };

  const handleChangePricing = (
    index: number,
    field: "persons" | "price",
    value: number
  ) => {
    const newPricing = [...editingMenu.pricing];
    newPricing[index] = { ...newPricing[index], [field]: value };
    setEditingMenu({ ...editingMenu, pricing: newPricing });
  };

  const handleAddPricing = () => {
    const newPricing = [...editingMenu.pricing, { persons: 0, price: 0 }];
    setEditingMenu({ ...editingMenu, pricing: newPricing });
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    onSave(editingMenu);
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-50">
      <div className="bg-white p-6 rounded shadow-lg max-w-lg w-full max-h-screen overflow-auto">
        <h3 className="text-lg font-bold mb-4 text-center text-gray-900">
          Edit Wedding Menu
        </h3>
        <form onSubmit={handleSubmit}>
          {/* Title Field */}
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">
              Title
            </label>
            <input
              type="text"
              value={editingMenu.title}
              onChange={(e) =>
                setEditingMenu({ ...editingMenu, title: e.target.value })
              }
              className="text-gray-600  mt-1 block w-full border border-gray-300 rounded p-2"
            />
          </div>

          {/* Items Field */}
          <div className="mb-4">
            <h4 className="text-md font-semibold text-gray-800 mb-2">Items</h4>
            {editingMenu.items.map((itemGroup, groupIndex) => (
              <div key={groupIndex} className="mb-4">
                <label className="block text-sm font-medium text-center text-gray-700">
                  Item Group Title
                </label>
                <input
                  type="text"
                  value={itemGroup.itemsTitle}
                  onChange={(e) =>
                    handleChangeItemGroupTitle(groupIndex, e.target.value)
                  }
                  className="text-gray-900 mt-1 block w-full border border-gray-300 rounded p-2"
                />
                <div className="mt-2">
                  <label className="block text-sm text-center font-medium text-gray-700">
                    Items
                  </label>
                  {itemGroup.items.map((item, itemIndex) => (
                    <input
                      key={itemIndex}
                      type="text"
                      value={item}
                      onChange={(e) =>
                        handleChangeItem(groupIndex, itemIndex, e.target.value)
                      }
                      className="text-gray-900 mt-1 block w-full border border-gray-300 rounded p-2 mb-2"
                    />
                  ))}
                  <button
                    type="button"
                    onClick={() => handleAddItem(groupIndex)}
                    className="text-blue-600 hover:text-blue-900"
                  >
                    Add Item
                  </button>
                </div>
              </div>
            ))}
            <button
              type="button"
              onClick={handleAddItemGroup}
              className="text-blue-600 hover:text-blue-900"
            >
              Add Item Group
            </button>
          </div>

          {/* Pricing Field */}
          <div className="mb-4">
            <h4 className="text-md font-semibold text-gray-800 mb-2">
              Pricing
            </h4>
            {editingMenu.pricing.map((price, priceIndex) => (
              <div key={priceIndex} className="mb-4">
                <label className="block text-sm text-center font-medium text-gray-700">
                  Persons
                </label>
                <input
                  type="number"
                  value={price.persons}
                  onChange={(e) =>
                    handleChangePricing(priceIndex, "persons", +e.target.value)
                  }
                  className="text-gray-900 mt-1 block w-full border border-gray-300 rounded p-2"
                />
                <label className="block text-sm text-center font-medium text-gray-700 mt-2">
                  Price
                </label>
                <input
                  type="number"
                  value={price.price}
                  onChange={(e) =>
                    handleChangePricing(priceIndex, "price", +e.target.value)
                  }
                  className="text-gray-900 mt-1 block w-full border border-gray-300 rounded p-2"
                />
              </div>
            ))}
            <button
              type="button"
              onClick={handleAddPricing}
              className="text-blue-600 hover:text-blue-900"
            >
              Add Pricing
            </button>
          </div>

          <div className="flex justify-end space-x-4">
            <button
              type="button"
              onClick={onClose}
              className="bg-gray-500 text-white px-4 py-2 rounded"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="bg-blue-600 text-white px-4 py-2 rounded"
            >
              Save
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditForm;
