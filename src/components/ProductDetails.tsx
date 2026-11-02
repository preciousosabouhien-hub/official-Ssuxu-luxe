"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import type { Product } from "@/data/products";
import { useCart } from "@/context/CartContext";
import ScrollReveal from "./scrollReveal";

interface ProductDetailsProps {
product: Product;
}

export default function ProductDetails({
product,
}: ProductDetailsProps) {
const { addToCart } = useCart();
const [quantity, setQuantity] = useState(1);
const [added, setAdded] = useState(false);

const handleAddToCart = () => {
for (let i = 0; i < quantity; i++) {
addToCart(product);
}

setAdded(true);
setTimeout(() => setAdded(false), 2000);

};

return (
    <section className="product-details-page">
       <ScrollReveal key={product.id}  delay={400} >
          <div className="product-details-image">
              <img src={product.image} alt={product.name} />
              </div>
       </ScrollReveal>
             
  <div className="product-details-info">

    <ScrollReveal key={product.category}  delay={400}>
    <p className="eyebrow">{product.category}</p>
    </ScrollReveal>

    <ScrollReveal key={product.name} delay={450}>
    <h1>{product.name}</h1>
    </ScrollReveal>

    <ScrollReveal key={product.price} delay={600}>
    <p className="product-details-price">
      ${product.price.toFixed(2)}
    </p>
    </ScrollReveal>

    <ScrollReveal key={product.description} delay={800}>
    <p className="product-details-description">
      {product.description}
    </p>
    </ScrollReveal>

    <ScrollReveal delay={850}>
    <h3>Product Features</h3>
    </ScrollReveal>

    <ScrollReveal  delay={900} >
    <ul className="product-features">
      {product.features.map((feature) => (
        <li key={feature}>{feature}</li>
      ))}
    </ul>
    </ScrollReveal>

    <ScrollReveal delay={1100}>
    <div className="details-quantity">
      <span>Quantity</span>
      <div className="quantity-control">
        <button
          type="button"
          onClick={() => setQuantity((q) => Math.max(1, q - 1))}
          aria-label="Decrease quantity"
        >
          -
        </button>
        <span>{quantity}</span>
        <button
          type="button"
          onClick={() => setQuantity((q) => q + 1)}
          aria-label="Increase quantity"
        >
          +
        </button>
      </div>
    </div>
     </ScrollReveal>

    <ScrollReveal delay={1200}>
    <button
      type="button"
      className="add-button details-add-button"
      onClick={handleAddToCart}
    >
      {added ? "Added to cart ✓" : "Add to cart"}
    </button></ScrollReveal>

    <ScrollReveal delay={1200}>
    
    <Link href="/shop" className="back-to-shop">
      Continue Shopping
    </Link></ScrollReveal>
  </div>
</section>

);
}