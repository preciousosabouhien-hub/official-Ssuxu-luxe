import Link from "next/link";
import ScrollReveal from "@/components/scrollReveal";
export default function BrandValues() {
    return (
         
        <section className="about-values">
            
                <div className="about-section-heading">
                   <ScrollReveal delay={800}>
                     <p className="about-eyebrow">WHAT WE BELIEVE IN </p>
                    </ScrollReveal>
                    <ScrollReveal delay={850}>
                        <h2> The Values Behind Our Brand </h2>
                    </ScrollReveal>
                    <ScrollReveal delay={900}>
                        <p> Everything we do is guided by the experience we want every customer to have.</p>
                    </ScrollReveal>
                    </div>
                    <div className="about-values-grid">
                    <ScrollReveal delay={200}>
                    <article className="about-value-card">
                    <span>01</span>
                    <h3>Quality</h3>
                    <p> We aim to offer carefully selected styles that meet our brand's quality expressions.
                    </p>
                    </article>
                    </ScrollReveal>
                    <ScrollReveal delay={400}>
                        <article className="about-value-card">
                            <span>02</span>
                            <h3> Confidence</h3>
                            <p> We celebrate individuality and encourage every woman to embrace her personal style.
                            </p>
                        </article>
                    </ScrollReveal>
                    <ScrollReveal delay={600}>
                    <article className="about-value-card">
                    <span>03</span>
                    <h3>Elegance</h3>
                    <p> We appreciate timeless beauty and styles that make every
                        occasion feel special.
                    </p>
                    </article>
                    </ScrollReveal>
                    <ScrollReveal delay={800}>
                    <article className="about-value-card">
                    <span> 04 </span>
                    <h3> Customer Care </h3>
                    <p> We want every customer to enjoy a welcoming, helping and enjoyable shopping experience.</p>
                    </article>
                    </ScrollReveal>
                    </div>
         </section>

    );
}