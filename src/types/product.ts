// TODO: Product domain types — matches products table, includes computed fields (isInStock, etc.)

export interface Product {
  id: string;
  sellerId: string;
  name: string;
  description?: string;
  priceCentavos: number;
  stock: number;
  imageUrls: string[];
  categoryId?: string;
  isActive: boolean;
  createdAt: string;
  updatedAt: string;
}
