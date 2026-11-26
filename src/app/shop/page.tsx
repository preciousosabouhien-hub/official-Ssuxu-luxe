"use client";

import ProductCard from "@/components/ProductCard";
import ScrollReveal from "@/components/scrollReveal";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useProducts } from "@/hooks/useProducts";

export default function ShopPage() {
  const { products, loading, error } = useProducts();

  return (
    <main className="shop-page">
      <Navbar />

      <section className="shop-hero">
        <ScrollReveal delay={250}>
          <p className="shop-eyebrow">THE SSUXULUXE COLLECTION</p>
        </ScrollReveal>

        <ScrollReveal delay={400}>
          <h1>
            <span>Find Your</span> Perfect Look
          </h1>
        </ScrollReveal>

        <ScrollReveal delay={450}>
          <p className="shop-hero-p">
            Explore our collection of beautiful wigs, <br />
            carefully selected to help you look and feel your best.
          </p>
        </ScrollReveal>

        <ScrollReveal delay={600}>
          <span>{loading ? "Loading products..." : `${products.length} Products Available`}</span>
        </ScrollReveal>
      </section>

      <section className="shop-products-section">
        <div className="shop-products-heading">
          <div>
            <ScrollReveal delay={650}>
              <p className="shop-eyebrow">OUR COLLECTION</p>
              <h2>All Products</h2>
            </ScrollReveal>
          </div>
        </div>

        {loading ? (
          <p>Loading products...</p>
        ) : error ? (
          <p>Unable to load products. Please try again later.</p>
        ) : products.length === 0 ? (
          <p>No products are currently available.</p>
        ) : (
          <div className="shop-products-grid">
            {products.map((product, index) => (
              <ScrollReveal key={product.id} delay={index * 150}>
                <ProductCard product={product} />
              </ScrollReveal>
            ))}
          </div>
        )}
      </section>

      <Footer />
    </main>
  );
}