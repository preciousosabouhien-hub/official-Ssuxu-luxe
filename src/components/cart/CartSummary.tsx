"use client";

import ScrollReveal from "@/components/scrollReveal";
import Link from "next/link";
import { useCart } from "@/context/CartContext";

export default function CartSummary() {
const { cartCount, subtotal } = useCart();

return (
  <aside className="cart-summary">
  <ScrollReveal delay={200}> <h2>Order Summary</h2> </ScrollReveal>

  <div className="summary-row">
    <ScrollReveal delay={300}>
    <span>Items ({cartCount})</span>
    <span>₦{subtotal.toLocaleString("en-NG")}</span>
    </ScrollReveal>
  </div>

  <div className="summary-row">
    <ScrollReveal delay={400}>
    <span>Delivery</span>
    <span>Calculated at checkout</span>
    </ScrollReveal>
  </div>

  <div className="summary-total">
    <ScrollReveal delay={600}>
    <span>Subtotal</span>
    <span>₦{subtotal.toLocaleString("en-NG")}</span>
  </ScrollReveal>
  </div>

  <ScrollReveal delay={800}>
  <Link href="/checkout" className="checkout-button">
    Proceed to Checkout
  </Link>
  </ScrollReveal>

  <ScrollReveal delay={800}>
  <Link href="/#shop" className="continue-shopping">
    Continue Shopping
  </Link>
  </ScrollReveal>
</aside>

);
}