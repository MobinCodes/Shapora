"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import Chevron from '@/public/icons/chevron-down.svg'

export default function Accordion({ section }) {
    const [open, setOpen] = useState(false);

    const content = section.contents[0]; // چون هر بخش فقط یک content دارد

    return (
        <div>
            {/* Header */}
            <button
                onClick={() => setOpen(!open)}
                className="w-full pb-4 px-3 flex justify-between items-center text-left"
            >
                <span className="font-medium ">{section.title}</span>

                <motion.span
                    animate={{ rotate: open ? 180 : 0 }}
                    transition={{ duration: 0.2 }}
                    className="pe-5"
                >
                    <Chevron className="w-5 h-5 " />
                </motion.span>
            </button>

            {/* Content */}
            <AnimatePresence initial={false}>
                {open && (
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.25 }}
                        className="overflow-hidden px-3 pb-4"
                    >
                        {content.html && <div>{content.html}</div>}

                        {content.items && (
                            <ul className="flex flex-col gap-y-2">
                                {content.items.map((item, i) => (
                                    <li key={i}>
                                        <Link
                                            href={item.href}
                                            className="text-gray-600 hover:text-black"
                                        >
                                            {item.label}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        )}
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}
