import Link from "next/link";
import  ScrollReveal from "@/components/scrollReveal";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
export default function AboutPage(){
    return (
        <main className="about-page">
            <Navbar />
        <section className="about-hero">
        <div  className="about-hero-content"> 
            <ScrollReveal delay={100}>
            <p className="about-eyebrow">THE SSUXULUXE STORY </p>
            </ScrollReveal>
           
            <ScrollReveal delay={200}>
        <h1> Beauty Begins <br /> with Confidence. </h1>
        </ScrollReveal>
        
        <ScrollReveal delay={250}>
        <p> Discover a world where elegance meets individuality. At Ssuxuluxe Hair, we believe your hair should be an expression
            of your beauty, personality and confidence.
        </p>
        </ScrollReveal>

        <ScrollReveal delay={300}>
        <Link href="/shop" className="about-button">
        Explore Our Collection
        </Link>
        </ScrollReveal>
        </div>
        <div className="about-hero-image">
          <ScrollReveal delay={400}>  
            <img src="/hair3.png" alt="Ssuxuluxe Hair Collection" />
            </ScrollReveal>
            </div>
       </section>
       {/* SSuxuluxe Story */}
        <section className="about-story">
            <div className="about-story-image">
                <ScrollReveal delay={500}>
                <img src="wig3.jpeg" alt="Elegant wig styling" />
                </ScrollReveal>
                </div>

                <div className="about-story-content">
                    <ScrollReveal delay={550}>
                        <p className="about-eyebrow">WHO WE ARE</p>
                        </ScrollReveal>
                
                        <ScrollReveal delay={600}>
                        <h2> More Than Just Hair </h2>
                        </ScrollReveal>
                
                        <ScrollReveal delay={650}>
                <p> At Ssuxuluxe Hair, we believe that the right hairstyle can transform how you feel and how you express
                    yourself.
                </p></ScrollReveal>

                      <ScrollReveal delay={700}>    
                <p> Our collection brings together beautiful wig styles designed for women who appreciate elegance, 
                    versatility and personal expression.
                </p></ScrollReveal>
                  
                  <ScrollReveal delay={750}>
                <p> Whether you are looking for an everyday look or something special
                    for an unforgettable occasion, we want your experience with Ssuxuluxe Hair to feel effortless.
                </p>
                </ScrollReveal>
                </div>
        </section>

        {/* BRAND VALUES */}
        <section className="about-values">
            
                <div className="about-section-heading">
                   <ScrollReveal delay={800}>
                     <p className="about-eyebrow">WHAT WE BELIEVE IN </p>
                    </ScrollReveal>
                    <ScrollReveal delay={850}>
                        <h2> The Values Behind Our Brand </h2>
                    </ScrollReveal>
                    <ScrollReveal delay={900}>
                        <p> Everything we do is guided by the experience we want every customer to have.</p>
                    </ScrollReveal>
                    </div>
                    <div className="about-values-grid">
                    <ScrollReveal delay={200}>
                    <article className="about-value-card">
                    <span>01</span>
                    <h3>Quantity</h3>
                    <p> We aim to offer carefully selected styles that meet our brand's quality expressions.
                    </p>
                    </article>
                    </ScrollReveal>
                    <ScrollReveal delay={400}>
                        <article className="about-value-card">
                            <span>02</span>
                            <h3> Confidence</h3>
                            <p> We celebrate individuality and encourage every woman to embrace her personal style.
                            </p>
                        </article>
                    </ScrollReveal>
                    <ScrollReveal delay={600}>
                    <article className="about-value-card">
                    <span>03</span>
                    <h3>Elegance</h3>
                    <p> We appreciate timeless beauty and styles that make every
                        occasion feel special.
                    </p>
                    </article>
                    </ScrollReveal>
                    <ScrollReveal delay={800}>
                    <article className="about-value-card">
                    <span> 04 </span>
                    <h3> Customer Care </h3>
                    <p> We want every customer to enjoy a welcoming, helping and enjoyable shopping experience.</p>
                    </article>
                    </ScrollReveal>
                    </div>
                    </section>
        {/* COLLECTION SECTION */}
        <section className="about-collection">
            <div className="about-collection-content">
                <ScrollReveal delay={250}>
                    <p className="about-eyebrow">DISCOVER YOUR STYLE</p>
                </ScrollReveal>
                <ScrollReveal delay={300}>
                    <h2> Find Your Signature Look </h2>
                    </ScrollReveal>
                    <ScrollReveal delay={350}>
                    <p> From sleek and sophisticated to soft and voluminous,
                        explore styles that complement your individuality.
                    </p>
                    </ScrollReveal>
                    <ScrollReveal delay={400}>
                    <Link href="/shop" className="about-button" >
                    Shop All Collection
                    </Link>
                </ScrollReveal>
                </div>
                <div className="about-collection-images">
                    <ScrollReveal delay={400}>
                    <img src="/hair3.png" alt="Body wave hair" />
                    </ScrollReveal>
                    <ScrollReveal delay={600}>
                    <img src="/wig3.jpeg" alt="Silky straight wig" />
                    </ScrollReveal>
                    <ScrollReveal delay={800}>
                    <img src="/hair4.png" alt="Curly wig" />
                    </ScrollReveal>
                </div>
                </section>

                {/* CLOSING SECTION */}
                <section className="about-closing" >
                <ScrollReveal delay={400}>
                <p className="about-eyebrow">SSUXULUXE HAIR</p>
                </ScrollReveal>
                <ScrollReveal delay={450}>
                <h2> Your Beauty. Your Confidence. Your Style.</h2>
                </ScrollReveal>
                <ScrollReveal delay={500}>
                <p> Discover a collection designed to complement your beauty and celebrate the woman you are.
                </p>
                </ScrollReveal>
                <ScrollReveal delay={550}>
                <Link href="/shop" className="about-button">
                Shop Now 
                </Link>
                </ScrollReveal>
                </section>
                <Footer />
</main>
    );
}