import ScrollReveal from "./scrollReveal";
export default function About(){
    return( 
       <section className="about-section" id="about">
       
   <ScrollReveal delay={200}> <p className="eyebrow">MORE THAN JUST HAIR</p></ScrollReveal>
   <ScrollReveal delay={300}>
    <h2 className="about-section-h2">Beauty begins with how you feel.</h2></ScrollReveal>
     <ScrollReveal delay={300}><p className="about-paragraph"> 
      At Ssuxuluxe Hair, we believe the right style is more than an
      accessory. It is a way to express yourself, embrace your individuality,
      and step confidently into every room.
    
    </p>  </ScrollReveal>
   
    <ScrollReveal delay={300}>
    <a href="#shop" className="primary-button">
      Find Your Style <span>→</span>
    </a></ScrollReveal>
  </section>

    );
}