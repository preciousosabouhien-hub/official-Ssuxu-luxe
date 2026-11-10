"use client";

import { useState } from "react";
import Link from "next/link";
import type { Product } from "@/data/products";
import { useCart, type ProductOptions } from "@/context/CartContext";
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

const [options, setOptions] = useState({
length: "",
laceType: "",
density: "",
color: "",
});

const isAvailable = product.availability !== "Out of Stock";

const updateOption = (field: keyof ProductOptions, value: string) => {
setOptions((previous) => ({
  ...previous,
[field]: value,
}));
};

const handleAddToCart = () => {
const requiredOptions = [
options.length,
options.laceType,
options.density,
options.color,
];

if (requiredOptions.some((option) => !option)) {
  alert("Please select all product options before adding to your bag.");
  return;
}
if (!isAvailable) return;
for (let i = 0; i < quantity; i++) {
  addToCart(product, options);
}
setAdded(true);
setTimeout(() => setAdded(false), 2000);

};

return (
  <section className="product-details-page">
    <ScrollReveal key={product.id} delay={400}>
      <div className="product-details-image">
      <img src={product.image} alt={product.name} />  
      </div>
    </ScrollReveal>

  <div className="product-details-info">

    <ScrollReveal delay={400}>
      <p className="eyebrow">{product.category}</p>
    </ScrollReveal>

    <ScrollReveal delay={450}>
      <h1>{product.name}</h1>
    </ScrollReveal>

    <ScrollReveal delay={600}>
      <p className="product-details-price">
        ${product.price.toFixed(2)}
      </p>
    </ScrollReveal>
     
     <ScrollReveal delay={650}>
    <p className="product-availability">
      <span
        className={
          isAvailable ? "availability-in-stock" : "availability-out-stock"
        }
      >
        {product.availability}
      </span>
    </p>
    </ScrollReveal>

    <ScrollReveal delay={800}>
    <p className="product-hair-type">
      Hair Type: <strong>{product.hairType}</strong>
    </p>
    <p className="product-details-description">
      {product.description}
    </p>
    </ScrollReveal>

     <ScrollReveal delay={850}>
    <h3>Product Features</h3>
    <ul className="product-features">
      {product.features.map((feature) => (
        <li key={feature}>{feature}</li>
      ))}
    </ul>
    </ScrollReveal>

    
    <div className="product-options">
     <ScrollReveal delay={900}>
       <label>
        Length
        <select value={options.length} onChange={(e) => updateOption("length", e.target.value)} >
          <option value="">Select length</option>
          {product.lengths.map((length) => (
            <option key={length} value={length}> {length} inches </option>
          ))}
        </select>
      </label>
      </ScrollReveal>

      <ScrollReveal delay={950}>
      <label>
        Lace Type
        <select
          value={options.laceType}
          onChange={(e) => updateOption("laceType", e.target.value)}
        >
          <option value="">Select lace type</option>
          {product.availableOptions.laceTypes.map((lace) => (
            <option key={lace} value={lace}>
              {lace}
            </option>
          ))}
        </select>
      </label>
      </ScrollReveal>

      <ScrollReveal delay={1000}>
      <label>
        Density
        <select
          value={options.density}
          onChange={(e) => updateOption("density", e.target.value)}
        >
          <option value="">Select density</option>
          {product.availableOptions.densities.map((density) => (
            <option key={density} value={density}>
              {density}
            </option>
          ))}
        </select>
      </label>
       </ScrollReveal>


      <ScrollReveal delay={1050}>
      <label>
        Colour
        <select
          value={options.color}
          onChange={(e) => updateOption("color", e.target.value)}
        >
          <option value="">Select colour</option>
          {product.availableOptions.colors.map((color) => (
            <option key={color} value={color}>
              {color}
            </option>
          ))}
        </select>
      </label>
      </ScrollReveal>

    </div>
    <ScrollReveal delay={1100}>
    <div className="details-quantity">
      <span>Quantity</span>
      <div className="quantity-control">
        <button
          type="button"
          onClick={() => setQuantity((q) => Math.max(1, q - 1))}
        >
          -
        </button>
        <span>{quantity}</span>
        <button
          type="button"
          onClick={() => setQuantity((q) => q + 1)}
        >
          +
        </button>
      </div>
    </div>
    </ScrollReveal>

    <ScrollReveal delay={1150}>
    <button
      type="button"
      className="add-button details-add-button"
      onClick={handleAddToCart}
      disabled={!isAvailable}
    >
      {!isAvailable
        ? "Out of Stock"
        : added
          ? "Added to Bag ✓"
          : "Add to Bag"}
    </button>
    </ScrollReveal>

    <ScrollReveal delay={1200}>
    <Link href="/shop" className="back-to-shop">
      Continue Shopping
    </Link>
    </ScrollReveal>
  </div>
</section>

);
}