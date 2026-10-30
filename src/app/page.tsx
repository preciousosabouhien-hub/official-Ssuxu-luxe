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

  return (
   <main>
    <AnnouncementBar />
    <Navbar />
    <Hero />
    <Benefits />
    <ProductSection  />
    <About />
    <Footer />
    </main>

  )
}