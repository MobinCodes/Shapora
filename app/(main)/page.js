import FreeShipping from "@/components/freeShipping/FreeShipping";
import Hero from "@/components/home/Hero/Hero";
import ProductSliderWrapper from "@/components/productSlider/productSliderWrapper";
import PromoContainer from "@/components/promo/PromoContainer.jsx";
import StoreFeatures from "@/components/storeFeatures/StoreFeatures";
import { categories, Deals, DUMMY_PROMO_DATA1, DUMMY_PROMO_DATA2, DUMMY_PROMO_DATA3, featuredProducts, latestProducts } from "@/data/productData";

export default function HomePage() {
  return (
    <>
      <main className="flex flex-col gap-y-8 items-center min-h-[10000px] px-5 ">

        <Hero />
        <StoreFeatures />
        <ProductSliderWrapper title="Latest Products" data={latestProducts} />
        <PromoContainer data={DUMMY_PROMO_DATA1} />
        <ProductSliderWrapper title="Featured Products" data={featuredProducts} />
        <ProductSliderWrapper title="Shop By Categories" data={categories} />
        <PromoContainer data={DUMMY_PROMO_DATA2} />
        <ProductSliderWrapper title="Deal Of The Day" data={Deals} />
        <FreeShipping />
        <PromoContainer data={DUMMY_PROMO_DATA3} />
      </main>
    </>
  );
}

