/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { Phone, MessageSquare, Menu, X, CalendarCheck, Home as HomeIcon } from 'lucide-react';
import { motion, AnimatePresence, useScroll, useSpring } from 'motion/react';
import Logo from './Logo';

interface HeaderProps {
  onNavigate: (sectionId: string) => void;
  onOpenBooking: () => void;
  onToggleDashboard: () => void;
  showDashboard: boolean;
  activeSection: string;
}

export default function Header({
  onNavigate,
  onOpenBooking,
  onToggleDashboard,
  showDashboard,
  activeSection
}: HeaderProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: 'Home', id: 'home' },
    { label: 'Why Unitas', id: 'why-unitas' },
    { label: 'Rooms', id: 'rooms' },
    { label: 'Amenities', id: 'amenities' },
    { label: 'Gallery', id: 'gallery' },
    { label: 'Blog', id: 'blog' },
    { label: 'Contact', id: 'contact' }
  ];

  const handleItemClick = (id: string) => {
    setIsMobileMenuOpen(false);
    if (showDashboard) {
      onToggleDashboard();
    }
    onNavigate(id);
  };

  return (
    <>
      {/* Thin Scroll Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-[2.5px] bg-primary z-[60] origin-left pointer-events-none"
        style={{ scaleX, willChange: 'transform', transform: 'translateZ(0)' }}
      />
      <header
        style={{ willChange: 'transform, opacity', transform: 'translateZ(0)' }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled || showDashboard
            ? 'bg-bg-warm/98 md:bg-bg-warm/95 md:backdrop-blur-md border-b border-border-light shadow-xs py-3'
            : 'bg-bg-warm/95 md:bg-bg-warm/40 md:backdrop-blur-sm py-4'
        }`}
      >
        <div className="max-w-7xl mx-auto pl-6 pr-6 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <div onClick={() => handleItemClick('home')}>
              <Logo variant="horizontal" theme="light" />
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center md:space-x-3 lg:space-x-5 xl:space-x-6">
              {navItems.map((item) => {
                const isActive = activeSection === item.id && !showDashboard;
                return (
                  <button
                    key={item.id}
                    onClick={() => handleItemClick(item.id)}
                    className={`font-sans text-xs lg:text-sm font-medium tracking-wide transition-colors duration-200 cursor-pointer relative py-2 ${
                      isActive
                        ? 'text-primary'
                        : 'text-slate-gray hover:text-primary'
                    }`}
                  >
                    {item.label}
                    {isActive && (
                      <motion.span
                        layoutId="navUnderline"
                        className="absolute bottom-0 left-0 right-0 h-0.5 bg-accent"
                        transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                      />
                    )}
                  </button>
                );
              })}
            </nav>

            {/* CTA Buttons & Phone Contact */}
            <div className="flex items-center space-x-3 lg:space-x-6">
              {/* Phone number chip - hidden on mobile, visible from md up */}
              <a
                href="tel:+919675591951"
                className="hidden md:flex text-[#2D6A4F] bg-[#2D6A4F]/5 border border-[#2D6A4F]/10 hover:bg-[#2D6A4F]/10 rounded-full font-sans font-semibold text-xs lg:text-[13px] tracking-wide px-3 py-1.5 transition-all duration-300 items-center space-x-1.5 lg:space-x-2 cursor-pointer relative shrink-0"
              >
                <Phone className="w-[14px] h-[14px] lg:w-[16px] lg:h-[16px] stroke-[2.5px] text-[#2D6A4F]" />
                <span>+91 96755 91951</span>
              </a>

              {/* Book a visit button - hidden on mobile/tablet, visible from lg up */}
              <div className="hidden lg:flex items-center">
                <button
                  onClick={onOpenBooking}
                  className="bg-[#D4AF37] text-[#1F2937] hover:bg-[#C79A17] font-sans font-semibold text-xs tracking-wide px-5 py-2.5 rounded-full transition-all duration-300 flex items-center space-x-1.5 shadow-sm border border-[#C79A17]/20 cursor-pointer hover:scale-[1.03]"
                >
                  <CalendarCheck className="w-4 h-4" />
                  <span>Book a Visit</span>
                </button>
              </div>

              {/* Mobile Menu Trigger - hidden on tablet/desktop, visible on mobile */}
              <div className="flex items-center md:hidden">
                <button
                  onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                  className={`w-12 h-12 flex items-center justify-center rounded-[18px] shadow-[0_4px_12px_rgba(0,0,0,0.08)] transition-all duration-[250ms] ease-in-out cursor-pointer focus:outline-hidden focus:ring-2 focus:ring-primary/20 ${
                    isMobileMenuOpen 
                      ? 'bg-primary/5 hover:bg-primary/10 text-primary' 
                      : 'bg-[#F5F7FA] hover:bg-[#EEF1F6] text-[#1F2937]'
                  }`}
                  aria-label="Toggle Menu"
                >
                  {isMobileMenuOpen ? (
                    <X className="w-6 h-6 stroke-[2.2]" />
                  ) : (
                    <Menu className="w-6 h-6 stroke-[2.2]" />
                  )}
                </button>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Navigation */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-x-0 top-[70px] z-40 md:hidden bg-surface-white border-b border-border-light shadow-lg px-6 pt-5 pb-6 flex flex-col space-y-5 rounded-b-[24px]"
          >
            <div className="flex flex-col space-y-6">
              {navItems.map((item) => {
                const isActive = activeSection === item.id && !showDashboard;
                return (
                  <button
                    key={item.id}
                    onClick={() => handleItemClick(item.id)}
                    className={`w-full font-sans font-medium text-[15px] min-h-[44px] flex items-center justify-center px-4 rounded-[16px] transition-all duration-200 cursor-pointer ${
                      isActive
                        ? 'bg-primary/8 text-primary font-semibold'
                        : 'text-slate-gray hover:bg-slate-50/50'
                    }`}
                  >
                    <span>{item.label}</span>
                  </button>
                );
              })}
            </div>

            <div className="pt-4 border-t border-border-light flex flex-col space-y-3">
              <a
                href="tel:+919675591951"
                className="flex items-center justify-center space-x-2 w-full py-3 text-primary bg-primary/5 rounded-[18px] text-sm font-semibold border border-primary/10 hover:bg-primary/10 transition-all duration-200 min-h-[44px]"
              >
                <Phone className="w-4 h-4 stroke-[2.5px]" />
                <span>+91 96755 91951</span>
              </a>

              <button
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  onOpenBooking();
                }}
                className="flex items-center justify-center space-x-2 w-full py-3 bg-[#D4AF37] text-[#1F2937] rounded-[18px] text-sm font-semibold shadow-xs border border-[#C79A17]/20 hover:bg-[#C79A17] transition-all duration-200 min-h-[44px] cursor-pointer"
              >
                <CalendarCheck className="w-4 h-4" />
                <span>Book a Visit</span>
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
