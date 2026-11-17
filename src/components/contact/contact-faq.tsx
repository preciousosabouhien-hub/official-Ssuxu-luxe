import ScrollReveal from "@/components/scrollReveal";
export default function ContactFaq(){
    return(
          <section className="contact-faq">
                        <ScrollReveal delay={200}>
                            <p className="contact-eyebrow"> NEED MORE INFORMATION?</p>
                        </ScrollReveal>
                        <ScrollReveal delay={300}>
                            <h2> Frequently Asked Questions</h2>
                        </ScrollReveal>
                       
                        <div className="faq-list">
                             <ScrollReveal delay={400}>
                            <details>
                                <summary> How long does shipping take</summary>
                                <p> Shipping timelines will depend on the delivery destination and the 
                                    business's shipping policy.
                                    Please contact our team for assistance.
                                    </p>
                            </details>
                            </ScrollReveal>
                            <ScrollReveal delay={500}>
                            <details>
                                    <summary>Do you offer international shipping?</summary>
                                    <p>Please contact our customer support team to confirm available destinations.
                                        </p>
                            </details>
                            </ScrollReveal>
                            <ScrollReveal delay={600}>
                            <details>
                                    <summary>Can I customize my wig? </summary>
                                    <p>Contact us with ypur preferred stlye and requirements 
                                        so our team can advise you on available options.</p>
                            </details>
                            </ScrollReveal>
                            <ScrollReveal delay={700}>
                            <details>
                                <summary>How can I check my order status </summary>
                                <p> Include your order number when contacting our customer support team for assistance </p>
                            </details>
                            </ScrollReveal>
                            </div>
                            </section>
    );
}