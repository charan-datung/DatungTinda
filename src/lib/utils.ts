// TODO: Shared utility functions — cn() for class merging, formatPrice(), slugify(), truncate()

import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatPrice(centavos: number, currency = "PHP") {
  return new Intl.NumberFormat("en-PH", { style: "currency", currency }).format(
    centavos / 100
  );
}

export function slugify(text: string) {
  return text
    .toLowerCase()
    .replace(/\s+/g, "-")
    .replace(/[^\w-]/g, "");
}
