/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Phone, 
  Calendar, 
  ChevronDown, 
  Shield, 
  CreditCard, 
  Clock, 
  Home, 
  Heart, 
  Lock, 
  Utensils, 
  Brush, 
  Wifi, 
  Key, 
  FileCheck, 
  CheckCircle2, 
  AlertTriangle,
  HelpCircle,
  Coins,
  FileText,
  Wallet
} from 'lucide-react';

interface RulesRegulationsProps {
  onBookVisit: () => void;
  onNavigateToHome: () => void;
}

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.08,
    },
  },
};

const cardVariants = {
  hidden: { 
    opacity: 0, 
    y: 35 
  },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { 
      type: 'spring',
      stiffness: 80,
      damping: 16,
      mass: 0.8
    } 
  },
};

export default function RulesRegulations({ onBookVisit, onNavigateToHome }: RulesRegulationsProps) {
  // Mobile Category Accordion State (only one open at a time)
  const [openCategory, setOpenCategory] = useState<number | null>(0);

  // FAQ Accordion State (only one open at a time)
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const handleToggleCategory = (index: number) => {
    setOpenCategory(openCategory === index ? null : index);
  };

  const handleToggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const policySummaries = [
    {
      title: 'Minimum Stay',
      value: '2 Months',
      description: 'Designed for a comfortable long-term stay.',
      icon: Clock,
      color: 'text-[#0F8B8D] bg-[#ECF9F8]',
    },
    {
      title: 'Notice Period',
      value: '30 Days',
      description: 'Inform management before vacating.',
      icon: Calendar,
      color: 'text-[#F4B400] bg-[#FFF9E6]',
    },
    {
      title: 'Security Deposit',
      value: '₹5,000 (Refundable)',
      description: 'Returned in full after a joint room inspection during check-out.',
      icon: Coins,
      color: 'text-[#0F8B8D] bg-[#ECF9F8]',
    },
    {
      title: 'Visitor Policy',
      value: 'Approved Visitors Only',
      description: 'Visitor access is subject to management guidelines.',
      icon: Shield,
      color: 'text-[#F4B400] bg-[#FFF9E6]',
    },
  ];

  const ruleCategories = [
    {
      title: 'Rent & Payments',
      icon: CreditCard,
      color: 'text-[#0F8B8D] bg-[#ECF9F8]',
      bullets: [
        'Monthly rent must be paid on or before the 5th of every month.',
        'We accept payments via standard digital channels including UPI, Net Banking, and Bank Transfer.',
        'A grace period is provided up to the 5th; a nominal late payment fee applies thereafter.',
        'The refundable security deposit must be cleared in full prior to room allotment.',
      ],
    },
    {
      title: 'Minimum Stay & Notice',
      icon: Clock,
      color: 'text-[#F4B400] bg-[#FFF9E6]',
      bullets: [
        'A minimum commitment of 2 months stay is required for all bookings.',
        'A written 30-day notice must be submitted to the warden before vacating your room.',
        'Leaving before completing the 2-month stay will lead to the forfeiture of your security deposit.',
      ],
    },
    {
      title: 'Visitors & Guests',
      icon: Shield,
      color: 'text-[#0F8B8D] bg-[#ECF9F8]',
      bullets: [
        'Visiting hours are scheduled daily from 9:00 AM to 7:00 PM.',
        'All visitors must register at the reception with a valid government ID.',
        'Overnight guest stays are strictly restricted to parents only, requiring 24-hour prior approval and subject to room availability.',
        'Residents are held fully responsible for the behavior and guidelines compliance of their guests.',
      ],
    },
    {
      title: 'Room Care',
      icon: Home,
      color: 'text-[#F4B400] bg-[#FFF9E6]',
      bullets: [
        'Residents are expected to keep their rooms neat, clean, and in hygienic condition.',
        'Any technical, plumbing, or electrical issue must be reported immediately to maintenance.',
        'Drilling holes, pasting heavy adhesive tapes, or painting walls is strictly prohibited.',
        'Ensure careful handling of provided furniture, lighting, and curtains.',
      ],
    },
    {
      title: 'Community Behaviour',
      icon: Heart,
      color: 'text-[#0F8B8D] bg-[#ECF9F8]',
      bullets: [
        'Respect the privacy, quiet study hours, and personal space of your roommates.',
        'Quiet hours are observed from 10:30 PM to 7:00 AM to ensure uninterrupted rest for all.',
        'Bullying, harassment, or verbal abuse is strictly prohibited and subject to immediate eviction.',
        'A strict zero-tolerance policy is maintained towards substance abuse, smoking, or illegal activities.',
      ],
    },
    {
      title: 'Safety & Security',
      icon: Lock,
      color: 'text-[#F4B400] bg-[#FFF9E6]',
      bullets: [
        'Always lock your room when leaving, even for short durations.',
        'Sharing of biometric data, door locks, or entry cards is strictly prohibited for safety reasons.',
        'Immediately report any emergency or suspicious activity to the on-site warden.',
        'High-wattage appliances like room heaters, hot plates, or induction cookers are not allowed inside individual rooms.',
      ],
    },
    {
      title: 'Meals & Dining',
      icon: Utensils,
      color: 'text-[#0F8B8D] bg-[#ECF9F8]',
      bullets: [
        'Freshly cooked hot meals are served daily in the dining hall during designated hours.',
        'Dining hall etiquette must be maintained; residents are requested to clean up their tables after meals.',
        'Please respect our kitchen staff and avoid wasting nutritious home-style meals.',
        'Cooking inside individual rooms is strictly banned due to fire safety codes.',
      ],
    },
    {
      title: 'Housekeeping',
      icon: Brush,
      color: 'text-[#F4B400] bg-[#FFF9E6]',
      bullets: [
        ' Housekeeping team cleans all rooms daily and deep-cleans washrooms on a scheduled rotation.',
        'Residents must cooperate by allowing housekeeping staff entry during schedule hours.',
        'Ensure personal belongings are kept within drawers or closets to assist easy cleaning.',
      ],
    },
    {
      title: 'Internet & Wi-Fi',
      icon: Wifi,
      color: 'text-[#0F8B8D] bg-[#ECF9F8]',
      bullets: [
        'High-speed fiber-optic Wi-Fi is meant strictly for personal, academic, or professional usage.',
        'Accessing illegal websites, torrenting, or violating digital copyright laws is completely prohibited.',
        'Help maintain network speeds by avoiding unauthorized heavy server hosting or device piggybacking.',
      ],
    },
    {
      title: 'Check-in & Check-out',
      icon: Key,
      color: 'text-[#F4B400] bg-[#FFF9E6]',
      bullets: [
        'A valid Aadhaar, Passport, or Government ID along with student/employment proofs must be submitted.',
        'Verification of contact details for both parents or local guardians is mandatory.',
        'All keys and inventory items must be handed back during check-out clearance.',
        'A joint room inspection will be completed by the warden to verify asset conditions before deposit refund.',
      ],
    },
  ];

  const penalties = [
    { situation: 'Lost Room Key / Replacement', charge: '₹500 (Covering cylinder & key reset)' },
    { situation: 'Property Damage (Walls, Glass, Fittings)', charge: 'Actual repair cost + ₹1,000 penalty' },
    { situation: 'Late Rent Payment (Post 5th of month)', charge: '₹100 per day' },
    { situation: 'Unauthorized Overnight Guest stay', charge: '₹1,000 per night (Immediate warning)' },
    { situation: 'Damage to Room Furniture / Electronics', charge: 'Actual cost of replacement or professional repair' },
    { situation: 'Deep Cleaning (In case of extreme hygiene neglect)', charge: '₹1,000' },
    { situation: 'Extra Cleaning (Leaving kitchen or common areas messy)', charge: '₹500' },
  ];

  const parseCharge = (chargeStr: string) => {
    const idx = chargeStr.indexOf('(');
    if (idx !== -1) {
      return {
        value: chargeStr.substring(0, idx).trim(),
        description: chargeStr.substring(idx).trim()
      };
    }
    return {
      value: chargeStr,
      description: ''
    };
  };

  const responsibilities = [
    'Respect the privacy, comfort, and personal belongings of everyone.',
    'Keep your private rooms and immediate corridors clean and tidy.',
    'Protect Unitas Home infrastructure, furniture, and amenities.',
    'Follow daily quiet hours (10:30 PM to 7:00 AM) diligently.',
    'Inform the management team immediately when maintenance is required.',
    'Cooperate fully with authorized team members during safety inspections.',
    'Use shared spaces, lounges, and kitchen areas responsibly.',
    'Follow all established safety, visitor, and dining guidelines.',
  ];

  const faqs = [
    {
      question: 'Is the security deposit refundable?',
      answer: 'Yes, the security deposit is fully refundable at the time of check-out. The amount is returned directly to your bank account after a room inspection is completed and any pending utilities, late rent dues, or room damages (if applicable) are cleared.',
    },
    {
      question: 'Can parents visit?',
      answer: 'Absolutely! Parents and immediate family members are warmly welcome to visit your room between 9:00 AM and 7:00 PM. Please register them at the reception desk upon arrival.',
    },
    {
      question: 'Can I leave before completing two months?',
      answer: 'Our co-living community is optimized for comfortable long-term stays, which is why we have a minimum stay requirement of 2 months. Leaving before this period will lead to the forfeiture of the security deposit.',
    },
    {
      question: 'Are overnight guests allowed?',
      answer: 'Overnight stays are permitted for parents only, subject to prior warden approval, room availability, and a nominal overnight charge. Unrelated friends or classmates are not allowed to stay overnight to respect the privacy of roommates.',
    },
    {
      question: 'Is Wi-Fi included?',
      answer: 'Yes, premium high-speed fiber Wi-Fi up to 150 Mbps is completely included in your monthly rent with unlimited data usage. Floor-specific routers are configured to guarantee robust and uninterrupted speed throughout the home.',
    },
    {
      question: 'How do I report maintenance issues?',
      answer: 'You can report any maintenance requests (plumbing, electrical, appliance failures, etc.) directly to our on-site warden. Most standard issues are fully resolved by our dedicated technician team within 24 to 48 hours.',
    },
    {
      question: 'What happens if I lose my room key?',
      answer: 'If you lose your key, please inform the warden immediately. For safety and lock integrity, a key-and-cylinder replacement fee of ₹500 is charged to issue a new set.',
    },
    {
      question: 'Can I change my room later?',
      answer: 'Yes, room change requests can be raised after completing 1 month of stay. Allotment is subject to room availability, sharing category vacancy, and adjustment of the rent differential.',
    },
  ];

  return (
    <div className="w-full bg-bg-warm py-2 pt-[80px] pb-10">
      
      {/* 1. HERO SECTION */}
      <section className="relative h-[480px] flex items-center justify-center overflow-hidden">
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
          <nav className="flex items-center justify-center space-x-2 text-xs md:text-sm font-sans font-semibold tracking-wide text-accent mb-8 select-none uppercase">
            <button 
              onClick={onNavigateToHome}
              className="hover:text-white transition-colors duration-200 cursor-pointer"
            >
              Home
            </button>
            <span className="text-white/40">/</span>
            <span className="text-white/90">Rules & Regulations</span>
          </nav>

          <h1 className="font-display font-extrabold text-4xl sm:text-5xl md:text-6xl text-white leading-tight tracking-tight mb-8">
            Rules & Regulations
          </h1>

          <p className="font-sans text-sm sm:text-base md:text-lg text-white/80 leading-relaxed max-w-2xl mx-auto font-medium mb-6">
            Everything you need to know before joining Unitas Home. Our guidelines are designed to ensure a safe, comfortable, respectful, and premium co-living experience for every resident.
          </p>

          {/* Last Updated Information Row with divider */}
          <div className="flex flex-col items-center">
            <div className="w-16 h-[1px] bg-white/15 my-4"></div>
            <div className="inline-flex items-center space-x-2 text-white/60 text-xs sm:text-sm font-sans font-medium select-none">
              <Calendar className="w-3.5 h-3.5 text-white/50" />
              <span>Last Updated: 11 July 2026</span>
            </div>
          </div>
        </div>
      </section>

      {/* 2. QUICK POLICY SUMMARY */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-16 relative z-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 md:gap-6">
          {policySummaries.map((summary, idx) => {
            const Icon = summary.icon;
            return (
              <div 
                key={idx}
                className="bg-white rounded-[20px] p-6 border border-border-light/60 luxury-card-shadow flex flex-col items-start text-left hover:border-primary/20 transition-all duration-[250ms] ease-out md:hover:-translate-y-[5px] md:hover:shadow-[0_12px_28px_rgba(0,0,0,0.08)] group"
              >
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 ${summary.color} transition-transform duration-300 group-hover:scale-105`}>
                  <Icon className="w-6 h-6 shrink-0" />
                </div>
                <span className="font-sans text-xs font-bold text-slate-gray tracking-wider uppercase mb-1">
                  {summary.title}
                </span>
                <span className="font-display font-extrabold text-lg sm:text-xl text-charcoal mb-2 leading-tight">
                  {summary.value}
                </span>
                <p className="font-sans text-xs text-slate-gray leading-relaxed font-medium mt-auto">
                  {summary.description}
                </p>
              </div>
            );
          })}
        </div>
      </section>

      {/* 3. INTRODUCTION */}
      <section className="max-w-4xl mx-auto px-6 py-16 md:py-20 text-center">
        <h2 className="font-display font-extrabold text-2xl sm:text-3xl text-charcoal mb-6 leading-tight">
          Living Together, Respectfully
        </h2>
        <div className="w-16 h-1 bg-accent mx-auto mb-6 rounded-full"></div>
        <p className="font-sans text-sm sm:text-base md:text-lg text-slate-gray leading-relaxed max-w-3xl mx-auto font-medium">
          Welcome to Unitas Home! We believe co-living is more than just sharing a space—it's about building a warm, vibrant community of students and working professionals. To make sure everyone enjoys a peaceful, comfortable, and safe stay, we have created this Resident Handbook. Rather than a set of rigid legal restrictions, think of these guidelines as a collective commitment to mutual respect, shared responsibility, and safety. By respecting each other's space and cooperating with our on-site team, you help create a supportive home where everyone can thrive, study, and relax in harmony.
        </p>
      </section>

      {/* 4. HOUSE RULES BY CATEGORY */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="text-center mb-10 md:mb-14">
          <h2 className="font-display font-extrabold text-2xl sm:text-3xl text-charcoal mb-3">
            House Rules by Category
          </h2>
          <p className="font-sans text-sm sm:text-base text-slate-gray max-w-xl mx-auto">
            Our house rules are designed simple, scannable, and helpful to keep the community organized.
          </p>
        </div>

        {/* Desktop View: Beautiful Grid of Premium Cards */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="hidden md:grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {ruleCategories.map((cat, idx) => {
            const Icon = cat.icon;
            return (
              <motion.div 
                key={idx}
                variants={cardVariants}
                className="bg-white rounded-[24px] p-7 border border-border-light/60 luxury-card-shadow hover:border-primary/25 luxury-card-hover text-left flex flex-col"
              >
                <div className="flex items-center space-x-3.5 mb-5">
                  <div className={`w-11 h-11 rounded-lg flex items-center justify-center shrink-0 ${cat.color}`}>
                    <Icon className="w-5.5 h-5.5" />
                  </div>
                  <h3 className="font-display font-extrabold text-base lg:text-lg text-charcoal leading-tight">
                    {cat.title}
                  </h3>
                </div>
                <ul className="space-y-2.5 font-sans text-sm text-slate-gray leading-[1.7] font-medium flex-1">
                  {cat.bullets.map((bullet, bIdx) => (
                    <li key={bIdx} className="flex items-start space-x-2.5">
                      <span className="text-primary font-bold text-base leading-none mt-0.5">•</span>
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Mobile View: High-Performance Accordion (Only one open at a time) */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="block md:hidden space-y-3.5 max-w-md mx-auto"
        >
          {ruleCategories.map((cat, idx) => {
            const Icon = cat.icon;
            const isOpen = openCategory === idx;
            return (
              <motion.div 
                key={idx}
                variants={cardVariants}
                className="bg-white rounded-[18px] border border-border-light/60 luxury-card-shadow overflow-hidden text-left"
              >
                {/* Accordion Trigger Header */}
                <button
                  onClick={() => handleToggleCategory(idx)}
                  className="w-full px-5 py-4 flex items-center justify-between hover:bg-black/[0.01] transition-colors focus:outline-none cursor-pointer"
                  aria-expanded={isOpen}
                >
                  <div className="flex items-center space-x-3">
                    <div className={`w-10 h-10 rounded-lg flex items-center justify-center shrink-0 ${cat.color}`}>
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="font-display font-bold text-sm text-charcoal leading-none">
                      {cat.title}
                    </span>
                  </div>
                  <ChevronDown className={`w-5 h-5 text-slate-gray/80 transition-transform duration-300 ${isOpen ? 'rotate-180 text-primary' : 'rotate-0'}`} />
                </button>

                {/* Accordion Content with smooth animate presence */}
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25, ease: 'easeInOut' }}
                    >
                      <div className="px-5 pb-5 pt-1 border-t border-border-light/30">
                        <ul className="space-y-2.5 font-sans text-xs sm:text-sm text-slate-gray leading-[1.7] font-medium">
                          {cat.bullets.map((bullet, bIdx) => (
                            <li key={bIdx} className="flex items-start space-x-2">
                              <span className="text-primary font-bold text-sm leading-none mt-0.5">•</span>
                              <span>{bullet}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </motion.div>
      </section>

      {/* 5. CHARGES & PENALTIES */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20 text-center">
        <h2 className="font-display font-extrabold text-2xl sm:text-3xl text-charcoal mb-4">
          Charges & Penalties
        </h2>
        <p className="font-sans text-sm sm:text-base text-slate-gray max-w-xl mx-auto mb-8">
          To maintain fairness and protect community properties, the following guidelines are established for special situations.
        </p>

        {/* Desktop & Tablet View: Premium Table (768px and above) */}
        <div className="hidden md:block bg-white rounded-[24px] border border-border-light/60 luxury-card-shadow overflow-hidden text-left w-full">
          <div className="overflow-x-auto">
            <table className="w-full min-w-[500px] border-collapse">
              <thead>
                <tr className="bg-gradient-to-r from-[#ECF9F8] to-[#E2F7F5] border-b border-border-light">
                  <th className="px-6 py-4.5 font-display font-extrabold text-[#0B6E70] text-xs sm:text-sm uppercase tracking-wider text-left w-2/3">
                    Situation
                  </th>
                  <th className="px-6 py-4.5 font-display font-extrabold text-[#0B6E70] text-xs sm:text-sm uppercase tracking-wider text-left w-1/3">
                    Charge
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border-light/50 font-sans text-sm text-slate-gray font-medium">
                {penalties.map((penalty, idx) => (
                  <tr 
                    key={idx}
                    className="odd:bg-white even:bg-[#F7FBFB] md:hover:bg-[#EFF9F8] transition-colors duration-[200ms] ease-out"
                  >
                    <td className="px-6 py-4 text-charcoal font-semibold leading-snug">
                      {penalty.situation}
                    </td>
                    <td className="px-6 py-4 text-[#0F8B8D] font-bold leading-snug">
                      {penalty.charge}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Mobile View: Premium Responsive Cards (Below 768px) */}
        <div className="block md:hidden space-y-4 max-w-md mx-auto text-left">
          {penalties.map((penalty, idx) => {
            const { value, description } = parseCharge(penalty.charge);
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.3, ease: 'easeOut' }}
                className="bg-white rounded-[18px] p-5 sm:p-6 border border-border-light/60 luxury-card-shadow flex flex-col space-y-4"
              >
                {/* Situation Row */}
                <div className="flex flex-col space-y-1.5">
                  <div className="flex items-center space-x-2 text-[#0F8B8D]">
                    <FileText className="w-4 h-4 shrink-0" />
                    <span className="font-display font-semibold text-xs uppercase tracking-wider">
                      Situation
                    </span>
                  </div>
                  <p className="font-sans font-bold text-[17px] text-charcoal leading-snug">
                    {penalty.situation}
                  </p>
                </div>

                {/* Charge Row */}
                <div className="flex flex-col space-y-1.5 pt-1 border-t border-border-light/20">
                  <div className="flex items-center space-x-2 text-[#F4B400]">
                    <Wallet className="w-4 h-4 shrink-0" />
                    <span className="font-display font-semibold text-xs uppercase tracking-wider">
                      Charge
                    </span>
                  </div>
                  <div className="flex flex-col">
                    <p className="font-sans font-bold text-[17px] text-charcoal leading-snug">
                      {value}
                    </p>
                    {description && (
                      <p className="font-sans font-normal text-sm text-slate-gray mt-1 leading-normal">
                        {description}
                      </p>
                    )}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* 6. RESIDENT RESPONSIBILITIES */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="text-center mb-10">
          <h2 className="font-display font-extrabold text-2xl sm:text-3xl text-charcoal mb-3">
            Every Resident Helps Build a Better Community
          </h2>
          <p className="font-sans text-sm sm:text-base text-slate-gray max-w-xl mx-auto">
            Small daily habits of care and respect make the co-living atmosphere incredible for everyone.
          </p>
        </div>

        <div className="bg-white rounded-[24px] border border-border-light/60 luxury-card-shadow p-6 sm:p-8 md:p-10 max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4">
            {responsibilities.map((resp, idx) => (
              <div 
                key={idx}
                className="flex items-start space-x-3.5 py-2 text-left"
              >
                <CheckCircle2 className="w-5.5 h-5.5 text-[#0F8B8D] shrink-0 mt-0.5" />
                <span className="font-sans text-sm sm:text-base text-charcoal font-semibold leading-relaxed">
                  {resp}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6.5 WHY THESE RULES EXIST */}
      <section className="max-w-3xl mx-auto px-6 py-16 md:py-20 text-center">
        <div className="w-12 h-12 rounded-2xl bg-[#ECF9F8] text-[#0F8B8D] flex items-center justify-center mx-auto mb-6">
          <Heart className="w-6 h-6" />
        </div>
        <h2 className="font-display font-extrabold text-2xl sm:text-3xl text-charcoal mb-4">
          Why These Rules Exist
        </h2>
        <div className="w-12 h-1 bg-accent mx-auto mb-6 rounded-full"></div>
        <p className="font-sans text-sm sm:text-base md:text-lg text-slate-gray leading-relaxed max-w-2xl mx-auto font-medium">
          These rules are designed to create a safe, respectful, and enjoyable co-living experience for every resident at Unitas Home. They help maintain cleanliness, security, privacy, and a peaceful environment so that students and working professionals can live comfortably together.
        </p>
      </section>

      {/* 7. FREQUENTLY ASKED QUESTIONS */}
      <section className="max-w-4xl mx-auto px-6 py-16 md:py-20 text-center">
        <div className="flex items-center justify-center space-x-2.5 mb-3.5">
          <HelpCircle className="w-6 h-6 text-accent shrink-0" />
          <h2 className="font-display font-extrabold text-2xl sm:text-3xl text-charcoal">
            Frequently Asked Questions
          </h2>
        </div>
        <p className="font-sans text-sm sm:text-base text-slate-gray max-w-xl mx-auto mb-10">
          Quick answers to the common questions raised about our resident guidelines.
        </p>

        {/* Premium FAQ Accordion */}
        <div className="space-y-4 text-left">
          {faqs.map((faq, idx) => {
            const isOpen = openFaq === idx;
            return (
              <div 
                key={idx}
                className={`rounded-[20px] border border-border-light/60 luxury-card-shadow overflow-hidden transition-all duration-300 ${isOpen ? 'bg-[#FFFDF6] border-l-4 border-l-[#F4B400]' : 'bg-white border-l-0'}`}
              >
                <button
                  onClick={() => handleToggleFaq(idx)}
                  className="w-full px-6 py-5 flex items-center justify-between text-left focus:outline-none cursor-pointer hover:bg-black/[0.01]"
                  aria-expanded={isOpen}
                >
                  <span className="font-display font-bold text-sm sm:text-base text-charcoal pr-4">
                    {faq.question}
                  </span>
                  <ChevronDown className={`w-5 h-5 text-slate-gray/80 shrink-0 transition-transform duration-300 ${isOpen ? 'rotate-180 text-[#0F8B8D]' : 'rotate-0'}`} />
                </button>
                
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25, ease: 'easeInOut' }}
                    >
                      <div className="px-6 pb-5 pt-1 border-t border-border-light/30 text-sm font-sans font-medium text-slate-gray leading-relaxed">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </section>

      {/* 8. IMPORTANT DISCLAIMER */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-2">
        <div className="bg-[#FFFDF0] border-l-[5px] border-[#F4B400] rounded-r-[20px] p-8 sm:p-10 text-left luxury-card-shadow flex items-start space-x-4">
          <AlertTriangle className="w-7 h-7 sm:w-8 sm:h-8 text-[#F4B400] shrink-0 mt-0.5" />
          <div className="flex-1">
            <h4 className="font-display font-extrabold text-sm sm:text-base text-charcoal mb-2 leading-tight">
              Important Notice
            </h4>
            <p className="font-sans text-xs sm:text-sm text-slate-gray font-semibold leading-relaxed">
              These guidelines are designed to maintain a safe, respectful, and comfortable environment for all residents. Unitas Home reserves the right to update these policies whenever necessary. Residents are expected to follow all applicable house rules.
            </p>
          </div>
        </div>
      </section>

      {/* 9. FINAL CTA SECTION */}
      <section className="max-w-4xl mx-auto px-6 py-20 md:py-24 text-center">
        <h2 className="font-display font-extrabold text-2xl sm:text-3xl text-charcoal mb-4">
          Need Assistance?
        </h2>
        <h3 className="font-display font-extrabold text-xl sm:text-2xl text-slate-gray mb-3 leading-tight">
          Still Have Questions?
        </h3>
        <p className="font-sans text-sm sm:text-base text-slate-gray max-w-xl mx-auto mb-8 font-medium">
          Our team is happy to explain every policy before you join.
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
            href="https://wa.me/919456385202?text=Hi%20Unitas%20Home%2C%20I%20have%20questions%20regarding%20the%20house%20rules%20and%20regulations."
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
