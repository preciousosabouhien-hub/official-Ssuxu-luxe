import Link from "next/link";
import ScrollReveal from "@/components/scrollReveal";
export default function EmptyCart(){
    return( <div className="empty-cart">
           <ScrollReveal delay={200}>
            <h2>Your cart is waiting for something beautiful.</h2>
            </ScrollReveal>
            <ScrollReveal delay={400}>
        <p>You haven't added any wigs to your cart yet.</p>
        </ScrollReveal>
        <ScrollReveal delay={600}>
        <Link href="/#shop" className="checkout-button">
          Explore Collection
        </Link>
        </ScrollReveal>
      </div>
    );
}