"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import Image from "next/image";
import { useId } from "react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Chevron from '@/public/icons/chevron-down.svg'




export default function TestimonialsSlider({ testimonials }) {
    const id = useId();

    return (
        <div className="relative w-full">
            <Swiper
                modules={[Navigation]}
                slidesPerView={1}
                loop={true}
                spaceBetween={30}
                navigation={{
                    nextEl: `.next-${id}`,
                    prevEl: `.prev-${id}`,
                }}
                breakpoints={{
                    0: { slidesPerView: 1 },
                    640: { slidesPerView: 2 },
                    1024: { slidesPerView: 3 },
                }}
                className="testimonials-swiper"
            >
                {testimonials.map((item) => (
                    <SwiperSlide key={item.id} className="!h-auto mt-7 p-1 ">
                        <div className="group flex flex-col h-full w-full p-5 bg-defaultBg rounded-md border border-gray-100">
                            <div className="flex gap-x-3">
                                <Image src={item.image} alt={item.name} width={70} height={70} className="rounded-full bg-white group-hover:scale-105 transition-all duration-300" />
                                <div className="flex flex-col justify-center">
                                    <span className="font-semibold">{item.name}</span>
                                </div>
                            </div>

                            <div className="mt-3">
                                <p className="text-sm text-gray-600 font-light leading-8">{item.message}</p>
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