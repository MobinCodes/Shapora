// server component
import Link from "next/link";

export default function ProductFilterForm({ searchParams = {} }) {
    const { q = "", category = "", brand = "", minPrice = "", maxPrice = "" } = searchParams;

    return (
        <form method="get" className="space-y-4">
            <div>
                <label className="block text-sm font-medium">Search</label>
                <input name="q" defaultValue={q} className="w-full border rounded px-2 py-1 text-sm" />
            </div>

            <div>
                <label className="block text-sm font-medium">Category</label>
                <select name="category" defaultValue={category} className="w-full border rounded px-2 py-1 text-sm">
                    <option value="">All</option>
                    <option value="fashion">Fashion</option>
                    <option value="furniture">Furniture</option>
                    <option value="electronics">Electronics</option>
                </select>
            </div>

            <div className="flex gap-2">
                <input name="minPrice" defaultValue={minPrice} placeholder="min" className="w-1/2 border rounded px-2 py-1 text-sm" />
                <input name="maxPrice" defaultValue={maxPrice} placeholder="max" className="w-1/2 border rounded px-2 py-1 text-sm" />
            </div>

            <div>
                <label className="block text-sm font-medium">Brand</label>
                <input name="brand" defaultValue={brand} className="w-full border rounded px-2 py-1 text-sm" />
            </div>

            {/* Hidden keep page=1 on new filter */}
            <input type="hidden" name="page" value="1" />

            <div>
                <button type="submit" className="w-full bg-black text-white py-2 rounded">Apply</button>
            </div>
        </form>
    );
}
