/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { motion } from 'motion/react';

import * as LucideIcons from 'lucide-react';
import { AMENITIES_DATA } from '../data';
import { Amenity } from '../types';

interface AmenitiesProps {
  onNavigate?: (id: string) => void;
  onBookVisit?: () => void;
}

export default function Amenities({ onNavigate, onBookVisit }: AmenitiesProps) {
  const [activeCategory, setActiveCategory] = useState<'All' | 'Essentials' | 'Comfort' | 'Safety'>('All');

  const categories = ['All', 'Essentials', 'Comfort', 'Safety'] as const;

  const filteredAmenities = AMENITIES_DATA.filter((item) => {
    if (activeCategory === 'All') return true;
    return item.category === activeCategory;
  });

  return (
    <motion.section
      id="amenities"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      className="py-[120px] bg-bg-warm relative scroll-mt-12"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-xs uppercase tracking-widest text-[#F4B400] font-bold bg-[#F4B400]/5 px-4 py-2 rounded-full border border-[#F4B400]/15">
            16 Premium Amenities Included
          </span>
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-charcoal mt-6 mb-4">
            Everything Feels Like Home
          </h2>
          <div 
            style={{ width: '48px' }}
            className="h-[2px] bg-[#F4B400] mx-auto rounded-full mb-5" 
          />
          <p className="font-sans text-base text-slate-gray leading-relaxed">
            Every amenity is thoughtfully chosen to create a comfortable, secure, and hassle-free environment where students can focus on learning, living, and feeling at home.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap justify-center items-center gap-2 sm:gap-3 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-6 py-2.5 rounded-full font-sans text-xs tracking-wide transition-all duration-300 border cursor-pointer ${
                activeCategory === cat
                  ? 'bg-primary text-white border-primary shadow-md shadow-primary/10 font-medium'
                  : 'bg-surface-white text-charcoal border-primary/20 hover:border-primary hover:bg-[#ECF9F8] shadow-sm font-medium'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Grid List with Standardized heights and perfect alignment */}
        <div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
        >
          {filteredAmenities.map((amenity) => {
            // Dynamically resolve icon from Lucide, with Fallback
            const IconComponent = (LucideIcons as any)[amenity.iconName] || LucideIcons.HelpCircle;

            return (
              <div
                key={amenity.id}
                className="bg-surface-white p-8 rounded-[24px] border border-border-light/70 shadow-2xs luxury-card-shadow flex flex-col items-center text-center min-h-[250px] group transition-[border-color,box-shadow] md:transition-[border-color,box-shadow,transform] duration-300 md:hover:translate-y-[-5px] hover:shadow-[0_16px_32px_rgba(15,139,141,0.08)] hover:border-primary/30 cursor-pointer"
              >
                {/* Icon Container with Subtle inner highlight and hover effects */}
                <div className="w-14 h-14 rounded-[22px] bg-[#ECF9F8] border border-[rgba(0,145,140,0.15)] shadow-[inset_0_1.5px_2px_rgba(255,255,255,0.8),_inset_0_-1px_1px_rgba(0,0,0,0.02)] flex items-center justify-center text-primary mb-6 transition-[background-color,border-color] duration-[250ms] ease-in-out group-hover:bg-[#D5F2F0] group-hover:border-primary/20 flex-shrink-0 animate-none">
                  {amenity.id === 'wardrobe' ? (
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.2} strokeLinecap="round" strokeLinejoin="round" className="w-7 h-7 text-primary transition-colors duration-[250ms] ease-in-out">
                      <rect x="4" y="2" width="16" height="20" rx="2" />
                      <line x1="12" y1="2" x2="12" y2="22" />
                      <circle cx="9" cy="12" r="1" fill="currentColor" />
                      <circle cx="15" cy="12" r="1" fill="currentColor" />
                    </svg>
                  ) : (
                    <IconComponent className="w-7 h-7 text-primary transition-colors duration-[250ms] ease-in-out" strokeWidth={2.2} />
                  )}
                </div>

                {/* Text Content Area styled for Perfect alignment */}
                <div className="flex flex-col flex-grow w-full items-center justify-start">
                  {/* Amenity Heading with transition matching */}
                  <h3 className="font-display font-bold text-[15px] text-[#0B1E36] transition-colors duration-300 group-hover:text-primary w-full relative pb-1">
                    {amenity.name}
                    <span className="absolute left-1/2 bottom-0 w-0 h-[2px] bg-[#F4B400] transition-all duration-300 group-hover:w-8 -translate-x-1/2" />
                  </h3>

                  {/* Amenity Description with custom width limit for balanced text lines */}
                  <p className="font-sans text-xs text-slate-gray leading-[1.65] mt-3.5 max-w-[82%] mx-auto">
                    {amenity.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>



      </div>
    </motion.section>
  );
}
