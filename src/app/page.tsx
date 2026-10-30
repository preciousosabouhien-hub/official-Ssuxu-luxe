"use client";

import { useState } from "react";

import AnnouncementBar from "@/components/AnnouncementBar";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Benefits from "@/components/Benefits";
import ProductSection from "@/components/ProductSection";
import About from "@/components/About";
import Footer from "@/components/Footer";




export default function Home() {
  const [cartCount, setCartCount] = useState(0);
  
  const handleAddToCart = () => {
   setCartCount((count) => count + 1 );
  };

  return (
   <main>
    <Navbar cartCount={cartCount} />
    <Hero />
    <ProductSection onAddToCart={handleAddToCart} />
    <Footer />
    </main>

  )
}