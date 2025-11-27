import Image from "next/image";

export default function NewsLetter() {
    return (
        <div className="bg-primary w-full px-4 py-7 lg:px-8 text-white flex items-center max-w-[1400px] rounded-md lg:h-[250px] relative overflow-hidden">
            <div className="flex flex-col gap-y-3 lg:gap-y-5">
                <h2 className="text-2xl">Subscribe to our Newsletter</h2>
                <p className="text-sm font-light">Subscribe to our latest newsletter to get news about special discounts & upcoming sales</p>
                <div className="flex flex-col sm:flex-row gap-x-2 gap-y-2 mt-1">
                    <input type="email" placeholder="Enter your email" className="px-4 py-2 text-black rounded-md focus:outline-none bg-white w-full max-w-[300px] sm:max-w-[350px]" />
                    <button className="bg-white text-black px-4 py-2 rounded-md w-fit">Subscribe</button>
                </div>




                










            </div>
            <div className="hidden lg:flex h-[350px] w-[450px] absolute -top-20 right-35">
                <Image src="/newsLetter/newsletter photo.webp" alt="Newsletter Image" layout="fill" objectFit="cover" />
            </div>
        </div>
    );
}