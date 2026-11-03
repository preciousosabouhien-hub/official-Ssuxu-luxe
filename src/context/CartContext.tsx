
 "use client";

import {
createContext,useContext, useEffect, useState, type ReactNode, } from "react";

import type { Product } from "@/data/products";

export interface ProductOptions {
length: string;
laceType: string;
density: string;
color: string;
}

export interface CartItem {
product: Product;
quantity: number;
selectedOptions: ProductOptions;
}

interface CartContextType {
cart: CartItem[];
cartCount: number;
subtotal: number;
addToCart: (product: Product, options: ProductOptions) => void;
increaseQuantity: (productId: number) => void;
decreaseQuantity: (productId: number) => void;
removeFromCart: (productId: number, selectedOptions?: ProductOptions) => void;
clearCart: () => void;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export function CartProvider({ children }: { children: ReactNode }) {
const [cart, setCart] = useState<CartItem[]>([]);
const [isLoaded, setIsLoaded] = useState(false);

useEffect(() => {
try {
const savedCart = localStorage.getItem("ssuxuluxe-cart");

  if (savedCart) {
    const parsedCart = JSON.parse(savedCart);
    if (Array.isArray(parsedCart)) {
      setCart(
        parsedCart
          .filter(
            (item) =>
              item.product &&
              item.product.id &&
              Number.isFinite(item.quantity) &&
              item.quantity > 0
          )
          .map((item) => ({
            ...item,
            selectedOptions: item.selectedOptions ?? {
              length: "",
              laceType: "",
              density: "",
              color: "",
            },
          }))
      );
    }
  }
} catch (error) {
  console.error("Error loading cart:", error);
  localStorage.removeItem("ssuxuluxe-cart");
} finally {
  setIsLoaded(true);
}

}, []);

useEffect(() => {
if (isLoaded) {
localStorage.setItem("ssuxuluxe-cart", JSON.stringify(cart));
}
}, [cart, isLoaded]);

const addToCart = (product: Product, options: ProductOptions) => {
setCart((currentCart) => {
const existingItem = currentCart.find(
(item) =>
item.product.id === product.id &&
JSON.stringify(item.selectedOptions) === JSON.stringify(options)
);

  if (existingItem) {
    return currentCart.map((item) =>
      item.product.id === product.id &&
      JSON.stringify(item.selectedOptions) === JSON.stringify(options)
        ? { ...item, quantity: item.quantity + 1 }
        : item
    );
  }
  return [
    ...currentCart,
    {
      product,
      quantity: 1,
      selectedOptions: options,
    },
  ];
});

};

const increaseQuantity = (productId: number) => {
setCart((currentCart) =>
currentCart.map((item) =>
item.product.id === productId
? { ...item, quantity: item.quantity + 1 } : item)); };

const decreaseQuantity = (productId: number) => {
setCart((currentCart) =>
currentCart
.map((item) =>
item.product.id === productId
? { ...item, quantity: item.quantity - 1 }: item)
.filter((item) => item.quantity > 0));};

const removeFromCart = (
productId: number,
selectedOptions?: ProductOptions
) => {
setCart((currentCart) =>
currentCart.filter(
(item) =>
item.product.id !== productId || (selectedOptions && JSON.stringify(item.selectedOptions) !== JSON.stringify(selectedOptions))));};

const clearCart = () => {
setCart([]);
};

const cartCount = cart.reduce(
(total, item) => total + item.quantity,
0
);

const subtotal = cart.reduce(
(total, item) => total + item.product.price * item.quantity,
0
);

return (
 <CartContext.Provider value={{cart,cartCount,subtotal,
addToCart,increaseQuantity,decreaseQuantity,removeFromCart,clearCart,}}>
{children}
</CartContext.Provider>
);
}

export function useCart() {
const context = useContext(CartContext);

if (!context) {
throw new Error("useCart must be used inside CartProvider");
}

return context;
}