// Real Google reviews — kept in sync with the Google Business Profile.
// When a new review comes in:
//   1. Open https://maps.app.goo.gl/pX9wo5S5hdesuyhbA
//   2. Copy the reviewer's display name and the full review text exactly
//   3. Add an entry below (most recent first)
//
// Reviews are static (not fetched at build time) so the site stays
// zero-key, zero-cost, and the review text appears in the rendered HTML
// where AI search engines and Google rich-snippet extraction can read it.

export interface Review {
  /** Reviewer's display name as it appears on Google. */
  name: string;
  /** Star rating, 1–5. */
  rating: number;
  /** Approximate posting time as Google shows it ("a month ago", "2 days ago"). */
  timeAgo: string;
  /** Full review text — preserve formatting / line breaks where possible. */
  body: string;
  /** Optional location/city if the reviewer mentioned one. */
  location?: string;
}

// Most recent first.
export const REVIEWS: Review[] = [
  {
    name: 'Bob Byrnes',
    rating: 5,
    timeAgo: '2 days ago',
    body: 'Chris does excellent work…very professional, responsive and at a great value. Definitely will hire again!!!',
  },
  {
    name: 'Matt',
    rating: 5,
    timeAgo: 'a month ago',
    body:
      "WOW, We were hunting around for a window cleaning company, got a couple quotes, and ended up going with Giraffe Window Cleaning — and yeah… safe to say we're NEVER going with anyone else again. Like, they set the bar way too high.\n\nMo pulled up right on time, super transparent, no weird runaround or upselling nonsense. Just real, solid people who actually care about their work. And you can tell too — they didn't rush it at all. Took their time and treated the place like it was their own. That kinda work ethic? Rare these days fr.\n\nAnd the results?? Insane. Everything is spotless. My windows out here lookin' brand new 🤩\n\n1000% recommending Giraffe Window Cleaning to literally anyone who'll listen. Appreciate you guys for real",
  },
  {
    name: 'Hamed Karimipour',
    rating: 5,
    timeAgo: 'a month ago',
    body:
      "Giraffe Cleaning is great. Quick to respond, fair price, and the results speak for themselves. I've got a two-story house with some tricky windows and they handled everything no problem. The natural light in my living room looks totally different now ☀️ Booking them again for sure …",
  },
  {
    name: 'Farzam Kash',
    rating: 5,
    timeAgo: 'a month ago',
    body:
      "I recently hired this window cleaning service, and I couldn't be happier with the results. From start to finish, the experience was professional, efficient, and stress-free. The team arrived on time, was very courteous, and paid great attention to detail.",
  },
  {
    name: 'Joseph',
    rating: 5,
    timeAgo: 'a month ago',
    body:
      'Amazing service—I would highly recommend them to anyone. They were punctual, professional, and provided excellent customer service from start to finish.',
  },
  {
    name: 'علیرضا ملک',
    rating: 5,
    timeAgo: 'a month ago',
    body:
      'I had a great experience with Giraffe Window Cleaning. They showed up on time, were super professional, and paid attention to the small details that most companies miss. My windows honestly look brand new—crystal clear with no streaks at all.\n\nWhat really stood out was how respectful and careful they were around my home. They made sure everything was clean before they left, not just the windows. Pricing was fair for the quality of work, and the whole process was smooth from start to finish.\n\nI\'d definitely recommend them to anyone looking for reliable and high-quality window cleaning.',
  },
  // TODO: 2 more reviews from the GBP listing remain to be added.
];

/** Reviews shown in the homepage carousel. All of them, ordered most-recent-first. */
export const FEATURED_REVIEWS: Review[] = REVIEWS;
