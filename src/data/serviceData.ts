export interface ServiceFaq {
  question: string;
  answer: string;
}

export interface ServiceStep {
  num: string;
  title: string;
  desc: string;
}

export interface ServiceData {
  name: string;
  slug: string;
  title: string;
  metaDescription: string;
  headline: string;
  intro: string;
  benefits: string[];
  related: string[]; // slugs
  extendedContent: string[];
  whyChooseUs: string[];
  cityLinks: string[]; // city slugs
  howItWorks: ServiceStep[];
  pricingContent: string[];
  faqs: ServiceFaq[];
}

const services: ServiceData[] = [
  {
    name: "Residential Window Cleaning",
    slug: "residential-window-cleaning",
    title: "Residential Window Cleaning Orange County | Giraffe Cleaning",
    metaDescription: "Professional residential window cleaning in Orange County, CA. Interior & exterior, streak-free results. Free estimates — call (949) 315-7142.",
    headline: "Residential Window Cleaning in Orange County, CA",
    intro: "Your home deserves windows that sparkle. Giraffe Cleaning provides professional residential window cleaning across Orange County using our eco-friendly purified-water system. We clean interior and exterior glass, sills, tracks, and frames — leaving zero streaks and zero mess. Whether you have a single-story bungalow or a four-story hillside estate, our trained technicians have the equipment and expertise to deliver flawless results every time.",
    benefits: [
      "Interior & exterior window cleaning",
      "Sill, track & frame wiping included",
      "Purified deionized water — no chemicals",
      "Safe for kids, pets & plants",
      "Up to 4 stories with water-fed poles",
      "100% satisfaction guarantee",
    ],
    related: ["commercial-window-cleaning", "screen-cleaning-repair", "hard-water-stain-removal"],
    extendedContent: [
      "Most homeowners don't realize how much dirt, dust, and mineral deposits accumulate on their windows until a professional cleaning reveals the difference. Our residential window washing service includes interior and exterior glass, screens, tracks, and sills. Over time, hard water from sprinklers, airborne pollen, and environmental pollutants create a film that dulls your glass and blocks natural light. Our purified deionized water system strips all of this away without soap or chemicals — and because there's no residue left behind, your windows stay cleaner longer than with traditional methods. We also offer [commercial window cleaning](/commercial-window-cleaning) for businesses that want the same streak-free results.",
      "We clean homes across every neighborhood in Orange County. From the planned communities of Irvine and Ladera Ranch to the hillside estates of Laguna Niguel and Yorba Linda, we adjust our approach to match your home's architecture and window types. Casement windows, sliding glass doors, skylights, French doors, bay windows — we handle them all. Our water-fed pole system reaches up to four stories safely from the ground, eliminating the need for ladders against your walls. While we're there, many homeowners add [screen cleaning and repair](/screen-cleaning-repair) to keep their screens looking just as fresh as their glass.",
      "One of the biggest concerns homeowners have is trusting someone inside their home. Every Giraffe Cleaning technician is trained, background-checked, and carries $2 million in liability insurance. We wear shoe covers indoors, use drop cloths on sills, and treat your home with the same care we'd give our own. We communicate arrival times by text, work efficiently without cutting corners, and walk through the results with you before we leave.",
      "How often should you schedule residential window cleaning? For most Orange County homes, every 3–4 months maintains a consistently clean appearance. Coastal properties exposed to salt spray — think Newport Beach, Laguna Beach, or Dana Point — benefit from quarterly or even bi-monthly service. Inland homes with sprinkler exposure may need hard water stain treatment in addition to standard cleaning. We'll recommend a schedule based on your specific situation during your first visit.",
    ],
    whyChooseUs: [
      "Locally owned and operated — not a franchise",
      "Consistent crews who know your property",
      "Purified water system leaves zero residue",
      "$2M liability insurance and workers' comp",
      "Free re-clean if you're not 100% satisfied",
      "Same-week availability for most areas",
    ],
    cityLinks: ["irvine", "newport-beach", "laguna-niguel", "yorba-linda"],
    howItWorks: [
      { num: "01", title: "Request Your Free Quote", desc: "Tell us about your home — number of windows, stories, and any special needs. We'll send you a detailed estimate within hours, not days." },
      { num: "02", title: "We Clean Every Pane", desc: "Our crew arrives on time, cleans interior and exterior glass with purified water, wipes tracks and sills, and protects your floors and furniture throughout." },
      { num: "03", title: "Walk-Through & Guarantee", desc: "We do a final walk-through with you to make sure every window meets your expectations. If anything isn't perfect, we re-clean it on the spot — guaranteed." },
    ],
    pricingContent: [
      "Every home is different — pricing depends on your specific situation, property size, and service needs. We provide detailed, transparent quotes before any work begins — no surprises, no hidden fees.",
      "Fill out our free quoting form at [get a free quote](/get-a-quote) or call [(949) 315-7142](tel:+19493157142) for an accurate estimate. Recurring customers who schedule quarterly or bi-annual service receive discounted rates.",
    ],
    faqs: [
      {
        question: "How much does residential window cleaning cost in Orange County?",
        answer: "Every home is different — for an accurate price, fill out our [free quoting form](/get-a-quote) or call us at [(949) 315-7142](tel:+19493157142).",
      },
      {
        question: "How often should I have my windows professionally cleaned?",
        answer: "For most Orange County homes, every 3–4 months keeps windows looking their best. Coastal properties exposed to salt spray benefit from quarterly or bi-monthly service. Inland homes near sprinklers may need hard water stain treatment as well. We'll recommend a schedule based on your situation.",
      },
      {
        question: "Do I need to be home during the cleaning?",
        answer: "For exterior-only cleaning, you don't need to be home — just ensure gate access. For interior + exterior, we ask that someone be present to let us in. Many clients leave a key or garage code and we handle the rest. All our technicians are background-checked and insured.",
      },
    ],
  },
  {
    name: "Commercial Window Cleaning",
    slug: "commercial-window-cleaning",
    title: "Commercial Window Cleaning Orange County | Giraffe Cleaning",
    metaDescription: "Professional commercial window cleaning in Orange County. Storefronts, offices, restaurants. Insured, flexible scheduling. Call (949) 315-7142.",
    headline: "Commercial Window Cleaning in Orange County, CA",
    intro: "First impressions matter — and clean windows say everything about your business. Giraffe Cleaning serves storefronts, office buildings, restaurants, and multi-story commercial properties throughout Orange County. We offer flexible scheduling including early morning and weekend service, OSHA-compliant safety practices, and recurring maintenance plans that keep your glass looking pristine year-round.",
    benefits: [
      "Storefronts, offices & retail spaces",
      "Multi-story buildings up to 4 floors",
      "OSHA-compliant safety practices",
      "Recurring weekly, bi-weekly & monthly plans",
      "Early morning & weekend scheduling",
      "Fully licensed & insured — $2M liability coverage",
    ],
    related: ["residential-window-cleaning", "pressure-washing", "gutter-cleaning"],
    extendedContent: [
      "Your storefront is the first thing customers notice. Fingerprints on the door, water spots on display windows, and grime along the edges — these details register subconsciously and affect buying decisions. Our commercial window washing service keeps your storefront spotless for customers. That's exactly what Giraffe Cleaning delivers for retail locations, restaurants, and office buildings across Orange County. If you also need your home windows done, check out our [residential window cleaning](/residential-window-cleaning) service.",
      "We understand that commercial window cleaning needs to work around your business hours. That's why we offer early morning service starting at 6 AM, weekend appointments, and flexible recurring schedules. Most of our commercial clients choose weekly or bi-weekly plans to maintain a consistently professional appearance. We assign the same crew to your property every visit so they know the layout, the access points, and your specific preferences.",
      "For multi-story commercial buildings up to four floors, we use our professional water-fed pole system to clean safely from the ground. All work follows OSHA safety guidelines. We carry $2 million in general liability insurance and workers' compensation coverage — and we provide certificates of insurance to property management companies and building owners on request.",
      "We serve commercial properties in every major business district in Orange County: Irvine Spectrum, South Coast Plaza area in Costa Mesa, Pacific City in Huntington Beach, Fashion Island in Newport Beach, and downtown districts in Fullerton, Orange, and Anaheim. Many businesses also bundle window cleaning with [pressure washing](/pressure-washing) to keep sidewalks, entryways, and building exteriors clean alongside their glass.",
    ],
    whyChooseUs: [
      "Flexible scheduling — mornings, evenings, weekends",
      "Same crew assigned to your property every visit",
      "OSHA-compliant with full insurance documentation",
      "Volume plans for multi-location businesses",
      "No disruption to your customers or operations",
      "Priority response for urgent cleaning needs",
    ],
    cityLinks: ["irvine", "costa-mesa", "huntington-beach", "anaheim"],
    howItWorks: [
      { num: "01", title: "Free On-Site Assessment", desc: "We visit your property, count windows, assess access points, and discuss your scheduling preferences. You receive a detailed quote within 24 hours." },
      { num: "02", title: "Scheduled Service Begins", desc: "Your assigned crew arrives at the agreed time — early morning, evening, or weekend — and cleans every window without disrupting your business operations." },
      { num: "03", title: "Recurring Plan & Reporting", desc: "We set up your preferred recurring schedule and provide service reports after each visit. Adjustments are easy — just let us know." },
    ],
    pricingContent: [
      "Every home is different — pricing depends on your specific situation, property size, and service needs. We provide detailed, transparent quotes before any work begins — no surprises, no hidden fees.",
      "Fill out our free quoting form at [get a free quote](/get-a-quote) or call [(949) 315-7142](tel:+19493157142) for an accurate estimate. Recurring customers who schedule quarterly or bi-annual service receive discounted rates.",
    ],
    faqs: [
      {
        question: "Can you clean windows outside of business hours?",
        answer: "Yes. We offer early morning service starting at 6 AM and weekend appointments specifically for businesses that need cleaning completed before or after operating hours. We work around your schedule to avoid disrupting customers or staff.",
      },
      {
        question: "Do you offer recurring commercial cleaning contracts?",
        answer: "Absolutely. Most of our commercial clients are on weekly, bi-weekly, or monthly recurring plans. You get a consistent crew, priority scheduling, and discounted per-visit rates. We handle the scheduling automatically so you never have to think about it.",
      },
      {
        question: "Are you insured for commercial properties?",
        answer: "Yes. We carry $2 million in general liability insurance and full workers' compensation coverage. We provide certificates of insurance (COIs) to property managers and building owners on request — we handle these routinely and can have one to you within 24 hours.",
      },
    ],
  },
  {
    name: "Screen Cleaning & Repair",
    slug: "screen-cleaning-repair",
    title: "Screen Cleaning & Repair Orange County | Giraffe Cleaning",
    metaDescription: "Screen cleaning and repair in Orange County. Remove dust, pollen & grime. Extend screen life. Eco-friendly. Free quote: (949) 315-7142.",
    headline: "Screen Cleaning & Repair in Orange County, CA",
    intro: "Dirty screens block airflow, trap allergens, and make even clean windows look dull. Giraffe Cleaning provides thorough screen cleaning for homes and businesses across Orange County. We carefully remove each screen, hand-wash both sides with our gentle cleaning solution, and reinstall them — extending their lifespan and improving your indoor air quality.",
    benefits: [
      "Careful removal & reinstallation",
      "Hand-washed on both sides",
      "Removes dust, pollen & pet dander",
      "Screen condition inspection included",
      "Improves airflow & indoor air quality",
      "Available as add-on or standalone service",
    ],
    related: ["residential-window-cleaning", "hard-water-stain-removal", "gutter-cleaning"],
    extendedContent: [
      "Window screens are your home's first line of defense against insects, debris, and airborne particles — but they also collect an enormous amount of dust, pollen, pet dander, and grime. In Orange County, where homes are open to outdoor air much of the year, dirty screens can significantly impact your indoor air quality. Every time a breeze passes through, it pushes accumulated particles into your living space.",
      "Our screen cleaning process is thorough and careful. We remove each screen individually, inspect it for damage or wear, and hand-wash both sides using a gentle cleaning solution and soft-bristle brushes. Screens are rinsed with purified water, dried, and reinstalled in their original positions. We take care with clips, tracks, and hardware to avoid bending or damaging frames.",
      "Screen cleaning is the perfect add-on to your regular window washing appointment. Most of our residential clients add screen cleaning to their regular window service — it takes minimal extra time and makes a noticeable difference in both appearance and air quality. If we find a screen with tears, bent frames, or broken clips during cleaning, we'll let you know so you can arrange a replacement.",
      "For homes in areas with heavy pollen — like neighborhoods near parks, trails, or open space in Mission Viejo, Rancho Santa Margarita, and Lake Forest — we recommend screen cleaning at least twice a year. Coastal homes in Dana Point and Laguna Beach benefit from regular cleaning to remove salt residue that corrodes screen mesh over time.",
    ],
    whyChooseUs: [
      "Individual attention to every screen",
      "Damage inspection included at no extra cost",
      "Gentle process that extends screen lifespan",
      "Noticeable improvement in indoor air quality",
      "Fast add-on to any window cleaning visit",
      "Background-checked, insured technicians",
    ],
    cityLinks: ["mission-viejo", "rancho-santa-margarita", "dana-point", "laguna-beach"],
    howItWorks: [
      { num: "01", title: "Schedule Your Cleaning", desc: "Book screen cleaning as a standalone appointment or add it to your next window cleaning visit. We'll confirm timing and any special screen types at your property." },
      { num: "02", title: "Remove, Wash & Inspect", desc: "Each screen is carefully removed, hand-washed on both sides with gentle brushes, rinsed with purified water, and inspected for tears, bent frames, or worn clips." },
      { num: "03", title: "Reinstall & Report", desc: "Clean screens are dried and reinstalled in their original positions. We report any damage found so you can plan replacements before pest season arrives." },
    ],
    pricingContent: [
      "Every home is different — pricing depends on your specific situation, property size, and service needs. We provide detailed, transparent quotes before any work begins — no surprises, no hidden fees.",
      "Fill out our free quoting form at [get a free quote](/get-a-quote) or call [(949) 315-7142](tel:+19493157142) for an accurate estimate. Recurring customers who schedule quarterly or bi-annual service receive discounted rates.",
    ],
    faqs: [
      {
        question: "Can you repair torn or damaged screens?",
        answer: "We focus on cleaning and inspection. If we find damaged screens during service, we'll document the damage and provide a report. For replacements, we can recommend trusted local screen repair companies. Our inspection catches issues early, saving you money on full replacements later.",
      },
      {
        question: "How often should window screens be cleaned?",
        answer: "For most Orange County homes, twice a year keeps screens in good condition — once in spring and once in fall. Homes near parks, open space, or coastal areas may benefit from quarterly cleaning due to higher pollen, dust, or salt exposure.",
      },
      {
        question: "Do you clean sliding door screens and security screens?",
        answer: "Yes. We clean standard window screens, sliding door screens, and most security screen types. For specialty screens like solar screens or pet-resistant mesh, we assess each one individually to make sure our cleaning process won't cause any damage.",
      },
    ],
  },
  {
    name: "Hard Water Stain Removal",
    slug: "hard-water-stain-removal",
    title: "Hard Water Stain Removal Orange County | Giraffe Cleaning",
    metaDescription: "Hard water stain removal from windows in Orange County. Specialized treatment restores clarity. Free estimates — call (949) 315-7142.",
    headline: "Hard Water Stain Removal for Windows in Orange County, CA",
    intro: "Hard water stains from sprinklers, irrigation systems, and mineral-rich water can permanently etch glass if left untreated. Giraffe Cleaning uses professional-grade polishing compounds and techniques to dissolve calcium, magnesium, and silica deposits — restoring your windows to crystal-clear condition without costly glass replacement. We treat every pane individually for thorough, lasting results.",
    benefits: [
      "Calcium & magnesium deposit removal",
      "Professional-grade polishing compounds",
      "Restores glass without replacement",
      "Prevents permanent etching",
      "Sprinkler & irrigation stain specialists",
      "Glass sealing & protective coating available",
      "Before & after documentation provided",
      "Results DIY methods can't achieve",
    ],
    related: ["residential-window-cleaning", "solar-panel-cleaning", "screen-cleaning-repair"],
    extendedContent: [
      "**What causes hard water stains on windows?** Hard water stains are one of the most common — and most frustrating — window problems across Orange County. They form when mineral-rich water from sprinkler systems, irrigation overspray, garden hoses, and even hard municipal water supply splashes onto glass surfaces. Orange County's water supply ranks among the hardest in California, with high concentrations of dissolved calcium, magnesium, and silica. When the water evaporates, these minerals remain behind and bond to the glass surface. Over weeks and months, thin mineral layers build into a thick, white, hazy film that obscures your view and diminishes your home's curb appeal.",
      "Sprinkler systems are the number-one culprit. Homes in master-planned communities like those in [Irvine](/window-cleaning-irvine), Tustin, Orange, and Yorba Linda frequently have landscaping irrigation positioned near windows. Every watering cycle sends a fine mist of mineral-laden water onto your glass. Hillside properties in Laguna Niguel and Aliso Viejo with terraced irrigation systems face even greater exposure, as gravity carries runoff across large window walls and sliding doors.",
      "**Why regular cleaning won't remove hard water stains.** Standard window washing won't remove hard water stains — you need our specialized treatment. If you've tried scrubbing hard water spots with regular glass cleaner, vinegar, or even a razor blade, you've likely been disappointed. That's because mineral deposits chemically bond to the glass surface at a molecular level. Standard cleaning solutions and techniques can remove surface dirt and grime, but they simply slide over the mineral layer without breaking the bond. Store-bought hard water removers may lighten the staining slightly, but they lack the strength to fully dissolve heavy buildup. Attempting to scrape deposits with abrasive tools risks scratching the glass permanently — turning a fixable problem into an expensive one. Professional-grade treatment is the only reliable way to fully restore mineral-damaged glass.",
      "**Our hard water stain removal process** is methodical and thorough. We start with a detailed inspection of every window, grading stain severity from light surface deposits to heavy etching. This determines the compound strength and technique required for each pane. Next, we apply a specialized polishing compound formulated to dissolve calcium and silica bonds without damaging the glass surface. Using professional buffing tools, we work the compound into the affected areas, breaking down mineral layers until the glass is fully restored to its original clarity.",
      "After polishing, we clean and rinse each pane with purified water to remove all compound residue. For clients who want maximum protection, we offer a glass sealing treatment — a hydrophobic coating that repels water and prevents minerals from bonding to the surface in the future. Sealed glass stays cleaner longer and makes future maintenance significantly easier.",
      "We finish every job with prevention tips tailored to your property: sprinkler angle adjustments, protective barriers, and a recommended maintenance schedule. Most clients pair hard water treatment with a recurring [residential window cleaning](/residential-window-cleaning) plan to keep stains from building back up.",
      "**The before & after difference is dramatic.** Clients are consistently stunned by the transformation. Windows that looked permanently fogged or frosted return to full clarity — as if the glass was just installed. Natural light floods back into rooms, views are restored, and the entire home feels brighter and more inviting. We document the transformation with before-and-after photos so you can see the full extent of the improvement. Many homeowners tell us they were days away from ordering replacement windows before discovering that professional stain removal could save them thousands of dollars.",
      "We see this most frequently with homeowners who've lived with hard water stains for years, assuming the damage was permanent. In the vast majority of cases, even heavy staining can be fully reversed with the right compounds and technique. Only glass that has been etched for years without treatment may have some permanent texture — and even then, we can dramatically improve clarity. We always provide an honest assessment before starting work.",
    ],
    whyChooseUs: [
      "Specialists in mineral deposit removal",
      "Save thousands vs. glass replacement",
      "Professional compounds — not store-bought products",
      "Glass sealing available for long-term protection",
      "Prevention recommendations included",
      "Individual pane treatment for thorough results",
      "Before-and-after documentation provided",
      "Honest assessment — we tell you what's achievable",
    ],
    cityLinks: ["irvine", "tustin", "orange", "yorba-linda", "laguna-niguel", "aliso-viejo", "mission-viejo", "newport-beach"],
    howItWorks: [
      { num: "01", title: "Inspection & Assessment", desc: "We inspect every window, grading stain severity from light surface deposits to heavy etching. You receive an honest assessment and transparent quote before we begin." },
      { num: "02", title: "Compound Treatment & Polishing", desc: "Using commercial-grade polishing compounds, we treat each affected pane individually — dissolving calcium and silica deposits layer by layer until the glass is fully restored to clarity." },
      { num: "03", title: "Sealing & Prevention", desc: "We offer optional hydrophobic glass sealing to repel future mineral buildup, plus personalized prevention tips including sprinkler adjustments and a maintenance cleaning schedule." },
    ],
    pricingContent: [
      "Every home is different — pricing depends on your specific situation, property size, and service needs. We provide detailed, transparent quotes before any work begins — no surprises, no hidden fees.",
      "Fill out our free quoting form at [get a free quote](/get-a-quote) or call [(949) 315-7142](tel:+19493157142) for an accurate estimate. Recurring customers who schedule quarterly or bi-annual service receive discounted rates.",
    ],
    faqs: [
      {
        question: "Can hard water stains permanently damage windows?",
        answer: "Yes — if left untreated for extended periods, mineral deposits can etch into the glass surface itself, causing permanent texture changes. However, the vast majority of hard water stains we encounter in Orange County are surface-level deposits that can be fully removed with professional polishing compounds. The key is treating them before they progress to etching. During our free assessment, we test a small area to determine whether your staining is fully removable or has begun etching, and we always give you an honest answer.",
      },
      {
        question: "How much does hard water stain removal cost?",
        answer: "Every home is different — for an accurate price, fill out our [free quoting form](/get-a-quote) or call us at [(949) 315-7142](tel:+19493157142).",
      },
      {
        question: "How can I prevent hard water stains from coming back?",
        answer: "The most effective prevention is adjusting sprinkler heads so they don't hit your windows, and scheduling regular professional window cleaning to remove mineral deposits before they bond to the glass. We also offer hydrophobic glass sealing — a protective coating that repels water and prevents minerals from adhering. Clients who combine prevention measures with a recurring cleaning plan typically go 12–18 months before needing retreatment.",
      },
    ],
  },
  {
    name: "Solar Panel Cleaning",
    slug: "solar-panel-cleaning",
    title: "Solar Panel Cleaning Orange County | Giraffe Cleaning",
    metaDescription: "Professional solar panel cleaning in Orange County. Boost efficiency, protect your investment. Free estimates — call (949) 315-7142.",
    headline: "Solar Panel Cleaning in Orange County, CA",
    intro: "Dirty solar panels lose 20–30% of their energy production — costing you hundreds of dollars a year in lost savings. Giraffe Cleaning restores your panels to peak efficiency using purified deionized water and soft-bristle tools. No soaps, no harsh chemicals, no pressure that could damage your panels. We inspect every panel during cleaning and serve residential and commercial systems across all of Orange County.",
    benefits: [
      "Purified deionized water only — no soaps or chemicals",
      "Soft-bristle tools — zero pressure damage risk",
      "Restore 20–30% lost energy efficiency",
      "Bird dropping, pollen & debris removal",
      "Full panel inspection during every visit",
      "Manufacturer-safe — warranty compliant",
      "Residential & commercial systems",
      "Protect your solar investment long-term",
    ],
    related: ["residential-window-cleaning", "pressure-washing", "hard-water-stain-removal"],
    extendedContent: [
      "**Why solar panel cleaning matters.** Solar panels are one of the biggest investments Orange County homeowners make — systems are a significant investment. But most homeowners don't realize how quickly dirt, dust, bird droppings, pollen, and tree sap accumulate on panel surfaces, blocking sunlight and silently draining your system's output. Studies from the National Renewable Energy Laboratory show that soiled panels lose 20–30% of their efficiency depending on buildup severity. That translates directly to higher electricity bills and a longer payback period on your system.",
      "Bird droppings are especially damaging. A single dropping can create a \"hotspot\" that blocks an entire cell, reducing output for the whole panel string. Pollen coats panels in a fine yellow film every spring, and coastal salt spray — common in Newport Beach, Huntington Beach, and Dana Point — leaves a corrosive residue that degrades panel coatings over time. Keeping your panels clean isn't just about efficiency — it's about protecting your investment and maintaining your manufacturer's warranty. Most solar warranties require reasonable maintenance, and letting panels go years without cleaning could be grounds for a denied warranty claim.",
      "**Our solar panel cleaning process** is designed to be completely safe for your panels and your roof. We use only purified deionized water — water that has been stripped of all minerals and impurities. This is the gold standard recommended by every major panel manufacturer including SunPower, Tesla, LG, and Enphase. Deionized water evaporates completely without leaving mineral spots or residue, ensuring maximum sunlight absorption after cleaning.",
      "We never use soaps, detergents, or chemical cleaners — these can leave films that actually attract more dirt and may void your warranty. We never use pressure washers or high-pressure nozzles. Even moderate water pressure can crack panel glass, damage anti-reflective coatings, or compromise waterproof seals around the frame. Our soft-bristle brushes and low-flow rinse technique gently lift debris without any risk of damage.",
      "During every cleaning, our technicians perform a visual inspection of each panel. We check for cracked glass, loose mounting brackets, damaged wiring, pest nesting underneath panels, and any signs of water intrusion. If we spot an issue, we document it with photos and alert you immediately — catching small problems before they become expensive repairs.",
      "**How often should you clean solar panels in Orange County?** We recommend a minimum of twice per year for most OC installations. The ideal schedule is once in late spring (after pollen season peaks) and once in late fall (after Santa Ana winds deposit dust and debris). However, your specific situation may warrant more frequent cleaning. Homes near the coast deal with salt spray buildup that accelerates between cleanings. Properties backing up to open space, trails, or trees — common in Irvine, Lake Forest, Mission Viejo, and Rancho Santa Margarita — accumulate bird droppings and organic debris faster. Homes near construction zones face extra dust. We'll recommend a schedule based on your property's actual conditions.",
      "Bundle solar panel cleaning with window washing and save. Combining solar panel cleaning with [residential window cleaning](/residential-window-cleaning) saves you time, money, and the hassle of scheduling multiple appointments. Many of our clients also bundle with [pressure washing](/pressure-washing) for a comprehensive exterior maintenance package. Ask about our combo service discounts when you call.",
      "The math makes cleaning an easy decision. Dirty panels silently drain your system's output — a single professional cleaning pays for itself quickly by restoring lost efficiency. Clients who maintain a regular cleaning schedule maximize their return on investment and extend the productive lifespan of their panels.",
    ],
    whyChooseUs: [
      "Manufacturer-safe cleaning — full warranty compliance",
      "Measurable efficiency boost after every cleaning",
      "No soaps, chemicals, or pressure — ever",
      "Full panel inspection included at no extra cost",
      "Combo discounts with window cleaning & pressure washing",
      "Residential and commercial systems of any size",
      "Experienced with tile, flat, and metal roofs",
      "Same-day and weekend appointments available",
    ],
    cityLinks: ["irvine", "newport-beach", "huntington-beach", "lake-forest", "mission-viejo", "laguna-niguel", "dana-point", "rancho-santa-margarita", "tustin", "orange"],
    howItWorks: [
      { num: "01", title: "Book & Assess", desc: "Tell us about your solar system — number of panels, roof type, and any access considerations. We provide a transparent quote and schedule at your convenience, including weekends." },
      { num: "02", title: "Soft Wash & Inspect", desc: "Our technicians clean each panel with purified deionized water and soft-bristle brushes — no chemicals, no pressure. We inspect every panel for cracks, loose brackets, pest damage, and wiring issues." },
      { num: "03", title: "Report & Maintain", desc: "We share any inspection findings with photos. You'll notice the efficiency improvement on your next energy bill. We set up a recurring schedule so your panels stay at peak performance year-round." },
    ],
    pricingContent: [
      "Every home is different — pricing depends on your specific situation, property size, and service needs. We provide detailed, transparent quotes before any work begins — no surprises, no hidden fees.",
      "Fill out our free quoting form at [get a free quote](/get-a-quote) or call [(949) 315-7142](tel:+19493157142) for an accurate estimate. Recurring customers who schedule quarterly or bi-annual service receive discounted rates.",
    ],
    faqs: [
      {
        question: "Will cleaning my solar panels increase their output?",
        answer: "Yes — measurably. Most clients see a 15–30% improvement in energy output after a professional cleaning, depending on how much buildup has accumulated. Bird droppings, pollen, dust, and salt spray all block sunlight from reaching your cells. After cleaning, many homeowners notice the difference on their energy monitoring app within days. Regular cleaning ensures you're getting the full return on your solar investment.",
      },
      {
        question: "Can dirty solar panels void my warranty?",
        answer: "Potentially, yes. Most solar panel manufacturers require \"reasonable maintenance\" as a condition of their warranty. If panels fail due to issues that could have been prevented by regular cleaning — such as hotspot damage from bird droppings or corrosion from salt buildup — the manufacturer may deny your warranty claim. Regular professional cleaning with manufacturer-approved methods (like our deionized water process) keeps you compliant and protected.",
      },
      {
        question: "Do you clean solar panels on tile and flat roofs?",
        answer: "Absolutely. We clean solar panels on all roof types — tile, composition shingle, flat/TPO, metal, and standing seam. Our technicians are trained in safe roof access for each type. Tile roofs require extra care to avoid cracking tiles, and flat roofs need proper drainage consideration. We bring the right equipment for your specific roof and never compromise on safety — for your roof or our team.",
      },
    ],
  },
  {
    name: "Gutter Cleaning",
    slug: "gutter-cleaning",
    title: "Gutter Cleaning Orange County | Giraffe Cleaning",
    metaDescription: "Professional gutter cleaning in Orange County, CA. Prevent water damage, remove debris. Free estimates — call (949) 315-7142.",
    headline: "Gutter Cleaning in Orange County, CA",
    intro: "Clogged gutters are one of the most common — and most preventable — causes of serious home damage. Overflowing gutters lead to water intrusion, foundation cracks, pest infestations, mold growth, and landscape erosion. Giraffe Cleaning provides thorough gutter cleaning across Orange County — removing all debris by hand, flushing every downspout, inspecting your system for damage, and handling minor repairs on the spot.",
    benefits: [
      "Complete debris removal by hand",
      "Full downspout flushing & flow verification",
      "Gutter system inspection included",
      "Minor repairs — brackets, seams, slope adjustment",
      "Prevent water damage & foundation issues",
      "Reduce pest & mosquito habitats",
      "Before & after photos provided",
      "Bundle with window cleaning for savings",
    ],
    related: ["pressure-washing", "residential-window-cleaning", "screen-cleaning-repair"],
    extendedContent: [
      "**Why gutter cleaning is essential.** Your gutter system has one job: channel rainwater safely away from your home's roof, walls, and foundation. When gutters clog with leaves, twigs, dirt, and debris, water has nowhere to go. It spills over the edges, cascading down your siding, pooling at your foundation, and seeping into places it was never meant to reach. The consequences are serious and expensive.",
      "Water damage is the most immediate risk. Overflowing gutters saturate fascia boards, causing rot that spreads to your roof structure. Water running down exterior walls stains stucco, damages paint, and can penetrate wall cavities — leading to hidden mold growth inside your walls. At ground level, water pooling against your foundation creates hydrostatic pressure that causes cracks, settling, and in severe cases, structural failure. Foundation repairs are extremely expensive — far more than a lifetime of regular gutter cleanings.",
      "Clogged gutters also create ideal habitats for pests. Standing water attracts mosquitoes, which breed in as little as a tablespoon of stagnant water. Accumulated leaf debris provides nesting material for rats, mice, birds, and wasps. Ants and termites are drawn to the moisture-damaged wood around neglected gutters. Keeping gutters clean eliminates these pest-friendly conditions before infestations start.",
      "Mold thrives in the damp environment created by clogged gutters. Moisture-damaged fascia, soffits, and wall cavities become breeding grounds for black mold and mildew — a health hazard that's expensive to remediate. And below your gutters, landscape erosion washes away mulch, exposes plant roots, and creates unsightly channels in your yard. All of this is preventable with regular cleaning.",
      "**Our gutter cleaning process** is thorough and methodical. We start by removing all debris from your gutter channels by hand — leaves, twigs, shingle grit, dirt buildup, and anything else that's accumulated. We don't use leaf blowers that scatter debris across your roof and yard. Everything we remove gets bagged and taken with us.",
      "Next, we flush every downspout with water to verify proper flow. Clogged downspouts are the most common cause of gutter overflow — even clean channels can't drain if the downspout is blocked. We flush until water runs freely from the ground-level outlet, confirming the entire drainage path is clear. If we encounter a stubborn clog, we use a plumber's snake to break it loose.",
      "During every visit, we perform a visual inspection of your entire gutter system. We check for loose or missing brackets, sagging sections, separated seams, rust spots, and improper slope that prevents water from flowing toward downspouts. Minor repairs — like reattaching brackets, sealing small leaks, or adjusting slope — are handled on the spot at no extra charge. For larger issues, we document the problem with photos and recommend next steps.",
      "**When to schedule gutter cleaning in Orange County.** Timing matters. The most critical cleaning is in late October or November — before Orange County's rainy season arrives. Heavy winter storms overwhelm clogged gutters, and by the time you notice overflow during a downpour, damage may already be occurring. After the Santa Ana winds in fall, gutters fill rapidly with blown leaves, dust, and debris from surrounding hills and canyons.",
      "A second cleaning in late spring is ideal for homes with significant tree coverage. Spring pollen, seed pods, and blossoms accumulate quickly — especially in tree-lined communities like Rancho Santa Margarita, Mission Viejo, Yorba Linda, and Coto de Caza. Properties without heavy tree exposure can typically manage with a single annual cleaning before winter.",
      "Most customers pair gutter cleaning with window washing for a complete exterior refresh. We recommend pairing gutter cleaning with [pressure washing](/pressure-washing) for a complete exterior maintenance visit. Many clients also schedule [residential window cleaning](/residential-window-cleaning) at the same time — one crew, one visit, everything handled. Ask about our bundled pricing when you call.",
    ],
    whyChooseUs: [
      "Complete service — hand removal + downspout flush",
      "Gutter system inspection at no extra charge",
      "Minor repairs included — brackets, seams, slope",
      "Before-and-after photo documentation",
      "Prevent costly water damage to your home",
      "Two and three-story homes — no problem",
      "Bundle with window cleaning & pressure washing",
      "Licensed, insured, and safety-compliant",
    ],
    cityLinks: ["rancho-santa-margarita", "yorba-linda", "mission-viejo", "irvine", "lake-forest", "tustin", "orange", "anaheim", "fullerton"],
    howItWorks: [
      { num: "01", title: "Request a Free Estimate", desc: "Tell us about your home — single or multi-story, approximate gutter length, and tree coverage. We provide a transparent quote and schedule at your convenience." },
      { num: "02", title: "Debris Removal & Downspout Flush", desc: "Our crew removes all debris by hand, then flushes every downspout until flow is confirmed. We clean up completely — nothing gets left behind on your property." },
      { num: "03", title: "Inspection, Repairs & Report", desc: "We inspect brackets, seams, and slopes for damage. Minor repairs are handled on the spot. You receive before-and-after photos and a written report noting any issues." },
    ],
    pricingContent: [
      "Every home is different — pricing depends on your specific situation, property size, and service needs. We provide detailed, transparent quotes before any work begins — no surprises, no hidden fees.",
      "Fill out our free quoting form at [get a free quote](/get-a-quote) or call [(949) 315-7142](tel:+19493157142) for an accurate estimate. Recurring customers who schedule quarterly or bi-annual service receive discounted rates.",
    ],
    faqs: [
      {
        question: "How often should gutters be cleaned in Orange County?",
        answer: "For homes near trees — especially in communities like Rancho Santa Margarita, Mission Viejo, and Yorba Linda — we recommend twice a year: once in late fall before the rainy season and once in late spring after pollen and seed pod season. Homes without significant tree coverage can typically schedule once annually in October or November. We'll assess your property and recommend the right frequency during our first visit.",
      },
      {
        question: "Can clogged gutters cause damage to my home?",
        answer: "Yes — and the damage can be severe. Overflowing gutters cause water to cascade down your siding (causing stains and paint damage), pool at your foundation (causing cracks and settling), rot fascia boards, create mold growth in wall cavities, and erode landscaping. Clogged gutters also attract pests — standing water breeds mosquitoes, and debris provides nesting material for rodents, birds, and wasps. Regular cleaning prevents all of these issues.",
      },
      {
        question: "Do you clean gutters on two and three-story homes?",
        answer: "Absolutely. We're equipped to safely clean gutters on homes of any height, including two and three-story properties. We use professional ladder systems, harnesses, and safety equipment that meet OSHA standards. Many homes in Orange County — especially in hillside communities — have multi-story sections that are difficult or dangerous for homeowners to reach. That's exactly what we're here for. Same thorough service, regardless of height.",
      },
    ],
  },
  {
    name: "Pressure Washing",
    slug: "pressure-washing",
    title: "Pressure Washing Orange County | Giraffe Cleaning",
    metaDescription: "Professional pressure washing in Orange County. Driveways, patios, exteriors. Free estimates — call (949) 315-7142.",
    headline: "Pressure Washing in Orange County, CA",
    intro: "Restore your property's curb appeal in a single visit. Giraffe Cleaning offers professional pressure washing and soft washing for driveways, patios, sidewalks, pool decks, building exteriors, fences, and garage floors across Orange County. We match technique to surface — high-pressure for tough concrete stains, gentle soft wash for delicate stucco and painted wood. Mold, mildew, oil stains, algae, and years of grime — gone.",
    benefits: [
      "Driveways, patios & sidewalks",
      "Pool decks & garage floors",
      "Building exteriors & siding",
      "Fences — wood, vinyl & composite",
      "Surface-specific pressure adjustment",
      "Soft wash option for delicate surfaces",
      "Mold, mildew, algae & oil stain removal",
      "Instant curb appeal improvement",
    ],
    related: ["gutter-cleaning", "commercial-window-cleaning", "residential-window-cleaning"],
    extendedContent: [
      "**Pressure washing services.** Every exterior surface on your property accumulates dirt, grime, and biological growth over time — and Orange County's mild, humid climate accelerates the process. Driveways develop dark tire marks, oil drips, and embedded dirt that dulls their appearance. Patios and pool decks grow slippery with algae and mold, creating genuine slip-and-fall hazards. Sidewalks and walkways collect ground-in soil and staining. Fences fade and turn gray. Garage floors absorb oil and chemical spills. Building exteriors accumulate atmospheric pollution, cobwebs, and organic growth that makes your property look neglected.",
      "Giraffe Cleaning handles all of it. Our pressure washing service covers driveways, patios, sidewalks, pool decks, building exteriors, fences, garage floors, retaining walls, and any other hard surface on your property. We bring commercial-grade equipment that delivers consistent, thorough results — far beyond what a rental pressure washer can achieve. Most residential jobs are completed in a single visit, and the transformation is immediate.",
      "**Why pressure washing your property matters.** First impressions count. Whether you're welcoming guests, meeting a potential buyer, or simply pulling into your own driveway, a clean exterior communicates pride of ownership. Real estate agents consistently rank pressure washing as one of the highest-ROI improvements a seller can make before listing — an affordable investment that can influence buyer perception by thousands.",
      "Beyond aesthetics, pressure washing prevents real problems. Algae and mold on walkways and pool decks create dangerous slip hazards — especially when wet. Regular cleaning eliminates these risks before someone gets hurt. Mold and mildew on siding and fences aren't just ugly — they actively break down surfaces over time, shortening the lifespan of paint, wood, and composite materials. Removing biological growth extends the life of your exterior finishes and delays costly repainting or replacement.",
      "HOA compliance is another major driver for Orange County homeowners. Communities in Aliso Viejo, Ladera Ranch, Lake Forest, and Rancho Santa Margarita enforce exterior maintenance standards. Stained driveways, moldy fences, and dirty siding can trigger violation notices and fines. Scheduling pressure washing before annual HOA inspections keeps you compliant and stress-free.",
      "**Soft wash vs pressure wash.** Not every surface can handle high-pressure treatment. Stucco — one of the most common exterior finishes in Orange County — can be gouged or pitted by excessive pressure. Painted wood fences and trim can have paint blasted off. Composite decking can be scarred. That's why we offer soft washing as an alternative for delicate surfaces.",
      "Soft washing uses low-pressure water combined with specialized biodegradable cleaning solutions that break down mold, mildew, algae, and dirt at a chemical level rather than relying on force. The solution does the work, and the low-pressure rinse removes everything without risking surface damage. We use soft wash on stucco exteriors, painted surfaces, wood fences, composite decking, and roof tiles. For concrete driveways, pavers, and stone surfaces that can handle it, we use full-pressure treatment for maximum stain removal.",
      "Our technicians assess every surface before starting and select the right method automatically — you don't need to know the difference. We guarantee no damage to any surface we clean. If you're unsure what your property needs, we'll evaluate during our free estimate and recommend the right approach.",
      "Combine pressure washing with window washing for maximum curb appeal. Many of our clients bundle with [gutter cleaning](/gutter-cleaning) and [commercial window cleaning](/commercial-window-cleaning) for a complete exterior maintenance package. One crew, one visit, everything handled. Ask about our bundled pricing when you call for your free estimate.",
    ],
    whyChooseUs: [
      "Surface-specific technique — no damage guaranteed",
      "Soft wash available for stucco, wood & painted surfaces",
      "Driveways, patios, siding, fences, pool decks & more",
      "Mold, mildew, oil, algae removal specialists",
      "HOA-ready results for inspection season",
      "Ideal before selling, painting, or refinishing",
      "Combo discounts with window & gutter cleaning",
      "Fast results — most jobs completed in one visit",
    ],
    cityLinks: ["huntington-beach", "newport-beach", "aliso-viejo", "ladera-ranch", "lake-forest", "costa-mesa", "irvine", "rancho-santa-margarita"],
    howItWorks: [
      { num: "01", title: "Tell Us What Needs Cleaning", desc: "Describe the surfaces you need cleaned — driveway, patio, siding, fences, pool deck, garage floor — and we'll provide a free quote based on square footage and surface type." },
      { num: "02", title: "Surface-Matched Cleaning", desc: "Our crew arrives with professional equipment and selects the right method for each surface. Concrete gets high-pressure treatment; stucco, wood, and painted surfaces get a gentle soft wash. No damage, guaranteed." },
      { num: "03", title: "Instant Transformation", desc: "You'll see dramatic results immediately. We clean up all wastewater runoff and leave your property looking like new. Before-and-after photos are provided on request." },
    ],
    pricingContent: [
      "Every home is different — pricing depends on your specific situation, property size, and service needs. We provide detailed, transparent quotes before any work begins — no surprises, no hidden fees.",
      "Fill out our free quoting form at [get a free quote](/get-a-quote) or call [(949) 315-7142](tel:+19493157142) for an accurate estimate. Recurring customers who schedule quarterly or bi-annual service receive discounted rates.",
    ],
    faqs: [
      {
        question: "Will pressure washing damage my driveway or patio?",
        answer: "Not when done by professionals. We adjust PSI levels, nozzle types, and distance for each surface. Concrete and stone pavers can handle high-pressure treatment safely. For more delicate surfaces like stucco, painted wood, or composite decking, we switch to our soft wash method — low pressure with specialized cleaning solutions that do the work without force. We guarantee no damage to any surface we clean.",
      },
      {
        question: "How often should I pressure wash my home's exterior?",
        answer: "For most Orange County homes, once a year maintains a clean appearance and prevents buildup of mold, algae, and staining. High-traffic areas like pool decks, patios, and walkways benefit from semi-annual cleaning. HOA communities should schedule before annual inspections. Homes near the coast may need more frequent washing due to salt spray and moisture. We'll recommend a schedule based on your property's specific conditions.",
      },
      {
        question: "Do you offer pressure washing for commercial properties?",
        answer: "Yes — we serve commercial properties of all sizes throughout Orange County. We clean parking structures, loading docks, building exteriors, walkways, entryways, and outdoor dining areas. We offer flexible scheduling including early mornings, evenings, and weekends to avoid disrupting your business operations. Recurring maintenance contracts are available with volume pricing.",
      },
    ],
  },
  {
    name: "Screen Cleaning & Repair",
    slug: "screen-cleaning-repair",
    title: "Screen Cleaning & Repair Orange County | Giraffe Cleaning",
    metaDescription: "Window screen cleaning and repair in Orange County, CA. We remove, clean, and reinstall your screens. Free estimates — call (949) 315-7142.",
    headline: "Window Screen Cleaning & Repair in Orange County, CA",
    intro: "Dirty, torn, or damaged window screens don't just look bad — they block airflow, trap allergens, and make even freshly cleaned windows appear grimy. Giraffe Cleaning offers professional screen cleaning and repair services throughout Orange County. We carefully remove each screen, hand wash it, inspect for damage, and reinstall it — leaving your home looking polished and breathing easy.",
    benefits: [
      "Complete screen removal & reinstallation",
      "Hand washing with gentle, effective cleaning solution",
      "Damage inspection on every screen",
      "Small hole & tear patching",
      "Full re-screening for worn mesh",
      "Frame straightening & repair",
      "Paired perfectly with window cleaning service",
      "Free estimates — no obligation",
    ],
    related: ["residential-window-cleaning", "hard-water-stain-removal", "gutter-cleaning"],
    extendedContent: [
      "Most homeowners forget about their window screens until they notice reduced airflow, increased dust inside, or a hazy look to their windows even after cleaning. Window screens are your home's first line of defense against insects, debris, and UV exposure — but they collect dirt, pollen, pet dander, and environmental grime with every passing season. In Orange County, coastal salt spray, Santa Ana wind dust, and year-round pollen make screen maintenance especially important.",
      "Why clean your window screens? Dirty screens act like filters that trap allergens and particulates right at your windows. When you open a window for fresh air, that breeze passes through layers of accumulated dust and pollen before entering your home. For allergy sufferers, this can make symptoms noticeably worse. Clean screens mean cleaner air circulation throughout your living spaces. They also allow significantly more natural light to pass through — you'd be surprised how much brightness dirty mesh blocks.",
      "Beyond air quality, grimy screens make freshly cleaned windows look dirty from the outside. If you've ever had your windows professionally cleaned and noticed they still don't sparkle from the curb, your screens are likely the culprit. Removing and cleaning screens as part of your regular [window cleaning](/residential-window-cleaning) routine ensures your home looks its absolute best from every angle.",
      "Our screen cleaning process is thorough and careful. We start by removing each screen individually, labeling its location so it goes back exactly where it came from. Each screen is then hand washed using a gentle cleaning solution and soft brush that removes embedded dirt without stretching or damaging the mesh. We rinse thoroughly with clean water and inspect every screen for tears, holes, loose spline, or bent frames before reinstalling.",
      "During inspection, we identify screens that need repair. Small holes and tears can often be patched on-site using screen repair patches that blend with your existing mesh — a quick, affordable fix that extends the life of your screens by years. For screens with larger damage or deteriorated mesh, we offer full re-screening: we remove the old mesh, install fresh screening material, and re-spline it into your existing frame. This is far more cost-effective than buying entirely new screens.",
      "Frame repair is another common need we handle. Aluminum screen frames can bend from wind, accidental bumps, or improper storage. We straighten bent frames, repair broken corners with reinforced corner keys, and ensure each frame sits flush in its window track. For severely damaged frames that are beyond repair, we provide referrals to trusted local fabricators who can build custom replacement frames to your exact specifications.",
      "We recommend cleaning your screens at least twice a year — ideally in spring after pollen season peaks and in fall after the Santa Ana winds subside. Homes near the coast or in high-pollen areas like Irvine, Mission Viejo, and Laguna Niguel may benefit from quarterly cleaning. Our recurring service plans include screen cleaning as part of your regular window maintenance, so you never have to think about scheduling it separately.",
      "Screen cleaning pairs perfectly with our [hard water stain removal](/hard-water-stain-removal) service. If your windows have mineral deposits from sprinkler overspray, we can address both the glass and the screens in a single visit — saving you time and ensuring a uniformly clean result. Many of our Orange County clients bundle these services for the best value.",
    ],
    whyChooseUs: [
      "Careful hand-washing — no pressure washers that damage mesh",
      "Every screen inspected for damage during cleaning",
      "On-site patching for small tears and holes",
      "Full re-screening available for worn-out mesh",
      "Frame repair and straightening included",
      "Labeled removal ensures perfect reinstallation",
      "Bundled pricing with window cleaning services",
      "Serving all of Orange County — coastal and inland",
    ],
    cityLinks: [
      "irvine", "newport-beach", "huntington-beach", "costa-mesa",
      "laguna-beach", "laguna-niguel", "mission-viejo", "lake-forest",
      "tustin", "orange", "anaheim", "fullerton",
    ],
    howItWorks: [
      { num: "01", title: "Remove & Label", desc: "We carefully remove each screen from its window and label its position so every screen goes back exactly where it belongs." },
      { num: "02", title: "Hand Wash & Inspect", desc: "Each screen is hand washed with a gentle cleaning solution and soft brush, then thoroughly rinsed. We inspect every screen for tears, holes, and frame damage." },
      { num: "03", title: "Repair & Reinstall", desc: "We patch small holes on-site, re-screen damaged mesh, straighten bent frames, and reinstall every screen flush and secure in its track." },
    ],
    pricingContent: [
      "Every home is different — pricing depends on your specific situation, property size, and service needs. We provide detailed, transparent quotes before any work begins — no surprises, no hidden fees.",
      "Fill out our free quoting form at [get a free quote](/get-a-quote) or call [(949) 315-7142](tel:+19493157142) for an accurate estimate. Recurring customers who schedule quarterly or bi-annual service receive discounted rates.",
    ],
    faqs: [
      {
        question: "Do you remove and clean screens during a regular window cleaning?",
        answer: "Yes — screen removal and basic cleaning is included with our standard interior/exterior window cleaning service. We remove each screen, wipe or rinse it, and reinstall it after your windows are cleaned. For heavily soiled screens that need deep hand washing, we offer a dedicated screen cleaning add-on at a small additional cost.",
      },
      {
        question: "Can you repair torn or damaged screens?",
        answer: "Absolutely. We handle small hole patching, full re-screening with new mesh, spline replacement, and aluminum frame repair on-site. For severely damaged or custom-sized frames that need fabrication, we provide referrals to trusted local screen shops. We'll always give you an honest assessment and quote before starting any repair.",
      },
      {
        question: "How often should window screens be cleaned?",
        answer: "We recommend at least twice a year — once in spring after heavy pollen and once in fall after Santa Ana wind season. Homes near the coast or in areas with heavy landscaping may benefit from quarterly cleaning. Regular screen cleaning extends screen life, improves airflow, reduces allergens indoors, and keeps your windows looking their best between professional cleanings.",
      },
    ],
  },
];

export const serviceMap = new Map<string, ServiceData>();
services.forEach(s => serviceMap.set(s.slug, s));

export default services;
