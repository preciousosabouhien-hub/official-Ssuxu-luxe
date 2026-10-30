import { Product } from " @/data/products";

interface ProductCardProps {
    product: Product;
    onAddToCart: () => void;
}

export default function ProductCard({
    product,
    onAddToCart,
}: ProductCardProps) {
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

          <button
            className="add-button"
            onClick={onAddToCart}
          >
            Add to Bag <span>+</span>
          </button>
        </article>

      );
    }