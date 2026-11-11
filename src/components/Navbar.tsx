"use client";
//     Ssu<span>xu</span>luxe Hair 
     
import { useState } from "react";
import { useCart } from "@/context/CartContext";


export default function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);
    const { cartCount } = useCart();

    return (
        <header className="navbar">
            <a href="/" className="logo">
            <div className="nav-icon">
               <img
        src="/Ssuxuluxe-hair.png"
        alt="Beauty inspiration for Ssuxuluxe Hair"
      /></div></a>

            <button type="button" className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)}
                aria-label="Toggle navigation" 
                aria-expanded={menuOpen}> ☰ </button>
                
                
    <nav className={menuOpen ? "nav-links open" : "nav-links"}>
      <a href="/">Home</a>
      <a href="/shop" onClick={() => setMenuOpen(false)}>
        Shop
      </a>
      <a href="#about" onClick={() => setMenuOpen(false)}>
        About
      </a>
      <a href="#contact" onClick={() => setMenuOpen(false)}>
        Contact
      </a>
      
    </nav><a href="/cart" className="cart-link">
        Cart({cartCount})
      </a>
    </header>
    );
}