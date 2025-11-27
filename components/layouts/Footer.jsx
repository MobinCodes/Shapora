import Accordion from "../ui/Accordion";
import { footerData } from "@/data/productData";

export default function Footer() {
    return (
        <section className="w-full max-w-[1400px] mx-auto mt-10">
            {/* mobile */}
            <div className="flex flex-col lg:hidden">
                {footerData.map((section, idx) => (
                    <Accordion key={idx} section={section} />
                ))}
            </div>

            {/* desktop layout آینده */}
        </section>
    );
}
