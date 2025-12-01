"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Breadcrumb() {
    const pathname = usePathname();
    const pathnames = pathname.split("/").filter((x) => x);

    return (
        <div className="bg-blue-600 py-4 px-6 flex justify-center items-center">
            <div className="max-w-[1100px] w-full flex justify-start">

                <Link
                    href="/"
                    className="text-white border-b-2 border-b-transparent hover:border-b-white transition-all duration-300"
                >
                    Home
                </Link>

                {pathnames.map((name, index) => {
                    const routeTo = "/" + pathnames.slice(0, index + 1).join("/");
                    const isLast = index === pathnames.length - 1;

                    return (
                        <span key={name} className="flex items-center">
                            <span className="text-gray-200 mx-2">/</span>

                            {isLast ? (
                                <span className="text-gray-300 capitalize">{name}</span>
                            ) : (
                                <Link href={routeTo} className="text-white capitalize">
                                    {name}
                                </Link>
                            )}
                        </span>
                    );
                })}
            </div>
        </div>
    );
}
