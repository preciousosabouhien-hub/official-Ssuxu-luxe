import {products} from "@/data/products";
import ProductCard from "./ProductCard";

export default function ProductSection() {
    return (
        <section className="shop-section" id="shop" >
        <div className="section-heading">
            <div> <p className="eyebrow">
               FIND YOUR SIGNATURE STYLE </p>
               <h2> Shop the Collection</h2>
            </div>
            <p className="section-description"> 
            Thoughtfully selected styles to help you look and feel your best.</p>
        </div>
            <div className="product-grid">
                {products.map((product, index)  =>(
                    <div key={product.id} className={`animate-up delay-${Math.min(index + 1, 4)}`}>
                     <ProductCard product={product} />
                    </div>)
            )}
                </div>
                <p className="demo-note">
                    These products and prices are placeholders. We will replace them with your actual wig inventory.</p> 
                 </section>
    );
}