"use client";

import { useState, type FormEvent } from "react";
import Image from "next/image";
import Link from "next/link";
import { useCart } from "@/context/CartContext";
import { useRouter } from "next/navigation";

export default function CheckoutPage() {
  const { cart, subtotal, clearCart } = useCart();
  const router = useRouter();

  const [shippingMethod, setShippingMethod] = useState("standard");
  const [submitted, setSubmitted] = useState(false);

  const formatPrice = (price: number) =>
    `$${price.toLocaleString("en-US", {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    })}`;

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
     
    const formData = new FormData(event.currentTarget);

    const order = {
      orderNumber: `SSX-${Date.now().toString().slice(-8)}`,

      customer: {
        firstName: String(formData.get("firstName") || ""), 
        lastName: String(formData.get("lastName") || ""),
        email: String(formData.get("email") || ""),
      },

     shippingAddress: {
      address: String(formData.get("address") || ""),
      city: String(formData.get("city") || ""),
      state: String(formData.get("state") || ""),
      country: String(formData.get("country") || ""),
      postalCode: String(formData.get("postalCode") || ""),
     },

     shippingMethod,
     items: cart.map((item) => ({
      id: item.product.id,
      name: item.product.name,
      image: item.product.image,
      price: item.product.price,
      quantity: item.quantity,
      selectedOptions: item.selectedOptions,
     })),

     subtotal,
    };

    sessionStorage.setItem(
      "ssuxuluxe-last-order",
      JSON.stringify(order)
    );

    clearCart();

    router.push("/order-success");

    setSubmitted(true);
  };

  if (cart.length === 0) {
    return (
      <main className="checkout-page">
        <div className="checkout-empty">
          <h1>Your cart is empty</h1>
          <p>Add some beautiful styles to your cart before checking out.</p>

          <Link href="/shop" className="checkout-button">
            Explore Collection
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main className="checkout-page">
      <div className="checkout-heading">
        <p className="eyebrow">SSUXULUXE HAIR</p>
        <h1>Secure Checkout</h1>
        <p>Complete your details to continue with your order.</p>
      </div>

      {submitted ? (
        <div className="checkout-success">
          <h2>Thank you!</h2>
          <p>
            Your checkout details have been captured in this demonstration.
            Real order processing and payment will be enabled when we connect
            the backend.
          </p>

          <Link href="/shop" className="checkout-button">
            Continue Shopping
          </Link>
        </div>
      ) : (
        <form className="checkout-layout" onSubmit={handleSubmit}>
          <div className="checkout-form-section">
            <section className="checkout-card">
              <h2>Contact Information</h2>

              <div className="checkout-form-grid">
                <div className="checkout-field">
                  <label htmlFor="firstName">First Name</label>
                  <input id="firstName" name="firstName" type="text" required />
                </div>

                <div className="checkout-field">
                  <label htmlFor="lastName">Last Name</label>
                  <input id="lastName" name="lastName" type="text" required />
                </div>

                <div className="checkout-field">
                  <label htmlFor="email">Email Address</label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                  />
                </div>

                <div className="checkout-field">
                  <label htmlFor="phone">Phone Number</label>
                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    required
                  />
                </div>
              </div>
            </section>

            <section className="checkout-card">
              <h2>Shipping Address</h2>

              <div className="checkout-form-grid">
                <div className="checkout-field full-width">
                  <label htmlFor="country">Country</label>
                  <select id="country" name="country" required defaultValue="">
                    <option value="" disabled>
                      Select your country
                    </option>
                    <option value="United States">United States</option>
                    <option value="Canada">Canada</option>
                    <option value="United Kingdom">United Kingdom</option>
                    <option value="Nigeria">Nigeria</option>
                  </select>
                </div>

                <div className="checkout-field full-width">
                  <label htmlFor="address">Street Address</label>
                  <input id="address" name="address" type="text" required />
                </div>

                <div className="checkout-field">
                  <label htmlFor="city">City</label>
                  <input id="city" name="city" type="text" required />
                </div>

                <div className="checkout-field">
                  <label htmlFor="state">State / Province</label>
                  <input id="state" name="state" type="text" required />
                </div>

                <div className="checkout-field">
                  <label htmlFor="postalCode">ZIP / Postal Code</label>
                  <input id="postalCode" name="postalCode" inputMode="numeric" type="text"  autoComplete="postal-code"/>
                </div>
              </div>
            </section>

            <section className="checkout-card">
              <h2>Shipping Method</h2>

              <label className="shipping-option">
                <input
                  type="radio"
                  name="shipping"
                  value="standard"
                  checked={shippingMethod === "standard"}
                  onChange={() => setShippingMethod("standard")}
                />

                <span>
                  <strong>Standard Shipping</strong>
                  <small>Delivery timeframe and fee to be confirmed.</small>
                </span>
              </label>

              <label className="shipping-option">
                <input
                  type="radio"
                  name="shipping"
                  value="express"
                  checked={shippingMethod === "express"}
                  onChange={() => setShippingMethod("express")}
                />

                <span>
                  <strong>Express Shipping</strong>
                  <small>Delivery timeframe and fee to be confirmed.</small>
                </span>
              </label>
            </section>

            <section className="checkout-card payment-placeholder">
              <h2>Payment Information</h2>

              <p>
                Secure payment options will be available here once we
                integrate our payment gateway.
              </p>

              <div className="payment-notice">
                Payment processing is currently in demonstration mode.
              </div>
            </section>
          </div>

          <aside className="checkout-order-summary">
            <h2>Your Order</h2>

            <div className="checkout-items">
              {cart.map((item, index) => (
                <div
                  className="checkout-product"
                  key={`${item.product.id}-${index}`}
                >
                  <div className="checkout-product-image">
                    <Image
                      src={item.product.image}
                      alt={item.product.name}
                      width={90}
                      height={110}
                    />

                    <span>{item.quantity}</span>
                  </div>

                  <div className="checkout-product-info">
                    <h3>{item.product.name}</h3>

                    <p>Length: {item.selectedOptions.length || "Not selected"}</p>
                    <p>Lace: {item.selectedOptions.laceType || "Not selected"}</p>
                    <p>Density: {item.selectedOptions.density || "Not selected"}</p>
                    <p>Colour: {item.selectedOptions.color || "Not selected"}</p>

                    <strong>
                      {formatPrice(item.product.price * item.quantity)}
                    </strong>
                  </div>
                </div>
              ))}
            </div>

            <div className="checkout-total-row">
              <span>Subtotal</span>
              <span>{formatPrice(subtotal)}</span>
            </div>

            <div className="checkout-total-row">
              <span>Shipping</span>
              <span>To be confirmed</span>
            </div>

            <div className="checkout-grand-total">
              <span>Order Total</span>
              <strong>{formatPrice(subtotal)}</strong>
            </div>

            <button type="submit" className="place-order-button">
              Continue to Payment
            </button>

            <p className="checkout-disclaimer">
              No payment will be processed at this stage.
            </p>

            <Link href="/cart" className="back-to-cart">
              ← Return to Cart
            </Link>
          </aside>
        </form>
      )}
    </main>
  );
}