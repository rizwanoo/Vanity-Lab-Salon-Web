import { ServiceItem, GalleryItem } from '../types';

export const BUSINESS_INFO = {
  name: 'Vanity Lab Salon & Spa Bahrain',
  shortName: 'Vanity Lab',
  tagline: 'Beauty. Confidence. Style. Experience.',
  description:
    'A high-end boutique beauty salon and wellness sanctuary in Adliya, Manama, Bahrain. Specializing in Italian Nashi Argan hair therapy, couture blowouts, designer gel nail art, advanced skin facials, and indulgent spa rituals.',
  address: {
    building: 'Building No. 846, Shop No. 15',
    street: 'Road 2717',
    block: 'Block 327, Al Adliya',
    city: 'Manama',
    country: 'Bahrain',
    landmark: 'Near KFC Adliya & Baskin Robbins',
    fullFormatted: 'Shop 15, Building 846, Road 2717, Block 327, Adliya, Manama, Bahrain',
    coordinates: {
      lat: 26.215715,
      lng: 50.588498,
    },
  },
  phone: '+973 1700 3769',
  phoneClean: '+97317003769',
  whatsapp: '+973 3215 5410',
  whatsappLink: 'https://wa.me/97332155410',
  googleBookingFormUrl:
    'https://docs.google.com/forms/d/e/1FAIpQLScUqyXI34eOF54Lddew5wzE_NQUJO2kzTf1ZxVJ4n2XGIvutA/viewform?usp=sf_link',
  googleMapsUrl: 'https://goo.gl/maps/HRKazNv4wF1KxEbn8',
  social: {
    instagram: 'https://www.instagram.com/vanitylab_bh/?hl=en',
    instagramHandle: '@vanitylab_bh',
    facebook: 'https://www.facebook.com/352038455278554',
    threads: 'https://www.threads.com/@vanitylab_bh',
    curationHandle: '@shweetmirchi',
  },
  openingHours: [
    { days: 'Sunday – Wednesday', hours: '10:00 AM – 9:00 PM' },
    { days: 'Thursday – Saturday', hours: '10:00 AM – 10:00 PM' },
  ],
  paymentMethods: ['BenefitPay', 'Debit & Credit Cards', 'Cash'],
  googleRating: {
    stars: 4.5,
    totalReviews: '130+',
    verifiedOn: 'Google Business Profile',
  },
};

export const SERVICES_LIST: ServiceItem[] = [
  // Hair
  {
    id: 'nashi-argan-treatment',
    category: 'hair',
    categoryLabel: 'Hair Care & Therapy',
    name: 'Nashi Argan Luxury Hair Therapy',
    shortDesc:
      'Signature Italian organic argan oil infusion delivering extraordinary mirror shine, deep hydration, and frizz control.',
    fullDesc:
      'Our flagship restorative treatment using original Italian Nashi Argan professional formulations. Deeply penetrates weakened hair fibers, restores elasticity, revitalizes dry or chemically treated hair, and leaves locks silky, lightweight, and intensely luminous.',
    image: '/images/hair_transformation_styling.jpg',
    price: '18 BD',
    duration: '60 – 75 mins',
    featured: true,
    highlightTag: 'Signature Ritual',
  },
  {
    id: 'signature-blowdry-styling',
    category: 'hair',
    categoryLabel: 'Hair Care & Therapy',
    name: 'Couture Blow-Dry & Glamour Waves',
    shortDesc:
      'Professional wash, nourishing conditioning, and voluminous runway-finish blow-dry or textured waves.',
    fullDesc:
      'Indulge in a relaxing scalp cleanse followed by a tailored blowout designed for longevity, movement, and glass-like shine. Styled straight, bouncy, or with glamorous Hollywood waves.',
    image: '/images/hair_transformation_styling.jpg',
    duration: '45 mins',
    featured: true,
  },
  {
    id: 'precision-haircut-restyle',
    category: 'hair',
    categoryLabel: 'Hair Care & Therapy',
    name: 'Bespoke Haircut & Restyle',
    shortDesc:
      'Personalized consultation, face-framing precision cut, and finishing blowout for timeless or bold silhouettes.',
    fullDesc:
      'Our master hair stylists analyze your facial geometry, hair density, and lifestyle to craft a signature silhouette, from chic bobs and layered butterflies to subtle split-end dusting.',
    image: '/images/hair_transformation_styling.jpg',
    duration: '60 mins',
  },
  {
    id: 'deep-nourishing-hair-mask',
    category: 'hair',
    categoryLabel: 'Hair Care & Therapy',
    name: 'Intensive Scalp & Moisture Mask',
    shortDesc:
      'Concentrated botanical moisture bath with invigorating scalp stimulation and steam infusion.',
    fullDesc:
      'Recharges dehydrated, sun-stressed hair with vital ceramides and plant proteins. Includes gentle scalp massage techniques to boost follicle circulation and promote healthy growth.',
    image: '/images/hair_transformation_styling.jpg',
    duration: '45 mins',
  },

  // Nails
  {
    id: 'gel-couture-manicure',
    category: 'nails',
    categoryLabel: 'Nail Studio',
    name: 'Gel Couture Manicure & Art',
    shortDesc:
      'Flawless cuticle treatment, nail shaping, premium gel polish, and optional custom nail art or chrome finish.',
    fullDesc:
      'Experience meticulous Russian-style cuticle preparation, strength-reinforcing base coats, and high-gloss or matte gel polishes that stay chip-free for up to 3 weeks.',
    image: '/images/nail_art_manicure.jpg',
    duration: '60 mins',
    featured: true,
    highlightTag: 'Client Favorite',
  },
  {
    id: 'deluxe-spa-pedicure',
    category: 'nails',
    categoryLabel: 'Nail Studio',
    name: 'Deluxe Rejuvenating Spa Pedicure',
    shortDesc:
      'Warm aromatic foot soak, gentle exfoliating sugar scrub, callus softening, massage, and precision polish.',
    fullDesc:
      'A therapeutic ritual for tired feet. Includes essential oil foot bath, smoothing exfoliation, hydrating mask wrap with hot towels, and flawless toenail shaping and lacquering.',
    image: '/images/nail_art_manicure.jpg',
    duration: '60 mins',
    featured: true,
  },
  {
    id: 'classic-manicure-pedicure-duo',
    category: 'nails',
    categoryLabel: 'Nail Studio',
    name: 'Classic Mani-Pedi Pampering Duo',
    shortDesc:
      'Harmonious dual grooming service for hands and feet with conditioning botanicals and high-shine lacquer.',
    fullDesc:
      'The quintessential maintenance ritual. Perfect shaping, clean cuticles, light massage, and your favorite selection from our extensive seasonal polish collection.',
    image: '/images/nail_art_manicure.jpg',
    duration: '75 mins',
  },

  // Waxing & Threading
  {
    id: 'eyebrow-threading-shaping',
    category: 'waxing',
    categoryLabel: 'Threading & Waxing',
    name: 'Architectural Eyebrow Threading & Shaping',
    shortDesc:
      'High-precision cotton thread shaping to accentuate your natural brow arch with clean, crisp lines.',
    fullDesc:
      'Gentle on sensitive facial skin, our estheticians sculpt balanced, defined eyebrows with surgical precision, clearing stray hairs and framing your eyes effortlessly.',
    image: '/images/spa_facial_relaxation.jpg',
    duration: '20 mins',
  },
  {
    id: 'full-face-threading-waxing',
    category: 'waxing',
    categoryLabel: 'Threading & Waxing',
    name: 'Full Face Silk Waxing & Threading',
    shortDesc:
      'Complete facial hair removal leaving skin ultra-smooth, makeup-ready, and luminous.',
    fullDesc:
      'Thorough hair removal across forehead, cheeks, upper lip, chin, and sideburns with soothing post-wax cooling aloe gel to prevent redness.',
    image: '/images/spa_facial_relaxation.jpg',
    duration: '35 mins',
  },
  {
    id: 'body-silk-waxing',
    category: 'waxing',
    categoryLabel: 'Threading & Waxing',
    name: 'Full Arms & Legs Silk Waxing',
    shortDesc:
      'Hygienic hot and strip wax formulations enriched with chamomile for long-lasting, feather-soft skin.',
    fullDesc:
      'Gentle yet efficient waxing using salon-grade wax formulated for Middle Eastern heat and sensitive skin. Leaves limbs silky smooth for 4 to 6 weeks.',
    image: '/images/spa_facial_relaxation.jpg',
    duration: '50 mins',
  },

  // Skin & Facial
  {
    id: 'deep-clarifying-facial',
    category: 'skin',
    categoryLabel: 'Skin & Facial Care',
    name: 'Deep Pore Clarifying & Glow Facial',
    shortDesc:
      'Ultrasonic pore cleansing, gentle steaming, soothing extraction, and oxygenating moisture infusion.',
    fullDesc:
      'Targets congested pores, environmental pollution, and dull complexion. Includes customized enzymatic peel, decongesting treatment, and a cooling hyaluronic treatment mask.',
    image: '/images/spa_facial_relaxation.jpg',
    duration: '60 mins',
    featured: true,
  },
  {
    id: 'radiance-face-bleach',
    category: 'skin',
    categoryLabel: 'Skin & Facial Care',
    name: 'Radiance Face Bleach & Brightening',
    shortDesc:
      'Dermatologically balanced brightening formula for an even skin tone, luminous radiance, and soft peach fuzz lightening.',
    fullDesc:
      'A classic beauty favorite in Bahrain. Lightens fine facial hair seamlessly into the skin tone while imparting a healthy golden glow for special celebrations.',
    image: '/images/spa_facial_relaxation.jpg',
    duration: '30 mins',
  },

  // Spa & Relaxation
  {
    id: 'aromatic-foot-spa-reflexology',
    category: 'spa',
    categoryLabel: 'Spa & Wellness',
    name: 'Aromatic Herbal Foot Spa & Soak',
    shortDesc:
      'Therapeutic warm botanical soak, pressure-point reflexology massage, and tension relief.',
    fullDesc:
      'Relax in our dedicated Adliya quiet lounge while your feet and calves are bathed in mineral-rich sea salts, followed by a targeted pressure massage that melts systemic fatigue.',
    image: '/images/spa_facial_relaxation.jpg',
    duration: '45 mins',
    featured: true,
    highlightTag: 'Pure Relaxation',
  },
  {
    id: 'scalp-neck-de-stress-massage',
    category: 'spa',
    categoryLabel: 'Spa & Wellness',
    name: 'Scalp & Shoulder Tension Release Melt',
    shortDesc:
      'Targeted tension relief utilizing warm botanical essential oils to soothe neck, shoulder, and cranial strain.',
    fullDesc:
      'An express wellness ritual paired perfectly with a blow-dry or hair treatment. Releases upper back tension, stimulates cranial circulation, and induces tranquil calm.',
    image: '/images/salon_interior_reception.jpg',
    duration: '30 mins',
  },
];

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: 'gal-1',
    title: 'Adliya Styling Sanctuary',
    category: 'salon',
    categoryLabel: 'Salon Interior',
    image: '/images/hero_cinematic_salon.jpg',
    caption: 'Halo-lit bespoke mirrors and marble beauty stations in Adliya Block 327.',
    aspectRatio: 'landscape',
  },
  {
    id: 'gal-2',
    title: 'Nashi Argan Transformation',
    category: 'hair',
    categoryLabel: 'Hair Artistry',
    image: '/images/hair_transformation_styling.jpg',
    caption: 'Silky, reflective bounce and dimensional shine after signature Argan therapy.',
    aspectRatio: 'portrait',
  },
  {
    id: 'gal-3',
    title: 'Couture Gel Art & Coral Accents',
    category: 'nails',
    categoryLabel: 'Nail Couture',
    image: '/images/nail_art_manicure.jpg',
    caption: 'Bespoke manicure with delicate gold foil detail on warm coral tones.',
    aspectRatio: 'square',
  },
  {
    id: 'gal-4',
    title: 'Tranquil Facial & Skin Treatment',
    category: 'skin',
    categoryLabel: 'Facial & Skin',
    image: '/images/spa_facial_relaxation.jpg',
    caption: 'Rejuvenating botanical mask and deeply hydrating facial in our private spa suites.',
    aspectRatio: 'portrait',
  },
  {
    id: 'gal-5',
    title: 'Boutique Reception & Lounge',
    category: 'salon',
    categoryLabel: 'Salon Interior',
    image: '/images/salon_interior_reception.jpg',
    caption: 'Warm velvet peach seating and ambient illumination welcoming clients.',
    aspectRatio: 'landscape',
  },
  {
    id: 'gal-6',
    title: 'Precision Styling & Blowout',
    category: 'hair',
    categoryLabel: 'Hair Artistry',
    image: '/images/hair_transformation_styling.jpg',
    caption: 'Effortless glamour waves styled for evening celebrations in Manama.',
    aspectRatio: 'portrait',
  },
];

export const VERIFIED_REVIEWS = [
  {
    name: 'Fatima Al-Khalifa',
    rating: 5,
    date: 'Verified Client · Manama',
    comment:
      'The Nashi Argan hair treatment here is hands down the best in Bahrain. My hair was silky, so soft and shiny for weeks. The salon is immaculately clean, cozy, and the staff in Adliya are so friendly and polite!',
  },
  {
    name: 'Sarah Jenkins',
    rating: 5,
    date: 'Verified Client · Adliya',
    comment:
      'Vanity Lab has become my weekly ritual. Their blow-dry holds up even in the Bahrain humidity, and their gel manicure work is perfection. Booking via WhatsApp is so fast and convenient.',
  },
  {
    name: 'Noor M.',
    rating: 5,
    date: 'Verified Client · Bahrain',
    comment:
      'Super relaxing atmosphere right in the heart of Adliya. Beautiful decor, attentive service, and very reasonable prices for the luxury experience they provide. BenefitPay makes checkout a breeze.',
  },
  {
    name: 'Reem Ebrahim',
    rating: 4.8,
    date: 'Verified Client · Manama',
    comment:
      'Loved my facial and eyebrow threading! The esthetician was gentle and took great care with my sensitive skin. Highly recommend Vanity Lab to anyone looking for a reliable, lovely beauty team.',
  },
];
