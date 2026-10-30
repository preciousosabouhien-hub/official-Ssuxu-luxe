"use client";

import {
createContext,
useContext,
useEffect,
useState,
type ReactNode,
} from "react";

import type { Product } from "@/data/products";

// Defines the structure of each cart item
export interface CartItem {
product: Product;
quantity: number;
}

// Defines the functions and values available through CartContext
interface CartContextType {
cart: CartItem[];
cartCount: number;
subtotal: number;
addToCart: (product: Product) => void;
increaseQuantity: (productId: number) => void;
decreaseQuantity: (productId: number) => void;
removeFromCart: (productId: number) => void;
clearCart: () => void;
}

// Create the Cart Context
const CartContext = createContext<CartContextType | undefined>(undefined);

// Cart Provider
export function CartProvider({ children }: { children: ReactNode }) {
const [cart, setCart] = useState<CartItem[]>([]);
const [isLoaded, setIsLoaded] = useState(false);

// Load saved cart from localStorage when the app starts
useEffect(() => {
try {
const savedCart = localStorage.getItem("ssuxuluxe-cart");

  if (savedCart) {
    const parsedCart = JSON.parse(savedCart);
    if (Array.isArray(parsedCart)) {
      setCart(parsedCart);
    }
  }
} catch (error) {
  console.error("Error loading cart:", error);
  localStorage.removeItem("ssuxuluxe-cart");
} finally {
  setIsLoaded(true);
}

}, []);

// Save cart to localStorage whenever it changes
useEffect(() => {
if (isLoaded) {
localStorage.setItem("ssuxuluxe-cart", JSON.stringify(cart));
}
}, [cart, isLoaded]);

// Add a product to the cart
const addToCart = (product: Product) => {
setCart((currentCart) => {
const existingItem = currentCart.find(
(item) => item.product.id === product.id
);

  if (existingItem) {
    return currentCart.map((item) =>
      item.product.id === product.id
        ? { ...item, quantity: item.quantity + 1 }
        : item
    );
  }
  return [...currentCart, { product, quantity: 1 }];
});

};

// Increase product quantity
const increaseQuantity = (productId: number) => {
setCart((currentCart) =>
currentCart.map((item) =>
item.product.id === productId
? { ...item, quantity: item.quantity + 1 }
: item
)
);
};

// Decrease product quantity
// Remove the product if its quantity reaches zero
const decreaseQuantity = (productId: number) => {
setCart((currentCart) =>
currentCart
.map((item) =>
item.product.id === productId
? { ...item, quantity: item.quantity - 1 }
: item
)
.filter((item) => item.quantity > 0)
);
};

// Remove a product completely
const removeFromCart = (productId: number) => {
setCart((currentCart) =>
currentCart.filter((item) => item.product.id !== productId)
);
};

// Empty the entire cart
const clearCart = () => {
setCart([]);
};

// Calculate total number of products in the cart
const cartCount = cart.reduce(
(total, item) => total + item.quantity,
0
);

// Calculate cart subtotal
const subtotal = cart.reduce(
(total, item) => total + item.product.price * item.quantity,
0
);

return (
<CartContext.Provider
value={{
cart,
cartCount,
subtotal,
addToCart,
increaseQuantity,
decreaseQuantity,
removeFromCart,
clearCart,
}}
>
{children}
</CartContext.Provider>
);
}

// Custom hook for accessing the cart
export function useCart() {
const context = useContext(CartContext);

if (!context) {
throw new Error("useCart must be used inside CartProvider");
}

return context;
}