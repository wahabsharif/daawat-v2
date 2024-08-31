export interface ItemPrice {
  shortDescription: string;
  price: number;
}

export interface Menu {
  _id: string;
  title: string;
  slug: string;
  sku?: string;
  description?: string;
  itemPrice: ItemPrice[];
  addOns: string[];
  packaging: string[];
  category: string;
  subCategory: string;
  createdAt?: string;
  updatedAt?: string;
}
