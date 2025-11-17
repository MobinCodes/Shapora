import PromoCard from "./PromoCard";

export default function PromoContainer({ data }) {
    const dataLength = data.length;

    // تعیین کلاس‌های ریسپانسیو بر اساس تعداد
    const layoutClasses = {
        3: "flex flex-col lg:flex-row lg:justify-center",
        2: "flex flex-col md:flex-row md:justify-center",
        1: "flex flex-col md:flex-row md:justify-center",
    }[dataLength];

    return (
        <div className={`${layoutClasses} items-center gap-y-5 gap-x-5 w-full max-w-[1400px]`}>
            {data.map((promo) => (
                <PromoCard
                    key={promo.id}
                    {...promo}
                    dataLength={dataLength}
                />
            ))}
        </div>
    );
}
