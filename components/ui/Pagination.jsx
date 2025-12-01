import Link from "next/link";

export default function Pagination({ currentPage = 1, totalPages = 1, baseUrl = "/shop", searchParams = {} }) {
    const pages = [];
    const start = Math.max(1, currentPage - 2);
    const end = Math.min(totalPages, currentPage + 2);

    for (let i = start; i <= end; i++) pages.push(i);

    // helper to build url with clean searchParams
    const buildUrl = (page) => {
        // پاک کردن Symbolها
        const plainParams = Object.fromEntries(
            Object.entries(searchParams).filter(([key, value]) => typeof value === "string")
        );

        const params = new URLSearchParams(plainParams);
        params.set("page", String(page));

        return `${baseUrl}?${params.toString()}`;
    };

    return (
        <nav className="flex items-center gap-2">
            {currentPage > 1 && (
                <Link href={buildUrl(currentPage - 1)} className="px-3 py-1 border rounded">Prev</Link>
            )}

            {start > 1 && (
                <>
                    <Link href={buildUrl(1)} className="px-3 py-1 border rounded">1</Link>
                    {start > 2 && <span className="px-2">…</span>}
                </>
            )}

            {pages.map(p => (
                <Link key={p} href={buildUrl(p)} className={`px-3 py-1 border rounded ${p === currentPage ? "bg-black text-white" : ""}`}>
                    {p}
                </Link>
            ))}

            {end < totalPages && (
                <>
                    {end < totalPages - 1 && <span className="px-2">…</span>}
                    <Link href={buildUrl(totalPages)} className="px-3 py-1 border rounded">{totalPages}</Link>
                </>
            )}

            {currentPage < totalPages && (
                <Link href={buildUrl(currentPage + 1)} className="px-3 py-1 border rounded">Next</Link>
            )}
        </nav>
    );
}
