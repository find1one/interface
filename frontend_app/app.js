const images = {
  tokyo: "https://lh3.googleusercontent.com/aida-public/AB6AXuA2vfyFg568xSeVQgRNG9o2IY_J03tyLh6cSQZF806tFYYXUNxdP8xY1J3_PRv5l1bn2GjDL1l-IjhPRHye2DdGPHMeYY0cBmpsFjiW2kwDVtVfVfWiTizrHCUmCrBFz33dIwyaZOXPTugNlOGqJ3dU2bgYHld9tfvDNySKOBpOE14dNINYWxsLEhFx-7dgoCFiG_7wpkr7V-1vL9WYassJfUeblW2f4dO8z5DfBPULjuW57U2SllX3gZUV5Wm5ooNr2GYhT4fcvp8",
  santorini: "https://lh3.googleusercontent.com/aida-public/AB6AXuCtvYGuhrhG61NkXeFiH83aldHlIkXvhNPri-GGEvdxl5VlW17MdCNDEwPCvSGTzhdUlHlyjrzZijGTFvMBMBrvZRxtDfRaEoR9buKMQaE8EdswCIdHy9Iu-dSFxY7Ft0vdYIdXk9FWU3QmZkWTk55VaSbTdh2vhjaY1-1RzcGLzAdzWCf85z8ojWmvuR_bRWHTTQsoV3KnSGOEI9KmndngOa2lVe4YBYhZ4UYTq4_tccxMxlSZpjeiWkNyC8CfZC9LlfcV_piCOtc",
  bali: "https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=1200&q=80",
  maui: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=80",
  interlaken: "https://images.unsplash.com/photo-1531366936337-7c912a4589a7?auto=format&fit=crop&w=1200&q=80",
  osaka: "https://images.unsplash.com/photo-1590559899731-a382839e5549?auto=format&fit=crop&w=1200&q=80",
  costaRica: "https://lh3.googleusercontent.com/aida-public/AB6AXuAe4o60Ly0TVLz18qsJVnnP6B0ZUf10yFs13JURfhcebNJRVomVEFNaQXgZPNJjf40hPlef3UwFF7bq7gzrSpBcNteeWMuzvqS0ben5tNCURWJUddVY9RtqmQLEFuUucJEtiuJvgWOkhDQqis8WrMZLpP69ceOc7R1_4DLYvT67P5k8Ow2rmZmoCh6v5gtH6o1MKdiYEmzX8ASAtb1TWP1RIyDoBgmx6tQnSD6LGxtHmKG3pq7lUgqv1iujzsFboq_PjBIEyEO6_Ls",
  kyoto: "https://lh3.googleusercontent.com/aida-public/AB6AXuA-31OOZvn8lNHLI2hfdjfY_fMy4SHkekgwCYFZiCNW4MY2lFI1De60_uHrQHTyuoA5icTou2uxDgw6DgL0R4PKxbdXG0WMi23YKWW3kUTWSMZbTCgI9YEwOblB8UaLFdsGfuECLMbmf36G8Kec_8bS6FpTOF_i1QP8_bHAB09NyUURYlp_5qviNrPeG5Sswlxf5IYjj7SmWcstTCIc-hpu6Q5n2vRqSdaNBdU-h-paTJAmL9_LsHL03giOnkzFVnqTkuEhul2cr6Y",
  fushimi: "https://lh3.googleusercontent.com/aida-public/AB6AXuDPXzIi6VRmsD7RPjjetHYhK06qsDNbDNVwjvAJfcQO47Xp6pEqulQ8v2HZXMIRiKrBYsfxF6YwK-SdM4OPoCydTqHnY4Aj-740IqWjbAYz4SiBmY_pu9f2KobrPpOozT3c4sZwh98OYFPinhA7F_ffa7ylJ_gSdLI6DYV9wv8gyliBSiXUKj2h-pWoaiwdZJYMHAILX2T5kzveA5teLZW00BAZmYFt7ml_PkxzqJaWgOJ6vXJUOozNEvNWKtSB73QxACCXiJm9D5A",
  kiyomizu: "https://lh3.googleusercontent.com/aida-public/AB6AXuDDjEI3fJcE2ubR5EW6h55PEG3ZSdZUfuZUzR9T9Ykbnf_bUCjbfyMVkl5q8mfIlZNAJFzJb5o-Fh1Utx58iD9smbAJXBRSJ9YSVZpoW3PgttLTWQ4jgyHK0iefwOhnoM-zWtR_d0Upeyk5RN4pgkX_zSne_unG-FMrV_fMMzCGa4OxDpAmPLaa_K-Xl0JyAAnFEHJCfkZz1-8Rox_5jUnaGzolOYQ__3HHEdr822BuiClE9hWM-tieVVkL8b7RDKohmfVP0r0KKt0",
  museum: "https://lh3.googleusercontent.com/aida-public/AB6AXuC4L6VKHOTtwJjkuUT1ZPrACrgilBhvwwHXxi4C_QXj-1W2vG7skDGPcC4ukxqCEDCMdttyJYjC_EJt9hgnna00HkCfaduvmTBpEuHbHOtGboWYT-2yOYf9gUj98shVqIzEzrr-i1gTUWopHEd7_9sj_h8sJIP6cdpCpfSKBz_VVG8CGpPUQBRmEaVeGG0VEcCwAOFAENDRYeOnM0m3TpvZtpvZPVNvJkNfnjs-y4_1kFYkC8WRY4NbYmisTEIS0umB6R1elT-qdzc",
  avatar: "https://lh3.googleusercontent.com/aida-public/AB6AXuBB_zq-3gZpOKtTE3z_ZutUqU4WeOmrGb3-VBtleLB2ieT8kmkf6xRlVx4srzvgSl_83m4vb6sD8WxExJWZ6fm1iNSQB8ShLOEJWL6qDeKb6yOEWgjT2QAETnjrb4k7pM0loNP4EcOsOklR2d5yH1_Ib7RrV_xAHPyEzEWjhzJXMt0XoqAv95rEQCpGxWgQTnE7b43FBZ5ZZfDEDA6v5Ws96-hVIdx_BMkFPsaSWDd_LDnTJmxF3TQfqhSXCElfIRjCFIEu5S8CAgc"
};

const vancouverImages = {
  seawall: "https://commons.wikimedia.org/wiki/Special:FilePath/Vancouver%20%28BC%2C%20Canada%29%2C%20Stanley%20Park%2C%20Stanley%20Park%20Seawall%20Path%20--%202022%20--%202056.jpg?width=1200",
  granville: "https://commons.wikimedia.org/wiki/Special:FilePath/Granville%20Island%20Public%20Market%201.jpg?width=1200",
  capilano: "https://commons.wikimedia.org/wiki/Special:FilePath/Suspension%20bridge%20crossing%20Capilano%20River%20%2813249473553%29.jpg?width=1200"
};

const seed = {
  destinations: [
    {
      id: "kyoto",
      title: "Kyoto, Japan",
      location: "Kansai, Japan",
      category: "Culture",
      rating: "4.8",
      image: images.kyoto,
      description: "Historic temples, compact neighborhoods, bamboo paths, and refined food streets for a balanced cultural trip.",
      note: "Best in spring and early autumn",
      attractions: [
        { id: "fushimi", name: "Fushimi Inari-taisha", time: "2.5 hr", image: images.fushimi },
        { id: "kiyomizu", name: "Kiyomizu-dera", time: "2 hr", image: images.kiyomizu },
        { id: "arashiyama", name: "Arashiyama Bamboo Grove", time: "1.5 hr", image: images.kyoto }
      ]
    },
    {
      id: "tokyo",
      title: "Tokyo, Japan",
      location: "Kanto, Japan",
      category: "City",
      rating: "4.7",
      image: images.tokyo,
      description: "High-density neighborhoods, museums, transit access, and a strong food itinerary for first-time visitors.",
      note: "Excellent for 5 to 7 day plans",
      attractions: [
        { id: "museum", name: "Tokyo National Museum", time: "2 hr", image: images.museum },
        { id: "shinjuku", name: "Shinjuku Gyoen", time: "1.5 hr", image: images.tokyo }
      ]
    },
    {
      id: "santorini",
      title: "Santorini, Greece",
      location: "Cyclades, Greece",
      category: "Relaxation",
      rating: "4.6",
      image: images.santorini,
      description: "Bright cliffside villages, short scenic walks, and slower-paced island planning.",
      note: "Popular for couples and photography",
      attractions: [
        { id: "oia-sunset", name: "Oia Sunset Walk", time: "2 hr", image: images.santorini },
        { id: "fira-caldera", name: "Fira Caldera Trail", time: "3 hr", image: images.santorini },
        { id: "red-beach", name: "Red Beach", time: "1.5 hr", image: images.santorini }
      ]
    },
    {
      id: "costa-rica",
      title: "Costa Rica Eco Lodge",
      location: "La Fortuna, Costa Rica",
      category: "Nature",
      rating: "4.5",
      image: images.costaRica,
      description: "Rainforest stays, nature routes, and compact adventure planning.",
      note: "Good for wildlife and low-key adventure",
      attractions: [
        { id: "arenal-volcano", name: "Arenal Volcano National Park", time: "3 hr", image: images.costaRica },
        { id: "la-fortuna-waterfall", name: "La Fortuna Waterfall", time: "2 hr", image: images.costaRica },
        { id: "mistico-bridges", name: "Mistico Hanging Bridges", time: "2.5 hr", image: images.costaRica }
      ]
    }
  ],
  itineraries: [
    {
      id: "tokyo-spring",
      title: "Tokyo Spring Trip",
      destinationId: "tokyo",
      destination: "Tokyo, Japan",
      startDate: "2026-04-12",
      endDate: "2026-04-18",
      dates: "Apr 12 - Apr 18, 2026",
      attractions: 12,
      status: "Upcoming",
      items: [
        { day: 1, time: "09:20", title: "Flight JL 001", location: "Arrival at HND", note: "Terminal 3, check rail pass" },
        { day: 1, time: "13:30", title: "Hotel Check-in", location: "Shinjuku", note: "Park Hyatt Tokyo" },
        { day: 2, time: "15:00", title: "Tokyo National Museum", location: "Ueno Park", note: "Reserve 2 hours" },
        { day: 2, time: "19:30", title: "Dinner Reservation", location: "Ginza", note: "Confirm by 17:00" }
      ]
    },
    {
      id: "kyoto-weekend",
      title: "Kyoto Weekend",
      destinationId: "kyoto",
      destination: "Kyoto, Japan",
      startDate: "2026-07-10",
      endDate: "2026-07-13",
      dates: "Jul 10 - Jul 13, 2026",
      attractions: 8,
      status: "Draft",
      items: [
        { day: 1, time: "08:30", title: "Fushimi Inari-taisha", location: "Fushimi Ward", note: "Start before crowds" },
        { day: 2, time: "13:00", title: "Kiyomizu-dera", location: "Higashiyama", note: "Walk through Sannenzaka" }
      ]
    }
  ],
  history: [
    { destination: "Osaka Food Weekend", date: "Completed Mar 02, 2026", status: "Completed" },
    { destination: "Hokkaido Winter Route", date: "Completed Jan 18, 2026", status: "Completed" }
  ]
};

const homeCategories = ["Beach", "Mountain", "City", "Food", "Culture", "Family", "Adventure", "Relaxation"];
const homeCategoryAliases = {
  Beach: ["Beach", "Relaxation"],
  Mountain: ["Mountain", "Nature"],
  Food: ["Food", "City"],
  Adventure: ["Adventure", "Nature"],
  Culture: ["Culture", "City"],
  Family: ["Family", "City", "Relaxation"],
  Relaxation: ["Relaxation", "Beach", "Nature"]
};
let homeExtraRecommendations = [
  {
    id: "bali",
    title: "Bali, Indonesia",
    location: "Indonesia",
    category: "Beach",
    rating: "4.8",
    image: images.bali,
    description: "Calm beaches, temple stops, cafes, and flexible day trips for a slower island route.",
    note: "Good for relaxed 4 to 6 day plans",
    attractions: [
      { id: "uluwatu-temple", name: "Uluwatu Temple", time: "2 hr", image: images.bali },
      { id: "ubud-rice-terraces", name: "Ubud Rice Terraces", time: "2.5 hr", image: images.bali },
      { id: "seminyak-beach", name: "Seminyak Beach", time: "2 hr", image: images.bali }
    ]
  },
  {
    id: "maui",
    title: "Maui, Hawaii",
    location: "Hawaii, United States",
    category: "Beach",
    rating: "4.7",
    image: images.maui,
    description: "Coastal drives, beach time, sunrise viewpoints, and compact nature stops.",
    note: "Best with a rental car",
    attractions: [
      { id: "haleakala", name: "Haleakala Sunrise", time: "3 hr", image: images.maui },
      { id: "road-to-hana", name: "Road to Hana", time: "6 hr", image: images.maui },
      { id: "kaanapali-beach", name: "Kaanapali Beach", time: "2 hr", image: images.maui }
    ]
  },
  {
    id: "interlaken",
    title: "Interlaken, Switzerland",
    location: "Bernese Oberland, Switzerland",
    category: "Mountain",
    rating: "4.8",
    image: images.interlaken,
    description: "Lake towns, mountain railways, scenic viewpoints, and light adventure planning.",
    note: "Great for train-based routes",
    attractions: [
      { id: "harder-kulm", name: "Harder Kulm Viewpoint", time: "2 hr", image: images.interlaken },
      { id: "lake-brienz", name: "Lake Brienz Cruise", time: "2.5 hr", image: images.interlaken },
      { id: "jungfraujoch", name: "Jungfraujoch Day Trip", time: "6 hr", image: images.interlaken }
    ]
  },
  {
    id: "osaka",
    title: "Osaka, Japan",
    location: "Kansai, Japan",
    category: "Food",
    rating: "4.6",
    image: images.osaka,
    description: "Dense food streets, easy transit, markets, and short cultural side trips.",
    note: "Easy to combine with Kyoto",
    attractions: [
      { id: "dotonbori", name: "Dotonbori Food Street", time: "2 hr", image: images.osaka },
      { id: "kuromon-market", name: "Kuromon Ichiba Market", time: "1.5 hr", image: images.osaka },
      { id: "osaka-castle", name: "Osaka Castle", time: "2 hr", image: images.osaka }
    ]
  }
];

const additionalDestinations = [
  {
    id: "barcelona",
    title: "Barcelona, Spain",
    location: "Catalonia, Spain",
    category: "Culture",
    rating: "4.7",
    image: "https://images.unsplash.com/photo-1539037116277-4db20889f2d4?auto=format&fit=crop&w=1200&q=80",
    description: "Architecture-heavy neighborhoods, tapas routes, beaches, and walkable districts for mixed culture and food plans.",
    note: "Strong option for first-time Europe routes",
    attractions: [
      { id: "sagrada-familia", name: "Sagrada Familia", time: "2 hr", image: "https://images.unsplash.com/photo-1585644877206-5b09c934b03c?auto=format&fit=crop&w=1200&q=80" },
      { id: "park-guell", name: "Park Guell", time: "2 hr", image: "https://images.unsplash.com/photo-1571768280823-002223e97d96?auto=format&fit=crop&w=1200&q=80" },
      { id: "gothic-quarter", name: "Gothic Quarter", time: "2.5 hr", image: "https://images.unsplash.com/photo-1523531294919-4bcd7c65e216?auto=format&fit=crop&w=1200&q=80" }
    ]
  },
  {
    id: "queenstown",
    title: "Queenstown, New Zealand",
    location: "Otago, New Zealand",
    category: "Adventure",
    rating: "4.8",
    image: "https://images.unsplash.com/photo-1507699622108-4be3abd695ad?auto=format&fit=crop&w=1200&q=80",
    description: "Lake views, mountain trails, high-adrenaline activities, and scenic drives for outdoor-focused itineraries.",
    note: "Best when paired with nearby national parks",
    attractions: [
      { id: "skyline-queenstown", name: "Skyline Queenstown", time: "2 hr", image: "https://images.unsplash.com/photo-1528164344705-47542687000d?auto=format&fit=crop&w=1200&q=80" },
      { id: "milford-sound", name: "Milford Sound Day Trip", time: "8 hr", image: "https://images.unsplash.com/photo-1600445991849-835579e7e67f?auto=format&fit=crop&w=1200&q=80" },
      { id: "lake-wakatipu", name: "Lake Wakatipu", time: "2 hr", image: "https://images.unsplash.com/photo-1507699622108-4be3abd695ad?auto=format&fit=crop&w=1200&q=80" }
    ]
  },
  {
    id: "paris",
    title: "Paris, France",
    location: "Ile-de-France, France",
    category: "City",
    rating: "4.7",
    image: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&w=1200&q=80",
    description: "Museums, food streets, compact transit, gardens, and classic landmarks for city and culture planning.",
    note: "Works well for 3 to 5 day museum routes",
    attractions: [
      { id: "louvre", name: "Louvre Museum", time: "3 hr", image: "https://images.unsplash.com/photo-1566139885695-7bd8f5adf8f6?auto=format&fit=crop&w=1200&q=80" },
      { id: "eiffel-tower", name: "Eiffel Tower", time: "2 hr", image: "https://images.unsplash.com/photo-1511739001486-6bfe10ce785f?auto=format&fit=crop&w=1200&q=80" },
      { id: "montmartre", name: "Montmartre Walk", time: "2 hr", image: "https://images.unsplash.com/photo-1549144511-f099e773c147?auto=format&fit=crop&w=1200&q=80" }
    ]
  },
  {
    id: "bangkok",
    title: "Bangkok, Thailand",
    location: "Central Thailand, Thailand",
    category: "Food",
    rating: "4.6",
    image: "https://images.unsplash.com/photo-1508009603885-50cf7c579365?auto=format&fit=crop&w=1200&q=80",
    description: "Street food, river temples, markets, and flexible day trips for budget-friendly urban exploration.",
    note: "Good for food-first routes",
    attractions: [
      { id: "grand-palace", name: "Grand Palace", time: "2.5 hr", image: "https://images.unsplash.com/photo-1562596127-3885a12dcdb6?auto=format&fit=crop&w=1200&q=80" },
      { id: "wat-arun", name: "Wat Arun", time: "1.5 hr", image: "https://images.unsplash.com/photo-1519451241324-20b4ea2c4220?auto=format&fit=crop&w=1200&q=80" },
      { id: "chatuchak", name: "Chatuchak Market", time: "3 hr", image: "https://images.unsplash.com/photo-1568191009535-7d8b407d389a?auto=format&fit=crop&w=1200&q=80" }
    ]
  },
  {
    id: "vancouver",
    title: "Vancouver, Canada",
    location: "British Columbia, Canada",
    category: "Family",
    rating: "4.6",
    image: vancouverImages.seawall,
    description: "Harbor walks, parks, easy nature access, and relaxed neighborhoods for family-friendly pacing.",
    note: "Good balance of city and nature",
    attractions: [
      { id: "stanley-park", name: "Stanley Park Seawall", time: "2.5 hr", image: vancouverImages.seawall },
      { id: "granville-island", name: "Granville Island", time: "2 hr", image: vancouverImages.granville },
      { id: "capilano", name: "Capilano Suspension Bridge", time: "2 hr", image: vancouverImages.capilano }
    ]
  },
  {
    id: "iceland-ring-road",
    title: "Iceland Ring Road",
    location: "Iceland",
    category: "Nature",
    rating: "4.8",
    image: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1200&q=80",
    description: "Waterfalls, black-sand beaches, glaciers, and long scenic drives for extended nature itineraries.",
    note: "Best for longer road-trip planning",
    attractions: [
      { id: "skogafoss", name: "Skogafoss", time: "1.5 hr", image: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1200&q=80" },
      { id: "jokulsarlon", name: "Jokulsarlon Glacier Lagoon", time: "2 hr", image: "https://images.unsplash.com/photo-1504829857797-ddff29c27927?auto=format&fit=crop&w=1200&q=80" },
      { id: "vik-beach", name: "Vik Black Sand Beach", time: "1.5 hr", image: "https://images.unsplash.com/photo-1476611338391-6f395a0ebc7b?auto=format&fit=crop&w=1200&q=80" }
    ]
  }
];

const destinationMetadata = {
  kyoto: { countryRegion: "Japan", budgetLevel: "Standard", travelStyles: ["Culture", "Food", "Walkable"], recommendedDuration: "3-5 days" },
  tokyo: { countryRegion: "Japan", budgetLevel: "Standard", travelStyles: ["Food", "Culture", "Family", "Walkable"], recommendedDuration: "1 week" },
  santorini: { countryRegion: "Greece", budgetLevel: "Premium", travelStyles: ["Relaxation", "Walkable"], recommendedDuration: "3-5 days" },
  "costa-rica": { countryRegion: "Costa Rica", budgetLevel: "Standard", travelStyles: ["Nature", "Adventure", "Relaxation"], recommendedDuration: "1 week" },
  bali: { countryRegion: "Indonesia", budgetLevel: "Standard", travelStyles: ["Relaxation", "Food", "Culture"], recommendedDuration: "3-5 days" },
  maui: { countryRegion: "United States", budgetLevel: "Premium", travelStyles: ["Nature", "Family", "Relaxation", "Adventure"], recommendedDuration: "1 week" },
  interlaken: { countryRegion: "Switzerland", budgetLevel: "Premium", travelStyles: ["Nature", "Adventure", "Walkable"], recommendedDuration: "3-5 days" },
  osaka: { countryRegion: "Japan", budgetLevel: "Standard", travelStyles: ["Food", "Culture", "Walkable"], recommendedDuration: "Weekend" },
  barcelona: { countryRegion: "Spain", budgetLevel: "Standard", travelStyles: ["Culture", "Food", "Walkable", "Family"], recommendedDuration: "3-5 days" },
  queenstown: { countryRegion: "New Zealand", budgetLevel: "Premium", travelStyles: ["Adventure", "Nature"], recommendedDuration: "1 week" },
  paris: { countryRegion: "France", budgetLevel: "Premium", travelStyles: ["Culture", "Food", "Walkable", "Family"], recommendedDuration: "3-5 days" },
  bangkok: { countryRegion: "Thailand", budgetLevel: "Economy", travelStyles: ["Food", "Culture", "Walkable"], recommendedDuration: "3-5 days" },
  vancouver: { countryRegion: "Canada", budgetLevel: "Standard", travelStyles: ["Family", "Nature", "Walkable", "Relaxation"], recommendedDuration: "3-5 days" },
  "iceland-ring-road": { countryRegion: "Iceland", budgetLevel: "Premium", travelStyles: ["Nature", "Adventure"], recommendedDuration: "2+ weeks" }
};

function enrichDestination(destination) {
  const metadata = destinationMetadata[destination.id] || {};
  return {
    countryRegion: destination.location?.split(", ").at(-1) || "",
    budgetLevel: "Standard",
    travelStyles: [destination.category].filter(Boolean),
    recommendedDuration: "3-5 days",
    keyAttractions: (destination.attractions || []).map((item) => item.name),
    ...destination,
    ...metadata
  };
}

function mergeDestinationData(primary, fallback) {
  if (!fallback) return enrichDestination(primary);
  const enrichedFallback = enrichDestination(fallback);
  return {
    ...enrichedFallback,
    ...primary,
    countryRegion: enrichedFallback.countryRegion || primary.countryRegion,
    budgetLevel: enrichedFallback.budgetLevel || primary.budgetLevel,
    travelStyles: enrichedFallback.travelStyles?.length ? enrichedFallback.travelStyles : primary.travelStyles || [],
    recommendedDuration: enrichedFallback.recommendedDuration || primary.recommendedDuration,
    keyAttractions: enrichedFallback.keyAttractions?.length ? enrichedFallback.keyAttractions : primary.keyAttractions || []
  };
}

seed.destinations = [...seed.destinations, ...additionalDestinations].map(enrichDestination);
homeExtraRecommendations = homeExtraRecommendations.map(enrichDestination);

const API_BASE = "http://localhost:4174/api";
const TODAY = formatDateValue(new Date());
const LOCAL_PREFERENCES_KEY = "skybound.localPreferenceExtensions";

const state = {
  route: "login",
  user: null,
  loginCountryCode: "+1",
  loginPhone: "",
  loginCode: "",
  codeCountdown: 0,
  searchQuery: "",
  searchResults: [],
  searchFilters: {
    category: [],
    location: [],
    budgetLevel: [],
    travelStyle: [],
    duration: [],
    rating: ""
  },
  selectedDestinationId: "kyoto",
  selectedDestination: null,
  selectedItineraryId: "",
  selectedMapPointId: "",
  mapMode: "destination",
  mapDestinationId: "",
  mapItineraryId: "",
  mapFailed: false,
  selectedTab: "savedTrips",
  showToast: "",
  apiError: "",
  previousRoute: "",
  notificationBackRoute: "",
  homeCategory: "",
  homeCategoryLocked: false,
  homeRecommendationLimit: 1,
  createTitle: "",
  createDestinationId: "",
  createNotes: "",
  createFromSuggestedPlan: false,
  createStartDate: "",
  createEndDate: "",
  activeCalendarField: "",
  calendarMonth: "2026-05",
  editingTimelineItemId: "",
  isAddingTimelineItem: false,
  selectedItineraryDay: 1,
  destinations: [],
  travelHistory: [],
  preferences: {
    preferenceTags: ["Food", "Culture", "Nature"],
    interests: ["Food", "Culture", "Nature"],
    budget: "Standard",
    pace: "Balanced",
    destinations: ["Beach", "Culture", "Food"],
    dietary: ["No restrictions"],
    accessibility: ["Low walking routes"],
    transport: ["Transit", "Walking"],
    language: "English (US)",
    currency: "USD ($)"
  },
  itineraries: [],
  savedDestinations: []
};

const app = document.getElementById("app");
let toastTimer = 0;
let codeTimer = 0;

function icon(name) {
  return `<span class="material-symbols-outlined">${name}</span>`;
}

function escapeHtml(value) {
  return String(value || "")
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll("\"", "&quot;");
}

function imageFallback(label = "Travel image") {
  const text = encodeURIComponent(String(label || "Travel image"));
  return `data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1200 800'%3E%3Cdefs%3E%3ClinearGradient id='g' x1='0' x2='1' y1='0' y2='1'%3E%3Cstop stop-color='%23d9f0f4'/%3E%3Cstop offset='1' stop-color='%23f7ecd8'/%3E%3C/linearGradient%3E%3C/defs%3E%3Crect width='1200' height='800' fill='url(%23g)'/%3E%3Cpath d='M150 585 390 330l160 170 95-105 305 320H150z' fill='%237ebf9e' opacity='.9'/%3E%3Ccircle cx='870' cy='170' r='86' fill='%23f1b65b'/%3E%3Ctext x='80' y='110' font-family='Arial,sans-serif' font-size='54' font-weight='700' fill='%233b4446'%3E${text}%3C/text%3E%3C/svg%3E`;
}

function attachImageFallbacks() {
  app.querySelectorAll("img").forEach((image) => {
    image.addEventListener("error", () => {
      if (image.dataset.fallbackApplied) return;
      image.dataset.fallbackApplied = "true";
      image.src = imageFallback(image.alt);
    }, { once: true });
  });
}

async function apiRequest(path, options = {}) {
  const response = await fetch(`${API_BASE}${path}`, {
    headers: {
      "Content-Type": "application/json",
      ...(options.headers || {})
    },
    ...options
  });

  const data = await response.json().catch(() => ({}));
  if (!response.ok) {
    throw new Error(data.error || `Request failed with status ${response.status}`);
  }
  return data;
}

function apiGet(path) {
  return apiRequest(path);
}

function apiPost(path, body) {
  return apiRequest(path, {
    method: "POST",
    body: JSON.stringify(body)
  });
}

function apiPut(path, body) {
  return apiRequest(path, {
    method: "PUT",
    body: JSON.stringify(body)
  });
}

function apiDelete(path) {
  return apiRequest(path, { method: "DELETE" });
}

function normalizeItineraryDays(trip) {
  return {
    ...trip,
    items: (trip.items || []).map((item) => {
      const sortOrder = Number.isInteger(item.sortOrder) ? item.sortOrder : 0;
      const encodedDay = Math.floor(sortOrder / 1000) + 1;
      return {
        ...item,
        day: sortOrder >= 1000 ? encodedDay : item.day || encodedDay,
        sortOrder: sortOrder % 1000
      };
    })
  };
}

function readLocalPreferenceExtensions() {
  try {
    const stored = window.localStorage.getItem(LOCAL_PREFERENCES_KEY);
    return stored ? JSON.parse(stored) : {};
  } catch (_error) {
    return {};
  }
}

function saveLocalPreferenceExtensions(preferences = state.preferences) {
  const preferenceTags = Array.isArray(preferences.preferenceTags) ? preferences.preferenceTags : [];
  const payload = {
    preferenceTags,
    interests: preferenceTags.filter((item) => filterOptions.travelStyle.includes(item)),
    destinations: preferenceTags.filter((item) => filterOptions.category.includes(item))
  };
  try {
    window.localStorage.setItem(LOCAL_PREFERENCES_KEY, JSON.stringify(payload));
  } catch (_error) {
    // Local persistence is best-effort; backend preferences still save core fields.
  }
  return payload;
}

function applyBootstrap(data) {
  state.user = data.user;
  state.destinations = data.destinations || [];
  state.itineraries = (data.itineraries || []).map(normalizeItineraryDays);
  const localPreferenceExtensions = readLocalPreferenceExtensions();
  state.preferences = { ...state.preferences, ...(data.preferences || {}), ...localPreferenceExtensions };
  state.preferences.interests = state.preferences.interests?.length ? state.preferences.interests : ["Food", "Culture", "Nature"];
  state.preferences.destinations = state.preferences.destinations?.length ? state.preferences.destinations : ["Beach", "Culture", "Food"];
  state.preferences.preferenceTags = state.preferences.preferenceTags?.length
    ? state.preferences.preferenceTags
    : [...new Set([...state.preferences.interests, ...state.preferences.destinations])];
  state.preferences.transport = state.preferences.transport || [];
  state.savedDestinations = data.savedDestinations || [];
  state.travelHistory = data.travelHistory || [];
  state.selectedDestination = state.destinations.find((item) => item.id === state.selectedDestinationId) || state.destinations[0] || null;
  state.selectedItineraryId = state.selectedItineraryId || state.itineraries[0]?.id || "";
}

async function loadBootstrap() {
  const data = await apiGet("/bootstrap");
  applyBootstrap(data);
}

function setApiError(message) {
  state.apiError = message;
  render();
}

function clearApiError() {
  state.apiError = "";
}

function routeTo(route, params = {}) {
  const previousRoute = state.route;
  clearToast();
  clearApiError();
  Object.assign(state, params, { route, previousRoute });
  render();
}

function notify(message) {
  if (toastTimer) window.clearTimeout(toastTimer);
  state.showToast = message;
  render();
  toastTimer = window.setTimeout(() => {
    if (state.showToast === message) {
      state.showToast = "";
      render();
    }
  }, 1600);
}

function clearToast() {
  if (toastTimer) {
    window.clearTimeout(toastTimer);
    toastTimer = 0;
  }
  state.showToast = "";
}

function updateCodeCountdownView() {
  if (state.route !== "login") return;
  const sendCode = app.querySelector("#send-code");
  const countdown = app.querySelector("#code-countdown");
  const demoCodeHint = app.querySelector("#demo-code-hint");
  if (sendCode) {
    sendCode.disabled = state.codeCountdown > 0;
    sendCode.textContent = state.codeCountdown > 0 ? "Code Sent" : "Send Code";
  }
  if (countdown) {
    countdown.textContent = state.codeCountdown > 0 ? `Resend code in ${state.codeCountdown}s` : "Ready to send code";
  }
  if (demoCodeHint) {
    demoCodeHint.hidden = state.codeCountdown === 0;
  }
}

function startCodeCountdown() {
  if (codeTimer) window.clearInterval(codeTimer);
  state.codeCountdown = 60;
  updateCodeCountdownView();
  codeTimer = window.setInterval(() => {
    state.codeCountdown = Math.max(0, state.codeCountdown - 1);
    if (state.codeCountdown === 0) {
      window.clearInterval(codeTimer);
      codeTimer = 0;
    }
    updateCodeCountdownView();
  }, 1000);
}

function topbar(title, options = {}) {
  const back = options.back ? `<button class="icon-btn" data-route="${options.back}" aria-label="Go back">${icon("arrow_back")}</button>` : "<span style=\"width:44px\"></span>";
  const action = options.action || "<span style=\"width:44px\"></span>";
  return `<header class="topbar center">${back}<h1>${title}</h1>${action}</header>`;
}

function bottomNav(active) {
  const items = [
    ["home", "Home", "home"],
    ["search", "Search", "search"],
    ["itineraryList", "Itinerary", "event_note"],
    ["map", "Map", "map"],
    ["profile", "Profile", "person"]
  ];
  return `<nav class="bottom-nav">${items.map(([route, label, material]) => `
    <button class="nav-item ${active === route ? "active" : ""}" data-route="${route}" aria-label="${label}">
      ${icon(material)}
      <span>${label}</span>
    </button>`).join("")}</nav>`;
}

function destinationById(id) {
  return [...state.destinations, ...homeExtraRecommendations].find((item) => item.id === id) || null;
}

function homeRecommendationPool() {
  const allDestinations = [...state.destinations, ...homeExtraRecommendations];
  const seen = new Set();
  return allDestinations.filter((item) => {
    if (seen.has(item.id)) return false;
    seen.add(item.id);
    return true;
  });
}

function matchesHomeCategory(destination, category) {
  const accepted = homeCategoryAliases[category] || [category];
  return accepted.includes(destination.category) || accepted.some((item) => (destination.travelStyles || []).includes(item));
}

function preferredHomeCategories() {
  const preferred = preferenceValues("preferenceTags")
    .map((tag) => homeCategories.includes(tag) ? tag : tag === "Nature" ? "Mountain" : tag === "Walkable" ? "City" : "")
    .filter(Boolean);
  return [...new Set(preferred)].length ? [...new Set(preferred)] : [homeCategories[0]];
}

function activeHomeCategories() {
  return state.homeCategoryLocked && state.homeCategory ? [state.homeCategory] : preferredHomeCategories();
}

function homeRecommendationCandidates() {
  const selectedHomeCategories = activeHomeCategories();
  return rankDestinationsByPreferences(homeRecommendationPool().filter((item) => selectedHomeCategories.some((category) => matchesHomeCategory(item, category))));
}

function orderedHomeCategories() {
  return [...new Set([...preferredHomeCategories(), ...homeCategories])];
}

function preferenceValues(key) {
  const value = state.preferences?.[key];
  return Array.isArray(value) ? value : value ? [value] : [];
}

function destinationPreferenceScore(destination) {
  const preferenceTags = preferenceValues("preferenceTags").length
    ? preferenceValues("preferenceTags")
    : [...new Set([...preferenceValues("interests"), ...preferenceValues("destinations")])];
  const transport = preferenceValues("transport");
  const budget = state.preferences?.budget;
  const pace = state.preferences?.pace;
  const travelStyles = destination.travelStyles || [];
  const destinationText = `${destination.title || ""} ${destination.location || ""} ${destination.countryRegion || ""} ${destination.category || ""}`.toLowerCase();
  let score = Number(destination.rating || 0);

  preferenceTags.forEach((tag) => {
    if (travelStyles.includes(tag) || matchesHomeCategory(destination, tag)) score += 3;
  });
  if (budget && destination.budgetLevel === budget) score += 2;
  if (pace === "Relaxed" && ["Relaxation", "Nature", "Beach"].some((item) => matchesHomeCategory(destination, item))) score += 1.5;
  if (pace === "Packed" && ["City", "Culture", "Food", "Walkable"].some((item) => matchesHomeCategory(destination, item))) score += 1.5;
  if (transport.includes("Walking") && travelStyles.includes("Walkable")) score += 1;
  if (transport.includes("Transit") && ["City", "Culture", "Food"].some((item) => matchesHomeCategory(destination, item))) score += 0.8;
  if (transport.includes("Rental Car") && ["Nature", "Adventure", "Mountain", "Beach"].some((item) => matchesHomeCategory(destination, item))) score += 0.8;

  state.travelHistory.forEach((item) => {
    const historyText = `${item.destination || ""} ${item.date || ""}`.toLowerCase();
    if (historyText && (destinationText.includes(historyText) || historyText.split(/\s+/).some((word) => word.length > 4 && destinationText.includes(word)))) {
      score += 1.2;
    }
  });

  return score;
}

function destinationRecommendationReasons(destination) {
  const reasons = [];
  const preferenceTags = preferenceValues("preferenceTags").length
    ? preferenceValues("preferenceTags")
    : [...new Set([...preferenceValues("interests"), ...preferenceValues("destinations")])];
  const travelStyles = destination.travelStyles || [];
  const budget = state.preferences?.budget;
  const pace = state.preferences?.pace;
  const transport = preferenceValues("transport");
  const destinationText = `${destination.title || ""} ${destination.location || ""} ${destination.countryRegion || ""} ${destination.category || ""}`.toLowerCase();

  if (budget && destination.budgetLevel === budget) reasons.push(`${budget} budget`);
  preferenceTags.forEach((tag) => {
    if (travelStyles.includes(tag) || matchesHomeCategory(destination, tag)) reasons.push(tag);
  });
  if (pace === "Relaxed" && ["Relaxation", "Nature", "Beach"].some((item) => matchesHomeCategory(destination, item))) reasons.push("relaxed pace");
  if (pace === "Packed" && ["City", "Culture", "Food", "Walkable"].some((item) => matchesHomeCategory(destination, item))) reasons.push("packed pace");
  if (transport.includes("Walking") && travelStyles.includes("Walkable")) reasons.push("walking friendly");
  if (transport.includes("Transit") && ["City", "Culture", "Food"].some((item) => matchesHomeCategory(destination, item))) reasons.push("transit friendly");
  if (transport.includes("Rental Car") && ["Nature", "Adventure", "Mountain", "Beach"].some((item) => matchesHomeCategory(destination, item))) reasons.push("road-trip friendly");
  if (state.travelHistory.some((item) => {
    const historyText = `${item.destination || ""} ${item.date || ""}`.toLowerCase();
    return historyText && (destinationText.includes(historyText) || historyText.split(/\s+/).some((word) => word.length > 4 && destinationText.includes(word)));
  })) {
    reasons.push("history signal");
  }

  return [...new Set(reasons)].slice(0, 3);
}

function recommendationReasonText(destination) {
  const reasons = destinationRecommendationReasons(destination);
  return reasons.length ? `Recommended for ${reasons.join(" · ")}` : `Strong match · ${destination.rating || "4+"} rating`;
}

function rankDestinationsByPreferences(destinations) {
  return [...destinations].sort((a, b) => destinationPreferenceScore(b) - destinationPreferenceScore(a) || a.title.localeCompare(b.title));
}

function searchDestinationPool() {
  const allDestinations = [...state.destinations, ...homeExtraRecommendations];
  const seen = new Set();
  return allDestinations.filter((item) => {
    if (seen.has(item.id)) return false;
    seen.add(item.id);
    return true;
  });
}

function matchesDestinationQuery(destination, query) {
  const normalizedQuery = String(query || "").trim().toLowerCase();
  if (!normalizedQuery) return true;
  return [
    destination.title,
    destination.location,
    destination.countryRegion,
    destination.description,
    destination.note,
    ...(destination.keyAttractions || []),
    ...(destination.attractions || []).map((item) => item.name)
  ].some((value) => String(value || "").toLowerCase().includes(normalizedQuery));
}

const filterOptions = {
  category: ["City", "Beach", "Mountain", "Food", "Culture", "Nature", "Family", "Adventure", "Relaxation"],
  budgetLevel: ["Economy", "Standard", "Premium"],
  travelStyle: ["Food", "Culture", "Nature", "Family", "Relaxation", "Adventure", "Walkable"],
  duration: ["Weekend", "3-5 days", "1 week", "2+ weeks"],
  rating: ["4.5+", "4.7+", "4.8+"]
};

const multiSelectFilterFields = new Set(["category", "travelStyle"]);

function availableLocations() {
  return [...new Set(searchDestinationPool().map((item) => item.countryRegion || item.location?.split(", ").at(-1) || "").filter(Boolean))].sort();
}

function inferFiltersFromQuery(query) {
  const normalizedQuery = String(query || "").trim().toLowerCase();
  if (!normalizedQuery) return {};
  const location = availableLocations().find((item) => item.toLowerCase() === normalizedQuery);
  const inferred = {};
  Object.entries(filterOptions).forEach(([field, options]) => {
    const value = options.find((item) => item.toLowerCase() === normalizedQuery);
    if (value) inferred[field] = multiSelectFilterFields.has(field) ? [value] : value;
  });
  if (location) inferred.location = [location];
  return inferred;
}

function activeSearchFilters() {
  const inferred = inferFiltersFromQuery(state.searchQuery);
  const active = { ...inferred };
  Object.entries(state.searchFilters).forEach(([field, value]) => {
    if (Array.isArray(value)) {
      active[field] = [...new Set([...filterValues(active, field), ...value])];
      return;
    }
    if (value) active[field] = value;
  });
  Object.keys(active).forEach((field) => {
    if (Array.isArray(active[field])) active[field] = [...new Set(active[field])];
  });
  return active;
}

function filterValues(filters, field) {
  const value = filters[field];
  if (Array.isArray(value)) return value;
  return value ? [value] : [];
}

function hasFilterValue(filters, field, value) {
  return filterValues(filters, field).includes(value);
}

function filterLabel(field, value) {
  if (field === "rating") return value;
  return value;
}

function matchesSearchFilters(destination, filters = activeSearchFilters()) {
  const categories = filterValues(filters, "category");
  const locations = filterValues(filters, "location");
  const budgetLevels = filterValues(filters, "budgetLevel");
  const travelStyles = filterValues(filters, "travelStyle");
  const durations = filterValues(filters, "duration");
  const rating = filterValues(filters, "rating")[0];

  if (categories.length && !categories.every((category) => matchesHomeCategory(destination, category))) return false;
  if (locations.length) {
    const locationText = `${destination.location || ""} ${destination.countryRegion || ""}`.toLowerCase();
    if (!locations.every((location) => locationText.includes(location.toLowerCase()))) return false;
  }
  if (budgetLevels.length && !budgetLevels.every((level) => destination.budgetLevel === level)) return false;
  if (travelStyles.length && !travelStyles.every((style) => (destination.travelStyles || []).includes(style))) return false;
  if (durations.length && !durations.every((duration) => destination.recommendedDuration === duration)) return false;
  if (rating && Number(destination.rating) < Number(rating.replace("+", ""))) return false;
  return true;
}

function applySearchFilters(results) {
  const filters = activeSearchFilters();
  return rankDestinationsByPreferences(results.filter((item) => matchesSearchFilters(item, filters)));
}

function searchApiPath() {
  const params = new URLSearchParams();
  if (state.searchQuery) params.set("q", state.searchQuery);
  const filters = activeSearchFilters();
  Object.entries(filters).forEach(([field, value]) => {
    filterValues(filters, field).forEach((entry) => {
      if (entry) params.append(field, entry);
    });
  });
  const query = params.toString();
  return `/destinations${query ? `?${query}` : ""}`;
}

function clearSearchFilters() {
  state.searchFilters = {
    category: [],
    location: [],
    budgetLevel: [],
    travelStyle: [],
    duration: [],
    rating: ""
  };
}

function suggestedPlanTitle(destination) {
  const place = String(destination?.title || "Trip").split(",")[0].trim();
  return `${place} 3-Day Route`;
}

function suggestedPlanItems(destination, maxDays = 3) {
  const dayLimit = Math.max(1, Math.min(3, maxDays));
  const attractions = (destination?.attractions || []).slice(0, dayLimit);
  const fallback = attractions.length ? attractions : [{ name: destination?.title || "Destination overview", time: "2 hr" }];
  return fallback.map((attraction, index) => ({
    day: index + 1,
    time: index === 0 ? "09:00" : index === 1 ? "10:00" : "14:00",
    title: attraction.name || destination.title,
    location: destination.title,
    note: `Day ${index + 1} suggested route stop · ${attraction.time || "Suggested visit"}`,
    sortOrder: index * 1000
  }));
}

const mapPointPositions = [
  { left: 82, top: 266 },
  { left: 192, top: 190 },
  { left: 292, top: 224 },
  { left: 142, top: 112 },
  { left: 242, top: 318 }
];

function normalizeStopName(value) {
  return String(value || "").toLowerCase().replace(/[^a-z0-9]+/g, "");
}

function mapContext() {
  if (state.mapMode === "itinerary") {
    const trip = state.itineraries.find((item) => item.id === state.mapItineraryId) || nearestMapItinerary() || selectedItinerary();
    const destination = destinationById(trip?.destinationId) || destinationById(state.selectedDestinationId);
    const plannedNames = new Set((trip?.items || []).map((item) => normalizeStopName(item.title)));
    const plannedPoints = (trip?.items || []).map((item, index) => ({
      id: item.id || `route-${index}`,
      title: item.title,
      subtitle: `Already in timeline · Day ${item.day || 1} · ${item.time || "Time TBD"}`,
      duration: item.note?.match(/·\s*(.+)$/)?.[1] || "Scheduled stop",
      day: item.day || 1,
      time: item.time || "09:00",
      location: item.location || trip.destination,
      note: item.note || "Already in itinerary timeline",
      tripId: trip?.id || "",
      destinationId: destination?.id || trip?.destinationId || "",
      image: item.image || destination?.image || images.tokyo,
      material: index === 0 ? "flag" : "place",
      type: "route",
      canAdd: false,
      ...mapPointPositions[index % mapPointPositions.length]
    }));
    const availablePoints = (destination?.attractions || [])
      .filter((item) => !plannedNames.has(normalizeStopName(item.name)))
      .map((item, index) => ({
        id: `available-${item.id || normalizeStopName(item.name)}`,
        title: item.name,
        subtitle: `${item.time || "Suggested visit"} · Available key attraction`,
        duration: item.time || "Suggested visit",
        day: Math.min(index + 1, tripDayCount(trip)),
        time: index === 0 ? "09:00" : index === 1 ? "14:00" : "10:00",
        location: destination?.title || trip?.destination || "Destination",
        note: `${item.time || "Suggested"} key attraction added from map`,
        tripId: trip?.id || "",
        destinationId: destination?.id || trip?.destinationId || "",
        image: item.image || destination?.image || images.tokyo,
        material: "attractions",
        type: "available",
        canAdd: true,
        ...mapPointPositions[(plannedPoints.length + index) % mapPointPositions.length]
      }));
    return {
      mode: "itinerary",
      title: trip?.title || "Itinerary Route",
      subtitle: trip ? `${trip.destination} · ${trip.dates}` : "Selected itinerary route",
      destination,
      points: [...plannedPoints, ...availablePoints]
    };
  }

  const destination = destinationById(state.mapDestinationId || state.selectedDestinationId) || state.selectedDestination || state.destinations[0];
  return {
    mode: "destination",
    title: destination?.title || "Destination Map",
    subtitle: destination ? `${destination.location} · ${destination.category}` : "Destination and attraction pins",
    destination,
    points: [
      destination && {
        id: destination.id,
        title: destination.title,
        subtitle: `${destination.location} · Destination · ${destination.rating}`,
        duration: destination.recommendedDuration || "Suggested visit",
        day: 1,
        time: "09:00",
        location: destination.title,
        note: destination.note || "Added from destination map",
        destinationId: destination.id,
        image: destination.image,
        material: "location_city",
        type: "destination",
        left: 82,
        top: 266
      },
      ...(destination?.attractions || []).map((item, index) => ({
        id: item.id,
        title: item.name,
        subtitle: `${item.time} suggested visit · Attraction`,
        duration: item.time || "Suggested visit",
        day: index + 1,
        time: index === 0 ? "09:00" : index === 1 ? "10:00" : "14:00",
        location: destination.title,
        note: `${item.time || "Suggested"} stop added from map`,
        destinationId: destination.id,
        image: item.image || destination.image,
        material: "attractions",
        type: "attraction",
        ...mapPointPositions[(index + 1) % mapPointPositions.length]
      }))
    ].filter(Boolean)
  };
}

function selectedMapPoint(context = mapContext()) {
  return context.points.find((point) => point.id === state.selectedMapPointId) || context.points.find((point) => point.canAdd) || context.points[0] || null;
}

function mapRouteLines(points) {
  return points.slice(1).map((point, index) => {
    const previous = points[index];
    const dx = point.left - previous.left;
    const dy = point.top - previous.top;
    const length = Math.sqrt(dx * dx + dy * dy);
    const angle = Math.atan2(dy, dx) * 180 / Math.PI;
    return `<div class="route-line" style="width:${length}px;left:${previous.left + 12}px;top:${previous.top + 16}px;transform:rotate(${angle}deg)"></div>`;
  }).join("");
}

function dateInput(id = "") {
  return `<input ${id ? `id="${id}" ` : ""}class="input" type="text" inputmode="numeric" placeholder="YYYY-MM-DD" pattern="\\d{4}-\\d{2}-\\d{2}">`;
}

function parseDateValue(value) {
  if (!/^\d{4}-\d{2}-\d{2}$/.test(value || "")) return null;
  const [year, month, day] = value.split("-").map(Number);
  return new Date(year, month - 1, day);
}

function formatDateValue(date) {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  return `${year}-${month}-${day}`;
}

function monthLabel(monthValue) {
  const date = parseDateValue(`${monthValue}-01`) || new Date();
  return date.toLocaleDateString("en-US", { month: "long", year: "numeric" });
}

function shiftMonth(monthValue, offset) {
  const date = parseDateValue(`${monthValue}-01`) || new Date();
  date.setMonth(date.getMonth() + offset);
  return formatDateValue(date).slice(0, 7);
}

function createDateInput(id, value, field) {
  return `<button class="input date-trigger ${state.activeCalendarField === field ? "active" : ""}" type="button" data-calendar-field="${field}">
    <span class="${value ? "" : "muted"}">${value || "YYYY-MM-DD"}</span>
    ${icon("calendar_month")}
    <input id="${id}" type="hidden" value="${value}">
  </button>`;
}

function isScheduledDate(value) {
  return state.itineraries.some((trip) => {
    const start = parseDateValue(trip.startDate);
    const end = parseDateValue(trip.endDate);
    const current = parseDateValue(value);
    return start && end && current && current >= start && current <= end;
  });
}

function renderCalendar() {
  if (!state.activeCalendarField) return "";
  const monthStart = parseDateValue(`${state.calendarMonth}-01`) || new Date();
  const firstWeekday = monthStart.getDay();
  const daysInMonth = new Date(monthStart.getFullYear(), monthStart.getMonth() + 1, 0).getDate();
  const selectedDate = state.activeCalendarField === "start" ? state.createStartDate : state.createEndDate;
  const cells = [];

  for (let i = 0; i < firstWeekday; i += 1) {
    cells.push(`<span class="calendar-day empty"></span>`);
  }

  for (let day = 1; day <= daysInMonth; day += 1) {
    const value = formatDateValue(new Date(monthStart.getFullYear(), monthStart.getMonth(), day));
    const classes = [
      "calendar-day",
      value === selectedDate ? "selected" : "",
      isScheduledDate(value) ? "scheduled" : ""
    ].filter(Boolean).join(" ");
    cells.push(`<button class="${classes}" type="button" data-calendar-date="${value}" aria-label="${value}">${day}</button>`);
  }

  return `<section class="calendar-panel">
    <div class="calendar-head">
      <button class="icon-btn" type="button" data-calendar-month="-1" aria-label="Previous month">${icon("chevron_left")}</button>
      <strong>${monthLabel(state.calendarMonth)}</strong>
      <button class="icon-btn" type="button" data-calendar-month="1" aria-label="Next month">${icon("chevron_right")}</button>
    </div>
    <div class="calendar-weekdays">${["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((day) => `<span>${day}</span>`).join("")}</div>
    <div class="calendar-grid">${cells.join("")}</div>
    <div class="calendar-legend">
      <span><i class="legend-dot scheduled"></i> Existing itinerary</span>
      <span><i class="legend-dot selected"></i> Selected date</span>
    </div>
  </section>`;
}

function selectedItinerary() {
  return state.itineraries.find((trip) => trip.id === state.selectedItineraryId) || state.itineraries[0] || null;
}

function tripDayCount(trip) {
  const start = parseDateValue(trip?.startDate);
  const end = parseDateValue(trip?.endDate);
  if (!start || !end || end < start) return 1;
  return Math.max(1, Math.round((end - start) / 86400000) + 1);
}

function dayItems(trip, day = state.selectedItineraryDay) {
  return (trip?.items || [])
    .filter((item) => (item.day || 1) === day)
    .sort((a, b) => String(a.time || "").localeCompare(String(b.time || "")));
}

function ensureSelectedDay(trip) {
  const count = tripDayCount(trip);
  if (state.selectedItineraryDay < 1 || state.selectedItineraryDay > count) {
    state.selectedItineraryDay = 1;
  }
  return count;
}

function dayTabs(dayCount) {
  return `<div class="chip-row section">${Array.from({ length: dayCount }, (_, i) => `<button class="chip ${state.selectedItineraryDay === i + 1 ? "active" : ""}" data-itinerary-day="${i + 1}">Day ${i + 1}</button>`).join("")}</div>`;
}

function sortedItineraries() {
  return [...state.itineraries].sort((a, b) => {
    const startA = parseDateValue(a.startDate)?.getTime() || 0;
    const startB = parseDateValue(b.startDate)?.getTime() || 0;
    return startA - startB || a.title.localeCompare(b.title);
  });
}

function pastItineraries() {
  return sortedItineraries().filter((trip) => itineraryStatusLabel(trip) === "Past");
}

function nextActiveItinerary() {
  const activeTrips = sortedItineraries().filter((trip) => ["Today", "Ongoing", "Upcoming"].includes(itineraryStatusLabel(trip)));
  return activeTrips.find((trip) => ["Today", "Ongoing"].includes(itineraryStatusLabel(trip))) || activeTrips[0] || null;
}

function nearestMapItinerary() {
  const today = parseDateValue(TODAY);
  const trips = sortedItineraries();
  if (!today || !trips.length) return null;

  const todayTrip = trips.find((trip) => ["Today", "Ongoing"].includes(itineraryStatusLabel(trip)));
  if (todayTrip) return todayTrip;

  const upcoming = trips
    .filter((trip) => itineraryStatusLabel(trip) === "Upcoming")
    .sort((a, b) => parseDateValue(a.startDate) - parseDateValue(b.startDate));
  if (upcoming.length) return upcoming[0];

  return trips
    .filter((trip) => itineraryStatusLabel(trip) === "Past")
    .sort((a, b) => parseDateValue(b.endDate) - parseDateValue(a.endDate))[0] || null;
}

function itineraryStatusLabel(trip) {
  const today = parseDateValue(TODAY);
  const start = parseDateValue(trip?.startDate);
  const end = parseDateValue(trip?.endDate);
  if (!today || !start || !end) return "Needs dates";
  if (today < start) return "Upcoming";
  if (today > end) return "Past";
  return start.getTime() === end.getTime() ? "Today" : "Ongoing";
}

function tripLocalReference(trip) {
  const destination = `${trip.destination || ""} ${trip.title || ""}`.toLowerCase();
  const references = [
    { keys: ["greece", "santorini"], currency: "1 EUR ≈ 7.98 CNY", currencyNote: "RMB reference for Greece", language: "Greek phrases", languageNote: "Hello: Yassas · Thank you: Efharisto" },
    { keys: ["japan", "tokyo", "kyoto", "osaka"], currency: "100 JPY ≈ 4.34 CNY", currencyNote: "RMB reference for Japan", language: "Japanese phrases", languageNote: "Hello: Konnichiwa · Thank you: Arigato" },
    { keys: ["thailand", "bangkok"], currency: "100 THB ≈ 21.05 CNY", currencyNote: "RMB reference for Thailand", language: "Thai phrases", languageNote: "Hello: Sawasdee · Thank you: Khop khun" },
    { keys: ["switzerland", "interlaken"], currency: "1 CHF ≈ 8.67 CNY", currencyNote: "RMB reference for Switzerland", language: "German phrases", languageNote: "Hello: Hallo · Thank you: Danke" },
    { keys: ["indonesia", "bali"], currency: "10k IDR ≈ 3.94 CNY", currencyNote: "RMB reference for Indonesia", language: "Indonesian phrases", languageNote: "Hello: Halo · Thank you: Terima kasih" },
    { keys: ["costa rica"], currency: "100 CRC ≈ 1.50 CNY", currencyNote: "RMB reference for Costa Rica", language: "Spanish phrases", languageNote: "Hello: Hola · Thank you: Gracias" },
    { keys: ["spain", "barcelona"], currency: "1 EUR ≈ 7.98 CNY", currencyNote: "RMB reference for Spain", language: "Spanish phrases", languageNote: "Hello: Hola · Thank you: Gracias" },
    { keys: ["france", "paris"], currency: "1 EUR ≈ 7.98 CNY", currencyNote: "RMB reference for France", language: "French phrases", languageNote: "Hello: Bonjour · Thank you: Merci" },
    { keys: ["new zealand", "queenstown"], currency: "1 NZD ≈ 4.13 CNY", currencyNote: "RMB reference for New Zealand", language: "English phrases", languageNote: "Excuse me · How much is this?" },
    { keys: ["canada", "vancouver"], currency: "1 CAD ≈ 5.03 CNY", currencyNote: "RMB reference for Canada", language: "English phrases", languageNote: "Excuse me · How much is this?" },
    { keys: ["iceland"], currency: "100 ISK ≈ 4.99 CNY", currencyNote: "RMB reference for Iceland", language: "Icelandic phrases", languageNote: "Hello: Hallo · Thank you: Takk" },
    { keys: ["hawaii", "united states", "maui"], currency: "1 USD ≈ 6.84 CNY", currencyNote: "RMB reference for the United States", language: "English phrases", languageNote: "Excuse me · How much is this?" }
  ];
  const matched = references.find((item) => item.keys.some((key) => destination.includes(key)));
  if (matched) {
    const { keys, ...reference } = matched;
    return reference;
  }
  return { currency: "1 USD ≈ 6.84 CNY", currencyNote: "RMB exchange reference", language: "Travel phrases", languageNote: "Hello · Thank you · Where is this?" };
}

function errorBanner() {
  if (!state.apiError) return "";
  return `<section class="card card-pad" style="border-color:var(--error);background:var(--error-soft);margin-bottom:12px">
    <div class="row between" style="align-items:flex-start">
      <div>
        <strong>Unable to load data</strong>
        <p class="small" style="margin:4px 0 0">${state.apiError}</p>
      </div>
      <button class="btn danger" id="retry-api">Retry</button>
    </div>
  </section>`;
}

function layout(content, active, noNav = false) {
  return `<main class="screen ${noNav ? "no-nav" : ""}">${errorBanner()}${content}</main>${noNav ? "" : bottomNav(active)}${state.showToast ? `<div class="toast">${state.showToast}</div>` : ""}`;
}

function renderLogin() {
  return layout(`
    <section style="padding-top:24px">
      <div class="brand">
        <div class="brand-mark">${icon("flight_takeoff")}</div>
        <h1>Skybound</h1>
      </div>
      <p class="muted" style="margin:8px 0 28px">Secure travel planning for saved trips, routes, and recommendations.</p>
      <div class="card card-pad">
        <h2 class="section-title">Log In or Sign Up</h2>
        <p class="small muted">Enter your phone number to receive a secure login code.</p>
        <div class="field section">
          <label class="label">Phone Number</label>
          <div class="row">
            <select id="country-code" class="select" style="width:96px">
              ${["+1", "+86", "+81"].map((code) => `<option ${state.loginCountryCode === code ? "selected" : ""}>${code}</option>`).join("")}
            </select>
            <input id="phone" class="input" inputmode="tel" placeholder="555 013 8842" value="${state.loginPhone}">
          </div>
          <p id="phone-error" class="error-text" hidden>Please enter a valid phone number.</p>
        </div>
        <button class="btn full section" id="send-code" ${state.codeCountdown > 0 ? "disabled" : ""}>${state.codeCountdown > 0 ? "Code Sent" : "Send Code"}</button>
        <div class="field section">
          <div class="row between">
            <label class="label">Verification Code</label>
            <span id="code-countdown" class="small numeric muted">${state.codeCountdown > 0 ? `Resend code in ${state.codeCountdown}s` : "Ready to send code"}</span>
          </div>
          <input id="code" class="input" inputmode="numeric" placeholder="123456" value="${state.loginCode}">
          <p id="demo-code-hint" class="small muted" ${state.codeCountdown > 0 ? "" : "hidden"}>Demo verification code: <strong class="numeric">123456</strong></p>
          <p id="code-error" class="error-text" hidden>Invalid verification code. Please try again.</p>
        </div>
        <button class="btn primary full section" id="login-btn">Log In</button>
      </div>
      <div class="section">
        <p class="label" style="text-align:center">Social Login</p>
        <div class="grid-2">
          <button class="btn">Google</button>
          <button class="btn">Apple</button>
        </div>
        <button class="btn full" style="margin-top:10px">Facebook</button>
      </div>
      <p class="small muted" style="margin-top:22px;text-align:center">Demo only. No SMS or third-party OAuth request is sent.</p>
    </section>
  `, "", true);
}

function renderHome() {
  const selectedHomeCategories = activeHomeCategories();
  const selectedHomeCategoryLabel = selectedHomeCategories.join(" + ");
  const homeCategoryChips = orderedHomeCategories();
  const categoryRecs = homeRecommendationCandidates();
  const recs = categoryRecs.slice(0, state.homeRecommendationLimit);
  const hasMoreRecs = state.homeRecommendationLimit < categoryRecs.length;
  const upcomingTrip = nextActiveItinerary();
  const upcomingTripStatus = itineraryStatusLabel(upcomingTrip);
  const upcomingImage = destinationById(upcomingTrip?.destinationId)?.image || images.tokyo;
  return layout(`
    <header class="topbar">
      <div class="brand">
        <div class="brand-mark">${icon("flight_takeoff")}</div>
        <h1>Skybound</h1>
      </div>
      <span style="width:44px"></span>
    </header>
    <button class="input row" data-route="search" style="text-align:left">${icon("search")} <span class="muted">Where to next?</span></button>
    <div class="chip-row section">
      ${homeCategoryChips.map((x) => `<button class="chip ${selectedHomeCategories.includes(x) ? "active" : ""}" data-home-category="${x}">${x}</button>`).join("")}
    </div>
    <section class="section">
      <div class="section-head">
        <h2 class="label">${["Today", "Ongoing"].includes(upcomingTripStatus) ? "Your Current Trip" : "Your Next Trip"}</h2>
        <button class="btn" data-route="${upcomingTrip ? "manageTrip" : "createItinerary"}">${upcomingTrip ? "Manage" : "Create"}</button>
      </div>
      ${upcomingTrip ? `<article class="card hero-trip" data-route="itinerary" data-itinerary-id="${upcomingTrip.id}">
          <img src="${upcomingImage}" alt="${upcomingTrip.destination || "Upcoming trip"}">
          <div class="content">
            <span class="status">${upcomingTrip.dates}</span>
            <h3 style="margin:8px 0 4px;font-size:22px">${upcomingTrip.title}</h3>
            <p class="small">${upcomingTrip.items?.length || 0} planned items, ${upcomingTrip.attractions || 0} attractions total</p>
          </div>
        </article>` : emptyState("No upcoming trip.", "Past trips stay in All Itineraries. Create a future trip to show it here.", "createItinerary", "Create Itinerary")}
    </section>
    <section class="section">
      <div class="section-head">
        <h2 class="label">Recommended For You · ${selectedHomeCategoryLabel}</h2>
        <button class="icon-btn" data-route="filters">${icon("tune")}</button>
      </div>
      <div class="list">
        ${recs.length ? recs.map(destinationCard).join("") : emptyState("No recommendations found.", `Try another category or open filters for ${selectedHomeCategoryLabel.toLowerCase()} ideas.`, "filters", "Open Filters")}
      </div>
      ${hasMoreRecs ? `<button class="btn full recommendation-more" id="more-home-recs">${icon("expand_more")} More Recommendations</button>` : ""}
    </section>
  `, "home");
}

function destinationCard(item) {
  return `<article class="card destination-card">
    <img class="image" src="${item.image}" alt="${item.title}">
    <div class="card-pad">
      <div class="row between">
        <span class="status">${item.category}</span>
        <span class="small numeric">${icon("star")} ${item.rating}</span>
      </div>
      <h3 style="margin-top:10px">${item.title}</h3>
      <p class="small muted">${item.description}</p>
      <p class="small muted">${recommendationReasonText(item)}</p>
      <div class="button-row" style="margin-top:12px">
        <button class="btn primary" data-route="detail" data-id="${item.id}">View</button>
        <button class="btn" data-route="addTrip" data-id="${item.id}">Add</button>
      </div>
    </div>
  </article>`;
}

function renderSearch() {
  const activeFilters = activeSearchFilters();
  return layout(`
    ${topbar("Search", { action: `<button class="icon-btn" data-route="filters">${icon("tune")}</button>` })}
    <div class="field">
      <label class="label">Destination Search</label>
      <input id="search-input" class="input" value="${state.searchQuery}" placeholder="Search destinations, cities, attractions">
    </div>
    <button class="input row section" data-route="map" style="text-align:left">${icon("my_location")} <span>Near me</span></button>
    <section class="section">
      <h2 class="label">Categories</h2>
      <div class="chip-row">
        ${filterOptions.category.map((x) => `<button class="chip ${hasFilterValue(activeFilters, "category", x) ? "active" : ""}" data-filter-field="category" data-filter-value="${x}" data-filter-submit="true">${x}</button>`).join("")}
      </div>
    </section>
    <section class="section">
      <h2 class="section-title">Recent</h2>
      <div class="list">
        ${["Kyoto temples", "Tokyo museums", "Food streets"].map((item) => `<button class="card settings-row" data-route="results" data-query="${item}"><span>${item}</span>${icon("chevron_right")}</button>`).join("")}
      </div>
    </section>
    <section class="section">
      <h2 class="section-title">Suggested Destinations</h2>
      <div class="list">
        ${state.destinations.slice(0, 2).map((item) => `<article class="card split-card" data-route="detail" data-id="${item.id}">
          <img class="thumb" src="${item.image}" alt="${item.title}">
          <div>
            <h3>${item.title}</h3>
            <p class="small muted">${item.category} · ${item.note}</p>
          </div>
        </article>`).join("")}
      </div>
    </section>
    <button class="btn primary full section" id="run-search">Show Results</button>
  `, "search");
}

function renderResults() {
  const activeFilters = activeSearchFilters();
  const results = applySearchFilters(state.searchResults);
  const resultChips = [
    ...filterOptions.category.slice(0, 6).map((value) => ["category", value]),
    ["budgetLevel", "Economy"],
    ["travelStyle", "Walkable"],
    ["duration", "Weekend"],
    ["duration", "1 week"],
    ["rating", "4.5+"]
  ];
  const activeFilterSummary = Object.entries(activeFilters)
    .flatMap(([field, value]) => filterValues(activeFilters, field).map((entry) => [field, entry]))
    .filter(([field]) => field !== "category")
    .map(([field, value]) => `<span class="chip active">${filterLabel(field, value)}</span>`)
    .join("");
  return layout(`
    ${topbar("Search Results", { back: "search", action: `<button class="icon-btn" data-route="filters">${icon("tune")}</button>` })}
    <div class="field">
      <label class="label">Keyword</label>
      <input id="search-input" class="input" value="${state.searchQuery}" placeholder="Search destinations">
    </div>
    <div class="chip-row section">
      ${resultChips.map(([field, value]) => `<button class="chip ${hasFilterValue(activeFilters, field, value) ? "active" : ""}" data-filter-field="${field}" data-filter-value="${value}">${filterLabel(field, value)}</button>`).join("")}
    </div>
    ${activeFilterSummary ? `<div class="chip-row section">${activeFilterSummary}<button class="chip" id="clear-filters">Clear filters</button></div>` : ""}
    <section class="section">
      <div class="section-head">
        <h2 class="label">${results.length} Results</h2>
        <button class="btn" id="run-search">Update Results</button>
      </div>
      <div class="list">
        ${results.length ? results.map((item) => `<article class="card split-card">
          <img class="thumb" src="${item.image}" alt="${item.title}">
          <div style="flex:1">
            <div class="row between"><h3>${item.title}</h3><span class="numeric small">${item.rating}</span></div>
            <p class="small muted">${item.location} · ${item.budgetLevel || "Standard"} · ${item.recommendedDuration || "3-5 days"}</p>
            <p class="small">${item.description}</p>
            <p class="small muted">${recommendationReasonText(item)}</p>
            <div class="button-row" style="margin-top:10px">
              <button class="btn primary" data-route="detail" data-id="${item.id}">Details</button>
              <button class="btn" data-route="map" data-id="${item.id}">Map</button>
            </div>
          </div>
        </article>`).join("") : emptyState("No destinations found.", "Try changing filters or keywords.", "filters", "Adjust Filters")}
      </div>
    </section>
  `, "search");
}

function renderFilters() {
  const activeFilters = activeSearchFilters();
  const locationOptions = availableLocations();
  return layout(`
    ${topbar("Filters", { back: "search" })}
    ${filterSection("Destination Type", filterOptions.category, activeFilters.category, "category")}
    ${filterSection("Location", locationOptions, activeFilters.location, "location")}
    ${filterSection("Budget Level", filterOptions.budgetLevel, activeFilters.budgetLevel, "budgetLevel")}
    <section class="section grid-2">
      <div class="field"><label class="label">Start Date</label>${dateInput()}</div>
      <div class="field"><label class="label">End Date</label>${dateInput()}</div>
    </section>
    ${filterSection("Duration", filterOptions.duration, activeFilters.duration, "duration")}
    ${filterSection("Travel Style", filterOptions.travelStyle, activeFilters.travelStyle, "travelStyle")}
    ${filterSection("Rating", filterOptions.rating, activeFilters.rating, "rating")}
    <div class="button-row section">
      <button class="btn full" id="clear-filters">Reset</button>
      <button class="btn primary full" id="run-search">Update Results</button>
    </div>
  `, "search");
}

function filterSection(title, items, active, field) {
  return `<section class="section">
    <h2 class="label">${title}</h2>
    <div class="chip-row">${items.map((item) => `<button class="chip ${filterValues({ [field]: active }, field).includes(item) ? "active" : ""}" data-filter-field="${field}" data-filter-value="${item}">${item}</button>`).join("")}</div>
  </section>`;
}

function renderDetail() {
  const destination = state.selectedDestination || destinationById(state.selectedDestinationId);
  const backRoute = state.previousRoute === "map" ? "map" : "results";
  if (!destination) {
    return layout(`
      ${topbar("Destination", { back: backRoute })}
      ${emptyState("Destination not loaded.", "Open Search and retry loading this destination.", "search", "Back to Search")}
    `, "search");
  }
  const destinationImages = [destination.image, ...(destination.attractions || []).map((item) => item.image)]
    .filter(Boolean)
    .filter((image, index, list) => list.indexOf(image) === index)
    .slice(0, 4);
  const isSaved = isDestinationSaved(destination.id);
  return layout(`
    ${topbar(destination.title, { back: backRoute, action: `<button class="icon-btn ${isSaved ? "active" : ""}" id="save-destination" data-id="${destination.id}" aria-label="${isSaved ? "Saved destination" : "Save destination"}">${icon(isSaved ? "bookmark_added" : "bookmark")}</button>` })}
    <article class="card destination-card">
      <img class="image" style="height:220px" src="${destination.image}" alt="${destination.title}">
      <div class="card-pad">
        <div class="row between">
          <span class="status">${destination.category}</span>
          <span class="numeric small">${icon("star")} ${destination.rating}</span>
        </div>
        <h2 class="section-title" style="margin-top:12px">${destination.title}</h2>
        <h3 class="label" style="margin-top:12px">Overview</h3>
        <p class="small muted">${destination.description}</p>
        <div class="chip-row section">
          <span class="chip active">${destination.budgetLevel || "Standard"}</span>
          <span class="chip active">${destination.recommendedDuration || "3-5 days"}</span>
          ${(destination.travelStyles || []).slice(0, 3).map((style) => `<span class="chip">${style}</span>`).join("")}
        </div>
        <div class="button-row section">
          <button class="btn primary full" data-route="addTrip" data-id="${destination.id}">${icon("add")} Add to Itinerary</button>
          <button class="btn full" data-route="map" data-id="${destination.id}">${icon("map")} View on Map</button>
        </div>
      </div>
    </article>
    <section class="section">
      <h2 class="section-title">Images</h2>
      <div class="grid-2">
        ${destinationImages.map((image, index) => `<img class="image" style="height:${index === 0 ? "150px" : "120px"}" src="${image}" alt="${destination.title} image ${index + 1}">`).join("")}
      </div>
    </section>
    <section class="section">
      <h2 class="section-title">Key Attractions</h2>
      <div class="list">
        ${(destination.attractions?.length ? destination.attractions : []).map((item) => `<article class="card split-card">
          <img class="thumb" src="${item.image}" alt="${item.name}">
          <div>
            <h3>${item.name}</h3>
            <p class="small muted">${item.time} suggested visit</p>
          </div>
        </article>`).join("") || emptyState("No attractions loaded.", "Retry destination details from Search Results.", "results", "Back to Results")}
      </div>
    </section>
    <section class="section card card-pad">
      <div class="row">${icon("route")} <strong>Suggested 3-Day Route</strong></div>
      <p class="small muted">Day 1 temples, Day 2 food streets, Day 3 nature and transit-based route review.</p>
      <button class="btn primary full section" data-route="createItinerary" data-id="${destination.id}" data-suggested-plan="true">${icon("route")} Start Suggested Plan</button>
    </section>
  `, "search");
}

function renderAddTrip() {
  const destination = destinationById(state.selectedDestinationId);
  if (!destination) {
    return layout(`
      ${topbar("Add Stop", { back: "search" })}
      ${emptyState("Destination not loaded.", "Open Search and choose a destination again.", "search", "Back to Search")}
    `, "itineraryList");
  }
  const context = state.previousRoute === "map" || state.route === "addTrip" ? mapContext() : null;
  const mapPoint = context ? selectedMapPoint(context) : null;
  const place = mapPoint || destination.attractions[0] || {
    id: destination.id,
    title: destination.title,
    image: destination.image,
    duration: destination.recommendedDuration || "Suggested visit",
    subtitle: destination.location,
    location: destination.title,
    time: "09:00",
    note: destination.note || "Added from destination detail"
  };
  const backRoute = state.previousRoute === "map" ? "map" : "detail";
  const targetTrip = selectedItinerary() || nearestMapItinerary();
  const targetDayCount = tripDayCount(targetTrip);
  if (state.selectedItineraryDay > targetDayCount) state.selectedItineraryDay = 1;
  return layout(`
    ${topbar("Add Stop", { back: backRoute })}
    <section>
      <h2 class="label">Selected Stop</h2>
    </section>
    <article class="card split-card">
      <img class="thumb" src="${place.image}" alt="${place.title || place.name}">
      <div>
        <h3>${place.title || place.name}</h3>
        <p class="small muted">${place.subtitle || destination.location} · ${place.duration || place.time || "Suggested visit"}</p>
      </div>
    </article>
    <section class="section">
      <h2 class="label">Add To Which Itinerary?</h2>
      <div class="list">
        ${state.itineraries.map((trip) => {
          const active = targetTrip?.id === trip.id;
          return `<button class="card settings-row ${active ? "active" : ""}" data-trip="${trip.id}">
            <span><strong>${trip.title}</strong><br><span class="small muted">${trip.dates}</span></span>
            ${active ? `<span class="status success">Selected</span>` : icon("chevron_right")}
          </button>`;
        }).join("")}
        <button class="card settings-row" data-route="createItinerary"><span>Create New Trip</span>${icon("add")}</button>
      </div>
    </section>
    <section class="section">
      <h2 class="label">Schedule This Stop</h2>
      ${targetTrip ? dayTabs(targetDayCount) : emptyState("No target itinerary selected.", "Choose an itinerary before scheduling this stop.", null, "")}
      <div class="field">
        <label class="label">Time</label>
        <select class="select" id="add-stop-time">
          <option value="09:00" ${place.time === "09:00" ? "selected" : ""}>Morning · 09:00</option>
          <option value="14:00" ${place.time === "14:00" ? "selected" : ""}>Afternoon · 14:00</option>
          <option value="18:00" ${place.time === "18:00" ? "selected" : ""}>Evening · 18:00</option>
        </select>
      </div>
    </section>
    <section class="section field">
      <label class="label">Notes Optional</label>
      <textarea class="textarea" id="add-stop-note" placeholder="Add a note..."></textarea>
    </section>
    <button class="btn primary full section" id="add-to-itinerary">Add Stop</button>
  `, "itineraryList");
}

function renderItinerary() {
  const trip = selectedItinerary();
  if (!trip) {
    return layout(`
      <header class="topbar"><div><p class="label">Current Itinerary</p><h1>No trips yet</h1></div></header>
      ${emptyState("No itineraries found.", "Create your first itinerary after connecting the backend.", "createItinerary", "Create Itinerary")}
    `, "itineraryList");
  }
  const localReference = tripLocalReference(trip);
  const dayCount = ensureSelectedDay(trip);
  const visibleItems = dayItems(trip);
  return layout(`
    <header class="topbar">
      <div>
        <p class="label">Current Itinerary</p>
        <h1>${trip.title}</h1>
      </div>
      <span style="width:44px"></span>
    </header>
    <section class="card card-pad">
      <div class="row between">
        <span>${trip.destination}</span>
        <span class="status">${itineraryStatusLabel(trip)}</span>
      </div>
      <p class="small muted numeric">${trip.dates}</p>
    </section>
    ${dayTabs(dayCount)}
    <section class="section">
      <div class="section-head">
        <h2 class="label">Day ${state.selectedItineraryDay} Timeline</h2>
        <button class="btn" data-route="manageTrip">Edit</button>
      </div>
      <div class="timeline">${visibleItems.length ? visibleItems.map(timelineItem).join("") : emptyState("No events for this day.", "Open Edit to add a timeline event.", "manageTrip", "Edit Timeline")}</div>
    </section>
    <section class="section grid-2">
      <article class="card card-pad"><span class="material-symbols-outlined">currency_exchange</span><h3>${localReference.currency}</h3><p class="small muted">${localReference.currencyNote}</p></article>
      <article class="card card-pad"><span class="material-symbols-outlined">translate</span><h3>${localReference.language}</h3><p class="small muted">${localReference.languageNote}</p></article>
    </section>
    <div class="button-row section">
      <button class="btn full" data-route="map" data-map-mode="itinerary">${icon("map")} View Route Map</button>
      <button class="btn primary full" data-route="createItinerary">${icon("add")} Create New Itinerary</button>
    </div>
  `, "itineraryList");
}

function renderItineraryList() {
  const trips = sortedItineraries();
  return layout(`
    <header class="topbar">
      <div>
        <p class="label">All Itineraries</p>
        <h1>Trips</h1>
      </div>
      <span style="width:44px"></span>
    </header>
    <section class="section list">
      ${trips.length ? trips.map((trip) => `<article class="card card-pad">
        <div class="row between">
          <div>
            <p class="label numeric">${trip.dates}</p>
            <h2 class="section-title">${trip.title}</h2>
            <p class="small muted">${trip.destination} · ${tripDayCount(trip)} day${tripDayCount(trip) === 1 ? "" : "s"} · ${trip.items.length} event${trip.items.length === 1 ? "" : "s"}</p>
          </div>
          <span class="status">${itineraryStatusLabel(trip)}</span>
        </div>
        <button class="btn primary full" style="margin-top:12px" data-route="itinerary" data-itinerary-id="${trip.id}">View Itinerary</button>
      </article>`).join("") : emptyState("No itineraries found.", "Create your first trip from a destination.", "createItinerary", "Create Itinerary")}
    </section>
    <button class="btn primary full section" data-route="createItinerary">${icon("add")} Create New Itinerary</button>
  `, "itineraryList");
}

function timelineItem(item) {
  return `<article class="timeline-item">
    <p class="label numeric">${item.time}</p>
    <h3>${item.title}</h3>
    <p class="small muted">${item.location}</p>
    <p class="small">${item.note}</p>
  </article>`;
}

function renderCreateItinerary() {
  const defaultDestinationId = state.selectedDestinationId && destinationById(state.selectedDestinationId)
    ? state.selectedDestinationId
    : state.destinations[0]?.id || "";
  const activeDestinationId = state.createDestinationId || defaultDestinationId;
  const destinations = searchDestinationPool();
  const activeDestination = destinationById(activeDestinationId) || destinations[0] || null;
  const attractionNames = (activeDestination?.attractions || []).map((item) => item.name);
  const destinationOptions = destinations.map((destination) => `<option value="${destination.id}" ${destination.id === activeDestinationId ? "selected" : ""}>${destination.title}</option>`).join("");
  return layout(`
    ${topbar("Create Itinerary", { back: "itinerary" })}
    <form id="create-form" class="list">
      <div class="field">
        <label class="label">Trip Title *</label>
        <input id="trip-title" class="input" placeholder="Kyoto Weekend" value="${escapeHtml(state.createTitle)}">
        <p id="title-error" class="error-text" hidden>Trip title is required.</p>
      </div>
      <div class="field">
        <label class="label">Destination *</label>
        <select id="trip-destination" class="select" style="width:100%">${destinationOptions}</select>
        <p id="destination-error" class="error-text" hidden>Please choose a destination.</p>
      </div>
      <div class="grid-2">
        <div class="field"><label class="label">Start Date *</label>${createDateInput("start-date", state.createStartDate, "start")}</div>
        <div class="field"><label class="label">End Date *</label>${createDateInput("end-date", state.createEndDate, "end")}</div>
      </div>
      ${renderCalendar()}
      <p id="date-error" class="error-text" hidden>Please select valid travel dates.</p>
      <div class="field">
        <label class="label">Attractions</label>
        <input class="input" value="${escapeHtml(attractionNames.join(", "))}" readonly>
      </div>
      <div class="chip-row">
        ${attractionNames.slice(0, 4).map((name) => `<span class="chip active">${escapeHtml(name)}</span>`).join("") || `<span class="chip">No attractions loaded</span>`}
      </div>
      <div class="field">
        <div class="row between"><label class="label">Notes</label><span class="small muted">0/200</span></div>
        <textarea id="trip-notes" class="textarea" placeholder="Optional planning notes">${escapeHtml(state.createNotes)}</textarea>
      </div>
      <button class="btn primary full" type="submit">Save Itinerary</button>
    </form>
  `, "itineraryList");
}

function renderManageTrip() {
  const trip = selectedItinerary();
  if (!trip) return layout(`${topbar("Manage Trip", { back: "itinerary" })}${emptyState("No itinerary to manage.", "Create an itinerary first.", "createItinerary", "Create Itinerary")}`, "itineraryList");
  const localReference = tripLocalReference(trip);
  const dayCount = ensureSelectedDay(trip);
  const visibleItems = dayItems(trip);
  return layout(`
    ${topbar("Manage Trip", { back: "itinerary", action: `<button class="icon-btn">${icon("more_vert")}</button>` })}
    <section class="card card-pad">
      <h2 class="section-title">${trip.title}</h2>
      <div class="row between"><span class="small muted">${trip.dates}</span><span class="status">${itineraryStatusLabel(trip)}</span></div>
      <p class="small muted">${trip.destination} · ${localReference.currency}</p>
    </section>
    ${dayTabs(dayCount)}
    <section class="section">
      <div class="section-head">
        <h2 class="label">Editable Timeline</h2>
        <button class="btn" id="add-timeline-item" type="button">${icon("add")} Add Event</button>
      </div>
      <div class="list">
        ${state.isAddingTimelineItem ? newTimelineItemForm() : ""}
        ${visibleItems.length ? visibleItems.map(manageTimelineItem).join("") : emptyState("No events for this day.", "Add the first event for this day.", null, "")}
      </div>
    </section>
    <section class="section grid-2">
      <button class="btn danger" id="delete-itinerary" type="button">${icon("delete")} Delete Itinerary</button>
      <button class="btn primary" id="save-changes">Save Changes</button>
    </section>
  `, "itinerary");
}

function manageTimelineItem(item) {
  if (state.editingTimelineItemId === item.id) {
    return `<article class="card card-pad timeline-edit" data-timeline-item="${item.id}">
      <div class="grid-2">
        <div class="field"><label class="label">Time</label><input class="input" data-edit-field="time" value="${escapeHtml(item.time)}"></div>
        <div class="field"><label class="label">Location</label><input class="input" data-edit-field="location" value="${escapeHtml(item.location)}"></div>
      </div>
      <div class="field"><label class="label">Title</label><input class="input" data-edit-field="title" value="${escapeHtml(item.title)}"></div>
      <div class="field"><label class="label">Note</label><textarea class="textarea" data-edit-field="note">${escapeHtml(item.note)}</textarea></div>
      <div class="button-row">
        <button class="btn primary full" data-save-item="${item.id}" type="button">Save Item</button>
        <button class="btn full" data-cancel-edit type="button">Cancel</button>
      </div>
    </article>`;
  }

  return `<article class="card card-pad row between">
    <div class="row" style="align-items:flex-start">${icon("drag_indicator")}<div><p class="label numeric">${item.time}</p><h3 style="margin:0">${item.title}</h3><p class="small muted">${item.location}</p></div></div>
    <div class="row"><button class="icon-btn" data-edit-item="${item.id}" aria-label="Edit ${escapeHtml(item.title)}">${icon("edit")}</button><button class="icon-btn" data-delete-item="${item.id}" aria-label="Delete ${escapeHtml(item.title)}">${icon("delete")}</button></div>
  </article>`;
}

function newTimelineItemForm() {
  const trip = selectedItinerary();
  return `<article class="card card-pad timeline-edit" id="new-timeline-item">
    <div class="grid-2">
      <div class="field"><label class="label">Time</label><input class="input" id="new-item-time" placeholder="14:00"></div>
      <div class="field"><label class="label">Location</label><input class="input" id="new-item-location" placeholder="${escapeHtml(trip?.destination || "Location")}"></div>
    </div>
    <div class="field"><label class="label">Title</label><input class="input" id="new-item-title" placeholder="Event title"></div>
    <div class="field"><label class="label">Note</label><textarea class="textarea" id="new-item-note" placeholder="Optional event notes"></textarea></div>
    <div class="button-row">
      <button class="btn primary full" id="save-new-item" type="button">Add Event</button>
      <button class="btn full" id="cancel-new-item" type="button">Cancel</button>
    </div>
  </article>`;
}

function renderMap() {
  if (state.mapFailed) {
    return layout(`
      ${topbar("Map", { back: state.previousRoute === "itinerary" ? "itinerary" : "search" })}
      ${emptyState("Map loading failure.", "Map loading failed. Please retry.", null, "")}
      <button class="btn primary full section" id="retry-map">${icon("refresh")} Retry Map</button>
    `, "map");
  }
  const context = mapContext();
  const points = context.points.length ? context.points : [{
    id: "placeholder",
    title: context.title,
    subtitle: "No route points loaded",
    image: context.destination?.image || images.tokyo,
    material: "place",
    type: "destination",
    left: 164,
    top: 226
  }];
  const selectedPoint = selectedMapPoint({ ...context, points }) || points[0];
  const routePoints = context.mode === "itinerary" ? points.filter((point) => point.type === "route") : points;
  const availableCount = points.filter((point) => point.canAdd).length;
  const plannedCount = points.filter((point) => point.canAdd === false).length;
  return layout(`
    <header class="topbar">
      <h1>Map</h1>
      <button class="icon-btn" id="simulate-map-failure">${icon("sync_problem")}</button>
    </header>
    <section class="map-canvas section">
      <div class="map-district" style="left:16px;top:74px;width:92px;height:78px"></div>
      <div class="map-district" style="left:124px;top:70px;width:112px;height:92px"></div>
      <div class="map-district" style="left:252px;top:78px;width:88px;height:86px"></div>
      <div class="map-district" style="left:28px;top:188px;width:106px;height:104px"></div>
      <div class="map-district" style="left:154px;top:206px;width:84px;height:90px"></div>
      <div class="map-district" style="left:260px;top:194px;width:74px;height:112px"></div>
      <div class="map-park" style="left:38px;top:318px;width:116px;height:76px"></div>
      <div class="map-water" style="right:-22px;top:318px;width:126px;height:46px;transform:rotate(-28deg)"></div>
      <div class="map-water" style="left:-26px;top:410px;width:150px;height:38px;transform:rotate(18deg)"></div>
      <div class="map-road major" style="width:360px;left:8px;top:176px;transform:rotate(8deg)"></div>
      <div class="map-road major" style="width:338px;left:18px;top:306px;transform:rotate(-13deg)"></div>
      <div class="map-road" style="width:250px;left:88px;top:95px;transform:rotate(62deg)"></div>
      <div class="map-road" style="width:230px;left:48px;top:252px;transform:rotate(-42deg)"></div>
      <div class="map-road" style="width:194px;left:160px;top:248px;transform:rotate(84deg)"></div>
      ${mapRouteLines(routePoints)}
      <div class="route-summary">
        <div class="row between">
          <strong>${escapeHtml(context.title)}</strong>
          <span class="status success">${context.mode === "itinerary" ? "Route" : "Destination"}</span>
        </div>
        <p class="small muted" style="margin:4px 0 0">${context.mode === "itinerary" ? `${plannedCount} planned · ${availableCount} available` : `${points.length} point${points.length === 1 ? "" : "s"}`} · current location shown</p>
      </div>
      <div class="map-control-stack">
        <button class="map-control" aria-label="Zoom in">${icon("add")}</button>
        <button class="map-control" aria-label="Zoom out">${icon("remove")}</button>
        <button class="map-control" aria-label="Current location">${icon("my_location")}</button>
      </div>
      ${points.map((point, index) => `
        <button class="pin ${point.type === "destination" ? "hotel" : point.type === "route" ? "transit" : point.type === "available" ? "available" : ""} ${selectedPoint.id === point.id ? "active" : ""}" type="button" data-map-point="${point.id}" style="left:${point.left}px;top:${point.top}px" aria-label="${escapeHtml(point.title)}">${icon(point.material)}</button>
        <button class="route-stop ${selectedPoint.id === point.id ? "active" : ""}" type="button" data-map-point="${point.id}" style="left:${point.left - 6}px;top:${point.top - 6}px" aria-label="Select ${escapeHtml(point.title)}">${index + 1}</button>
        ${selectedPoint.id === point.id ? `<div class="map-label" style="left:${Math.max(8, point.left - 36)}px;top:${Math.max(52, point.top - 32)}px">${escapeHtml(point.title)}</div>` : ""}
      `).join("")}
      <div class="pin current" style="left:38px;top:118px">${icon("near_me")}</div>
      <div class="map-label" style="left:54px;top:150px">You are here</div>
      <article class="map-sheet">
        <div class="row">
          <img class="thumb" src="${selectedPoint.image}" alt="${escapeHtml(selectedPoint.title)}">
          <div>
            <h3 style="margin:0">${escapeHtml(selectedPoint.title)}</h3>
            <p class="small muted">${escapeHtml(selectedPoint.subtitle)}</p>
          </div>
        </div>
        <div class="button-row" style="margin-top:12px">
          ${selectedPoint.canAdd === false ? `<button class="btn full" disabled>Already in Timeline</button>` : `<button class="btn primary full" data-route="addTrip" data-id="${selectedPoint.destinationId || context.destination?.id || state.selectedDestinationId}" data-map-point="${selectedPoint.id}" ${context.mode === "itinerary" ? `data-itinerary-id="${state.mapItineraryId}"` : ""}>Add</button>`}
          <button class="btn full" data-route="detail" data-id="${context.destination?.id || state.selectedDestinationId}">Details</button>
        </div>
      </article>
    </section>
  `, "map");
}

function renderProfile() {
  const pref = state.preferences;
  const savedTripPreview = sortedItineraries().slice(0, 2);
  const savedDestinationPreview = state.savedDestinations.slice(0, 2);
  const historyPreview = pastItineraries().slice(0, 2);
  const preferenceTags = [
    pref.budget,
    pref.pace,
    ...preferenceValues("preferenceTags"),
    ...preferenceValues("transport")
  ].filter(Boolean);
  return layout(`
    <header class="topbar">
      <div class="brand"><img src="${images.avatar}" alt="Profile" style="width:40px;height:40px;border-radius:6px;object-fit:cover"><h1>Profile</h1></div>
      <span style="width:44px"></span>
    </header>
    <section class="card card-pad">
      <div>
        <h2 class="section-title" style="margin:0">Alex Chen</h2>
        <p class="small muted">Planner · ${state.itineraries.length} saved trips · ${state.savedDestinations.length} saved destinations</p>
      </div>
    </section>
    <section class="section">
      <div class="section-head">
        <h2 class="label">Travel Preferences</h2>
        <button class="btn" data-route="preferences">Edit Preferences</button>
      </div>
      <div class="chip-row">
        ${preferenceTags.map((item) => `<span class="chip active">${item}</span>`).join("") || `<span class="small muted">No preferences selected</span>`}
      </div>
    </section>
    <section class="section">
      <h2 class="label">Saved Trips</h2>
      <div class="list">${savedTripPreview.map((trip) => `<article class="card card-pad">
        <div class="row between"><strong>${trip.title}</strong><span class="status">${itineraryStatusLabel(trip)}</span></div>
        <p class="small muted">${trip.destination} · ${trip.dates}</p>
      </article>`).join("") || emptyState("No saved trips yet.", "Created itineraries will appear here.", "createItinerary", "Create Itinerary")}</div>
    </section>
    <section class="section">
      <h2 class="label">Saved Destinations</h2>
      <div class="list">${savedDestinationPreview.map((saved) => `<article class="card split-card">
        <img class="thumb" src="${saved.image || imageFallback(saved.title)}" alt="${saved.title}">
        <div><h3>${saved.title || "Saved destination"}</h3><p class="small muted">${saved.category || "Destination"}${saved.note ? ` · ${saved.note}` : ""}</p></div>
      </article>`).join("") || emptyState("No saved destinations yet.", "Saved places from destination details will appear here.", "search", "Browse Destinations")}</div>
    </section>
    <section class="section">
      <h2 class="label">Travel History</h2>
      <div class="list">${historyPreview.map((item) => `<article class="card card-pad">
        <div class="row between"><strong>${item.title}</strong><span class="status">${itineraryStatusLabel(item)}</span></div>
        <p class="small muted">${item.destination} · ${item.dates}</p>
      </article>`).join("") || emptyState("No history yet.", "Completed trips will appear here.", "profile", "Back to Profile")}</div>
    </section>
    <section class="section">
      <h2 class="label">Settings</h2>
      <div class="card">
        ${settingsButton("Travel Preferences", "hiking", "preferences")}
        ${settingsButton("Saved & History", "bookmark", "savedHistory")}
      </div>
    </section>
  `, "profile");
}

function settingsButton(label, material, route, backRoute = "") {
  return `<button class="settings-row" data-route="${route}" ${backRoute ? `data-back-route="${backRoute}"` : ""} style="width:100%;background:transparent;border-left:0;border-right:0;border-top:0;text-align:left">
    <span class="row">${icon(material)} <strong>${label}</strong></span>${icon("chevron_right")}
  </button>`;
}

function renderPreferences() {
  const pref = state.preferences;
  const combinedPreferenceOptions = [...new Set([...filterOptions.travelStyle, ...filterOptions.category])];
  return layout(`
    ${topbar("Travel Preferences", { back: "profile" })}
    <section class="section">
      <h2 class="section-title">Travel Interests</h2>
      <div class="chip-row">${combinedPreferenceOptions.map((item) => `<button class="chip ${pref.preferenceTags?.includes(item) ? "active" : ""}" data-pref-list="preferenceTags" data-pref-value="${item}">${item}</button>`).join("")}</div>
    </section>
    <section class="section">
      <h2 class="section-title">Budget Preference</h2>
      <div class="list">${["Economy", "Standard", "Premium"].map((item) => prefCard(item, pref.budget === item, `${item} level`)).join("")}</div>
    </section>
    <section class="section">
      <h2 class="section-title">Travel Pace</h2>
      <div class="segmented">${["Relaxed", "Balanced", "Packed"].map((item) => `<button class="${pref.pace === item ? "active" : ""}" data-pref-pace="${item}">${item}</button>`).join("")}</div>
    </section>
    <section class="section">
      <h2 class="section-title">Preferred Transport</h2>
      <div class="grid-2">${["Transit", "Walking", "Taxi/Ride", "Rental Car"].map((item) => `<button class="btn ${pref.transport.includes(item) ? "primary" : ""}" data-pref-transport="${item}">${icon(item === "Walking" ? "directions_walk" : item === "Transit" ? "train" : "directions_car")} ${item}</button>`).join("")}</div>
    </section>
    <button class="btn primary full section" id="save-preferences">Save Preferences</button>
  `, "profile");
}

function prefCard(title, selected, price) {
  return `<button class="card card-pad row between" data-pref-budget="${title}" style="width:100%;text-align:left;border-color:${selected ? "var(--primary)" : "var(--outline-variant)"};background:${selected ? "#eef8fc" : "var(--surface-lowest)"}">
    <span><strong>${title}</strong><br><span class="small muted">${title === "Economy" ? "Budget-conscious, essential comfort" : title === "Standard" ? "Balanced cost and convenience" : "Luxury, high-end experiences"}</span></span>
    <strong>${price}</strong>
  </button>`;
}

function settingsCheck(label, on) {
  return `<div class="settings-row"><span>${label}</span><span class="checkbox ${on ? "on" : ""}">${on ? icon("check") : ""}</span></div>`;
}

function toggleRow(label, on) {
  return `<div class="settings-row"><span>${label}</span><span class="toggle ${on ? "on" : ""}"></span></div>`;
}

function renderSavedHistory() {
  return layout(`
    ${topbar("Saved & History", { back: "profile" })}
    <div class="segmented">
      ${[["savedTrips", "Saved Trips"], ["savedDestinations", "Destinations"], ["history", "History"]].map(([id, label]) => `<button class="${state.selectedTab === id ? "active" : ""}" data-saved-tab="${id}">${label}</button>`).join("")}
    </div>
    <section class="section">
      ${state.selectedTab === "savedTrips" ? savedTripsContent() : state.selectedTab === "savedDestinations" ? savedDestinationsContent() : historyContent()}
    </section>
  `, "profile");
}

function savedTripsContent() {
  const list = sortedItineraries().map((trip) => `<article class="card card-pad">
    <div class="row between"><h3 style="margin:0">${trip.title}</h3><span class="status">${itineraryStatusLabel(trip)}</span></div>
    <p class="small muted">${trip.destination} · ${trip.dates}</p>
    <p class="small">${trip.attractions} saved attractions</p>
    <button class="btn primary" style="margin-top:10px" data-route="itinerary" data-itinerary-id="${trip.id}">View</button>
  </article>`).join("");
  return `<h2 class="section-title">Saved Trips</h2><div class="list">${list || emptyState("No saved trips yet.", "Created itineraries will appear here.", "createItinerary", "Create Itinerary")}</div>`;
}

function savedDestinationsContent() {
  const list = state.savedDestinations.map((saved) => {
    const destination = {
      id: saved.destinationId || saved.id,
      title: saved.title || "Saved destination",
      image: saved.image || "",
      category: saved.category || "Destination"
    };
    return `<article class="card split-card">
      <img class="thumb" src="${destination.image}" alt="${destination.title}">
      <div style="flex:1">
        <h3>${destination.title}</h3>
        <p class="small muted">${destination.category}${saved.note ? ` · ${saved.note}` : ""}</p>
        <button class="btn danger" style="margin-top:10px" data-remove-saved="${saved.destinationId || destination.id}">Remove</button>
      </div>
    </article>`;
  }).join("");
  return `<h2 class="section-title">Saved Destinations</h2><div class="list">${list || emptyState("No saved destinations yet.", "Saved places from destination details will appear here.", "search", "Browse Destinations")}</div>`;
}

function historyContent() {
  const list = pastItineraries().map((trip) => `<article class="card card-pad">
    <div class="row between"><h3 style="margin:0">${trip.title}</h3><span class="status">${itineraryStatusLabel(trip)}</span></div>
    <p class="small muted">${trip.destination} · ${trip.dates}</p>
    <button class="btn primary" style="margin-top:10px" data-route="itinerary" data-itinerary-id="${trip.id}">View</button>
  </article>`).join("");
  return `<h2 class="section-title">Travel History</h2><div class="list">${list || emptyState("No history yet.", "Past itineraries will appear here.", "profile", "Back to Profile")}</div>`;
}

function renderNotifications() {
  const backRoute = state.notificationBackRoute || (["home", "profile", "itinerary"].includes(state.previousRoute) ? state.previousRoute : "home");
  const items = [
    ["flight_takeoff", "Check-in Reminder", "Flight JL 001 opens check-in tomorrow at 09:00.", "Today"],
    ["event_note", "Itinerary Update", "Tokyo National Museum moved to Day 1 afternoon.", "Today"],
    ["sell", "Kyoto Price Drop", "Recommended Kyoto route estimate dropped by 12%.", "Yesterday"],
    ["sync_problem", "Calendar Sync Warning", "Google Calendar disconnected. Reconnect from Profile.", "Earlier"]
  ];
  return layout(`
    ${topbar("Notifications", { back: backRoute, action: `<button class="icon-btn">${icon("tune")}</button>` })}
    <div class="grid-2">
      <article class="card card-pad"><p class="label">Trips</p><h2>2</h2></article>
      <article class="card card-pad"><p class="label">Alerts</p><h2>4</h2></article>
    </div>
    <section class="section list">
      ${items.map(([material, title, body, time]) => `<article class="card card-pad row" style="align-items:flex-start">
        <div class="brand-mark">${icon(material)}</div>
        <div>
          <div class="row between"><h3 style="margin:0">${title}</h3><span class="small muted">${time}</span></div>
          <p class="small muted">${body}</p>
        </div>
      </article>`).join("")}
    </section>
  `, "profile");
}

function renderStates() {
  return layout(`
    ${topbar("UI States", { back: "profile" })}
    <section class="state-grid">
      ${stateCard("Invalid phone number", "Please enter a valid phone number.", "error")}
      ${stateCard("Wrong verification code", "Invalid verification code. Please try again.", "error")}
      <article class="card card-pad"><h3>Search loading</h3><div class="skeleton" style="width:70%;margin-top:12px"></div><div class="skeleton" style="width:95%;margin-top:8px;height:54px"></div></article>
      ${emptyState("No destinations found.", "Try changing filters or keywords.", "filters", "Adjust Filters")}
      ${stateCard("Recommendation unavailable", "Recommendations are unavailable. Update preferences or retry.", "warn", "Retry")}
      ${stateCard("Itinerary saved", "Saved successfully.", "success")}
      ${stateCard("Missing itinerary field", "Please complete required fields before saving.", "warn")}
      ${stateCard("Network interruption", "Connection lost. Your input has been preserved.", "error", "Retry")}
      ${stateCard("Map loading failure", "Map loading failed. Please retry.", "warn", "Retry")}
    </section>
  `, "profile");
}

function stateCard(title, body, tone, action) {
  const statusClass = tone === "success" ? "success" : tone === "warn" ? "warn" : "";
  return `<article class="card card-pad">
    <div class="row between"><h3 style="margin:0">${title}</h3><span class="status ${statusClass}">${tone}</span></div>
    <p class="small muted">${body}</p>
    ${action ? `<button class="btn" style="margin-top:10px">${action}</button>` : ""}
  </article>`;
}

function emptyState(title, body, route, label) {
  return `<article class="card card-pad" style="text-align:center">
    <div class="brand-mark" style="margin:0 auto 10px">${icon("search_off")}</div>
    <h3 style="margin:0">${title}</h3>
    <p class="small muted">${body}</p>
    ${route ? `<button class="btn primary" data-route="${route}">${label}</button>` : ""}
  </article>`;
}

const routes = {
  login: renderLogin,
  home: renderHome,
  search: renderSearch,
  results: renderResults,
  filters: renderFilters,
  detail: renderDetail,
  addTrip: renderAddTrip,
  itineraryList: renderItineraryList,
  itinerary: renderItinerary,
  createItinerary: renderCreateItinerary,
  manageTrip: renderManageTrip,
  map: renderMap,
  profile: renderProfile,
  preferences: renderPreferences,
  savedHistory: renderSavedHistory,
  notifications: renderNotifications,
  states: renderStates
};

function render() {
  const view = routes[state.route] || renderLogin;
  app.innerHTML = view();
  attachImageFallbacks();
  attachHandlers();
}

async function openResults(query, options = {}) {
  state.searchQuery = String(query ?? state.searchQuery ?? "").trim();
  if (!options.preserveFilters) clearSearchFilters();
  try {
    const data = await apiGet(searchApiPath());
    const apiResults = data.destinations || [];
    const inferredFilters = inferFiltersFromQuery(state.searchQuery);
    const localBase = Object.keys(inferredFilters).length ? searchDestinationPool() : searchDestinationPool().filter((item) => matchesDestinationQuery(item, state.searchQuery));
    const localMatches = localBase;
    const mergedById = new Map();
    [...apiResults, ...localMatches].forEach((item) => {
      mergedById.set(item.id, mergeDestinationData(item, destinationById(item.id)));
    });
    state.searchResults = rankDestinationsByPreferences([...mergedById.values()]);
    routeTo("results");
  } catch (error) {
    const inferredFilters = inferFiltersFromQuery(state.searchQuery);
    state.searchResults = rankDestinationsByPreferences(Object.keys(inferredFilters).length
      ? searchDestinationPool()
      : searchDestinationPool().filter((item) => matchesDestinationQuery(item, state.searchQuery)));
    if (state.searchResults.length) {
      routeTo("results");
      return;
    }
    setApiError(error.message);
  }
}

async function openDetail(id) {
  try {
    const data = await apiGet(`/destinations/${encodeURIComponent(id)}`);
    state.selectedDestinationId = id;
    state.selectedDestination = data.destination;
    routeTo("detail");
  } catch (error) {
    const localDestination = destinationById(id);
    if (!localDestination) {
      setApiError(error.message);
      return;
    }
    state.selectedDestinationId = id;
    state.selectedDestination = localDestination;
    routeTo("detail");
  }
}

async function refreshSavedHistory() {
  const data = await apiGet("/saved-history");
  state.savedDestinations = data.savedDestinations || [];
  state.travelHistory = data.travelHistory || [];
}

function syncCreateFormState() {
  const title = app.querySelector("#trip-title");
  const destination = app.querySelector("#trip-destination");
  const notes = app.querySelector("#trip-notes");
  if (title) state.createTitle = title.value;
  if (destination) state.createDestinationId = destination.value;
  if (notes) state.createNotes = notes.value;
}

function isDestinationSaved(destinationId) {
  return state.savedDestinations.some((item) => (item.destinationId || item.id) === destinationId);
}

function savedDestinationFallback(destination) {
  return {
    id: destination.id,
    destinationId: destination.id,
    title: destination.title,
    location: destination.location,
    category: destination.category,
    rating: destination.rating,
    image: destination.image,
    description: destination.description,
    note: destination.note || "Saved from destination detail"
  };
}

function attachHandlers() {
  app.querySelectorAll("[data-home-category]").forEach((el) => {
    el.addEventListener("click", () => {
      state.homeCategory = el.dataset.homeCategory;
      state.homeCategoryLocked = true;
      state.homeRecommendationLimit = 1;
      render();
    });
  });

  const moreHomeRecs = app.querySelector("#more-home-recs");
  if (moreHomeRecs) {
    moreHomeRecs.addEventListener("click", () => {
      state.homeRecommendationLimit = homeRecommendationCandidates().length;
      render();
    });
  }

  const saveDestination = app.querySelector("#save-destination");
  if (saveDestination) {
    saveDestination.addEventListener("click", async () => {
      const id = saveDestination.dataset.id || state.selectedDestinationId;
      const destination = destinationById(id) || state.selectedDestination;
      if (!destination) return;

      const saved = isDestinationSaved(id);
      try {
        if (saved) {
          await apiDelete(`/saved-destinations/${encodeURIComponent(id)}`);
          state.savedDestinations = state.savedDestinations.filter((item) => (item.destinationId || item.id) !== id);
          notify("Removed from saved destinations.");
          return;
        }

        const data = await apiPost("/saved-destinations", {
          destinationId: id,
          note: destination.note || "Saved from destination detail"
        });
        state.savedDestinations = data.savedDestinations || state.savedDestinations;
        notify("Destination saved.");
      } catch (error) {
        if (saved) {
          state.savedDestinations = state.savedDestinations.filter((item) => (item.destinationId || item.id) !== id);
          notify("Removed from saved destinations.");
          return;
        }
        if (!isDestinationSaved(id)) {
          state.savedDestinations = [savedDestinationFallback(destination), ...state.savedDestinations];
        }
        notify("Destination saved locally.");
      }
    });
  }

  app.querySelectorAll("[data-filter-field]").forEach((el) => {
    el.addEventListener("click", () => {
      const field = el.dataset.filterField;
      const value = el.dataset.filterValue;
      if (multiSelectFilterFields.has(field)) {
        const values = filterValues(state.searchFilters, field);
        state.searchFilters[field] = values.includes(value) ? values.filter((item) => item !== value) : [...values, value];
      } else {
        state.searchFilters[field] = state.searchFilters[field] === value ? "" : value;
      }
      if (el.dataset.filterSubmit === "true") {
        openResults(state.searchQuery, { preserveFilters: true });
        return;
      }
      render();
    });
  });

  app.querySelectorAll("[data-route]").forEach((el) => {
    el.addEventListener("click", async () => {
      const route = el.dataset.route;
      const id = el.dataset.id;
      const query = el.dataset.query;
      const backRoute = el.dataset.backRoute;
      const itineraryId = el.dataset.itineraryId;
      const mapMode = el.dataset.mapMode;
      const mapPoint = el.dataset.mapPoint;
      const isSuggestedPlan = el.dataset.suggestedPlan === "true";
      if (route === "itineraryList") {
        state.selectedItineraryDay = 1;
      }
      if (route === "results") {
        await openResults(query || state.searchQuery, { preserveFilters: true });
        return;
      }
      if (route === "createItinerary" && !isSuggestedPlan) {
        state.createFromSuggestedPlan = false;
      }
      if (route === "detail" && id) {
        await openDetail(id);
        return;
      }
      if (id) {
        state.selectedDestinationId = id;
        state.selectedDestination = destinationById(id);
      }
      if (route === "addTrip" && mapPoint) {
        state.selectedMapPointId = mapPoint;
        if (itineraryId) {
          state.selectedItineraryId = itineraryId;
          state.selectedItineraryDay = selectedMapPoint()?.day || 1;
        }
      } else if (route === "addTrip") {
        state.selectedMapPointId = "";
      }
      if (route === "map") {
        state.mapFailed = false;
        if (mapMode === "itinerary") {
          const trip = selectedItinerary();
          state.mapMode = "itinerary";
          state.mapItineraryId = trip?.id || state.selectedItineraryId;
          state.mapDestinationId = trip?.destinationId || state.selectedDestinationId;
          state.selectedMapPointId = "";
        } else if (id) {
          state.mapMode = "destination";
          state.mapDestinationId = id;
          state.mapItineraryId = "";
          state.selectedMapPointId = "";
        } else {
          const trip = nearestMapItinerary();
          state.mapMode = trip ? "itinerary" : "destination";
          state.mapItineraryId = trip?.id || "";
          state.mapDestinationId = trip?.destinationId || state.selectedDestinationId;
          state.selectedMapPointId = "";
        }
      }
      if (route === "createItinerary" && isSuggestedPlan) {
        const destination = destinationById(id);
        state.createDestinationId = id;
        state.createTitle = suggestedPlanTitle(destination);
        state.createNotes = `Suggested plan based on ${destination?.title || "selected destination"} key attractions.`;
        state.createFromSuggestedPlan = true;
        state.selectedItineraryDay = 1;
      }
      if (itineraryId && !(route === "addTrip" && mapPoint)) {
        state.selectedItineraryId = itineraryId;
        state.selectedItineraryDay = 1;
      }
      if (query) state.searchQuery = query;
      state.notificationBackRoute = route === "notifications" ? backRoute || state.route : "";
      routeTo(route);
    });
  });

  const login = app.querySelector("#login-btn");
  if (login) {
    login.addEventListener("click", async () => {
      state.loginCountryCode = app.querySelector("#country-code").value;
      state.loginPhone = app.querySelector("#phone").value.trim();
      state.loginCode = app.querySelector("#code").value.trim();
      const phone = state.loginPhone;
      const code = state.loginCode;
      app.querySelector("#phone-error").hidden = phone.length >= 6;
      app.querySelector("#code-error").hidden = code === "123456";
      if (phone.length < 6 || code !== "123456") return;
      try {
        clearApiError();
        await apiPost("/auth/login", { phone, code });
        await loadBootstrap();
        routeTo("home");
      } catch (error) {
        setApiError(error.message);
      }
    });
  }

  const sendCode = app.querySelector("#send-code");
  if (sendCode) {
    sendCode.addEventListener("click", () => {
      state.loginCountryCode = app.querySelector("#country-code").value;
      state.loginPhone = app.querySelector("#phone").value.trim();
      state.loginCode = app.querySelector("#code").value.trim();
      app.querySelector("#phone-error").hidden = state.loginPhone.length >= 6;
      if (state.loginPhone.length < 6) return;
      startCodeCountdown();
    });
  }

  const countryCode = app.querySelector("#country-code");
  const phoneInput = app.querySelector("#phone");
  const codeInput = app.querySelector("#code");
  if (countryCode) countryCode.addEventListener("change", () => {
    state.loginCountryCode = countryCode.value;
  });
  if (phoneInput) phoneInput.addEventListener("input", () => {
    state.loginPhone = phoneInput.value;
  });
  if (codeInput) codeInput.addEventListener("input", () => {
    state.loginCode = codeInput.value;
  });

  const searchInput = app.querySelector("#search-input");
  const runSearch = app.querySelector("#run-search");
  if (runSearch && searchInput) {
    runSearch.addEventListener("click", async () => {
      await openResults(searchInput.value.trim(), { preserveFilters: true });
    });
  } else if (runSearch) {
    runSearch.addEventListener("click", async () => {
      await openResults(state.searchQuery, { preserveFilters: true });
    });
  }

  const clearFilters = app.querySelector("#clear-filters");
  if (clearFilters) {
    clearFilters.addEventListener("click", async () => {
      clearSearchFilters();
      if (state.route === "results") {
        await openResults(state.searchQuery, { preserveFilters: true });
        return;
      }
      render();
    });
  }

  const retryMap = app.querySelector("#retry-map");
  if (retryMap) {
    retryMap.addEventListener("click", () => {
      state.mapFailed = false;
      render();
    });
  }

  const simulateMapFailure = app.querySelector("#simulate-map-failure");
  if (simulateMapFailure) {
    simulateMapFailure.addEventListener("click", () => {
      state.mapFailed = true;
      render();
    });
  }

  app.querySelectorAll(".pin[data-map-point], .route-stop[data-map-point]").forEach((el) => {
    el.addEventListener("click", () => {
      state.selectedMapPointId = el.dataset.mapPoint;
      render();
    });
  });

  const tripTitle = app.querySelector("#trip-title");
  const tripDestination = app.querySelector("#trip-destination");
  const tripNotes = app.querySelector("#trip-notes");
  if (tripTitle) tripTitle.addEventListener("input", () => {
    state.createTitle = tripTitle.value;
  });
  if (tripDestination) tripDestination.addEventListener("change", () => {
    syncCreateFormState();
    state.createDestinationId = tripDestination.value;
    if (state.createFromSuggestedPlan) {
      const destination = destinationById(tripDestination.value);
      state.createTitle = suggestedPlanTitle(destination);
      state.createNotes = `Suggested plan based on ${destination?.title || "selected destination"} key attractions.`;
    }
    render();
  });
  if (tripNotes) tripNotes.addEventListener("input", () => {
    state.createNotes = tripNotes.value;
  });

  app.querySelectorAll("[data-calendar-field]").forEach((el) => {
    el.addEventListener("click", () => {
      syncCreateFormState();
      const field = el.dataset.calendarField;
      const selectedDate = field === "start" ? state.createStartDate : state.createEndDate;
      state.activeCalendarField = state.activeCalendarField === field ? "" : field;
      state.calendarMonth = (selectedDate || state.createStartDate || state.createEndDate || state.calendarMonth).slice(0, 7);
      render();
    });
  });

  app.querySelectorAll("[data-calendar-month]").forEach((el) => {
    el.addEventListener("click", () => {
      syncCreateFormState();
      state.calendarMonth = shiftMonth(state.calendarMonth, Number(el.dataset.calendarMonth));
      render();
    });
  });

  app.querySelectorAll("[data-calendar-date]").forEach((el) => {
    el.addEventListener("click", () => {
      syncCreateFormState();
      const value = el.dataset.calendarDate;
      if (state.activeCalendarField === "start") {
        state.createStartDate = value;
        if (state.createEndDate && parseDateValue(state.createEndDate) < parseDateValue(value)) {
          state.createEndDate = "";
        }
        state.activeCalendarField = "end";
      } else {
        if (state.createStartDate && parseDateValue(value) < parseDateValue(state.createStartDate)) {
          state.createStartDate = value;
        }
        state.createEndDate = value;
        state.activeCalendarField = "";
      }
      state.calendarMonth = value.slice(0, 7);
      render();
    });
  });

  const createForm = app.querySelector("#create-form");
  if (createForm) {
    createForm.addEventListener("submit", async (event) => {
      event.preventDefault();
      const title = app.querySelector("#trip-title").value.trim();
      const destinationId = app.querySelector("#trip-destination").value;
      const destination = destinationById(destinationId);
      const start = app.querySelector("#start-date").value;
      const end = app.querySelector("#end-date").value;
      const validDateRange = Boolean(start && end) && new Date(`${end}T00:00:00`) >= new Date(`${start}T00:00:00`);
      app.querySelector("#title-error").hidden = Boolean(title);
      app.querySelector("#destination-error").hidden = Boolean(destination);
      app.querySelector("#date-error").hidden = validDateRange;
      if (!title || !destination || !validDateRange) return;
      const plannedDayCount = tripDayCount({ startDate: start, endDate: end });
      const itineraryItems = state.createFromSuggestedPlan
        ? suggestedPlanItems(destination, plannedDayCount)
        : [];
      try {
        const data = await apiPost("/itineraries", {
          title,
          destinationId,
          startDate: start,
          endDate: end,
          notes: state.createNotes || (state.createFromSuggestedPlan ? "Created from suggested plan." : "Created as an empty itinerary."),
          items: itineraryItems
        });
        state.itineraries.unshift(normalizeItineraryDays(data.itinerary));
        state.selectedItineraryId = data.itinerary.id;
        state.createStartDate = "";
        state.createEndDate = "";
        state.createTitle = "";
        state.createDestinationId = "";
        state.createNotes = "";
        state.createFromSuggestedPlan = false;
        state.activeCalendarField = "";
        state.selectedItineraryDay = 1;
        routeTo("itineraryList");
        notify("Saved successfully.");
      } catch (error) {
        setApiError(error.message);
      }
    });
  }

  const addToItinerary = app.querySelector("#add-to-itinerary");
  if (addToItinerary) {
    addToItinerary.addEventListener("click", () => {
      const trip = selectedItinerary();
      const destination = destinationById(state.selectedDestinationId);
      const point = (state.previousRoute === "map" ? selectedMapPoint() : null) || {
        title: destination?.attractions?.[0]?.name || destination?.title || "Selected stop",
        location: destination?.title || "Destination",
        time: "09:00",
        note: "Added from destination detail"
      };
      if (!trip) {
        notify("Choose an itinerary first.");
        return;
      }
      if (point.canAdd === false || trip.items.some((item) => normalizeStopName(item.title) === normalizeStopName(point.title))) {
        notify("This stop is already in the timeline.");
        return;
      }
      const time = app.querySelector("#add-stop-time")?.value || point.time || "09:00";
      const note = app.querySelector("#add-stop-note")?.value.trim() || point.note || "Added from map";
      const day = Math.min(Math.max(1, state.selectedItineraryDay || point.day || 1), tripDayCount(trip));
      trip.items.push({
        id: `local-${Date.now()}`,
        day,
        time,
        title: point.title,
        location: point.location || trip.destination,
        note,
        sortOrder: (day - 1) * 1000 + dayItems(trip, day).length
      });
      trip.items.sort((a, b) => (a.day || 1) - (b.day || 1) || String(a.time || "").localeCompare(String(b.time || "")));
      state.selectedItineraryDay = day;
      routeTo("itinerary");
      notify("Stop added to itinerary.");
    });
  }

  const saveChanges = app.querySelector("#save-changes");
  if (saveChanges) {
    saveChanges.addEventListener("click", async () => {
      const trip = selectedItinerary();
      if (!trip) return;
      try {
        const savedItems = trip.items
          .slice()
          .sort((a, b) => (a.day || 1) - (b.day || 1) || String(a.time || "").localeCompare(String(b.time || "")));
        const data = await apiPut(`/itineraries/${encodeURIComponent(trip.id)}`, {
          title: trip.title,
          destinationId: trip.destinationId || destinationById(state.selectedDestinationId)?.id || state.destinations[0]?.id,
          startDate: trip.startDate,
          endDate: trip.endDate,
          status: trip.status,
          notes: trip.notes || "",
          items: savedItems.map((item, index) => ({
            day: item.day || 1,
            time: item.time,
            title: item.title,
            location: item.location,
            note: item.note,
            sortOrder: ((item.day || 1) - 1) * 1000 + index
          }))
        });
        const tripIndex = state.itineraries.findIndex((item) => item.id === trip.id);
        const normalizedItinerary = normalizeItineraryDays(data.itinerary);
        if (tripIndex >= 0) state.itineraries[tripIndex] = normalizedItinerary;
        state.selectedItineraryId = normalizedItinerary.id;
        state.editingTimelineItemId = "";
        state.isAddingTimelineItem = false;
        routeTo("itinerary");
        notify("Timeline saved.");
      } catch (error) {
        setApiError(error.message);
      }
    });
  }

  const deleteItinerary = app.querySelector("#delete-itinerary");
  if (deleteItinerary) {
    deleteItinerary.addEventListener("click", async () => {
      const trip = selectedItinerary();
      if (!trip) return;
      try {
        await apiDelete(`/itineraries/${encodeURIComponent(trip.id)}`);
      } catch (error) {
        if (!String(trip.id).startsWith("local-")) {
          setApiError(error.message);
          return;
        }
      }
      state.itineraries = state.itineraries.filter((item) => item.id !== trip.id);
      state.selectedItineraryId = state.itineraries[0]?.id || "";
      state.selectedItineraryDay = 1;
      state.editingTimelineItemId = "";
      state.isAddingTimelineItem = false;
      routeTo("itineraryList");
      notify("Itinerary deleted.");
    });
  }

  app.querySelectorAll("[data-itinerary-day]").forEach((el) => {
    el.addEventListener("click", () => {
      state.selectedItineraryDay = Number(el.dataset.itineraryDay);
      state.editingTimelineItemId = "";
      state.isAddingTimelineItem = false;
      render();
    });
  });

  app.querySelectorAll("[data-edit-item]").forEach((el) => {
    el.addEventListener("click", () => {
      state.isAddingTimelineItem = false;
      state.editingTimelineItemId = el.dataset.editItem;
      render();
    });
  });

  const addTimelineItem = app.querySelector("#add-timeline-item");
  if (addTimelineItem) {
    addTimelineItem.addEventListener("click", () => {
      state.editingTimelineItemId = "";
      state.isAddingTimelineItem = true;
      render();
    });
  }

  const cancelNewItem = app.querySelector("#cancel-new-item");
  if (cancelNewItem) {
    cancelNewItem.addEventListener("click", () => {
      state.isAddingTimelineItem = false;
      render();
    });
  }

  const saveNewItem = app.querySelector("#save-new-item");
  if (saveNewItem) {
    saveNewItem.addEventListener("click", () => {
      const trip = selectedItinerary();
      if (!trip) return;
      const title = app.querySelector("#new-item-title").value.trim();
      const time = app.querySelector("#new-item-time").value.trim() || "09:00";
      const location = app.querySelector("#new-item-location").value.trim() || trip.destination;
      const note = app.querySelector("#new-item-note").value.trim();
      if (!title) {
        notify("Event title is required.");
        return;
      }
      trip.items.push({
        id: `local-${Date.now()}`,
        day: state.selectedItineraryDay,
        time,
        title,
        location,
        note,
        sortOrder: (state.selectedItineraryDay - 1) * 1000 + dayItems(trip, state.selectedItineraryDay).length
      });
      trip.items.sort((a, b) => (a.day || 1) - (b.day || 1) || String(a.time || "").localeCompare(String(b.time || "")));
      state.isAddingTimelineItem = false;
      render();
      notify("Event added.");
    });
  }

  app.querySelectorAll("[data-cancel-edit]").forEach((el) => {
    el.addEventListener("click", () => {
      state.editingTimelineItemId = "";
      render();
    });
  });

  app.querySelectorAll("[data-save-item]").forEach((el) => {
    el.addEventListener("click", () => {
      const trip = selectedItinerary();
      const item = trip?.items.find((entry) => entry.id === el.dataset.saveItem);
      const editor = app.querySelector(`[data-timeline-item="${el.dataset.saveItem}"]`);
      if (!trip || !item || !editor) return;
      item.time = editor.querySelector('[data-edit-field="time"]').value.trim() || item.time;
      item.title = editor.querySelector('[data-edit-field="title"]').value.trim() || item.title;
      item.location = editor.querySelector('[data-edit-field="location"]').value.trim() || item.location;
      item.note = editor.querySelector('[data-edit-field="note"]').value.trim();
      state.editingTimelineItemId = "";
      render();
      notify("Timeline item updated.");
    });
  });

  app.querySelectorAll("[data-delete-item]").forEach((el) => {
    el.addEventListener("click", () => {
      const trip = selectedItinerary();
      if (!trip) return;
      trip.items = trip.items.filter((item) => item.id !== el.dataset.deleteItem);
      state.editingTimelineItemId = "";
      state.isAddingTimelineItem = false;
      render();
      notify("Timeline item deleted.");
    });
  });

  app.querySelectorAll("[data-pref-budget]").forEach((el) => {
    el.addEventListener("click", () => {
      state.preferences.budget = el.dataset.prefBudget;
      render();
    });
  });

  app.querySelectorAll("[data-pref-pace]").forEach((el) => {
    el.addEventListener("click", () => {
      state.preferences.pace = el.dataset.prefPace;
      render();
    });
  });

  app.querySelectorAll("[data-pref-transport]").forEach((el) => {
    el.addEventListener("click", () => {
      const item = el.dataset.prefTransport;
      const list = state.preferences.transport;
      state.preferences.transport = list.includes(item) ? list.filter((x) => x !== item) : [...list, item];
      render();
    });
  });

  app.querySelectorAll("[data-pref-list]").forEach((el) => {
    el.addEventListener("click", () => {
      const key = el.dataset.prefList;
      const value = el.dataset.prefValue;
      const list = preferenceValues(key);
      state.preferences[key] = list.includes(value) ? list.filter((item) => item !== value) : [...list, value];
      if (key === "preferenceTags") {
        state.preferences.interests = state.preferences.preferenceTags.filter((item) => filterOptions.travelStyle.includes(item));
        state.preferences.destinations = state.preferences.preferenceTags.filter((item) => filterOptions.category.includes(item));
      }
      render();
    });
  });

  app.querySelectorAll("[data-trip]").forEach((el) => {
    el.addEventListener("click", () => {
      state.selectedItineraryId = el.dataset.trip;
      state.selectedItineraryDay = 1;
      render();
      notify("Target trip selected.");
    });
  });

  const savePref = app.querySelector("#save-preferences");
  if (savePref) {
    savePref.addEventListener("click", async () => {
      try {
        const localPreferenceExtensions = saveLocalPreferenceExtensions(state.preferences);
        const data = await apiPut("/preferences", state.preferences);
        state.preferences = { ...state.preferences, ...(data.preferences || {}), ...localPreferenceExtensions };
        state.homeCategoryLocked = false;
        state.homeCategory = "";
        state.homeRecommendationLimit = 1;
        routeTo("home");
        notify("Preferences saved. Recommendations updated.");
      } catch (error) {
        setApiError(error.message);
      }
    });
  }

  app.querySelectorAll("[data-saved-tab]").forEach((el) => {
    el.addEventListener("click", () => {
      state.selectedTab = el.dataset.savedTab;
      render();
    });
  });

  app.querySelectorAll("[data-remove-saved]").forEach((el) => {
    el.addEventListener("click", async () => {
      try {
        await apiDelete(`/saved-destinations/${encodeURIComponent(el.dataset.removeSaved)}`);
        await refreshSavedHistory();
        render();
      } catch (error) {
        setApiError(error.message);
      }
    });
  });

  const retryApi = app.querySelector("#retry-api");
  if (retryApi) {
    retryApi.addEventListener("click", async () => {
      try {
        await loadBootstrap();
        clearApiError();
        render();
      } catch (error) {
        setApiError(error.message);
      }
    });
  }
}

render();
