import ScrollReveal from "@/components/scrollReveal";
export default function ContactHero() {
    return(
         <section className="contact-hero">
                <ScrollReveal delay={200}>
                    <p className="contact-eyebrow">WE ARE HERE FOR YOU</p>
                </ScrollReveal>
                <ScrollReveal delay={300}>
                    <h1> We'd Love to Hear From You</h1>
                </ScrollReveal>
                <ScrollReveal delay={400}>
                    <p>Have a question about our collection or need help with an order? We'd be happy to assist you.</p>
                    </ScrollReveal>
                   </section>

           
    );
}