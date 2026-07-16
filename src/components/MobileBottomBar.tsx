/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Phone, Calendar } from 'lucide-react';

interface MobileBottomBarProps {
  onBookVisit: () => void;
}

export default function MobileBottomBar({ onBookVisit }: MobileBottomBarProps) {
  const [isVisible, setIsVisible] = useState(false);
  const [isDocked, setIsDocked] = useState(false);
  const [activeForbiddenSections, setActiveForbiddenSections] = useState<Record<string, boolean>>({});
  const lastScrollY = useRef(0);
  const isNearByOrBelowRef = useRef(false);

  const isNearByOrBelow = !!(activeForbiddenSections.nearby || activeForbiddenSections.contact);
  
  // Keep ref in sync for high-performance scroll callback access
  isNearByOrBelowRef.current = isNearByOrBelow;

  // 1. Intersection Observer to detect when entering Google Maps (#nearby) or Contact (#contact)
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        setActiveForbiddenSections((prev) => {
          const next = { ...prev };
          entries.forEach((entry) => {
            const id = entry.target.id;
            if (id === 'nearby') {
              next.nearby = entry.isIntersecting;
            } else if (id === 'contact') {
              next.contact = entry.isIntersecting;
            }
          });
          return next;
        });
      },
      {
        root: null,
        threshold: 0,
        rootMargin: '0px 0px 80px 0px', // Detects sections 80px before they enter viewport for smooth hide animation
      }
    );

    const observeTargets = () => {
      const nearbyEl = document.getElementById('nearby');
      const contactEl = document.getElementById('contact');

      if (nearbyEl) observer.observe(nearbyEl);
      if (contactEl) observer.observe(contactEl);
    };

    observeTargets();

    // Recheck dynamically on path change or user navigation click
    const handleCheck = () => {
      observeTargets();
    };

    window.addEventListener('popstate', handleCheck);
    window.addEventListener('click', handleCheck);

    return () => {
      observer.disconnect();
      window.removeEventListener('popstate', handleCheck);
      window.removeEventListener('click', handleCheck);
    };
  }, []);

  // 2. Intersection Observer to detect when we should dock at the bottom of the footer
  useEffect(() => {
    const dockObserver = new IntersectionObserver(
      ([entry]) => {
        setIsDocked(entry.isIntersecting);
      },
      {
        root: null,
        threshold: 0.1,
      }
    );

    const target = document.getElementById('mobile-bottom-bar-dock-target');
    if (target) dockObserver.observe(target);

    return () => {
      dockObserver.disconnect();
    };
  }, []);

  // 3. Scroll listener to show on scroll up / hide on scroll down
  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const currentScrollY = window.scrollY;

          if (currentScrollY <= 200) {
            setIsVisible(false);
          } else if (isNearByOrBelowRef.current) {
            setIsVisible(false);
          } else {
            const diff = currentScrollY - lastScrollY.current;
            if (Math.abs(diff) > 5) {
              if (diff > 0) {
                // Scrolling down -> Hide
                setIsVisible(false);
              } else {
                // Scrolling up -> Show
                setIsVisible(true);
              }
            }
          }

          lastScrollY.current = currentScrollY;
          ticking = false;
        });

        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    // Run initially
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // 4. Directly hide whenever forbidden state triggers (instant transition)
  useEffect(() => {
    if (isNearByOrBelow) {
      setIsVisible(false);
    }
  }, [isNearByOrBelow]);

  const finalIsVisible = (isVisible && !isNearByOrBelow) || isDocked;

  return (
    <div className={isDocked ? "md:hidden absolute bottom-0 left-0 right-0 z-50 pointer-events-none" : "md:hidden fixed bottom-0 left-0 right-0 z-50 pointer-events-none"}>
      <AnimatePresence>
        {finalIsVisible && (
          <motion.div
            initial={isDocked ? { y: 0, opacity: 1 } : { y: '100%', opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: '100%', opacity: 0 }}
            transition={{
              type: 'tween',
              ease: 'easeOut',
              duration: 0.2,
            }}
            style={{ willChange: 'transform, opacity', transform: 'translateZ(0)' }}
            className={isDocked 
              ? "w-full pointer-events-auto bg-transparent border-t-0 shadow-none px-3 pt-2 pb-[calc(8px+env(safe-area-inset-bottom))] select-none"
              : "w-full pointer-events-auto bg-white border-t border-black/[0.06] shadow-[0_-3px_12px_rgba(0,0,0,0.08)] rounded-t-[16px] px-3 pt-2 pb-[calc(8px+env(safe-area-inset-bottom))] select-none"
            }
          >
            <div className="flex gap-2 max-w-md mx-auto">
              {/* Left Button - Call Now */}
              <a
                href="tel:+919675591951"
                className="flex-1 h-[44px] rounded-[22px] border border-[#2D6A4F]/30 bg-white hover:bg-[#2D6A4F]/8 active:scale-98 text-[#2D6A4F] font-sans font-semibold text-xs sm:text-sm tracking-wide flex items-center justify-center space-x-2 transition-all duration-200 ease-out cursor-pointer"
              >
                <Phone className="w-[20px] h-[20px] text-[#2D6A4F] shrink-0" />
                <span>Call Now</span>
              </a>

              {/* Right Button - Book Visit */}
              <button
                onClick={onBookVisit}
                className="flex-1 h-[44px] rounded-[22px] bg-[#2D6A4F] hover:bg-[#1B4332] active:scale-98 text-white font-sans font-semibold text-xs sm:text-sm tracking-wide flex items-center justify-center space-x-2 transition-all duration-200 ease-out cursor-pointer shadow-[0_6px_16px_rgba(45,106,79,0.15)]"
              >
                <Calendar className="w-[20px] h-[20px] text-white shrink-0" />
                <span>Book Visit</span>
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
