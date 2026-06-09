insert into users (id, phone, display_name)
values ('00000000-0000-4000-8000-000000000001', '+10000000000', 'Alex Chen')
on conflict (phone) do update set display_name = excluded.display_name;

delete from itineraries
where user_id = '00000000-0000-4000-8000-000000000001'
  and id not in (
    '10000000-0000-4000-8000-000000000001',
    '10000000-0000-4000-8000-000000000002'
  );

delete from saved_destinations
where user_id = '00000000-0000-4000-8000-000000000001';

insert into destinations (id, title, location, country_region, category, rating, image, description, note, budget_level, travel_styles, recommended_duration)
values
  ('kyoto', 'Kyoto, Japan', 'Kansai, Japan', 'Japan', 'Culture', 4.8, 'https://lh3.googleusercontent.com/aida-public/AB6AXuA-31OOZvn8lNHLI2hfdjfY_fMy4SHkekgwCYFZiCNW4MY2lFI1De60_uHrQHTyuoA5icTou2uxDgw6DgL0R4PKxbdXG0WMi23YKWW3kUTWSMZbTCgI9YEwOblB8UaLFdsGfuECLMbmf36G8Kec_8bS6FpTOF_i1QP8_bHAB09NyUURYlp_5qviNrPeG5Sswlxf5IYjj7SmWcstTCIc-hpu6Q5n2vRqSdaNBdU-h-paTJAmL9_LsHL03giOnkzFVnqTkuEhul2cr6Y', 'Historic temples, compact neighborhoods, bamboo paths, and refined food streets for a balanced cultural trip.', 'Best in spring and early autumn', 'Standard', array['Culture', 'Food', 'Walkable'], '3-5 days'),
  ('tokyo', 'Tokyo, Japan', 'Kanto, Japan', 'Japan', 'City', 4.7, 'https://lh3.googleusercontent.com/aida-public/AB6AXuA2vfyFg568xSeVQgRNG9o2IY_J03tyLh6cSQZF806tFYYXUNxdP8xY1J3_PRv5l1bn2GjDL1l-IjhPRHye2DdGPHMeYY0cBmpsFjiW2kwDVtVfVfWiTizrHCUmCrBFz33dIwyaZOXPTugNlOGqJ3dU2bgYHld9tfvDNySKOBpOE14dNINYWxsLEhFx-7dgoCFiG_7wpkr7V-1vL9WYassJfUeblW2f4dO8z5DfBPULjuW57U2SllX3gZUV5Wm5ooNr2GYhT4fcvp8', 'High-density neighborhoods, museums, transit access, and a strong food itinerary for first-time visitors.', 'Excellent for 5 to 7 day plans', 'Standard', array['Food', 'Culture', 'Family', 'Walkable'], '1 week'),
  ('santorini', 'Santorini, Greece', 'Cyclades, Greece', 'Greece', 'Relaxation', 4.6, 'https://lh3.googleusercontent.com/aida-public/AB6AXuCtvYGuhrhG61NkXeFiH83aldHlIkXvhNPri-GGEvdxl5VlW17MdCNDEwPCvSGTzhdUlHlyjrzZijGTFvMBMBrvZRxtDfRaEoR9buKMQaE8EdswCIdHy9Iu-dSFxY7Ft0vdYIdXk9FWU3QmZkWTk55VaSbTdh2vhjaY1-1RzcGLzAdzWCf85z8ojWmvuR_bRWHTTQsoV3KnSGOEI9KmndngOa2lVe4YBYhZ4UYTq4_tccxMxlSZpjeiWkNyC8CfZC9LlfcV_piCOtc', 'Bright cliffside villages, short scenic walks, and slower-paced island planning.', 'Popular for couples and photography', 'Premium', array['Relaxation', 'Walkable'], '3-5 days'),
  ('costa-rica', 'Costa Rica Eco Lodge', 'La Fortuna, Costa Rica', 'Costa Rica', 'Nature', 4.5, 'https://lh3.googleusercontent.com/aida-public/AB6AXuAe4o60Ly0TVLz18qsJVnnP6B0ZUf10yFs13JURfhcebNJRVomVEFNaQXgZPNJjf40hPlef3UwFF7bq7gzrSpBcNteeWMuzvqS0ben5tNCURWJUddVY9RtqmQLEFuUucJEtiuJvgWOkhDQqis8WrMZLpP69ceOc7R1_4DLYvT67P5k8Ow2rmZmoCh6v5gtH6o1MKdiYEmzX8ASAtb1TWP1RIyDoBgmx6tQnSD6LGxtHmKG3pq7lUgqv1iujzsFboq_PjBIEyEO6_Ls', 'Rainforest stays, nature routes, and compact adventure planning.', 'Good for wildlife and low-key adventure', 'Standard', array['Nature', 'Adventure', 'Relaxation'], '1 week'),
  ('bali', 'Bali, Indonesia', 'Indonesia', 'Indonesia', 'Beach', 4.8, 'https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=1200&q=80', 'Calm beaches, temple stops, cafes, and flexible day trips for a slower island route.', 'Good for relaxed 4 to 6 day plans', 'Standard', array['Relaxation', 'Food', 'Culture'], '3-5 days'),
  ('maui', 'Maui, Hawaii', 'Hawaii, United States', 'United States', 'Beach', 4.7, 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=80', 'Coastal drives, beach time, sunrise viewpoints, and compact nature stops.', 'Best with a rental car', 'Premium', array['Nature', 'Family', 'Relaxation', 'Adventure'], '1 week'),
  ('interlaken', 'Interlaken, Switzerland', 'Bernese Oberland, Switzerland', 'Switzerland', 'Mountain', 4.8, 'https://images.unsplash.com/photo-1531366936337-7c912a4589a7?auto=format&fit=crop&w=1200&q=80', 'Lake towns, mountain railways, scenic viewpoints, and light adventure planning.', 'Great for train-based routes', 'Premium', array['Nature', 'Adventure', 'Walkable'], '3-5 days'),
  ('osaka', 'Osaka, Japan', 'Kansai, Japan', 'Japan', 'Food', 4.6, 'https://images.unsplash.com/photo-1590559899731-a382839e5549?auto=format&fit=crop&w=1200&q=80', 'Dense food streets, easy transit, markets, and short cultural side trips.', 'Easy to combine with Kyoto', 'Standard', array['Food', 'Culture', 'Walkable'], 'Weekend'),
  ('barcelona', 'Barcelona, Spain', 'Catalonia, Spain', 'Spain', 'Culture', 4.7, 'https://images.unsplash.com/photo-1539037116277-4db20889f2d4?auto=format&fit=crop&w=1200&q=80', 'Architecture-heavy neighborhoods, tapas routes, beaches, and walkable districts for mixed culture and food plans.', 'Strong option for first-time Europe routes', 'Standard', array['Culture', 'Food', 'Walkable', 'Family'], '3-5 days'),
  ('queenstown', 'Queenstown, New Zealand', 'Otago, New Zealand', 'New Zealand', 'Adventure', 4.8, 'https://images.unsplash.com/photo-1507699622108-4be3abd695ad?auto=format&fit=crop&w=1200&q=80', 'Lake views, mountain trails, high-adrenaline activities, and scenic drives for outdoor-focused itineraries.', 'Best when paired with nearby national parks', 'Premium', array['Adventure', 'Nature'], '1 week'),
  ('paris', 'Paris, France', 'Ile-de-France, France', 'France', 'City', 4.7, 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&w=1200&q=80', 'Museums, food streets, compact transit, gardens, and classic landmarks for city and culture planning.', 'Works well for 3 to 5 day museum routes', 'Premium', array['Culture', 'Food', 'Walkable', 'Family'], '3-5 days'),
  ('bangkok', 'Bangkok, Thailand', 'Central Thailand, Thailand', 'Thailand', 'Food', 4.6, 'https://images.unsplash.com/photo-1508009603885-50cf7c579365?auto=format&fit=crop&w=1200&q=80', 'Street food, river temples, markets, and flexible day trips for budget-friendly urban exploration.', 'Good for food-first routes', 'Economy', array['Food', 'Culture', 'Walkable'], '3-5 days'),
  ('vancouver', 'Vancouver, Canada', 'British Columbia, Canada', 'Canada', 'Family', 4.6, 'https://commons.wikimedia.org/wiki/Special:FilePath/Vancouver%20%28BC%2C%20Canada%29%2C%20Stanley%20Park%2C%20Stanley%20Park%20Seawall%20Path%20--%202022%20--%202056.jpg?width=1200', 'Harbor walks, parks, easy nature access, and relaxed neighborhoods for family-friendly pacing.', 'Good balance of city and nature', 'Standard', array['Family', 'Nature', 'Walkable', 'Relaxation'], '3-5 days'),
  ('iceland-ring-road', 'Iceland Ring Road', 'Iceland', 'Iceland', 'Nature', 4.8, 'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1200&q=80', 'Waterfalls, black-sand beaches, glaciers, and long scenic drives for extended nature itineraries.', 'Best for longer road-trip planning', 'Premium', array['Nature', 'Adventure'], '2+ weeks')
on conflict (id) do update set
  title = excluded.title,
  location = excluded.location,
  country_region = excluded.country_region,
  category = excluded.category,
  rating = excluded.rating,
  image = excluded.image,
  description = excluded.description,
  note = excluded.note,
  budget_level = excluded.budget_level,
  travel_styles = excluded.travel_styles,
  recommended_duration = excluded.recommended_duration;

update destinations
set lat = coords.lat, lng = coords.lng
from (values
  ('kyoto', 35.0116, 135.7681),
  ('tokyo', 35.6762, 139.6503),
  ('santorini', 36.3932, 25.4615),
  ('costa-rica', 10.4712, -84.6453),
  ('bali', -8.3405, 115.0920),
  ('maui', 20.7984, -156.3319),
  ('interlaken', 46.6863, 7.8632),
  ('osaka', 34.6937, 135.5023),
  ('barcelona', 41.3874, 2.1686),
  ('queenstown', -45.0312, 168.6626),
  ('paris', 48.8566, 2.3522),
  ('bangkok', 13.7563, 100.5018),
  ('vancouver', 49.2827, -123.1207),
  ('iceland-ring-road', 64.9631, -19.0208)
) as coords(id, lat, lng)
where destinations.id = coords.id;

insert into destination_attractions (id, destination_id, name, visit_time, image)
values
  ('fushimi', 'kyoto', 'Fushimi Inari-taisha', '2.5 hr', 'https://lh3.googleusercontent.com/aida-public/AB6AXuDPXzIi6VRmsD7RPjjetHYhK06qsDNbDNVwjvAJfcQO47Xp6pEqulQ8v2HZXMIRiKrBYsfxF6YwK-SdM4OPoCydTqHnY4Aj-740IqWjbAYz4SiBmY_pu9f2KobrPpOozT3c4sZwh98OYFPinhA7F_ffa7ylJ_gSdLI6DYV9wv8gyliBSiXUKj2h-pWoaiwdZJYMHAILX2T5kzveA5teLZW00BAZmYFt7ml_PkxzqJaWgOJ6vXJUOozNEvNWKtSB73QxACCXiJm9D5A'),
  ('kiyomizu', 'kyoto', 'Kiyomizu-dera', '2 hr', 'https://lh3.googleusercontent.com/aida-public/AB6AXuDDjEI3fJcE2ubR5EW6h55PEG3ZSdZUfuZUzR9T9Ykbnf_bUCjbfyMVkl5q8mfIlZNAJFzJb5o-Fh1Utx58iD9smbAJXBRSJ9YSVZpoW3PgttLTWQ4jgyHK0iefwOhnoM-zWtR_d0Upeyk5RN4pgkX_zSne_unG-FMrV_fMMzCGa4OxDpAmPLaa_K-Xl0JyAAnFEHJCfkZz1-8Rox_5jUnaGzolOYQ__3HHEdr822BuiClE9hWM-tieVVkL8b7RDKohmfVP0r0KKt0'),
  ('arashiyama', 'kyoto', 'Arashiyama Bamboo Grove', '1.5 hr', 'https://lh3.googleusercontent.com/aida-public/AB6AXuA-31OOZvn8lNHLI2hfdjfY_fMy4SHkekgwCYFZiCNW4MY2lFI1De60_uHrQHTyuoA5icTou2uxDgw6DgL0R4PKxbdXG0WMi23YKWW3kUTWSMZbTCgI9YEwOblB8UaLFdsGfuECLMbmf36G8Kec_8bS6FpTOF_i1QP8_bHAB09NyUURYlp_5qviNrPeG5Sswlxf5IYjj7SmWcstTCIc-hpu6Q5n2vRqSdaNBdU-h-paTJAmL9_LsHL03giOnkzFVnqTkuEhul2cr6Y'),
  ('museum', 'tokyo', 'Tokyo National Museum', '2 hr', 'https://lh3.googleusercontent.com/aida-public/AB6AXuC4L6VKHOTtwJjkuUT1ZPrACrgilBhvwwHXxi4C_QXj-1W2vG7skDGPcC4ukxqCEDCMdttyJYjC_EJt9hgnna00HkCfaduvmTBpEuHbHOtGboWYT-2yOYf9gUj98shVqIzEzrr-i1gTUWopHEd7_9sj_h8sJIP6cdpCpfSKBz_VVG8CGpPUQBRmEaVeGG0VEcCwAOFAENDRYeOnM0m3TpvZtpvZPVNvJkNfnjs-y4_1kFYkC8WRY4NbYmisTEIS0umB6R1elT-qdzc'),
  ('shinjuku', 'tokyo', 'Shinjuku Gyoen', '1.5 hr', 'https://lh3.googleusercontent.com/aida-public/AB6AXuA2vfyFg568xSeVQgRNG9o2IY_J03tyLh6cSQZF806tFYYXUNxdP8xY1J3_PRv5l1bn2GjDL1l-IjhPRHye2DdGPHMeYY0cBmpsFjiW2kwDVtVfVfWiTizrHCUmCrBFz33dIwyaZOXPTugNlOGqJ3dU2bgYHld9tfvDNySKOBpOE14dNINYWxsLEhFx-7dgoCFiG_7wpkr7V-1vL9WYassJfUeblW2f4dO8z5DfBPULjuW57U2SllX3gZUV5Wm5ooNr2GYhT4fcvp8'),
  ('oia-sunset', 'santorini', 'Oia Sunset Walk', '2 hr', 'https://lh3.googleusercontent.com/aida-public/AB6AXuCtvYGuhrhG61NkXeFiH83aldHlIkXvhNPri-GGEvdxl5VlW17MdCNDEwPCvSGTzhdUlHlyjrzZijGTFvMBMBrvZRxtDfRaEoR9buKMQaE8EdswCIdHy9Iu-dSFxY7Ft0vdYIdXk9FWU3QmZkWTk55VaSbTdh2vhjaY1-1RzcGLzAdzWCf85z8ojWmvuR_bRWHTTQsoV3KnSGOEI9KmndngOa2lVe4YBYhZ4UYTq4_tccxMxlSZpjeiWkNyC8CfZC9LlfcV_piCOtc'),
  ('fira-caldera', 'santorini', 'Fira Caldera Trail', '3 hr', 'https://lh3.googleusercontent.com/aida-public/AB6AXuCtvYGuhrhG61NkXeFiH83aldHlIkXvhNPri-GGEvdxl5VlW17MdCNDEwPCvSGTzhdUlHlyjrzZijGTFvMBMBrvZRxtDfRaEoR9buKMQaE8EdswCIdHy9Iu-dSFxY7Ft0vdYIdXk9FWU3QmZkWTk55VaSbTdh2vhjaY1-1RzcGLzAdzWCf85z8ojWmvuR_bRWHTTQsoV3KnSGOEI9KmndngOa2lVe4YBYhZ4UYTq4_tccxMxlSZpjeiWkNyC8CfZC9LlfcV_piCOtc'),
  ('red-beach', 'santorini', 'Red Beach', '1.5 hr', 'https://lh3.googleusercontent.com/aida-public/AB6AXuCtvYGuhrhG61NkXeFiH83aldHlIkXvhNPri-GGEvdxl5VlW17MdCNDEwPCvSGTzhdUlHlyjrzZijGTFvMBMBrvZRxtDfRaEoR9buKMQaE8EdswCIdHy9Iu-dSFxY7Ft0vdYIdXk9FWU3QmZkWTk55VaSbTdh2vhjaY1-1RzcGLzAdzWCf85z8ojWmvuR_bRWHTTQsoV3KnSGOEI9KmndngOa2lVe4YBYhZ4UYTq4_tccxMxlSZpjeiWkNyC8CfZC9LlfcV_piCOtc'),
  ('arenal-volcano', 'costa-rica', 'Arenal Volcano National Park', '3 hr', 'https://lh3.googleusercontent.com/aida-public/AB6AXuAe4o60Ly0TVLz18qsJVnnP6B0ZUf10yFs13JURfhcebNJRVomVEFNaQXgZPNJjf40hPlef3UwFF7bq7gzrSpBcNteeWMuzvqS0ben5tNCURWJUddVY9RtqmQLEFuUucJEtiuJvgWOkhDQqis8WrMZLpP69ceOc7R1_4DLYvT67P5k8Ow2rmZmoCh6v5gtH6o1MKdiYEmzX8ASAtb1TWP1RIyDoBgmx6tQnSD6LGxtHmKG3pq7lUgqv1iujzsFboq_PjBIEyEO6_Ls'),
  ('la-fortuna-waterfall', 'costa-rica', 'La Fortuna Waterfall', '2 hr', 'https://lh3.googleusercontent.com/aida-public/AB6AXuAe4o60Ly0TVLz18qsJVnnP6B0ZUf10yFs13JURfhcebNJRVomVEFNaQXgZPNJjf40hPlef3UwFF7bq7gzrSpBcNteeWMuzvqS0ben5tNCURWJUddVY9RtqmQLEFuUucJEtiuJvgWOkhDQqis8WrMZLpP69ceOc7R1_4DLYvT67P5k8Ow2rmZmoCh6v5gtH6o1MKdiYEmzX8ASAtb1TWP1RIyDoBgmx6tQnSD6LGxtHmKG3pq7lUgqv1iujzsFboq_PjBIEyEO6_Ls'),
  ('mistico-bridges', 'costa-rica', 'Mistico Hanging Bridges', '2.5 hr', 'https://lh3.googleusercontent.com/aida-public/AB6AXuAe4o60Ly0TVLz18qsJVnnP6B0ZUf10yFs13JURfhcebNJRVomVEFNaQXgZPNJjf40hPlef3UwFF7bq7gzrSpBcNteeWMuzvqS0ben5tNCURWJUddVY9RtqmQLEFuUucJEtiuJvgWOkhDQqis8WrMZLpP69ceOc7R1_4DLYvT67P5k8Ow2rmZmoCh6v5gtH6o1MKdiYEmzX8ASAtb1TWP1RIyDoBgmx6tQnSD6LGxtHmKG3pq7lUgqv1iujzsFboq_PjBIEyEO6_Ls'),
  ('uluwatu-temple', 'bali', 'Uluwatu Temple', '2 hr', 'https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=1200&q=80'),
  ('ubud-rice-terraces', 'bali', 'Ubud Rice Terraces', '2.5 hr', 'https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=1200&q=80'),
  ('seminyak-beach', 'bali', 'Seminyak Beach', '2 hr', 'https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=1200&q=80'),
  ('haleakala', 'maui', 'Haleakala Sunrise', '3 hr', 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=80'),
  ('road-to-hana', 'maui', 'Road to Hana', '6 hr', 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=80'),
  ('kaanapali-beach', 'maui', 'Kaanapali Beach', '2 hr', 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=80'),
  ('harder-kulm', 'interlaken', 'Harder Kulm Viewpoint', '2 hr', 'https://images.unsplash.com/photo-1531366936337-7c912a4589a7?auto=format&fit=crop&w=1200&q=80'),
  ('lake-brienz', 'interlaken', 'Lake Brienz Cruise', '2.5 hr', 'https://images.unsplash.com/photo-1531366936337-7c912a4589a7?auto=format&fit=crop&w=1200&q=80'),
  ('jungfraujoch', 'interlaken', 'Jungfraujoch Day Trip', '6 hr', 'https://images.unsplash.com/photo-1531366936337-7c912a4589a7?auto=format&fit=crop&w=1200&q=80'),
  ('dotonbori', 'osaka', 'Dotonbori Food Street', '2 hr', 'https://images.unsplash.com/photo-1590559899731-a382839e5549?auto=format&fit=crop&w=1200&q=80'),
  ('kuromon-market', 'osaka', 'Kuromon Ichiba Market', '1.5 hr', 'https://images.unsplash.com/photo-1590559899731-a382839e5549?auto=format&fit=crop&w=1200&q=80'),
  ('osaka-castle', 'osaka', 'Osaka Castle', '2 hr', 'https://images.unsplash.com/photo-1590559899731-a382839e5549?auto=format&fit=crop&w=1200&q=80'),
  ('sagrada-familia', 'barcelona', 'Sagrada Familia', '2 hr', 'https://images.unsplash.com/photo-1585644877206-5b09c934b03c?auto=format&fit=crop&w=1200&q=80'),
  ('park-guell', 'barcelona', 'Park Guell', '2 hr', 'https://images.unsplash.com/photo-1571768280823-002223e97d96?auto=format&fit=crop&w=1200&q=80'),
  ('gothic-quarter', 'barcelona', 'Gothic Quarter', '2.5 hr', 'https://images.unsplash.com/photo-1523531294919-4bcd7c65e216?auto=format&fit=crop&w=1200&q=80'),
  ('skyline-queenstown', 'queenstown', 'Skyline Queenstown', '2 hr', 'https://images.unsplash.com/photo-1507699622108-4be3abd695ad?auto=format&fit=crop&w=1200&q=80'),
  ('milford-sound', 'queenstown', 'Milford Sound Day Trip', '8 hr', 'https://images.unsplash.com/photo-1600445991849-835579e7e67f?auto=format&fit=crop&w=1200&q=80'),
  ('lake-wakatipu', 'queenstown', 'Lake Wakatipu', '2 hr', 'https://images.unsplash.com/photo-1507699622108-4be3abd695ad?auto=format&fit=crop&w=1200&q=80'),
  ('louvre', 'paris', 'Louvre Museum', '3 hr', 'https://images.unsplash.com/photo-1566139885695-7bd8f5adf8f6?auto=format&fit=crop&w=1200&q=80'),
  ('eiffel-tower', 'paris', 'Eiffel Tower', '2 hr', 'https://images.unsplash.com/photo-1511739001486-6bfe10ce785f?auto=format&fit=crop&w=1200&q=80'),
  ('montmartre', 'paris', 'Montmartre Walk', '2 hr', 'https://images.unsplash.com/photo-1549144511-f099e773c147?auto=format&fit=crop&w=1200&q=80'),
  ('grand-palace', 'bangkok', 'Grand Palace', '2.5 hr', 'https://images.unsplash.com/photo-1562596127-3885a12dcdb6?auto=format&fit=crop&w=1200&q=80'),
  ('wat-arun', 'bangkok', 'Wat Arun', '1.5 hr', 'https://images.unsplash.com/photo-1519451241324-20b4ea2c4220?auto=format&fit=crop&w=1200&q=80'),
  ('chatuchak', 'bangkok', 'Chatuchak Market', '3 hr', 'https://images.unsplash.com/photo-1568191009535-7d8b407d389a?auto=format&fit=crop&w=1200&q=80'),
  ('stanley-park', 'vancouver', 'Stanley Park Seawall', '2.5 hr', 'https://commons.wikimedia.org/wiki/Special:FilePath/Vancouver%20%28BC%2C%20Canada%29%2C%20Stanley%20Park%2C%20Stanley%20Park%20Seawall%20Path%20--%202022%20--%202056.jpg?width=1200'),
  ('granville-island', 'vancouver', 'Granville Island', '2 hr', 'https://commons.wikimedia.org/wiki/Special:FilePath/Granville%20Island%20Public%20Market%201.jpg?width=1200'),
  ('capilano', 'vancouver', 'Capilano Suspension Bridge', '2 hr', 'https://commons.wikimedia.org/wiki/Special:FilePath/Suspension%20bridge%20crossing%20Capilano%20River%20%2813249473553%29.jpg?width=1200'),
  ('skogafoss', 'iceland-ring-road', 'Skogafoss', '1.5 hr', 'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1200&q=80'),
  ('jokulsarlon', 'iceland-ring-road', 'Jokulsarlon Glacier Lagoon', '2 hr', 'https://images.unsplash.com/photo-1504829857797-ddff29c27927?auto=format&fit=crop&w=1200&q=80'),
  ('vik-beach', 'iceland-ring-road', 'Vik Black Sand Beach', '1.5 hr', 'https://images.unsplash.com/photo-1476611338391-6f395a0ebc7b?auto=format&fit=crop&w=1200&q=80')
on conflict (id) do update set
  destination_id = excluded.destination_id,
  name = excluded.name,
  visit_time = excluded.visit_time,
  image = excluded.image;

update destination_attractions
set lat = coords.lat, lng = coords.lng
from (values
  ('fushimi', 34.9671, 135.7727),
  ('kiyomizu', 34.9949, 135.7850),
  ('arashiyama', 35.0172, 135.6710),
  ('museum', 35.7188, 139.7765),
  ('shinjuku', 35.6852, 139.7101),
  ('oia-sunset', 36.4618, 25.3753),
  ('fira-caldera', 36.4167, 25.4333),
  ('red-beach', 36.3486, 25.3940),
  ('arenal-volcano', 10.4627, -84.7032),
  ('la-fortuna-waterfall', 10.4400, -84.6700),
  ('mistico-bridges', 10.4877, -84.7554),
  ('uluwatu-temple', -8.8291, 115.0849),
  ('ubud-rice-terraces', -8.4319, 115.2794),
  ('seminyak-beach', -8.6913, 115.1577),
  ('haleakala', 20.7097, -156.2533),
  ('road-to-hana', 20.7557, -155.9874),
  ('kaanapali-beach', 20.9175, -156.6966),
  ('harder-kulm', 46.6976, 7.8518),
  ('lake-brienz', 46.7269, 8.0336),
  ('jungfraujoch', 46.5475, 7.9854),
  ('dotonbori', 34.6687, 135.5014),
  ('kuromon-market', 34.6651, 135.5065),
  ('osaka-castle', 34.6873, 135.5259),
  ('sagrada-familia', 41.4036, 2.1744),
  ('park-guell', 41.4145, 2.1527),
  ('gothic-quarter', 41.3839, 2.1763),
  ('skyline-queenstown', -45.0264, 168.6587),
  ('milford-sound', -44.6716, 167.9256),
  ('lake-wakatipu', -45.0740, 168.5187),
  ('louvre', 48.8606, 2.3376),
  ('eiffel-tower', 48.8584, 2.2945),
  ('montmartre', 48.8867, 2.3431),
  ('grand-palace', 13.7500, 100.4913),
  ('wat-arun', 13.7437, 100.4889),
  ('chatuchak', 13.7990, 100.5512),
  ('stanley-park', 49.3043, -123.1443),
  ('granville-island', 49.2712, -123.1340),
  ('capilano', 49.3429, -123.1149),
  ('skogafoss', 63.5321, -19.5114),
  ('jokulsarlon', 64.0784, -16.2306),
  ('vik-beach', 63.4186, -19.0060)
) as coords(id, lat, lng)
where destination_attractions.id = coords.id;

insert into preferences (user_id, budget, pace, dietary, accessibility, transport, language, currency)
values (
  '00000000-0000-4000-8000-000000000001',
  'Standard',
  'Balanced',
  array['No restrictions'],
  array['Low walking routes'],
  array['Transit', 'Walking'],
  'English (US)',
  'USD ($)'
)
on conflict (user_id) do update set
  budget = excluded.budget,
  pace = excluded.pace,
  dietary = excluded.dietary,
  accessibility = excluded.accessibility,
  transport = excluded.transport,
  language = excluded.language,
  currency = excluded.currency,
  updated_at = now();

insert into itineraries (id, user_id, title, destination_id, start_date, end_date, status, notes)
values
  ('10000000-0000-4000-8000-000000000001', '00000000-0000-4000-8000-000000000001', 'Tokyo Spring Trip', 'tokyo', '2026-04-12', '2026-04-18', 'Planned', 'Spring route focused on museums and dining.'),
  ('10000000-0000-4000-8000-000000000002', '00000000-0000-4000-8000-000000000001', 'Kyoto Weekend', 'kyoto', '2026-07-10', '2026-07-13', 'Draft', 'Temple route draft.')
on conflict (id) do update set
  title = excluded.title,
  destination_id = excluded.destination_id,
  start_date = excluded.start_date,
  end_date = excluded.end_date,
  status = excluded.status,
  notes = excluded.notes,
  updated_at = now();

delete from itinerary_items where itinerary_id in (
  '10000000-0000-4000-8000-000000000001',
  '10000000-0000-4000-8000-000000000002'
);

insert into itinerary_items (itinerary_id, time, title, location, note, sort_order)
values
  ('10000000-0000-4000-8000-000000000001', '09:20', 'Flight JL 001', 'Arrival at HND', 'Terminal 3, check rail pass', 0),
  ('10000000-0000-4000-8000-000000000001', '13:30', 'Hotel Check-in', 'Shinjuku', 'Park Hyatt Tokyo', 1),
  ('10000000-0000-4000-8000-000000000001', '15:00', 'Tokyo National Museum', 'Ueno Park', 'Reserve 2 hours', 2),
  ('10000000-0000-4000-8000-000000000001', '19:30', 'Dinner Reservation', 'Ginza', 'Confirm by 17:00', 3),
  ('10000000-0000-4000-8000-000000000002', '08:30', 'Fushimi Inari-taisha', 'Fushimi Ward', 'Start before crowds', 0),
  ('10000000-0000-4000-8000-000000000002', '13:00', 'Kiyomizu-dera', 'Higashiyama', 'Walk through Sannenzaka', 1);

insert into saved_destinations (user_id, destination_id, note)
values
  ('00000000-0000-4000-8000-000000000001', 'kyoto', 'Temples and spring route'),
  ('00000000-0000-4000-8000-000000000001', 'santorini', 'Slow island option'),
  ('00000000-0000-4000-8000-000000000001', 'costa-rica', 'Nature trip candidate')
on conflict (user_id, destination_id) do update set note = excluded.note;

insert into travel_history (id, user_id, destination, completed_date, status)
values
  ('20000000-0000-4000-8000-000000000001', '00000000-0000-4000-8000-000000000001', 'Osaka Food Weekend', '2026-03-02', 'Completed'),
  ('20000000-0000-4000-8000-000000000002', '00000000-0000-4000-8000-000000000001', 'Hokkaido Winter Route', '2026-01-18', 'Completed')
on conflict (id) do update set
  destination = excluded.destination,
  completed_date = excluded.completed_date,
  status = excluded.status;
