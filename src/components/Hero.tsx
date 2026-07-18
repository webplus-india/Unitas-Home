/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { motion } from 'motion/react';
import { Calendar, MessageSquare, Shield, Wifi, Utensils, BrushCleaning, Zap, Key, User, Users, Bed, BedDouble, ChefHat, Cctv, BatteryCharging } from 'lucide-react';

interface HeroProps {
  onBookVisit: () => void;
  onNavigate: (sectionId: string) => void;
}

export default function Hero({ onBookVisit, onNavigate }: HeroProps) {
  const trustBadges = [
    { 
      icon: BedDouble, 
      label: 'Fully Furnished'
    },
    { 
      icon: Wifi, 
      label: 'High-Speed Wi-Fi'
    },
    { 
      icon: Cctv, 
      label: '24×7 CCTV'
    },
    { 
      icon: Utensils, 
      label: 'Home-style Meals'
    },
    { 
      icon: BatteryCharging, 
      label: 'Power Backup'
    },
    { 
      icon: BrushCleaning, 
      label: 'Daily Housekeeping'
    }
  ];

  return (
    <section
      id="home"
      className="relative min-h-[75vh] flex items-center justify-center bg-bg-warm overflow-hidden pt-[95px] pb-[45px] lg:pb-[50px]"
    >
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-14 w-full">
          
          {/* Left Side (42%) */}
          <div className="w-full lg:w-[42%] flex flex-col justify-center text-left">
            {/* Google Rating strip at the very top of hero content */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.05 }}
              className="flex items-center space-x-2 md:space-x-2.5 bg-white border border-[#E5E7EB] px-2.5 py-1 md:px-3.5 md:py-1.5 rounded-full self-start mb-4 shadow-[0_2px_8px_rgba(0,0,0,0.04)] md:shadow-sm hover:border-[#2D6A4F]/30 transition-all duration-300"
            >
              <div className="flex items-center space-x-0.5">
                {[1, 2, 3, 4].map((s) => (
                  <svg key={s} className="w-3 h-3 md:w-3.5 md:h-3.5 text-[#D4AF37]" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
                <svg className="w-3 h-3 md:w-3.5 md:h-3.5" viewBox="0 0 20 20">
                  <defs>
                    <linearGradient id="star-grad-46" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="60%" stopColor="#D4AF37" />
                      <stop offset="60%" stopColor="#D1D5DB" />
                    </linearGradient>
                  </defs>
                  <path fill="url(#star-grad-46)" d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              </div>
              <div className="h-3 w-px bg-[#E5E7EB]" />
              <div className="flex items-center space-x-1.5 text-[#1F2937]">
                {/* Clean Google Icon */}
                <svg className="w-2.5 h-2.5 md:w-3 md:h-3 shrink-0" viewBox="0 0 24 24">
                  <path
                    fill="#4285F4"
                    d="M23.745 12.27c0-.7-.06-1.4-.19-2.07H12v3.92h6.61c-.29 1.53-1.14 2.82-2.4 3.68v3.05h3.88c2.27-2.09 3.65-5.17 3.65-8.58z"
                  />
                  <path
                    fill="#34A853"
                    d="M12 24c3.24 0 5.95-1.08 7.93-2.91l-3.88-3.05c-1.08.72-2.45 1.16-4.05 1.16-3.11 0-5.74-2.11-6.68-4.96H1.21v3.15C3.18 21.88 7.39 24 12 24z"
                  />
                  <path
                    fill="#FBBC05"
                    d="M5.32 14.24A7.16 7.16 0 0 1 5 12c0-.79.13-1.57.38-2.31V6.54H1.21A11.94 11.94 0 0 0 0 12c0 1.92.45 3.74 1.21 5.39l4.11-3.15z"
                  />
                  <path
                    fill="#EA4335"
                    d="M12 4.75c1.77 0 3.35.61 4.6 1.8l3.42-3.42C17.95 1.19 15.24 0 12 0 7.39 0 3.18 2.12 1.21 5.39l4.11 3.15c.94-2.85 3.57-4.96 6.68-4.96z"
                  />
                </svg>
                <span className="font-sans text-[10px] md:text-xs font-bold">4.6 Google Rating</span>
                <span className="hidden md:inline text-[#6B7280]/30 text-[10px] font-medium">|</span>
                <span className="hidden md:inline text-[10px] text-[#6B7280] font-semibold tracking-wider uppercase">Trusted by 100+ Residents</span>
              </div>
            </motion.div>
 
            {/* Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="font-display font-extrabold text-4xl sm:text-5xl lg:text-[44px] xl:text-[48px] text-[#1F2937] leading-[1.15] tracking-tight mb-4"
            >
              Premium PG for <br />
              Students & <br />
              <span className="text-[#D4AF37]">Working Professionals</span>
            </motion.h1>
 
            {/* Subheading */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.25 }}
              className="font-sans text-sm sm:text-base text-[#6B7280] leading-relaxed mb-6 max-w-lg"
            >
              Experience premium co-living with fully furnished boutique rooms, nutritious home-style meals, high-speed Wi-Fi, and 24×7 security. Designed for a comfortable, hassle-free life in Dehradun.
            </motion.p>
 
            {/* Action Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.35 }}
              className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 mb-6"
            >
              <button
                onClick={onBookVisit}
                className="bg-[#D4AF37] hover:bg-[#C79A17] text-[#1F2937] font-sans font-bold text-base tracking-wide px-8 rounded-full shadow-[0_4px_14px_rgba(212,175,55,0.25)] hover:shadow-[0_8px_20px_rgba(212,175,55,0.4)] transition-all duration-250 ease-out flex items-center justify-center space-x-2.5 cursor-pointer hover:-translate-y-[2px] active:translate-y-0 h-[54px] shrink-0"
              >
                <Calendar className="w-5 h-5 text-[#1F2937]" />
                <span>Book a Visit</span>
              </button>

              <a
                href="https://wa.me/919675591951?text=Hi%20Unitas%20Home%2C%20I%20am%20interested%20in%20inquiring%20about%20a%20room."
                target="_blank"
                rel="noreferrer"
                className="bg-[#2D6A4F] hover:bg-[#1B4332] text-white font-sans font-bold text-base tracking-wide px-8 rounded-full shadow-[0_4px_14px_rgba(45,106,79,0.25)] hover:shadow-[0_8px_20px_rgba(45,106,79,0.4)] transition-all duration-250 ease-out flex items-center justify-center space-x-2.5 cursor-pointer hover:-translate-y-[2px] active:translate-y-0 h-[54px] shrink-0"
              >
                <svg className="w-5 h-5 fill-white text-white" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662c1.746.953 3.71 1.458 5.704 1.459h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                </svg>
                <span>WhatsApp Now</span>
              </a>
            </motion.div>
          </div>
 
          {/* Right Side (58%) */}
          <div className="w-full lg:w-[58%] relative flex justify-center items-center">
            {/* Room Image Container */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ type: 'spring', stiffness: 80, damping: 20, delay: 0.2 }}
              className="w-full relative aspect-[4/3] sm:aspect-[16/11] lg:aspect-[4/3] xl:aspect-[1.35] overflow-hidden rounded-[28px] lg:rounded-[32px] shadow-[0_24px_50px_-12px_rgba(0,0,0,0.12)] border border-[#E5E7EB]"
            >
              <img
                src="https://lh3.googleusercontent.com/gps-cs-s/APNQkAEQDDQB5ATVtyb79hfXIw6rxQ3goPe-c-PkkC4IISw4Hfc6ZUY4jgJsXu6X9CrDoM8tbdiz6oWRYTZtRerDCkc6XIM7AyUZIVEjK5_g6COy67r-jeua13KILpi4axL4hs4gNjhC=s1360-w1360-h1020-rw"
                alt="Premium PG Boutique Room"
                title="Premium PG Boutique Room"
                className="w-full h-full object-cover object-center transition-transform duration-700 hover:scale-[1.03] brightness-105"
                loading="eager"
                decoding="async"
                referrerPolicy="no-referrer"
              />
            </motion.div>
          </div>
        </div>

        {/* Premium Living Essentials - Redesigned Quick Highlights Strip */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="w-full mt-[45px] flex justify-center"
        >
          {/* Mobile Layout: Responsive 2-column grid (up to md breakpoint) */}
          <div className="w-full grid grid-cols-2 gap-x-6 gap-y-3.5 max-w-sm sm:max-w-md mx-auto px-4 md:hidden">
            {trustBadges.map((badge, index) => {
              const Icon = badge.icon;
              return (
                <div
                  key={index}
                  className="flex items-center gap-3 py-1"
                >
                  <Icon 
                    className="w-[18px] h-[18px] text-[#2D6A4F] shrink-0" 
                    strokeWidth={2} 
                  />
                  <span className="font-sans font-medium text-[14px] text-[#1F2937] tracking-tight whitespace-nowrap">
                    {badge.label}
                  </span>
                </div>
              );
            })}
          </div>

          {/* Desktop Layout: Premium Horizontal Feature Strip (md breakpoint and above) */}
          <div className="hidden md:block w-full overflow-x-auto scrollbar-none select-none py-1">
            <div className="flex items-center justify-start lg:justify-center min-w-max lg:min-w-0 lg:w-full mx-auto">
              {trustBadges.map((badge, index) => {
                const Icon = badge.icon;
                return (
                  <React.Fragment key={index}>
                    <div
                      className="flex items-center gap-[8px] px-[16px] lg:px-[18px] py-[10px] md:py-[12px] group hover:-translate-y-0.5 transition-all duration-[250ms] ease-out shrink-0 cursor-pointer"
                    >
                      {/* Premium Outline Icon - 18px, turns golden yellow on hover */}
                      <Icon 
                        className="w-[18px] h-[18px] text-[#2D6A4F] group-hover:text-[#D4AF37] transition-colors duration-[250ms] shrink-0" 
                        strokeWidth={1.8} 
                      />
                      {/* Feature Title Only - 14px SemiBold, darkens on hover */}
                      <span className="font-sans font-semibold text-[14px] text-[#4B5563] group-hover:text-[#111827] transition-colors duration-[250ms] tracking-tight whitespace-nowrap">
                        {badge.label}
                      </span>
                    </div>
                    {index < trustBadges.length - 1 && (
                      <div className="w-px h-4 bg-gray-200/50 shrink-0 self-center" />
                    )}
                  </React.Fragment>
                );
              })}
            </div>
          </div>
        </motion.div>

        {/* Explore Rooms scroll indicator repositioned below amenities strip */}
        <div className="flex justify-center mt-[35px] relative z-20">
          <div
            className="flex flex-col items-center space-y-1.5 text-[#6B7280]/70 hover:text-[#2D6A4F] transition-colors cursor-pointer"
            onClick={() => onNavigate('rooms')}
          >
            <span className="text-[10px] uppercase tracking-widest font-bold text-[#6B7280]">Explore Rooms</span>
            <motion.div
              animate={{
                y: [0, 6, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="w-5 h-8 rounded-full border border-[#6B7280]/30 flex justify-center p-1"
            >
              <div className="w-1.5 h-1.5 bg-[#2D6A4F] rounded-full" />
            </motion.div>
          </div>
        </div>

      </div>
    </section>
  );
}

