"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import DeleteHiTeaButton from "./DeleteHiTeaButton";
import AddHiTeaButton from "./AddHiTeaButton";

const HiTeaList = () => {
  const [hiTeaList, setHiTeaList] = useState<any[]>([]);

  useEffect(() => {
    const fetchHiTea = async () => {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}api/hi-tea`
      );
      const data = await response.json();
      setHiTeaList(data);
    };
    fetchHiTea();
  }, []);

  return (
    <div className="p-6">
      <div className="flex items-center justify-between mb-4">
        <h1 className="text-2xl font-bold">Hi-Tea List</h1>
        <AddHiTeaButton />
      </div>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-teal-800 rounded-xl shadow-md">
          <thead className="bg-teal-700 border-b rounded-xl">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-800 uppercase tracking-wider">
                Title
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-800 uppercase tracking-wider">
                Items
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-800 uppercase tracking-wider">
                Price
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-800 uppercase tracking-wider">
                Actions
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {hiTeaList.map((item) => (
              <tr key={item._id}>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                  {item.title}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800">
                  {item.items.join(", ")}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800">
                  PKR {item.price.toLocaleString()}
                </td>
                <td className="px-6 py-4 space-x-4 whitespace-nowrap text-sm font-medium">
                  {/* <Link
                    href={`/hi-tea/edit/${item._id}`}
                    className="text-blue-500 hover:text-blue-600"
                  >
                    Edit
                  </Link> */}
                  <DeleteHiTeaButton id={item._id} />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default HiTeaList;
