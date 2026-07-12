import React from 'react';

/**
 * UNITAS HOME BRAND IDENTITY & LOGO GUIDELINES
 * 
 * 1. BRAND COLORS
 *    - Primary Deep Premium Teal: #0F8B8D (Deep, trustworthy, calming, sophisticated)
 *    - Accent Warm Gold: #F4B400 (Premium, hospitality-focused, warmth, excellence)
 *    - Neutral Charcoal: #1F2937 (Elegant, high-contrast, modern)
 *    - Neutral White: #FFFFFF (Clean, spacious, luxury)
 * 
 * 2. GEOMETRIC SYMBOL CONCEPT
 *    - The outer boundary forms a high-end, clean pitched-roof Home silhouette.
 *    - The interior doorway is carved out in a mathematically perfect, sweeping "U" shape 
 *      representing Unitas and Community.
 *    - The circular window in the upper peak represents a guiding Hearth/Light, rendered 
 *      in Warm Gold to convey hospitality and security.
 *    - 14-unit uniform thickness guarantees consistent visual weight and scalability down to 24px.
 * 
 * 3. MINIMUM SIZE & CLEAR SPACE
 *    - Website Navbar: Height of 28px - 36px (horizontal variant)
 *    - Favicon / App Icon: 24px - 48px square (icon only variant)
 *    - Print / Signage: Minimum clear space of 0.5x width around the logo boundary
 */

interface LogoProps {
  variant?: 'horizontal' | 'stacked' | 'icon' | 'wordmark';
  theme?: 'light' | 'dark' | 'white' | 'gold' | 'monochrome';
  subtitle?: string;
  className?: string;
  iconSize?: 'sm' | 'md' | 'lg' | 'xl' | 'custom';
  customIconSize?: string;
}

export default function Logo({
  variant = 'horizontal',
  theme = 'light',
  subtitle = 'PREMIUM STUDENT LIVING',
  className = '',
  iconSize = 'md',
  customIconSize = ''
}: LogoProps) {
  // Sizing definitions for the icon container
  const sizeClasses = {
    sm: 'w-7 h-7',
    md: 'w-10 h-10',
    lg: 'w-16 h-16',
    xl: 'w-24 h-24',
    custom: customIconSize || 'w-12 h-12'
  };

  const selectedSizeClass = sizeClasses[iconSize];

  // Colors for the flat-vector geometric icon
  let houseColor = '#0F8B8D';   // Brand Teal
  let windowColor = '#F4B400';  // Warm Gold

  // Colors for typography
  let brandUnitasColor = 'text-[#1F2937]'; // Charcoal
  let brandHomeColor = 'text-[#0F8B8D]';    // Brand Teal
  let brandSubtitleColor = 'text-[#6B7280]'; // Slate Gray

  if (theme === 'dark') {
    houseColor = '#FFFFFF';
    windowColor = '#F4B400';
    brandUnitasColor = 'text-white';
    brandHomeColor = 'text-[#F4B400]';
    brandSubtitleColor = 'text-white/80';
  } else if (theme === 'white') {
    houseColor = '#FFFFFF';
    windowColor = '#FFFFFF';
    brandUnitasColor = 'text-white';
    brandHomeColor = 'text-white';
    brandSubtitleColor = 'text-white/80';
  } else if (theme === 'gold') {
    houseColor = '#F4B400';
    windowColor = '#F4B400';
    brandUnitasColor = 'text-[#F4B400]';
    brandHomeColor = 'text-[#F4B400]';
    brandSubtitleColor = 'text-[#F4B400]/80';
  } else if (theme === 'monochrome') {
    houseColor = '#1F2937';
    windowColor = '#1F2937';
    brandUnitasColor = 'text-[#1F2937]';
    brandHomeColor = 'text-[#1F2937]';
    brandSubtitleColor = 'text-[#1F2937]/70';
  }

  // Beautiful, high-end hospitality geometric icon SVG
  const IconSVG = () => (
    <svg
      viewBox="0 0 100 100"
      className={`${selectedSizeClass} shrink-0`}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Redesigned House and "U" Monogram using a precise mathematical path */}
      <path
        d="M 50 14 L 85 44 V 84 H 15 V 44 Z M 29 44 V 49 A 21 21 0 0 0 71 49 V 44 Z"
        fill={houseColor}
        fillRule="evenodd"
      />
      {/* Warm Hospitality Window (Light of the Hearth) */}
      <circle
        cx="50"
        cy="31"
        r="6.5"
        fill={windowColor}
      />
    </svg>
  );

  if (variant === 'icon') {
    return <IconSVG />;
  }

  if (variant === 'wordmark') {
    return (
      <div className={`flex flex-col ${className}`}>
        <span className={`font-sans font-semibold text-xl tracking-wide flex items-center`}>
          <span className={brandUnitasColor}>Unitas</span>
          <span className={`${brandHomeColor} ml-1`}>Home</span>
        </span>
        {subtitle && (
          <span className={`block text-[8px] sm:text-[9px] tracking-[0.22em] font-medium mt-0.5 uppercase ${brandSubtitleColor}`}>
            {subtitle}
          </span>
        )}
      </div>
    );
  }

  if (variant === 'stacked') {
    return (
      <div className={`flex flex-col items-center text-center space-y-3 ${className}`}>
        <IconSVG />
        <div className="flex flex-col items-center">
          <span className="font-sans font-semibold text-2xl tracking-wide">
            <span className={brandUnitasColor}>Unitas</span>
            <span className={`${brandHomeColor} ml-1.5`}>Home</span>
          </span>
          {subtitle && (
            <span className={`block text-[9px] sm:text-[10px] tracking-[0.22em] font-medium mt-1.5 uppercase ${brandSubtitleColor}`}>
              {subtitle}
            </span>
          )}
        </div>
      </div>
    );
  }

  // Default: Horizontal logo
  return (
    <div className={`flex items-center space-x-3 cursor-pointer group ${className}`}>
      <div className="transition-transform duration-300 group-hover:scale-105">
        <IconSVG />
      </div>
      <div className="flex flex-col">
        <span className="font-sans font-semibold text-xl tracking-wide flex items-center">
          <span className={brandUnitasColor}>Unitas</span>
          <span className={`${brandHomeColor} ml-1`}>Home</span>
        </span>
        {subtitle && (
          <span className={`block text-[8px] sm:text-[9px] tracking-[0.22em] font-medium mt-0.5 uppercase ${brandSubtitleColor}`}>
            {subtitle}
          </span>
        )}
      </div>
    </div>
  );
}
