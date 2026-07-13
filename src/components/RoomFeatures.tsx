/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { 
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

interface RoomFeaturesProps {
  roomId: string;
}

export default function RoomFeatures({ roomId }: RoomFeaturesProps) {
  return (
    <div className="border-t border-slate-100/35 pt-4 mb-4.5 flex-grow">
      {/* Header Badge style label */}
      <div className="flex items-center justify-center gap-1.5 mb-3">
        <div className="h-[1.5px] w-3 bg-[#F4B400] rounded-full" />
        <span className="text-[10px] font-bold uppercase tracking-normal text-[#0F8B8D]/90 block">
          ROOM FEATURES
        </span>
        <div className="h-[1.5px] w-3 bg-[#F4B400] rounded-full" />
      </div>

      {/* Grid of highlights - clean semantic layout */}
      <div className="grid grid-cols-2 gap-x-4 gap-y-2.5">
        {roomHighlights.map((highlight, index) => {
          const HighlightIcon = highlight.icon;
          return (
            <div 
              key={`${roomId}-feat-${index}`} 
              className="flex items-center gap-2 px-3 py-1.5 bg-slate-50/40 border border-slate-100/50 rounded-lg select-none"
            >
              <HighlightIcon className="w-4 h-4 text-[#0F8B8D]/90 shrink-0 stroke-[2]" />
              <span className="font-sans text-[12px] text-charcoal/80 font-medium tracking-tight truncate leading-none">
                {highlight.label}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
}
