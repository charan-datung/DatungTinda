// TODO: Orders hook — fetch orders with status filter, real-time subscription via Supabase channel

"use client";

import { useState, useEffect } from "react";
import type { Order } from "@/types/order";

export function useOrders() {
  const [orders, setOrders] = useState<Order[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function fetchOrders() {
      setIsLoading(true);
      try {
        const res = await fetch("/api/orders");
        const data = await res.json();
        setOrders(data.orders ?? []);
      } finally {
        setIsLoading(false);
      }
    }
    fetchOrders();
  }, []);

  return { orders, isLoading };
}
