// TODO: Storefront domain types — matches storefronts table, includes theme config and social links

export interface StorefrontTheme {
  primaryColor: string;
  accentColor: string;
  bannerUrl?: string;
  logoUrl?: string;
}

export interface Storefront {
  id: string;
  sellerId: string;
  slug: string;
  name: string;
  description?: string;
  theme: StorefrontTheme;
  socialLinks?: {
    facebook?: string;
    instagram?: string;
    tiktok?: string;
  };
  isPublished: boolean;
  createdAt: string;
  updatedAt: string;
}
