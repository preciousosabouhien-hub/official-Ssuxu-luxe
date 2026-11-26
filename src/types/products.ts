export interface ProductVariant {
  id: string;
  sku: string;
  length: string | null;
  lace_type: string | null;
  density: string | null;
  color: string | null;
  price: number;
  stock_quantity: number;
  is_preorder: boolean;
  is_active: boolean;
  image_url: string | null;
}

export interface Product {
  id: string;
  name: string;
  slug: string;
  description: string | null;
  hair_type: string | null;
  is_active: boolean;
  category_id: string | null;
  features: string[];
  category: {
    name: string;
  } | null;
  product_variants: ProductVariant[];
}