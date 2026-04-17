// TODO: Zod schemas for all form inputs and API payloads — product, order, storefront, auth

import { z } from "zod";

export const productSchema = z.object({
  name: z.string().min(1).max(200),
  description: z.string().max(2000).optional(),
  priceCentavos: z.number().int().positive(),
  stock: z.number().int().min(0),
  categoryId: z.string().uuid().optional(),
});

export const storefrontSchema = z.object({
  slug: z
    .string()
    .min(3)
    .max(50)
    .regex(/^[a-z0-9-]+$/),
  name: z.string().min(1).max(100),
  description: z.string().max(500).optional(),
});

export const orderSchema = z.object({
  buyerName: z.string().min(1),
  buyerEmail: z.string().email(),
  buyerPhone: z.string().min(10),
  items: z.array(
    z.object({ productId: z.string().uuid(), quantity: z.number().int().min(1) })
  ),
});

export type ProductInput = z.infer<typeof productSchema>;
export type StorefrontInput = z.infer<typeof storefrontSchema>;
export type OrderInput = z.infer<typeof orderSchema>;
