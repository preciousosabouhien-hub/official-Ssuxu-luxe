import Link from "next/link";
import ScrollReveal from "@/components/scrollReveal";
export default function AboutCollection() {
    return (
        <section className="about-collection">
            <div className="about-collection-content">
                <ScrollReveal delay={250}>
                    <p className="about-eyebrow">DISCOVER YOUR STYLE</p>
                </ScrollReveal>
                <ScrollReveal delay={300}>
                    <h2> Find Your Signature Look </h2>
                    </ScrollReveal>
                    <ScrollReveal delay={350}>
                    <p> From sleek and sophisticated to soft and voluminous,
                        explore styles that complement your individuality.
                    </p>
                    </ScrollReveal>
                    <ScrollReveal delay={400}>
                    <Link href="/shop" className="about-button" >
                    Shop All Collection
                    </Link>
                </ScrollReveal>
                </div>
                <div className="about-collection-images">
                    <ScrollReveal delay={400}>
                    <img src="/hair3.png" alt="Body wave hair" />
                    </ScrollReveal>
                    <ScrollReveal delay={600}>
                    <img src="/wig3.jpeg" alt="Silky straight wig" />
                    </ScrollReveal>
                    <ScrollReveal delay={800}>
                    <img src="/hair4.png" alt="Curly wig" />
                    </ScrollReveal>
                </div>
                </section>

    );
}