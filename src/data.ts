/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Room, Amenity, Testimonial, FAQItem, NearbyPlace } from './types';
import tripleSharingImg from '../unitas gallery/triple sharing.jpeg';

export const ROOMS_DATA: Room[] = [
  {
    id: 'single-sharing',
    name: 'Single Sharing',
    occupancy: 'Single Occupancy',
    price: 11000,
    originalPrice: 13000,
    description: 'Perfect for students and professionals seeking privacy, comfort, and a peaceful living environment.',
    features: [
      'Private Premium Box Bed & Mattress',
      'Exclusive Study Table & Ergonomic Chair',
      'Spacious Wardrobe with Safe Locker',
      'Attached Washroom with Premium Fittings',
      'Dedicated AC & Room Heater Option',
      'Private Balcony with Dehradun Valley Views'
    ],
    image: 'https://lh3.googleusercontent.com/gps-cs-s/APNQkAG4qIOB2Bd_3QSjIkNr6jzv_Z0Hn7t36PNqybbqlc26B2P-7jgz2jsc1LrUXSYtlJK_SKZnrLgCLmDY1DyiJRScC5H42KwumH8PL3THk1URZJWpRuEcHK_p4HyjAIOQ1VcJbfkmmQ=s1360-w1360-h1020-rw',
    images: [
      'https://lh3.googleusercontent.com/gps-cs-s/APNQkAG4qIOB2Bd_3QSjIkNr6jzv_Z0Hn7t36PNqybbqlc26B2P-7jgz2jsc1LrUXSYtlJK_SKZnrLgCLmDY1DyiJRScC5H42KwumH8PL3THk1URZJWpRuEcHK_p4HyjAIOQ1VcJbfkmmQ=s1360-w1360-h1020-rw',
      'https://lh3.googleusercontent.com/gps-cs-s/APNQkAHLJz2YenINiIYW-tjSuOuJDPVHxNaGScfkgaCNyGsegpQPqzrFebIrXon1VZG4QAWG-gkk70OhiBdvOVRaHxBtPgR4iCX0RQDPwf4Wyh3SlDeX9-aoZMI6540ek1ZHej1f3QB8=s1360-w1360-h1020-rw',
      'https://lh3.googleusercontent.com/gps-cs-s/APNQkAEQDDQB5ATVtyb79hfXIw6rxQ3goPe-c-PkkC4IISw4Hfc6ZUY4jgJsXu6X9CrDoM8tbdiz6oWRYTZtRerDCkc6XIM7AyUZIVEjK5_g6COy67r-jeua13KILpi4axL4hs4gNjhC=s1360-w1360-h1020-rw'
    ],
    availability: 'Few Beds Left',
    badge: 'Private Living'
  },
  {
    id: 'twin-sharing',
    name: 'Twin Sharing',
    occupancy: '2-Sharing',
    price: 5500,
    originalPrice: 6500,
    description: 'Designed for friends and roommates who want the ideal balance of comfort, affordability, and convenience.',
    features: [
      'Individual Box Beds & Premium Mattresses',
      'Dual Study Workstations with Lamp Shelves',
      'Two Separate Wardrobes with Lockers',
      'Shared Attached Modern Bathroom',
      'Side Table & Individual USB Charging Ports',
      'Large Ventilated Window with Curtains'
    ],
    image: 'https://lh3.googleusercontent.com/gps-cs-s/APNQkAHVGQOGdK9df0LYJmxQoTgAg0BOgQerqyiCuU6REhd_xoBvfPw10-0xHhSMyZF5TngsWwQrUfNYcIDdOkoTxlmHWM2eTcWcf4pKyUdU0F_LNDbYsLIx-Mkl9aF1MbiUnInhrtsggg=s1360-w1360-h1020-rw',
    images: [
      'https://lh3.googleusercontent.com/gps-cs-s/APNQkAHVGQOGdK9df0LYJmxQoTgAg0BOgQerqyiCuU6REhd_xoBvfPw10-0xHhSMyZF5TngsWwQrUfNYcIDdOkoTxlmHWM2eTcWcf4pKyUdU0F_LNDbYsLIx-Mkl9aF1MbiUnInhrtsggg=s1360-w1360-h1020-rw',
      'https://lh3.googleusercontent.com/gps-cs-s/APNQkAGqykJGUmrhC1LpLQNcw9xMOty2GDGtwvbvb11M1pnLbVPNDtK5_KcXNWYtFOJZTv7Sfx21yW3FTnGju2xhB3FesTZQ8C1sxGxeBGKSwmxS5rO49gFYO8f34prCh1n88TsGXSwXpw=s1360-w1360-h1020-rw',
      'https://lh3.googleusercontent.com/gps-cs-s/APNQkAEsE62xyNtIn-2olLupm6Y7jQ5SGKniZ6Q0bcC-ziS1RbEm8r4I-o6MEv3u0zetXN_1lBgk5XjoGl5xHwqK_qvL4biQm6bKORLbLlmSIZ1GiQV348O9rBkV0EaOFO0JLVt32KaHww=s1360-w1360-h1020-rw'
    ],
    availability: 'Filling Fast',
    badge: 'Most Preferred'
  },
  {
    id: 'triple-sharing',
    name: 'Triple Sharing',
    occupancy: '3-Sharing',
    price: 4500,
    originalPrice: 5500,
    description: 'A budget-friendly shared room offering comfort, community, and all essential premium amenities.',
    features: [
      'Individually Partitioned Sleep Spaces',
      'Three Separate Wardrobes with Lockers',
      'Large Attached Bathroom with Geyser',
      'Ergonomic Work Desks & Custom Lighting',
      'High Ceilings & Large Airy Balcony',
      'Daily Dedicated Housekeeping Included'
    ],
    image: tripleSharingImg,
    images: [
      tripleSharingImg,
      'https://lh3.googleusercontent.com/gps-cs-s/APNQkAGqykJGUmrhC1LpLQNcw9xMOty2GDGtwvbvb11M1pnLbVPNDtK5_KcXNWYtFOJZTv7Sfx21yW3FTnGju2xhB3FesTZQ8C1sxGxeBGKSwmxS5rO49gFYO8f34prCh1n88TsGXSwXpw=s1360-w1360-h1020-rw',
      'https://lh3.googleusercontent.com/gps-cs-s/APNQkAHRamEreFbEd4tC7Q6dxyy6ut0QoRe4aVxc0CFKte66UAwQGIEeYpeXuIN9laRsj0PBQySHtn0Vi0ToYSaQC9x4z55KkswtTQmYbXPWmNFBulATx5_t3-BVwr24rLeEir3OHfkNcg=s1360-w1360-h1020-rw'
    ],
    availability: 'Available',
    badge: 'Best Budget Choice'
  }
];

export const AMENITIES_DATA: Amenity[] = [
  {
    id: 'wifi',
    name: 'High-Speed Wi-Fi',
    iconName: 'Wifi',
    category: 'Essentials',
    description: 'Unlimited high-speed fiber internet for studying, streaming, and remote work.'
  },
  {
    id: 'meals',
    name: 'Nutritious Meals',
    iconName: 'Utensils',
    category: 'Essentials',
    description: 'Fresh home-style vegetarian breakfast, lunch, and dinner with a new menu every day.'
  },
  {
    id: 'ro-water',
    name: 'RO Water Cooler',
    iconName: 'GlassWater',
    category: 'Essentials',
    description: '24×7 RO purified hot & cold drinking water available on every floor.'
  },
  {
    id: 'housekeeping',
    name: 'Daily Housekeeping',
    iconName: 'BrushCleaning',
    category: 'Essentials',
    description: 'Daily housekeeping keeps rooms and common spaces clean and hygienic.'
  },
  {
    id: 'attached-washroom',
    name: 'Attached Washroom',
    iconName: 'ShowerHead',
    category: 'Comfort',
    description: 'Attached modern bathroom with geyser, premium fittings, and 24×7 hot water.'
  },
  {
    id: 'hot-water',
    name: '24×7 Hot Water',
    iconName: 'Heater',
    category: 'Comfort',
    description: 'Geyser-equipped bathrooms with 24×7 hot water for a comfortable daily routine.'
  },
  {
    id: 'study-table',
    name: 'Dedicated Study Table',
    iconName: 'Laptop',
    category: 'Comfort',
    description: 'Dedicated study desk and ergonomic chair designed for focused study and productivity.'
  },
  {
    id: 'wardrobe',
    name: 'Personal Wardrobe',
    iconName: 'DoorClosed',
    category: 'Comfort',
    description: 'Spacious personal wardrobe with secure storage for clothes, books, and daily essentials.'
  },
  {
    id: 'airy-rooms',
    name: 'Well-Ventilated Rooms',
    iconName: 'AirVent',
    category: 'Comfort',
    description: 'Bright, airy rooms with large windows for natural light and fresh ventilation.'
  },
  {
    id: 'attached-balcony',
    name: 'Attached Balcony',
    iconName: 'DoorOpen',
    category: 'Comfort',
    description: 'Private attached balcony with fresh air and natural light for a comfortable everyday living experience.'
  },
  {
    id: 'common-lounge',
    name: 'Common Lounge',
    iconName: 'Tv',
    category: 'Comfort',
    description: 'Relax, socialize, study, or unwind in a comfortable shared lounge with entertainment facilities.'
  },
  {
    id: 'modern-kitchen',
    name: 'Self-Service Kitchen',
    iconName: 'Microwave',
    category: 'Comfort',
    description: 'Fully equipped self-service kitchen for tea, coffee, snacks, and light meals.'
  },
  {
    id: 'security',
    name: '24×7 CCTV Security',
    iconName: 'Cctv',
    category: 'Safety',
    description: '24×7 CCTV surveillance with secure entry for complete peace of mind.'
  },
  {
    id: 'power-backup',
    name: 'Power Backup',
    iconName: 'BatteryCharging',
    category: 'Safety',
    description: 'Automatic power backup ensures uninterrupted comfort during power outages.'
  },
  {
    id: 'fire-safety',
    name: 'Fire Safety System',
    iconName: 'FireExtinguisher',
    category: 'Safety',
    description: 'Fire extinguishers, smoke detectors, and emergency safety systems installed throughout the property.'
  },
  {
    id: 'parking',
    name: 'Secure Parking',
    iconName: 'Car',
    category: 'Safety',
    description: 'Safe parking space available for two-wheelers and selected visitor vehicles.'
  }
];

export const TESTIMONIALS_DATA: Testimonial[] = [
  {
    id: 'test-1',
    name: 'Vikas Negi',
    rating: 5,
    text: 'Unitas Home is one of the best co-living spaces in Dehradun. The rooms are clean, spacious, and the housekeeping is extremely professional. The Wi-Fi is fast and reliable, and they have an automatic power backup, which is a lifesaver for working professionals. The location is excellent, close to Mahant Indresh Hospital, and the management is very helpful.',
    image: '',
    verified: true,
    occupation: 'Google Local Guide',
    date: '2 weeks ago'
  },
  {
    id: 'test-2',
    name: 'Naim Javed',
    rating: 5,
    text: 'The peaceful environment at Unitas Home makes it perfect for studies, especially for medical students like me. Safety and girls safety are top-notch with CCTV cameras and strict biometric access. The washrooms are hygienic, the housekeeping team does a great job daily, and the management is always helpful. Highly recommended!',
    image: '',
    verified: true,
    occupation: 'Verified Google Reviewer',
    date: '1 month ago'
  },
  {
    id: 'test-3',
    name: 'Anant Manikrao Deshmukh',
    rating: 5,
    text: 'As a parent, my primary concern was safety and hygiene for my child. Unitas Home has exceeded our expectations. The safety measures like biometric access and CCTV are excellent. The food is homely and healthy, and the environment is very peaceful for studies. The staff and friendly management are very cooperative.',
    image: '',
    verified: true,
    occupation: 'Verified Google Reviewer',
    date: '2 months ago'
  },
  {
    id: 'test-4',
    name: 'Sanjeev Dobhal',
    rating: 5,
    text: 'We visited 5 different hostels before finalizing Unitas Home for my son. The hygiene standards, CCTV safety measures, and friendly management won us over. It is a premium property that offers complete peace of mind for parents.',
    image: '',
    verified: true,
    occupation: 'Google Local Guide',
    date: '2 months ago'
  },
  {
    id: 'test-5',
    name: 'Arun Kumar',
    rating: 5,
    text: 'Excellent PG accommodation for medical students. It is very close to Mahant Indresh Hospital, which makes it super convenient. The study rooms are quiet, Wi-Fi is strong, and housekeeping is flawless. Food is also good and hygienic.',
    image: '',
    verified: true,
    occupation: 'Verified Google Reviewer',
    date: '3 months ago'
  },
  {
    id: 'test-6',
    name: 'Sneha Rawat',
    rating: 5,
    text: 'Highly safe and comfortable hostel for girls in Dehradun. The strict biometric entry system and warden supervision make it completely secure. Rooms are clean, spacious, and have a good balcony. The power backup has been very reliable.',
    image: '',
    verified: true,
    occupation: 'Google Local Guide',
    date: '3 months ago'
  }
];

export const FAQS_DATA: FAQItem[] = [
  {
    id: 'faq-1',
    question: 'What meals are included, and what are the food timings?',
    answer: 'We provide three highly nutritious, freshly-prepared meals every single day: Breakfast, Lunch, and Dinner. TIMINGS: Breakfast: 7:30 AM - 9:30 AM, Lunch: 1:00 PM - 3:00 PM, Dinner: 8:00 PM - 10:00 PM. We have weekly menus that offer a perfect balance of North Indian, South Indian, and local cuisines, with special desserts on weekends!',
    category: 'Meals'
  },
  {
    id: 'faq-2',
    question: 'How secure is Unitas Home for residents?',
    answer: 'Safety is our absolute cornerstone. The property is fully fenced with 24x7 gate security, CCTV cameras recording all entry-exit points, biometric fingerprint readers for resident doors, and custom door locks. We also have a strictly enforced visitor policy and dynamic warden supervision to ensure all young scholars live in a highly safe environment.',
    category: 'Rules & Security'
  },
  {
    id: 'faq-3',
    question: 'Are visitors and overnight stays allowed?',
    answer: 'Yes, parents and immediate siblings are always welcome to visit your room during visiting hours (9:00 AM - 7:00 PM) with pre-clearance. For safety and peace, unrelated friends or outside guests are restricted to the common lounge areas. Overnight stays for parents are allowed with nominal charges and prior booking approval.',
    category: 'Rules & Security'
  },
  {
    id: 'faq-4',
    question: 'How do I book a room or schedule a visit?',
    answer: 'It is incredibly simple! You can click the "Book a Visit" button to schedule an in-person walkthrough, or click "WhatsApp Now" to chat instantly with our manager. Alternatively, you can fill out our modern inquiry form with your preferred room type and move-in date. Once submitted, our manager will block the slot and reach out to guide you.',
    category: 'Booking'
  },
  {
    id: 'faq-5',
    question: 'What is the security deposit and refund policy?',
    answer: 'We require a security deposit equivalent to one month’s rent, along with one month’s advance rent at the time of check-in. The security deposit is fully refundable at the time of checkout, subject to a minimum stay commitment of 3 months and a standard 30-day prior checkout notice.',
    category: 'Booking'
  },
  {
    id: 'faq-6',
    question: 'Is laundry included in the monthly rent?',
    answer: 'Yes! We have a premium, dedicated laundry service. Every resident gets up to 12 pieces of clothing washed, steam-ironed, and folded nicely every week completely free of charge. We also have automatic washing machines in the common washing area if you prefer self-help washing.',
    category: 'Meals'
  },
  {
    id: 'faq-7',
    question: 'What is the speed of the Wi-Fi and is there an extra cost?',
    answer: 'The high-speed fiber-optic Wi-Fi runs up to 150 Mbps on a dedicated symmetric commercial line. Wi-Fi is absolutely free and fully included in your monthly room charges with unlimited data and dedicated access routers installed on each floor.',
    category: 'General'
  }
];

export const NEARBY_PLACES_DATA: NearbyPlace[] = [
  {
    id: 'near-1',
    name: 'Mahant Indresh Hospital & Medical College',
    type: 'Hospital',
    distance: '350 meters',
    timeByWalkOrDrive: '3 mins walk',
    description: 'One of Dehradun’s largest multi-specialty hospitals and medical research centers. Incredibly convenient for medical interns, nursing students, and healthcare emergencies.'
  },
  {
    id: 'near-2',
    name: 'Graphic Era Hill & Deemed University',
    type: 'College',
    distance: '4.2 km',
    timeByWalkOrDrive: '12 mins drive',
    description: 'Highly accessible via directly available local transport and shuttle buses right from our main road crossing.'
  },
  {
    id: 'near-3',
    name: 'Dehradun Railway Station',
    type: 'Transit',
    distance: '2.1 km',
    timeByWalkOrDrive: '7 mins drive',
    description: 'Perfect for outbound students returning home during semester breaks, with rich auto-rickshaw availability.'
  },
  {
    id: 'near-4',
    name: 'Paltan Bazaar & shopping hubs',
    type: 'Shopping',
    distance: '2.5 km',
    timeByWalkOrDrive: '8 mins drive',
    description: 'Famous local market full of grocery centers, book outlets, clothing options, and daily utility shopping.'
  },
  {
    id: 'near-5',
    name: 'ISBT Dehradun Bus Terminal',
    type: 'Transit',
    distance: '4.8 km',
    timeByWalkOrDrive: '15 mins drive',
    description: 'Excellent interstate luxury bus networks connected to Delhi, Chandigarh, Mussoorie, and Haridwar.'
  }
];

export const GALLERY_DATA = [
  // ==========================================
  // 1. EXTERIOR (4 Images)
  // ==========================================
  {
    id: 'gal-ext-1',
    title: 'Building Front',
    category: 'Exterior',
    image: 'https://lh3.googleusercontent.com/gps-cs-s/APNQkAHtpJwQlD2ziZjiiFkW51xMtTRXbj8Gn259CH1cY_UqFO_Vu1_MyVYPe-SpBd973nuAkv6z47Q_h9ryBqRlC02yopTwUL-8Ey7AT_y_zruHt3Y9GKgEMqeqqoMYlvDTz1wZ0_OX=s1360-w1360-h1020-rw',
    aspect: 'aspect-[4/3]'
  },
  {
    id: 'gal-ext-2',
    title: 'Building Exterior',
    category: 'Exterior',
    image: 'https://lh3.googleusercontent.com/gps-cs-s/APNQkAFI-SJB20Wd2TyQjVqkexMcGJIj_0STCjDrt41IyfUkXxWKwdnpHSQ_jxBAtDQwhn0id2gV7bbQLqARAJXdPd5maWbgg7bwvb-p4FiMP5Gt8fZoJ4WHtO07espLgIwF0bs5gyUEnQ=s1360-w1360-h1020-rw',
    aspect: 'aspect-[1/1]'
  },
  {
    id: 'gal-ext-3',
    title: 'Evening View',
    category: 'Exterior',
    image: 'https://lh3.googleusercontent.com/gps-cs-s/APNQkAHxUY2Lbp9XgqBBgiTsNvXh0g3DwvyJ2CY4GLdyRI_fkUtdFTYJlin5DE_aliFl0gcUS4FNfpDIE4MYe0GOnKF8HsYSHgIRIG_bOlp1Ybz8O1Jo2HvovAQAM4eiqzh6NDmVFJrnDQ=s1360-w1360-h1020-rw',
    aspect: 'aspect-[3/4]'
  },
  {
    id: 'gal-ext-4',
    title: 'Night View',
    category: 'Exterior',
    image: 'https://lh3.googleusercontent.com/gps-cs-s/APNQkAExBnLPdRDf0jCy7M1rsm_hHeykGF_BBbBKmHIy0KbsLNO-i3F-SbXyNfrswmmonbw_RWe0Sa8VdHB5nz9WRuh4yxfjcJPcDbfDkBsxl_c5OD18nQLpMD_Ll0SYeRG5nZTBHZkHjQ=s1360-w1360-h1020-rw',
    aspect: 'aspect-[16/9]'
  },

  // ==========================================
  // 2. RECEPTION (2 Images)
  // ==========================================
  {
    id: 'gal-rec-1',
    title: 'Reception Desk',
    category: 'Reception',
    image: 'https://lh3.googleusercontent.com/gps-cs-s/APNQkAEpPJpwzath1IDvHHlCj9-2YSPbFFyWNat-SipbhgjBdgDIdpvm4YYSAgy-o8lgdLVTOG9k78CDZUCB6WpufSiBt_Cay66_VqytKEKHKI_Dv6lMgg9cc1fnuOw6W1uXgOCBQqo=s1360-w1360-h1020-rw',
    aspect: 'aspect-[4/3]'
  },
  {
    id: 'gal-rec-2',
    title: 'Reception Area',
    category: 'Reception',
    image: 'https://lh3.googleusercontent.com/gps-cs-s/APNQkAH7cFGNAnfl08T9tODWkqOth5DK_dnTmBDsjEkrjEfiHQAdaECAaMMv7e5mCLLeD30H4NUhFg6lV12EW9Cyanuzt9AnaapMSrql2PdhdD8oAlxP4NvRs3UMkm0_zw7hIEmEUD-YLA=s1360-w1360-h1020-rw',
    aspect: 'aspect-[1/1]'
  },

  // ==========================================
  // 3. CORRIDOR (part of Amenities) (1 Image)
  // ==========================================
  {
    id: 'gal-cor-1',
    title: 'Corridor',
    category: 'Amenities',
    image: 'https://lh3.googleusercontent.com/gps-cs-s/APNQkAEaPRGlhGxI7Sj5KAnAa863V8dxyprPzX-KX7jzwhYAlKaIBCSxp_Q6q22xHsTV5etVGwEQkUbUZe__5xbtu2IHNoz8Ihp3I-p7Iq_oIvFeaOjlWN3AUhdgAosED3DC7fJ3Hb92=s1360-w1360-h1020-rw',
    aspect: 'aspect-[16/9]'
  },

  // ==========================================
  // 4. ROOMS (13 Images)
  // ==========================================
  {
    id: 'gal-room-single-1',
    title: 'Single Sharing Room',
    category: 'Rooms',
    image: 'https://lh3.googleusercontent.com/gps-cs-s/APNQkAHhexW_RBZTm4V2bNbAnqTG8KfDnKs97ly2Ra9VjwPGAXrbqCXZjjKiJ-kEk90zNOMZ2CSe658zSzgoS6Rx95uNBXAYUeWK8P68_XoSXttxLZziZzMbR20_jVSgBM0_K9gU7as=s1360-w1360-h1020-rw',
    aspect: 'aspect-[4/3]'
  },
  {
    id: 'gal-room-single-2',
    title: 'Single Sharing Room',
    category: 'Rooms',
    image: 'https://lh3.googleusercontent.com/gps-cs-s/APNQkAGixNkSAdIBYtAYi4loVk1QAgK5NsHpaHLFpe7zy3b3nDJpMbuee7GgEG3fYR3vczDUoYygPjh3KpGZLwbgsAc_8Vssm68g4CBk-A4Qqa_BcWwl-6oDoEoRi5O6eu8ZL3zcJl7J=s1360-w1360-h1020-rw',
    aspect: 'aspect-[1/1]'
  },
  {
    id: 'gal-room-twin-1',
    title: 'Twin Sharing Room',
    category: 'Rooms',
    image: 'https://lh3.googleusercontent.com/gps-cs-s/APNQkAEYr-jO4oypVN2EoU7QIqcqkly5cFtvGYw9F6vkK_8hMMeBkiHCO3QzFmvzVhYYeTfen77ftxhqDBUEpb-woIYXB5QQraWXwBUqsX1qysAk6jCXbmDuwp6IhEHI8obVsfo2xovoeQ=s1360-w1360-h1020-rw',
    aspect: 'aspect-[3/4]'
  },
  {
    id: 'gal-room-triple-1',
    title: 'Triple Sharing Room',
    category: 'Rooms',
    image: tripleSharingImg,
    aspect: 'aspect-[4/3]'
  },
  {
    id: 'gal-room-add-1',
    title: 'Premium Furnished Room',
    category: 'Rooms',
    image: 'https://lh3.googleusercontent.com/gps-cs-s/APNQkAG2IinWeDzYRuIcBPgEIm18UK08H01277xkSOQGFqEsEjU1vgCITtMReKHGmmFC8-pz9d1N8O3o_OqUmf42cxwo-dAOMPnMTreHUg3G3q3SPEJ7bzGD7Wl2siHbU4-t6WKGPp4w=s1360-w1360-h1020-rw',
    aspect: 'aspect-[1/1]'
  },
  {
    id: 'gal-room-add-2',
    title: 'Student Bedroom',
    category: 'Rooms',
    image: 'https://lh3.googleusercontent.com/gps-cs-s/APNQkAEg-wYViKMdVFwck1bgPuhiI-KZxzHl4ELCcCF0Z17To_9UGBrg-X_B3y3Fyp6POUhDK7ZscM35Iz7yLlWGn5evR2CpsZh9CYIGngu3bcpdS7sGV1Edv4GpzZ5-qpZsgHMHE9Mg=s1360-w1360-h1020-rw',
    aspect: 'aspect-[16/9]'
  },
  {
    id: 'gal-room-add-3',
    title: 'Premium Furnished Room',
    category: 'Rooms',
    image: 'https://lh3.googleusercontent.com/gps-cs-s/APNQkAHpcnVT4HJL6xCPPyqwoFnOAUbzOqKrY37iKIWT9eMmvckgszhDt64Wd73I6aUbtAJPs1__zv6AaYG40ECQT6H5_LKZY93PA7bkI5__mRrmQXQf2UzBKENLNwuLriK9yrwEDLNW=s1360-w1360-h1020-rw',
    aspect: 'aspect-[4/3]'
  },
  {
    id: 'gal-room-add-4',
    title: 'Student Bedroom',
    category: 'Rooms',
    image: 'https://lh3.googleusercontent.com/gps-cs-s/APNQkAEdkyje5nKi_Etn7nrYNLpKfNg3IGr_KSQkn6zZ2mwF0WtfosByB9YMt_BT9MTSeonQ_VDjKNavTVCIVeUzeVxFqOPNIA5xIlERV1skJv292-nStPIgcy070O-uDunqkz7Zt2o4pw=s1360-w1360-h1020-rw',
    aspect: 'aspect-[3/4]'
  },
  {
    id: 'gal-room-add-5',
    title: 'Premium Furnished Room',
    category: 'Rooms',
    image: 'https://lh3.googleusercontent.com/gps-cs-s/APNQkAHr9QiRD5vuzm9RaeyTGRf8sRk4q88mNXpz8MjsW1bgy4OiGGJ-k60l2RcUK6Wixmlf9vFnh2LZi6qW7_Wm6n4SYAkiuFHLwvfISnPWqZ6WgozjtqOkF3qb29fwpNG4bdyGzep0=s1360-w1360-h1020-rw',
    aspect: 'aspect-[1/1]'
  },
  {
    id: 'gal-room-add-6',
    title: 'Student Bedroom',
    category: 'Rooms',
    image: 'https://lh3.googleusercontent.com/gps-cs-s/APNQkAGT3tR1ac13Dg9wxMVm6WD-S9D-80BFmk9hGWZgMOQcsX5_P-egHLleASXMkImkPMYmVBwbIk9qrkGNEhwArkdsngvC94I1CeWJ4_xtnQS0nJ5nt4MedmX8NKtqHOI1sk0bbf7r=s1360-w1360-h1020-rw',
    aspect: 'aspect-[16/9]'
  },
  {
    id: 'gal-room-add-7',
    title: 'Premium Furnished Room',
    category: 'Rooms',
    image: 'https://lh3.googleusercontent.com/gps-cs-s/APNQkAEgyLjRZZLJOO2q_n0HaTF3gsPFL2i_VMQL93oARBA14E4ilZRMrhhShfzGa4N4vakeZiNkhs0IyiHZ19P8nEjLqeYFFtSszVk1lbN6ib1w7m09rW5ce7dLaG73maNHCxlLqnSFFQ=s1360-w1360-h1020-rw',
    aspect: 'aspect-[4/3]'
  },
  {
    id: 'gal-room-add-8',
    title: 'Student Bedroom',
    category: 'Rooms',
    image: 'https://lh3.googleusercontent.com/gps-cs-s/APNQkAEsE62xyNtIn-2olLupm6Y7jQ5SGKniZ6Q0bcC-ziS1RbEm8r4I-o6MEv3u0zetXN_1lBgk5XjoGl5xHwqK_qvL4biQm6bKORLbLlmSIZ1GiQV348O9rBkV0EaOFO0JLVt32KaHww=s1360-w1360-h1020-rw',
    aspect: 'aspect-[3/4]'
  },
  {
    id: 'gal-room-add-9',
    title: 'Premium Furnished Room',
    category: 'Rooms',
    image: 'https://lh3.googleusercontent.com/gps-cs-s/APNQkAGc2brhKOerXpThp73SREpbWmV5SFzvnkF3LnbSJ6_7hzfs7FqoXPLr1nPjqeIlrQw475RpAdeLQxNa1pt3hdqmBjrvx8BGgTvIjNksRU92mAYjI_sYfg9ClqB1OR8zE6wzOLtL=s1360-w1360-h1020-rw',
    aspect: 'aspect-[1/1]'
  },

  // ==========================================
  // 5. STUDY SPACE (1 Image)
  // ==========================================
  {
    id: 'gal-study-1',
    title: 'Study Space',
    category: 'Study Space',
    image: 'https://lh3.googleusercontent.com/gps-cs-s/APNQkAHRamEreFbEd4tC7Q6dxyy6ut0QoRe4aVxc0CFKte66UAwQGIEeYpeXuIN9laRsj0PBQySHtn0Vi0ToYSaQC9x4z55KkswtTQmYbXPWmNFBulATx5_t3-BVwr24rLeEir3OHfkNcg=s1360-w1360-h1020-rw',
    aspect: 'aspect-[16/9]'
  },

  // ==========================================
  // 6. COMMON LOUNGE (1 Image)
  // ==========================================
  {
    id: 'gal-lounge-1',
    title: 'Common Lounge',
    category: 'Common Lounge',
    image: 'https://lh3.googleusercontent.com/gps-cs-s/APNQkAHXEeMN9MhqvtNOV8GjvPo7vIL8gi_Bcv2PLUpww24SK0eXgIwdJALHPFTdLF66erzDd4w-BjR8PjOfL2C0plJq9etvB5k-J6mmWgEYdEVzetKYjxt3j1DtuecnUNgZLBL0BfL6=s1360-w1360-h1020-rw',
    aspect: 'aspect-[4/3]'
  },

  // ==========================================
  // 7. AMENITIES (Washroom & Water Cooler)
  // ==========================================
  {
    id: 'gal-wash-1',
    title: 'Attached Washroom',
    category: 'Amenities',
    image: 'https://lh3.googleusercontent.com/gps-cs-s/APNQkAFNYEZ7xvThTSFCnp2u0nUNDviq4VcnaY-KMzqtbBd7Gx4y9En1Gxk676ehHCX0nrkZ7sMVq-V0W6qMulACYaeErpYjxt_ss3-I8Xb7Q6t2L9DqLlK2D8LlFiroBJbW2CmbrK3s=s1360-w1360-h1020-rw',
    aspect: 'aspect-[3/4]'
  },
  {
    id: 'gal-water-1',
    title: 'Water Cooler',
    category: 'Amenities',
    image: 'https://lh3.googleusercontent.com/gps-cs-s/APNQkAH7fwHzIZF1VKqp8D7OyNhKJIEjtwM3FvwexCNi3Navt_-IPVRbOSYl9XKn7RZeJWBuKUcECf8t4O_YFvnFJJc-TU8IWuheu2aRDeLCgCmmVLkXpIw-mOJxNmRvppoJS1F5rxJy=s1360-w1360-h1020-rw',
    aspect: 'aspect-[1/1]'
  }
];
