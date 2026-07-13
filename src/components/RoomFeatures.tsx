/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';

const roomHighlights = [
  'Premium Bed & Mattress',
  'Study Desk & Chair',
  'Attached Bathroom',
  'High-Speed Wi-Fi',
  'Well-Ventilated Room',
  'Spacious Wardrobe',
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
      <div className="grid grid-cols-2 gap-x-3 gap-y-2.5">
        {roomHighlights.map((label, index) => {
          return (
            <div 
              key={`${roomId}-feat-${index}`} 
              className="flex items-center justify-center text-center px-2.5 py-2 bg-slate-50/40 border border-slate-100/50 rounded-lg select-none"
            >
              <span className="font-sans text-[11.5px] text-charcoal/80 font-semibold tracking-tight leading-snug">
                {label}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
}
