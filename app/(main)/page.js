import FreeShipping from "@/components/freeShipping/FreeShipping";
import Hero from "@/components/home/Hero/Hero";
import ProductSliderWrapper from "@/components/sliders/productSliderWrapper";
import ProductSliderWrapperColumn from "@/components/sliders/ProductSliderWrapperColumn";
import PromoContainer from "@/components/promo/PromoContainer.jsx";
import StoreFeatures from "@/components/storeFeatures/StoreFeatures";
import { bestSellingProducts, categories, Deals, DUMMY_PROMO_DATA1, DUMMY_PROMO_DATA2, DUMMY_PROMO_DATA3, electronicsProducts, fashionProducts, featuredProducts, furnitureProducts, latestProducts, testimonials } from "@/data/productData";

export default function HomePage() {
  return (
    <>
      <main className="flex flex-col gap-y-8 items-center min-h-[10000px] px-3.5 sm:px-5">

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
        <ProductSliderWrapperColumn
          columns={[
            { title: "Fashion", data: fashionProducts },
            { title: "Furniture", data: furnitureProducts },
            { title: "Electronics", data: electronicsProducts },
          ]}
        />
        <ProductSliderWrapper title="Best Selling Products" data={bestSellingProducts} />
        <ProductSliderWrapper title="What Our Clients Say" data={testimonials} />
      </main>
    </>
  );
}

