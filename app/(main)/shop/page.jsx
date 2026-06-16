// // app/shop/page.jsx  (Server Component)
// import Link from "next/link";
// import Image from "next/image";

// import ProductCard from "@/components/shop/ProductCard"; // میدم بعدی
// import ProductFilterForm from "@/components/shop/ProductFilterForm"; // فرم GET
// import Pagination from "@/components/ui/Pagination";

// const API_BASE = process.env.NEXT_PUBLIC_API_URL || "http://localhost:5000";

// export default async function ShopPage({ searchParams }) {
//     // خواندن پارامترها از URL
//     const page = parseInt(searchParams.page || "1");
//     const limit = 20;
//     const sort = searchParams.sort || "relevance"; // default
//     const q = searchParams.q || "";
//     const category = searchParams.category || "";
//     const brand = searchParams.brand || "";

//     // ساخت URL برای بک‌اند
//     const params = new URLSearchParams();
//     params.set("page", String(page));
//     params.set("limit", String(limit));
//     if (sort) params.set("sort", sort);
//     if (q) params.set("q", q);
//     if (category) params.set("category", category);
//     if (brand) params.set("brand", brand);

//     const res = await fetch(`${API_BASE}/api/products?${params.toString()}`, {
//         // SSR: cache: 'no-store' برای همیشه تازه یا default for ISR
//         next: { revalidate: 60 }, // optional ISR 60s
//     });

//     if (!res.ok) {
//         // handle error (سرور برگشت نداد)
//         return <div>خطا در دریافت محصولات</div>;
//     }

//     const { docs, total, page: currentPage, pages } = await res.json();

//     return (
//         <main className="max-w-[1400px] w-full mx-auto py-8 px-4">
//             <div className="flex gap-8">
//                 {/* Left: Filter form - این خودش یک فرم GET هست (سرور کامپوننت خوانده میشه) */}
//                 <aside className="w-72 hidden lg:block">
//                     <ProductFilterForm searchParams={searchParams} />
//                 </aside>

//                 {/* Right: Products + Sort + Pagination */}
//                 <section className="flex-1">
//                     <div className="flex items-center justify-between mb-4">
//                         <div>
//                             <form method="get" className="flex items-center gap-2">
//                                 {/* Sort select as link-friendly: submit GET */}
//                                 <label className="text-sm mr-2">Sort by:</label>
//                                 <select
//                                     name="sort"
//                                     defaultValue={sort}

//                                     className="border rounded px-2 py-1 text-sm"
//                                 >
//                                     <option value="relevance">Relevance</option>
//                                     <option value="price_asc">Price: low to high</option>
//                                     <option value="price_desc">Price: high to low</option>
//                                     <option value="newest">Newest</option>
//                                 </select>
//                                 {/* Keep other params when changing sort - we'll rely on browser to include other inputs if present.
//                     Better: ProductFilterForm can render hidden inputs for existing params. */}
//                             </form>
//                         </div>

//                         <div className="text-sm text-gray-600">
//                             {total} Products
//                         </div>
//                     </div>

//                     {/* Grid */}
//                     <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
//                         {docs.map(product => (
//                             <ProductCard key={product._id} product={product} />
//                         ))}
//                     </div>

//                     {/* Pagination */}
//                     <div className="mt-6 flex justify-center">
//                         <Pagination currentPage={currentPage} totalPages={pages} baseUrl="/shop" searchParams={searchParams} />
//                     </div>
//                 </section>
//             </div>
//         </main>
//     );
// }

export default function ShopPage() {
    return (
        <></>
    )
}
