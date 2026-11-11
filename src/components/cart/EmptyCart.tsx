import Link from "next/link";

export default function EmptyCart(){
    return( <div className="empty-cart">
            <h2>Your cart is waiting for something beautiful.</h2>
        <p>You haven't added any wigs to your cart yet.</p>
        <Link href="/#shop" className="checkout-button">
          Explore Collection
        </Link>
      </div>
    );
}