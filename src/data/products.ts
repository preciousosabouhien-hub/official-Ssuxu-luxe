export interface Product {
id: number;
slug: string;
name: string;
category: string;
price: number;
image: string;
description: string;
features: string[];
}

export const products: Product[] = [
{
id: 1,
slug: "luxury-body-wave",
name: "Luxury Body Wave",
category: "Human Hair",
price: 185,
image: "/hair3.jpeg",
description: "Experience effortless elegance with our Luxury Body Wave wig. Its beautiful flowing waves create a soft, natural-looking finish suitable for everyday wear and special occasions.",
features: ["Natural-looking waves", "Soft texture", "Versatile styling"],
},
{
id: 2,
slug: "silky-straight-wig",
name: "Silky Straight Wig",
category: "Human Hair",
price: 220,
image: "/wig3.jpeg",
description: "Achieve a sleek and sophisticated look with our Silky Straight Wig. Designed for a smooth, polished appearance.",
features: ["Sleek straight finish", "Smooth appearance", "Elegant styling"],
},
{
id: 3,
slug: "classic-curly-wig",
name: "Classic Curly Wig",
category: "Synthetic Hair",
price: 45,
image: "/hair4.jpeg",
description: "Add volume and personality to your look with our Classic Curly Wig. Its beautiful curls create a stylish and glamorous appearance.",
features: ["Beautiful curls", "Full-looking volume", "Easy styling"],
},
{
id: 4,
slug: "premium-body-wave",
name: "Premium Body Wave",
category: "Human Hair",
price: 185,
image: "/wig.jpeg",
description: "Enjoy a timeless hairstyle with our Premium Body Wave. Its flowing waves offer a sophisticated look for different occasions.",
features: ["Flowing waves", "Soft appearance", "Versatile styling"],
},
{
id: 5,
slug: "classic-silky-straight",
name: "Classic Silky Straight",
category: "Human Hair",
price: 220,
image: "/hair1.jpeg",
description: "Our Classic Silky Straight wig delivers a clean, polished look for customers who love a simple and elegant hairstyle.",
features: ["Straight finish", "Elegant appearance", "Versatile styling"],
},
{
id: 6,
slug: "voluminous-curly-wig",
name: "Voluminous Curly Wig",
category: "Synthetic Hair",
price: 45,
image: "/hair2.jpeg",
description: "Make a statement with our Voluminous Curly Wig, featuring a beautiful curly style that adds character to your look.",
features: ["Voluminous curls", "Full-looking style", "Glamorous finish"],
},
];