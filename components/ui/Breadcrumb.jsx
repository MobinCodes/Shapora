"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Breadcrumb() {
    const pathname = usePathname();
    const pathnames = pathname.split("/").filter((x) => x);

    return (
        <div className="mt-2 flex justify-center items-center">
            <div className="max-w-[1100px] w-full flex justify-start text-sm">

                <Link
                    href="/"
                    className="text-gray-500 border-b-2 border-b-transparent hover:border-b-white transition-all duration-300"
                >
                    Home
                </Link>

                {pathnames.map((name, index) => {
                    const routeTo = "/" + pathnames.slice(0, index + 1).join("/");
                    const isLast = index === pathnames.length - 1;

                    return (
                        <span key={name} className="flex items-center">
                            <span className="text-gray-500 mx-2">/</span>

                            {isLast ? (
                                <span className="text-gray-400 capitalize">{name}</span>
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
