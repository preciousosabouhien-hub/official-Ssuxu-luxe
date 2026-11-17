import ScrollReveal from "@/components/scrollReveal";

interface CartHeaderProps {
    cartCount: number;
}

export default function 
CartHeader({
    cartCount}: CartHeaderProps ){
        return(
    <div className="cart-heading">
        <ScrollReveal delay={200}>
      <p className="eyebrow">YOUR SELECTION</p>
      </ScrollReveal>
      <ScrollReveal delay={350}>
      <h1>Shopping Cart</h1>
      </ScrollReveal>
      <ScrollReveal delay={450}>
      <p>{cartCount} item(s) in your cart</p>
      </ScrollReveal>
    </div>
        );
    }