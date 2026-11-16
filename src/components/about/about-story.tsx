import Link from "next/link";
import ScrollReveal from "@/components/scrollReveal";
export default function AboutStory() {
    return (
        <section className="about-story">
            <div className="about-story-image">
                <ScrollReveal delay={500}>
                <img src="wig3.jpeg" alt="Elegant wig styling" />
                </ScrollReveal>
                </div>

                <div className="about-story-content">
                    <ScrollReveal delay={550}>
                        <p className="about-eyebrow">WHO WE ARE</p>
                        </ScrollReveal>
                
                        <ScrollReveal delay={600}>
                        <h2> More Than Just Hair </h2>
                        </ScrollReveal>
                
                        <ScrollReveal delay={650}>
                <p> At Ssuxuluxe Hair, we believe that the right hairstyle can transform how you feel and how you express
                    yourself.
                </p></ScrollReveal>

                      <ScrollReveal delay={700}>    
                <p> Our collection brings together beautiful wig styles designed for women who appreciate elegance, 
                    versatility and personal expression.
                </p></ScrollReveal>
                  
                  <ScrollReveal delay={750}>
                <p> Whether you are looking for an everyday look or something special
                    for an unforgettable occasion, we want your experience with Ssuxuluxe Hair to feel effortless.
                </p>
                </ScrollReveal>
                </div>
        </section>
    );
}