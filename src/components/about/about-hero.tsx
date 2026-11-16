import Link from "next/link";
import ScrollReveal from "@/components/scrollReveal";
export default function AboutHero() {
   return (  
     <section className="about-hero">
                <div  className="about-hero-content"> 
                    <ScrollReveal delay={100}>
                    <p className="about-eyebrow">THE SSUXULUXE STORY </p>
                    </ScrollReveal>
                
                    <ScrollReveal delay={200}>
                <h1> Beauty Begins <br /> with Confidence. </h1>
                </ScrollReveal>
                
                <ScrollReveal delay={250}>
                <p> Discover a world where elegance meets individuality. At Ssuxuluxe Hair, we believe your hair should be an expression
                    of your beauty, personality and confidence.
                </p>
                </ScrollReveal>

                <ScrollReveal delay={300}>
                <Link href="/shop" className="about-button">
                Explore Our Collection
                </Link>
                </ScrollReveal>
                </div>
                <div className="about-hero-image">
                <ScrollReveal delay={400}>  
                    <img src="/hair3.png" alt="Ssuxuluxe Hair Collection" />
                    </ScrollReveal>
                    </div>
       </section> 
       );
}