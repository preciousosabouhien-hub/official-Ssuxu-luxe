"use client";

import { useState } from "react";


const products = [
  {
    id:1,
    name: "Luxury Body Wave",
    category: "Human Hair",
    price: 185000,
    image:"/hair3.jpeg",
  },
    {
    id:2,
    name: "Silky Straight Wig",
    category: "Human Hair",
    price: 220000,
    image:"/wig3.jpeg",
    },
    {
    id:3,
    name: "Classic Curly Wig",
    category: "Synthetic Hair",
    price: 45000,
    image:"/hair4.jpeg"
    },
      {
    id:4,
    name: "Luxury Body Wave",
    category: "Human Hair",
    price: 185000,
    image:"/wig.jpeg",
  },
    {
    id:5,
    name: "Silky Straight Wig",
    category: "Human Hair",
    price: 220000,
    image:"/hair1.jpeg",
    },
    {
    id:6,
    name: "Classic Curly Wig",
    category: "Synthetic Hair",
    price: 45000,
    image:"/hair2.jpeg"
    },
];

export default function Home() {
  const [cartCount, setCartCount] = useState(0);
  const [menuOpen, setMenuOpen]  = useState(false);

  return (
    <main>
  <header className="navbar">
    <a href="/" className="logo">
      Ssu<span>xu</span>luxe Hair
    </a>

    <button
      className="menu-toggle"
      onClick={() => setMenuOpen(!menuOpen)}
      aria-label="Toggle navigation"
      aria-expanded={menuOpen}
    >
      ☰
    </button>

    <nav className={menuOpen ? "nav-links open" : "nav-links"}>
      <a href="/">Home</a>
      <a href="#shop" onClick={() => setMenuOpen(false)}>
        Shop
      </a>
      <a href="#about" onClick={() => setMenuOpen(false)}>
        About
      </a>
      <a href="#contact" onClick={() => setMenuOpen(false)}>
        Contact
      </a>
      <a href="#shop" className="cart-link" onClick={() => setMenuOpen(false)}>
        Bag ({cartCount})
      </a>
    </nav>
  </header>

  <section className="hero">
    <div className="hero-content">
      <p className="eyebrow">THE ART OF LUXURY HAIR</p>

      <h1>
        Your Hair.
        <br />
        Your <span>Crown.</span>
      </h1>

      <p className="hero-description">
        Discover beautiful wigs designed to complement your style,
        celebrate your confidence, and make every moment unforgettable.
      </p>

      <a href="#shop" className="primary-button">
        Explore Collection <span>→</span>
      </a>

      <p className="hero-note">BEAUTY IN EVERY STRAND.</p>
    </div>

    <div className="hero-image">
      <img
        src="/wig1.jpeg"
        alt="Beauty inspiration for Ssuxuluxe Hair"
      />
      <div className="image-caption">
        <span>CONFIDENCE LOOKS GOOD ON YOU</span>
        <span>SSUXULUXE HAIR</span>
      </div>
    </div>

    <div className="hero-number">01 — YOUR BEAUTY STORY</div>
  </section>

  <section className="benefits">
    <div>✧ Curated Hair Collections</div>
    <div>✧ Styles for Every Occasion</div>
    <div>✧ Beauty Without Compromise</div>
  </section>

  <section className="shop-section" id="shop">
    <div className="section-heading">
      <div>
        <p className="eyebrow">FIND YOUR SIGNATURE STYLE</p>
        <h2>Shop the Collection</h2>
      </div>

      <p className="section-description">
        Thoughtfully selected styles to help you look and feel your best.
      </p>
    </div>

    <div className="product-grid">
      {products.map((product) => (
        <article className="product-card" key={product.id}>
          <div className="product-image">
            <img src={product.image} alt={product.name} />
            <span className="product-label">{product.category}</span>
          </div>

          <div className="product-info">
            <div>
              <h3>{product.name}</h3>
              <p className="product-category">{product.category}</p>
            </div>

            <p className="product-price">
              ₦{product.price.toLocaleString("en-NG")}
            </p>
          </div>

          <button
            className="add-button"
            onClick={() => setCartCount((count) => count + 1)}
          >
            Add to Bag <span>+</span>
          </button>
        </article>
      ))}
    </div>

    <p className="demo-note">
      Preview products and prices are placeholders. We will replace them
      with your actual inventory.
    </p>
  </section>

  <section className="about-section" id="about">
    <p className="eyebrow">MORE THAN JUST HAIR</p>
    <h2>Beauty begins with how you feel.</h2>
    <p>
      At Ssuxuluxe Hair, we believe the right style is more than an
      accessory. It is a way to express yourself, embrace your individuality,
      and step confidently into every room.
    </p>
    <a href="#shop" className="primary-button">
      Find Your Style <span>→</span>
    </a>
  </section>

  <footer className="footer" id="contact">
    <a href="/" className="logo">
      Ssuxuluxe Hair
    </a>
    <p>Your beauty. Your confidence. Your crown.</p>
    <p>© 2026 Ssuxuluxe Hair. All rights reserved.</p>
  </footer>
</main>

  )
}