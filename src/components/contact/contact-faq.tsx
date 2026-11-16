import ScrollReveal from "@/components/scrollReveal";
export default function ContactFaq(){
    return(
          <section className="contact-faq">
                        <ScrollReveal>
                            <p className="contact-eyebrow"> NEED MORE INFORMATION?</p>
                            <h2> Frequently Asked Questions</h2>
                            </ScrollReveal>
                        <div className="faq-list">
                            <details>
                                <summary> How long does shipping take</summary>
                                <p> Shipping timelines will depend on the delivery destination and the 
                                    business's shipping policy.
                                    Please contact our team for assistance.
                                    </p>
                            </details>
                            <details>
                                    <summary>Do you offer international shipping?</summary>
                                    <p>Please contact our customer support team to confirm available destinations.
                                        </p>
                            </details>
                            <details>
                                    <summary>Can I customize my wig? </summary>
                                    <p>Contact us with ypur preferred stlye and requirements 
                                        so our team can advise you on available options.</p>
                            </details>
                            <details>
                                <summary>How can I check my order status </summary>
                                <p> Include your order number when contacting our customer support team for assistance </p>
                            </details>
                            </div>
                            </section>
    );
}