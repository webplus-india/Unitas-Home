/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { motion } from 'motion/react';
import { 
  Phone, 
  Calendar, 
  Shield, 
  CreditCard, 
  Clock, 
  Home, 
  Heart, 
  Lock, 
  Utensils, 
  Brush, 
  Key, 
  CheckCircle2, 
  AlertTriangle,
  Wrench,
  Zap,
  Ban
} from 'lucide-react';

interface RulesRegulationsProps {
  onBookVisit: () => void;
  onNavigateToHome: () => void;
}

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.05,
    },
  },
};

const cardVariants = {
  hidden: { 
    opacity: 0, 
    y: 20 
  },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { 
      type: 'spring',
      stiffness: 100,
      damping: 15
    } 
  },
};

export default function RulesRegulations({ onBookVisit, onNavigateToHome }: RulesRegulationsProps) {
  const houseRules = [
    {
      title: 'Check-in & Check-out',
      icon: Key,
      color: 'text-[#0F8B8D] bg-[#ECF9F8]',
      bullets: [
        'Submit a valid Aadhaar card, Passport, or Government ID along with proof of study/employment.',
        'Complete verified contact details for both parents or local guardians for safety reference.',
        'Hand back all keys, access cards, and room inventory items during check-out clearance.',
        'Participate in a joint room walkthrough inspection with the warden before deposit refund processing.'
      ]
    },
    {
      title: 'Visitor Policy',
      icon: Shield,
      color: 'text-[#F4B400] bg-[#FFF9E6]',
      bullets: [
        'Visiting hours are daily from 9:00 AM to 7:00 PM in designated reception or common areas.',
        'All visitors must register at the reception desk with a valid government photo identity card.',
        'Overnight stays are strictly limited to parents only, requiring 24-hour prior approval.',
        'Residents are fully responsible for the behavior and rules compliance of their guests.'
      ]
    },
    {
      title: 'Quiet Hours',
      icon: Clock,
      color: 'text-[#0F8B8D] bg-[#ECF9F8]',
      bullets: [
        'Daily quiet hours are observed from 10:30 PM to 7:00 AM to ensure restful sleep and focused study.',
        'Avoid playing loud music on speakers or holding noisy calls in shared rooms and corridors.',
        'Respect your roommates\' preferences regarding lighting, screen time, and study hours.'
      ]
    },
    {
      title: 'Cleanliness & Hygiene',
      icon: Brush,
      color: 'text-[#F4B400] bg-[#FFF9E6]',
      bullets: [
        'Keep your individual room neat, dust-free, and well-ventilated for a healthy living environment.',
        'Cooperate with our housekeeping team during daily sweeps and scheduled bathroom deep-cleanings.',
        'Ensure personal belongings are stored inside closets to assist the cleaning staff.',
        'Dispose of dry and wet waste in the designated waste bins rather than leaving it in corridors.'
      ]
    },
    {
      title: 'Safety & Security',
      icon: Lock,
      color: 'text-[#0F8B8D] bg-[#ECF9F8]',
      bullets: [
        'Always lock your room door when stepping out, even for a brief moment.',
        'Sharing of biometric details, entry cards, or physical keys with others is strictly prohibited.',
        'Report any suspicious activity, unauthorized guests, or mechanical faults to the warden immediately.',
        'Store large amounts of cash or highly valuable personal items in safe digital lockboxes.'
      ]
    },
    {
      title: 'Food & Dining',
      icon: Utensils,
      color: 'text-[#F4B400] bg-[#FFF9E6]',
      bullets: [
        'Freshly cooked hot meals are served daily in the common dining hall during designated hours.',
        'Maintain table etiquette and clear your plate/bowls after finishing your meals.',
        'Respect our kitchen staff and make conscious efforts to avoid wasting nutritious meals.',
        'Cooking inside individual rooms is strictly banned due to building fire safety regulations.'
      ]
    },
    {
      title: 'Damage & Maintenance',
      icon: Wrench,
      color: 'text-[#0F8B8D] bg-[#ECF9F8]',
      bullets: [
        'Report any leakage, plumbing faults, or electrical issues immediately to the warden.',
        'Drilling holes, pasting heavy adhesive tape, or drawing on the walls is prohibited.',
        'Handle provided furniture, mattresses, curtains, and bathroom fittings with care.',
        'Cost of professional repairs plus a handling penalty applies for intentional property damages.'
      ]
    },
    {
      title: 'Electricity & Appliances',
      icon: Zap,
      color: 'text-[#F4B400] bg-[#FFF9E6]',
      bullets: [
        'Turn off all lights, fans, air conditioners, and geysers whenever you leave your room.',
        'High-wattage personal appliances (room heaters, induction plates, irons, boilers) are prohibited.',
        'Do not tamper with electrical meters, distribution panels, or building wiring setups.'
      ]
    },
    {
      title: 'Common Area Usage',
      icon: Home,
      color: 'text-[#0F8B8D] bg-[#ECF9F8]',
      bullets: [
        'Shared zones like study lounges, common kitchen, and lobbies are meant for all residents.',
        'Keep common tables and chairs clean and free of personal books or cups after usage.',
        'Maintain respectful social decorum and appropriate clothing in all common spaces.'
      ]
    },
    {
      title: 'Prohibited Activities',
      icon: Ban,
      color: 'text-[#F4B400] bg-[#FFF9E6]',
      bullets: [
        'Smoking, alcohol, or possession of any banned substances is strictly prohibited on the premises.',
        'Bullying, harassment, verbal abuse, or physical altercations lead to immediate eviction.',
        'Entering other residents\' rooms without their explicit invitation is prohibited for privacy.',
        'Pets of any kind are not permitted on the property due to health and safety regulations.'
      ]
    },
    {
      title: 'Payments & Deposits',
      icon: CreditCard,
      color: 'text-[#0F8B8D] bg-[#ECF9F8]',
      bullets: [
        'Monthly rent must be paid on or before the 5th of every month via digital UPI or bank transfer.',
        'A standard daily late fee applies for rent payments cleared after the 5th of the month.',
        'The refundable security deposit must be cleared in full before room key assignment.',
        'A minimum commitment stay of 2 months applies to all bookings.'
      ]
    },
    {
      title: 'Emergency Contact',
      icon: Phone,
      color: 'text-[#F4B400] bg-[#FFF9E6]',
      bullets: [
        'Our on-site warden and security team are available 24/7 for any urgent assistance or emergency.',
        'A fully-equipped first-aid kit and emergency protocols are active at the front reception desk.',
        'Save the official warden helpline number on your speed dial for easy access.'
      ]
    }
  ];

  const penalties = [
    { situation: 'Lost Room Key / Cylinder Replacement', charge: '₹500 (Covers key cylinder & lock reset)' },
    { situation: 'Property Damage (Walls, Glass, Fittings)', charge: 'Actual repair cost + ₹1,000 penalty' },
    { situation: 'Late Rent Payment (Post 5th of month)', charge: '₹100 per day' },
    { situation: 'Unauthorized Overnight Guest stay', charge: '₹1,000 per night (First warning issued)' },
    { situation: 'Damage to Room Furniture / Electronics', charge: 'Actual replacement or professional repair cost' },
    { situation: 'Deep Cleaning (Extreme hygiene neglect)', charge: '₹1,000' }
  ];



  return (
    <div className="w-full bg-[#FAFAF7] py-2 pt-[80px] pb-10">
      
      {/* 1. HERO SECTION */}
      <section className="relative h-[360px] flex items-center justify-center overflow-hidden">
        {/* Background Image with lazy loading */}
        <div className="absolute inset-0 z-0">
          <img
            src="https://lh3.googleusercontent.com/gps-cs-s/APNQkAEQDDQB5ATVtyb79hfXIw6rxQ3goPe-c-PkkC4IISw4Hfc6ZUY4jgJsXu6X9CrDoM8tbdiz6oWRYTZtRerDCkc6XIM7AyUZIVEjK5_g6COy67r-jeua13KILpi4axL4hs4gNjhC=s1360-w1360-h1020-rw"
            alt="Unitas Home Property"
            title="Unitas Home Property"
            loading="lazy"
            decoding="async"
            className="w-full h-full object-cover object-center scale-[1.02] brightness-[0.75]"
            referrerPolicy="no-referrer"
          />
          {/* Subtle Dark Teal Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/60 to-black/75"></div>
        </div>

        {/* Content */}
        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center text-white">
          {/* Breadcrumb Navigation */}
          <nav className="flex items-center justify-center space-x-2 text-xs md:text-sm font-sans font-semibold tracking-wide text-accent mb-6 select-none uppercase">
            <button 
              onClick={onNavigateToHome}
              className="hover:text-white transition-colors duration-200 cursor-pointer"
            >
              Home
            </button>
            <span className="text-white/40">/</span>
            <span className="text-white/90">House Rules</span>
          </nav>

          <h1 className="font-display font-extrabold text-4xl sm:text-5xl md:text-6xl text-white leading-tight tracking-tight mb-6">
            House Rules
          </h1>

          <p className="font-sans text-sm sm:text-base md:text-lg text-white/80 leading-relaxed max-w-2xl mx-auto font-medium">
            To ensure a safe, comfortable, and enjoyable stay for everyone at Unitas Home, we request all residents to follow these house rules.
          </p>

          {/* Last Updated Information */}
          <div className="flex flex-col items-center">
            <div className="w-12 h-[1px] bg-white/15 my-3"></div>
            <div className="inline-flex items-center space-x-2 text-white/50 text-xs font-sans font-medium select-none">
              <Calendar className="w-3.5 h-3.5 text-white/45" />
              <span>Last Updated: 11 July 2026</span>
            </div>
          </div>
        </div>
      </section>

      {/* 2. HOUSE RULES GRID */}
      <section className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-16">
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {houseRules.map((rule, idx) => {
            const Icon = rule.icon;
            return (
              <motion.div 
                key={idx}
                variants={cardVariants}
                className="bg-white rounded-[24px] p-7 border border-[#EBEBE5] shadow-xs hover:shadow-md hover:border-primary/20 transition-all duration-300 text-left flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center space-x-4 mb-5">
                    <div className={`w-11 h-11 rounded-xl flex items-center justify-center shrink-0 ${rule.color}`}>
                      <Icon className="w-5.5 h-5.5 stroke-[2]" />
                    </div>
                    <h3 className="font-display font-extrabold text-base lg:text-lg text-charcoal leading-tight">
                      {rule.title}
                    </h3>
                  </div>
                  <ul className="space-y-3 font-sans text-sm text-slate-gray leading-[1.65] font-medium">
                    {rule.bullets.map((bullet, bIdx) => (
                      <li key={bIdx} className="flex items-start space-x-2.5">
                        <span className="text-[#0F8B8D] font-bold text-base leading-none mt-0.5">•</span>
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </section>

      {/* 3. CHARGES & PENALTIES TABLE */}
      <section className="max-w-4xl mx-auto px-6 py-12 text-center">
        <h2 className="font-display font-extrabold text-2xl sm:text-3xl text-charcoal mb-4">
          Charges & Penalties
        </h2>
        <p className="font-sans text-sm sm:text-base text-slate-gray max-w-xl mx-auto mb-8 font-medium">
          To maintain fairness and protect community assets, the following guidelines are established for specific situational incidents.
        </p>

        {/* Responsive Table */}
        <div className="bg-white rounded-[24px] border border-[#EBEBE5] shadow-xs overflow-hidden text-left w-full">
          <table className="w-full border-collapse table-fixed md:table-auto">
            <thead>
              <tr className="bg-[#ECF9F8] border-b border-[#EBEBE5]">
                <th className="px-3.5 py-3 md:px-6 md:py-4.5 font-display font-extrabold text-[#0B6E70] text-[16px] md:text-xs lg:text-sm uppercase tracking-wider text-left w-[65%] md:w-2/3">
                  Situation
                </th>
                <th className="px-3.5 py-3 md:px-6 md:py-4.5 font-display font-extrabold text-[#0B6E70] text-[16px] md:text-xs lg:text-sm uppercase tracking-wider text-left w-[35%] md:w-1/3">
                  Charge
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#F2F2EC] font-sans text-slate-gray font-medium">
              {penalties.map((penalty, idx) => (
                <tr 
                  key={idx}
                  className="odd:bg-white even:bg-[#FAFAF7] hover:bg-[#EFF9F8] transition-colors duration-200"
                >
                  <td className="px-3.5 py-3.5 md:px-6 md:py-4 text-charcoal font-semibold leading-snug text-[16px] md:text-sm break-words whitespace-normal">
                    {penalty.situation}
                  </td>
                  <td className="px-3.5 py-3.5 md:px-6 md:py-4 text-[#0F8B8D] font-bold leading-snug text-[16px] md:text-sm break-words whitespace-normal">
                    {penalty.charge}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* 4. IMPORTANT NOTICE */}
      <section className="max-w-4xl mx-auto px-6 py-8">
        <div className="bg-[#FFFDF0] border-l-[5px] border-[#F4B400] rounded-r-[20px] p-6 sm:p-8 text-left shadow-xs flex items-start space-x-4">
          <AlertTriangle className="w-6 h-6 sm:w-7 sm:h-7 text-[#F4B400] shrink-0 mt-0.5" />
          <div className="flex-1">
            <h4 className="font-display font-extrabold text-sm sm:text-base text-charcoal mb-2 leading-tight">
              A Warm Reminder
            </h4>
            <p className="font-sans text-xs sm:text-sm text-slate-gray font-semibold leading-relaxed">
              These guidelines are designed to maintain a safe, respectful, and comfortable environment for all residents. Unitas Home reserves the right to update these policies whenever necessary. Residents are expected to follow all applicable house rules with care.
            </p>
          </div>
        </div>
      </section>

      {/* 5. FINAL HELP SECTION */}
      <section className="max-w-4xl mx-auto px-6 py-16 md:py-20 text-center">
        <div className="w-12 h-12 rounded-2xl bg-[#ECF9F8] text-[#0F8B8D] flex items-center justify-center mx-auto mb-6">
          <Heart className="w-6 h-6 stroke-[2]" />
        </div>
        <h2 className="font-display font-extrabold text-2xl sm:text-3xl text-charcoal mb-4">
          Need Assistance?
        </h2>
        <p className="font-sans text-sm sm:text-base text-slate-gray max-w-xl mx-auto mb-8 font-medium">
          Our team is happy to answer any questions or clarify our house guidelines to ensure you have a seamless transition.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 max-w-md mx-auto">
          {/* Book Visit Button */}
          <button
            onClick={onBookVisit}
            className="w-full sm:w-auto bg-[#F4B400] hover:bg-[#E0A300] text-[#1F2937] font-sans font-bold text-sm sm:text-base tracking-wide px-8 rounded-full shadow-[0_4px_14px_rgba(244,180,0,0.25)] hover:shadow-[0_8px_20px_rgba(244,180,0,0.4)] transition-all duration-250 ease-out flex items-center justify-center space-x-2.5 cursor-pointer hover:-translate-y-[2px] active:translate-y-0 h-[55px] shrink-0"
          >
            <Calendar className="w-5 h-5 text-[#1F2937]" />
            <span>Book a Visit</span>
          </button>

          {/* WhatsApp Button */}
          <a
            href="https://wa.me/919675591951?text=Hi%20Unitas%20Home%2C%20I%20have%20questions%20regarding%20the%20house%20rules."
            target="_blank"
            rel="noreferrer"
            className="w-full sm:w-auto bg-[#0F8B8D] hover:bg-[#0B6E70] text-white font-sans font-bold text-sm sm:text-base tracking-wide px-8 rounded-full shadow-[0_4px_14px_rgba(15,139,141,0.25)] hover:shadow-[0_8px_20px_rgba(15,139,141,0.4)] transition-all duration-250 ease-out flex items-center justify-center space-x-2.5 cursor-pointer hover:-translate-y-[2px] active:translate-y-0 h-[55px] shrink-0"
          >
            <svg 
              className="w-5 h-5 text-white fill-current shrink-0" 
              viewBox="0 0 24 24" 
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662c1.746.953 3.71 1.458 5.704 1.461h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
          </svg>
          <span>WhatsApp Us</span>
        </a>
      </div>
    </section>

  </div>
  );
}
