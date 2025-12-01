'use client'
import { useEffect, useState } from "react";
import { getProducts } from "../../api/products.js";
import Image from "next/image";

export default function ProductGrid() {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        getProducts().then(data => setProducts(data));
    }, []);

    return (
        <div className="grid grid-cols-4 gap-6 p-6">
            {products.map(p => (
                <div key={p._id} className="border rounded-xl p-4 h-50 w-50">
                        <Image src={p.image} alt="mkdsf" width={50} height={50} className="w-full object-cover rounded-lg" />
                    <h2 className="mt-2 text-lg font-bold">{p.title}</h2>
                    <p className="font-semibold">{p.price} تومان</p>
                </div>
            ))}
        </div>
    );
}
