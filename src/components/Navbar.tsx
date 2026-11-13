"use client";

import { useState } from "react";
import Link from "next/link";
import { useCart } from "@/context/CartContext";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faXmark, faCartShopping } from "@fortawesome/free-solid-svg-icons" ;

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const { cartCount } = useCart();

  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="navbar">
      <Link href="/" className="logo" onClick={closeMenu}>
        <div className="nav-icon">
          <img
            src="/Ssuxuluxe-hair.png"
            alt="Ssuxuluxe Hair"
          />
        </div>
      </Link>

      <button
        type="button"
        className="menu-toggle"
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Toggle navigation"
        aria-expanded={menuOpen}
        aria-controls="main-navigation"
      >
       <FontAwesomeIcon icon={menuOpen ? faXmark : faBars } />
      </button>

      <nav
        id="main-navigation"
        className={menuOpen ? "nav-links open" : "nav-links"}
      >
        <Link href="/" onClick={closeMenu}>
          Home
        </Link>

        <Link href="/shop" onClick={closeMenu}>
          Shop
        </Link>

        <Link href="/#about" onClick={closeMenu}>
          About
        </Link>

        <Link href="/#contact" onClick={closeMenu}>
          Contact
        </Link>
      </nav>

      <Link href="/cart" className="cart-link" onClick={closeMenu}>
      <FontAwesomeIcon icon={faCartShopping} /> ({cartCount})
      </Link>
    </header>
  );
}
