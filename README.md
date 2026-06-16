# Shapora — Modern E-Commerce Storefront

A high-performance, production-ready e-commerce storefront built with Next.js 16 App Router. Shapora delivers a complete multi-category shopping experience with dynamic product showcases, animated UI interactions, and a fully responsive layout optimized for SEO and Core Web Vitals.

**Language / زبان**: [نسخه فارسی](README.fa.md)

---

## Core Philosophies

This project was architected with a strict set of engineering principles:

- **100% Performance Optimization & Production-Ready Code** — Every component is built with rendering efficiency in mind: optimized image loading via `next/image`, code-splitting through dynamic imports, and minimal client-side JavaScript footprint.
- **Advanced SSR/NSR Rendering Strategies** — Leveraging Next.js App Router with a clear separation between Server Components (default) and Client Components (`'use client'` only where interactivity demands it).
- **SEO-Friendly Architecture** — Semantic HTML elements (`<article>`, `<section>`, `<nav>`, `<header>`), structured metadata exports, accessible alt texts, and clean URL routing.
- **Highly Maintainable, Clean Code** — No over-engineering. No unnecessary abstractions. Each module has a single responsibility, and the component tree is shallow and readable.

---

## Tech Stack

| Category | Technology | Version |
|---|---|---|
| **Framework** | Next.js (App Router) | 16.0.1 |
| **UI Library** | React / React DOM | 19.2.0 |
| **Styling** | Tailwind CSS | v4 |
| **State Management** | Redux Toolkit + React-Redux | 2.9.2 / 9.2.0 |
| **Animations** | Framer Motion | 12.23.24 |
| **Carousels/Sliders** | Swiper | 12.0.3 |
| **Date Utilities** | date-fns | 4.1.0 |
| **SVG Handling** | @svgr/webpack | 8.1.0 |
| **Linting** | ESLint + eslint-config-next | 9.x / 16.0.1 |
| **CSS Processing** | PostCSS + @tailwindcss/postcss | v4 |

---

## Key Features

- **Dynamic Hero Slider** — Full-width hero carousel with Swiper, responsive breakpoints, and smooth transitions.
- **Multi-Section Product Showcases** — Latest, Featured, Best Selling, and Deal-of-the-Day product sliders with hover image swap effects.
- **Countdown Deal Timer** — Real-time countdown component for time-limited offers with SSR-safe hydration.
- **Category & Brand Sliders** — Dedicated carousel components for browsing by category or brand.
- **Promo Banner System** — Data-driven promotional cards with dynamic background colors and pricing overlays.
- **Mega Dropdown Navigation** — Multi-column mega menu for desktop with structured category links.
- **Animated Mobile Sidebar** — Slide-in sidebar navigation with Framer Motion accordion dropdowns and backdrop overlay.
- **Product Filtering & Pagination** — Server-side filter form (search, category, brand, price range) with URL-based pagination.
- **Breadcrumb Navigation** — Auto-generated breadcrumbs from the current URL pathname.
- **Rating Stars Component** — Renders full, half, and empty star ratings from a numeric score.
- **Testimonials Slider** — Customer review carousel with avatar, name, and message.
- **Blog Post Slider** — Blog preview cards with image, excerpt, and date.
- **Newsletter Section** — Email subscription call-to-action block.
- **Free Shipping Banner** — Promotional banner highlighting free shipping threshold.
- **Store Features Bar** — Horizontal feature strip (Worldwide Shipping, Money Back, Offers, 24/7 Support).
- **Reusable UI Primitives** — Button, Badge, Accordion, Discount, and SectionWrapper components.
- **Custom Hooks** — `useIsMobile` and `useIsPc` for responsive client-side behavior.
- **SVG as React Components** — All icons loaded via SVGR for tree-shaking and inline rendering.
- **Custom Scrollbar & Shadows** — Polished scrollbar styling and layered box-shadow utilities.
- **API Route Stubs** — Pre-built API routes for authentication (login/register), products CRUD, and file upload.
- **Admin Panel Scaffold** — Admin dashboard and product management route structure.
- **Cart & Shop Pages** — Dedicated cart and shop listing pages with filter sidebar.

---

## Project Structure

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

## Getting Started

### Prerequisites

- **Node.js** >= 18.x
- **npm** / **yarn** / **pnpm** / **bun**

### Installation

```bash
git clone https://github.com/your-username/shapora.git
cd shapora
npm install
```

### Development

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Production Build

```bash
npm run build
npm run start
```

### Linting

```bash
npm run lint
```

---

## License

This project is private and proprietary.
