import Link from "next/link";
import  ScrollReveal from "@/components/about/scrollReveal";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AboutHero from "@/components/about/about-hero";
import AboutStory from "@/components/about/about-story";
import BrandValues from "@/components/about/about-brand-values";
import AboutCollection from "@/components/about/about-collection";
import AboutClosing from "@/components/about/about-closing-section";
export default function AboutPage(){
    return (
        <main className="about-page">
            <Navbar />
            <AboutHero />
            <AboutStory />
            <BrandValues />
            <AboutCollection />
            <AboutClosing /> 
            <Footer />
        </main>
    );
}