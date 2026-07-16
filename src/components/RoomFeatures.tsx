/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { BedDouble, DoorOpen } from 'lucide-react';

const roomHighlights = [
  { icon: 'BedDouble', label: 'Premium Bed & Mattress' },
  { icon: '/icons/desk-chair.svg', label: 'Study Desk & Chair' },
  { icon: '/icons/shower.svg', label: 'Attached Bathroom' },
  { icon: 'DoorOpen', label: 'Attached Balcony' },
  { icon: '/icons/window.svg', label: 'Well-Ventilated Room' },
  { icon: '/icons/wardrobe.svg', label: 'Spacious Wardrobe' },
];

interface RoomFeaturesProps {
  roomId: string;
}

export default function RoomFeatures({ roomId }: RoomFeaturesProps) {
  return (
    <div className="border-t border-slate-100/35 pt-4 mb-4.5 flex-grow">
      {/* Header Badge style label */}
      <div className="flex items-center justify-center gap-1.5 mb-3">
        <div className="h-[1.5px] w-3 bg-[#D4AF37] rounded-full" />
        <span className="text-[10px] font-bold uppercase tracking-normal text-[#2D6A4F]/90 block">
          ROOM FEATURES
        </span>
        <div className="h-[1.5px] w-3 bg-[#D4AF37] rounded-full" />
      </div>

      {/* Grid of highlights - clean semantic layout */}
      <div className="grid grid-cols-2 gap-3">
        {roomHighlights.map((item, index) => {
          return (
            <div 
              key={`${roomId}-feat-${index}`} 
              className="flex items-center gap-[10px] flex-nowrap px-3.5 py-3 bg-white border border-slate-100 rounded-xl shadow-[0_2px_8px_rgba(0,0,0,0.015)] select-none h-full transition-[border-color,box-shadow] duration-200 md:hover:border-[#2D6A4F]/25 md:hover:shadow-[0_4px_12px_rgba(45, 106, 79,0.03)]"
            >
              {item.icon === 'BedDouble' ? (
                <BedDouble className="w-5 h-5 shrink-0 text-[#2D6A4F]" strokeWidth={1.8} />
              ) : item.icon === 'DoorOpen' ? (
                <DoorOpen className="w-5 h-5 shrink-0 text-[#2D6A4F]" strokeWidth={1.8} />
              ) : (
                <img 
                  src={item.icon} 
                  alt="" 
                  width="20" 
                  height="20" 
                  loading="lazy" 
                  decoding="async"
                  className="w-5 h-5 shrink-0"
                />
              )}
              <span className="font-sans text-[11.5px] sm:text-[12px] text-charcoal/80 font-semibold tracking-tight leading-snug flex-1">
                {item.label}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
}
