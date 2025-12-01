import Link from "next/link";

import Instagram from '@/public/icons/brand-instagram.svg'
import Facebook from '@/public/icons/brand-facebook.svg'
import Linkedin from '@/public/icons/brand-instagram.svg'
import Telegram from '@/public/icons/brand-telegram.svg'

export default function MiniFooter() {
    return (
        <div className="w-full mt-10 lg:mt-20 relative py-5 ">
            <hr className="absolute top-0 w-full border-gray-400/25" />
            <div className="flex flex-col lg:flex-row gap-3 justify-around items-center w-full max-w-[1400px] px-3.5 sm:px-5">

                <div className="flex gap-x-3 items-center justify-center ">
                    <Link href='#' className="rounded-full bg-white hover:text-white hover:bg-primary p-2 transition duration-300">
                        <Instagram className='w-5 h-5 ' />
                    </Link>
                    <Link href='#' className="rounded-full bg-white hover:text-white hover:bg-primary p-2 transition duration-300">
                        <Facebook className='w-5 h-5 ' />
                    </Link>
                    <Link href='#' className="rounded-full bg-white hover:text-white hover:bg-primary p-2 transition duration-300">
                        <Telegram className='w-5 h-5 ' />
                    </Link>
                    <Link href='#' className="rounded-full bg-white hover:text-white hover:bg-primary p-2 transition duration-300">
                        <Linkedin className='w-5 h-5 ' />
                    </Link>
                </div>
                
                <p className="text-gray-500 text-sm text-center ">© 2025 YourBrand. All rights reserved. Developed by Mobin</p>
            </div>
        </div>
    );
}