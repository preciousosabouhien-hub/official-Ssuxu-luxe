"use client";

import Link from "next/link";
import type { Product } from "@/data/products";
import { useCart } from "@/context/CartContext";

interface ProductCardProps {
product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
const { addToCart } = useCart();

return (
   <article className="product-card">
   
      <Link href={`/products/${product.slug}`}  aria-label={`${product.name}`}>
              
               <div className="product-image">
                  <img src={product.image} alt={product.name} />
                <span className="product-label"> {product.category}</span>
                </div>
      </Link>
    
      <div className="product-info">
          <div>
            <Link href={`/products/${product.slug}`} className="product-name-link" >
              <h3>{product.name}</h3>
            </Link>
            <p className="product-category">{product.category}</p>
          </div>
          <p className="product-price">
            ${product.price.toLocaleString("en-US")}
          </p>
      </div>
      <div className="product-actions">
          <Link href={`/products/${product.slug}`} className="view-details-button" >
            View Details
          </Link>
          <button type="button" className="add-button" onClick={() => addToCart(product)} >
            Add to Cart <span>+</span>
          </button>
      </div>
</article>

);
}