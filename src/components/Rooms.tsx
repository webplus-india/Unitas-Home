/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { BedDouble, CheckCircle, ShieldCheck, ConciergeBell } from 'lucide-react';
import { ROOMS_DATA } from '../data';
import { Room } from '../types';
import RoomCard from './RoomCard';

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
      'Delicious Homestyle Food (3 Meals/Day)',
      'Daily Dedicated Housekeeping & Cleaning',
      'High-Speed Fiber Wi-Fi (Continuous coverage)',
      'Professional Laundry & Ironing Service',
      'RO Purified Drinking Water Supply'
    ],
    security: [
      'Spacious Wardrobe with Safe Locker',
      '24/7 CCTV & Gated Security Guards',
      'Full Automatic Power Backup (Inverter)'
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
      'Delicious Homestyle Food (3 Meals/Day)',
      'Daily Dedicated Housekeeping & Cleaning',
      'High-Speed Fiber Wi-Fi (Continuous coverage)',
      'Professional Laundry & Ironing Service',
      'RO Purified Drinking Water Supply'
    ],
    security: [
      'Two Separate Wardrobes with Personal Lockers',
      '24/7 CCTV & Gated Security Guards',
      'Full Automatic Power Backup (Inverter)'
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
      'Delicious Homestyle Food (3 Meals/Day)',
      'Daily Dedicated Housekeeping & Cleaning',
      'High-Speed Fiber Wi-Fi (Continuous coverage)',
      'Professional Laundry & Ironing Service',
      'RO Purified Drinking Water Supply'
    ],
    security: [
      'Three Separate Wardrobes with Personal Lockers',
      '24/7 CCTV & Gated Security Guards',
      'Full Automatic Power Backup (Inverter)'
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
          <span className="text-xs uppercase tracking-widest text-[#D4AF37] font-bold bg-[#D4AF37]/5 px-3.5 py-1.5 rounded-full border border-[#D4AF37]/15">
            PG ROOM OPTIONS
          </span>
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-charcoal mt-4 mb-6 max-w-lg mx-auto leading-tight">
            Choose Your Ideal<br className="hidden sm:inline" /> PG Room in Dehradun
          </h2>
          <div 
            style={{ width: '64px' }}
            className="h-[2.5px] bg-[#D4AF37] mx-auto rounded-full mb-6" 
          />
          <p className="font-sans text-base text-slate-gray leading-relaxed max-w-[760px] mx-auto">
            Choose from Single, Twin, or Triple Sharing rooms designed for students and working professionals. Every room is fully furnished with a comfortable bed, study desk, attached bathroom, high-speed Wi-Fi, secure storage, and daily housekeeping.
          </p>
        </div>

        {/* Room Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-0">
          {ROOMS_DATA.map((room) => {
            const currentImgIdx = activeImageIndexes[room.id] || 0;

            return (
              <RoomCard
                key={room.id}
                room={room}
                currentImgIdx={currentImgIdx}
                onPrevImage={(e) => prevImage(room.id, room.images.length, e)}
                onNextImage={(e) => nextImage(room.id, room.images.length, e)}
                onSetImageIdx={(index) => setActiveImageIndexes((prev) => ({ ...prev, [room.id]: index }))}
                onSelectRoom={onSelectRoom}
                onExploreAmenities={(roomId) => setSelectedComparison(roomId)}
              />
            );
          })}
        </div>

      </div>

      {/* Detail Inclusions Lightbox/Modal */}
      {selectedComparison && (
        <div className="fixed inset-0 z-100 flex items-center justify-center p-4">
          {/* Backdrop - Opaque with no backdrop-blur to avoid GPU issues on mobile */}
          <button
            type="button"
            onClick={() => setSelectedComparison(null)}
            className="absolute inset-0 bg-charcoal/80 w-full h-full border-0 p-0 m-0 cursor-default"
            aria-label="Close modal background"
          />

          {/* Modal Body */}
          {(() => {
            const r = ROOMS_DATA.find((x) => x.id === selectedComparison);
            if (!r) return null;
            const groups = groupedAmenitiesData[r.id] || {
              features: r.features,
              services: [
                'Delicious Homestyle Food (3 Meals/Day)',
                'Daily Dedicated Housekeeping & Cleaning',
                'High-Speed Fiber Wi-Fi',
              ],
              security: [
                'Personal Locker & Secure Storage',
                '24/7 CCTV Security Surveillance',
                'Full Automatic Power Backup (Inverter)'
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
                      <span className="text-[10px] uppercase font-extrabold text-[#2D6A4F] bg-[#2D6A4F]/10 px-2.5 py-1 rounded-md">
                        {r.occupancy}
                      </span>
                      <span className={`text-[10px] uppercase font-black px-2.5 py-1 rounded-md border select-none ${
                        r.badge.toLowerCase().includes('preferred') || r.badge.toLowerCase().includes('popular')
                          ? 'bg-[#D4AF37] text-charcoal border-transparent'
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
                    type="button"
                    className="w-10 h-10 rounded-full bg-slate-50 hover:bg-slate-100 border border-slate-100 text-slate-500 hover:text-charcoal flex items-center justify-center text-xl font-bold transition-all cursor-pointer"
                    aria-label="Close modal"
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
                    <h4 className="flex items-center gap-2 font-display font-extrabold text-xs text-[#2D6A4F] uppercase tracking-wider mb-3">
                      <BedDouble className="w-5 h-5 text-[#2D6A4F] stroke-[2.2]" />
                      <span>Room Essentials</span>
                    </h4>
                    <div className="space-y-2">
                      {groups.features.map((feature, idx) => (
                        <div key={`modal-feature-${idx}`} className="flex items-start gap-2.5 p-3 bg-slate-50/50 rounded-xl border border-slate-100/60">
                          <CheckCircle className="w-4.5 h-4.5 text-[#2D6A4F] shrink-0 mt-0.5 stroke-[2.5]" />
                          <span className="font-sans text-[12.5px] text-charcoal/85 font-semibold leading-normal">
                            {feature}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Section 2: Services Included */}
                  <div>
                    <h4 className="flex items-center gap-2 font-display font-extrabold text-xs text-[#2D6A4F] uppercase tracking-wider mb-3">
                      <ConciergeBell className="w-5 h-5 text-[#2D6A4F] stroke-[2.2]" />
                      <span>Services Included</span>
                    </h4>
                    <div className="space-y-2">
                      {groups.services.map((service, idx) => (
                        <div key={`modal-service-${idx}`} className="flex items-start gap-2.5 p-3 bg-slate-50/50 rounded-xl border border-slate-100/60">
                          <CheckCircle className="w-4.5 h-4.5 text-[#2D6A4F] shrink-0 mt-0.5 stroke-[2.5]" />
                          <span className="font-sans text-[12.5px] text-charcoal/85 font-semibold leading-normal">
                            {service}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Section 3: Safety & Security */}
                  <div>
                    <h4 className="flex items-center gap-2 font-display font-extrabold text-xs text-[#2D6A4F] uppercase tracking-wider mb-3">
                      <ShieldCheck className="w-5 h-5 text-[#2D6A4F] stroke-[2.2]" />
                      <span>Safety & Security</span>
                    </h4>
                    <div className="space-y-2">
                      {groups.security.map((sec, idx) => (
                        <div key={`modal-security-${idx}`} className="flex items-start gap-2.5 p-3 bg-slate-50/50 rounded-xl border border-slate-100/60">
                          <CheckCircle className="w-4.5 h-4.5 text-[#2D6A4F] shrink-0 mt-0.5 stroke-[2.5]" />
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
                    <span className="font-display font-black text-xl text-[#2D6A4F]">₹{r.price.toLocaleString('en-IN')}<span className="text-xs font-semibold text-slate-500">/month</span></span>
                  </div>
                  <div className="flex flex-wrap gap-2.5">
                    <button
                      onClick={() => {
                        onSelectRoom(r);
                        setSelectedComparison(null);
                      }}
                      type="button"
                      className="bg-[#D4AF37] md:hover:bg-[#C79A17] text-[#1F2937] font-sans font-bold text-xs tracking-wider px-5 py-3 rounded-[18px] transition-all duration-200 shadow-md cursor-pointer"
                    >
                      Book a Visit
                    </button>
                    {onReserveRoom && (
                      <button
                        onClick={() => {
                          onReserveRoom(r);
                          setSelectedComparison(null);
                        }}
                        type="button"
                        className="bg-[#2D6A4F] md:hover:bg-[#1B4332] text-white font-sans font-bold text-xs tracking-wider px-5 py-3 rounded-[18px] transition-all duration-200 shadow-md cursor-pointer"
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
