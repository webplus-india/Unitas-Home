/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';

import { Compass, ShoppingBag, Bus, GraduationCap, HeartPulse, ArrowUpRight, ArrowRight, MapPin, Car } from 'lucide-react';

interface Landmark {
  id: string;
  name: string;
  category: 'Colleges' | 'Hospitals' | 'Shopping' | 'Transport';
  distance: string;
  time: string;
  description: string;
}

const VERIFIED_LANDMARKS: Landmark[] = [
  {
    id: 'l-1',
    name: 'Mahant Indresh Medical College',
    category: 'Colleges',
    distance: '350 meters',
    time: '3 min walk',
    description: 'Ideal for Medical Interns, Nursing Students, and Healthcare Academics.'
  },
  {
    id: 'l-2',
    name: 'Institute of Technology & Management (ITM)',
    category: 'Colleges',
    distance: '500 meters',
    time: '3 min walk',
    description: 'Ideal for IT, BCA, BBA, and Management Students.'
  },
  {
    id: 'l-3',
    name: 'Shri Guru Ram Rai University (SGRRU) – Patel Nagar Campus',
    category: 'Colleges',
    distance: '2.5 km',
    time: '6 min drive',
    description: 'Main university campus with excellent connectivity.'
  },
  {
    id: 'l-4',
    name: 'Shri Mahant Indresh Hospital',
    category: 'Hospitals',
    distance: '350 meters',
    time: '3 min walk',
    description: '24×7 emergency medical support and premium multi-specialty healthcare.'
  },
  {
    id: 'l-5',
    name: 'Suvidha Supermarket',
    category: 'Shopping',
    distance: '2.2 km',
    time: '5 min drive',
    description: 'Groceries, toiletries, and daily essentials.'
  },
  {
    id: 'l-6',
    name: 'Centrio Mall',
    category: 'Shopping',
    distance: '2.7 km',
    time: '8 min drive',
    description: 'Movies, shopping, restaurants, and weekend entertainment.'
  },
  {
    id: 'l-7',
    name: 'Dehradun Railway Station',
    category: 'Transport',
    distance: '2.1 km',
    time: '7 min drive',
    description: 'Direct auto-rickshaw connectivity for outstation students.'
  },
  {
    id: 'l-8',
    name: 'ISBT Dehradun',
    category: 'Transport',
    distance: '4.6 km',
    time: '13 min drive',
    description: 'Interstate bus connectivity to Delhi, Punjab, UP, and nearby cities.'
  },
  {
    id: 'l-9',
    name: 'Kargi Chowk / Patel Nagar Bypass Crossing',
    category: 'Transport',
    distance: '400 meters',
    time: '4 min walk',
    description: 'Major shared auto and city transport hub.'
  }
];

// Premium Custom Walking Person Icon to match Lucide's 2px stroke, outline style perfectly
function PersonWalking({ size = 16, strokeWidth = 2, className, ...props }: React.ComponentProps<'svg'> & { size?: number; strokeWidth?: number }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      {...props}
    >
      <circle cx="13" cy="4" r="2" />
      <path d="M13 6H12a2 2 0 0 0-2 2v3" />
      <path d="m10 8 3 3" />
      <path d="m10 8-2 1.5" />
      <path d="M10 11v4l-2 4" />
      <path d="m10 11 3 3 1.5 5" />
    </svg>
  );
}

export default function Location() {
  const [selectedType, setSelectedType] = useState<string>('All');

  const landmarkTypes = ['All', 'Colleges', 'Hospitals', 'Shopping', 'Transport'] as const;

  const filteredPlaces = selectedType === 'All'
    ? VERIFIED_LANDMARKS
    : VERIFIED_LANDMARKS.filter((p) => p.category === selectedType);

  return (
    <section id="nearby" className="py-[120px] bg-[#FAFBFC] relative scroll-mt-12 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* IMPROVED HIERARCHY: SECTION HEADER (COMPACT & BALANCED) */}
        <div className="text-center max-w-[850px] mx-auto">
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl lg:text-[40px] text-charcoal tracking-tight leading-tight max-w-[750px] mx-auto">
            Prime Location for Student Living
          </h2>
          <div 
            style={{ width: '64px' }}
            className="h-[2.5px] bg-[#F4B400] mx-auto rounded-full mt-4 mb-2" 
          />
          
          {/* Spacing: Heading -> Subtitle: 16-20px */}
          <p className="font-sans text-sm sm:text-base text-slate-gray leading-relaxed max-w-[780px] mx-auto mt-4 sm:mt-[18px]">
            Live in one of Dehradun's most student-friendly neighborhoods with top colleges, hospitals, public transport, cafés, shopping, and everyday essentials just minutes from your doorstep.
          </p>
          
          {/* Spacing: Subtitle -> Information Badges: 24-28px */}
          <div className="flex flex-wrap items-center justify-center gap-2.5 mt-6 sm:mt-[26px]">
            <span className="text-[10px] font-bold text-[#F4B400] bg-[#F4B400]/5 px-3.5 py-1.5 rounded-full border border-[#F4B400]/15 tracking-widest uppercase">
              EVERYTHING WITHIN MINUTES
            </span>
            <span className="inline-flex items-center space-x-1.5 text-[10px] text-slate-gray font-semibold bg-white px-3.5 py-1.5 rounded-full border border-border-light/60 shadow-xs">
              <Compass className="w-3.5 h-3.5 text-primary animate-spin-slow" strokeWidth={2} />
              <span>9 Verified Nearby Locations</span>
            </span>
          </div>
        </div>

        {/* NEARBY PLACES CONTENT AREA */}
        {/* Spacing: Badges -> Nearby Essentials: 24px */}
        <div className="border-t border-border-light/20 pt-6 sm:pt-8 mt-6 sm:mt-8">
          
          {/* NEARBY ESSENTIALS + VIEW ALL HEADER BAR */}
          <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4">
            <div className="flex-1">
              <h3 className="font-display font-extrabold text-2xl sm:text-3xl text-charcoal tracking-tight">
                Nearby Essentials
              </h3>
              
              {/* Spacing: Heading -> Description: 12-16px */}
              <p className="font-sans text-sm text-slate-gray max-w-2xl leading-relaxed mt-3 sm:mt-[14px]">
                Verified colleges, hospitals, healthcare, transport hubs, and shopping destinations around Unitas Home.
              </p>
            </div>
            
            {/* View All Action (Subtle teal button, small arrow icon with smooth hover slide) */}
            <div className="sm:pt-1.5 flex-shrink-0">
              <a
                href="https://maps.google.com/?q=Unitas+Home,+Dehradun"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-sm font-bold text-primary hover:text-primary-dark transition-colors duration-[250ms] cursor-pointer group/view-all w-fit"
              >
                <span>View All</span>
                <ArrowRight size={16} strokeWidth={2.5} className="ml-1 text-primary transform group-hover/view-all:translate-x-1.5 transition-transform duration-[250ms] ease-out" />
              </a>
            </div>
          </div>

          {/* CATEGORY FILTERS */}
          {/* Spacing: Description -> Category Filters: 24px */}
          {/* Pill shape, Active state in teal, Inactive in white with teal border, horizontal swipeable overflow on smaller screens */}
          <div className="mt-6">
            <div className="flex flex-nowrap md:flex-wrap items-center gap-2 overflow-x-auto md:overflow-x-visible pb-2.5 md:pb-0 -mx-4 px-4 sm:mx-0 sm:px-0 scrollbar-none">
              {landmarkTypes.map((type) => {
                const isActive = selectedType === type;
                return (
                  <button
                    key={type}
                    onClick={() => setSelectedType(type)}
                    className={`px-3.5 py-1.5 md:px-4.5 md:py-2 rounded-full text-[11px] md:text-xs font-bold transition-all duration-300 border cursor-pointer h-8 md:h-9 flex items-center justify-center shrink-0 ${
                      isActive
                        ? 'bg-primary text-white border-primary shadow-md shadow-primary/15'
                        : 'bg-white text-slate-gray border-primary/20 hover:border-primary hover:text-primary hover:bg-primary/[0.02]'
                    }`}
                  >
                    {type}
                  </button>
                );
              })}
            </div>
          </div>

          {/* LANDMARK CARD DISPLAY CONTAINER */}
          {/* Spacing: Category Filters -> First Row of Cards: 24-32px */}
          <div className="mt-7 sm:mt-[30px]">
            
            {/* DESKTOP & TABLET: Grid Layout (3-column desktop, 2-column tablet) */}
            <div className="hidden md:grid grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredPlaces.map((place) => {
                const mapQuery = `https://maps.google.com/?q=${encodeURIComponent(place.name + ' Dehradun')}`;
                
                return (
                  <div
                    key={place.id}
                    className="group/card bg-white p-8 rounded-[24px] border border-border-light/40 shadow-xs hover:border-primary/30 hover:shadow-lg md:hover:-translate-y-1.5 transition-[border-color,box-shadow,transform] duration-300 flex flex-col justify-between h-full min-h-[250px]"
                  >
                    <div className="space-y-4">
                      {/* Header with Icon and Name */}
                      <div className="flex items-start space-x-3.5">
                        <div className="w-14 h-14 rounded-[22px] bg-[#F2FBFA] border border-[#E2F2F0] shadow-[0_2px_8px_rgba(0,0,0,0.02)] flex items-center justify-center md:group-hover/card:bg-primary/10 md:group-hover/card:scale-105 md:group-hover/card:rotate-2 transition-[background-color,border-color,transform] duration-300 flex-shrink-0 mt-0.5">
                          {place.category === 'Colleges' && <GraduationCap size={22} strokeWidth={2} className="text-primary" />}
                          {place.category === 'Hospitals' && <HeartPulse size={22} strokeWidth={2} className="text-primary" />}
                          {place.category === 'Shopping' && <ShoppingBag size={22} strokeWidth={2} className="text-primary" />}
                          {place.category === 'Transport' && <Bus size={22} strokeWidth={2} className="text-amber-500" />}
                        </div>
                        <h4 className="font-display font-extrabold text-base text-charcoal leading-snug group-hover/card:text-primary transition-colors duration-300 pt-1">
                          {place.name}
                        </h4>
                      </div>

                      {/* Description */}
                      <p className="font-sans text-xs text-slate-gray leading-relaxed line-clamp-2">
                        {place.description}
                      </p>
                    </div>

                    <div>
                      {/* Subtle Divider */}
                      <div className="my-5 border-t border-border-light/30" />

                      {/* Distance + Travel Time in Elegant Badges & Directions Link */}
                      <div className="flex flex-col space-y-3.5">
                        <div className="flex flex-wrap gap-2">
                          {/* Distance Chip */}
                          <span className="inline-flex items-center space-x-1.5 bg-primary/[0.03] border border-primary/5 px-2.5 py-1 rounded-full text-[10px] text-slate-gray font-bold">
                            <MapPin size={14} strokeWidth={2} className="text-primary" />
                            <span>{place.distance}</span>
                          </span>
                          {/* Travel Time Chip */}
                          <span className="inline-flex items-center space-x-1.5 bg-[#FAFBFC] border border-border-light/60 px-2.5 py-1 rounded-full text-[10px] text-slate-gray font-bold">
                            {place.time.toLowerCase().includes('walk') ? (
                              <PersonWalking size={14} strokeWidth={2} className="text-primary" />
                            ) : (
                              <Car size={14} strokeWidth={2} className="text-primary" />
                            )}
                            <span>{place.time}</span>
                          </span>
                        </div>

                        {/* Small Text Link to Google Maps with sliding arrow */}
                        <a
                          href={mapQuery}
                          target="_blank"
                          rel="noreferrer"
                          className="inline-flex items-center text-xs font-bold text-primary hover:text-primary-dark transition-colors duration-300 mt-1 cursor-pointer group/link w-fit"
                        >
                          <span>View Directions</span>
                          <ArrowUpRight size={16} strokeWidth={2} className="ml-1 text-primary transform md:group-hover/link:translate-x-0.5 md:group-hover/link:-translate-y-0.5 transition-transform duration-300" />
                        </a>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* MOBILE ONLY: Horizontal swipeable card slider with snap-mandatory and 1 card visible at a time */}
            <div className="flex md:hidden overflow-x-auto snap-x snap-mandatory scrollbar-none -mx-4 px-4 gap-4 pb-4">
              {filteredPlaces.map((place) => {
                const mapQuery = `https://maps.google.com/?q=${encodeURIComponent(place.name + ' Dehradun')}`;
                
                return (
                  <div
                    key={place.id}
                    className="snap-center shrink-0 w-[calc(100vw-32px)] bg-white p-6 rounded-[24px] border border-border-light/40 shadow-xs flex flex-col justify-between min-h-[240px]"
                  >
                    <div className="space-y-4">
                      {/* Header with Icon and Name */}
                      <div className="flex items-start space-x-3.5">
                        <div className="w-12 h-12 rounded-[22px] bg-[#F2FBFA] border border-[#E2F2F0] shadow-[0_2px_8px_rgba(0,0,0,0.02)] flex items-center justify-center flex-shrink-0 mt-0.5">
                          {place.category === 'Colleges' && <GraduationCap size={20} strokeWidth={2} className="text-primary" />}
                          {place.category === 'Hospitals' && <HeartPulse size={20} strokeWidth={2} className="text-primary" />}
                          {place.category === 'Shopping' && <ShoppingBag size={20} strokeWidth={2} className="text-primary" />}
                          {place.category === 'Transport' && <Bus size={20} strokeWidth={2} className="text-amber-500" />}
                        </div>
                        <h4 className="font-display font-extrabold text-base text-charcoal leading-snug pt-0.5">
                          {place.name}
                        </h4>
                      </div>

                      {/* Description */}
                      <p className="font-sans text-xs text-slate-gray leading-relaxed line-clamp-2">
                        {place.description}
                      </p>
                    </div>

                    <div>
                      {/* Subtle Divider */}
                      <div className="my-4 border-t border-border-light/30" />

                      {/* Distance + Travel Time in Elegant Badges & Directions Link */}
                      <div className="flex flex-col space-y-3">
                        <div className="flex flex-wrap gap-2">
                          {/* Distance Chip */}
                          <span className="inline-flex items-center space-x-1.5 bg-primary/[0.03] border border-primary/5 px-2.5 py-1 rounded-full text-[10px] text-slate-gray font-bold">
                            <MapPin size={14} strokeWidth={2} className="text-primary" />
                            <span>{place.distance}</span>
                          </span>
                          {/* Travel Time Chip */}
                          <span className="inline-flex items-center space-x-1.5 bg-[#FAFBFC] border border-border-light/60 px-2.5 py-1 rounded-full text-[10px] text-slate-gray font-bold">
                            {place.time.toLowerCase().includes('walk') ? (
                              <PersonWalking size={14} strokeWidth={2} className="text-primary" />
                            ) : (
                              <Car size={14} strokeWidth={2} className="text-primary" />
                            )}
                            <span>{place.time}</span>
                          </span>
                        </div>

                        {/* Small Text Link to Google Maps with sliding arrow */}
                        <a
                          href={mapQuery}
                          target="_blank"
                          rel="noreferrer"
                          className="inline-flex items-center text-xs font-bold text-primary hover:text-primary-dark transition-colors duration-300 mt-1 cursor-pointer group/link w-fit"
                        >
                          <span>View Directions</span>
                          <ArrowUpRight size={16} strokeWidth={2} className="ml-1 text-primary transform group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform duration-300" />
                        </a>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
