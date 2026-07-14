/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { motion } from 'motion/react';
import { Building, Percent, Briefcase, CalendarDays, Wallet, Users, ArrowRight, MapPinned } from 'lucide-react';

interface WhyUnitasProps {
  onNavigate?: (id: string) => void;
  onBookVisit?: () => void;
}

export default function WhyUnitas({ onNavigate, onBookVisit }: WhyUnitasProps) {
  const benefits = [
    {
      icon: Building,
      title: 'Separate Floors for Boys & Girls',
      desc: "Dedicated boys' and girls' floors ensure greater privacy, comfort, and a secure living environment."
    },
    {
      icon: Percent,
      title: 'Zero Brokerage',
      desc: 'Move in with complete transparency and no brokerage, hidden charges, or unnecessary commissions.'
    },
    {
      icon: Briefcase,
      title: 'Professionally Managed Property',
      desc: 'Enjoy responsive on-site management, quick assistance, and hassle-free daily living.'
    },
    {
      icon: MapPinned,
      title: 'Walking Distance to Campus & Hospital',
      desc: 'Just a short walk from SGRR College and Shree Mahant Indresh Hospital for effortless daily commuting.'
    },
    {
      icon: Wallet,
      title: 'Affordable Premium Living',
      desc: 'Premium amenities, modern spaces, and high-speed Wi-Fi at student-friendly prices.'
    },
    {
      icon: Users,
      title: 'Trusted Community',
      desc: 'Join a vibrant community of 120+ students and professionals in a safe, welcoming environment.'
    }
  ];

  return (
    <motion.section
      id="why-unitas"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className="py-[120px] bg-bg-warm relative overflow-hidden scroll-mt-12"
    >
      {/* Premium custom floating animation stylesheet */}
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes soft-float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-4px); }
        }
        .animate-soft-float {
          animation: soft-float 5s ease-in-out infinite;
        }
      `}} />

      {/* Abstract Background Decors */}
      <div className="absolute top-0 left-0 w-96 h-96 rounded-full bg-primary/2 opacity-20 blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] rounded-full bg-accent/2 opacity-15 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Visual Content (Exterior + 2 Overlapping Cards + Float Trust Badge) */}
          <div className="lg:col-span-5 relative">
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="relative h-[440px] sm:h-[480px] w-full max-w-[510px] mx-auto lg:mx-0"
            >
              
              {/* Primary Image: Building Exterior */}
              <div className="absolute top-0 left-0 w-[96%] h-[74%] rounded-[24px] overflow-hidden shadow-[0_6px_16px_rgba(0,0,0,0.02)] border border-white/60 transition-transform duration-500 hover:scale-[1.01] z-10">
                <img 
                  src="https://lh3.googleusercontent.com/gps-cs-s/APNQkAHcKZGrMWPbN6t6Ie_6urZQrTlk8D8WjNEYoFi_16E1od4eB9TUqZ2S9qAh_13FoQ959GFM2QGaYH2vNWMHiikcSi4M2j0zTYN1nLS_UX_cLEzJHEMxOLVpjWlLVXRfVOLCG1445w=s1360-w1360-h1020-rw" 
                  alt="Unitas Home Night View" 
                  title="Unitas Home Night View" 
                  className="w-full h-full object-cover"
                  loading="lazy"
                  decoding="async"
                  referrerPolicy="no-referrer"
                />
                {/* Soft warm/golden overlay (6% opacity) to match the brand palette */}
                <div className="absolute inset-0 bg-[#F4B400]/6 pointer-events-none z-10" />
              </div>

              {/* Overlapping Card 1: Premium Furnished Room */}
              <div className="absolute bottom-[8%] right-0 w-[50%] h-[38%] rounded-[24px] overflow-hidden shadow-[0_8px_18px_rgba(0,0,0,0.03)] border-[4px] border-white transition-transform duration-500 hover:scale-[1.02] hover:z-30 z-25">
                <img 
                  src="https://lh3.googleusercontent.com/gps-cs-s/APNQkAGH6FaaAP-3MVgMoOq2Tx5zOczynEde7pYyW8k995gUW4IV2tKt7RD-n8NGZqAEwmTzPs0SvM2o0jKkFoeUcx8AR5P1sQjMGHmtEqkU_c2yyiRkQI2p6mt9hh9ZvLAqieVcPWJ-wg=s1360-w1360-h1020-rw" 
                  alt="Unitas Reception" 
                  title="Unitas Reception" 
                  className="w-full h-full object-cover"
                  loading="lazy"
                  decoding="async"
                  referrerPolicy="no-referrer"
                />
                {/* Soft warm/golden overlay (6% opacity) */}
                <div className="absolute inset-0 bg-[#F4B400]/6 pointer-events-none z-10" />
              </div>

              {/* Overlapping Card 2: Dining & Healthy Meals */}
              <div className="absolute bottom-0 left-[4%] w-[38%] h-[28%] rounded-[24px] overflow-hidden shadow-[0_5px_12px_rgba(0,0,0,0.02)] border-[4px] border-white transition-transform duration-500 hover:scale-[1.02] hover:z-30 z-20">
                <img 
                  src="https://lh3.googleusercontent.com/gps-cs-s/APNQkAHLJz2YenINiIYW-tjSuOuJDPVHxNaGScfkgaCNyGsegpQPqzrFebIrXon1VZG4QAWG-gkk70OhiBdvOVRaHxBtPgR4iCX0RQDPwf4Wyh3SlDeX9-aoZMI6540ek1ZHej1f3QB8=s1360-w1360-h1020-rw" 
                  alt="Unitas Boutique Furnished Room" 
                  title="Unitas Boutique Furnished Room" 
                  className="w-full h-full object-cover"
                  loading="lazy"
                  decoding="async"
                  referrerPolicy="no-referrer"
                />
                {/* Soft warm/golden overlay (6% opacity) */}
                <div className="absolute inset-0 bg-[#F4B400]/6 pointer-events-none z-10" />
              </div>

              {/* Floating Trust Badge - Premium Golden Yellow & Teal Accents - Optimized with plain solid white background to avoid rendering bugs under CSS float translation */}
              <div className="absolute top-[4%] right-[2%] bg-white border border-neutral-100/80 px-4 py-2.5 rounded-[24px] shadow-[0_6px_20px_rgba(0,0,0,0.06)] flex items-center gap-2.5 z-20 animate-soft-float select-none">
                <span className="text-[#F4B400] text-sm font-bold">★</span>
                <div className="text-left">
                  <p className="font-sans font-bold text-[13px] text-charcoal leading-none tracking-tight">
                    <span className="text-[#F4B400]">4.6</span> Google Rating
                  </p>
                  <p className="font-sans text-[10px] text-[#0F8B8D] font-bold leading-none mt-1.5">
                    Trusted by 120+ Residents
                  </p>
                </div>
              </div>

            </motion.div>
          </div>
          
          {/* Right Column: Content and Feature List */}
          <div className="lg:col-span-7 flex flex-col justify-center pl-0 lg:pl-6">
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.7, ease: "easeOut" }}
            >
              <div className="text-left mb-6">
                <span className="inline-flex items-center gap-1.5 text-xs uppercase tracking-widest text-[#F4B400] font-bold bg-[#F4B400]/5 px-3.5 py-1.5 rounded-full border border-[#F4B400]/15">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#F4B400] shrink-0" />
                  Why Choose Unitas Home
                </span>
                <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-charcoal mt-3 mb-6 tracking-tight leading-tight max-w-[650px]">
                  Why Students & Professionals Choose Unitas Home
                </h2>
                <p className="font-sans text-[15px] sm:text-[16px] text-[#64748B] leading-[1.7] max-w-[520px]">
                  Enjoy hassle-free living designed for your success. We combine premium security, nutritious home-style meals, transparent pricing, and professional management into one vibrant resident community.
                </p>
              </div>

              {/* Feature Highlights Grid - Normal teal state, subtle golden accent hover */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-12">
                {benefits.map((benefit, idx) => {
                  const Icon = benefit.icon;
                  return (
                    <div key={idx} className="flex items-start space-x-3.5 group md:hover:-translate-y-0.5 transition-[transform,color] duration-300">
                      <div className="flex-shrink-0 mt-0.5">
                        <div className="w-11 h-11 rounded-[22px] bg-[#0F8B8D]/5 flex items-center justify-center text-[#0F8B8D] border border-[#0F8B8D]/10 transition-[background-color,color,border-color,box-shadow] duration-300 group-hover:bg-[#0F8B8D] group-hover:text-white group-hover:border-[#F4B400] group-hover:shadow-[0_0_12px_rgba(244,180,0,0.15)] shadow-xs">
                          <Icon className="w-[22px] h-[22px] stroke-[1.8] transition-colors duration-300 group-hover:text-white" />
                        </div>
                      </div>
                      <div className="text-left flex-1">
                        <h3 className="font-display font-bold text-[15px] sm:text-[16px] text-charcoal mb-1 tracking-tight leading-[1.3] group-hover:text-[#0F8B8D] transition-colors duration-200">
                          {benefit.title}
                        </h3>
                        <p className="font-sans text-[15px] sm:text-[16px] text-[#64748B] leading-[1.7]">
                          {benefit.desc}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Action CTAs - Baseline aligned, subtle warm golden hover accent on primary CTA */}
              <div className="mt-10 flex flex-wrap items-center gap-6">
                <button
                  onClick={() => onBookVisit?.()}
                  className="group bg-[#0F8B8D] hover:bg-[#0B6E70] text-white px-11 py-3.5 rounded-[24px] font-sans font-bold text-sm tracking-wide transition-all shadow-[0_4px_12px_rgba(15,139,141,0.15)] hover:shadow-[0_6px_18px_rgba(15,139,141,0.25)] hover:-translate-y-0.5 inline-flex items-center justify-center gap-2.5 cursor-pointer h-[48px]"
                >
                  <CalendarDays className="w-[19px] h-[19px] text-white transition-transform duration-300 group-hover:translate-x-[2px]" />
                  <span>Book a Visit</span>
                </button>
                <button
                  onClick={() => onNavigate?.('rooms')}
                  className="group border-[1.5px] border-[#0F8B8D] text-[#0F8B8D] hover:bg-[#0F8B8D]/5 px-8 py-3.5 rounded-[24px] font-sans font-bold text-sm tracking-wide transition-all duration-[250ms] ease-out hover:-translate-y-0.5 inline-flex items-center justify-center gap-2 cursor-pointer h-[48px]"
                >
                  Explore Rooms 
                  <ArrowRight className="w-4 h-4 transition-transform duration-[250ms] ease-out group-hover:translate-x-1.5" />
                </button>
              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </motion.section>
  );
}
