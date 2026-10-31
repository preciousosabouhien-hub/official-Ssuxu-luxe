import ScrollReveal from "./scrollReveal";
export default function Hero() {
    return(
        
  <section className="hero">
    <div className="hero-content ">
      <ScrollReveal delay={250}>
      <p className="eyebrow">THE ART OF LUXURY HAIR</p>
      </ScrollReveal>
      
      <ScrollReveal delay={400}>
      <h1>
        Your Hair.
        <br />
        Your <span>Crown.</span>
      </h1>
      </ScrollReveal>

      <ScrollReveal delay={600}>
      <p className="hero-description">
        Discover beautiful wigs designed to complement your style,
        celebrate your confidence, and make every moment unforgettable.
      </p>
      </ScrollReveal>
       
       <ScrollReveal delay={650}>
      <a href="#shop" className="primary-button">
        Explore Collection <span>→</span>
      </a>
      </ScrollReveal>

      <ScrollReveal delay={700}>
      <p className="hero-note">BEAUTY IN EVERY STRAND.</p>
      </ScrollReveal>
    </div>

       <ScrollReveal delay={800}>
    <div className="hero-image ">
      
      <img
        src="/wig1.jpeg"
        alt="Beauty inspiration for Ssuxuluxe Hair"
      />

      <div className="image-caption">
        <span>CONFIDENCE LOOKS GOOD ON YOU</span>
        <span>SSUXULUXE HAIR</span>
      </div>
    </div></ScrollReveal>
       
      
    <div className="hero-number">01 — YOUR BEAUTY STORY</div>
    
  </section>

    );
}