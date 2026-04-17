// TODO: Storefront hook — fetch and update seller's storefront config, preview slug availability

"use client";

import { useState, useEffect } from "react";
import type { Storefront } from "@/types/storefront";

export function useStorefront() {
  const [storefront, setStorefront] = useState<Storefront | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function fetchStorefront() {
      setIsLoading(true);
      try {
        const res = await fetch("/api/storefront");
        const data = await res.json();
        setStorefront(data.storefront ?? null);
      } finally {
        setIsLoading(false);
      }
    }
    fetchStorefront();
  }, []);

  return { storefront, isLoading, setStorefront };
}
