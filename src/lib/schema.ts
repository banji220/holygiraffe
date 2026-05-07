// JSON-LD schema generators. Output is serialized as
// <script type="application/ld+json"> in BaseLayout.

import { SITE, NAP, HOURS, REVIEWS, SOCIAL } from '../consts';
import services from '../data/serviceData';
import cities from '../data/cityData';
import { REVIEWS as REAL_REVIEWS } from '../data/reviews';
import type { ServiceData } from '../data/serviceData';
import type { CityData } from '../data/cityData';

export const BUSINESS_ID = `${SITE.url}/#business`;
export const ORGANIZATION_ID = `${SITE.url}/#organization`;
export const WEBSITE_ID = `${SITE.url}/#website`;

/** Top-level Organization entity — separate from CleaningService for E-E-A-T.
 *  CleaningService references this via `parentOrganization`.
 *  This is the "who runs this company" stable identity. */
export function organizationSchema(): unknown {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    '@id': ORGANIZATION_ID,
    name: SITE.legalName,
    url: SITE.url,
    logo: {
      '@type': 'ImageObject',
      url: `${SITE.url}${SITE.logo}`,
      width: 1268,
      height: 1920,
      caption: `${SITE.legalName} logo`,
    },
    image: `${SITE.url}${SITE.ogImage}`,
    sameAs: [SOCIAL.gbpUrl, SOCIAL.yelpUrl],
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: NAP.phone,
      email: NAP.email,
      contactType: 'customer service',
      areaServed: 'US-CA',
      availableLanguage: ['English'],
    },
  };
}

/** WebSite entity — describes the site itself.
 *  Future: add potentialAction SearchAction once we ship a /search page. */
export function websiteSchema(): unknown {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': WEBSITE_ID,
    name: SITE.name,
    url: SITE.url,
    description: SITE.description,
    publisher: { '@id': ORGANIZATION_ID },
    inLanguage: 'en-US',
  };
}

/** ImageObject for the OG image — gives crawlers explicit dimensions and alt. */
export function ogImageSchema(): unknown {
  return {
    '@context': 'https://schema.org',
    '@type': 'ImageObject',
    '@id': `${SITE.url}${SITE.ogImage}#og`,
    url: `${SITE.url}${SITE.ogImage}`,
    width: SITE.ogImageWidth,
    height: SITE.ogImageHeight,
    caption: `${SITE.legalName} — Orange County window cleaning, call ${NAP.phoneDisplay}`,
    representativeOfPage: true,
  };
}

function openingHoursSpec(): unknown[] {
  return [
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
      opens: HOURS.weekdays.open,
      closes: HOURS.weekdays.close,
    },
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: 'Saturday',
      opens: HOURS.saturday.open,
      closes: HOURS.saturday.close,
    },
  ];
}

function offerCatalog(): unknown {
  return {
    '@type': 'OfferCatalog',
    name: 'Cleaning Services',
    itemListElement: services.map((s: ServiceData) => ({
      '@type': 'Offer',
      itemOffered: {
        '@type': 'Service',
        name: s.name,
        url: `${SITE.url}/${s.slug}`,
      },
    })),
  };
}

/** Per-review JSON-LD entries — gives Google + AI search the actual
 *  review text, not just an aggregate count. */
function reviewItems(): unknown[] {
  return REAL_REVIEWS.map((r) => ({
    '@type': 'Review',
    author: { '@type': 'Person', name: r.name },
    reviewRating: {
      '@type': 'Rating',
      ratingValue: r.rating,
      bestRating: 5,
    },
    reviewBody: r.body.replace(/\n+/g, ' ').trim(),
    itemReviewed: { '@id': BUSINESS_ID },
  }));
}

/** Homepage primary entity — full LocalBusiness with everything. */
export function cleaningServiceSchema(): unknown {
  return {
    '@context': 'https://schema.org',
    '@type': 'CleaningService',
    '@id': BUSINESS_ID,
    name: SITE.legalName,
    url: SITE.url,
    telephone: NAP.phone,
    email: NAP.email,
    image: `${SITE.url}${SITE.logo}`,
    logo: { '@type': 'ImageObject', url: `${SITE.url}${SITE.logo}` },
    description: SITE.description,
    address: {
      '@type': 'PostalAddress',
      addressLocality: NAP.city,
      addressRegion: NAP.region,
      postalCode: NAP.postalCode,
      addressCountry: NAP.country,
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: NAP.latitude,
      longitude: NAP.longitude,
    },
    serviceArea: {
      '@type': 'GeoCircle',
      geoMidpoint: {
        '@type': 'GeoCoordinates',
        latitude: NAP.latitude,
        longitude: NAP.longitude,
      },
      geoRadius: String(NAP.serviceRadiusMeters),
    },
    areaServed: cities.map((c: CityData) => c.name),
    openingHoursSpecification: openingHoursSpec(),
    priceRange: '$$',
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: REVIEWS.ratingValue,
      bestRating: REVIEWS.bestRating,
      ratingCount: String(REVIEWS.ratingCount),
      reviewCount: String(REVIEWS.ratingCount),
    },
    sameAs: [SOCIAL.gbpUrl, SOCIAL.yelpUrl],
    hasOfferCatalog: offerCatalog(),
    review: reviewItems(),
  };
}

export function serviceSchema(args: {
  name: string;
  description: string;
  slug: string;
}): unknown {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: args.name,
    serviceType: args.name,
    description: args.description,
    provider: {
      '@type': 'CleaningService',
      '@id': BUSINESS_ID,
      name: SITE.legalName,
      url: SITE.url,
      telephone: NAP.phone,
    },
    areaServed: { '@type': 'AdministrativeArea', name: 'Orange County, CA' },
    url: `${SITE.url}/${args.slug}`,
  };
}

export function localBusinessSchema(args: {
  cityName: string;
  citySlug: string;
  description: string;
}): unknown {
  return {
    '@context': 'https://schema.org',
    '@type': 'CleaningService',
    '@id': `${SITE.url}/window-cleaning-${args.citySlug}#business`,
    name: `${SITE.legalName} — ${args.cityName}`,
    url: `${SITE.url}/window-cleaning-${args.citySlug}`,
    telephone: NAP.phone,
    email: NAP.email,
    image: `${SITE.url}${SITE.logo}`,
    description: args.description,
    address: {
      '@type': 'PostalAddress',
      addressLocality: args.cityName,
      addressRegion: NAP.region,
      addressCountry: NAP.country,
    },
    areaServed: { '@type': 'City', name: args.cityName },
    openingHoursSpecification: openingHoursSpec(),
    priceRange: '$$',
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: REVIEWS.ratingValue,
      bestRating: REVIEWS.bestRating,
      ratingCount: String(REVIEWS.ratingCount),
      reviewCount: String(REVIEWS.ratingCount),
    },
    parentOrganization: { '@id': BUSINESS_ID },
  };
}

/** HowTo schema — Google renders the steps as a rich snippet directly in
 *  search results, which is a meaningful CTR boost on service queries. */
export function howToSchema(args: {
  name: string;
  description: string;
  steps: { num?: string; title: string; desc: string }[];
}): unknown | null {
  if (!args.steps || args.steps.length === 0) return null;
  return {
    '@context': 'https://schema.org',
    '@type': 'HowTo',
    name: args.name,
    description: args.description,
    step: args.steps.map((s, i) => ({
      '@type': 'HowToStep',
      position: i + 1,
      name: s.title,
      text: s.desc,
    })),
  };
}

export type FaqItem = { question: string; answer: string };

export function faqSchema(items: FaqItem[]): unknown {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: items.map((item) => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: {
        '@type': 'Answer',
        // Strip markdown links from answers for cleaner schema text.
        text: item.answer.replace(/\[([^\]]+)\]\(([^)]+)\)/g, '$1'),
      },
    })),
  };
}

export type Crumb = { name: string; path?: string };

/** BreadcrumbList schema. Pass [] to suppress (homepage). */
export function breadcrumbSchema(crumbs: Crumb[]): unknown | null {
  if (crumbs.length === 0) return null;
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: SITE.url },
      ...crumbs.map((c, i) => ({
        '@type': 'ListItem',
        position: i + 2,
        name: c.name,
        ...(c.path ? { item: `${SITE.url}${c.path}` } : {}),
      })),
    ],
  };
}

export function webPageSchema(args: {
  title: string;
  description: string;
  path: string;
}): unknown {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: args.title,
    description: args.description,
    url: `${SITE.url}${args.path}`,
    isPartOf: {
      '@type': 'WebSite',
      name: SITE.name,
      url: SITE.url,
    },
    about: { '@id': BUSINESS_ID },
  };
}
