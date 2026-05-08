# holygiraffe.com

> **SEO score: 32 → 82** (May 7, 2026 audit). This round of fixes targets the
> 18 points still on the table. Headline wins after this round:
>
> - Title-truncation `…` bug killed (was hiding "Orange County, CA" from the homepage source)
> - FAQ page now has a proper H1
> - Service-page H1 spacing fixed (`Cleaningin` → `Cleaning in`)
> - OfferCatalog dedupe (Screen Cleaning was listed twice in homepage schema)
> - `security.txt` added at `/.well-known/security.txt`
> - Cache-Control rules now cover images, scripts, and well-known files
> - Dedicated `/reviews` page rendering all real GBP reviews
> - robots.txt clarified — but you must disable Cloudflare's "Block AI Scrapers and Crawlers"
>   feature in the dashboard (see deploy notes below)



Static marketing site for **Giraffe Window Cleaning** (Orange County, CA), built with [Astro](https://astro.build) + Tailwind. Faithful port of the existing Lovable.app design — same neo-brutalist visual identity (chunky borders, hard offset shadows, coral/mint/yellow accents, Space Grotesk + DM Sans) — but server-rendered as static HTML at build time. Zero JavaScript shipped except the QuoteForm island.

Deploys to Cloudflare Pages.

## Quick start

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # static output to ./dist
npm run preview  # preview the production build
```

Requires Node 20+.

## What's in this build

### Theme + foundation (matches Lovable design 1:1)

- `tailwind.config.mjs` — verbatim port of the Lovable theme tokens
- `src/styles/global.css` — verbatim port of `index.css` with all CSS variables (`--coral`, `--mint`, `--yellow`, `--shadow-brutal`, etc.) and `neo-*` component classes (`neo-card`, `neo-btn`, `neo-badge`)
- Background: cream `40 33% 96%` with the dotted radial pattern
- Fonts: Space Grotesk (headings) + DM Sans (body) loaded from Google Fonts

### Components ported

| Component | Status |
|---|---|
| Navbar (Services/Locations dropdowns, mobile menu) | ✅ Full port — `<details>` instead of Framer Motion, zero JS |
| Footer | ✅ Full port |
| HeroSection | ✅ Full port |
| MarqueeBanner | ✅ Full port (CSS marquee animation) |
| ServicesSection | ✅ Full port (4 service cards) |
| HowItWorksSection | ✅ Full port (yellow band, 3 steps) |
| FaqSection | ✅ Full port — `<details>` accordion, FAQPage schema |
| CtaSection | ✅ Full port |
| GiraffePatches | ✅ Full port (CSS keyframes replace Framer Motion) |
| FloatingCallButton | ✅ Full port |
| TestimonialsSection | ⚠️ **Placeholder** — visual structure in place, full port TODO |
| GallerySection | ⚠️ **Placeholder** — image grid in place, full port TODO |
| ServiceAreaSection | ✅ Google Maps embed + 35-city grid (action plan M6). Interactive SVG `OrangeCountyMap` port still TODO. |
| GoogleMapEmbed | ✅ Reusable lazy-loaded iframe (no API key needed) |
| ReviewBadge | ✅ Visible "5.0 on Google" widget linked to GBP profile (action plan M6) |
| QuoteForm | ⚠️ **Single-step island** working with mailto fallback. Full multi-step react-hook-form + zod port TODO |

### Pages built

| Path | Source |
|---|---|
| `/` | Index.tsx homepage with all sections |
| `/about` | AboutPage.tsx |
| `/faq` | FaqPage.tsx (uses shared FaqSection) |
| `/get-a-quote` | ContactPage.tsx |
| `/404` | NotFound.tsx |
| `/[service]` | All 7 service pages, pre-rendered from `serviceData.ts` |
| `/window-cleaning-[city]` | All 35 city pages, pre-rendered from `cityData.ts` |

### Bonus SEO enhancements beyond the action plan

| Enhancement | Where |
|---|---|
| **`<link rel="preload" as="image">`** for above-fold hero logo on the homepage — shaves 100–300ms off LCP | `BaseLayout.astro` `preloadImages` prop, set on `index.astro` |
| **`<link rel="preconnect">`** for `fonts.googleapis.com` + `fonts.gstatic.com` — Google Fonts CSS request starts in parallel with HTML parse instead of blocking | `BaseLayout.astro` |
| **WebSite schema** with stable `@id` on every page | `lib/schema.ts → websiteSchema()` |
| **Organization schema** as a separate top-level entity for stronger E-E-A-T (separate from CleaningService) | `lib/schema.ts → organizationSchema()` |
| **ImageObject schema** for the OG image with dimensions + caption | `lib/schema.ts → ogImageSchema()` |
| **HowTo schema** on every service page that has a `howItWorks` array — Google renders the step list directly in search results as a rich snippet | `lib/schema.ts → howToSchema()` + `pages/[service].astro` |
| **Review schema** entries inside `CleaningService` carrying real review text — Google can show real customer quotes in rich snippets, AI search engines can cite specific reviews | `lib/schema.ts → cleaningServiceSchema()` reads `data/reviews.ts` |
| **Per-page-type sitemap priority + changefreq** — homepage 1.0/weekly, services 0.9/monthly, cities 0.8/monthly, get-a-quote 0.7, about/faq 0.5/yearly | `astro.config.mjs` sitemap serializer |
| **Expanded robots.txt** — explicit allow for 30+ crawlers including CCBot (Common Crawl, feeds GPT-4 + Claude training), Bytespider, Meta-ExternalAgent, Apple-Extended, Amazonbot, Diffbot, plus social unfurl bots (Facebook, Twitter, LinkedIn, Slack, Discord, WhatsApp, Telegram, Pinterest) | `public/robots.txt` |
| **HTML sitemap at `/sitemap`** — user-facing nav of every page, gives Google an extra crawl path, linked from footer | `pages/sitemap.astro` |

### SEO infrastructure (audit findings → solved)

| Audit issue | How it's solved |
|---|---|
| SPA blank shell to crawlers | Astro outputs full HTML at build time. `view-source:` shows real content. |
| Identical title/meta everywhere | `BaseLayout.astro` + `lib/seo.ts` enforce per-page title (≤60 chars) and description (≤160 chars). |
| Wrong schema `@type` (HomeAndConstructionBusiness) | `lib/schema.ts` emits `CleaningService` with `geo`, `serviceArea` GeoCircle, `areaServed` (35 cities), `aggregateRating`, `sameAs`, `hasOfferCatalog`, `openingHoursSpecification`. |
| No canonical tags | `<link rel="canonical">` on every page. |
| Static "Home" breadcrumb | `breadcrumbSchema()` builds dynamic `BreadcrumbList` per page. |
| No per-page Service schema | Every service page emits `Service` linked to the business `@id`. |
| No FAQPage schema | Homepage, FAQ, and every city/service page with FAQs emit `FAQPage`. |
| Generic OG image | OG meta wired through; replace `public/og-image.png`. |
| Twitter card = `summary` | Now `summary_large_image`. |
| Doorway-page risk on city pages | Each city page reads from `cityData.ts` which has unique `intro`, `extendedContent`, `whyChooseUs`, and `faqs` per city. |
| Missing `llms.txt` | `public/llms.txt` written. |
| Missing security headers | `public/_headers` ships X-Frame-Options, CSP, HSTS, Permissions-Policy. |
| Heavy JS bundle hurting CWV | Zero JS by default. Only the QuoteForm hydrates as an island. |

## Project layout

```
holygiraffe-site/
├── astro.config.mjs            # Astro 5 + Tailwind + React + sitemap
├── tailwind.config.mjs         # Verbatim port of Lovable theme
├── package.json
├── tsconfig.json
├── public/
│   ├── _headers                # Cloudflare security headers + cache rules
│   ├── _redirects              # www → apex
│   ├── favicon.svg             # Placeholder (drop your real logo at /logo.png)
│   ├── llms.txt                # AI-crawler business summary
│   └── robots.txt
└── src/
    ├── consts.ts               # NAP, hours, geo, GA4 ID — single source of truth
    ├── data/
    │   ├── cityData.ts         # 35 cities with unique intro/extended/FAQs
    │   └── serviceData.ts      # 7 services with full content
    ├── lib/
    │   ├── seo.ts              # canonical + truncation helpers
    │   ├── schema.ts           # JSON-LD generators (CleaningService, Service,
    │   │                       #   LocalBusiness, FAQPage, BreadcrumbList, WebPage)
    │   └── utils.ts            # cn() helper from shadcn
    ├── styles/
    │   └── global.css          # Verbatim port of Lovable index.css
    ├── layouts/
    │   └── BaseLayout.astro    # head + Navbar + main + Footer + FloatingCallButton
    ├── components/
    │   ├── Navbar.astro        # Sticky nav with dropdowns (zero JS)
    │   ├── Footer.astro
    │   ├── HeroSection.astro
    │   ├── MarqueeBanner.astro
    │   ├── ServicesSection.astro
    │   ├── HowItWorksSection.astro
    │   ├── FaqSection.astro    # Re-used by /faq page
    │   ├── CtaSection.astro
    │   ├── GiraffePatches.astro
    │   ├── FloatingCallButton.astro
    │   ├── TestimonialsSection.astro    # placeholder
    │   ├── GallerySection.astro          # placeholder
    │   ├── ServiceAreaSection.astro      # placeholder
    │   └── QuoteFormSection.astro        # wraps the QuoteForm island
    ├── islands/
    │   └── QuoteForm.tsx       # The ONLY component that ships JS to browser
    └── pages/
        ├── index.astro
        ├── about.astro
        ├── faq.astro
        ├── get-a-quote.astro
        ├── 404.astro
        ├── [service].astro              # pre-renders all 7 service pages
        └── window-cleaning-[city].astro # pre-renders all 35 city pages
```

## Files to drop in before going live

| Path | What | Notes |
|---|---|---|
| `public/logo.png` | Your existing logo from `src/assets/logo.png` in the Lovable repo | Schema references it; navbar has a text fallback. |
| `public/giraffe-logo-g.png` | The G logo from `src/assets/giraffe-logo-g.png` | Hero shows a CSS fallback if missing. |
| `public/og-image.png` | 1200×630 branded social image | Audit specifically called this out. |
| `public/apple-touch-icon.png` | 180×180 iOS home-screen icon | Optional. |
| `public/images/gallery/{1..8}.jpg` | Real before/after photos | Gallery placeholders show "Photo coming" if missing. |

You can grab the existing logo files from your Lovable repo:
- https://raw.githubusercontent.com/banji220/creative-spark-genie/main/src/assets/logo.png
- https://raw.githubusercontent.com/banji220/creative-spark-genie/main/src/assets/giraffe-logo-g.png

Save them to `public/logo.png` and `public/giraffe-logo-g.png` respectively.

## Replace placeholders before launch

- ~~`YOUR_GBP_CID` in `src/consts.ts → SOCIAL.gbpUrl`~~ ✅ Done. Real CID `12651997403304960659` resolved from the GBP share link.
- Confirm the Yelp slug in `src/consts.ts → SOCIAL.yelpUrl`

## Real Google reviews

Source of truth: `src/data/reviews.ts`. To add a new review when one comes in:

1. Open https://maps.app.goo.gl/pX9wo5S5hdesuyhbA
2. Copy the reviewer's display name and the full review text
3. Append a new entry to the `REVIEWS` array

The reviews appear in three places automatically:
- **Homepage TestimonialsSection** — first 3 reviews shown as cards
- **Homepage JSON-LD** — every review embedded as a `Review` schema entry inside the `CleaningService`. Google can show the actual text in rich snippets, and AI search engines can cite specific reviews directly.
- **`aggregateRating`** — total count stays in sync with the `ratingCount` value in `src/consts.ts`

Currently 2 of 8 reviews loaded (Matt + علیرضا ملک). Add the remaining 6 as you have time.

## Deploying to Cloudflare Pages

1. Push to GitHub (new repo, separate from the Lovable repos):
   ```bash
   git init -b main
   git add .
   git commit -m "Initial: Astro port of Giraffe Cleaning site"
   git remote add origin git@github.com:banji220/holygiraffe.git
   git push -u origin main
   ```

2. Cloudflare dashboard → **Workers & Pages** → **Create** → **Pages** → **Connect to Git** → select the new repo. Build settings auto-detect for Astro:
   - Framework preset: **Astro**
   - Build command: `npm run build`
   - Build output: `dist`
   - Node version: `20` (set `NODE_VERSION=20` in env vars if not auto)

3. First build runs in ~90 seconds. You get a `*.pages.dev` preview URL.

4. **Test the preview URL thoroughly before pointing DNS at it:**
   - View source on the homepage — confirm body has actual content (not `<div id="root">`)
   - Check `/window-cleaning-irvine`, `/residential-window-cleaning`, `/faq`, `/get-a-quote`
   - Run [pagespeed.web.dev](https://pagespeed.web.dev) — should be all-green
   - Validate schema at [validator.schema.org](https://validator.schema.org/)

5. Only when preview looks right: **Custom domains → Set up `holygiraffe.com`**. Cloudflare validates DNS automatically (you're already on Cloudflare DNS).

6. **Lovable will stop serving the moment DNS flips.** If anything explodes, revert DNS to the previous record. Have that record copied somewhere first.

## Post-deploy checklist

1. Submit `https://holygiraffe.com/sitemap-index.xml` to Google Search Console
2. Validate the homepage in [Schema Markup Validator](https://validator.schema.org/) and [Rich Results Test](https://search.google.com/test/rich-results)
3. Replace `YOUR_GBP_CID` in `src/consts.ts` and redeploy
4. Drop `public/og-image.png` and `public/logo.png`
5. Request indexing in GSC for the homepage + each service page + each city page
6. Archive the old `creative-spark-genie` and `creative-spark-genie-f45a9142` repos

## What's next (next session)

These are the remaining placeholders to flesh out:

1. **TestimonialsSection** — port from `src/components/TestimonialsSection.tsx` (11.7KB) in the Lovable repo. Full carousel converts to CSS scroll-snap.
2. **GallerySection** — port from `GallerySection.tsx` (9.8KB). Three marquee rows of before/after images via CSS animation.
3. **ServiceAreaSection + OrangeCountyMap** — port the interactive SVG map (13.5KB) with CSS hover states instead of Framer Motion.
4. **QuoteForm** — port the full multi-step form (24.8KB) with react-hook-form + zod, replacing the current single-step mailto fallback.

Each of these is a focused 30–45 minute job in a follow-up session.
