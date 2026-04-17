// TODO: Products hook — fetch seller's products from API, handle pagination, search, and refetch after mutations

"use client";

import { useEffect } from "react";
import { useProductStore } from "@/stores/product-store";

export function useProducts() {
  const { products, isLoading, setProducts, setLoading } = useProductStore();

  useEffect(() => {
    async function fetchProducts() {
      setLoading(true);
      try {
        const res = await fetch("/api/products");
        const data = await res.json();
        setProducts(data.products ?? []);
      } finally {
        setLoading(false);
      }
    }
    fetchProducts();
  }, [setLoading, setProducts]);

  return { products, isLoading };
}
