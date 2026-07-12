/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'motion/react';
import { Star, CheckCircle2, ChevronLeft, ChevronRight, Quote, Check, Clock, ArrowUpRight, ShieldCheck } from 'lucide-react';
import { TESTIMONIALS_DATA } from '../data';

// Official Multi-Colored Google G Logo SVG
function GoogleIcon({ className, size = 18 }: { className?: string; size?: number }) {
  return (
    <svg
      viewBox="0 0 24 24"
      width={size}
      height={size}
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fill="#4285F4"
        d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
      />
      <path
        fill="#34A853"
        d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
      />
      <path
        fill="#FBBC05"
        d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z"
      />
      <path
        fill="#EA4335"
        d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z"
      />
    </svg>
  );
}

// Deterministic Google default profile colored initials generator
function getGoogleInitialAvatar(name: string) {
  const initial = name.trim().charAt(0).toUpperCase();
  // Authentic Google profile background colors
  const colors = [
    'bg-[#1a73e8]', // Google Blue
    'bg-[#ea4335]', // Google Red
    'bg-[#f9ab00]', // Google Yellow
    'bg-[#137333]', // Google Green
    'bg-[#a142f4]', // Google Purple
    'bg-[#00acc1]', // Google Teal
    'bg-[#ec407a]', // Google Pink
  ];
  
  // Use character code sum of name to deterministically choose color
  const charCodeSum = name.split('').reduce((sum, char) => sum + char.charCodeAt(0), 0);
  const colorClass = colors[charCodeSum % colors.length];
  
  return { initial, colorClass };
}

const RATING_STATS = [
  { stars: 5, percentage: 78 },
  { stars: 4, percentage: 14 },
  { stars: 3, percentage: 4 },
  { stars: 2, percentage: 2 },
  { stars: 1, percentage: 2 },
];

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsInView, setItemsInView] = useState(3);
  const [isHovered, setIsHovered] = useState(false);
  const [expanded, setExpanded] = useState<{ [key: string]: boolean }>({});
  const autoplayTimerRef = useRef<NodeJS.Timeout | null>(null);

  // Swipe gesture state
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);

  // Official Google Business Profile Link
  const googleProfileLink = "https://maps.app.goo.gl/uDdDjuo7BPdj7LUK8";

  // Dynamic responsiveness configuration
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setItemsInView(3);
      } else if (window.innerWidth >= 768) {
        setItemsInView(2);
      } else {
        setItemsInView(1);
      }
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const maxIndex = Math.max(0, TESTIMONIALS_DATA.length - itemsInView);

  // Carousel Next/Prev logic
  const handleNext = () => {
    setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev <= 0 ? maxIndex : prev - 1));
  };

  // Autoplay functionality - precisely 6 seconds
  const startAutoplay = () => {
    stopAutoplay();
    autoplayTimerRef.current = setInterval(() => {
      handleNext();
    }, 6000); // 6 seconds per slide as requested
  };

  const stopAutoplay = () => {
    if (autoplayTimerRef.current) {
      clearInterval(autoplayTimerRef.current);
    }
  };

  useEffect(() => {
    if (!isHovered) {
      startAutoplay();
    } else {
      stopAutoplay();
    }
    return stopAutoplay;
  }, [isHovered, maxIndex]);

  // Touch Swipe Handling
  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > 50;
    const isRightSwipe = distance < -50;
    
    if (isLeftSwipe) {
      handleNext();
    } else if (isRightSwipe) {
      handlePrev();
    }
  };

  return (
    <section id="reviews" className="py-[120px] bg-white relative overflow-hidden scroll-mt-12 select-none">
      
      {/* LUXURY BACKGROUND ACCENTS - VERY LOW OPACITY */}
      <div className="absolute top-10 left-10 text-primary/[0.012] pointer-events-none select-none">
        <span className="font-display font-black text-[22rem] leading-none select-none">“</span>
      </div>
      <div className="absolute bottom-10 right-10 text-primary/[0.012] pointer-events-none select-none">
        <span className="font-display font-black text-[22rem] leading-none select-none">”</span>
      </div>
      
      {/* Soft blurred radial light-teal glows under 3% opacity */}
      <div className="absolute top-1/4 left-1/3 -translate-x-1/2 w-[600px] h-[600px] rounded-full bg-primary/[0.02] blur-[140px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 translate-x-1/2 w-[500px] h-[500px] rounded-full bg-primary/[0.015] blur-[120px] pointer-events-none" />

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10"
      >
        
        {/* SECTION HEADER */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="inline-flex items-center space-x-2 bg-[#F4B400]/[0.06] border border-[#F4B400]/15 px-4 py-1.5 rounded-full shadow-xs">
            <span className="text-[12px] tracking-wide text-[#F4B400] font-extrabold uppercase">
              ⭐ VERIFIED GOOGLE REVIEWS
            </span>
          </div>
          
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl lg:text-[40px] text-charcoal mt-4 mb-3 tracking-tight leading-tight">
            Trusted by Students. Recommended by Parents.
          </h2>
          
          <p className="font-sans text-sm sm:text-base text-slate-gray leading-relaxed font-medium">
            Read authentic Google reviews from students, medical interns, working professionals, and parents who stayed at Unitas Home for a safe, clean, and comfortable stay in Dehradun.
          </p>
        </div>

        {/* GOOGLE BUSINESS PROFILE SUMMARY - IMMEDIATELY BELOW THE HEADING */}
        <div className="bg-white border border-neutral-100 rounded-[24px] p-6 sm:p-8 lg:p-10 shadow-[0_12px_40px_rgba(0,0,0,0.012)] relative overflow-hidden mb-11 max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-12 items-center">
            
            {/* LEFT COLUMN: Google profile rating and trust verification */}
            <div className="md:col-span-5 space-y-5 text-center md:text-left flex flex-col justify-center h-full">
              <div className="flex flex-col items-center md:items-start gap-2">
                <div className="flex items-center gap-2 bg-[#FAFBFC] border border-neutral-200/50 px-3 py-1 rounded-full">
                  <GoogleIcon size={16} />
                  <span className="font-display font-extrabold text-[11px] tracking-wider text-slate-gray">
                    Google Business Profile
                  </span>
                </div>
                
                <span className="inline-flex items-center space-x-1.5 bg-emerald-50 text-emerald-700 text-[10px] font-extrabold px-3 py-1 rounded-full uppercase tracking-wider border border-emerald-100">
                  <CheckCircle2 className="w-3 h-3 text-emerald-500" />
                  <span>Verified Google Business Profile</span>
                </span>
              </div>

              <div className="flex flex-col items-center md:items-start space-y-0.5">
                <div className="flex items-baseline gap-3">
                  <span className="font-display font-black text-5xl lg:text-6xl text-charcoal tracking-tight">
                    4.6
                  </span>
                  <div className="flex flex-col text-left">
                    <div className="flex items-center space-x-0.5 text-[#F4B400]">
                      {[...Array(4)].map((_, i) => (
                        <Star key={i} className={`w-5 h-5 fill-current stroke-current star-shimmer-${i + 1}`} />
                      ))}
                      {/* Custom styled 4.6 fraction Star */}
                      <div className="relative w-5 h-5 text-[#F4B400] star-shimmer-5">
                        <Star className="w-5 h-5 text-neutral-200 stroke-neutral-200 fill-neutral-200" />
                        <div className="absolute top-0 left-0 overflow-hidden w-[60%] h-full">
                          <Star className="w-5 h-5 text-[#F4B400] stroke-[#F4B400] fill-current" />
                        </div>
                      </div>
                    </div>
                    <span className="text-xs text-slate-gray font-bold mt-1">
                      Based on 90+ Verified Reviews
                    </span>
                  </div>
                </div>
              </div>

              {/* Verified Trust Badges Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-1">
                {[
                  'Verified Google Business Profile',
                  'Authentic Google Reviews',
                  'Trusted by Students & Parents',
                  'Highly Rated Accommodation'
                ].map((tag, idx) => (
                  <div
                    key={idx}
                    className="flex items-center space-x-2 bg-neutral-50/50 border border-neutral-200/40 text-charcoal/95 text-xs font-bold px-3 py-1.5 rounded-lg"
                  >
                    <span className="text-emerald-500 font-extrabold">✓</span>
                    <span>{tag}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* RIGHT COLUMN: Rating Distribution */}
            <div className="md:col-span-7 space-y-3 bg-[#FAFBFC] p-5 sm:p-6 rounded-[24px] border border-neutral-100">
              <h4 className="text-xs font-bold text-charcoal/80 uppercase tracking-wider mb-1 text-center md:text-left">
                Rating Distribution
              </h4>
              <div className="space-y-2.5">
                {RATING_STATS.map((stat, idx) => (
                  <div key={idx} className="flex items-center gap-4 text-xs font-semibold">
                    {/* Stars designation */}
                    <div className="w-8 flex items-center justify-end font-bold text-charcoal gap-0.5">
                      <span>{stat.stars}</span>
                      <Star className="w-3.5 h-3.5 text-[#F4B400] fill-current" />
                    </div>
                    
                    {/* Progress Bar Track */}
                    <div className="flex-1 h-2 bg-[#ECECEC] rounded-full overflow-hidden relative">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${stat.percentage}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1.2, ease: "easeOut", delay: idx * 0.1 }}
                        className="h-full bg-[#F4B400] rounded-full"
                      />
                    </div>
                    
                    {/* Percentage label */}
                    <span className="w-8 text-right font-bold text-slate-gray">
                      {stat.percentage}%
                    </span>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>

        {/* REVIEW SLIDER */}
        <div className="relative mb-6">
          
          {/* Subtle Carousel Outer Wrapper */}
          <div
            className="overflow-hidden py-4 -mx-4 px-4 sm:-mx-6 sm:px-6 lg:-mx-8 lg:px-8"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
          >
            <div
              className="flex transition-transform duration-500 ease-out"
              style={{
                transform: `translateX(-${currentIndex * (100 / itemsInView)}%)`,
              }}
            >
              {TESTIMONIALS_DATA.map((testimonial) => {
                const isExpanded = !!expanded[testimonial.id];
                const { initial, colorClass } = getGoogleInitialAvatar(testimonial.name);

                return (
                  <div
                    key={testimonial.id}
                    className="flex-shrink-0 px-3 md:px-4"
                    style={{ width: `${100 / itemsInView}%` }}
                  >
                    {/* Testimonial Card - perfectly equal height using flex column */}
                    <div className="group/card bg-white rounded-[24px] border border-neutral-100 p-6 sm:p-8 shadow-[0_4px_20px_rgba(0,0,0,0.012)] hover:shadow-[0_16px_36px_rgba(0,0,0,0.035)] hover:border-primary/15 hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between h-full min-h-[440px] relative overflow-hidden">
                      
                      {/* Big decorative back quote inside card */}
                      <div className="absolute top-4 right-4 text-primary/[0.012] group-hover/card:text-primary/[0.025] transition-colors duration-300 pointer-events-none select-none">
                        <Quote className="w-14 h-14 transform scale-x-[-1]" strokeWidth={1.5} />
                      </div>

                      {/* Card Content & Text */}
                      <div className="space-y-4 flex-1 flex flex-col justify-start">
                        
                        {/* REVIEW HEADER */}
                        <div className="flex items-start justify-between">
                          <div className="space-y-1">
                            {/* Rating Stars */}
                            <div className="flex items-center space-x-0.5 text-[#F4B400]">
                              {[...Array(5)].map((_, i) => (
                                <Star key={i} className={`w-4 h-4 fill-current stroke-current star-shimmer-${(i % 5) + 1}`} />
                              ))}
                            </div>
                            
                            <div className="text-[10px] text-slate-400 font-bold tracking-wide uppercase">
                              Verified Google Review
                            </div>
                          </div>
                          
                          <div className="bg-[#FAFBFC] p-1.5 rounded-full border border-neutral-200/40 flex items-center justify-center">
                            <GoogleIcon size={13} />
                          </div>
                        </div>

                        {/* Review text with clamp & Read More toggle */}
                        <div className="flex-1 flex flex-col justify-between pt-1">
                          <p className={`font-sans text-[14.5px] sm:text-[15px] text-charcoal/90 font-medium leading-relaxed ${isExpanded ? '' : 'line-clamp-5 lg:line-clamp-7'}`}>
                            "{testimonial.text}"
                          </p>
                          {testimonial.text.length > 170 && (
                            <button
                              onClick={(e) => {
                                e.stopPropagation();
                                setExpanded(prev => ({ ...prev, [testimonial.id]: !prev[testimonial.id] }));
                              }}
                              className="text-primary hover:text-primary/80 font-extrabold text-xs mt-3 self-start cursor-pointer focus:outline-hidden flex items-center space-x-1"
                            >
                              <span>{isExpanded ? 'Read Less' : 'Read More'}</span>
                            </button>
                          )}
                        </div>
                      </div>

                      {/* Visual Line Separator */}
                      <div className="border-t border-neutral-100/80 my-5"></div>

                      {/* BOTTOM REVIEWER INFORMATION */}
                      <div className="space-y-3.5">
                        
                        {/* Row 1: Profile Avatar and Name/Role */}
                        <div className="flex items-center space-x-3">
                          {/* Authentic Default Google Profile Initial Avatar */}
                          <div className="relative flex-shrink-0">
                            <div className={`w-11 h-11 rounded-full ${colorClass} flex items-center justify-center border border-neutral-100 shadow-2xs group-hover/card:scale-105 transition-transform duration-300 font-display font-bold text-[15px] text-white`}>
                              {initial}
                            </div>
                            <div className="absolute -bottom-0.5 -right-0.5 bg-emerald-500 p-0.5 rounded-full border border-white shadow-xs flex items-center justify-center">
                              <Check className="w-2.5 h-2.5 text-white font-extrabold" strokeWidth={4} />
                            </div>
                          </div>

                          <div className="min-w-0">
                            <h4 className="font-display font-extrabold text-[15px] text-charcoal tracking-tight truncate">
                              {testimonial.name}
                            </h4>
                            <p className="font-sans text-[11px] text-slate-gray font-semibold truncate mt-0.5">
                              {testimonial.occupation}
                            </p>
                          </div>
                        </div>

                        {/* Row 2: Verification Badges */}
                        <div className="flex flex-wrap gap-2 pt-0.5">
                          <span className="inline-flex items-center space-x-1 bg-[#FAFBFC] border border-neutral-200/50 px-2.5 py-1 rounded-full text-[9.5px] text-slate-gray font-bold">
                            <ShieldCheck className="w-3 h-3 text-emerald-500" />
                            <span>Verified Review</span>
                          </span>
                          <span className="inline-flex items-center space-x-1 bg-[#FAFBFC] border border-neutral-200/50 px-2.5 py-1 rounded-full text-[9.5px] text-slate-gray font-bold">
                            <Clock className="w-3 h-3 text-slate-400" />
                            <span>{testimonial.date}</span>
                          </span>
                        </div>

                        {/* Row 3: Link to original business profile */}
                        <div className="pt-1 text-left">
                          <a
                            href={googleProfileLink}
                            target="_blank"
                            rel="noreferrer"
                            className="inline-flex items-center space-x-1.5 text-[11.5px] font-extrabold text-primary hover:text-primary/80 transition-colors group/link cursor-pointer"
                          >
                            <GoogleIcon size={12} />
                            <span>Read on Google</span>
                            <ArrowUpRight className="w-3.5 h-3.5 text-primary group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform duration-300" />
                          </a>
                        </div>

                      </div>

                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Slider controls: dots & arrows aligned beautifully */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mt-6">
            
            {/* Prev Button */}
            <button
              onClick={handlePrev}
              className="w-11 h-11 rounded-full bg-white border border-neutral-200 text-charcoal hover:text-primary hover:border-primary/30 flex items-center justify-center shadow-2xs hover:shadow-md hover:-translate-y-0.5 active:translate-y-0 transition-all duration-300 cursor-pointer"
              aria-label="Previous Testimonial"
            >
              <ChevronLeft className="w-5 h-5" strokeWidth={2.5} />
            </button>

            {/* Pagination Dots */}
            {maxIndex > 0 && (
              <div className="flex items-center space-x-2.5">
                {[...Array(maxIndex + 1)].map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setCurrentIndex(i)}
                    className={`h-2.5 rounded-full transition-all duration-300 cursor-pointer ${
                      currentIndex === i ? 'bg-primary w-9' : 'bg-slate-200 w-2.5 hover:bg-slate-300'
                    }`}
                    aria-label={`Go to slide ${i + 1}`}
                  />
                ))}
              </div>
            )}

            {/* Next Button */}
            <button
              onClick={handleNext}
              className="w-11 h-11 rounded-full bg-white border border-neutral-200 text-charcoal hover:text-primary hover:border-primary/30 flex items-center justify-center shadow-2xs hover:shadow-md hover:-translate-y-0.5 active:translate-y-0 transition-all duration-300 cursor-pointer"
              aria-label="Next Testimonial"
            >
              <ChevronRight className="w-5 h-5" strokeWidth={2.5} />
            </button>

          </div>

        </div>

        {/* BOTTOM CTA: VIEW ALL GOOGLE REVIEWS (Centered with google icon) */}
        <div className="text-center mt-8">
          <a
            href={googleProfileLink}
            target="_blank"
            rel="noreferrer"
            className="group/cta inline-flex items-center space-x-2.5 bg-white text-charcoal hover:text-primary border border-neutral-200 hover:border-primary/30 px-8 py-3.5 rounded-[18px] font-bold text-sm shadow-2xs hover:shadow-md hover:-translate-y-0.5 transition-all duration-300 cursor-pointer"
          >
            <GoogleIcon size={16} />
            <span>View All Google Reviews</span>
            <ArrowUpRight className="w-4 h-4 text-slate-400 group-hover/cta:text-primary group-hover/cta:translate-x-0.5 group-hover/cta:-translate-y-0.5 transition-all duration-300" strokeWidth={2.5} />
          </a>
        </div>

      </motion.div>
    </section>
  );
}
