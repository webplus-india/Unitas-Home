/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';

import { Users, Shield, CalendarCheck, Check, Info, ArrowRight, Eye, User, Wifi, Bath, Bed, BookOpen, Sparkles, CheckCircle, ChevronLeft, ChevronRight, Lock, Package, Home, Grid2x2, Laptop, ShowerHead, AirVent, DoorClosed, BedDouble, ShieldCheck, ConciergeBell } from 'lucide-react';
import { ROOMS_DATA } from '../data';
import { Room } from '../types';

const roomHighlights = [
  { icon: BedDouble, label: 'Premium Bed & Mattress' },
  { icon: Laptop, label: 'Study Desk & Chair' },
  { icon: ShowerHead, label: 'Attached Bathroom' },
  { icon: Wifi, label: 'High-Speed Wi-Fi' },
  { icon: AirVent, label: 'Well-Ventilated Room' },
  { icon: DoorClosed, label: 'Spacious Wardrobe' },
];

const groupedAmenitiesData: {
  [roomId: string]: {
    features: string[];
    services: string[];
    security: string[];
  }
} = {
  'single-sharing': {
    features: [
      'Private Premium Box Bed & Mattress',
      'Exclusive Study Table & Ergonomic Chair',
      'Attached Washroom with Premium Fittings',
      'Private Balcony with Dehradun Valley Views',
      'Dedicated AC & Room Heater Option'
    ],
    services: [
      'Delicious Homestyle Food (4 Meals/Day)',
      'Daily Dedicated Housekeeping & Cleaning',
      'High-Speed Fiber Wi-Fi (Continuous coverage)',
      'Professional Laundry & Ironing Service',
      'RO Purified Drinking Water Supply'
    ],
    security: [
      'Spacious Wardrobe with Safe Locker',
      '24/7 CCTV & Gated Security Guards',
      'Biometric Main Entrance Access Control',
      'Full Automatic Power Backup (Diesel Gen)'
    ]
  },
  'twin-sharing': {
    features: [
      'Individual Box Beds & Premium Mattresses',
      'Dual Study Workstations with Lamp Shelves',
      'Shared Attached Modern Bathroom',
      'Large Ventilated Window with Curtains',
      'Side Table & Individual USB Charging Ports'
    ],
    services: [
      'Delicious Homestyle Food (4 Meals/Day)',
      'Daily Dedicated Housekeeping & Cleaning',
      'High-Speed Fiber Wi-Fi (Continuous coverage)',
      'Professional Laundry & Ironing Service',
      'RO Purified Drinking Water Supply'
    ],
    security: [
      'Two Separate Wardrobes with Personal Lockers',
      '24/7 CCTV & Gated Security Guards',
      'Biometric Main Entrance Access Control',
      'Full Automatic Power Backup (Diesel Gen)'
    ]
  },
  'triple-sharing': {
    features: [
      'Individually Partitioned Sleep Spaces',
      'Ergonomic Work Desks & Custom Lighting',
      'Large Attached Bathroom with Geyser',
      'High Ceilings & Large Airy Balcony',
      'Side Tables with Charging Sockets'
    ],
    services: [
      'Delicious Homestyle Food (4 Meals/Day)',
      'Daily Dedicated Housekeeping & Cleaning',
      'High-Speed Fiber Wi-Fi (Continuous coverage)',
      'Professional Laundry & Ironing Service',
      'RO Purified Drinking Water Supply'
    ],
    security: [
      'Three Separate Wardrobes with Personal Lockers',
      '24/7 CCTV & Gated Security Guards',
      'Biometric Main Entrance Access Control',
      'Full Automatic Power Backup (Diesel Gen)'
    ]
  }
};

interface RoomsProps {
  onSelectRoom: (room: Room) => void;
  onReserveRoom?: (room: Room) => void;
}

export default function Rooms({ onSelectRoom, onReserveRoom }: RoomsProps) {
  const [selectedComparison, setSelectedComparison] = useState<string | null>(null);
  const [activeImageIndexes, setActiveImageIndexes] = useState<{ [roomId: string]: number }>({
    'single-sharing': 0,
    'twin-sharing': 0,
    'triple-sharing': 0,
  });

  const nextImage = (roomId: string, imagesLength: number, e: React.MouseEvent) => {
    e.stopPropagation();
    setActiveImageIndexes((prev) => ({
      ...prev,
      [roomId]: (prev[roomId] + 1) % imagesLength,
    }));
  };

  const prevImage = (roomId: string, imagesLength: number, e: React.MouseEvent) => {
    e.stopPropagation();
    setActiveImageIndexes((prev) => ({
      ...prev,
      [roomId]: (prev[roomId] - 1 + imagesLength) % imagesLength,
    }));
  };

  return (
    <section id="rooms" className="py-[120px] bg-surface-white relative scroll-mt-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-xs uppercase tracking-widest text-[#F4B400] font-bold bg-[#F4B400]/5 px-3.5 py-1.5 rounded-full border border-[#F4B400]/15">
            PG ROOM OPTIONS
          </span>
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-charcoal mt-4 mb-6 max-w-lg mx-auto leading-tight">
            Choose Your Ideal<br className="hidden sm:inline" /> PG Room in Dehradun
          </h2>
          <div 
            style={{ width: '64px' }}
            className="h-[2.5px] bg-[#F4B400] mx-auto rounded-full mb-6" 
          />
          <p className="font-sans text-base text-slate-gray leading-relaxed max-w-[760px] mx-auto">
            Choose from Single, Twin, or Triple Sharing rooms designed for students and working professionals. Every room is fully furnished with a comfortable bed, study desk, attached bathroom, high-speed Wi-Fi, secure storage, and daily housekeeping.
          </p>
        </div>

        {/* Room Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-0">
          {ROOMS_DATA.map((room) => {
            const currentImgIdx = activeImageIndexes[room.id] || 0;
            const isMostPopular = room.badge.toLowerCase().includes('preferred') || room.id === 'twin-sharing';

            const getBadgeStyle = (text: string) => {
              return 'bg-[#F4B400] text-[#0B1E36] border-transparent font-extrabold shadow-[0_4px_12px_rgba(0,0,0,0.12)]';
            };

            return (
              <div
                key={room.id}
                className={`bg-bg-warm rounded-[24px] overflow-hidden border flex flex-col h-auto md:h-full group transition-[border-color,box-shadow] md:transition-[border-color,box-shadow,transform] duration-300 ease-out relative hover:border-[#F4B400]/75 ${
                  isMostPopular
                    ? 'border-[#0F8B8D]/40 lg:scale-[1.02] shadow-[0_12px_32px_rgba(15,139,141,0.04)] md:hover:-translate-y-1.5 md:hover:shadow-[0_24px_48px_rgba(15,139,141,0.12),_0_0_25px_rgba(244,180,0,0.08)]'
                    : 'border-slate-200/60 shadow-[0_8px_24px_rgba(0,0,0,0.015)] md:hover:-translate-y-1.5 md:hover:shadow-[0_24px_48px_rgba(15,139,141,0.08),_0_0_25px_rgba(244,180,0,0.08)]'
                }`}
              >
                {/* Room Image Carousel Container with Zoom Hover and Smooth Transitions */}
                <div className="relative h-[250px] sm:h-[350px] w-full overflow-hidden bg-charcoal rounded-t-[28px]">
                  {room.images.map((img, idx) => (
                    <img
                      key={idx}
                      src={img}
                      alt={room.name}
                      className={`absolute inset-0 w-full h-full object-cover object-center transition-[opacity,transform] duration-500 ease-out md:group-hover:scale-[1.03] ${
                        currentImgIdx === idx ? 'opacity-100' : 'opacity-0'
                      }`}
                      referrerPolicy="no-referrer"
                    />
                  ))}
                  
                  {/* Subtle dark overlay for badge and control readability */}
                  <div className="absolute inset-0 bg-black/12 pointer-events-none z-10" />
 
                  {/* Top Badges */}
                  <div className="absolute top-5 left-5 z-20">
                    <span className={`font-sans text-[10px] font-bold px-5 py-2 rounded-full uppercase tracking-wider select-none ${getBadgeStyle(room.badge)}`}>
                      {room.badge.toUpperCase()}
                    </span>
                  </div>
 
                  {/* Carousel Controls */}
                  {room.images.length > 1 && (
                    <>
                      <button
                        onClick={(e) => prevImage(room.id, room.images.length, e)}
                        className="absolute left-4 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-white text-charcoal border border-slate-200/80 flex items-center justify-center transition-[opacity,background-color,border-color,transform] duration-300 opacity-0 group-hover:opacity-100 cursor-pointer z-20 shadow-md hover:bg-[#0F8B8D] hover:text-white hover:border-[#0F8B8D] md:hover:scale-105"
                        aria-label="Previous image"
                      >
                        <ChevronLeft className="w-5 h-5" />
                      </button>
                      <button
                        onClick={(e) => nextImage(room.id, room.images.length, e)}
                        className="absolute right-4 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-white text-charcoal border border-slate-200/80 flex items-center justify-center transition-[opacity,background-color,border-color,transform] duration-300 opacity-0 group-hover:opacity-100 cursor-pointer z-20 shadow-md hover:bg-[#0F8B8D] hover:text-white hover:border-[#0F8B8D] md:hover:scale-105"
                        aria-label="Next image"
                      >
                        <ChevronRight className="w-5 h-5" />
                      </button>
                    </>
                  )}
 
                  {/* Carousel Dots */}
                  <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex space-x-1.5 z-20">
                    {room.images.map((_, i) => (
                      <button
                        key={i}
                        onClick={(e) => {
                          e.stopPropagation();
                          setActiveImageIndexes((prev) => ({ ...prev, [room.id]: i }));
                        }}
                        className={`w-1.5 h-1.5 rounded-full transition-all duration-300 cursor-pointer ${
                          currentImgIdx === i ? 'bg-[#F4B400] w-4' : 'bg-white/50 hover:bg-white/80'
                        }`}
                        aria-label={`Go to slide ${i + 1}`}
                      />
                    ))}
                  </div>
                </div>
 
                {/* Card Body - Premium Balanced 32px padding */}
                <div className="p-8 flex flex-col flex-grow">
                  <div className="mb-4">
                    <h3 className="font-display font-extrabold text-[21px] sm:text-[22px] text-[#1F2937] tracking-tight group-hover:text-[#0F8B8D] transition-colors leading-snug">
                      {room.name}
                    </h3>
                  </div>
 

 
                  {/* Price info - Perfect align and premium style */}
                  <div className="flex items-center justify-between mb-4 p-4 bg-white rounded-[24px] border border-slate-100 shadow-[0_2px_12px_rgba(0,0,0,0.01)] min-h-[72px]">
                    <div className="flex items-baseline gap-0.5">
                      <span className="font-display font-black text-2xl text-[#0F8B8D] tracking-tight">
                        ₹{room.price.toLocaleString('en-IN')}
                      </span>
                      <span className="font-sans text-[10px] font-semibold text-[#64748B]">/month</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="font-sans text-xs line-through text-slate-400/50">
                        ₹{room.originalPrice.toLocaleString('en-IN')}
                      </span>
                      <span 
                        className="text-[9.5px] tracking-wider uppercase font-black text-charcoal bg-[#F4B400] px-2.5 py-0.5 rounded-md select-none shadow-3xs cursor-pointer transition-transform duration-200 hover:scale-105"
                      >
                        SAVE ₹{(room.originalPrice - room.price).toLocaleString('en-IN')}
                      </span>
                    </div>
                  </div>
 
                  {/* Description - Consistent layout, fully visible with matching minimum heights */}
                  <p className="font-sans text-[13.5px] text-[#64748B] leading-relaxed mb-5 h-auto md:min-h-[44px] overflow-visible block md:flex md:items-center">
                    {room.description}
                  </p>
 
                  {/* Room Features - Two column grid with premium outline icons */}
                  <div className="border-t border-slate-100/35 pt-4 mb-4.5 flex-grow">
                    <div className="flex items-center justify-center gap-1.5 mb-3">
                      <div className="h-[1.5px] w-3 bg-[#F4B400] rounded-full" />
                      <span className="text-[10px] font-bold uppercase tracking-normal text-[#0F8B8D]/90 block">
                        ROOM FEATURES
                      </span>
                      <div className="h-[1.5px] w-3 bg-[#F4B400] rounded-full" />
                    </div>
                    <div className="grid grid-cols-2 gap-x-4 gap-y-2.5">
                      {roomHighlights.map((highlight, index) => {
                        const HighlightIcon = highlight.icon;
                        return (
                          <div 
                            key={index} 
                            className="flex items-center gap-2 px-3 py-1.5 bg-slate-50/40 border border-slate-100/50 rounded-lg select-none transition-colors duration-200 hover:bg-[#0F8B8D]/5"
                          >
                            <HighlightIcon className="w-4 h-4 text-[#0F8B8D]/90 shrink-0 stroke-[2]" />
                            <span className="font-sans text-[12px] text-charcoal/80 font-medium tracking-tight truncate leading-none">
                              {highlight.label}
                            </span>
                          </div>
                        );
                      })}
                    </div>
 
                    <div className="mt-4 flex justify-center">
                      <button
                        onClick={() => setSelectedComparison(room.id)}
                        className="group font-sans text-[11px] font-extrabold text-[#0F8B8D] hover:text-[#0c7274] transition-[background-color,border-color,color,box-shadow,transform] duration-200 cursor-pointer flex items-center gap-1 bg-[#0F8B8D]/5 hover:bg-[#0F8B8D]/10 border border-[#0F8B8D]/10 px-4 py-1.5 rounded-full shadow-3xs md:hover:scale-[1.02] active:scale-95"
                      >
                        <span>Explore All Amenities</span>
                        <span className="text-[11.5px] transition-transform duration-200 md:group-hover:translate-x-0.5">→</span>
                      </button>
                    </div>
                  </div>
 
                  {/* Bottom Trust Row */}
                  <div className="flex items-center justify-between px-1 py-3 border-t border-slate-100/30 mb-4 text-[10.5px] sm:text-[11px] font-semibold text-slate-500 select-none">
                    <span className="flex items-center gap-1"><Check className="w-3.5 h-3.5 text-[#0F8B8D] stroke-[3]" /> No Brokerage</span>
                    <span className="flex items-center gap-1"><Check className="w-3.5 h-3.5 text-[#0F8B8D] stroke-[3]" /> Ready to Move</span>
                    <span className="flex items-center gap-1"><Check className="w-3.5 h-3.5 text-[#0F8B8D] stroke-[3]" /> Verified Property</span>
                  </div>
 
                  {/* Action Buttons - Aligned and consistent height */}
                  <div className="grid grid-cols-2 gap-3 pt-4 border-t border-slate-100/30 mt-auto">
                    <button
                      onClick={() => setSelectedComparison(room.id)}
                      className="group bg-white border-[1.5px] border-[#0F8B8D] text-[#0F8B8D] hover:bg-[#0F8B8D] hover:text-white font-sans font-bold text-xs tracking-wider py-3 rounded-[18px] transition-[background-color,border-color,color,box-shadow,transform] md:transition-all duration-300 flex items-center justify-center gap-1.5 cursor-pointer h-[44px] md:hover:-translate-y-0.5 active:translate-y-0 shadow-2xs hover:shadow-sm"
                    >
                      <Info className="w-4 h-4 transition-transform duration-300 md:group-hover:scale-110 text-current" />
                      <span>View Details</span>
                    </button>
                    <button
                      onClick={() => onSelectRoom(room)}
                      className="group bg-[#0F8B8D] hover:bg-[#0c7274] text-white font-sans font-bold text-xs tracking-wider py-3 rounded-[18px] transition-[background-color,border-color,color,box-shadow,transform] md:transition-all duration-300 flex items-center justify-center gap-1.5 cursor-pointer h-[44px] md:hover:-translate-y-0.5 active:translate-y-0 shadow-[0_2px_8px_rgba(15,139,141,0.12)] hover:shadow-[0_12px_24px_rgba(15,139,141,0.22)]"
                    >
                      <CalendarCheck className="w-4 h-4 text-white transition-transform duration-300 md:group-hover:rotate-6" />
                      <span>Book a Visit</span>
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>

      {/* Detail Inclusions Lightbox/Modal */}
        {selectedComparison && (
          <div className="fixed inset-0 z-100 flex items-center justify-center p-4">
            {/* Backdrop */}
            <div
              onClick={() => setSelectedComparison(null)}
              className="absolute inset-0 bg-charcoal/70 backdrop-blur-xs"
            />

            {/* Modal Body */}
            {(() => {
              const r = ROOMS_DATA.find((x) => x.id === selectedComparison);
              if (!r) return null;
              const groups = groupedAmenitiesData[r.id] || {
                features: r.features,
                services: [
                  'Delicious Homestyle Food (4 Meals/Day)',
                  'Daily Dedicated Housekeeping & Cleaning',
                  'High-Speed Fiber Wi-Fi',
                ],
                security: [
                  'Personal Locker & Secure Storage',
                  '24/7 CCTV Security Surveillance',
                  'Biometric Main Entrance Access'
                ]
              };

              return (
                <div
                  className="relative bg-white rounded-[24px] overflow-hidden shadow-2xl max-w-xl w-full z-10 border border-slate-100 max-h-[90vh] flex flex-col"
                >
                  {/* Modal Header */}
                  <div className="px-6 pt-6 pb-4 border-b border-slate-100 flex items-center justify-between">
                    <div>
                      <div className="flex items-center space-x-2.5">
                        <span className="text-[10px] uppercase font-extrabold text-[#0F8B8D] bg-[#0F8B8D]/10 px-2.5 py-1 rounded-md">
                          {r.occupancy}
                        </span>
                        <span className={`text-[10px] uppercase font-black px-2.5 py-1 rounded-md border select-none ${
                          r.badge.toLowerCase().includes('preferred') || r.badge.toLowerCase().includes('popular')
                            ? 'bg-[#F4B400] text-charcoal border-transparent'
                            : r.badge.toLowerCase().includes('privacy')
                            ? 'bg-[#0B1E36] text-white border-transparent'
                            : 'bg-emerald-600 text-white border-transparent'
                        }`}>
                          {r.badge}
                        </span>
                      </div>
                      <h3 className="font-display font-extrabold text-2xl text-charcoal mt-2">
                        {r.name} Details
                      </h3>
                    </div>
                    <button
                      onClick={() => setSelectedComparison(null)}
                      className="w-10 h-10 rounded-full bg-slate-50 hover:bg-slate-100 border border-slate-100 text-slate-500 hover:text-charcoal flex items-center justify-center text-xl font-bold transition-all cursor-pointer"
                    >
                      ×
                    </button>
                  </div>

                  {/* Modal Content */}
                  <div className="p-6 overflow-y-auto space-y-6 flex-grow">
                    <p className="font-sans text-sm text-slate-gray leading-relaxed">
                      Every detail of the {r.name} co-living space is optimized for students and working professionals in Dehradun. Here is exactly what is included with your room:
                    </p>

                    {/* Section 1: Room Features */}
                    <div>
                      <h4 className="flex items-center gap-2 font-display font-extrabold text-xs text-[#0F8B8D] uppercase tracking-wider mb-3">
                        <BedDouble className="w-5 h-5 text-[#0F8B8D] stroke-[2.2]" />
                        <span>Room Essentials</span>
                      </h4>
                      <div className="space-y-2">
                        {groups.features.map((feature, idx) => (
                          <div key={idx} className="flex items-start gap-2.5 p-3 bg-slate-50/50 rounded-xl border border-slate-100/60">
                            <CheckCircle className="w-4.5 h-4.5 text-[#0F8B8D] shrink-0 mt-0.5 stroke-[2.5]" />
                            <span className="font-sans text-[12.5px] text-charcoal/85 font-semibold leading-normal">
                              {feature}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Section 2: Services Included */}
                    <div>
                      <h4 className="flex items-center gap-2 font-display font-extrabold text-xs text-[#0F8B8D] uppercase tracking-wider mb-3">
                        <ConciergeBell className="w-5 h-5 text-[#0F8B8D] stroke-[2.2]" />
                        <span>Services Included</span>
                      </h4>
                      <div className="space-y-2">
                        {groups.services.map((service, idx) => (
                          <div key={idx} className="flex items-start gap-2.5 p-3 bg-slate-50/50 rounded-xl border border-slate-100/60">
                            <CheckCircle className="w-4.5 h-4.5 text-[#0F8B8D] shrink-0 mt-0.5 stroke-[2.5]" />
                            <span className="font-sans text-[12.5px] text-charcoal/85 font-semibold leading-normal">
                              {service}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Section 3: Safety & Security */}
                    <div>
                      <h4 className="flex items-center gap-2 font-display font-extrabold text-xs text-[#0F8B8D] uppercase tracking-wider mb-3">
                        <ShieldCheck className="w-5 h-5 text-[#0F8B8D] stroke-[2.2]" />
                        <span>Safety & Security</span>
                      </h4>
                      <div className="space-y-2">
                        {groups.security.map((sec, idx) => (
                          <div key={idx} className="flex items-start gap-2.5 p-3 bg-slate-50/50 rounded-xl border border-slate-100/60">
                            <CheckCircle className="w-4.5 h-4.5 text-[#0F8B8D] shrink-0 mt-0.5 stroke-[2.5]" />
                            <span className="font-sans text-[12.5px] text-charcoal/85 font-semibold leading-normal">
                              {sec}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Modal Footer */}
                  <div className="p-6 bg-slate-50 border-t border-slate-100 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                    <div>
                      <span className="block text-[10px] uppercase text-slate-gray/70 font-bold tracking-wider">Monthly Rate</span>
                      <span className="font-display font-black text-xl text-[#0F8B8D]">₹{r.price.toLocaleString('en-IN')}<span className="text-xs font-semibold text-slate-500">/month</span></span>
                    </div>
                    <div className="flex flex-wrap gap-2.5">
                      <button
                        onClick={() => {
                          onSelectRoom(r);
                          setSelectedComparison(null);
                        }}
                        className="bg-[#0F8B8D] hover:bg-[#0c7274] text-white font-sans font-bold text-xs tracking-wider px-5 py-3 rounded-[18px] transition-all duration-300 shadow-md hover:shadow-[0_8px_20px_rgba(15,139,141,0.25)] hover:-translate-y-0.5 active:translate-y-0 cursor-pointer"
                      >
                        Book a Visit
                      </button>
                      {onReserveRoom && (
                        <button
                          onClick={() => {
                            onReserveRoom(r);
                            setSelectedComparison(null);
                          }}
                          className="bg-[#F4B400] hover:bg-[#D99A00] text-[#1F2937] font-sans font-bold text-xs tracking-wider px-5 py-3 rounded-[18px] transition-all duration-300 shadow-md hover:shadow-[0_8px_20px_rgba(244,180,0,0.25)] hover:-translate-y-0.5 active:translate-y-0 cursor-pointer"
                        >
                          Reserve Room
                        </button>
                      )}
                    </div>
                  </div>
                </div>
              );
            })()}
          </div>
        )}
    </section>
  );
}
