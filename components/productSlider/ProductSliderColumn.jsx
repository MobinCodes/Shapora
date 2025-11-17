"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import Image from "next/image";
import { useId } from "react";

import "swiper/css";
import "swiper/css/navigation";

import RatingStars from "@/components/ui/RatingStars";
import { formatUSD } from "@/utils/formatPrice";
import Discount from "@/components/ui/Discount";
import Chevron from '@/public/icons/chevron-down.svg';

function groupProducts(products) {
    const grouped = [];
    for (let i = 0; i < products.length; i += 3) {
        grouped.push(products.slice(i, i + 3));
    }
    return grouped;
}

export default function ProductSliderColumn({ products }) {
    const id = useId();
    const grouped = groupProducts(products);

    return (
        <div className="relative w-full max-w-[270px] sm:max-w-[340px] md:max-w-[370px] lg:max-w-[400px] xl:justify-center xl:max-w-[425px]">
            <Swiper
                modules={[Navigation]}
                slidesPerView={1}
                spaceBetween={16}
                navigation={{
                    nextEl: `.next-${id}`,
                    prevEl: `.prev-${id}`,
                }}
            >
                {grouped.map((group, index) => (
                    <SwiperSlide key={index}>
                        <div className="flex flex-col mt-5">
                            {group.map((item, idx) => (
                                <div
                                    key={item.id || idx}
                                    className="group flex gap-4 items-start p-2 cursor-pointer rounded-lg transition-all duration-300"
                                >
                                    {/* تصویر */}
                                    <div className="w-20 h-30 sm:w-30 sm:h-40 relative shrink-0 overflow-hidden rounded-md">
                                        <Image
                                            src={item.image}
                                            alt={item.title}
                                            fill
                                            className="object-contain transition-opacity duration-500 group-hover:opacity-0"
                                        />

                                        {/* hover image */}
                                        {item.hoverImage && (
                                            <Image
                                                src={item.hoverImage}
                                                alt={`${item.title} hover`}
                                                fill
                                                className="object-contain opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                                            />
                                        )}

                                        {item.offer && (
                                            <div className="absolute top-1 left-1">
                                                <Discount price={item.price} offer={item.offer} />
                                            </div>
                                        )}
                                    </div>

                                    {/* متن */}
                                    <div className="flex flex-col gap-2 mt-4 lg:px-3 ">
                                        <h3 className="text-sm line-clamp-2 transition-all duration-300">
                                            {item.title}
                                        </h3>

                                        <RatingStars size={14} rating={item.rating} />

                                        <div className="flex gap-2 items-baseline">
                                            {item.offer ? (
                                                <>
                                                    <span className="line-through text-gray-400 text-sm font-light">
                                                        {formatUSD(item.price)}
                                                    </span>
                                                    <span className="text-red-600 text-base ">
                                                        {formatUSD(item.offer)}
                                                    </span>
                                                </>
                                            ) : (
                                                <span className="text-red-600 text-base ">
                                                    {formatUSD(item.price)}
                                                </span>
                                            )}
                                        </div>

                                        <span className="underline text-sm hover:text-primary hover:underline  transition-colors">
                                            ADD TO CART
                                        </span>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>

            {/* Prev */}
            <button
                className={`prev-${id} absolute top-[-40px] right-10 z-2 hover:scale-110 transition cursor-pointer`}
            >
                <Chevron className="w-7 h-7 rotate-90" />
            </button>

            {/* Next */}
            <button
                className={`next-${id} absolute top-[-40px] right-2 z-2 hover:scale-110 transition cursor-pointer`}
            >
                <Chevron className="w-7 h-7 -rotate-90" />
            </button>
        </div>
    );
}
