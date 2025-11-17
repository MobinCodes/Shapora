import ProductSliderColumn from "./ProductSliderColumn";

export default function ProductSliderWrapperColumn({ columns = [] }) {
    return (
        <div
            className="flex gap-8 overflow-x-auto scrollbar-thin scrollbar-thumb-gray-300
                       scrollbar-track-transparent w-full max-w-[1400px] py-4 px-3 sm:px-7
                       bg-white box-shadow-sm rounded-md"
        >
            {columns.map(({ title, data }, index) => (
                <div key={index} className="min-w-[280px] flex-shrink-0">

                    {/* عنوان ستون */}
                    <div className="border-b border-gray-200">
                        <h2 className="flex w-fit text-[22px] border-b-2 py-2 border-red-600 z-2">
                            {title}
                        </h2>
                    </div>

                    {/* اسلایدر */}
                    <ProductSliderColumn products={data} />
                </div>
            ))}
        </div>
    );
}
