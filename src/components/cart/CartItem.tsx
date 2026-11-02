"use client";

import Link from "next/link";
import { useCart } from "@/context/CartContext";
import type { CartItem as CartItemType } from "@/context/CartContext";
import type { Product } from "@/data/products";

interface CartItemProps {
item: CartItemType;
}


export default function CartItem({ item }: CartItemProps) {
const {
increaseQuantity,
decreaseQuantity,
removeFromCart,
} = useCart();

return (
  <article className="cart-item" key={item.product.id}>
      <Link href={`/products/${item.product.slug}`} className="product-name-link" >
              <img
                src={item.product.image}
                alt={item.product.name}
                className="cart-item-image"
              /></Link>
  <div className="cart-item-details">
    <Link href={`/products/${item.product.slug}`} className="product-name-link" >
    <p className="product-category">
      {item.product.category}
    </p>
    <h3>{item.product.name}</h3>
    <p className="cart-item-price">
      ${item.product.price.toLocaleString("en-NG")}
    </p></Link>
    <div className="quantity-control">
      <button
        type="button"
        onClick={() => decreaseQuantity(item.product.id)}
        aria-label={`Decrease ${item.product.name} quantity`}
      >
        −
      </button>
      <span>{item.quantity}</span>
      <button
        type="button"
        onClick={() => increaseQuantity(item.product.id)}
        aria-label={`Increase ${item.product.name} quantity`}
      >
        +
      </button>
    </div>
    <button
      type="button"
      className="remove-button"
      onClick={() => removeFromCart(item.product.id)}
    >
      Remove
    </button>
  </div>
  <p className="cart-line-total">
    ${(item.product.price * item.quantity).toLocaleString("en-NG")}
  </p>
</article>

);
}