/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';

export default function FloatingActions() {
  const [isScrollPassed, setIsScrollPassed] = useState(false);
  const [isFooterVisible, setIsFooterVisible] = useState(false);

  // Track scroll position to hide in Hero section (threshold 200px)
  useEffect(() => {
    const handleScroll = () => {
      setIsScrollPassed(window.scrollY > 200);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    // Run once initially
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Use Intersection Observer to detect footer entry and exit
  useEffect(() => {
    const footerEl = document.querySelector('footer');
    if (!footerEl) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          setIsFooterVisible(entry.isIntersecting);
        });
      },
      {
        root: null,
        threshold: 0,
        rootMargin: '0px 0px 0px 0px',
      }
    );

    observer.observe(footerEl);
    return () => {
      observer.disconnect();
    };
  }, []);

  const isVisible = isScrollPassed && !isFooterVisible;

  const breathVariants = {
    initial: {
      opacity: 0,
      scale: 0.8,
    },
    animate: {
      opacity: 1,
      scale: [1, 1.045, 1],
      transition: {
        opacity: { duration: 0.3, ease: 'easeOut' },
        scale: {
          duration: 2.9,
          ease: 'easeInOut',
          repeat: Infinity,
          repeatType: 'loop',
        },
      },
    },
    exit: {
      opacity: 0,
      scale: 0.8,
      transition: {
        duration: 0.2,
        ease: 'easeIn',
      },
    },
  };

  return (
    <div className="fixed bottom-[88px] md:bottom-6 right-6 z-40 flex flex-col items-center select-none">
      <AnimatePresence>
        {isVisible && (
          <motion.a
            key="whatsapp-btn"
            href="https://wa.me/919675591951?text=Hi%20Unitas%20Home%2C%20I%20want%20to%20know%20more%20about%20your%20co-living%20rooms."
            target="_blank"
            rel="noopener noreferrer"
            variants={breathVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            style={{ willChange: 'transform, opacity', transform: 'translateZ(0)' }}
            className="w-[60px] h-[60px] md:w-[64px] md:h-[64px] rounded-full bg-[#2D6A4F] hover:bg-[#1B4332] text-white flex items-center justify-center cursor-pointer shadow-[0_10px_25px_-5px_rgba(45,106,79,0.25)] transition-colors duration-200"
            title="Chat on WhatsApp"
            aria-label="Chat with us on WhatsApp"
            whileHover={{
              scale: 1.05,
              boxShadow: '0 16px 40px -5px rgba(45, 106, 79, 0.45), 0 12px 18px -6px rgba(45, 106, 79, 0.3), 0 0 20px rgba(45, 106, 79, 0.25)',
              transition: { duration: 0.2, ease: 'easeOut' }
            }}
            whileTap={{
              scale: 0.96,
              boxShadow: '0 6px 15px -5px rgba(45, 106, 79, 0.2), 0 4px 6px -6px rgba(45, 106, 79, 0.1)',
              transition: { duration: 0.1, ease: 'easeOut' }
            }}
          >
            <svg viewBox="0 0 24 24" className="w-7 h-7 md:w-8 md:h-8 fill-white text-white" fill="currentColor">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662c1.746.953 3.71 1.458 5.704 1.459h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
            </svg>
          </motion.a>
        )}
      </AnimatePresence>
    </div>
  );
}
