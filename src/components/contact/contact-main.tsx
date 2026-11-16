import Link from "next/link";
import ScrollReveal from "@/components/scrollReveal";
import ContactForm from "@/components/contact/ContactForm";
export default function ContactMain(){
    return(
          <section className="contact-main">
                        <div className="contact-main-text">
                            <ScrollReveal>
                                <p className="contact-eyebrow"> SEND US A MESSAGE </p>
                            <h2> Let's Start a Conversation</h2>
                            <p> Whether you're looking for product information, need assistance with an order, or simply have a question, fill
                                out the form and let us know.</p>
                        <Link href="/shop" className="contact-shop-link"> Explore Our Collection →</Link>
                        </ScrollReveal>
                        </div>
                        <ScrollReveal delay={200}>
                            <ContactForm />
                        </ScrollReveal>
                        </section>
    );
}