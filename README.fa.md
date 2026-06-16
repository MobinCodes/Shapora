# شاپورا — ویترین فروشگاهی مدرن

یک ویترین فروشگاهی با عملکرد بالا و آماده برای استقرار در محیط Production، ساخته‌شده با Next.js 16 و معماری App Router. شاپورا تجربه‌ای کامل از خرید آنلاین چنددسته‌ای را با نمایش پویای محصولات، تعاملات انیمیشنی و طراحی کاملاً واکنش‌گرا ارائه می‌دهد که برای SEO و Core Web Vitals بهینه‌سازی شده است.

**Language / زبان**: [English Version](README.md)

---

## فلسفه‌های معماری

این پروژه بر اساس اصول مهندسی سخت‌گیرانه‌ای طراحی و پیاده‌سازی شده است:

- **بهینه‌سازی ۱۰۰٪ عملکرد و کد آماده Production** — هر کامپوننت با تمرکز بر بهره‌وری رندرینگ ساخته شده است: بارگذاری بهینه تصاویر از طریق `next/image`، تقسیم کد با Dynamic Import و حداقل حجم JavaScript سمت کلاینت.
- **استراتژی‌های پیشرفته رندرینگ SSR/NSR** — استفاده از معماری App Router با جداسازی دقیق بین Server Components (پیش‌فرض) و Client Components (فقط در مواردی که تعاملپذیری ضرورت دارد با `'use client'`).
- **معماری سازگار با SEO** — استفاده از عناصر معنایی HTML (`<article>`, `<section>`, `<nav>`, `<header>`)، خروجی metadata ساختاریافته، متن‌های alt دسترس‌پذیر و مسیریابی URL تمیز.
- **کد قابل نگهداری و تمیز** — بدون مهندسی بیش از حد. بدون انتزاع‌های غیرضروری. هر ماژول مسئولیت واحدی دارد و درخت کامپوننت‌ها کم‌عمق و خوانا نگه داشته شده است.

---

## فناوری‌های استفاده‌شده

| دسته‌بندی | فناوری | نسخه |
|---|---|---|
| **فریمورک** | Next.js (App Router) | 16.0.1 |
| **کتابخانه UI** | React / React DOM | 19.2.0 |
| **استایل‌دهی** | Tailwind CSS | v4 |
| **مدیریت وضعیت** | Redux Toolkit + React-Redux | 2.9.2 / 9.2.0 |
| **انیمیشن** | Framer Motion | 12.23.24 |
| **اسلایدر/کاروسل** | Swiper | 12.0.3 |
| **ابزارهای تاریخ** | date-fns | 4.1.0 |
| **مدیریت SVG** | @svgr/webpack | 8.1.0 |
| **لینتینگ** | ESLint + eslint-config-next | 9.x / 16.0.1 |
| **پردازش CSS** | PostCSS + @tailwindcss/postcss | v4 |

---

## قابلیت‌های کلیدی

- **اسلایدر هیرو پویا** — کاروسل تمام‌عرض با Swiper، نقاط شکست واکنش‌گرا و انتقالات نرم.
- **نمایش چندبخشی محصولات** — اسلایدرهای محصولات جدید، ویژه، پرفروش و پیشنهاد ویژه روز با افکت تعویض تصویر در Hover.
- **تایمر شمارش معکوس** — کامپوننت شمارش معکوس بلادرنگ برای پیشنهادهای زمان‌دار با هیدراسیون سازگار با SSR.
- **اسلایدر دسته‌بندی و برندها** — کامپوننت‌های کاروسل اختصاصی برای مرور بر اساس دسته‌بندی یا برند.
- **سیستم بنر تبلیغاتی** — کارت‌های تبلیغاتی داده‌محور با رنگ‌های پس‌زمینه پویا و پوشش قیمت.
- **مگامنوی ناوبری** — منوی مگا چندستونی برای دسکتاپ با لینک‌های ساختاریافته دسته‌بندی‌ها.
- **سایدبار موبایل انیمیشنی** — سایدبار کشویی با آکاردئون‌های Framer Motion و لایه پس‌زمینه.
- **فیلتر و صفحه‌بندی محصولات** — فرم فیلتر سمت سرور (جستجو، دسته‌بندی، برند، محدوده قیمت) با صفحه‌بندی مبتنی بر URL.
- **مسیر راهنما (Breadcrumb)** — تولید خودکار مسیر راهنما از مسیر URL فعلی.
- **کامپوننت ستاره امتیاز** — رندر ستاره‌های کامل، نیمه و خالی از یک امتیاز عددی.
- **اسلایدر نظرات مشتریان** — کاروسل نظرات با آواتار، نام و پیام.
- **اسلایدر پست‌های وبلاگ** — کارت‌های پیش‌نمایش وبلاگ با تصویر، خلاصه و تاریخ.
- **بخش خبرنامه** — بلوک دعوت به اشتراک ایمیلی.
- **بنر ارسال رایگان** — بنر تبلیغاتی با آستانه ارسال رایگان.
- **نوار ویژگی‌های فروشگاه** — نوار افقی ویژگی‌ها (ارسال جهانی، ضمانت بازگشت، تخفیفات، پشتیبانی ۲۴/۷).
- **کامپوننت‌های UI پایه** — Button، Badge، Accordion، Discount و SectionWrapper.
- **هوک‌های سفارشی** — `useIsMobile` و `useIsPc` برای رفتار واکنش‌گرا در سمت کلاینت.
- **SVG به‌عنوان کامپوننت React** — تمام آیکون‌ها از طریق SVGR بارگذاری می‌شوند برای Tree-shaking و رندر Inline.
- **اسکرول‌بار و سایه‌های سفارشی** — استایل اسکرولبار و ابزارهای Box-shadow چندلایه.
- **مسیرهای API آماده** — مسیرهای API از پیش‌ساخته‌شده برای احراز هویت (ورود/ثبت‌نام)، مدیریت محصولات و آپلود فایل.
- **قالب پنل ادمین** — ساختار مسیر داشبورد ادمین و مدیریت محصولات.
- **صفحات سبد خرید و فروشگاه** — صفحات اختصاصی سبد خرید و لیست محصولات با سایدبار فیلتر.

---

## ساختار پروژه

```
shapora/
├── app/
│   ├── (main)/
│   │   ├── admin/
│   │   │   ├── page.jsx
│   │   │   └── products/
│   │   │       └── page.jsx
│   │   ├── auth/
│   │   │   ├── login/
│   │   │   └── register/
│   │   ├── cart/
│   │   │   └── page.jsx
│   │   ├── products/
│   │   │   ├── page.jsx
│   │   │   └── [id]/
│   │   │       └── page.jsx
│   │   ├── shop/
│   │   │   └── page.jsx
│   │   ├── globals.css
│   │   ├── layout.js
│   │   └── page.js
│   └── api/
│       ├── auth/
│       │   ├── login/route.js
│       │   └── register/route.js
│       ├── products/route.js
│       ├── products.js
│       └── upload/route.js
├── components/
│   ├── freeShipping/
│   │   └── FreeShipping.jsx
│   ├── hero/
│   │   ├── home/
│   │   │   ├── Hero.jsx
│   │   │   ├── HeroSlider.jsx
│   │   │   └── hero-slider.css
│   │   └── pagesHero/
│   │       └── PagesHeroHeader.jsx
│   ├── layouts/
│   │   ├── Footer.jsx
│   │   ├── MiniFooter.jsx
│   │   ├── SectionWrapper.jsx
│   │   ├── Sidebar.jsx
│   │   └── navigation/
│   │       ├── CategoryDropdown.jsx
│   │       ├── MainNavigation.jsx
│   │       ├── NavDropdown.jsx
│   │       ├── NavMegaDropdown.jsx
│   │       ├── NavigationBorder.jsx
│   │       └── SidebarButton.jsx
│   ├── newsLetter/
│   │   └── NewsLetter.jsx
│   ├── promo/
│   │   ├── PromoCard.jsx
│   │   └── PromoContainer.jsx
│   ├── shop/
│   │   ├── ProductCard.jsx
│   │   ├── ProductFilterForm.jsx
│   │   ├── ProductsGrid.jsx
│   │   └── Shop.jsx
│   ├── sliders/
│   │   ├── BlogSlider.jsx
│   │   ├── BrandSlider.jsx
│   │   ├── CategorySlider.jsx
│   │   ├── ProductSlider.jsx
│   │   ├── ProductSliderColumn.jsx
│   │   ├── productSliderWrapper.jsx
│   │   ├── ProductSliderWrapperColumn.jsx
│   │   ├── productSlider.css
│   │   └── TestimonialsSlider.jsx
│   ├── storeFeatures/
│   │   └── StoreFeatures.jsx
│   └── ui/
│       ├── Accordion.jsx
│       ├── Badge.jsx
│       ├── Breadcrumb.jsx
│       ├── Button.jsx
│       ├── DealTimer.jsx
│       ├── Discount.jsx
│       ├── Pagination.jsx
│       └── RatingStars.jsx
├── data/
│   └── productData.js
├── hooks/
│   ├── useIsMobile.jsx
│   └── useIsPc.jsx
├── lib/
│   ├── auth.js
│   ├── db.js
│   └── upload.js
├── public/
│   ├── blog/
│   ├── brands/
│   ├── categories/
│   ├── fonts/
│   ├── hero-images/
│   ├── icons/
│   ├── newsLetter/
│   ├── products/
│   ├── promo/
│   ├── shapora-logo.png
│   └── testimonials/
├── redux/
│   ├── reduxProvider.js
│   ├── sidebarSlice.js
│   └── store.js
├── types/
│   ├── product.d.js
│   └── user.d.js
├── utils/
│   ├── formatPrice.js
│   ├── motionVariants.js
│   └── validateInput.js
├── next.config.mjs
├── postcss.config.mjs
├── jsconfig.json
├── eslint.config.mjs
└── package.json
```

---

## شروع سریع

### پیش‌نیازها

- **Node.js** نسخه ۱۸ یا بالاتر
- **npm** / **yarn** / **pnpm** / **bun**

### نصب وابستگی‌ها

```bash
git clone https://github.com/your-username/shapora.git
cd shapora
npm install
```

### اجرای محیط توسعه

```bash
npm run dev
```

مرورگر خود را در آدرس [http://localhost:3000](http://localhost:3000) باز کنید.

### ساخت نسخه Production

```bash
npm run build
npm run start
```

### اجرای لینتر

```bash
npm run lint
```

---

## مجوز

این پروژه خصوصی و انحصاری است.
