    
    export interface Product {
        id: number;
        name: string;
        category: string;
        price: number; 
        image: string;
    }
    
    export const products: Product[] = [
  {
    id:1,
    name: "Luxury Body Wave",
    category: "Human Hair",
    price: 185000,
    image:"/hair3.jpeg",
  },
    {
    id:2,
    name: "Silky Straight Wig",
    category: "Human Hair",
    price: 220000,
    image:"/wig3.jpeg",
    },
    {
    id:3,
    name: "Classic Curly Wig",
    category: "Synthetic Hair",
    price: 45000,
    image:"/hair4.jpeg"
    },
      {
    id:4,
    name: "Luxury Body Wave",
    category: "Human Hair",
    price: 185000,
    image:"/wig.jpeg",
  },
    {
    id:5,
    name: "Silky Straight Wig",
    category: "Human Hair",
    price: 220000,
    image:"/hair1.jpeg",
    },
    {
    id:6,
    name: "Classic Curly Wig",
    category: "Synthetic Hair",
    price: 45000,
    image:"/hair2.jpeg"
    },
];