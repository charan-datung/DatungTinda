// TODO: Order domain types — matches orders table, includes line items, payment, and fulfillment status

export type OrderStatus = "pending" | "paid" | "processing" | "shipped" | "delivered" | "cancelled";
export type PaymentStatus = "pending" | "paid" | "failed" | "refunded";

export interface OrderItem {
  productId: string;
  productName: string;
  priceCentavos: number;
  quantity: number;
}

export interface Order {
  id: string;
  sellerId: string;
  buyerName: string;
  buyerEmail: string;
  buyerPhone: string;
  items: OrderItem[];
  totalCentavos: number;
  status: OrderStatus;
  paymentStatus: PaymentStatus;
  gcashReferenceId?: string;
  createdAt: string;
  updatedAt: string;
}
