"use client";

import Link from "next/link";
import ProductCard from "./ProductCard";
import ScrollReveal from "./scrollReveal";
import { useProducts } from "@/hooks/useProducts";

export default function ProductSection() {
  const { products, loading, error } = useProducts();

  const featuredProducts = products.slice(0, 8);

  return (
    <section className="shop-section" id="shop">
      <div className="section-heading">
        <div>
          <p className="eyebrow">FIND YOUR SIGNATURE STYLE</p>
          <h2>Shop the Collection</h2>
        </div>

        <p className="section-description">
          Thoughtfully selected styles to help you look and feel your best.
        </p>
      </div>

      {loading ? (
        <p>Loading products...</p>
      ) : error ? (
        <p>Unable to load products. Please try again later.</p>
      ) : featuredProducts.length === 0 ? (
        <p>No products are currently available.</p>
      ) : (
        <div className="product-grid">
          {featuredProducts.map((product, index) => (
            <ScrollReveal key={product.id} delay={index * 150}>
              <ProductCard product={product} />
            </ScrollReveal>
          ))}
        </div>
      )}

      <div className="view-all-container">
        <Link href="/shop" className="view-all-button">
          View All Products <span> → </span>
        </Link>
      </div>
    </section>
  );
}