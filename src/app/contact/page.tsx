import Link from "next/link";
import ScrollReveal from "@/components/scrollReveal";
import ContactHero from "@/components/contact/contact-hero";
import ContactInfo from "@/components/contact/contact-info";
import ContactMain from "@/components/contact/contact-main";
import ContactFaq from "@/components/contact/contact-faq";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";


export default function ContactPage() {
    return(
        <main className="contact-page">
            <Navbar />
            <ContactHero />
            <ContactInfo />
            <ContactMain />
            <ContactFaq  />
            <Footer />
        </main>


    );
}
