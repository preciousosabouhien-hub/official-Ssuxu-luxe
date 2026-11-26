"use client";

import Link from "next/link";
import type { Product } from "@/types/products";

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  const firstVariant = product.product_variants[0];

  const category = product.category?.name || product.hair_type || "Hair";

  const image = firstVariant?.image_url;

  const price = firstVariant?.price ?? 0;

  return (
    <article className="product-card">
      <Link
        href={`/products/${product.slug}`}
        aria-label={product.name}
      >
        <div className="product-image">
          {image ? (
            <img src={image} alt={product.name} />
          ) : (
            <div className="product-image-placeholder">
              Image coming soon
            </div>
          )}

          <span className="product-label">{category}</span>
        </div>
      </Link>

      <div className="product-info">
        <div>
          <Link
            href={`/products/${product.slug}`}
            className="product-name-link"
          >
            <h3>{product.name}</h3>
          </Link>

          <p className="product-category">{category}</p>
        </div>

        <p className="product-price">
          {firstVariant ? `$${price.toFixed(2)}` : "Unavailable"}
        </p>
      </div>

      <div className="product-actions">
        <Link
          href={`/products/${product.slug}`}
          className="details-button"
        >
          View Details
        </Link>

        <Link
          href={`/products/${product.slug}`}
          className="add-button"
        >
          Choose Options <span>+</span>
        </Link>
      </div>
    </article>
  );
}