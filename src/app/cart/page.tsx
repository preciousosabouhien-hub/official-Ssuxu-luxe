"use client";

import Link from "next/link";
import { useCart } from "@/context/CartContext";
import Navbar from "@/components/Navbar";
import AnnouncementBar from "@/components/AnnouncementBar";
import Footer from "@/components/Footer";

export default function CartPage() {
const {
cart,
cartCount,
subtotal,
increaseQuantity,
decreaseQuantity,
removeFromCart,
} = useCart();

return (
  <section className="cart-page">
    <div className="cart-heading">
      <p className="eyebrow">YOUR SELECTION</p>
      <h1>Shopping Bag</h1>
      <p>{cartCount} item(s) in your bag</p>
    </div>
    {cart.length === 0 ? (
      <div className="empty-cart">
        <h2>Your bag is waiting for something beautiful.</h2>
        <p>You haven't added any wigs to your bag yet.</p>
        <Link href="/#shop" className="checkout-button">
          Explore Collection
        </Link>
      </div>
    ) : (
      <div className="cart-layout">
        <div className="cart-items">
          {cart.map((item) => (
            <article className="cart-item" key={item.product.id}>
              <img
                src={item.product.image}
                alt={item.product.name}
                className="cart-item-image"
              />
              <div className="cart-item-details">
                <p className="product-category">
                  {item.product.category}
                </p>
                <h3>{item.product.name}</h3>
                <p className="cart-item-price">
                  ₦{item.product.price.toLocaleString("en-NG")}
                </p>
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
                ₦{(item.product.price * item.quantity).toLocaleString("en-NG")}
              </p>
            </article>
          ))}
        </div>
        <aside className="cart-summary">
          <h2>Order Summary</h2>
          <div className="summary-row">
            <span>Items ({cartCount})</span>
            <span>₦{subtotal.toLocaleString("en-NG")}</span>
          </div>
          <div className="summary-row">
            <span>Delivery</span>
            <span>Calculated at checkout</span>
          </div>
          <div className="summary-total">
            <span>Subtotal</span>
            <span>₦{subtotal.toLocaleString("en-NG")}</span>
          </div>
          <Link href="/checkout" className="checkout-button">
            Proceed to Checkout
          </Link>
          <Link href="/#shop" className="continue-shopping">
            Continue Shopping
          </Link>
        </aside>
      </div>
    )}
  </section>

);
}