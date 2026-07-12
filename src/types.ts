/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface Room {
  id: string;
  name: string;
  occupancy: string;
  price: number;
  originalPrice: number;
  description: string;
  features: string[];
  image: string;
  images: string[];
  availability: 'Available' | 'Filling Fast' | 'Few Beds Left';
  badge: string;
}

export interface Amenity {
  id: string;
  name: string;
  iconName: string; // Used to look up icons dynamically from Lucide
  category: 'Essentials' | 'Comfort' | 'Safety';
  description: string;
}

export interface Testimonial {
  id: string;
  name: string;
  rating: number;
  text: string;
  image: string;
  verified: boolean;
  occupation: string;
  date: string;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category: 'General' | 'Meals' | 'Rules & Security' | 'Booking';
}

export interface NearbyPlace {
  id: string;
  name: string;
  type: 'Hospital' | 'College' | 'Transit' | 'Shopping' | 'Food';
  distance: string;
  timeByWalkOrDrive: string;
  description: string;
}

export interface Inquiry {
  id: string;
  name: string;
  phone: string;
  email: string;
  roomType: string;
  moveInDate: string;
  message: string;
  status: 'Pending' | 'Confirmed' | 'Cancelled';
  type: 'Inquiry' | 'Schedule Visit' | 'Reserve Room';
  timestamp: string;
  timeSlot?: string;
  visitorsCount?: string;
  durationOfStay?: string;
}
