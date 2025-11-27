"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import Image from "next/image";
import { useId } from "react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Chevron from '@/public/icons/chevron-down.svg'



export default function BrandSlider({ brands }) {
    const id = useId();

    return (
        <div className="relative w-full">
            <Swiper
                modules={[Navigation]}
                slidesPerView={2}
                loop={true}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                spaceBetween={30}
                navigation={{
                    nextEl: `.next-${id}`,
                    prevEl: `.prev-${id}`,
                }}
                breakpoints={{
                    640: { slidesPerView: 3 },
                    850: { slidesPerView: 4 },
                    1024: { slidesPerView: 5 },
                    1280: { slidesPerView: 6 },
                }}
                className="testimonials-swiper"
            >
                {brands.map((item) => (
                    <SwiperSlide key={item.id} className="!h-auto mt-7 p-1 ">
                        <div className="group flex h-full w-full ">
                            <div className="relative w-full h-30 overflow-hidden rounded-md">
                                <Image src={item.image} alt={item.title} fill className="object-contain group-hover:scale-105 transition-transform duration-500 grayscale" />
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>

            <button className={`prev-${id} top-[-30px] right-[40px] absolute -translate-y-1/2 z-2 cursor-pointer font-light rounded-full flex items-center justify-center hover:scale-110 transition-all duration-300`}>
                <Chevron className="h-9 w-9 rotate-90 stroke-1" />
            </button>
            <button className={`next-${id} top-[-30px] right-0 absolute -translate-y-1/2 z-2 cursor-pointer font-light rounded-full flex items-center justify-center hover:scale-110 transition-all duration-300`}>
                <Chevron className="h-9 w-9 rotate-270 stroke-1" />
            </button>
        </div>
    );
}