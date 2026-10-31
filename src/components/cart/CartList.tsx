"use client"
import ScrollReveal from "@/components/scrollReveal";
import { useCart } from "@/context/CartContext";
import CartItem from "./CartItem";

export default function CartList(){
    const { cart } = useCart();

    return (
        <div className="cart-items">
        {cart.map((item, index) => (
        <ScrollReveal key={item.product.id} delay={index * 500}>
    <CartItem  item={item} />
            </ScrollReveal>
            
        ))}</div>
    );
}