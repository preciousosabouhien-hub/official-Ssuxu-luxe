import { Product } from "@/data/products";
import { useCart } from "@/context/CartContext";

interface ProductCardProps {
    product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  const { addToCart } = useCart();
    return (
        <article className="product-card">
            <div className="product-image">
                <img src={product.image} alt={product.name} />
                <span className="product-label"> {product.category}</span>
                </div>

                <div className="product-info">
                    <div>
                        <h3>{product.name}</h3>
                        <p className="product-category">{product.category}</p>
                        </div>

                              <p className="product-price">
              ₦{product.price.toLocaleString("en-NG")}
            </p>
          </div>

          <button className="add-button" onClick={() => addToCart(product)}>
            Add to Cart <span>+</span>
          </button>
        </article>

      );
    }