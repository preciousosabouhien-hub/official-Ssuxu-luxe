import Link from "next/link";
import ScrollReveal from "@/components/scrollReveal";
export default function AboutClosing() {
    return(     <section className="about-closing" >
                <ScrollReveal delay={400}>
                <p className="about-eyebrow">SSUXULUXE HAIR</p>
                </ScrollReveal>
                <ScrollReveal delay={450}>
                <h2> Your Beauty. Your Confidence. Your Style.</h2>
                </ScrollReveal>
                <ScrollReveal delay={500}>
                <p> Discover a collection designed to complement your beauty and celebrate the woman you are.
                </p>
                </ScrollReveal>
                <ScrollReveal delay={550}>
                <Link href="/shop" className="about-button">
                Shop Now 
                </Link>
                </ScrollReveal>
                </section>
                );
}
            