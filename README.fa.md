# شاپورا

> یک تجربه‌ی فروشگاهی مدرن و فرانت‌اند با Next.js، Redux Toolkit، Tailwind CSS 4، Framer Motion و Swiper.

[پیش‌نمایش آنلاین](https://shapora.mobincodes.com) | [English README](./README.md)

![پیش‌نمایش هیرو سکشن شاپورا](./public/readme/hero-section.png)

## معرفی

شاپورا یک ویترین فروشگاهی تمیز و مدرن است که با Next.js App Router ساخته شده. این پروژه روی یک تجربه‌ی e-commerce فشرده و حرفه‌ای تمرکز دارد: هیرو اسلایدر، اسلایدرهای مختلف محصول، مرور دسته‌بندی‌ها، بلوک‌های promo، تایمر تخفیف، برندها، نظر مشتریان، خبرنامه، سبد خرید و صفحات حساب کاربری.

چند فایل شبیه بک‌اند هم داخل ریپو وجود دارد، اما هسته‌ی پروژه فرانت‌اند است و برای نمایش، توسعه و استفاده‌ی دوباره طراحی شده.

## ویژگی‌های اصلی

- معماری Next.js App Router با route group
- ناوبری کامل فروشگاهی با جستجو، حساب کاربری، wishlist و cart
- هیرو اسلایدر و چند مدل اسلایدر محصول
- فیلتر محصولات، pagination و صفحه‌ی جزئیات محصول
- بخش‌های latest، featured، best-selling، category، deal و brand
- مدیریت state با Redux Toolkit
- کامپوننت‌های قابل استفاده‌ی مجدد برای badge، button، rating، timer و accordion
- build production تایید شده با `next build`

## تکنولوژی‌ها

| بخش | ابزارها |
| --- | --- |
| فرانت‌اند | Next.js 16, React 19, Tailwind CSS 4 |
| State | Redux Toolkit, React Redux |
| انیمیشن | Framer Motion |
| اسلایدر | Swiper |
| زمان / داده | date-fns |
| UI | آیکون‌های SVG، کارت‌ها، badgeها و sliderهای قابل استفاده مجدد |

## ساختار پروژه

```txt
app/              # صفحات App Router و API routeها
components/       # hero، sliderها، navigation، shop، UI، footer و newsletter
data/             # داده‌های محصولات، promo، blog، brand و testimonial
lib/              # helperهای auth، دیتابیس و upload
redux/            # store و sliceها
public/           # لوگو، آیکون‌ها، assetهای hero و اسکرین‌شات README
```

## مسیرهای مهم

| مسیر | کاربرد |
| --- | --- |
| `/` | صفحه‌ی اصلی با هیرو، اسلایدرهای محصول، promoها و newsletter |
| `/shop` | لیست فروشگاه با فیلتر و pagination |
| `/products` | کاتالوگ محصولات |
| `/products/[id]` | صفحه‌ی جزئیات محصول |
| `/cart` | صفحه‌ی سبد خرید |
| `/auth/login` | صفحه‌ی ورود |
| `/auth/register` | صفحه‌ی ثبت‌نام |
| `/admin` | داشبورد ادمین |
| `/admin/products` | مدیریت محصولات ادمین |

## اجرا

نصب dependencyها:

```bash
npm install
```

اجرای محیط توسعه:

```bash
npm run dev
```

ساخت نسخه production:

```bash
npm run build
```

اجرای نسخه production:

```bash
npm run start
```

اجرای lint:

```bash
npm run lint
```

## نکات

- اسکرین‌شات هیرو در مسیر `public/readme/hero-section.png` ذخیره شده است.
- فرانت‌اند در `app/(main)` با App Router اجرا می‌شود.
- بخش زیادی از UI و dataها data-driven هستند و توسعه‌ی محتوا را ساده می‌کنند.
- فایل‌های شبیه بک‌اند داخل ریپو نقش placeholder دارند و در مسیر اصلی اجرا استفاده نمی‌شوند.
- لینک Live Preview را پیش از انتشار ریپو با آدرس نهایی جایگزین کنید.

## لایسنس

در حال حاضر فایل license در پروژه وجود ندارد. پیش از استفاده، توزیع یا انتشار عمومی کد، بهتر است لایسنس مناسب اضافه شود.
