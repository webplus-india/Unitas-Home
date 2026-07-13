/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Maximize2, X, ChevronLeft, ChevronRight, Image } from 'lucide-react';
import { GALLERY_DATA } from '../data';

interface GalleryProps {
  onBookVisit?: () => void;
}

export default function Gallery({ onBookVisit }: GalleryProps) {
  const [filter, setFilter] = useState<string>('All');
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const categories = ['All', 'Rooms', 'Exterior', 'Reception', 'Common Lounge', 'Study Space', 'Amenities'];

  const filteredData = filter === 'All' 
    ? GALLERY_DATA.filter((item) => item.id !== 'gal-cor-1' && item.id !== 'gal-water-1')
    : GALLERY_DATA.filter((item) => item.category === filter);

  const openLightbox = (id: string) => {
    const idx = filteredData.findIndex((item) => item.id === id);
    if (idx !== -1) {
      setLightboxIndex(idx);
    }
  };

  const closeLightbox = () => {
    setLightboxIndex(null);
  };

  const nextSlide = () => {
    if (lightboxIndex !== null) {
      setLightboxIndex((lightboxIndex + 1) % filteredData.length);
    }
  };

  const prevSlide = () => {
    if (lightboxIndex !== null) {
      setLightboxIndex((lightboxIndex - 1 + filteredData.length) % filteredData.length);
    }
  };

  return (
    <section id="gallery" className="py-[120px] bg-surface-white relative scroll-mt-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs uppercase tracking-widest text-[#F4B400] font-bold bg-[#F4B400]/5 px-3.5 py-1.5 rounded-full border border-[#F4B400]/15">
            Property Gallery
          </span>
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-charcoal mt-4 mb-5">
            Explore Life at Unitas Home
          </h2>
          <motion.div 
            initial={{ width: 0, opacity: 0 }}
            whileInView={{ width: 48, opacity: 1 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            viewport={{ once: true }}
            className="h-[2px] bg-[#F4B400] mx-auto rounded-full mb-5" 
          />
          <p className="font-sans text-base text-slate-gray leading-relaxed">
            Browse real photos of our rooms, study spaces, dining area, common lounge, and shared facilities to experience everyday life at Unitas Home before your visit.
          </p>
        </div>

        {/* Filter Categories */}
        <div className="flex flex-wrap justify-center items-center gap-2 mb-12">
          {categories.map((cat) => (
            <motion.button
              key={cat}
              onClick={() => setFilter(cat)}
              whileHover={{ scale: 1.03, y: -1 }}
              whileTap={{ scale: 0.98 }}
              className={`px-5 py-2 rounded-full font-sans text-xs font-bold transition-all duration-300 cursor-pointer ${
                filter === cat
                  ? 'bg-primary text-white border border-primary shadow-sm'
                  : 'bg-bg-warm text-slate-gray border border-border-light hover:border-[#F4B400] hover:text-[#0F8B8D]'
              }`}
            >
              {cat}
            </motion.button>
          ))}
        </div>

        {/* Masonry Layout - Optimized with static wrappers to avoid multi-column layout thrashing on Android Chrome */}
        <div className="columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-6 space-y-6">
          {filteredData.map((item) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5 }}
              onClick={() => openLightbox(item.id)}
              className={`break-inside-avoid relative rounded-[24px] overflow-hidden border border-border-light/60 bg-bg-warm group cursor-pointer shadow-2xs hover:shadow-lg transition-all duration-300 ${item.aspect}`}
            >
              {/* Image */}
              <img
                src={item.image}
                alt={item.title}
                title={item.title}
                className="w-full h-full object-cover object-center scale-100 group-hover:scale-105 transition-transform duration-300"
                loading="lazy"
                decoding="async"
                referrerPolicy="no-referrer"
              />

              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal/80 via-charcoal/25 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6" />

              {/* Content Shown on Hover */}
              <div className="absolute bottom-0 inset-x-0 p-6 transform translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-between z-10">
                <div>
                  <span className="block text-xs text-accent uppercase font-extrabold tracking-widest">
                    {item.id === 'gal-wash-1' ? 'Washroom' : item.id === 'gal-water-1' ? 'Water Cooler' : item.id === 'gal-cor-1' ? 'Corridor' : item.category}
                  </span>
                </div>
                <div className="w-9 h-9 rounded-xl bg-white/20 backdrop-blur-md flex items-center justify-center text-white border border-white/20">
                  <Maximize2 className="w-4 h-4" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Gallery End CTA */}
        <div className="mt-20 text-center max-w-3xl mx-auto bg-[#FFFDF6] rounded-[24px] py-14 px-8 sm:py-16 sm:px-16 border border-[#F4B400]/20 shadow-md shadow-[#F4B400]/5 transition-all duration-300 hover:bg-[#FFF9E8]">
          <h3 className="font-display font-extrabold text-2xl sm:text-3xl text-charcoal mb-4">
            Like What You See?
          </h3>
          <p className="font-sans text-sm sm:text-base text-slate-gray leading-relaxed mb-8 max-w-xl mx-auto">
            Visit Unitas Home in person and experience our premium student living spaces for yourself.
          </p>
          {onBookVisit && (
            <motion.button
              onClick={onBookVisit}
              whileHover={{ 
                scale: 1.03, 
                y: -2,
                boxShadow: "0 10px 25px -5px rgba(244, 180, 0, 0.4), 0 8px 10px -6px rgba(244, 180, 0, 0.4)"
              }}
              whileTap={{ scale: 0.98 }}
              className="px-10 py-3.5 bg-[#F4B400] hover:bg-[#D99A00] text-[#1F2937] rounded-[18px] font-sans font-bold text-sm shadow-[0_4px_14px_rgba(244,180,0,0.25)] transition-all duration-300 cursor-pointer"
            >
              Book a Visit
            </motion.button>
          )}
        </div>
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {lightboxIndex !== null && (
          <div className="fixed inset-0 z-100 flex items-center justify-center bg-charcoal/95 backdrop-blur-md p-4 select-none">
            {/* Backdrop close */}
            <div className="absolute inset-0 cursor-zoom-out" onClick={closeLightbox} />

            {/* Close Button */}
            <button
              onClick={closeLightbox}
              className="absolute top-6 right-6 z-50 w-12 h-12 rounded-full bg-white/5 border border-white/10 text-white flex items-center justify-center hover:bg-white/15 transition-colors cursor-pointer"
              aria-label="Close Lightbox"
            >
              <X className="w-6 h-6" />
            </button>

            {/* Left Controller */}
            <button
              onClick={prevSlide}
              className="absolute left-6 top-1/2 -translate-y-1/2 z-50 w-12 h-12 rounded-full bg-white/5 border border-white/10 text-white flex items-center justify-center hover:bg-white/15 transition-colors cursor-pointer"
              aria-label="Previous Slide"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            {/* Main Lightbox Body */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.3 }}
              className="relative max-w-5xl max-h-[80vh] w-full z-10 flex flex-col items-center justify-center"
            >
              <img
                src={filteredData[lightboxIndex].image}
                alt={filteredData[lightboxIndex].title}
                title={filteredData[lightboxIndex].title}
                className="max-w-full max-h-[70vh] object-contain rounded-[24px] shadow-2xl border border-white/5"
                loading="lazy"
                decoding="async"
                referrerPolicy="no-referrer"
              />

              {/* Slide Meta Description */}
              <div className="text-center mt-6 text-white max-w-xl">
                <span className="text-xs uppercase text-accent font-extrabold tracking-widest block mb-1">
                  {filteredData[lightboxIndex].id === 'gal-wash-1' ? 'Washroom' : filteredData[lightboxIndex].id === 'gal-water-1' ? 'Water Cooler' : filteredData[lightboxIndex].id === 'gal-cor-1' ? 'Corridor' : filteredData[lightboxIndex].category}
                </span>
                <h3 className="font-display font-extrabold text-xl">
                  {filteredData[lightboxIndex].title}
                </h3>
                <span className="block text-xs text-white/50 mt-1 font-mono">
                  Image {lightboxIndex + 1} of {filteredData.length}
                </span>
              </div>
            </motion.div>

            {/* Right Controller */}
            <button
              onClick={nextSlide}
              className="absolute right-6 top-1/2 -translate-y-1/2 z-50 w-12 h-12 rounded-full bg-white/5 border border-white/10 text-white flex items-center justify-center hover:bg-white/15 transition-colors cursor-pointer"
              aria-label="Next Slide"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
