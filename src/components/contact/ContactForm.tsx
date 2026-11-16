"use client";

import { useState, type FormEvent } from "react";

export default function ContactForm(){
    const [ submitted, setSubmitted ] = useState(false);

    const handleSubmit = (event: FormEvent<HTMlFormElement>) => {
        event.preventDefault();

        // To connect to backend later 
        setSubmitted(true);
    };

    return (
        <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-row">
                <div className="form-group">
                    <label htmlFor="name">Full Name</label>
        <input id="name" name="name" type="text" placeholder="Your full name" required />
        </div>
        <div className="form-group">
            <label htmlFor="email">Email Address</label>
            <input id="email" name="email" type="email" placeholder="Your email address" required />
            </div>
            </div>
            <div className="form-group">
                <label htmlFor="order">Order Number (optional)</label>
                <input id="order" name="order" type="text" placeholder=" Enter your order number" />
                </div>

                <div className="form-group">
                    <label htmlFor="subject">Subject</label>
                    <select id="subject" name="subject" required defaultValue="">
                        <option value="" disabled>
                            Select an enquiry type</option>
                            <option value="Product Enquiry" >Product Enquiry</option>
                            <option value="Order Status"> Order Status</option>
                            <option value="Shipping" >Shipping and Delivery</option>
                            <option value="Returns">Returns and Exchanges</option>
                            <option value="Other">Other</option>
                    </select>
                </div>
            <div className="form-group">
                <label htmlFor="message"> Your Message</label>
                <textarea id="message" name="message"
                rows={6} placeholder="How can we help you" required/>
            </div>
            <button type="submit" className="contact-submit">Send Message</button>
            {submitted && (<p className="form-success" role="status"> Thank you for reaching out! We will respond to 
                you as soon as possible</p>)}
                </form>
    );
}