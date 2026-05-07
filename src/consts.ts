// Single source of truth for business NAP. Imported across pages, layouts,
// and schema generators. Change here, propagates everywhere.

export const SITE = {
  url: 'https://holygiraffe.com',
  name: 'Giraffe Cleaning',
  legalName: 'Giraffe Window Cleaning',
  tagline: 'Sparkling Windows Every Time — Orange County, CA',
  description:
    'Professional residential and commercial window cleaning, screen cleaning and repair, hard water stain removal, solar panel cleaning, gutter cleaning, and pressure washing across Orange County, CA. 5-star rated, fully insured, eco-friendly purified-water system.',
  // Global brand mark — your real PNG, used across navbar, footer, hero,
  // favicon, schema. Drop your file at public/logo.png to replace.
  logo: '/logo.png',
  ogImage: '/og-image.png',
  ogImageWidth: 1200,
  ogImageHeight: 630,
} as const;

export const NAP = {
  phone: '+1-949-315-7142',
  phoneDisplay: '(949) 315-7142',
  phoneLink: 'tel:+19493157142',
  email: 'moly@holygiraffe.com',
  emailLink: 'mailto:moly@holygiraffe.com',
  city: 'Irvine',
  region: 'CA',
  postalCode: '92620',
  country: 'US',
  // Coordinates from the actual Google Business Profile listing.
  latitude: 33.640814,
  longitude: -117.7803964,
  serviceRadiusMeters: 48280, // ~30 miles, covers all 35 OC cities
} as const;

export const HOURS = {
  weekdays: { open: '07:00', close: '18:00', display: 'Mon–Fri 7am–6pm' },
  saturday: { open: '08:00', close: '16:00', display: 'Sat 8am–4pm' },
  sunday: { display: 'Sun closed' },
} as const;

export const REVIEWS = {
  ratingValue: '5.0',
  ratingCount: 8,
  bestRating: '5',
} as const;

export const SOCIAL = {
  // Real Google Business Profile listing — extracted from the GBP share link.
  gbpUrl: 'https://www.google.com/maps?cid=12651997403304960659',
  // Alternate share URL that resolves to the same listing.
  gbpShareUrl: 'https://maps.app.goo.gl/pX9wo5S5hdesuyhbA',
  yelpUrl: 'https://www.yelp.com/biz/giraffe-window-cleaning-orange-county',
} as const;

export const ANALYTICS = {
  ga4Id: 'G-2BC8TF5TMW',
} as const;

export const META = {
  ogType: 'website',
  twitterCard: 'summary_large_image',
  locale: 'en_US',
} as const;
