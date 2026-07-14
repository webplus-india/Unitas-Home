/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { Phone, Mail, MapPin, Facebook, Instagram, MessageSquare, ArrowUp, Calendar } from 'lucide-react';
import Logo from './Logo';

interface FooterProps {
  onNavigate: (sectionId: string) => void;
  onToggleDashboard: () => void;
  showDashboard: boolean;
  onBookVisit: () => void;
}

export default function Footer({ onNavigate, onToggleDashboard, showDashboard, onBookVisit }: FooterProps) {
  const handleLinkClick = (id: string) => {
    if (showDashboard) {
      onToggleDashboard();
    }
    onNavigate(id);
  };

  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-gradient-to-b from-primary-dark to-[#095B5D] text-white/90 pt-0 pb-0 md:pb-5 relative overflow-hidden">
      
      {/* Premium Trust Signals Strip */}
      <div className="border-b border-white/8 bg-[#085557] py-8 mb-12">
        <div className="max-w-7xl mx-auto px-6 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
            
            <div className="group flex items-center gap-3.5 justify-start cursor-pointer transition-all duration-250 ease-out md:hover:-translate-y-[2px] md:hover:bg-white/2 p-2 rounded-2xl md:hover:shadow-[0_8px_24px_-8px_rgba(0,0,0,0.15)]">
              <span className="p-2.5 rounded-xl bg-[#0B6E70]/40 text-[#F4B400] shrink-0 border border-white/8 transition-all duration-250 ease-out group-hover:bg-[#0B6E70]/60 group-hover:border-white/15 group-hover:brightness-110">
                <svg className="w-5 h-5 transition-all duration-250 ease-out" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"/>
                </svg>
              </span>
              <div>
                <h4 className="font-sans font-extrabold text-sm text-white/90 tracking-tight transition-colors duration-250 ease-out group-hover:text-white">Zero Brokerage</h4>
                <p className="font-sans text-[11px] text-white/50 tracking-tight mt-0.5 leading-none transition-colors duration-250 ease-out group-hover:text-white/70">No hidden commissions</p>
              </div>
            </div>

            <div className="group flex items-center gap-3.5 justify-start cursor-pointer transition-all duration-250 ease-out md:hover:-translate-y-[2px] md:hover:bg-white/2 p-2 rounded-2xl md:hover:shadow-[0_8px_24px_-8px_rgba(0,0,0,0.15)]">
              <span className="p-2.5 rounded-xl bg-[#0B6E70]/40 text-[#F4B400] shrink-0 border border-white/8 transition-all duration-250 ease-out group-hover:bg-[#0B6E70]/60 group-hover:border-white/15 group-hover:brightness-110">
                <svg className="w-5 h-5 transition-all duration-250 ease-out" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"/>
                </svg>
              </span>
              <div>
                <h4 className="font-sans font-extrabold text-sm text-white/90 tracking-tight transition-colors duration-250 ease-out group-hover:text-white">Separate Floors</h4>
                <p className="font-sans text-[11px] text-white/50 tracking-tight mt-0.5 leading-none transition-colors duration-250 ease-out group-hover:text-white/70">For Boys & Girls</p>
              </div>
            </div>

            <div className="group flex items-center gap-3.5 justify-start cursor-pointer transition-all duration-250 ease-out md:hover:-translate-y-[2px] md:hover:bg-white/2 p-2 rounded-2xl md:hover:shadow-[0_8px_24px_-8px_rgba(0,0,0,0.15)]">
              <span className="p-2.5 rounded-xl bg-[#0B6E70]/40 text-[#F4B400] shrink-0 border border-white/8 transition-all duration-250 ease-out group-hover:bg-[#0B6E70]/60 group-hover:border-white/15 group-hover:brightness-110">
                <svg className="w-5 h-5 transition-all duration-250 ease-out" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"/>
                </svg>
              </span>
              <div>
                <h4 className="font-sans font-extrabold text-sm text-white/90 tracking-tight transition-colors duration-250 ease-out group-hover:text-white">24/7 Wardens</h4>
                <p className="font-sans text-[11px] text-white/50 tracking-tight mt-0.5 leading-none transition-colors duration-250 ease-out group-hover:text-white/70">On-site assistance</p>
              </div>
            </div>

            <div className="group flex items-center gap-3.5 justify-start cursor-pointer transition-all duration-250 ease-out md:hover:-translate-y-[2px] md:hover:bg-white/2 p-2 rounded-2xl md:hover:shadow-[0_8px_24px_-8px_rgba(0,0,0,0.15)]">
              <span className="p-2.5 rounded-xl bg-[#0B6E70]/40 text-[#F4B400] shrink-0 border border-white/8 transition-all duration-250 ease-out group-hover:bg-[#0B6E70]/60 group-hover:border-white/15 group-hover:brightness-110">
                <svg className="w-5 h-5 transition-all duration-250 ease-out" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 00-2 2z"/>
                </svg>
              </span>
              <div>
                <h4 className="font-sans font-extrabold text-sm text-white/90 tracking-tight transition-colors duration-250 ease-out group-hover:text-white">CCTV Secured</h4>
                <p className="font-sans text-[11px] text-white/50 tracking-tight mt-0.5 leading-none transition-colors duration-250 ease-out group-hover:text-white/70">Continuous monitoring</p>
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* Subtle branded watermark background */}
      <div 
        className="absolute left-1/2 bottom-0 pointer-events-none select-none z-0 hidden xs:block transform -translate-x-1/2 translate-y-3 text-white"
        style={{ opacity: 0.025 }}
      >
        <div className="w-[300px] sm:w-[480px] md:w-[600px] lg:w-[820px] h-auto">
          <svg viewBox="0 0 600 120" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
            {/* Completely Redesigned Brand Icon */}
            <g transform="translate(10, 10)">
              {/* House & U-Monogram Compound Path */}
              <path
                d="M 50 14 L 85 44 V 84 H 15 V 44 Z M 29 44 V 49 A 21 21 0 0 0 71 49 V 44 Z"
                fill="currentColor"
                fillRule="evenodd"
              />
              {/* Hearth Window */}
              <circle
                cx="50"
                cy="31"
                r="6.5"
                fill="currentColor"
              />
            </g>
            
            {/* Unitas Wordmark */}
            <text x="135" y="78" fontStyle="normal" fontWeight="700" fontSize="62" fill="currentColor" style={{ fontFamily: 'var(--font-display), "Poppins", sans-serif', letterSpacing: '-0.5px' }}>
              Unitas <tspan fill="currentColor" opacity="0.8">Home</tspan>
            </text>
          </svg>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* DESKTOP & TABLET FOOTER (Hidden on mobile) */}
        <div className="hidden md:block">
          {/* Core Footer Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-10 mb-8">
            
            {/* Brand Intro column (col-span 4) - natural DOM position 1st */}
            <div className="lg:col-span-4">
              <div className="mb-4">
                <Logo variant="horizontal" theme="dark" />
              </div>
              <p className="font-sans text-sm text-white/70 leading-relaxed mb-4 max-w-[420px]">
                Premium student co-living in Dehradun with fully furnished rooms, homestyle meals, high-speed Wi-Fi, and 24×7 security.
              </p>
              
              {/* Premium Google Rating compact trust badge (interactive) */}
              <a
                href="https://www.google.com/maps/place/Unitas+Home/@30.3129849,78.0315366,17z/data=!4m8!3m7!1s0x390929bf5402ef79:0xfa6ffc5c9478a1a3!8m2!3d30.3129849!4d78.0315366!9m1!1b1!16s%2Fg%2F11wsp0vmdm"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex flex-col items-start bg-white/[0.06] border border-white/8 rounded-2xl p-3.5 mb-6 select-none transition-all duration-250 ease-out hover:bg-white/[0.09] hover:border-white/12 hover:-translate-y-[2px] hover:shadow-[0_8px_24px_rgba(0,0,0,0.25)] hover:brightness-110 cursor-pointer text-left group"
              >
                <div className="flex items-center space-x-0.5 mb-1.5">
                  {[1, 2, 3, 4, 5].map((s) => (
                    <svg key={s} className="w-4 h-4 text-[#F4B400] transition-transform duration-250 group-hover:scale-110" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <div className="font-sans text-sm font-bold text-white leading-none transition-colors duration-250 group-hover:text-white">4.6 Google Rating</div>
                <div className="font-sans text-[11px] text-white/50 tracking-tight mt-1 leading-none transition-colors duration-250 group-hover:text-white/75">120+ Verified Reviews</div>
              </a>

              <div className="flex items-center space-x-5">
                <a
                  href="https://www.facebook.com/people/Unitas-Home/61587115594543/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-lg bg-white/[0.04] border border-white/8 flex items-center justify-center text-white/80 hover:text-white hover:bg-white/[0.08] hover:scale-[1.03] hover:-translate-y-[2px] hover:shadow-[0_0_15px_rgba(15,139,141,0.35)] hover:brightness-110 transition-all duration-[250ms] ease-out group"
                  aria-label="Visit our Facebook page"
                >
                  <Facebook className="w-4 h-4 transition-transform duration-[250ms] group-hover:scale-105" />
                </a>
                <a
                  href="https://www.instagram.com/unitashome/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-lg bg-white/[0.04] border border-white/8 flex items-center justify-center text-white/80 hover:text-white hover:bg-white/[0.08] hover:scale-[1.03] hover:-translate-y-[2px] hover:shadow-[0_0_15px_rgba(15,139,141,0.35)] hover:brightness-110 transition-all duration-[250ms] ease-out group"
                  aria-label="Visit our Instagram profile"
                >
                  <Instagram className="w-4 h-4 transition-transform duration-[250ms] group-hover:scale-105" />
                </a>
              </div>
            </div>

            {/* Quick links (col-span 2) - natural DOM position 2nd */}
            <div className="lg:col-span-2">
              <h3 className="font-display font-black text-xs text-accent uppercase tracking-[0.5px] mb-4">
                Quick Links
              </h3>
              <ul className="space-y-[19px] font-sans text-sm lg:text-base">
                {[
                  { label: 'Home', id: 'home' },
                  { label: 'Rooms', id: 'rooms' },
                  { label: 'Why Unitas', id: 'why-unitas' },
                  { label: 'Amenities', id: 'amenities' },
                  { label: 'Gallery', id: 'gallery' },
                  { label: 'Nearby', id: 'nearby' },
                  { label: 'Reviews', id: 'reviews' },
                  { label: 'Blog', id: 'blog' },
                  { label: 'Contact', id: 'contact' }
                ].map((item) => (
                  <li key={item.id}>
                    <button
                      onClick={() => handleLinkClick(item.id)}
                      className="text-white/80 hover:text-white transition-all duration-250 block text-left cursor-pointer font-medium relative py-0.5 group md:hover:translate-x-[3px] ease-out"
                    >
                      <span className="relative pb-0.5">
                        {item.label}
                        <span className="absolute bottom-0 left-0 w-0 h-[1.5px] bg-[#F4B400] transition-all duration-250 ease-out group-hover:w-full" />
                      </span>
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Rooms sharing structures (col-span 3) - natural DOM position 3rd */}
            <div className="lg:col-span-3">
              <h3 className="font-display font-black text-xs text-accent uppercase tracking-[0.5px] mb-4">
                Room Categories
              </h3>
              <ul className="space-y-[19px] font-sans text-sm lg:text-base">
                {[
                  { label: 'Single Sharing', id: 'rooms' },
                  { label: 'Twin Sharing', id: 'rooms' },
                  { label: 'Triple Sharing', id: 'rooms' }
                ].map((item, index) => (
                  <li key={index}>
                    <button 
                      onClick={() => handleLinkClick(item.id)} 
                      className="text-white/80 hover:text-white transition-all duration-250 block text-left cursor-pointer font-medium relative py-0.5 group md:hover:translate-x-[3px] ease-out"
                    >
                      <span className="relative pb-0.5">
                        {item.label}
                        <span className="absolute bottom-0 left-0 w-0 h-[1.5px] bg-[#F4B400] transition-all duration-250 ease-out group-hover:w-full" />
                      </span>
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Details (col-span 3) - natural DOM position 4th */}
            <div className="lg:col-span-3">
              <h3 className="font-display font-black text-xs text-accent uppercase tracking-[0.5px] mb-4">
                Contact Desk
              </h3>
              <ul className="space-y-[19px] font-sans text-sm lg:text-base">
                <li className="flex items-start space-x-3 group">
                  <MapPin className="w-4 h-4 text-accent flex-shrink-0 mt-[4px] transition-all duration-250 group-hover:scale-110" />
                  <a 
                    href="https://maps.google.com/?q=Unitas+Home,+1191K,+Malviya+Colony,+Near+Mahant+Indresh+Hospital,+Dehradun,+Uttarakhand+248001"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white/80 hover:text-white transition-all duration-250 text-sm sm:text-base leading-[1.65] font-medium block md:hover:translate-x-[2px]"
                  >
                    1191K, Malviya Colony,<br />
                    Near Mahant Indresh Hospital,<br />
                    Dehradun, Uttarakhand – 248001
                  </a>
                </li>
                <li className="flex items-start space-x-3 group">
                  <Phone className="w-4 h-4 text-accent flex-shrink-0 mt-[4px] transition-all duration-250 group-hover:scale-110" />
                  <a 
                    href="tel:+919675591951" 
                    className="text-white/80 hover:text-white transition-all duration-250 text-sm sm:text-base font-medium leading-[1.65] block md:hover:translate-x-[2px]"
                  >
                    +91 96755 91951
                  </a>
                </li>
                <li className="flex items-start space-x-3 group">
                  <Phone className="w-4 h-4 text-accent flex-shrink-0 mt-[4px] transition-all duration-250 group-hover:scale-110" />
                  <a 
                    href="tel:+919927557505" 
                    className="text-white/80 hover:text-white transition-all duration-250 text-sm sm:text-base font-medium leading-[1.65] block md:hover:translate-x-[2px]"
                  >
                    +91 99275 57505
                  </a>
                </li>
                <li className="flex items-start space-x-3 group">
                  <Mail className="w-4 h-4 text-accent flex-shrink-0 mt-[4px] transition-all duration-250 group-hover:scale-110" />
                  <a 
                    href="mailto:unitashomeuk@gmail.com" 
                    className="text-white/80 hover:text-white transition-all duration-250 text-sm sm:text-base font-medium break-all leading-[1.65] block md:hover:translate-x-[2px]"
                  >
                    unitashomeuk@gmail.com
                  </a>
                </li>
              </ul>
            </div>

          </div>

          {/* Bottom Bar */}
          <div className="pt-4 border-t border-white/10 flex flex-row items-center justify-between font-sans text-xs text-white/50 gap-4">
            <div className="text-left w-auto">
              <span>© 2026 Unitas Home. All Rights Reserved.</span>
            </div>
            
            <div className="flex items-center justify-end w-auto space-x-5">
              <div className="flex items-center space-x-3">
                <button 
                  onClick={() => handleLinkClick('rules-regulations')} 
                  className="hover:text-accent transition-colors duration-[250ms] cursor-pointer font-medium bg-transparent border-0 py-0 px-0 outline-none text-left"
                >
                  House Rules →
                </button>
                <span className="text-white/20">•</span>
                <button 
                  onClick={() => handleLinkClick('terms-of-service')}
                  className="hover:text-accent transition-colors duration-[250ms] cursor-pointer font-medium bg-transparent border-0 py-0 px-0 outline-none text-left font-semibold"
                >
                  Terms & Conditions
                </button>
                <span className="text-white/20">•</span>
                <button 
                  onClick={() => handleLinkClick('privacy-policy')}
                  className="hover:text-accent transition-colors duration-[250ms] cursor-pointer font-medium bg-transparent border-0 py-0 px-0 outline-none text-left"
                >
                  Privacy Policy
                </button>
              </div>
              <button
                onClick={handleScrollToTop}
                className="w-8 h-8 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center hover:bg-white/15 text-white transition-all cursor-pointer"
                aria-label="Back to Top"
              >
                <ArrowUp className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        {/* MOBILE FOOTER (Strictly designed to user spec - cleaner, premium, hospitality-style) */}
        <div className="block md:hidden pb-0">
          
          {/* 1. Brand Section (Center Align) */}
          <div className="flex flex-col items-center text-center">
            <Logo variant="stacked" theme="dark" iconSize="md" className="mx-auto" />
            <p className="font-sans text-sm text-white/70 leading-relaxed max-w-[420px] mt-4 px-4">
              Premium student co-living in Dehradun with fully furnished rooms, homestyle meals, high-speed Wi-Fi, and 24×7 security.
            </p>

            {/* Premium Google Rating compact trust badge (interactive) */}
            <a
              href="https://www.google.com/maps/place/Unitas-Home/@30.3129849,78.0315366,17z/data=!4m8!3m7!1s0x390929bf5402ef79:0xfa6ffc5c9478a1a3!8m2!3d30.3129849!4d78.0315366!9m1!1b1!16s%2Fg%2F11wsp0vmdm"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex flex-col items-center bg-white/[0.06] border border-white/8 rounded-2xl p-3.5 mt-5 mb-1 select-none mx-auto transition-all duration-250 ease-out hover:bg-white/[0.09] hover:border-white/12 hover:-translate-y-[2px] hover:shadow-[0_8px_24px_rgba(0,0,0,0.25)] hover:brightness-110 cursor-pointer text-center group"
            >
              <div className="flex items-center space-x-0.5 mb-1.5">
                {[1, 2, 3, 4, 5].map((s) => (
                  <svg key={s} className="w-4 h-4 text-[#F4B400] transition-transform duration-250 group-hover:scale-110" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <div className="font-sans text-sm font-bold text-white leading-none transition-colors duration-250 group-hover:text-white">4.6 Google Rating</div>
              <div className="font-sans text-[11px] text-white/50 tracking-tight mt-1 leading-none transition-colors duration-250 group-hover:text-white/75">120+ Verified Reviews</div>
            </a>
            
            {/* Social media icons centered with balanced spacing */}
            <div className="flex items-center justify-center space-x-5 mt-5">
              <a
                href="https://www.facebook.com/people/Unitas-Home/61587115594543/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-white/[0.04] border border-white/8 flex items-center justify-center text-white/80 hover:text-white hover:bg-white/[0.08] hover:scale-[1.03] hover:-translate-y-[2px] hover:shadow-[0_0_15px_rgba(15,139,141,0.35)] hover:brightness-110 transition-all duration-[250ms] ease-out group"
                aria-label="Visit our Facebook page"
              >
                <Facebook className="w-4 h-4 transition-transform duration-[250ms] group-hover:scale-105" />
              </a>
              <a
                href="https://www.instagram.com/unitashome/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-white/[0.04] border border-white/8 flex items-center justify-center text-white/80 hover:text-white hover:bg-white/[0.08] hover:scale-[1.03] hover:-translate-y-[2px] hover:shadow-[0_0_15px_rgba(15,139,141,0.35)] hover:brightness-110 transition-all duration-[250ms] ease-out group"
                aria-label="Visit our Instagram profile"
              >
                <Instagram className="w-4 h-4 transition-transform duration-[250ms] group-hover:scale-105" />
              </a>
            </div>
          </div>

          {/* Spacing between brand and grid: 36-48px */}
          <div className="grid grid-cols-2 gap-x-6 gap-y-[38px] mt-[38px] text-left">
            
            {/* 2. Quick Links (Left Align, 18-20px link spacing) */}
            <div>
              <h3 className="font-display font-black text-xs text-accent uppercase tracking-[0.5px] mb-[20px]">
                Quick Links
              </h3>
              <ul className="space-y-[18px] font-sans text-sm sm:text-base">
                {[
                  { label: 'Home', id: 'home' },
                  { label: 'Rooms', id: 'rooms' },
                  { label: 'Why Unitas', id: 'why-unitas' },
                  { label: 'Amenities', id: 'amenities' },
                  { label: 'Gallery', id: 'gallery' },
                  { label: 'Nearby', id: 'nearby' },
                  { label: 'Reviews', id: 'reviews' },
                  { label: 'Blog', id: 'blog' },
                  { label: 'Contact', id: 'contact' }
                ].map((item) => (
                  <li key={item.id}>
                    <button
                      onClick={() => handleLinkClick(item.id)}
                      className="text-white/80 hover:text-white transition-all duration-250 block text-left cursor-pointer font-medium relative py-0.5 group md:hover:translate-x-[3px] ease-out"
                    >
                      <span className="relative pb-0.5">
                        {item.label}
                        <span className="absolute bottom-0 left-0 w-0 h-[1.5px] bg-[#F4B400] transition-all duration-250 ease-out group-hover:w-full" />
                      </span>
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* 3. Room Categories (Left Align, 18-20px link spacing) */}
            <div>
              <h3 className="font-display font-black text-xs text-accent uppercase tracking-[0.5px] mb-[20px]">
                Room Categories
              </h3>
              <ul className="space-y-[18px] font-sans text-sm sm:text-base">
                {[
                  { label: 'Single Sharing', id: 'rooms' },
                  { label: 'Twin Sharing', id: 'rooms' },
                  { label: 'Triple Sharing', id: 'rooms' }
                ].map((item, index) => (
                  <li key={index}>
                    <button 
                      onClick={() => handleLinkClick(item.id)} 
                      className="text-white/80 hover:text-white transition-all duration-250 block text-left cursor-pointer font-medium relative py-0.5 group md:hover:translate-x-[3px] ease-out"
                    >
                      <span className="relative pb-0.5">
                        {item.label}
                        <span className="absolute bottom-0 left-0 w-0 h-[1.5px] bg-[#F4B400] transition-all duration-250 ease-out group-hover:w-full" />
                      </span>
                    </button>
                  </li>
                ))}
              </ul>
            </div>

          </div>

          {/* 4. Contact Desk (Left Align) - Comfortably spaced with perfect icon centering */}
          <div className="mt-[38px] text-left">
            <h3 className="font-display font-black text-xs text-accent uppercase tracking-[0.5px] mb-[20px]">
              Contact Desk
            </h3>
            <ul className="space-y-[18px] font-sans text-sm sm:text-base">
              <li className="flex items-start space-x-3.5 group">
                <MapPin className="w-4 h-4 text-accent flex-shrink-0 mt-1 transition-transform duration-250 group-hover:scale-110" />
                <a 
                  href="https://maps.google.com/?q=Unitas+Home,+1191K,+Malviya+Colony,+Near+Mahant+Indresh+Hospital,+Dehradun,+Uttarakhand+248001"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/80 hover:text-white transition-all duration-250 leading-snug font-medium block md:hover:translate-x-[2px]"
                >
                  1191K, Malviya Colony, Near Mahant Indresh Hosp, Dehradun – 248001
                </a>
              </li>
              <li className="flex items-center space-x-3.5 group">
                <Phone className="w-4 h-4 text-accent flex-shrink-0 transition-transform duration-250 group-hover:scale-110" />
                <a 
                  href="tel:+919675591951" 
                  className="text-white/80 hover:text-white transition-all duration-250 font-medium leading-none block md:hover:translate-x-[2px]"
                >
                  +91 96755 91951
                </a>
              </li>
              <li className="flex items-center space-x-3.5 group">
                <Phone className="w-4 h-4 text-accent flex-shrink-0 transition-transform duration-250 group-hover:scale-110" />
                <a 
                  href="tel:+919927557505" 
                  className="text-white/80 hover:text-white transition-all duration-250 font-medium leading-none block md:hover:translate-x-[2px]"
                >
                  +91 99275 57505
                </a>
              </li>
              <li className="flex items-center space-x-3.5 group">
                <Mail className="w-4 h-4 text-accent flex-shrink-0 transition-transform duration-250 group-hover:scale-110" />
                <a 
                  href="mailto:unitashomeuk@gmail.com" 
                  className="text-white/80 hover:text-white transition-all duration-250 font-medium break-all leading-none block md:hover:translate-x-[2px]"
                >
                  unitashomeuk@gmail.com
                </a>
              </li>
            </ul>
          </div>

          {/* 5. Footer Bottom (Center Align) */}
          <div className="mt-[38px] pt-6 border-t border-white/10 flex flex-col items-center justify-center font-sans text-xs text-white/50 text-center space-y-[18px]">
            {/* Rules & Regulations */}
            <div>
              <button 
                onClick={() => handleLinkClick('rules-regulations')} 
                className="hover:text-accent transition-colors duration-[250ms] cursor-pointer font-medium bg-transparent border-0 py-0 px-0 outline-none text-center text-xs"
              >
                House Rules →
              </button>
            </div>
            
            {/* Terms & Conditions • Privacy Policy */}
            <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-2 px-4">
              <button 
                onClick={() => handleLinkClick('terms-of-service')}
                className="hover:text-accent transition-colors duration-[250ms] cursor-pointer font-medium bg-transparent border-0 py-0 px-0 outline-none text-center text-xs font-semibold"
              >
                Terms & Conditions
              </button>
              <span className="text-white/20">•</span>
              <button 
                onClick={() => handleLinkClick('privacy-policy')}
                className="hover:text-accent transition-colors duration-[250ms] cursor-pointer font-medium bg-transparent border-0 py-0 px-0 outline-none text-center text-xs"
              >
                Privacy Policy
              </button>
            </div>

            {/* Copyright */}
            <div>
              <span>© 2026 Unitas Home. All Rights Reserved.</span>
            </div>
            
            {/* Back to Top */}
            <div>
              <button
                onClick={handleScrollToTop}
                className="w-8 h-8 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center hover:bg-white/15 text-white transition-all cursor-pointer mx-auto"
                aria-label="Back to Top"
              >
                <ArrowUp className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Dock target placeholder for Mobile Bottom Bar */}
          <div id="mobile-bottom-bar-dock-target" className="h-[calc(60px+env(safe-area-inset-bottom))] mt-[20px] md:hidden"></div>

        </div>

      </div>
    </footer>
  );
}
