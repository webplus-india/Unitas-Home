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
    image: 'https://lh3.googleusercontent.com/gps-cs-s/AHRPTWnBq_Dl-aB1W8BQB1zHNzvq4p5YJe9XDwJ9ErnMDufgF1GSeVRxLKaO2rJd3GBHP-rm4pNuWc2O7YKbrbcneeyzEGJGFH6G7ngnl6UrvmXFm14_mvTugoek1F-88mr9uMtxmB8JMA=s1360-w1360-h1020-rw',
    images: [
      'https://lh3.googleusercontent.com/gps-cs-s/AHRPTWnBq_Dl-aB1W8BQB1zHNzvq4p5YJe9XDwJ9ErnMDufgF1GSeVRxLKaO2rJd3GBHP-rm4pNuWc2O7YKbrbcneeyzEGJGFH6G7ngnl6UrvmXFm14_mvTugoek1F-88mr9uMtxmB8JMA=s1360-w1360-h1020-rw',
      'https://lh3.googleusercontent.com/gps-cs-s/AHRPTWn-9SJXueEG86jEFMwMVInmhGEIFMgpj3fPV9iYBSBbbDbpBghjPFypvNcLKPxQ89MWUOwrcDdEs8dccDSOoVQbm7yt4aYvHhd-3dFO6KkBqpOe2rXDXf2RrbAdETwk1bZFUlk7yA=s1360-w1360-h1020-rw',
      'https://lh3.googleusercontent.com/gps-cs-s/AHRPTWmj7yROsQxtiWfu3gilvuVm5cTb5ufHlexlAbDRcrNhRto013KEb3WlejtOmER4KCnO6DnoGxG21SJ1MxYxHsQo4i8ZBCcClYvmqx5r3X5Io0wvZwo7Sy7Lu-FhdtbDNo4L9Xw3=s1360-w1360-h1020-rw'
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
    image: 'https://lh3.googleusercontent.com/gps-cs-s/AHRPTWmAA7KDPZeqfMTUR6mc-ul4wsX2-1LiC5gR9rQ7ky5r3b4ivCzBlktIL_wLLMIWi7wVJ_JS3V05fahZgAOqvkmtJFRClmmT9Dc25bMXeZ1pzeR0KKWQtJTm_j2ELnngldu-BOeJ=s1360-w1360-h1020-rw',
    images: [
      'https://lh3.googleusercontent.com/gps-cs-s/AHRPTWmAA7KDPZeqfMTUR6mc-ul4wsX2-1LiC5gR9rQ7ky5r3b4ivCzBlktIL_wLLMIWi7wVJ_JS3V05fahZgAOqvkmtJFRClmmT9Dc25bMXeZ1pzeR0KKWQtJTm_j2ELnngldu-BOeJ=s1360-w1360-h1020-rw',
      'https://lh3.googleusercontent.com/gps-cs-s/AHRPTWlEc5jVGXIURWce_gAL6J0yU71UCmvPEr1T7okOuCrsbSdRE7lFZ_mYSAPbGAaG7AnnJiMp1vPQAmMZFmboYF5vPj4fEP1ZmdkKLwyd75ubQEP2sOovFmFChmBl1hbnwCnao6M=s1360-w1360-h1020-rw',
      'https://lh3.googleusercontent.com/gps-cs-s/AHRPTWlM2Kp4ai2QC7q07ha2Iba7Pt3GVV35RyEGWfdmmBx0z1cs5S8sGS-x7bf8wT9fro4C4etbrSepOCg2tb_3lmsrq6xqOQKUQ_V4DQCXYY9ZwBD1AwFaE3Ys7RKnk7e-dcgESLh44Q=s1360-w1360-h1020-rw'
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
      'https://lh3.googleusercontent.com/gps-cs-s/AHRPTWmFV17D8isEGNbhDulPuNEkuEvYaXuQlAliXmohjsYHIK7fPeOr7AhvvxtYpupTAQ2Y4apn3YDa8oc4U9JSMjRWIxrv94cptDpEVmLY6MnNEkwqrRnxFZU9jXN-kQCVB_Ja-fBXEQ=s1360-w1360-h1020-rw',
      'https://lh3.googleusercontent.com/gps-cs-s/AHRPTWlhYD_rdOGKKuF1sKi_t9kIOfZSqUqWji75uiNTGz3WDVkiPb21U23MQhjf6lWPTcqgn7Ibm8ryx0OeYi2mEPuzl3ykWXCOqSFJx6eaqskrIuq_BqoItntfmE3fC4pvFHiXep1wwg=s1360-w1360-h1020-rw'
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
    question: 'Is power backup available in the property?',
    answer: 'Yes. The property is equipped with an inverter-based power backup system that ensures uninterrupted electricity during power outages, keeping essential services running for a comfortable stay.',
    category: 'General'
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
    image: 'https://lh3.googleusercontent.com/gps-cs-s/AHRPTWmzzN-DwVwAK8obuaW1mRQrsef8G9x-HDNjJ_XNNGfpi1b0mLdaj4WhXgO9nofCLpYbqBt3aagBAGmLC4q8JbXr41l7Ghrn-wCqR7OvzCyO76yy8qh8lqUH-MYVA3DPkhx8ZXjb=s1360-w1360-h1020-rw',
    aspect: 'aspect-[4/3]'
  },
  {
    id: 'gal-ext-2',
    title: 'Building Exterior',
    category: 'Exterior',
    image: 'https://lh3.googleusercontent.com/gps-cs-s/AHRPTWllSnVQiYG54WSVONH6Qy0bmQGoqZHPri8lIiWMhJoEc0fN5-8YyE5GlGvFWnWy4t2ItZzveKMnTqKltf60hwsNRKiHDXZZHPdW5ArI1vZMzJWRk7EvzkGo4rutSFoeoQyy9qL5GQ=s1360-w1360-h1020-rw',
    aspect: 'aspect-[1/1]'
  },
  {
    id: 'gal-ext-3',
    title: 'Evening View',
    category: 'Exterior',
    image: 'https://lh3.googleusercontent.com/gps-cs-s/AHRPTWnulLrd235VRjqfT8Ie0kcOnQCPibvHSHGEOnh855LeKnEDgqlPQDqjLaTq-wY-wWzOfh7d1zNRkldaIIwWrBARsKYOMbRa5J1OyEPccYj07Rcj_UKExM_3zK4ocgTXpfyOnl4uYg=s1360-w1360-h1020-rw',
    aspect: 'aspect-[3/4]'
  },
  {
    id: 'gal-ext-4',
    title: 'Night View',
    category: 'Exterior',
    image: 'https://lh3.googleusercontent.com/gps-cs-s/AHRPTWm8cqNhJj-7zl7XIfxvXQ7CEGgrBptVbrRkx9O5HzpG8BR_lB0xP8g8Q5sd9qdLOuTZ0iQg3KonPflQSaeLjRyG6lv82w2kLoH6KBbzehDnMHXzQ5YzFSZKcQWiqiLH3UpK3mKrDg=s1360-w1360-h1020-rw',
    aspect: 'aspect-[16/9]'
  },

  // ==========================================
  // 2. RECEPTION (2 Images)
  // ==========================================
  {
    id: 'gal-rec-1',
    title: 'Reception Desk',
    category: 'Reception',
    image: 'https://lh3.googleusercontent.com/gps-cs-s/AHRPTWkwdMHzqTHDhlDwfApcZz6wvq_h6zb3yr_a7qlo8i-GZRt3wa3HkXL9Rg2gukRgzie6HMaOduCp5N8hW-n7AozPBQS_YteqdoDkcJkQVHbjOslsl9RK1x68SiB3m5zlQ2gSLJuZ2g=s1360-w1360-h1020-rw',
    aspect: 'aspect-[4/3]'
  },
  {
    id: 'gal-rec-2',
    title: 'Reception Area',
    category: 'Reception',
    image: 'https://lh3.googleusercontent.com/gps-cs-s/AHRPTWmz6v9-1Q8okcJJ2Cc5kj_CUfW8AEhl-eZ6inriaXQS7j1BkxeETf1GvA6lYBVGz4rtTC_VKgWPGxSvwLto2Q8o8wbdhpF-XWoWq60-UEiSQzSP2eChtH9pGDZVx617xRMhW_4=s1360-w1360-h1020-rw',
    aspect: 'aspect-[1/1]'
  },

  // ==========================================
  // 3. CORRIDOR (part of Amenities) (1 Image)
  // ==========================================
  {
    id: 'gal-cor-1',
    title: 'Corridor',
    category: 'Amenities',
    image: 'https://lh3.googleusercontent.com/gps-cs-s/AHRPTWndrzNnmQ75wbIjPHPNoHHnlTHpKGBD6KDhQv6k137T2xp4OxWlIjsIYeNszDRNGyX7O2lcextc7cD_otayL6MuWFEd2t28vVmQZeU69vAysL-FOoEY-efeeJLKETZs6tjZi-n3=s1360-w1360-h1020-rw',
    aspect: 'aspect-[16/9]'
  },

  // ==========================================
  // 4. ROOMS (13 Images)
  // ==========================================
  {
    id: 'gal-room-single-1',
    title: 'Single Sharing Room',
    category: 'Rooms',
    image: 'https://lh3.googleusercontent.com/gps-cs-s/AHRPTWnXfq-RMSRoSfeoxjuKuPGgRp1HzYrh-MTrITFN2GonvGc5n_--tdnk6O3f2xAkrFsW0fSo6WbxsIrxbwyC6LU6ghcRFXs9HKO5q466K3bFdMtqFInWxCqjGm6g0GALthupUxg=s1360-w1360-h1020-rw',
    aspect: 'aspect-[4/3]'
  },
  {
    id: 'gal-room-single-2',
    title: 'Single Sharing Room',
    category: 'Rooms',
    image: 'https://lh3.googleusercontent.com/gps-cs-s/AHRPTWlF1HVv583ylJ5ofZmONRaVAag9AWvn4tgBMpGpmaaRPByaF7bYW0jF6RUtulklPZsPMPEZ0GJJXgObBjiQ1Ley9D_pyhOZIiQwzc9JwrHDDKy4u5LvtcBGf8kQ8eZPjnRk6_Qk=s1360-w1360-h1020-rw',
    aspect: 'aspect-[1/1]'
  },
  {
    id: 'gal-room-twin-1',
    title: 'Twin Sharing Room',
    category: 'Rooms',
    image: 'https://lh3.googleusercontent.com/gps-cs-s/AHRPTWmAA7KDPZeqfMTUR6mc-ul4wsX2-1LiC5gR9rQ7ky5r3b4ivCzBlktIL_wLLMIWi7wVJ_JS3V05fahZgAOqvkmtJFRClmmT9Dc25bMXeZ1pzeR0KKWQtJTm_j2ELnngldu-BOeJ=s1360-w1360-h1020-rw',
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
    image: 'https://lh3.googleusercontent.com/gps-cs-s/AHRPTWmj7yROsQxtiWfu3gilvuVm5cTb5ufHlexlAbDRcrNhRto013KEb3WlejtOmER4KCnO6DnoGxG21SJ1MxYxHsQo4i8ZBCcClYvmqx5r3X5Io0wvZwo7Sy7Lu-FhdtbDNo4L9Xw3=s1360-w1360-h1020-rw',
    aspect: 'aspect-[1/1]'
  },
  {
    id: 'gal-room-add-2',
    title: 'Student Bedroom',
    category: 'Rooms',
    image: 'https://lh3.googleusercontent.com/gps-cs-s/AHRPTWmrtgXJIktbCzKQIwdHmntUf3YCmow_ndMYA4aS84EFVzs8gsBKiJ42swUAQosqft1r3qetinWGQuwl9XYxurbNz0hWLjeXYVJmQHzwthX1zHJmmYOaMTxfjbMW8X0E71JVBNLk=s1360-w1360-h1020-rw',
    aspect: 'aspect-[16/9]'
  },
  {
    id: 'gal-room-add-3',
    title: 'Premium Furnished Room',
    category: 'Rooms',
    image: 'https://lh3.googleusercontent.com/gps-cs-s/AHRPTWmpJ66i7tfOUqVzEScYxfbZxazXkMSJc5OmRSj2DfMwPyFItbRh4qigJEE4-n-gDC7b6CqeYRy_YeWdVtz6eChAv277PNNmvjRENppVCEsLAHJrBjfg7lxfOvFcVMBxjw2a8T9i=s1360-w1360-h1020-rw',
    aspect: 'aspect-[4/3]'
  },
  {
    id: 'gal-room-add-4',
    title: 'Student Bedroom',
    category: 'Rooms',
    image: 'https://lh3.googleusercontent.com/gps-cs-s/AHRPTWlM2Kp4ai2QC7q07ha2Iba7Pt3GVV35RyEGWfdmmBx0z1cs5S8sGS-x7bf8wT9fro4C4etbrSepOCg2tb_3lmsrq6xqOQKUQ_V4DQCXYY9ZwBD1AwFaE3Ys7RKnk7e-dcgESLh44Q=s1360-w1360-h1020-rw',
    aspect: 'aspect-[3/4]'
  },
  {
    id: 'gal-room-add-5',
    title: 'Premium Furnished Room',
    category: 'Rooms',
    image: 'https://lh3.googleusercontent.com/gps-cs-s/AHRPTWmbxKUr9zTvORzrqrb8p4mMLIJuA6g5o9VA5rGJNaKv9wJYzaB6JAYBc6ecjsVkYAzwP7JZ8IlrHzSos4UJUvD0dcXedH9DJI8L7sLz4r-_tCom3QumzOr7omi51ppujlmM6rdK4Q=s1360-w1360-h1020-rw',
    aspect: 'aspect-[1/1]'
  },
  {
    id: 'gal-room-add-6',
    title: 'Student Bedroom',
    category: 'Rooms',
    image: 'https://lh3.googleusercontent.com/gps-cs-s/AHRPTWn-9SJXueEG86jEFMwMVInmhGEIFMgpj3fPV9iYBSBbbDbpBghjPFypvNcLKPxQ89MWUOwrcDdEs8dccDSOoVQbm7yt4aYvHhd-3dFO6KkBqpOe2rXDXf2RrbAdETwk1bZFUlk7yA=s1360-w1360-h1020-rw',
    aspect: 'aspect-[16/9]'
  },
  {
    id: 'gal-room-add-7',
    title: 'Premium Furnished Room',
    category: 'Rooms',
    image: 'https://lh3.googleusercontent.com/gps-cs-s/AHRPTWlgukEsBS87xo10skyH0k0QToruxZK1-lGUq_GQgtvuFr5-_aOJQzlKmrZ_29A8S-rPkGMYlEzxCpzF9L9cZ-AnTLuTzZyYWJpBD3sVg40XkpskqDAgueRFWpggTOrVqpE9lCHN=s1360-w1360-h1020-rw',
    aspect: 'aspect-[4/3]'
  },
  {
    id: 'gal-room-add-8',
    title: 'Student Bedroom',
    category: 'Rooms',
    image: 'https://lh3.googleusercontent.com/gps-cs-s/AHRPTWn80foMFfgxioELz5QhIDx7G2Ll20uAdZG5-0I6GsfnrwrsO_b1ADhFCNPwv4X-t9k4hsPWKp_DYILJH7GVTPVkzgFWLiXr6EE1nHZzODCYEbM_57tE7zwVSgFKu6bRB0ALwVs=s1360-w1360-h1020-rw',
    aspect: 'aspect-[3/4]'
  },
  {
    id: 'gal-room-add-9',
    title: 'Premium Furnished Room',
    category: 'Rooms',
    image: 'https://lh3.googleusercontent.com/gps-cs-s/AHRPTWmbxKUr9zTvORzrqrb8p4mMLIJuA6g5o9VA5rGJNaKv9wJYzaB6JAYBc6ecjsVkYAzwP7JZ8IlrHzSos4UJUvD0dcXedH9DJI8L7sLz4r-_tCom3QumzOr7omi51ppujlmM6rdK4Q=s1360-w1360-h1020-rw',
    aspect: 'aspect-[1/1]'
  },

  // ==========================================
  // 5. STUDY SPACE (1 Image)
  // ==========================================
  {
    id: 'gal-study-1',
    title: 'Study Space',
    category: 'Study Space',
    image: 'https://lh3.googleusercontent.com/gps-cs-s/AHRPTWmGm5SsW6CvF590WDlG8drCjHAUqh9dRZ362ppfFCuQBGs4f4zSDVg9h4LLBt9SDxxq9XBm4S9AEqriNjeWmtG0J2qnRN7vgRSpjyKMnTi_HJuBBmMIABhmhH9XVeGfDegv2INrkg=s1360-w1360-h1020-rw',
    aspect: 'aspect-[16/9]'
  },

  // ==========================================
  // 6. COMMON LOUNGE (1 Image)
  // ==========================================
  {
    id: 'gal-lounge-1',
    title: 'Common Lounge',
    category: 'Common Lounge',
    image: 'https://lh3.googleusercontent.com/gps-cs-s/AHRPTWkwzRuQZkXzhV3axhyUSSUJtSsQev7wTo644hteQPIc2NxWRlcKK9J9v_FIXL0giH0ZW8pvtDjaNuKWy--0cCfqHeoqJSJg7HHT3zHoou7hwt_PvZlFYABrJwshlyP0YS1GpWHz=s1360-w1360-h1020-rw',
    aspect: 'aspect-[4/3]'
  },

  // ==========================================
  // 7. AMENITIES (Washroom & Water Cooler)
  // ==========================================
  {
    id: 'gal-wash-1',
    title: 'Attached Washroom',
    category: 'Amenities',
    image: 'https://lh3.googleusercontent.com/gps-cs-s/AHRPTWki9YBOTfULsmbq_qdG1rRIdXBr8sboKprzdpC1HZAvvnH37sOngOlnhGzYQmV2_sSgeYKvqRmihW3J4leMUXmNLc-YOCkV0Rj2g9h6VR7wqIIC8SVxQ7gngNn9UWN2aGkMDyzW=s1360-w1360-h1020-rw',
    aspect: 'aspect-[3/4]'
  },
  {
    id: 'gal-water-1',
    title: 'Water Cooler',
    category: 'Amenities',
    image: 'https://lh3.googleusercontent.com/gps-cs-s/AHRPTWnbPwGjGMMqfy6bERnlcq8NScfnwn8B29B0yPJ3H7IWnSaiNO2AS_zCo2KC226beSRFEFM91jHg-tNkbHEEzYiftRDasrM5Wu5e3fFlumidquf91zQqwfDxOOUPuHE0etJSs9dd=s1360-w1360-h1020-rw',
    aspect: 'aspect-[1/1]'
  }
];
