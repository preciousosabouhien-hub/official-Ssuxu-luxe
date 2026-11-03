    import Link from "next/link";
    import { products } from "@/data/products";
    import  ProductCard from "@/components/ProductCard";

    export default function ShopPage() {
    return(
            <main className="shop-page">
                <section className="shop-hero">

                 <p className="shop-eyebrow">THE SSUXULUXE COLLECTION </p>

                 <h1>Find Your Perfect Look</h1>

                 <p> Explore our collection of beautiful wigs, 
                    carefully selected to help you look and feel your best.
                 </p>
                 <span>{products.length} Products Available</span>
                </section>
                <section className="shop-products-section">
                    <div className="shop-products-heading">
                      <div>
                        <p className="shop-eyebrow">OUR COLLECTION</p>
                        <h2>All Products</h2>
                        </div>
                        <Link href="/" className="back-home-link">
                        Back to Home
                        </Link>
                        </div>
                        <div className="shop-products-grid">
                        {products.map((product) => (
                            <ProductCard key={product.id} product={product} />
                        ))}
                        </div>
                </section>
            </main>
        );
    }