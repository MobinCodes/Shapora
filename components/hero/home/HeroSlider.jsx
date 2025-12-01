'use client';

import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/pagination';
import Button from '@/components/ui/Button';
import './hero-slider.css'

const slides = [
    {
        id: 1,
        title: "Orange iPhone Pro — Bold Design, Pro Power",
        subtitle: "Starting at only $500",
        image: "/hero-images/phone.webp",
        bgColor: "bg-[#FDD046]",
        link: "/shop",
    },
    {
        id: 2,
        title: "Minimalist Armchair for Living Spaces",
        subtitle: "Exclusive Offer $299",
        image: "/hero-images/hero-image-sofa.webp",
        bgColor: "bg-[#aDE6F5]",
        link: "/shop",
    },
];

export function HeroSlider() {
    return (
        <div className="relative w-full max-w-[1100px] h-[300px] sm:h-[350px] lg:h-[460px] xl:h-[530px] rounded-md overflow-hidden">
            <Swiper
                centeredSlides
                autoplay={{
                    delay: 5000,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                    el: '.hero-pagination',
                }}
                modules={[Autoplay, Pagination]}
                className="h-full"
            >
                {slides.map((slide) => (
                    <SwiperSlide key={slide.id}>
                        <div className={`flex relative items-center justify-between w-full h-full px-10 md:px-16 lg:px-24 ${slide.bgColor}`}>
                            <div className="flex flex-col justify-center gap-2 sm:gap-4 w-1/2 max-w-[450px] z-2">
                                <p className="text-sm md:text-base lg:text-xl text-gray-800 tracking-wide uppercase">
                                    {slide.subtitle}
                                </p>
                                <h2 className="text-xl md:text-4xl xl:text-5xl font-bold xl:font-bold leading-tight text-gray-900">
                                    {slide.title}
                                </h2>
                                <Button
                                    href={slide.link}
                                    className="px-7 py-0 mt-2"
                                >
                                    SHOP NOW
                                </Button>
                            </div>

                            <div className="flex justify-center items-center h-full w-3/4 absolute -right-[15%] ">
                                <Image
                                    src={slide.image}
                                    alt={slide.title}
                                    fill
                                    sizes="(max-width: 1024px) 50vw, 40vw"
                                    className="object-contain"
                                    priority
                                />
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            <div className="hero-pagination"></div>
            </Swiper>
        </div>
    );
}












