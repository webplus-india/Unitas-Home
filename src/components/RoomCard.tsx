/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { Room } from '../types';
import { 
  ChevronLeft, 
  ChevronRight, 
  Check, 
  Info, 
  CalendarCheck, 
  BedDouble, 
  Laptop, 
  ShowerHead, 
  Wifi, 
  AirVent, 
  DoorClosed 
} from 'lucide-react';

const roomHighlights = [
  { icon: BedDouble, label: 'Premium Bed & Mattress' },
  { icon: Laptop, label: 'Study Desk & Chair' },
  { icon: ShowerHead, label: 'Attached Bathroom' },
  { icon: Wifi, label: 'High-Speed Wi-Fi' },
  { icon: AirVent, label: 'Well-Ventilated Room' },
  { icon: DoorClosed, label: 'Spacious Wardrobe' },
];

interface RoomCardProps {
  key?: string | number;
  room: Room;
  currentImgIdx: number;
  onPrevImage: (e: React.MouseEvent) => void;
  onNextImage: (e: React.MouseEvent) => void;
  onSetImageIdx: (index: number) => void;
  onSelectRoom: (room: Room) => void;
  onExploreAmenities: (roomId: string) => void;
}

export default function RoomCard({
  room,
  currentImgIdx,
  onPrevImage,
  onNextImage,
  onSetImageIdx,
  onSelectRoom,
  onExploreAmenities,
}: RoomCardProps) {
  const isMostPopular = room.badge.toLowerCase().includes('preferred') || room.id === 'twin-sharing';

  return (
    <div
      className={`bg-bg-warm rounded-[24px] overflow-hidden border flex flex-col h-auto md:h-full relative transition-all duration-300 ease-out group ${
        isMostPopular
          ? 'border-[#0F8B8D]/40 lg:scale-[1.01] shadow-sm md:hover:-translate-y-1 md:hover:border-[#F4B400]/75 md:hover:shadow-md'
          : 'border-slate-200/60 shadow-sm md:hover:-translate-y-1 md:hover:border-[#F4B400]/75 md:hover:shadow-md'
      }`}
    >
      {/* Room Image Carousel Container */}
      <div className="relative h-[250px] sm:h-[350px] w-full overflow-hidden bg-charcoal rounded-t-[28px] select-none">
        {room.images.map((img, idx) => (
          <img
            key={`${room.id}-image-${idx}`}
            src={img}
            alt={`${room.name} view ${idx + 1}`}
            loading="lazy"
            decoding="async"
            width={600}
            height={350}
            className={`absolute inset-0 w-full h-full object-cover object-center transition-opacity duration-300 ease-out md:group-hover:scale-[1.02] md:transition-[opacity,transform] ${
              currentImgIdx === idx ? 'opacity-100' : 'opacity-0 pointer-events-none'
            }`}
            referrerPolicy="no-referrer"
          />
        ))}
        
        {/* Subtle dark overlay */}
        <div className="absolute inset-0 bg-black/10 pointer-events-none z-10" />

        {/* Top Badge */}
        <div className="absolute top-5 left-5 z-20">
          <span className="font-sans text-[10px] font-extrabold px-5 py-2 rounded-full uppercase tracking-wider select-none bg-[#F4B400] text-[#0B1E36] shadow-sm">
            {room.badge.toUpperCase()}
          </span>
        </div>

        {/* Carousel Controls */}
        {room.images.length > 1 && (
          <>
            <button
              onClick={onPrevImage}
              className="absolute left-4 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-white text-charcoal border border-slate-200/80 flex items-center justify-center transition-all duration-200 opacity-100 md:opacity-0 md:group-hover:opacity-100 cursor-pointer z-20 shadow-sm hover:bg-[#0F8B8D] hover:text-white hover:border-[#0F8B8D] md:hover:scale-105"
              aria-label="Previous image"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={onNextImage}
              className="absolute right-4 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-white text-charcoal border border-slate-200/80 flex items-center justify-center transition-all duration-200 opacity-100 md:opacity-0 md:group-hover:opacity-100 cursor-pointer z-20 shadow-sm hover:bg-[#0F8B8D] hover:text-white hover:border-[#0F8B8D] md:hover:scale-105"
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
              key={`${room.id}-dot-${i}`}
              onClick={(e) => {
                e.stopPropagation();
                onSetImageIdx(i);
              }}
              className={`w-1.5 h-1.5 rounded-full transition-all duration-200 cursor-pointer ${
                currentImgIdx === i ? 'bg-[#F4B400] w-4' : 'bg-white/50 hover:bg-white/80'
              }`}
              aria-label={`Go to slide ${i + 1}`}
            />
          ))}
        </div>
      </div>

      {/* Card Body */}
      <div className="p-8 flex flex-col flex-grow">
        <div className="mb-4">
          <h3 className="font-display font-extrabold text-[21px] sm:text-[22px] text-[#1F2937] tracking-tight md:group-hover:text-[#0F8B8D] transition-colors duration-200 leading-snug">
            {room.name}
          </h3>
        </div>

        {/* Price Info */}
        <div className="flex items-center justify-between mb-4 p-4 bg-white rounded-[24px] border border-slate-100 shadow-sm min-h-[72px]">
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
              className="text-[9.5px] tracking-wider uppercase font-black text-charcoal bg-[#F4B400] px-2.5 py-0.5 rounded-md select-none transition-all duration-200 md:hover:scale-105"
            >
              SAVE ₹{(room.originalPrice - room.price).toLocaleString('en-IN')}
            </span>
          </div>
        </div>

        {/* Description */}
        <p className="font-sans text-[13.5px] text-[#64748B] leading-relaxed mb-5 h-auto md:min-h-[44px] overflow-visible block md:flex md:items-center">
          {room.description}
        </p>

        {/* Room Features Grid */}
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
                  key={`${room.id}-highlight-${index}`} 
                  className="flex items-center gap-2 px-3 py-1.5 bg-slate-50/40 border border-slate-100/50 rounded-lg select-none transition-colors duration-200 md:hover:bg-[#0F8B8D]/5"
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
              onClick={() => onExploreAmenities(room.id)}
              className="group font-sans text-[11px] font-extrabold text-[#0F8B8D] md:hover:text-[#0c7274] transition-all duration-200 cursor-pointer flex items-center gap-1 bg-[#0F8B8D]/5 hover:bg-[#0F8B8D]/10 border border-[#0F8B8D]/10 px-4 py-1.5 rounded-full shadow-sm md:hover:scale-[1.02] active:scale-95"
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

        {/* Action Buttons */}
        <div className="grid grid-cols-2 gap-3 pt-4 border-t border-slate-100/30 mt-auto">
          <button
            onClick={() => onExploreAmenities(room.id)}
            className="group bg-white border-[1.5px] border-[#0F8B8D] text-[#0F8B8D] md:hover:bg-[#0F8B8D] md:hover:text-white font-sans font-bold text-xs tracking-wider py-3 rounded-[18px] transition-all duration-200 flex items-center justify-center gap-1.5 cursor-pointer h-[44px] md:hover:-translate-y-0.5 active:translate-y-0 shadow-sm"
          >
            <Info className="w-4 h-4 transition-transform duration-200 md:group-hover:scale-110 text-current" />
            <span>View Details</span>
          </button>
          <button
            onClick={() => onSelectRoom(room)}
            className="group bg-[#0F8B8D] md:hover:bg-[#0c7274] text-white font-sans font-bold text-xs tracking-wider py-3 rounded-[18px] transition-all duration-200 flex items-center justify-center gap-1.5 cursor-pointer h-[44px] md:hover:-translate-y-0.5 active:translate-y-0 shadow-sm"
          >
            <CalendarCheck className="w-4 h-4 text-white transition-transform duration-200 md:group-hover:rotate-6" />
            <span>Book a Visit</span>
          </button>
        </div>
      </div>
    </div>
  );
}
