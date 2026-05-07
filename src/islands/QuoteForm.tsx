// QuoteForm — Astro React island. Mounted with `client:load` so this is the
// ONLY component that ships JavaScript to the browser. Everything else on the
// site is server-rendered HTML with zero JS.
//
// PLACEHOLDER — full port of Lovable's QuoteForm.tsx (24.8KB multi-step form
// with react-hook-form + zod validation) is pending next session. For now we
// render a single-step form that submits via mailto: as a working fallback,
// matching the visual style of the original.

import { useState } from 'react';

const services = [
  'Residential Window Cleaning',
  'Commercial Window Cleaning',
  'Screen Cleaning & Repair',
  'Hard Water Stain Removal',
  'Solar Panel Cleaning',
  'Gutter Cleaning',
  'Pressure Washing',
  'Multiple services',
  "Not sure — quote me",
];

export default function QuoteForm() {
  const [submitted, setSubmitted] = useState(false);

  // For now: fall back to mailto. Wire to a Cloudflare Pages Function later.
  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const lines: string[] = [];
    fd.forEach((value, key) => lines.push(`${key}: ${value}`));
    const body = encodeURIComponent(lines.join('\n'));
    const subject = encodeURIComponent('Quote request from holygiraffe.com');
    window.location.href = `mailto:moly@holygiraffe.com?subject=${subject}&body=${body}`;
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="neo-card p-8 text-center max-w-2xl mx-auto">
        <h3 className="font-heading font-bold text-2xl mb-3">Thanks — we got it!</h3>
        <p className="text-muted-foreground">
          Your email client should have opened with the request prefilled. If
          it didn&apos;t, just call us at{' '}
          <a href="tel:+19493157142" className="text-primary font-bold underline">
            (949) 315-7142
          </a>
          .
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={onSubmit}
      className="neo-card p-6 md:p-8 max-w-2xl mx-auto space-y-4"
    >
      <div className="grid sm:grid-cols-2 gap-4">
        <div>
          <label htmlFor="name" className="block font-heading font-semibold text-sm mb-1.5">
            Your name
          </label>
          <input
            id="name"
            name="name"
            required
            autoComplete="name"
            className="w-full px-4 py-3 text-base rounded-xl border-[3px] border-foreground bg-background focus:outline-none focus:ring-2 focus:ring-primary"
          />
        </div>
        <div>
          <label htmlFor="phone" className="block font-heading font-semibold text-sm mb-1.5">
            Phone
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            required
            autoComplete="tel"
            className="w-full px-4 py-3 text-base rounded-xl border-[3px] border-foreground bg-background focus:outline-none focus:ring-2 focus:ring-primary"
          />
        </div>
      </div>

      <div>
        <label htmlFor="email" className="block font-heading font-semibold text-sm mb-1.5">
          Email
        </label>
        <input
          id="email"
          name="email"
          type="email"
          autoComplete="email"
          className="w-full px-4 py-3 text-base rounded-xl border-[3px] border-foreground bg-background focus:outline-none focus:ring-2 focus:ring-primary"
        />
      </div>

      <div>
        <label htmlFor="address" className="block font-heading font-semibold text-sm mb-1.5">
          Service address (city is fine)
        </label>
        <input
          id="address"
          name="address"
          autoComplete="street-address"
          className="w-full px-4 py-3 text-base rounded-xl border-[3px] border-foreground bg-background focus:outline-none focus:ring-2 focus:ring-primary"
        />
      </div>

      <div>
        <label htmlFor="service" className="block font-heading font-semibold text-sm mb-1.5">
          What do you need?
        </label>
        <select
          id="service"
          name="service"
          className="w-full px-4 py-3 text-base rounded-xl border-[3px] border-foreground bg-background focus:outline-none focus:ring-2 focus:ring-primary"
        >
          {services.map((s) => (
            <option key={s}>{s}</option>
          ))}
        </select>
      </div>

      <div>
        <label htmlFor="notes" className="block font-heading font-semibold text-sm mb-1.5">
          Anything else? (optional)
        </label>
        <textarea
          id="notes"
          name="notes"
          rows={3}
          placeholder="Window count, story height, hard water spots, frequency you're after..."
          className="w-full px-4 py-3 text-base rounded-xl border-[3px] border-foreground bg-background focus:outline-none focus:ring-2 focus:ring-primary"
        />
      </div>

      <button type="submit" className="neo-btn-primary w-full">
        Send Quote Request
      </button>
      <p className="text-xs text-muted-foreground text-center">
        We respond the same business day. Your info is never shared.
      </p>
    </form>
  );
}
