// Per-page SEO helpers. Pure functions — no I/O, no side effects.
import { SITE } from '../consts';

export type SeoProps = {
  title: string;
  description: string;
  /** Path beginning with "/" — canonical URL is built from SITE.url. */
  path: string;
  /** Override OG image; defaults to site-wide image. */
  ogImage?: string;
  /** Mark "noindex" for thin/utility pages (e.g. 404). */
  noindex?: boolean;
  /** Open Graph type; defaults to "website". */
  ogType?: string;
};

export type ResolvedSeo = {
  title: string;
  description: string;
  canonical: string;
  ogImage: string;
  ogType: string;
  noindex: boolean;
};

/** Build a canonical URL from a path. */
export function canonical(path: string): string {
  const clean = path === '/' ? '' : path.replace(/\/$/, '');
  return `${SITE.url}${clean}`;
}

/**
 * Soft validation only — DO NOT truncate values.
 *
 * The previous version sliced any over-limit title/description and appended
 * a literal "…" character. That caused the audit-flagged bug: the homepage
 * title literally read "Giraffe Window Cleaning — Professional Window Cleaning in…"
 * in the rendered HTML, killing keyword value (lost "Orange County, CA").
 *
 * Authors are responsible for keeping titles ≤60 chars and descriptions ≤160
 * chars. We pass through what was set so crawlers see the full text.
 */
export function resolveSeo(props: SeoProps): ResolvedSeo {
  if (import.meta.env.DEV) {
    if (props.title.length > 65) {
      console.warn(
        `[seo] Title is ${props.title.length} chars (recommended ≤60): "${props.title}"`,
      );
    }
    if (props.description.length > 165) {
      console.warn(
        `[seo] Description is ${props.description.length} chars (recommended ≤160): "${props.description}"`,
      );
    }
  }

  return {
    title: props.title,
    description: props.description,
    canonical: canonical(props.path),
    ogImage: props.ogImage ?? `${SITE.url}${SITE.ogImage}`,
    ogType: props.ogType ?? 'website',
    noindex: props.noindex ?? false,
  };
}
