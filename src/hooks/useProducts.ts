"use client";

import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabase";
import type { Product } from "@/types/products";

export function useProducts() {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchProducts() {
      try {
        setLoading(true);
        setError(null);

        const { data, error } = await supabase
          .from("products")
          .select(`
            id,
            name,
            slug,
            description,
            hair_type,
            is_active,
            category_id,
            features,
            category:categories!products_category_id_fkey(name),
            product_variants (
              id,
              sku,
              length,
              lace_type,
              density,
              color,
              price,
              stock_quantity,
              is_preorder,
              is_active,
              image_url
            )
          `)
          .eq("is_active", true)
          .order("created_at", { ascending: false });

        if (error) throw error;

        const activeProducts: Product[] = (data ?? []).map((product: any) => ({
          ...product,
          product_variants: (product.product_variants ?? []).filter(
            (variant: any) => variant.is_active
          ),
        }));

        setProducts(activeProducts);
      } catch (err) {
        console.error("Error fetching products:", err);
        setError(
          err instanceof Error ? err.message : "Failed to load products."
        );
      } finally {
        setLoading(false);
      }
    }

    fetchProducts();
  }, []);

  return { products, loading, error };
}