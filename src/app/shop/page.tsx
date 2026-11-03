    import Link from "next/link";
    import { products } from "@/data/products";
    import  ProductCard from "@/components/ProductCard";
    import ScrollReveal from "@/components/scrollReveal";
    import Footer from "@/components/Footer";
    export default function ShopPage() {
    return(
            <main className="shop-page">
                <section className="shop-hero">
                 <ScrollReveal delay={250}>
                 <p className="shop-eyebrow">THE SSUXULUXE COLLECTION </p>
                  </ScrollReveal>

                   <ScrollReveal delay={400}>
                 <h1>Find Your Perfect Look</h1>
                    </ScrollReveal>

                    <ScrollReveal delay={450}>
                 <p className="shop-hero-p"> Explore our collection of beautiful wigs, 
                    carefully selected to help you look and feel your best.
                 </p>
                 </ScrollReveal>

                 <ScrollReveal delay={600}>
                 <span>{products.length} Products Available</span>
                 </ScrollReveal>

                </section>
                <section className="shop-products-section">
                    <div className="shop-products-heading">
                      <div>
                        <ScrollReveal delay={650}>
                        <p className="shop-eyebrow">OUR COLLECTION</p>
                        <h2>All Products</h2>
                        </ScrollReveal>
                        </div>
                        <ScrollReveal delay={700}>
                        <Link href="/" className="back-home-link">
                        Back to Home
                        </Link>
                        </ScrollReveal>
                        </div>
                        <div className="shop-products-grid">
                        {products.map((product, index) => (
                             <ScrollReveal key={product.id} delay={index * 150}>
                               <ProductCard product={product} />
                              </ScrollReveal>
                        ))}
                        </div>
                </section>
                <Footer />
            </main>
        );
    }