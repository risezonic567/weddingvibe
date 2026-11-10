# weddingsvibe: build the ENTIRE website in ONE run

You are a senior full-stack engineer. A Next.js project (App Router, JavaScript, Tailwind, `src/`, alias `@/*`) already exists in this folder. Build the complete weddingsvibe website (wedding venues + wedding services booking site) in a single uninterrupted run.

## 0. What went wrong in the previous attempt (fix first)
- The default Next.js starter page is still on the homepage ("To get started, edit page.tsx"). Remove it completely.
- The page background is black because of the default dark-mode CSS. Delete the `prefers-color-scheme: dark` block from `globals.css`. The site is ALWAYS white. No dark mode.
- Navbar was misaligned ("Venues" sat higher than the other links) and the mega menu was missing.
- Footer social buttons were text circles ("ig", "in", "yt", "p"). They must be square-rounded buttons with real inline SVG icons.
- Overall it did not match the approved design.

## 1. Source of truth (already in this folder, copy them in)
- `reference/homepage.html` and `reference/services.html`: the approved design. Open them in a browser; the result must look the same. Their HTML + CSS are the specification.
- `public/images/dummy/im1.svg ... im12.svg`: dummy images. im1 banquet hall, im2 palace, im3 garden/farmhouse, im4 beach, im5 decor/mandap, im6 photography, im7 makeup, im8 catering, im9 mehendi, im10 DJ, im11 couple, im12 night venue. Use them everywhere an image is needed (venues, services, real weddings, blog covers, hero). Use `<Image unoptimized />` or CSS backgrounds (SVG).

## 1b. Brand logo (provided)
- `public/images/logo.png`: full logo (mandap with couple + "WEDDINGS VIBE" text, gold, white background). `public/images/logo-icon.png`: mandap icon only. `src/app/icon.png`: favicon (Next.js picks it up automatically).
- Brand display name is "Weddings Vibe" (domain weddingsvibe.com). Use it in titles, schema, footer, emails.
- Navbar: the icon image (about 48-52px tall, `width:auto`) followed by the text "WEDDINGS VIBE" in Playfair Display 600, ~20px, letter-spacing .16em, uppercase, charcoal. Footer: the full `logo.png` at about 150px tall. The logo is the ONLY gold element on the site; keep everything else charcoal/white as specified. The reference HTML files already show this.

## 2. Fidelity rules
- Port the CSS from the reference files into `src/app/globals.css` VERBATIM (same class names, colours, spacing, sizes). Convert the HTML into React components. Tailwind may be used only for new pages' layout utilities, never to re-interpret the approved components.
- Fonts via `next/font/google`: Playfair Display (headings) and Poppins (body). Replace the `font-family` names in the CSS with the CSS variables.
- Palette (do not add any other colour): white base; cream `#FAF6EE` only on hero and Featured venues; charcoal `#1C1C1A` for text and buttons; muted `#6B665B`; border `#E7E1D4`; tint `#F1ECE2`. No gold, no coral, no gradients.
- Check the finished pages at 1440px and 390px widths against the reference.

## 3. Rules for this run
- Use plain JavaScript ONLY (`.js` / `.jsx` files). Do NOT use TypeScript: no `.ts`/`.tsx` files, no type annotations, no interfaces, no tsconfig. Next.js App Router files are `page.js`, `layout.js`, `route.js`, etc.
- Do NOT stop to ask questions or wait for confirmation. Make sensible assumptions and keep going.
- Work in this priority order so the most important pages exist first if you run low on budget: (1) layout + homepage, (2) venues listing + venue detail + city pages, (3) services + service detail, (4) contact + backend + enquiry forms, (5) real weddings, blog, about, list-your-venue, legal pages, (6) SEO files.
- Commit after each phase. At the end run `npm run lint` and `npm run build` and fix every error.
- Fill EVERYTHING with realistic dummy data (section 6). No `[placeholder]` brackets visible anywhere, no empty sections.

## 4. Global layout
- Navbar exactly as in `homepage.html`: logo icon + "WEDDINGS VIBE" text (see 1b), links Venues (with mega menu), Services, Real Weddings, Blog, Contact, and the "Plan my wedding" button. All links vertically centred on one baseline.
- Venues mega menu: opens on hover and keyboard focus, full-width panel, cities on the left, hovered city's heading + "View all" + 3 venue cards on the right (each city shows ITS OWN venues from data), "Browse by type" chip strip at the bottom. First city is the default.
- Mobile navbar: hamburger -> full-screen menu with an accordion for cities.
- Footer exactly as in the reference: full logo image + tagline, Contact (tap-to-call, mailto, "Get directions", hours), QR card with "Scan to follow us on Instagram" + handle, Follow us (4 inline-SVG icon buttons) + WhatsApp button, bottom row with copyright, Privacy, Terms and back-to-top button. No big link columns. Footer headings use Poppins uppercase, not the serif.
- Floating WhatsApp button on every page (links to `https://wa.me/<number from site data>`).

## 5. Pages
Homepage: same sections and order as `homepage.html`: hero (image on the right, NO search form), "Any location in mind?" arch cards (8 cities, landmark line icons, hover lift + fill), featured venues, venue types, services scroll section, how it works (4 steps), budget planner, real weddings, why weddingsvibe, testimonials + FAQ (accordion), final CTA.
- Services scroll section: left list of 6 services, right sticky image that cross-fades to the service nearest the viewport centre; implement with IntersectionObserver in a client component (do not rely on CSS scroll-driven animations). Mobile: image sticky on top.
- Budget planner: guests, budget, city -> "Show my plan" opens a small name + phone step, posts an enquiry, then shows a simple food/decor/photography split.

Other pages (same design language, built from the same CSS):
- `/venues`: filters (city, area, type, guests, budget, veg/non-veg, AC, parking), sort, pagination, SEO text. Filters work client-side on dummy data.
- `/wedding-venues-in-[city]` and `/wedding-venues-in-[city]/[area]`: SEO landing pages with intro text, venue grid, FAQ.
- `/venues/[city]/[slug]`: breadcrumb, gallery, name, rating, price per plate, capacity, type, about, amenities, packages, map block, reviews, similar venues, sticky enquiry card + WhatsApp button.
- `/services` exactly like `services.html`, plus `/services/[slug]` (packages, gallery, FAQ, enquiry form).
- `/real-weddings` (filters) and `/real-weddings/[slug]` (cover, couple, story, gallery, details box linking to the venue and services used, testimonial, CTA form).
- `/blog`, `/blog/[slug]`, `/about`, `/contact` (form, map block, WhatsApp), `/list-your-venue` (form), `/privacy-policy`, `/terms`, and a custom 404.

## 6. Dummy data (single editable place: `src/data/`)
- `site.js`: brand name, tagline, dummy address "12 Sample Road, New Delhi - 110001", phone "+91 00000 00000", WhatsApp number, email "hello@weddingsvibe.com", Instagram "@weddingsvibe", social links, working hours, nav links.
- 8 cities (Bengaluru, Delhi, Mumbai, Goa, Noida, Gurugram, Jaipur, Udaipur) with 3 areas each.
- 24 venues (3 per city), each: slug, name, city, area, type (banquet, resort, farmhouse, palace, beach, destination), pricePerPlate, capacity min/max, rating, reviewCount, veg/non-veg, AC, parking, amenities, about (2 short paragraphs), 5 images (rotate im1-im4, im12), `featured` flag (the mega menu and homepage show featured ones).
- 6 services (Decor, Photography & film, Bridal makeup, Catering, Mehendi, DJ & music) each with description, "from" price, 3 packages (Essential, Signature, Luxe) with inclusions, 5 FAQs.
- 6 real weddings, 6 blog posts (full dummy articles), 3 testimonials, 8 FAQs.
All plain JS objects/arrays with slugs, structured so they can move to a database later. Use `generateStaticParams` for dynamic routes.

## 7. Backend (separate folder `../weddingsvibe-api`: Node + Express + MongoDB/Mongoose)
- `POST /api/enquiry`: name, phone, email, type (venue | service | contact | budget-planner | list-venue), venue/service slug, city, date, guests, budget, message.
- zod validation, express-rate-limit, a hidden honeypot field, helmet, CORS restricted to the site origin, JSON errors.
- Save to MongoDB and email a notification with Nodemailer (SMTP from `.env`). Provide `.env.example`, `package.json` scripts and a short README.
- Wire EVERY form in the site (contact, venue detail, services, budget planner, list-your-venue, "Plan my wedding") to this endpoint with loading, success and error states. If the API URL is not set, fall back to showing a success message so the demo still works.
- No admin panel.

## 8. SEO + quality
- Next metadata API with a unique title/description per page, canonical URLs, Open Graph, `sitemap.js`, `robots.js`, JSON-LD (Organization, BreadcrumbList, FAQPage, LocalBusiness on venue pages).
- Semantic headings, alt text, visible focus states, 44px touch targets, `next/image`, no console errors.

## 9. Definition of done
Homepage and services page visually match the two reference files; all routes above exist and render with dummy data; forms submit; `npm run lint` and `npm run build` pass; no Next.js starter content remains.
