// @ts-check
import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import react from '@astrojs/react';
import sitemap from '@astrojs/sitemap';

// Static output. Tailwind for design fidelity with the Lovable original.
// React integration ONLY for the QuoteForm island (other components ship 0 JS).
export default defineConfig({
  site: 'https://holygiraffe.com',
  output: 'static',
  trailingSlash: 'never',
  build: {
    inlineStylesheets: 'auto',
    format: 'file',
  },
  compressHTML: true,
  prefetch: false,
  integrations: [
    tailwind({ applyBaseStyles: false }),
    react(),
    sitemap({
      changefreq: 'monthly',
      priority: 0.7,
      lastmod: new Date(),
      filter: (page) => !page.includes('/404') && !page.includes('/sitemap'),
      serialize(item) {
        // Per-page crawl-budget signals. Higher priority + tighter
        // changefreq nudges Google to recrawl that URL more often.
        // Reserve weekly + 1.0 for the homepage. Service pages outrank
        // city pages because they are evergreen and convert highest.
        const u = item.url.replace('https://holygiraffe.com', '');
        const services = [
          '/residential-window-cleaning',
          '/commercial-window-cleaning',
          '/screen-cleaning-repair',
          '/hard-water-stain-removal',
          '/solar-panel-cleaning',
          '/gutter-cleaning',
          '/pressure-washing',
        ];
        if (u === '' || u === '/') {
          item.priority = 1.0;
          item.changefreq = 'weekly';
        } else if (u.startsWith('/window-cleaning-')) {
          item.priority = 0.8;
          item.changefreq = 'monthly';
        } else if (services.includes(u)) {
          item.priority = 0.9;
          item.changefreq = 'monthly';
        } else if (u === '/get-a-quote') {
          item.priority = 0.7;
          item.changefreq = 'monthly';
        } else if (u === '/about' || u === '/faq') {
          item.priority = 0.5;
          item.changefreq = 'yearly';
        } else if (u === '/reviews') {
          item.priority = 0.6;
          item.changefreq = 'monthly';
        }
        return item;
      },
    }),
  ],
});
