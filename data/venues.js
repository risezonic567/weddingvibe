// HOW TO ADD A NEW VENUE
// 1. Copy one venue object below and paste it inside the venues array.
// 2. Give it a unique slug and set citySlug to an existing city slug above.
// 3. Fill in the venue name, location, capacity, and starting price in lakhs.
// 4. Add the guest count for that price, included items, spaces, and image paths.
// 5. Write a clear meta title (about 60 characters) and meta description (about 150–160 characters).

// List every city where visitors can browse wedding venues.
export const cities = [
  {
    // Use a short lowercase URL name, with hyphens instead of spaces.
    slug: 'jim-corbett',
    // Write the city name as people normally spell it.
    name: 'Jim Corbett',
    // Write two or three welcoming sentences about weddings in this city.
    intro: 'Celebrate by the lakes and palaces of Jim Corbett. Find a setting for your wedding and tell our planning team what you have in mind.',
    // Add a public image path or image URL that represents this city.
    image: '/images/dummy/im2.svg',
    // Add common city questions and short, helpful answers.
    faqs: [
      {
        // Write a question couples often ask about venues in this city.
        question: 'How do I choose a wedding venue in Jim Corbett?',
        // Answer the question in clear, simple language.
        answer: 'Start with your guest count, preferred dates, and budget. Our team can help you compare suitable venues and arrange visits.',
      },
      {
        // Write another question couples often ask about venues in this city.
        question: 'Can you help arrange a venue visit?',
        // Give a useful answer about visits or enquiries.
        answer: 'Yes. Share your dates and guest count in an enquiry, and our planning team can help coordinate a visit.',
      },
    ],
    // Add search-result details for this city page.
    meta: {
      // Write a page title of about 60 characters, including the city name.
      title: 'Wedding Venues in Udaipur | Weddings Vibe',
      // Write a useful search description of about 150–160 characters.
      description: 'Explore wedding venues in Udaipur, from lakeside settings to elegant courtyards. Share your date and guest count to get help with your shortlist.',
    },
  },
 
  {
    // Use a short lowercase URL name, with hyphens instead of spaces.
    slug: 'udaipur',
    // Write the city name as people normally spell it.
    name: 'Udaipur',
    // Write two or three welcoming sentences about weddings in this city.
    intro: 'Celebrate by the lakes and palaces of Udaipur. Find a setting for your wedding and tell our planning team what you have in mind.',
    // Add a public image path or image URL that represents this city.
    image: '/images/dummy/im2.svg',
    // Add common city questions and short, helpful answers.
    faqs: [
      {
        // Write a question couples often ask about venues in this city.
        question: 'How do I choose a wedding venue in Udaipur?',
        // Answer the question in clear, simple language.
        answer: 'Start with your guest count, preferred dates, and budget. Our team can help you compare suitable venues and arrange visits.',
      },
      {
        // Write another question couples often ask about venues in this city.
        question: 'Can you help arrange a venue visit?',
        // Give a useful answer about visits or enquiries.
        answer: 'Yes. Share your dates and guest count in an enquiry, and our planning team can help coordinate a visit.',
      },
    ],
    // Add search-result details for this city page.
    meta: {
      // Write a page title of about 60 characters, including the city name.
      title: 'Wedding Venues in Udaipur | Weddings Vibe',
      // Write a useful search description of about 150–160 characters.
      description: 'Explore wedding venues in Udaipur, from lakeside settings to elegant courtyards. Share your date and guest count to get help with your shortlist.',
    },
  },

  {
    // Use a short lowercase URL name, with hyphens instead of spaces.
    slug: 'delhi-ncr',
    // Write the city name as people normally spell it.
    name: 'Delhi NCR',
    // Write two or three welcoming sentences about weddings in this city.
    intro: 'Celebrate by the lakes and palaces of Udaipur. Find a setting for your wedding and tell our planning team what you have in mind.',
    // Add a public image path or image URL that represents this city.
    image: '/images/dummy/im2.svg',
    // Add common city questions and short, helpful answers.
    faqs: [
      {
        // Write a question couples often ask about venues in this city.
        question: 'How do I choose a wedding venue in Udaipur?',
        // Answer the question in clear, simple language.
        answer: 'Start with your guest count, preferred dates, and budget. Our team can help you compare suitable venues and arrange visits.',
      },
      {
        // Write another question couples often ask about venues in this city.
        question: 'Can you help arrange a venue visit?',
        // Give a useful answer about visits or enquiries.
        answer: 'Yes. Share your dates and guest count in an enquiry, and our planning team can help coordinate a visit.',
      },
    ],
    // Add search-result details for this city page.
    meta: {
      // Write a page title of about 60 characters, including the city name.
      title: 'Wedding Venues in Udaipur | Weddings Vibe',
      // Write a useful search description of about 150–160 characters.
      description: 'Explore wedding venues in Udaipur, from lakeside settings to elegant courtyards. Share your date and guest count to get help with your shortlist.',
    },
  },

  {
    // Use a short lowercase URL name, with hyphens instead of spaces.
    slug: 'rishikesh',
    // Write the city name as people normally spell it.
    name: 'Rishikesh',
    // Write two or three welcoming sentences about weddings in this city.
    intro: 'Celebrate by the lakes and palaces of Udaipur. Find a setting for your wedding and tell our planning team what you have in mind.',
    // Add a public image path or image URL that represents this city.
    image: '/images/dummy/im2.svg',
    // Add common city questions and short, helpful answers.
    faqs: [
      {
        // Write a question couples often ask about venues in this city.
        question: 'How do I choose a wedding venue in Udaipur?',
        // Answer the question in clear, simple language.
        answer: 'Start with your guest count, preferred dates, and budget. Our team can help you compare suitable venues and arrange visits.',
      },
      {
        // Write another question couples often ask about venues in this city.
        question: 'Can you help arrange a venue visit?',
        // Give a useful answer about visits or enquiries.
        answer: 'Yes. Share your dates and guest count in an enquiry, and our planning team can help coordinate a visit.',
      },
    ],
    // Add search-result details for this city page.
    meta: {
      // Write a page title of about 60 characters, including the city name.
      title: 'Wedding Venues in Udaipur | Weddings Vibe',
      // Write a useful search description of about 150–160 characters.
      description: 'Explore wedding venues in Udaipur, from lakeside settings to elegant courtyards. Share your date and guest count to get help with your shortlist.',
    },
  },


  {
    // Use a short lowercas e URL name, with hyphens instead of spaces.
    slug: 'jaipur',
    // Write the city name as people normally spell it.
    name: 'Jaipur',
    // Write two or three welcoming sentences about weddings in this city.
    intro: 'Celebrate by the lakes and palaces of Udaipur. Find a setting for your wedding and tell our planning team what you have in mind.',
    // Add a public image path or image URL that represents this city.
    image: '/images/dummy/im2.svg',
    // Add common city questions and short, helpful answers.
    faqs: [
      {
        // Write a question couples often ask about venues in this city.
        question: 'How do I choose a wedding venue in Udaipur?',
        // Answer the question in clear, simple language.
        answer: 'Start with your guest count, preferred dates, and budget. Our team can help you compare suitable venues and arrange visits.',
      },
      {
        // Write another question couples often ask about venues in this city.
        question: 'Can you help arrange a venue visit?',
        // Give a useful answer about visits or enquiries.
        answer: 'Yes. Share your dates and guest count in an enquiry, and our planning team can help coordinate a visit.',
      },
    ],
    // Add search-result details for this city page.
    meta: {
      // Write a page title of about 60 characters, including the city name.
      title: 'Wedding Venues in Udaipur | Weddings Vibe',
      // Write a useful search description of about 150–160 characters.
      description: 'Explore wedding venues in Udaipur, from lakeside settings to elegant courtyards. Share your date and guest count to get help with your shortlist.',
    },
  },


  {
    // Use a short lowercase URL name, with hyphens instead of spaces.
    slug: 'uttarakhand',
    // Write the city name as people normally spell it.
    name: 'Uttarakhand',
    // Write two or three welcoming sentences about weddings in this city.
    intro: 'Celebrate by the lakes and palaces of Udaipur. Find a setting for your wedding and tell our planning team what you have in mind.',
    // Add a public image path or image URL that represents this city.
    image: '/images/dummy/im2.svg',
    // Add common city questions and short, helpful answers.
    faqs: [
      {
        // Write a question couples often ask about venues in this city.
        question: 'How do I choose a wedding venue in Udaipur?',
        // Answer the question in clear, simple language.
        answer: 'Start with your guest count, preferred dates, and budget. Our team can help you compare suitable venues and arrange visits.',
      },
      {
        // Write another question couples often ask about venues in this city.
        question: 'Can you help arrange a venue visit?',
        // Give a useful answer about visits or enquiries.
        answer: 'Yes. Share your dates and guest count in an enquiry, and our planning team can help coordinate a visit.',
      },
    ],
    // Add search-result details for this city page.
    meta: {
      // Write a page title of about 60 characters, including the city name.
      title: 'Wedding Venues in Udaipur | Weddings Vibe',
      // Write a useful search description of about 150–160 characters.
      description: 'Explore wedding venues in Udaipur, from lakeside settings to elegant courtyards. Share your date and guest count to get help with your shortlist.',
    },
  },

  {
    // Use a short lowercase URL name, with hyphens instead of spaces.
    slug: 'jaisalmer',
    // Write the city name as people normally spell it.
    name: 'Jaisalmer',
    // Write two or three welcoming sentences about weddings in this city.
    intro: 'Celebrate by the lakes and palaces of Udaipur. Find a setting for your wedding and tell our planning team what you have in mind.',
    // Add a public image path or image URL that represents this city.
    image: '/images/dummy/im2.svg',
    // Add common city questions and short, helpful answers.
    faqs: [
      {
        // Write a question couples often ask about venues in this city.
        question: 'How do I choose a wedding venue in Udaipur?',
        // Answer the question in clear, simple language.
        answer: 'Start with your guest count, preferred dates, and budget. Our team can help you compare suitable venues and arrange visits.',
      },
      {
        // Write another question couples often ask about venues in this city.
        question: 'Can you help arrange a venue visit?',
        // Give a useful answer about visits or enquiries.
        answer: 'Yes. Share your dates and guest count in an enquiry, and our planning team can help coordinate a visit.',
      },
    ],
    // Add search-result details for this city page.
    meta: {
      // Write a page title of about 60 characters, including the city name.
      title: 'Wedding Venues in Udaipur | Weddings Vibe',
      // Write a useful search description of about 150–160 characters.
      description: 'Explore wedding venues in Udaipur, from lakeside settings to elegant courtyards. Share your date and guest count to get help with your shortlist.',
    },
  },


  {
    // Use a short lowercase URL name, with hyphens instead of spaces.
    slug: 'goa',
    // Write the city name as people normally spell it.
    name: 'Goa',
    // Write two or three welcoming sentences about weddings in this city.
    intro: 'Celebrate by the lakes and palaces of Udaipur. Find a setting for your wedding and tell our planning team what you have in mind.',
    // Add a public image path or image URL that represents this city.
    image: '/images/dummy/im2.svg',
    // Add common city questions and short, helpful answers.
    faqs: [
      {
        // Write a question couples often ask about venues in this city.
        question: 'How do I choose a wedding venue in Udaipur?',
        // Answer the question in clear, simple language.
        answer: 'Start with your guest count, preferred dates, and budget. Our team can help you compare suitable venues and arrange visits.',
      },
      {
        // Write another question couples often ask about venues in this city.
        question: 'Can you help arrange a venue visit?',
        // Give a useful answer about visits or enquiries.
        answer: 'Yes. Share your dates and guest count in an enquiry, and our planning team can help coordinate a visit.',
      },
    ],
    // Add search-result details for this city page.
    meta: {
      // Write a page title of about 60 characters, including the city name.
      title: 'Wedding Venues in Udaipur | Weddings Vibe',
      // Write a useful search description of about 150–160 characters.
      description: 'Explore wedding venues in Udaipur, from lakeside settings to elegant courtyards. Share your date and guest count to get help with your shortlist.',
    },
  },

];

// List individual venues and the details shown on venue pages.
export const venues = [
 {
    // Use a unique lowercase URL name for this venue.
    slug: 'lakeview-palace',
    // Copy the slug of the city where this venue is located.
    citySlug: 'jim-corbett',
    // Write the venue's public name.
    name: 'Lakeview Palace',
    // Write the neighbourhood or a short address line.
    location: 'Lake Pichola, Jim Corbett',
    // Write the approximate guest capacity as an easy-to-read range.
    capacity: '100 - 800 guests',
    // Enter the starting price in lakhs, without a currency symbol.
    startingPrice: 12,
    // Enter the number of guests covered by the starting price.
    startingPriceGuests: 200,
    // List what the starting price includes; remove or change items to match the venue.
    priceIncludes: ['Venue rental', 'Basic event lighting', 'Guest seating'],
    // List the kinds of event spaces available at this venue.
    spaces: ['Lakeside lawn', 'Palace courtyard', 'Banquet hall'],
    // Add paths or URLs for photos of this venue.
    images: ['/images/dummy/im2.svg', '/images/dummy/im12.svg'],
    // Add search-result details for this venue page.
    meta: {
      // Write a page title of about 60 characters, including the venue and city.
      title: 'Lakeview Palace Jim Corbett Wedding Venue | Weddings Vibe',
      // Write a useful search description of about 150–160 characters.
      description: 'Explore Lakeview Palace, a lakeside wedding venue in Jim Corbett for gatherings of 100 to 800 guests. Enquire for availability and starting prices.',
    },
  },


  {
    // Use a unique lowercase URL name for this venue.
    slug: 'lakeview-palace',
    // Copy the slug of the city where this venue is located.
    citySlug: 'udaipur',
    // Write the venue's public name.
    name: 'Lakeview Palace',
    // Write the neighbourhood or a short address line.
    location: 'Lake Pichola, Udaipur',
    // Write the approximate guest capacity as an easy-to-read range.
    capacity: '100 - 800 guests',
    // Enter the starting price in lakhs, without a currency symbol.
    startingPrice: 12,
    // Enter the number of guests covered by the starting price.
    startingPriceGuests: 200,
    // List what the starting price includes; remove or change items to match the venue.
    priceIncludes: ['Venue rental', 'Basic event lighting', 'Guest seating'],
    // List the kinds of event spaces available at this venue.
    spaces: ['Lakeside lawn', 'Palace courtyard', 'Banquet hall'],
    // Add paths or URLs for photos of this venue.
    images: ['/images/dummy/im2.svg', '/images/dummy/im12.svg'],
    // Add search-result details for this venue page.
    meta: {
      // Write a page title of about 60 characters, including the venue and city.
      title: 'Lakeview Palace Udaipur Wedding Venue | Weddings Vibe',
      // Write a useful search description of about 150–160 characters.
      description: 'Explore Lakeview Palace, a lakeside wedding venue in Udaipur for gatherings of 100 to 800 guests. Enquire for availability and starting prices.',
    },
  },


  {
    // Use a unique lowercase URL name for this venue.
    slug: 'garden-courtyard-retreat',
    // Copy the slug of the city where this venue is located.
    citySlug: 'udaipur',
    // Write the venue's public name.
    name: 'Garden Courtyard Retreat',
    // Write the neighbourhood or a short address line.
    location: 'Fateh Sagar Road, Udaipur',
    // Write the approximate guest capacity as an easy-to-read range.
    capacity: '80 - 500 guests',
    // Enter the starting price in lakhs, without a currency symbol.
    startingPrice: 6.5,
    // Enter the number of guests covered by the starting price.
    startingPriceGuests: 150,
    // List what the starting price includes; remove or change items to match the venue.
    priceIncludes: ['Venue rental', 'Garden seating', 'Changing room'],
    // List the kinds of event spaces available at this venue.
    spaces: ['Garden lawn', 'Indoor ballroom', 'Poolside'],
    // Add paths or URLs for photos of this venue.
    images: ['/images/dummy/im3.svg', '/images/dummy/im1.svg'],
    // Add search-result details for this venue page.
    meta: {
      // Write a page title of about 60 characters, including the venue and city.
      title: 'Garden Courtyard Udaipur Wedding Venue | Weddings Vibe',
      // Write a useful search description of about 150–160 characters.
      description: 'See Garden Courtyard Retreat, a relaxed Udaipur wedding venue for 80 to 500 guests. Browse its garden, ballroom and poolside spaces, then enquire.',
    },
  },


  {
    // Use a unique lowercase URL name for this venue.
    slug: 'garden-courtyard-retreat',
    // Copy the slug of the city where this venue is located.
    citySlug: 'delhi-ncr',
    // Write the venue's public name.
    name: 'Garden Courtyard Retreat',
    // Write the neighbourhood or a short address line.
    location: 'Fateh Sagar Road, Delhi NCR',
    // Write the approximate guest capacity as an easy-to-read range.
    capacity: '80 - 500 guests',
    // Enter the starting price in lakhs, without a currency symbol.
    startingPrice: 6.5,
    // Enter the number of guests covered by the starting price.
    startingPriceGuests: 150,
    // List what the starting price includes; remove or change items to match the venue.
    priceIncludes: ['Venue rental', 'Garden seating', 'Changing room'],
    // List the kinds of event spaces available at this venue.
    spaces: ['Garden lawn', 'Indoor ballroom', 'Poolside'],
    // Add paths or URLs for photos of this venue.
    images: ['/images/dummy/im3.svg', '/images/dummy/im1.svg'],
    // Add search-result details for this venue page.
    meta: {
      // Write a page title of about 60 characters, including the venue and city.
      title: 'Garden Courtyard Udaipur Wedding Venue | Weddings Vibe',
      // Write a useful search description of about 150–160 characters.
      description: 'See Garden Courtyard Retreat, a relaxed Udaipur wedding venue for 80 to 500 guests. Browse its garden, ballroom and poolside spaces, then enquire.',
    },
  },

  {
    // Use a unique lowercase URL name for this venue.
    slug: "royal-garden-wedding-resort",
    // Copy the slug of the city where this venue is located.
    citySlug: 'delhi-ncr',
    // Write the venue's public name.
    name: "Royal Garden Wedding Resort",
    // Write the neighbourhood or a short address line.
    location: "City Center, Delhi NCR",
    // Write the approximate guest capacity as an easy-to-read range.
    capacity: '80 - 500 guests',
    // Enter the starting price in lakhs, without a currency symbol.
    startingPrice: 6.5,
    // Enter the number of guests covered by the starting price.
    startingPriceGuests: 150,
    // List what the starting price includes; remove or change items to match the venue.
    priceIncludes: ['Venue rental', 'Garden seating', 'Changing room'],
    // List the kinds of event spaces available at this venue.
    spaces: ['Garden lawn', 'Indoor ballroom', 'Poolside'],
    // Add paths or URLs for photos of this venue.
    images: ['/images/dummy/im3.svg', '/images/dummy/im1.svg'],
    // Add search-result details for this venue page.
    meta: {
      // Write a page title of about 60 characters, including the venue and city.
      title: "Royal Garden Wedding Resort in Delhi NCR | Weddings Vibe",
      // Write a useful search description of about 150–160 characters.
      description: "Discover Royal Garden Wedding Resort in Delhi NCR, a wedding setting for 80 to 500 guests. Explore its lawns, ballroom and poolside spaces, then enquire.",
    },
  },


  {
    // Use a unique lowercase URL name for this venue.
    slug: 'garden-courtyard-retreat',
    // Copy the slug of the city where this venue is located.
    citySlug: 'jaipur',
    // Write the venue's public name.
    name: 'Garden Courtyard Retreat',
    // Write the neighbourhood or a short address line.
    location: 'Fateh Sagar Road, Jaipur',
    // Write the approximate guest capacity as an easy-to-read range.
    capacity: '80 - 500 guests',
    // Enter the starting price in lakhs, without a currency symbol.
    startingPrice: 6.5,
    // Enter the number of guests covered by the starting price.
    startingPriceGuests: 150,
    // List what the starting price includes; remove or change items to match the venue.
    priceIncludes: ['Venue rental', 'Garden seating', 'Changing room'],
    // List the kinds of event spaces available at this venue.
    spaces: ['Garden lawn', 'Indoor ballroom', 'Poolside'],
    // Add paths or URLs for photos of this venue.
    images: ['/images/dummy/im3.svg', '/images/dummy/im1.svg'],
    // Add search-result details for this venue page.
    meta: {
      // Write a page title of about 60 characters, including the venue and city.
      title: 'Garden Courtyard Udaipur Wedding Venue | Weddings Vibe',
      // Write a useful search description of about 150–160 characters.
      description: 'See Garden Courtyard Retreat, a relaxed Udaipur wedding venue for 80 to 500 guests. Browse its garden, ballroom and poolside spaces, then enquire.',
    },
  },


  {
    // Use a unique lowercase URL name for this venue.
    slug: "royal-garden-wedding-resort",
    // Copy the slug of the city where this venue is located.
    citySlug: 'jaipur',
    // Write the venue's public name.
    name: "Royal Garden Wedding Resort",
    // Write the neighbourhood or a short address line.
    location: "City Center, Jaipur",
    // Write the approximate guest capacity as an easy-to-read range.
    capacity: '80 - 500 guests',
    // Enter the starting price in lakhs, without a currency symbol.
    startingPrice: 6.5,
    // Enter the number of guests covered by the starting price.
    startingPriceGuests: 150,
    // List what the starting price includes; remove or change items to match the venue.
    priceIncludes: ['Venue rental', 'Garden seating', 'Changing room'],
    // List the kinds of event spaces available at this venue.
    spaces: ['Garden lawn', 'Indoor ballroom', 'Poolside'],
    // Add paths or URLs for photos of this venue.
    images: ['/images/dummy/im3.svg', '/images/dummy/im1.svg'],
    // Add search-result details for this venue page.
    meta: {
      // Write a page title of about 60 characters, including the venue and city.
      title: "Royal Garden Wedding Resort in Jaipur | Weddings Vibe",
      // Write a useful search description of about 150–160 characters.
      description: "Discover Royal Garden Wedding Resort in Jaipur, a wedding setting for 80 to 500 guests. Explore its lawns, ballroom and poolside spaces, then enquire.",
    },
  },


  {
    // Use a unique lowercase URL name for this venue.
    slug: 'garden-courtyard-retreat',
    // Copy the slug of the city where this venue is located.
    citySlug: 'uttarakhand',
    // Write the venue's public name.
    name: 'Garden Courtyard Retreat',
    // Write the neighbourhood or a short address line.
    location: 'Fateh Sagar Road, Uttarakhand',
    // Write the approximate guest capacity as an easy-to-read range.
    capacity: '80 - 500 guests',
    // Enter the starting price in lakhs, without a currency symbol.
    startingPrice: 6.5,
    // Enter the number of guests covered by the starting price.
    startingPriceGuests: 150,
    // List what the starting price includes; remove or change items to match the venue.
    priceIncludes: ['Venue rental', 'Garden seating', 'Changing room'],
    // List the kinds of event spaces available at this venue.
    spaces: ['Garden lawn', 'Indoor ballroom', 'Poolside'],
    // Add paths or URLs for photos of this venue.
    images: ['/images/dummy/im3.svg', '/images/dummy/im1.svg'],
    // Add search-result details for this venue page.
    meta: {
      // Write a page title of about 60 characters, including the venue and city.
      title: 'Garden Courtyard Udaipur Wedding Venue | Weddings Vibe',
      // Write a useful search description of about 150–160 characters.
      description: 'See Garden Courtyard Retreat, a relaxed Udaipur wedding venue for 80 to 500 guests. Browse its garden, ballroom and poolside spaces, then enquire.',
    },
  },


  {
    // Use a unique lowercase URL name for this venue.
    slug: "royal-garden-wedding-resort",
    // Copy the slug of the city where this venue is located.
    citySlug: 'uttarakhand',
    // Write the venue's public name.
    name: "Royal Garden Wedding Resort",
    // Write the neighbourhood or a short address line.
    location: "City Center, Uttarakhand",
    // Write the approximate guest capacity as an easy-to-read range.
    capacity: '80 - 500 guests',
    // Enter the starting price in lakhs, without a currency symbol.
    startingPrice: 6.5,
    // Enter the number of guests covered by the starting price.
    startingPriceGuests: 150,
    // List what the starting price includes; remove or change items to match the venue.
    priceIncludes: ['Venue rental', 'Garden seating', 'Changing room'],
    // List the kinds of event spaces available at this venue.
    spaces: ['Garden lawn', 'Indoor ballroom', 'Poolside'],
    // Add paths or URLs for photos of this venue.
    images: ['/images/dummy/im3.svg', '/images/dummy/im1.svg'],
    // Add search-result details for this venue page.
    meta: {
      // Write a page title of about 60 characters, including the venue and city.
      title: "Royal Garden Wedding Resort in Uttarakhand | Weddings Vibe",
      // Write a useful search description of about 150–160 characters.
      description: "Discover Royal Garden Wedding Resort in Uttarakhand, a wedding setting for 80 to 500 guests. Explore its lawns, ballroom and poolside spaces, then enquire.",
    },
  },


  {
    // Use a unique lowercase URL name for this venue.
    slug: 'garden-courtyard-retreat',
    // Copy the slug of the city where this venue is located.
    citySlug: 'jaisalmer',
    // Write the venue's public name.
    name: 'Garden Courtyard Retreat',
    // Write the neighbourhood or a short address line.
    location: 'Fateh Sagar Road, Jaisalmer',
    // Write the approximate guest capacity as an easy-to-read range.
    capacity: '80 - 500 guests',
    // Enter the starting price in lakhs, without a currency symbol.
    startingPrice: 6.5,
    // Enter the number of guests covered by the starting price.
    startingPriceGuests: 150,
    // List what the starting price includes; remove or change items to match the venue.
    priceIncludes: ['Venue rental', 'Garden seating', 'Changing room'],
    // List the kinds of event spaces available at this venue.
    spaces: ['Garden lawn', 'Indoor ballroom', 'Poolside'],
    // Add paths or URLs for photos of this venue.
    images: ['/images/dummy/im3.svg', '/images/dummy/im1.svg'],
    // Add search-result details for this venue page.
    meta: {
      // Write a page title of about 60 characters, including the venue and city.
      title: 'Garden Courtyard Udaipur Wedding Venue | Weddings Vibe',
      // Write a useful search description of about 150–160 characters.
      description: 'See Garden Courtyard Retreat, a relaxed Udaipur wedding venue for 80 to 500 guests. Browse its garden, ballroom and poolside spaces, then enquire.',
    },
  },

  {
    // Use a unique lowercase URL name for this venue.
    slug: "royal-garden-wedding-resort",
    // Copy the slug of the city where this venue is located.
    citySlug: 'jaisalmer',
    // Write the venue's public name.
    name: "Royal Garden Wedding Resort",
    // Write the neighbourhood or a short address line.
    location: "City Center, Jaisalmer",
    // Write the approximate guest capacity as an easy-to-read range.
    capacity: '80 - 500 guests',
    // Enter the starting price in lakhs, without a currency symbol.
    startingPrice: 6.5,
    // Enter the number of guests covered by the starting price.
    startingPriceGuests: 150,
    // List what the starting price includes; remove or change items to match the venue.
    priceIncludes: ['Venue rental', 'Garden seating', 'Changing room'],
    // List the kinds of event spaces available at this venue.
    spaces: ['Garden lawn', 'Indoor ballroom', 'Poolside'],
    // Add paths or URLs for photos of this venue.
    images: ['/images/dummy/im3.svg', '/images/dummy/im1.svg'],
    // Add search-result details for this venue page.
    meta: {
      // Write a page title of about 60 characters, including the venue and city.
      title: "Royal Garden Wedding Resort in Jaisalmer | Weddings Vibe",
      // Write a useful search description of about 150–160 characters.
      description: "Discover Royal Garden Wedding Resort in Jaisalmer, a wedding setting for 80 to 500 guests. Explore its lawns, ballroom and poolside spaces, then enquire.",
    },
  },


  {
    // Use a unique lowercase URL name for this venue.
    slug: 'garden-courtyard-retreat',
    // Copy the slug of the city where this venue is located.
    citySlug: 'rishikesh',
    // Write the venue's public name.
    name: 'Garden Courtyard Retreat',
    // Write the neighbourhood or a short address line.
    location: 'Fateh Sagar Road, Rishikesh',
    // Write the approximate guest capacity as an easy-to-read range.
    capacity: '80 - 500 guests',
    // Enter the starting price in lakhs, without a currency symbol.
    startingPrice: 6.5,
    // Enter the number of guests covered by the starting price.
    startingPriceGuests: 150,
    // List what the starting price includes; remove or change items to match the venue.
    priceIncludes: ['Venue rental', 'Garden seating', 'Changing room'],
    // List the kinds of event spaces available at this venue.
    spaces: ['Garden lawn', 'Indoor ballroom', 'Poolside'],
    // Add paths or URLs for photos of this venue.
    images: ['/images/dummy/im3.svg', '/images/dummy/im1.svg'],
    // Add search-result details for this venue page.
    meta: {
      // Write a page title of about 60 characters, including the venue and city.
      title: 'Garden Courtyard Udaipur Wedding Venue | Weddings Vibe',
      // Write a useful search description of about 150–160 characters.
      description: 'See Garden Courtyard Retreat, a relaxed Udaipur wedding venue for 80 to 500 guests. Browse its garden, ballroom and poolside spaces, then enquire.',
    },
  },

  {
    // Use a unique lowercase URL name for this venue.
    slug: "royal-garden-wedding-resort",
    // Copy the slug of the city where this venue is located.
    citySlug: 'rishikesh',
    // Write the venue's public name.
    name: "Royal Garden Wedding Resort",
    // Write the neighbourhood or a short address line.
    location: "City Center, Rishikesh",
    // Write the approximate guest capacity as an easy-to-read range.
    capacity: '80 - 500 guests',
    // Enter the starting price in lakhs, without a currency symbol.
    startingPrice: 6.5,
    // Enter the number of guests covered by the starting price.
    startingPriceGuests: 150,
    // List what the starting price includes; remove or change items to match the venue.
    priceIncludes: ['Venue rental', 'Garden seating', 'Changing room'],
    // List the kinds of event spaces available at this venue.
    spaces: ['Garden lawn', 'Indoor ballroom', 'Poolside'],
    // Add paths or URLs for photos of this venue.
    images: ['/images/dummy/im3.svg', '/images/dummy/im1.svg'],
    // Add search-result details for this venue page.
    meta: {
      // Write a page title of about 60 characters, including the venue and city.
      title: "Royal Garden Wedding Resort in Rishikesh | Weddings Vibe",
      // Write a useful search description of about 150–160 characters.
      description: "Discover Royal Garden Wedding Resort in Rishikesh, a wedding setting for 80 to 500 guests. Explore its lawns, ballroom and poolside spaces, then enquire.",
    },
  },


// Goa Veneues Name And locations with 

{
  slug: 'novotel-goa-dona-sylvia-resort',
  citySlug: 'goa',
  name: 'Novotel Goa Dona Sylvia Resort',
  location: 'Cavelossim Beach, Salcete, South Goa',
  capacity: '60 - 1500 guests',
  startingPrice: 5,
  startingPriceGuests: 1000,
  priceIncludes: [
    'Venue rental for one day',
    'Choice of lawns and indoor halls',
    'Guest rooms on site (30 to 181)',
    'On-site parking (about 30 cars)',
  ],
  spaces: [
    'Seaside Lawns (up to 1000 seated)',
    'Mobor Lawns (up to 250 seated)',
    'Grand Ballroom (up to 350 seated)',
    'Mobor indoor hall (up to 100 seated)',
    'Betul Hall (up to 60 seated)',
  ],
  images: [
    '/images/Novotel%20Goa%20Dona%20Sylvia%20Resort/1da87b3f-f5fd-4ef9-bc2b-cfc46d0f0e7a.webp',
    '/images/Novotel%20Goa%20Dona%20Sylvia%20Resort/5d7128d3-acb9-4a85-a81e-e6beff652a56.jpg',
    '/images/Novotel%20Goa%20Dona%20Sylvia%20Resort/5fc2d7be-ec64-430f-a648-d65f53cbd82b.webp',
    '/images/Novotel%20Goa%20Dona%20Sylvia%20Resort/80c84a09-1956-4de5-abed-cdfa57e564d0.jpg',
    '/images/Novotel%20Goa%20Dona%20Sylvia%20Resort/8ef261c5-1045-41e2-a389-b96a4c269643.jpg',
    '/images/Novotel%20Goa%20Dona%20Sylvia%20Resort/b3386903-dd00-431a-962e-8cb9fdf6acb1.jpg',
    '/images/Novotel%20Goa%20Dona%20Sylvia%20Resort/da80e4a5-e626-4da2-80d3-6dfbd6052f5c.webp',
  ],
  meta: {
    title: 'Novotel Dona Sylvia Goa Wedding Venue | Weddings Vibe',
    description: 'Plan a beachside wedding at Novotel Goa Dona Sylvia Resort in Cavelossim, with seaside lawns and a grand ballroom for up to 1500 guests. Send an enquiry.',
  },
},
{
  slug: 'caravela-beach-resort',
  citySlug: 'goa',
  name: 'Caravela Beach Resort',
  location: 'Varca Beach, South Goa',
  capacity: '180 - 2000 guests',
  startingPrice: 4.4,
  startingPriceGuests: 800,
  priceIncludes: [
    'Venue rental for one day',
    'Large lawn and indoor hall',
    'Guest rooms on site (60 to 200)',
    'On-site parking (about 50 cars)',
  ],
  spaces: [
    'Lawn (up to 800 seated)',
    'Indoor hall (up to 180 seated)',
  ],
  images: [
    '/images/Caravela%20beach%20resort/0944a4f5-91d0-4167-95ae-78fa5f8ea18d.png',
    '/images/Caravela%20beach%20resort/61231892-7d42-4669-9207-281ed7d37132.webp',
    '/images/Caravela%20beach%20resort/6f2e55ff-75e4-4006-b6d2-805be1fe1ce9.webp',
    '/images/Caravela%20beach%20resort/7cdc329c-4e3f-4831-9c99-d0de98499567.webp',
    '/images/Caravela%20beach%20resort/98ae8492-fb39-4194-8374-3c6d5a9d2d83.jpg',
    '/images/Caravela%20beach%20resort/a0efbbc4-1572-4fa5-96e8-7cec8d6c9ac9.webp',
    '/images/Caravela%20beach%20resort/d5b7485a-c795-4d2e-b0e0-1691c8234a17.webp',
    '/images/Caravela%20beach%20resort/f54e72bd-373d-4166-b7f8-6cb9bc8e428f.webp',
  ],
  meta: {
    title: 'Caravela Beach Resort Varca Wedding Venue | Weddings Vibe',
    description: 'Host a big Goan wedding at Caravela Beach Resort in Varca, with a spacious lawn for up to 2000 guests and an indoor hall. Ask us for a quote today.',
  },
},
{
  slug: 'kenilworth-resort-and-spa',
  citySlug: 'goa',
  name: 'Kenilworth Resort & Spa',
  location: 'Utorda, South Goa',
  capacity: '120 - 1500 guests',
  startingPrice: 2.2,
  startingPriceGuests: 600,
  priceIncludes: [
    'Venue rental for one day',
    'Lawn, poolside and beach spaces',
    'Guest rooms on site (35 to 100)',
    'On-site parking (about 40 cars)',
  ],
  spaces: [
    'Lawn (up to 600 seated)',
    'Sea Mist beach venue (up to 300 seated)',
    'Aquatica poolside (up to 200 seated)',
    'Indoor hall (up to 120 seated)',
  ],
  images: [
    '/images/Kenilworth%20Resort%20%26%20Spa/304c4c40-024b-4a8d-8ed3-8d0a2b43c355.jpg',
    '/images/Kenilworth%20Resort%20%26%20Spa/45881068-a1a3-46ca-a7b0-5a71bdfc943a.png',
    '/images/Kenilworth%20Resort%20%26%20Spa/5795978d-83a4-4f6d-bfe1-99d1fd1a80d1_compressed.webp',
    '/images/Kenilworth%20Resort%20%26%20Spa/ce13b379-f727-4138-8e20-bf3f9fa19ff8.png',
    '/images/Kenilworth%20Resort%20%26%20Spa/d016ac80-480d-48d3-b029-360dcd7d28c2.jpg',
    '/images/Kenilworth%20Resort%20%26%20Spa/d2284f50-248b-4047-9c9f-ac05cc7b4648.jpg',
    '/images/Kenilworth%20Resort%20%26%20Spa/e7470abf-df19-4778-acdf-acae3be47dd9.webp',
  ],
  meta: {
    title: 'Kenilworth Resort Utorda Wedding Venue | Weddings Vibe',
    description: 'Choose between a beach, poolside or lawn setting at Kenilworth Resort & Spa in Utorda, Goa. Suitable for 120 to 1500 guests. Enquire for dates and rates.',
  },
},
{
  slug: 'resort-rio',
  citySlug: 'goa',
  name: 'Resort Rio',
  location: 'Arpora, near Baga Beach, North Goa',
  capacity: '30 - 1600 guests',
  startingPrice: 6,
  startingPriceGuests: 600,
  priceIncludes: [
    'Venue rental for one day',
    'Choice of lawn, banquet and convention halls',
    'Guest rooms on site (50 to 400)',
    'On-site parking (about 100 cars)',
  ],
  spaces: [
    'Rio Convention (up to 600 seated)',
    'Lawn (up to 250 seated)',
    'Resort Rio Hall (up to 230 seated)',
    'Banquet hall (up to 220 seated)',
    'Lobby hall (up to 30 seated)',
  ],
  images: [
    '/images/Resort%20Rio/1c3347a8-373a-45ff-84c8-9c7d8845fb0d.webp',
    '/images/Resort%20Rio/2d70d575-93a1-4f05-b94a-565598fe651c.webp',
    '/images/Resort%20Rio/61231892-7d42-4669-9207-281ed7d37132.webp',
    '/images/Resort%20Rio/7b349d95-af6a-480d-8f75-7f4e36b47e36.webp',
    '/images/Resort%20Rio/a0efbbc4-1572-4fa5-96e8-7cec8d6c9ac9.webp',
    '/images/Resort%20Rio/e7470abf-df19-4778-acdf-acae3be47dd9.webp',
  ],
  meta: {
    title: 'Resort Rio Arpora Wedding Venue in North Goa | Weddings Vibe',
    description: 'Resort Rio near Baga Beach offers a convention hall, lawn and banquet spaces for weddings of 30 to 1600 guests. Share your date and get a quote.',
  },
},
{
  slug: 'la-calypso',
  citySlug: 'goa',
  name: 'La Calypso',
  location: 'Baga Road, Calangute, North Goa',
  capacity: '50 - 900 guests',
  // FILL THIS: no rental price was available. Ask the client. 0 means "price on request".
  startingPrice: 0,
  startingPriceGuests: 600,
  priceIncludes: [
    'Lawn, poolside and indoor spaces',
    'Guest rooms on site (15 to 30)',
    'On-site parking (about 20 cars)',
  ],
  spaces: [
    'Lawn (up to 600 seated)',
    'Poolside lawn (up to 150 seated)',
    'Indoor hall (up to 50 seated)',
  ],
  images: [
    '/images/La%20Calypso/304c4c40-024b-4a8d-8ed3-8d0a2b43c355.jpg',
    '/images/La%20Calypso/35206bad-4cd4-47ab-a36b-788e75d00cd1.jpg',
    '/images/La%20Calypso/5daa1963-2abc-4491-8977-0a01883da89e.jpg',
    '/images/La%20Calypso/731e8a5f-2980-4272-bf41-281a5a8c1a4c.jpg',
    '/images/La%20Calypso/9db41730-b3bb-4bc8-b772-8e67113e0d5f.jpg',
    '/images/La%20Calypso/e83cf28d-0753-45ab-83d2-18e6ef9f1db4.jpg',
  ],
  meta: {
    title: 'La Calypso Calangute Wedding Venue in Goa | Weddings Vibe',
    description: 'La Calypso on Calangute-Baga Road has a lawn, a poolside lawn and an indoor hall, ideal for weddings of up to 900 guests. Send us your enquiry.',
  },
},
{
  slug: 'royal-orchid-beach-resort-and-spa',
  citySlug: 'goa',
  name: 'Royal Orchid Beach Resort & Spa',
  location: 'Utorda Beach Road, South Goa',
  capacity: '80 - 1000 guests',
  startingPrice: 2,
  startingPriceGuests: 800,
  priceIncludes: [
    'Venue rental for one day',
    'Main lawn, BBQ lawn and indoor hall',
    'Guest rooms on site (50 to 73)',
    'On-site parking (about 75 cars)',
  ],
  spaces: [
    'Main Lawn (up to 800 seated)',
    'BBQ Lawn (up to 500 seated)',
    'Season I indoor hall (up to 80 seated)',
  ],
  images: [
    '/images/Royal%20Orchid%20Beach%20Resort%20%26%20Spa%20-%20Goa/387937d5-465c-48cd-ba46-12d431d33a73.jpg',
    '/images/Royal%20Orchid%20Beach%20Resort%20%26%20Spa%20-%20Goa/4525eb96-264d-4a72-a582-2e707017c761.jpg',
    '/images/Royal%20Orchid%20Beach%20Resort%20%26%20Spa%20-%20Goa/5d7128d3-acb9-4a85-a81e-e6beff652a56.jpg',
    '/images/Royal%20Orchid%20Beach%20Resort%20%26%20Spa%20-%20Goa/b3386903-dd00-431a-962e-8cb9fdf6acb1.jpg',
    '/images/Royal%20Orchid%20Beach%20Resort%20%26%20Spa%20-%20Goa/cc4de305-b0b7-4276-8f9b-9d96b5354800.jpg',
    '/images/Royal%20Orchid%20Beach%20Resort%20%26%20Spa%20-%20Goa/da80e4a5-e626-4da2-80d3-6dfbd6052f5c.webp',
    '/images/Royal%20Orchid%20Beach%20Resort%20%26%20Spa%20-%20Goa/f3f6671b-9f0b-4bfb-999f-eb75e6c5451e.jpg',
  ],
  meta: {
    title: 'Royal Orchid Utorda Beach Wedding Venue | Weddings Vibe',
    description: 'Royal Orchid Beach Resort & Spa in Utorda has a main lawn, a BBQ lawn and an indoor hall for 80 to 1000 guests. Enquire about your wedding date.',
  },
},
{
  slug: 'itc-grand-goa',
  citySlug: 'goa',
  name: 'ITC Grand Goa, a Luxury Collection Resort & Spa',
  location: 'Arossim Beach Road, South Goa',
  capacity: '120 - 500 guests',
  startingPrice: 4,
  startingPriceGuests: 300,
  priceIncludes: [
    'Venue rental for one day',
    'Lawn and banquet hall access',
    'Guest rooms on site (100 to 246)',
  ],
  spaces: [
    'Banquet Hall (up to 300 seated)',
    'Lawn (up to 120 seated)',
  ],
  images: [
    '/images/ITC%20Grand%20Goa%2C%20a%20Luxury%20Collection%20Resort%20%26%20Spa%2C%20Goa/0e6b16b2-d627-4048-a8df-57d1351ef8a5.webp',
    '/images/ITC%20Grand%20Goa%2C%20a%20Luxury%20Collection%20Resort%20%26%20Spa%2C%20Goa/0e8138b8-2cd2-4ced-980d-37fecb0fe1a1.webp',
    '/images/ITC%20Grand%20Goa%2C%20a%20Luxury%20Collection%20Resort%20%26%20Spa%2C%20Goa/250bc5f2-f90f-4b10-af11-ce119ed5657f.webp',
    '/images/ITC%20Grand%20Goa%2C%20a%20Luxury%20Collection%20Resort%20%26%20Spa%2C%20Goa/2cec0e6a-7bbd-493e-a645-30c651481791.jpg',
    '/images/ITC%20Grand%20Goa%2C%20a%20Luxury%20Collection%20Resort%20%26%20Spa%2C%20Goa/ce31db7e-a555-45e3-9ffb-04d2921b4855.webp',
    '/images/ITC%20Grand%20Goa%2C%20a%20Luxury%20Collection%20Resort%20%26%20Spa%2C%20Goa/eebd4bf5-29c0-4c59-aedb-b5480c10b1de.png',
  ],
  meta: {
    title: 'ITC Grand Goa Arossim Luxury Wedding Venue | Weddings Vibe',
    description: 'Hold an intimate luxury wedding at ITC Grand Goa on Arossim Beach, with a banquet hall and lawn for 120 to 500 guests. Request a quote from us.',
  },
},
{
  slug: 'taj-exotica-resort-and-spa',
  citySlug: 'goa',
  name: 'Taj Exotica Resort & Spa',
  location: 'Calwaddo, Benaulim, South Goa',
  capacity: '180 - 600 guests',
  startingPrice: 10,
  startingPriceGuests: 240,
  priceIncludes: [
    'Venue rental for one day',
    'Lawn and indoor hall access',
    'Guest rooms on site (70 to 140)',
  ],
  spaces: [
    'Lawn (up to 240 seated)',
    'Indoor hall (up to 180 seated)',
  ],
  images: [
    '/images/Taj%20Exotica%20Resort%20%26%20Spa/05d114a3-25c5-4872-99eb-6fbb2a8ff914.webp',
    '/images/Taj%20Exotica%20Resort%20%26%20Spa/098fb3b9-d100-4662-91d6-d12188eac197.webp',
    '/images/Taj%20Exotica%20Resort%20%26%20Spa/1947124e-1735-473f-a7b5-f799bb31a8cf_compressed.webp',
    '/images/Taj%20Exotica%20Resort%20%26%20Spa/37a6ccf1-ff12-4919-99cd-cffe0c3572a9.webp',
    '/images/Taj%20Exotica%20Resort%20%26%20Spa/6b9fdbd4-72cc-4103-b756-5db570d1d397_compressed.webp',
  ],
  meta: {
    title: 'Taj Exotica Benaulim Luxury Wedding Venue | Weddings Vibe',
    description: 'Taj Exotica Resort & Spa in Benaulim is a premium beachfront wedding venue with a lawn and indoor hall for 180 to 600 guests. Enquire with us.',
  },
},
{
  slug: 'grand-hyatt-goa',
  citySlug: 'goa',
  name: 'Grand Hyatt Goa',
  location: 'Bambolim, near Goa University, North Goa',
  capacity: '30 - 600 guests',
  // FILL THIS: no rental price was available. Ask the client. 0 means "price on request".
  startingPrice: 0,
  startingPriceGuests: 400,
  priceIncludes: [
    'Lawn, terrace and ballroom spaces',
    'Guest rooms on site (30 to 313)',
    'On-site parking (about 100 cars)',
  ],
  spaces: [
    'Lawn (up to 400 seated)',
    'Atrium (up to 400 seated)',
    'Terrace (up to 350 seated)',
    'Grand Ballroom (up to 260 seated)',
    'Salao hall (up to 120 seated)',
    'Boardrooms (up to 30 seated)',
  ],
  images: [
    '/images/Grand%20Hyatt/07ee6065-27f1-41ed-9d8b-cd98f3ca4cb2.jpg',
    '/images/Grand%20Hyatt/10082980-7ffe-4a49-83be-cd03aa8bd9fd_compressed.webp',
    '/images/Grand%20Hyatt/3e6236ba-77d3-43b2-8056-2b2ebf8c1721.webp',
    '/images/Grand%20Hyatt/3ff39f61-fb52-4f2a-827a-18d059775efc.webp',
    '/images/Grand%20Hyatt/40d11df3-134a-4498-b379-b321be4a7235.webp',
    '/images/Grand%20Hyatt/dcc37457-aee0-487d-bab3-7982161d36f7.webp',
  ],
  meta: {
    title: 'Grand Hyatt Goa Bambolim Wedding Venue | Weddings Vibe',
    description: 'Grand Hyatt Goa in Bambolim offers a grand ballroom, atrium, terrace and lawn for weddings of up to 600 guests. Send an enquiry for dates and pricing.',
  },
},
{
  slug: 'alila-diwa-goa',
  citySlug: 'goa',
  name: 'Alila Diwa Goa - A Hyatt Brand',
  location: 'Majorda, South Goa',
  capacity: '14 - 450 guests',
  startingPrice: 0.7,
  startingPriceGuests: 275,
  priceIncludes: [
    'Venue rental for one day',
    'Ballroom, lawn and poolside spaces',
    'Guest rooms on site (70 to 153)',
    'On-site parking (about 30 cars)',
  ],
  spaces: [
    'Ballroom (up to 275 seated)',
    'Ballroom Lawn (up to 80 seated)',
    'Poolside Lawn (up to 50 seated)',
    'Small ballroom (up to 14 seated)',
  ],  
  images: [
    '/images/Alila%20Diwa%20Goa%20-%20A%20Hyatt%20Brand/1455a250-e5b4-4b1a-aa6e-150befb0edfe.jpg',
    '/images/Alila%20Diwa%20Goa%20-%20A%20Hyatt%20Brand/3b433da4-5fb0-4194-803c-8dd53f158c97.jpg',
    '/images/Alila%20Diwa%20Goa%20-%20A%20Hyatt%20Brand/4f5cb036-852f-48c1-ba92-324755ad5c2d.jpg',
    '/images/Alila%20Diwa%20Goa%20-%20A%20Hyatt%20Brand/59ddf25a-f034-42b9-a3df-838002a09118.jpg',
    '/images/Alila%20Diwa%20Goa%20-%20A%20Hyatt%20Brand/f34b0bce-35b4-4d4b-a87e-2bcfc3d462ff.jpg',
    '/images/Alila%20Diwa%20Goa%20-%20A%20Hyatt%20Brand/f835124d-5cde-4309-92dc-46a3ac1d191c.jpg',
  ],
  meta: {
    title: 'Alila Diwa Majorda Wedding Venue in Goa | Weddings Vibe',
    description: 'Alila Diwa Goa in Majorda is a calm resort for small to mid-size weddings, with a ballroom, lawn and poolside space for up to 450 guests. Enquire now.',
  },
},
 

];

// Find a city by its URL slug; return undefined when there is no match.
export function getCityBySlug(slug) {
  return cities.find((city) => city.slug === slug);
}

// Return each venue once for the city slug you provide.
export function getVenuesByCity(citySlug) {
  return venues.filter((venue, index) => {
    // Keep only the first copy if a venue was added more than once.
    return venue.citySlug === citySlug &&
      venues.findIndex((item) => item.citySlug === citySlug && item.slug === venue.slug) === index;
  });
}

// Find one venue using both its city slug and venue slug; return undefined when there is no match.
export function getVenue(citySlug, venueSlug) {
  return venues.find((venue) => venue.citySlug === citySlug && venue.slug === venueSlug);
}
  
