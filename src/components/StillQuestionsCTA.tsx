import React from 'react';

interface StillQuestionsCTAProps {
  onBookVisit?: () => void;
  onViewAllAmenities?: () => void;
}

export default function StillQuestionsCTA({ onBookVisit, onViewAllAmenities }: StillQuestionsCTAProps) {
  return (
    <div className="mt-24 border-t border-border-light/60 pt-16 text-center max-w-2xl mx-auto">
      <h3 className="font-display font-extrabold text-2xl text-charcoal mb-3">
        Still Have Questions?
      </h3>
      <p className="font-sans text-sm text-slate-gray leading-relaxed mb-8">
        Explore every premium amenity or schedule a visit to experience Unitas Home in person.
      </p>
      <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
        {onBookVisit && (
          <button
            onClick={onBookVisit}
            className="w-full sm:w-auto px-8 py-3.5 bg-[#D4AF37] hover:bg-[#C79A17] text-[#1F2937] rounded-[18px] font-sans font-bold text-sm shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-0.5 cursor-pointer"
          >
            Book a Visit
          </button>
        )}
        {onViewAllAmenities && (
          <button
            onClick={onViewAllAmenities}
            className="w-full sm:w-auto px-8 py-3.5 bg-white border border-[#2D6A4F]/20 hover:border-[#2D6A4F] text-charcoal hover:text-[#2D6A4F] rounded-[18px] font-sans font-bold text-sm shadow-xs hover:bg-[#2D6A4F]/5 transition-all duration-300 transform hover:-translate-y-0.5 cursor-pointer"
          >
            View All Amenities
          </button>
        )}
      </div>
    </div>
  );
}
