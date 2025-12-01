import Image from "next/image";
import Link from "next/link";

export default function ProductCard({ product }) {
    return (
        <article className="border rounded-lg p-3 bg-white">
            <Link href={`/product/${product._id}`} className="block relative w-full h-48 mb-3">
                <Image
                    src={product.image}
                    alt={product.title}
                    fill
                    className="object-contain"
                    sizes="(max-width:768px) 50vw, 25vw"
                    priority={false}
                />
            </Link>

            <h3 className="text-sm font-medium line-clamp-2">{product.title}</h3>
            <div className="mt-2 text-red-600 font-semibold">{product.price} $</div>
            <div className="mt-1 text-xs text-gray-500">{product.brand}</div>
        </article>
    );
}
