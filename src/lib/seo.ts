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

export function resolveSeo(props: SeoProps): ResolvedSeo {
  // Hard-truncate over-length values so we never ship a 90-char title.
  const title =
    props.title.length > 60 ? props.title.slice(0, 57) + '…' : props.title;
  const description =
    props.description.length > 160
      ? props.description.slice(0, 157) + '…'
      : props.description;

  return {
    title,
    description,
    canonical: canonical(props.path),
    ogImage: props.ogImage ?? `${SITE.url}${SITE.ogImage}`,
    ogType: props.ogType ?? 'website',
    noindex: props.noindex ?? false,
  };
}
