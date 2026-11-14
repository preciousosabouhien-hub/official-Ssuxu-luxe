import Link from "next/link";
import  ScrollReveal from "@/components/scrollReveal";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AboutHero from "@/components/about-hero";
import AboutStory from "@/components/about-story";
import BrandValues from "@/components/about-brand-values";
import AboutCollection from "@/components/about-collection";
import AboutClosing from "@/components/about-closing-section";
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