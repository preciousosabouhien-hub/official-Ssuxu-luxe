interface CartHeaderProps {
    cartCount: number;
}

export default function 
CartHeader({
    cartCount}: CartHeaderProps ){
        return(
    <div className="cart-heading">
      <p className="eyebrow">YOUR SELECTION</p>
      <h1>Shopping Cart</h1>
      <p>{cartCount} item(s) in your cart</p>
    </div>
        );
    }