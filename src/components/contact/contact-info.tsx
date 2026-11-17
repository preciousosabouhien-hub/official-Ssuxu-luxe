import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faEnvelope, faClock } from "@fortawesome/free-solid-svg-icons" ;
import ScrollReveal from "@/components/scrollReveal";
export default function ContactInfo(){
    return (

                   <section className="contact-information">
                       
                            <div className="contact-heading">
                             <ScrollReveal delay={200}>    <p className="contact-eyebrow">GET IN TOUCH </p></ScrollReveal>
                          <ScrollReveal delay={400}>       <h2> How Can We Help?</h2></ScrollReveal>
                            </div>
                        
                        <div className="contact-info-grid">
                            <ScrollReveal delay={600}>
                                <article className="contact-info-card">
                                    <span> <FontAwesomeIcon icon={faEnvelope} /></span>
                                    <h3> Email Support</h3>
                                    <p>Have a question? Send us an email.</p>
                                    <a href="mailto:REPLACE_WITH_BUSINESS_EMAIL">
                                        Contact via Email</a>
                                </article>
                                </ScrollReveal>
                            <ScrollReveal delay={800}>
                            <article className="contact-info-card">
                                <span> <FontAwesomeIcon icon={faPhone} /></span>
                                <h3>Phone Support</h3>
                                <p> Speak with our customer support team </p>
                                <a className="contact-placeholder">
                                    Business phone number coming soon
                                </a>
                                </article>    
                            </ScrollReveal>

                            <ScrollReveal delay={1000}>
                                <article className="contact-info-card">
                                    <span> <FontAwesomeIcon icon={faClock} /></span>
                                    <h3> Business Hours </h3>
                                    <p> We're here to help with your enquiries.</p>
                                    <a className="contact-placeholder">
                                        Business hours coming soon
                                    </a>
                                    </article>
                            </ScrollReveal>
                                    </div>
                    </section>

    );
}