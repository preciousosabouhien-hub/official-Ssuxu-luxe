export default function Hero() {
    return(
        
  <section className="hero">
    <div className="hero-content">
      <p className="eyebrow">THE ART OF LUXURY HAIR</p>

      <h1>
        Your Hair.
        <br />
        Your <span>Crown.</span>
      </h1>

      <p className="hero-description">
        Discover beautiful wigs designed to complement your style,
        celebrate your confidence, and make every moment unforgettable.
      </p>

      <a href="#shop" className="primary-button">
        Explore Collection <span>→</span>
      </a>

      <p className="hero-note">BEAUTY IN EVERY STRAND.</p>
    </div>

    <div className="hero-image">
      <img
        src="/wig1.jpeg"
        alt="Beauty inspiration for Ssuxuluxe Hair"
      />
      <div className="image-caption">
        <span>CONFIDENCE LOOKS GOOD ON YOU</span>
        <span>SSUXULUXE HAIR</span>
      </div>
    </div>

    <div className="hero-number">01 — YOUR BEAUTY STORY</div>
  </section>

    );
}