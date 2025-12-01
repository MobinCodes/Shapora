import Link from "next/link";

import Accordion from "../ui/Accordion";
import { footerData } from "@/data/productData";
export default function Footer() {
    return (
        <section className="w-full max-w-[1400px] mx-auto mt-10 px-3.5 sm:px-5 xl:px-0 flex flex-col">

            {/* ------ Mobile ------ */}
            <div className="flex flex-col lg:hidden">
                {footerData.map((section, idx) => (
                    <Accordion key={idx} section={section} />
                ))}
            </div>

            {/* ------ Desktop ------ */}
            <div className="hidden lg:grid grid-cols-5 gap-5 xl:gap-20">

                {footerData.map((section, idx) => (
                    <div key={idx}>
                        <h3 className="font-semibold text-lg mb-4">{section.title}</h3>

                        {section.contents.map((content, i) => (
                            <div key={i}>
                                {content.html && (
                                    <div className="text-gray-500 font-light text-sm">
                                        {content.html}
                                    </div>
                                )}

                                {content.items && (
                                    <ul className="flex flex-col gap-y-3 text-gray-500 font-light text-sm">
                                        {content.items.map((item, k) => (
                                            <li key={k}>
                                                <Link
                                                    href={item.href}
                                                    className="hover:text-primary transition-all duration-300"
                                                >
                                                    {item.label}
                                                </Link>
                                            </li>
                                        ))}
                                    </ul>
                                )}
                            </div>
                        ))}
                    </div>
                ))}

            </div>

            
        </section>
    );
}
