import { weddingImages } from './wedding-images';

// Keep service, story, blog, testimonial, and general FAQ content here.
const serviceInfo = [
  ['Decor', 'Stage, mandap, entry and table styling to match your theme.', 35000, weddingImages.decor, 'Thoughtful mandap, stage and tablescape styling.'],
  ['Photography & film', 'Candid photos, cinematic films and pre-wedding shoots.', 45000, weddingImages.couple, 'Candid photography and films that hold every moment.'],
  ['Bridal makeup', 'Trial session, bridal look and touch-ups on the day.', 18000, weddingImages.makeup, 'Bridal looks, trials and on-day touch-ups.'],
  ['Catering', 'Menus, live counters and tasting before you book.', 950, weddingImages.buffet, 'Menus and live counters your guests will remember.'],
  ['Mehendi artists', 'Bridal and guest mehendi, traditional and modern designs.', 12000, weddingImages.mehendi, 'Beautiful bridal and guest mehendi designs.'],
  ['DJ & music', 'DJ, dhol, live band and sangeet choreography.', 22000, weddingImages.music, 'DJs, dhol and live music for every celebration.'],
];

export const services = serviceInfo.map(([name, description, from, image, shortDescription], index) => ({
  name,
  slug: ['decor', 'photography-film', 'bridal-makeup', 'catering', 'mehendi-artists', 'dj-music'][index],
  description,
  shortDescription,
  from,
  image,
  packages: ['Essential', 'Signature', 'Luxe'].map((tier, tierIndex) => ({
    name: tier,
    price: from * (tierIndex + 1),
    inclusions: [
      ['Planning consultation', 'Core service coverage', 'Dedicated coordinator', 'Setup and teardown'][tierIndex % 4],
      ['Personalised design or schedule', 'Professional team', 'Edited delivery'][tierIndex % 3],
      ['Premium materials and upgrades', 'Priority support', 'On-day coordination'][tierIndex % 3],
    ],
  })),
  faqs: [
    ['Can I book this service without a venue?', 'Absolutely. Our team can help with a standalone service or coordinate it with your venue booking.'],
    ['Can I customise a package?', 'Yes. Share your plans and we will tailor the inclusions and quote.'],
    ['How early should I book?', 'Six to twelve months is ideal for popular dates; ask us about your date.'],
    ['Which cities do you cover?', 'We help couples in the cities listed on our wedding venue pages. Send us your city and we will confirm.'],
    ['Is a consultation included?', 'Yes, your first consultation and estimate are complimentary.'],
  ],
}));

// These sample stories are for the real weddings section, not venue listings.
export const weddings = [
  { slug: 'a-lakeside-udaipur-celebration', title: 'A lakeside celebration in Udaipur', couple: 'Aarav & Meera', images: [weddingImages.couple, weddingImages.haldi, weddingImages.ceremony, weddingImages.mehendi] },
  { slug: 'garden-wedding-in-goa', title: 'A garden wedding in Goa', couple: 'Kabir & Anya', images: [weddingImages.couple, weddingImages.haldi, weddingImages.ceremony, weddingImages.mehendi] },
  { slug: 'modern-jaipur-wedding', title: 'A modern Jaipur wedding', couple: 'Rohan & Diya', images: [weddingImages.couple, weddingImages.haldi, weddingImages.ceremony, weddingImages.mehendi] },
  { slug: 'delhi-courtyard-celebration', title: 'An intimate Delhi courtyard', couple: 'Arjun & Tara', images: [weddingImages.couple, weddingImages.haldi, weddingImages.ceremony, weddingImages.mehendi] },
  { slug: 'bengaluru-evening-vows', title: 'Evening vows in Bengaluru', couple: 'Dev & Nisha', images: [weddingImages.couple, weddingImages.haldi, weddingImages.ceremony, weddingImages.mehendi] },
  { slug: 'mumbai-rooftop-wedding', title: 'A rooftop wedding in Mumbai', couple: 'Ishaan & Rhea', images: [weddingImages.couple, weddingImages.haldi, weddingImages.ceremony, weddingImages.mehendi] },
];

const blogTitles = [
  'A practical guide to choosing your wedding venue',
  'How to plan a beautiful wedding on a budget',
  'Wedding decor ideas that feel personal',
  'Your wedding photography timeline, made simple',
  'A destination wedding planning guide',
  'Questions to ask before booking a caterer',
];

export const posts = blogTitles.map((title, index) => ({
  slug: ['choosing-your-wedding-venue', 'wedding-budget-planning', 'personal-wedding-decor', 'wedding-photography-timeline', 'destination-wedding-guide', 'questions-for-your-caterer'][index],
  title,
  excerpt: `Thoughtful advice from our planning team to make your ${['venue search', 'celebration budget', 'wedding decor', 'photo schedule', 'destination plans', 'menu tasting'][index]} easier.`,
  image: [weddingImages.mandap, weddingImages.couple, weddingImages.decor, weddingImages.bridal, weddingImages.ceremony, weddingImages.buffet][index],
  body: [
    'A wedding should feel like you. Start by listing the moments and people that matter most, then let your venue and vendor choices support those priorities.',
    'Set your date range, guest count and comfortable spending limit before you begin shortlisting. Ask vendors for clear written inclusions, and leave a little room for the unexpected.',
    'Visit in person when possible and picture the flow of your day. Our team can help compare options and connect the details.',
  ],
}));

export const testimonials = [
  { name: 'Aditi & Karan', quote: 'We found a beautiful venue and a team who understood exactly what we wanted. The whole process felt calm.' },
  { name: 'Simran & Varun', quote: 'Clear pricing and thoughtful recommendations made planning from another city so much easier.' },
  { name: 'Megha & Rishabh', quote: 'Every detail came together wonderfully. We could enjoy our wedding knowing the team had it handled.' },
];

export const faqs = [
  ['Can I enquire about a venue and services together?', 'Yes. We can coordinate your venue and the services you need through one enquiry.'],
  ['Do you help with venue visits?', 'We can arrange a shortlist and coordinate visits around your schedule.'],
  ['Are the starting prices final?', 'Starting prices are indicative. Final details depend on your date, guest count and selected inclusions.'],
  ['How do I get started?', 'Tell us your date, city and guest count. A planner will contact you with suitable options.'],
  ['Can I customise services?', 'Yes. Service packages are a starting point and can be tailored to your plans.'],
  ['Is the first consultation free?', 'Yes, the first consultation and shortlist are complimentary.'],
  ['How can venues join?', 'Use our List your venue form and our partnerships team will be in touch.'],
];
