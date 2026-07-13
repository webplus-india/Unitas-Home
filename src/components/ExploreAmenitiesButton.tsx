/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';

interface ExploreAmenitiesButtonProps {
  onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

export default function ExploreAmenitiesButton({ onClick }: ExploreAmenitiesButtonProps) {
  return (
    <button
      onClick={onClick}
      type="button"
      className="group font-sans text-[11px] font-extrabold text-[#0F8B8D] md:hover:text-[#0c7274] transition-colors duration-200 cursor-pointer flex items-center gap-1 bg-[#0F8B8D]/5 md:hover:bg-[#0F8B8D]/10 border border-[#0F8B8D]/10 px-4 py-1.5 rounded-full shadow-sm"
    >
      <span>Explore All Amenities</span>
      <span className="text-[11.5px] transition-transform duration-200 md:group-hover:translate-x-0.5">→</span>
    </button>
  );
}
