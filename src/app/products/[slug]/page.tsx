import Link from "next/link";
import Navbar from "@/components/Navbar";
import { notFound } from "next/navigation";
import { Suspense } from "react";
import { products } from "@/data/products";
import ProductDetails from "@/components/ProductDetails";
import Footer from "@/components/Footer";

interface ProductPageProps {
params: Promise<{slug: string;}>;}

export function generateStaticParams() {
return products.map((product) => ({slug:product.slug,}));}

async function ProductPageContent({ params }:
               ProductPageProps){
                const { slug } = await params;

const product = products.find((item) => item.slug === slug);

if (!product) {notFound();}

return (
<main>
     <Navbar />
     <h3 className="link-route">
    <Link href="/"> Home → </Link>
    <Link href="/shop">Shop → </Link>
    {product.name}
     </h3>
<ProductDetails product={product} />
<Footer />
</main>

);
}

export default function ProductPage({ params }:ProductPageProps){
    return(
        <Suspense fallback={<p>Loading product details...</p>} >
        <ProductPageContent params={params} />
        </Suspense>
    );
}
