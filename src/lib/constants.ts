// TODO: App-wide constants — route paths, API endpoints, plan limits, supported payment methods

export const ROUTES = {
  home: "/",
  login: "/login",
  register: "/register",
  dashboard: "/",
  products: "/products",
  storefront: "/storefront",
  marketing: "/marketing",
  orders: "/orders",
  analytics: "/analytics",
} as const;

export const APP_NAME = "Datung Tinda";
export const DEFAULT_CURRENCY = "PHP";
export const MAX_PRODUCT_IMAGES = 8;
