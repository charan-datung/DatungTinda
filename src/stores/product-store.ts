// TODO: Product Zustand store — cache fetched products, track selected product, handle optimistic updates

import { create } from "zustand";
import type { Product } from "@/types/product";

interface ProductState {
  products: Product[];
  selectedProduct: Product | null;
  isLoading: boolean;
  setProducts: (products: Product[]) => void;
  setSelectedProduct: (product: Product | null) => void;
  setLoading: (loading: boolean) => void;
}

export const useProductStore = create<ProductState>()((set) => ({
  products: [],
  selectedProduct: null,
  isLoading: false,
  setProducts: (products) => set({ products }),
  setSelectedProduct: (selectedProduct) => set({ selectedProduct }),
  setLoading: (isLoading) => set({ isLoading }),
}));
