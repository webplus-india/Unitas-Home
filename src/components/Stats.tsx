/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect, useRef } from 'react';
import { Users, BedDouble, Star, ShieldCheck } from 'lucide-react';
import { motion } from 'motion/react';

interface StatItem {
  icon: React.ElementType;
  value: number;
  suffix: string;
  label: string;
  decimals?: number;
}

interface AnimateNumberProps {
  value: number;
  duration?: number;
  decimals?: number;
}

function AnimateNumber({ value, duration = 800, decimals = 0 }: AnimateNumberProps) {
  const [displayValue, setDisplayValue] = useState(0);
  const elementRef = useRef<HTMLSpanElement>(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true;
          let startTime: number | null = null;
          const startValue = 0;

          const step = (timestamp: number) => {
            if (!startTime) startTime = timestamp;
            const progress = timestamp - startTime;
            const percentage = Math.min(progress / duration, 1);
            
            // Quadratic ease-out formula: f(t) = t * (2 - t)
            const easeOutPercentage = percentage * (2 - percentage);
            const current = startValue + easeOutPercentage * (value - startValue);

            setDisplayValue(current);

            if (progress < duration) {
              window.requestAnimationFrame(step);
            } else {
              setDisplayValue(value);
            }
          };

          window.requestAnimationFrame(step);
        }
      },
      { threshold: 0.1 }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => observer.disconnect();
  }, [value, duration]);

  return (
    <span ref={elementRef}>
      {displayValue.toFixed(decimals)}
    </span>
  );
}

export default function Stats() {
  const stats: StatItem[] = [
    {
      icon: Users,
      value: 120,
      suffix: '+',
      label: 'Happy Residents',
      decimals: 0
    },
    {
      icon: BedDouble,
      value: 65,
      suffix: '+',
      label: 'Premium Beds',
      decimals: 0
    },
    {
      icon: Star,
      value: 4.6,
      suffix: '★',
      label: 'Google Rating',
      decimals: 1
    },
    {
      icon: ShieldCheck,
      value: 24,
      suffix: '/7',
      label: '24/7 CCTV Security',
      decimals: 0
    }
  ];

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.12
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.5, ease: 'easeOut' }
    }
  };

  return (
    <section className="py-[120px] bg-[#FCFCF8] relative overflow-hidden border-b border-[#E5E7EB]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="font-display font-bold text-[34px] text-[#1F2937] leading-tight tracking-tight mb-6">
            Trusted by Students & Working Professionals
          </h2>
          <p className="font-sans text-[18px] text-[#6B7280] leading-relaxed">
            Experience safe, comfortable, and premium co-living trusted by hundreds of residents in Dehradun.
          </p>
        </div>

        {/* 4-Card Grid */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {stats.map((stat, idx) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={idx}
                variants={cardVariants}
                className="group flex flex-col items-center text-center p-8 bg-white border border-[#E5E7EB] rounded-[24px] shadow-[0_8px_30px_rgba(0,0,0,0.015)] hover:-translate-y-2 hover:shadow-[0_20px_40px_rgba(15,139,141,0.08)] transition-all duration-300 ease-in-out min-h-[220px] justify-between"
              >
                {/* Large Premium Icon Container */}
                <div className="w-[115px] h-[115px] rounded-full bg-[#0F8B8D]/10 flex items-center justify-center text-[#0F8B8D] mb-6 shrink-0 transition-all duration-300 group-hover:scale-105 group-hover:bg-[#0F8B8D]/15">
                  <Icon className="w-16 h-16" strokeWidth={1.5} />
                </div>

                {/* Animated Number */}
                <div className="flex items-baseline mb-3">
                  <span className="font-display font-extrabold text-5xl sm:text-[52px] text-[#0F8B8D] tracking-tight">
                    <AnimateNumber value={stat.value} decimals={stat.decimals} />
                  </span>
                  <span className="font-display font-bold text-3xl text-[#F4B400] ml-1">
                    {stat.suffix}
                  </span>
                </div>

                {/* Small Heading Underneath */}
                <h3 className="font-sans font-semibold text-[22px] text-[#1F2937] leading-tight mt-auto">
                  {stat.label}
                </h3>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
