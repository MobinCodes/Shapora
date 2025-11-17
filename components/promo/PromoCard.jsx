import Image from "next/image";
import Button from "../ui/Button";

export default function PromoCard({ title, subtitle, price, image, bgColor, dataLength }) {

    const styles = {
        1: {
            wrapper: "p-8 xl:h-[350px] h-[200px]",
            title: "text-2xl sm:text-3xl xl:text-5xl",
            subtitle: "text-2xl xl:text-3xl",
            price: "text-lg xl:text-xl",
            textColor: "text-white",
            imagePos: "absolute -right-30 md:-right-50 xl:-right-80 bottom-0",
            imageClass: "object-contain lg:scale-125",
        },
        2: {
            wrapper: "p-10 h-[250px] md:h-[300px] lg:h-[250px]",
            title: "text-2xl sm:text-3xl font-bold",
            subtitle: "text-xl",
            price: "text-lg",
            textColor: "text-black",
            imagePos: "absolute -right-30 sm:-right-50 md:-right-30 lg:-right-45 bottom-0",
            imageClass: "object-contain scale-125 md:scale-100 xl:scale-120",
        },
        3: {
            wrapper: "p-8 max-w-[450px] md:max-w-[700px] h-[250px] md:h-[300px] lg:h-[250px]",
            title: "text-2xl font-bold",
            subtitle: "text-lg",
            price: "text-lg",
            textColor: "text-white",
            imagePos: "absolute -right-30 bottom-0",
            imageClass: "object-contain",
        },
    }[dataLength];

    return (
        <div
            className={`group relative flex items-center justify-between rounded-lg overflow-hidden w-full ${styles.wrapper}`}
            style={{ backgroundColor: bgColor }}
        >
            <div className={`z-2 ${styles.textColor} space-y-2`}>
                <h2 className={styles.title}>{title}</h2>
                <p className={styles.subtitle}>{subtitle}</p>
                {price && <p className={styles.price}>{price}</p>}

                {dataLength === 3 ? (
                    <button className="underline hover:no-underline cursor-pointer">
                        SHOP NOW
                    </button>
                ) : (
                    <Button>SHOP NOW</Button>
                )}
            </div>

            <div className={`${styles.imagePos} w-full h-full transition-transform duration-1000 ease-out group-hover:scale-110`}>
                <Image
                    src={image}
                    alt={title}
                    fill
                    className={styles.imageClass}
                />
            </div>
        </div>
    );
}
