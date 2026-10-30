"use client";

import { createContext, useContext, useEffect, type Reactnode } from "react" ;
import type { Product } from "@/data/products";

export interface CartItem {
    product: Product;
    quantity: number;
}

interface CartContextType {
    cart: CartItem[];
    cartCount:number;
    subtotal: number;
    addToCart: (product: Product) => void;
    increaseQuantity: (productId: number) => void;
    decreaseQuantity: (productId: number) => void;
    removeFromCart: (productId: number) => void;
    clearCart: () => void;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export function CartProvider({ children }:{ children: ReactNode }) {
    const [cart, setCart] = useState<CartItem[]>([]);
    const [isLoaded, setIsLoaded] = useState(false);

    // Load saved cart when the application starts:
    useEffect(() => {
        try{
            const savedCart = localStorage.getItem("ssuxuluxe-cart");
            if (savedCart) {
                setCart(JSON.parse(savedCart));
            }
            catch {
                localStorage.removeItem("ssuxuluxe-cart");

            }
            finally {
                setIsLoaded(true);
            }
        }, []);
    
}