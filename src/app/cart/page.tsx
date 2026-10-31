"use client";


import { useCart } from "@/context/CartContext";

import AnnouncementBar from "@/components/AnnouncementBar";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

import CartHeader from "@/components/cart/CartHeader";
import CartList from "@/components/cart/CartList";
import CartSummary from "@/components/cart/CartSummary";
import EmptyCart from "@/components/cart/EmptyCart";

export default function CartPage() {
const { cart, cartCount } = useCart();

return (
   <main>
    <Navbar />
  <section className="cart-page">
    <CartHeader cartCount={cartCount} />
    {cart.length === 0 ? (
      <EmptyCart />
    ) : (
      <div className="cart-layout">
        <CartList />
        <CartSummary />
      </div>
    )}
  </section>
  <Footer />
</main>

);
}