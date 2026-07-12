/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Phone, 
  Calendar, 
  FileText, 
  CheckCircle2, 
  ShieldAlert, 
  UserCheck, 
  Globe, 
  HelpCircle, 
  AlertTriangle,
  ArrowRight,
  ChevronDown,
  Lock,
  DollarSign,
  Scale,
  ExternalLink,
  MessageSquare,
  BookOpen,
  Eye,
  Briefcase,
  Users,
  Compass,
  Mail
} from 'lucide-react';

interface TermsOfServiceProps {
  onBookVisit: () => void;
  onNavigateToHome: () => void;
}

const sections = [
  { id: 'acceptance', label: 'Acceptance of Terms', icon: CheckCircle2 },
  { id: 'usage', label: 'Website Usage', icon: Globe },
  { id: 'bookings', label: 'Booking & Confirmation', icon: Calendar },
  { id: 'pricing', label: 'Pricing & Payments', icon: DollarSign },
  { id: 'responsibilities', label: 'User Responsibilities', icon: UserCheck },
  { id: 'intellectual', label: 'Intellectual Property', icon: FileText },
  { id: 'third-party', label: 'Third-Party Services', icon: ExternalLink },
  { id: 'liability', label: 'Limitation of Liability', icon: ShieldAlert },
  { id: 'updates', label: 'Policy Updates', icon: AlertTriangle },
  { id: 'governing-law', label: 'Governing Law', icon: Scale },
  { id: 'contact-terms', label: 'Contact Information', icon: FileText }
];

export default function TermsOfService({ onBookVisit, onNavigateToHome }: TermsOfServiceProps) {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [activeSection, setActiveSection] = useState('acceptance');
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  // Track scroll progress for reading bar
  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (totalHeight > 0) {
        setScrollProgress((window.scrollY / totalHeight) * 100);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Intersection Observer for sticky ToC
  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '-20% 0px -60% 0px',
      threshold: 0
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    }, observerOptions);

    sections.forEach((sec) => {
      const el = document.getElementById(sec.id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 100;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  const snapshotCards = [
    {
      icon: CheckCircle2,
      title: 'Acceptance of Terms',
      description: 'By browsing and using this website, you explicitly agree to follow our defined Terms of Service.',
      color: 'text-[#0F8B8D] bg-[#ECF9F8]'
    },
    {
      icon: Calendar,
      title: 'Booking Requests',
      description: 'Form submission logs scheduled walkthroughs, verified and confirmed only upon manager authorization.',
      color: 'text-[#F4B400] bg-[#FFFBEB]'
    },
    {
      icon: DollarSign,
      title: 'Payments & Booking',
      description: 'All rent and security deposit amounts are discussed and formalized transparently during onboarding.',
      color: 'text-[#0F8B8D] bg-[#ECF9F8]'
    },
    {
      icon: UserCheck,
      title: 'User Responsibilities',
      description: 'Visitors are required to supply genuine, accurate details and browse our modules respectfully.',
      color: 'text-[#F4B400] bg-[#FFFBEB]'
    },
    {
      icon: Globe,
      title: 'Website Usage',
      description: 'You are permitted to browse and leverage this website exclusively for lawful and genuine inquiries.',
      color: 'text-[#0F8B8D] bg-[#ECF9F8]'
    },
    {
      icon: HelpCircle,
      title: 'Need Help?',
      description: 'Our digital support team is always available to clear any queries regarding house rules or guidelines.',
      color: 'text-[#F4B400] bg-[#FFFBEB]'
    }
  ];

  const commitmentCards = [
    {
      icon: Scale,
      title: 'Fair Policies',
      description: 'We strive to keep our onboarding, reservation holds, and living policies transparent, legal, and straightforward.'
    },
    {
      icon: Users,
      title: 'Respect for Every Resident',
      description: 'Every digital walkthrough pass, tour schedule, and room reservation request is handled with top professionalism.'
    },
    {
      icon: MessageSquare,
      title: 'Clear Communication',
      description: 'We outline rent, sharing occupancy details, and safety regulations clearly before any onboarding agreements are signed.'
    },
    {
      icon: Compass,
      title: 'Resident-First Approach',
      description: 'Our central aim remains providing a safe, ultra-comfortable, and highly trustworthy co-living atmosphere for everyone.'
    }
  ];

  const faqs = [
    {
      question: 'Can these Terms change?',
      answer: 'Yes, we periodically update these Terms of Service to reflect shifts in regional legislation, operational practices, or website tools. We indicate the latest revision date clearly at the top of this page.'
    },
    {
      question: 'Is submitting a booking request a confirmed reservation?',
      answer: 'No. Submitting an online tour pass or visit booking request lets us block a coordinate time slot for a physical walkthrough. A room reservation is only locked and finalized after paying the security deposit and completing formal residency paperwork.'
    },
    {
      question: 'Who owns the website content?',
      answer: 'All graphics, original photography, room mockups, textual write-ups, brand badges, and code layouts displayed on this website are the intellectual property of Unitas Home and protected under national copyright regulations.'
    },
    {
      question: 'Can pricing change?',
      answer: 'Rent pricing and occupancy tariffs display seasonal baseline ranges. While we try to keep online parameters updated, the final pricing parameters are validated and confirmed explicitly on paper prior to lock-in.'
    },
    {
      question: 'What if information on the website changes?',
      answer: 'We strive to keep all room galleries, facility logs, and structural amenities highly accurate. However, minor on-property variations may occur. Real-time details are verified thoroughly during on-property tour visits.'
    },
    {
      question: 'How can I contact Unitas Home regarding these terms?',
      answer: 'For direct queries or formal legal clarifications, please connect with our administrative coordinator at unitashomeuk@gmail.com or via telephone on +91 94563 85202.'
    }
  ];

  return (
    <div className="w-full bg-[#FCFCF8] py-2 pt-[80px] pb-10">
      {/* Reading Progress Bar */}
      <div 
        className="fixed top-0 left-0 h-1 bg-[#0F8B8D] z-50 transition-all duration-100 ease-out" 
        style={{ width: `${scrollProgress}%` }}
        aria-hidden="true"
      />

      {/* 1. HERO SECTION */}
      <section className="relative h-[480px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://lh3.googleusercontent.com/gps-cs-s/APNQkAEQDDQB5ATVtyb79hfXIw6rxQ3goPe-c-PkkC4IISw4Hfc6ZUY4jgJsXu6X9CrDoM8tbdiz6oWRYTZtRerDCkc6XIM7AyUZIVEjK5_g6COy67r-jeua13KILpi4axL4hs4gNjhC=s1360-w1360-h1020-rw"
            alt="Unitas Home Lounge"
            title="Unitas Home Lounge"
            loading="lazy"
            decoding="async"
            className="w-full h-full object-cover object-center scale-[1.02] brightness-[0.75]"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/60 to-black/75"></div>
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center text-white">
          <nav className="flex items-center justify-center space-x-2 text-xs md:text-sm font-sans font-semibold tracking-wide text-[#F4B400] mb-8 select-none uppercase">
            <button 
              onClick={onNavigateToHome}
              className="hover:text-white transition-colors duration-200 cursor-pointer"
            >
              Home
            </button>
            <span className="text-white/40">/</span>
            <span className="text-white/90">Terms of Service</span>
          </nav>

          <span className="font-sans text-xs font-bold text-[#F4B400] tracking-widest uppercase mb-3 block">
            LEGAL INFORMATION
          </span>

          <h1 className="font-display font-extrabold text-4xl sm:text-5xl md:text-6xl text-white leading-tight tracking-tight mb-8">
            Terms of Service
          </h1>

          <p className="font-sans text-sm sm:text-base md:text-lg text-white/80 leading-relaxed max-w-2xl mx-auto font-medium mb-6">
            Please read these Terms of Service carefully before using the Unitas Home website or submitting any booking, inquiry, or reservation request.
          </p>

          <div className="flex flex-col items-center">
            <div className="w-16 h-[1px] bg-white/15 my-4"></div>
            <div className="inline-flex items-center space-x-2 text-white/60 text-xs sm:text-sm font-sans font-medium select-none bg-white/5 px-4 py-1.5 rounded-full border border-white/10">
              <Calendar className="w-3.5 h-3.5 text-white/50" />
              <span>Last Updated: 11 July 2026</span>
            </div>
          </div>
        </div>
      </section>

      {/* 2. QUICK TERMS SNAPSHOT */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20 text-center">
        <span className="font-sans text-xs font-bold text-[#0F8B8D] tracking-wider uppercase mb-2 block">
          Overview
        </span>
        <h2 className="font-display font-extrabold text-2xl sm:text-3xl text-[#1F2937] mb-3">
          Quick Terms Snapshot
        </h2>
        <p className="font-sans text-sm sm:text-base text-[#6B7280] leading-relaxed max-w-xl mx-auto mb-12 font-medium">
          A high-level summary of our digital terms before you proceed to the full legal guidelines.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {snapshotCards.map((card, idx) => {
            const IconComponent = card.icon;
            return (
              <div 
                key={idx}
                className="bg-white rounded-[20px] p-6 border border-[#E5E7EB]/60 luxury-card-shadow flex flex-col items-start text-left hover:border-[#0F8B8D]/20 transition-all duration-[250ms] ease-out md:hover:-translate-y-[5px] md:hover:shadow-[0_12px_28px_rgba(0,0,0,0.08)] group h-full"
              >
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 ${card.color} transition-transform duration-300 group-hover:scale-105`}>
                  <IconComponent className="w-5 h-5 shrink-0" />
                </div>
                <h3 className="font-display font-extrabold text-[#1F2937] text-base mb-2">
                  {card.title}
                </h3>
                <p className="font-sans text-sm text-[#6B7280] leading-relaxed font-medium">
                  {card.description}
                </p>
              </div>
            );
          })}
        </div>
      </section>

      {/* 3. OUR COMMITMENT TO FAIR SERVICE */}
      <section className="bg-[#ECF9F8]/20 border-y border-[#E5E7EB]/30 py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-3xl mx-auto mb-16">
            <span className="font-sans text-xs font-bold text-[#0F8B8D] tracking-wider uppercase mb-2 block">
              Core Principles
            </span>
            <h2 className="font-display font-extrabold text-2xl sm:text-3xl text-[#1F2937] mb-4">
              Our Commitment to Fair Service
            </h2>
            <div className="w-12 h-1 bg-[#F4B400] mx-auto mb-6 rounded-full"></div>
            <p className="font-sans text-sm sm:text-base text-[#6B7280] leading-relaxed max-w-2xl mx-auto font-medium">
              We believe legal policies should be transparent, fair, and easy to understand. We reject confusing visual clutter and small-print loopholes.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {commitmentCards.map((card, idx) => {
              const IconComponent = card.icon;
              return (
                <div 
                  key={idx}
                  className="bg-white rounded-[20px] p-6 border border-[#E5E7EB]/60 luxury-card-shadow flex flex-col items-center text-center hover:border-[#0F8B8D]/20 transition-all duration-[250ms] ease-out md:hover:-translate-y-[5px] md:hover:shadow-[0_12px_28px_rgba(0,0,0,0.08)] group h-full"
                >
                  <div className="w-12 h-12 rounded-xl bg-[#ECF9F8] text-[#0F8B8D] flex items-center justify-center mb-4 shrink-0 transition-transform duration-300 group-hover:scale-105">
                    <IconComponent className="w-5 h-5" />
                  </div>
                  <h3 className="font-display font-bold text-[#1F2937] text-sm sm:text-base mb-2">
                    {card.title}
                  </h3>
                  <p className="font-sans text-xs sm:text-sm text-[#6B7280] leading-relaxed font-medium">
                    {card.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 4. PAGE INTRODUCTION */}
      <section className="max-w-3xl mx-auto px-6 py-16 text-center">
        <div className="w-12 h-12 rounded-2xl bg-[#FFFBEB] text-[#F4B400] flex items-center justify-center mx-auto mb-6">
          <BookOpen className="w-6 h-6" />
        </div>
        <h2 className="font-display font-extrabold text-2xl sm:text-3xl text-[#1F2937] mb-4">
          Understanding These Terms
        </h2>
        <div className="w-12 h-1 bg-[#0F8B8D] mx-auto mb-6 rounded-full"></div>
        <p className="font-sans text-sm sm:text-base md:text-lg text-[#6B7280] leading-relaxed max-w-2xl mx-auto font-medium">
          Welcome to Unitas Home. These Terms of Service ("Terms") govern your use of our official website, online scheduling mechanisms, reservation inquiries, and digital walkthrough requests. By accessing or interacting with our online resources, you confirm your acceptance of these Terms. Our central aim is to provide a highly respectful, secure, and transparent digital journey for both prospective students and on-property professionals.
        </p>
      </section>

      {/* 5 & 6. TERMS SECTIONS & TABLE OF CONTENTS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-12 items-start">
          
          {/* Main Terms Content (3 cols) */}
          <div className="lg:col-span-3 space-y-16">
            
            {/* Section: Acceptance */}
            <motion.div 
              id="acceptance"
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, ease: 'easeOut' }}
              className="scroll-mt-24"
            >
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-10 h-10 rounded-lg bg-[#ECF9F8] text-[#0F8B8D] flex items-center justify-center shrink-0">
                  <CheckCircle2 className="w-5 h-5" />
                </div>
                <h2 className="font-display font-extrabold text-xl sm:text-2xl text-[#1F2937]">
                  1. Acceptance of Terms
                </h2>
              </div>
              <div className="w-full h-[1px] bg-[#E5E7EB] my-5" />
              <p className="font-sans text-sm sm:text-base text-[#6B7280] leading-relaxed font-medium">
                By entering, browsing, or submitting details on our digital portal (https://unitashome.in), you acknowledge that you have read, understood, and agreed to be legally bound by these Terms of Service, along with our active Privacy Policy and the Resident House Rules. If you disagree with any portion of these provisions, you should immediately halt your browsing session and avoid submitting any form inputs.
              </p>
            </motion.div>

            {/* Section: Website Usage */}
            <motion.div 
              id="usage"
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, ease: 'easeOut' }}
              className="scroll-mt-24"
            >
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-10 h-10 rounded-lg bg-[#ECF9F8] text-[#0F8B8D] flex items-center justify-center shrink-0">
                  <Globe className="w-5 h-5" />
                </div>
                <h2 className="font-display font-extrabold text-xl sm:text-2xl text-[#1F2937]">
                  2. Website Usage
                </h2>
              </div>
              <div className="w-full h-[1px] bg-[#E5E7EB] my-5" />
              <div className="font-sans text-sm sm:text-base text-[#6B7280] space-y-4 leading-relaxed font-medium">
                <p>
                  We grant you a non-exclusive, non-transferable, and revocable privilege to access our website strictly for seeking co-living information, reading blogs, and scheduling walkthrough visits. You are strictly forbidden from:
                </p>
                <ul className="space-y-3 pl-4 list-none">
                  <li className="flex items-start space-x-2.5">
                    <span className="text-[#0F8B8D] font-bold text-base leading-none mt-1">•</span>
                    <span>Leveraging website elements for fraudulent activities, fake reservation bookings, or marketing inquiries.</span>
                  </li>
                  <li className="flex items-start space-x-2.5">
                    <span className="text-[#0F8B8D] font-bold text-base leading-none mt-1">•</span>
                    <span>Using digital scrapers, automated spiders, bots, or unauthorized code to aggregate media or student data.</span>
                  </li>
                  <li className="flex items-start space-x-2.5">
                    <span className="text-[#0F8B8D] font-bold text-base leading-none mt-1">•</span>
                    <span>Uploading corrupted media, malicious scripts, or files designed to degrade website loading speeds.</span>
                  </li>
                </ul>
              </div>
            </motion.div>

            {/* Section: Bookings */}
            <motion.div 
              id="bookings"
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, ease: 'easeOut' }}
              className="scroll-mt-24"
            >
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-10 h-10 rounded-lg bg-[#ECF9F8] text-[#0F8B8D] flex items-center justify-center shrink-0">
                  <Calendar className="w-5 h-5" />
                </div>
                <h2 className="font-display font-extrabold text-xl sm:text-2xl text-[#1F2937]">
                  3. Booking Requests & Tour Confirmations
                </h2>
              </div>
              <div className="w-full h-[1px] bg-[#E5E7EB] my-5" />
              <div className="font-sans text-sm sm:text-base text-[#6B7280] space-y-4 leading-relaxed font-medium">
                <p>
                  Unitas Home facilitates on-site walkthrough scheduling through interactive dashboard prompts. It is vital to note:
                </p>
                <ul className="space-y-3 pl-4 list-none">
                  <li className="flex items-start space-x-2.5">
                    <span className="text-[#0F8B8D] font-bold text-base leading-none mt-1">•</span>
                    <span><strong>Walkthrough pass requests:</strong> Digital scheduling logs block coordinate slots but do not represent confirmed room assignments.</span>
                  </li>
                  <li className="flex items-start space-x-2.5">
                    <span className="text-[#0F8B8D] font-bold text-base leading-none mt-1">•</span>
                    <span><strong>Manager Validation:</strong> A physical room lease is only locked and finalized after a thorough in-person identity verification process.</span>
                  </li>
                  <li className="flex items-start space-x-2.5">
                    <span className="text-[#0F8B8D] font-bold text-base leading-none mt-1">•</span>
                    <span><strong>Capacity Caps:</strong> Room categories remain subject to immediate localized occupancy levels. Walkthrough passes do not protect vacant slots dynamically.</span>
                  </li>
                </ul>
              </div>
            </motion.div>

            {/* Section: Pricing */}
            <motion.div 
              id="pricing"
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, ease: 'easeOut' }}
              className="scroll-mt-24"
            >
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-10 h-10 rounded-lg bg-[#ECF9F8] text-[#0F8B8D] flex items-center justify-center shrink-0">
                  <DollarSign className="w-5 h-5" />
                </div>
                <h2 className="font-display font-extrabold text-xl sm:text-2xl text-[#1F2937]">
                  4. Pricing & Payments
                </h2>
              </div>
              <div className="w-full h-[1px] bg-[#E5E7EB] my-5" />
              <div className="font-sans text-sm sm:text-base text-[#6B7280] space-y-4 leading-relaxed font-medium">
                <p>
                  All rental pricing, occupancy models, security deposit values (typically ₹5,000, fully refundable), and monthly utility guidelines are detailed transparently before resident check-in:
                </p>
                <p>
                  <strong>Security Deposits:</strong> Are returned in full after completing check-out protocols, subject to a collaborative inspection of the room and associated furnishings.
                </p>
                <p>
                  <strong>Monthly Payments:</strong> Must be submitted on or before the due date agreed during onboarding. Late payments are subject to standard oversight penalties as highlighted in the resident code of conduct.
                </p>
              </div>
            </motion.div>

            {/* Section: User Responsibilities */}
            <motion.div 
              id="responsibilities"
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, ease: 'easeOut' }}
              className="scroll-mt-24"
            >
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-10 h-10 rounded-lg bg-[#ECF9F8] text-[#0F8B8D] flex items-center justify-center shrink-0">
                  <UserCheck className="w-5 h-5" />
                </div>
                <h2 className="font-display font-extrabold text-xl sm:text-2xl text-[#1F2937]">
                  5. User Responsibilities
                </h2>
              </div>
              <div className="w-full h-[1px] bg-[#E5E7EB] my-5" />
              <div className="font-sans text-sm sm:text-base text-[#6B7280] space-y-4 leading-relaxed font-medium">
                <p>
                  When utilizing our online scheduler or submitting support requests, you explicitly agree to:
                </p>
                <ul className="space-y-3 pl-4 list-none">
                  <li className="flex items-start space-x-2.5">
                    <span className="text-[#0F8B8D] font-bold text-base leading-none mt-1">•</span>
                    <span>Submit authentic, completely accurate, and updated contact numbers, and legal identification details.</span>
                  </li>
                  <li className="flex items-start space-x-2.5">
                    <span className="text-[#0F8B8D] font-bold text-base leading-none mt-1">•</span>
                    <span>Avoid attempting to breach or scan the security networks surrounding our servers or form data stores.</span>
                  </li>
                  <li className="flex items-start space-x-2.5">
                    <span className="text-[#0F8B8D] font-bold text-base leading-none mt-1">•</span>
                    <span>Acknowledge that any disruptive online activity or falsified bookings will yield immediate cancellation of scheduled site visits.</span>
                  </li>
                </ul>
              </div>
            </motion.div>

            {/* Section: Intellectual Property */}
            <motion.div 
              id="intellectual"
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, ease: 'easeOut' }}
              className="scroll-mt-24"
            >
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-10 h-10 rounded-lg bg-[#ECF9F8] text-[#0F8B8D] flex items-center justify-center shrink-0">
                  <FileText className="w-5 h-5" />
                </div>
                <h2 className="font-display font-extrabold text-xl sm:text-2xl text-[#1F2937]">
                  6. Intellectual Property
                </h2>
              </div>
              <div className="w-full h-[1px] bg-[#E5E7EB] my-5" />
              <p className="font-sans text-sm sm:text-base text-[#6B7280] leading-relaxed font-medium">
                All digital resources, high-definition photography, brand logos, code fragments, icon choices, structural blueprints, and custom-styled graphics loaded on this portal are the exclusive property of Unitas Home. Re-publishing, editing, scraping, or utilizing our physical property media for competing listings or advertising is strictly forbidden under copyright protection acts.
              </p>
            </motion.div>

            {/* Section: Third-Party Services */}
            <motion.div 
              id="third-party"
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, ease: 'easeOut' }}
              className="scroll-mt-24"
            >
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-10 h-10 rounded-lg bg-[#ECF9F8] text-[#0F8B8D] flex items-center justify-center shrink-0">
                  <ExternalLink className="w-5 h-5" />
                </div>
                <h2 className="font-display font-extrabold text-xl sm:text-2xl text-[#1F2937]">
                  7. Third-Party Services
                </h2>
              </div>
              <div className="w-full h-[1px] bg-[#E5E7EB] my-5" />
              <p className="font-sans text-sm sm:text-base text-[#6B7280] leading-relaxed font-medium">
                Our portal utilizes external secure systems (such as high-standard hosting clouds, analytics trackers, and direct WhatsApp routing scripts) to optimize connection quality. These external tools remain bound by separate standalone policies. Unitas Home holds no direct liability for any technical glitches, downtime, or script errors originating from third-party application servers.
              </p>
            </motion.div>

            {/* Section: Liability */}
            <motion.div 
              id="liability"
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, ease: 'easeOut' }}
              className="scroll-mt-24"
            >
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-10 h-10 rounded-lg bg-[#ECF9F8] text-[#0F8B8D] flex items-center justify-center shrink-0">
                  <ShieldAlert className="w-5 h-5" />
                </div>
                <h2 className="font-display font-extrabold text-xl sm:text-2xl text-[#1F2937]">
                  8. Limitation of Liability
                </h2>
              </div>
              <div className="w-full h-[1px] bg-[#E5E7EB] my-5" />
              <p className="font-sans text-sm sm:text-base text-[#6B7280] leading-relaxed font-medium">
                All details, structural maps, tour timings, and text blocks displayed on this portal are provided on an "as-is" and "as-available" baseline. Unitas Home makes no guarantees that our server will operate uninterrupted, error-free, or devoid of minor typographic anomalies. Under no scenario shall Unitas Home or its coordinators be held accountable for any indirect, incidental, or minor technical losses resulting from your web interaction.
              </p>
            </motion.div>

            {/* Section: Updates */}
            <motion.div 
              id="updates"
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, ease: 'easeOut' }}
              className="scroll-mt-24"
            >
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-10 h-10 rounded-lg bg-[#ECF9F8] text-[#0F8B8D] flex items-center justify-center shrink-0">
                  <AlertTriangle className="w-5 h-5" />
                </div>
                <h2 className="font-display font-extrabold text-xl sm:text-2xl text-[#1F2937]">
                  9. Policy Updates
                </h2>
              </div>
              <div className="w-full h-[1px] bg-[#E5E7EB] my-5" />
              <p className="font-sans text-sm sm:text-base text-[#6B7280] leading-relaxed font-medium">
                We reserve the exclusive privilege to update, edit, or adjust these Terms of Service without separate prior notification to web visitors. Active adjustments will carry the revised "Last Updated" timestamp prominently displayed on this legal portal. Continued interaction with our tour scheduling or website resources represents your agreement to the updated layout.
              </p>
            </motion.div>

            {/* Section: Governing Law */}
            <motion.div 
              id="governing-law"
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, ease: 'easeOut' }}
              className="scroll-mt-24"
            >
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-10 h-10 rounded-lg bg-[#ECF9F8] text-[#0F8B8D] flex items-center justify-center shrink-0">
                  <Scale className="w-5 h-5" />
                </div>
                <h2 className="font-display font-extrabold text-xl sm:text-2xl text-[#1F2937]">
                  10. Governing Law
                </h2>
              </div>
              <div className="w-full h-[1px] bg-[#E5E7EB] my-5" />
              <p className="font-sans text-sm sm:text-base text-[#6B7280] leading-relaxed font-medium">
                These digital Terms of Service, along with our physical lease contracts and on-property resident codes, are governed by the regional laws of Uttarakhand, India. Any official legal claims or judicial proceedings relating to web inquiries or room bookings shall fall exclusively under the jurisdiction of the competent courts in Dehradun, India.
              </p>
            </motion.div>

            {/* Section: Contact */}
            <motion.div 
              id="contact-terms"
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, ease: 'easeOut' }}
              className="scroll-mt-24"
            >
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-10 h-10 rounded-lg bg-[#ECF9F8] text-[#0F8B8D] flex items-center justify-center shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <h2 className="font-display font-extrabold text-xl sm:text-2xl text-[#1F2937]">
                  11. Contact Information
                </h2>
              </div>
              <div className="w-full h-[1px] bg-[#E5E7EB] my-5" />
              <div className="font-sans text-sm sm:text-base text-[#6B7280] space-y-6 leading-relaxed font-medium">
                <p>
                  For any support queries, official requests, walkthrough scheduling concerns, or structural terms explanations, please coordinate directly with our on-site management team:
                </p>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-2">
                  <div className="p-5 rounded-2xl border border-[#E5E7EB]/50 bg-white flex items-start space-x-3.5 luxury-card-shadow">
                    <div className="w-9 h-9 rounded-xl bg-[#ECF9F8] text-[#0F8B8D] flex items-center justify-center shrink-0">
                      <Mail className="w-4 h-4" />
                    </div>
                    <div>
                      <h4 className="font-display font-bold text-sm text-[#1F2937] mb-1">Email Our Desk</h4>
                      <a href="mailto:unitashomeuk@gmail.com" className="text-xs sm:text-sm text-[#0F8B8D] hover:underline transition-colors break-all">
                        unitashomeuk@gmail.com
                      </a>
                    </div>
                  </div>

                  <div className="p-5 rounded-2xl border border-[#E5E7EB]/50 bg-white flex items-start space-x-3.5 luxury-card-shadow">
                    <div className="w-9 h-9 rounded-xl bg-[#FFFBEB] text-[#F4B400] flex items-center justify-center shrink-0">
                      <Phone className="w-4 h-4" />
                    </div>
                    <div>
                      <h4 className="font-display font-bold text-sm text-[#1F2937] mb-1">Call Our Coordinator</h4>
                      <a href="tel:+919456385202" className="text-xs sm:text-sm text-[#F4B400] hover:underline transition-colors">
                        +91 94563 85202
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

          </div>

          {/* Sticky ToC Sidebar (Desktop Only) */}
          <div className="hidden lg:block lg:col-span-1 sticky top-32 self-start pl-4 border-l border-[#E5E7EB]">
            <h3 className="font-display font-extrabold text-xs text-[#0B6E70] uppercase tracking-wider mb-6 select-none">
              On This Page
            </h3>
            <ul className="space-y-4 font-sans text-sm font-semibold select-none">
              {sections.map((sec) => (
                <li key={sec.id}>
                  <button
                    onClick={() => scrollToSection(sec.id)}
                    className={`flex items-center space-x-2.5 text-left w-full group transition-all duration-200 cursor-pointer ${
                      activeSection === sec.id 
                        ? 'text-[#0F8B8D] translate-x-1.5' 
                        : 'text-[#6B7280] hover:text-[#1F2937] hover:translate-x-1'
                    }`}
                  >
                    <span className={`w-1.5 h-1.5 rounded-full transition-all duration-200 ${
                      activeSection === sec.id 
                        ? 'bg-[#0F8B8D] scale-125' 
                        : 'bg-transparent group-hover:bg-[#6B7280]/30'
                    }`} />
                    <span>{sec.label}</span>
                  </button>
                </li>
              ))}
            </ul>
          </div>

        </div>
      </section>

      {/* 8. IMPORTANT NOTICE BOX */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-2">
        <div className="bg-[#FFFDF0] border-l-[5px] border-[#F4B400] rounded-r-[20px] p-8 sm:p-10 text-left luxury-card-shadow flex items-start space-x-4">
          <AlertTriangle className="w-7 h-7 sm:w-8 sm:h-8 text-[#F4B400] shrink-0 mt-0.5" />
          <div className="flex-1">
            <h4 className="font-display font-extrabold text-sm sm:text-base text-[#1F2937] mb-2 leading-tight">
              Important Notice
            </h4>
            <p className="font-sans text-xs sm:text-sm text-[#6B7280] leading-relaxed font-semibold">
              These Terms of Service may be updated periodically to reflect changes in our services, operational practices, or legal requirements. Continued use of our website indicates acceptance of the latest version.
            </p>
          </div>
        </div>
      </section>

      {/* 9. FREQUENTLY ASKED QUESTIONS */}
      <section className="max-w-4xl mx-auto px-6 py-16 md:py-20 text-center">
        <div className="flex items-center justify-center space-x-2.5 mb-3.5">
          <HelpCircle className="w-5 h-5 text-[#0F8B8D]" />
          <span className="font-sans text-xs font-bold text-[#0F8B8D] tracking-wider uppercase">
            FAQS
          </span>
        </div>
        <h2 className="font-display font-extrabold text-2xl sm:text-3xl text-[#1F2937] mb-12">
          Frequently Asked Questions
        </h2>

        <div className="space-y-4 max-w-3xl mx-auto text-left">
          {faqs.map((faq, idx) => {
            const isOpen = openFaq === idx;
            return (
              <div 
                key={idx}
                className={`rounded-[20px] border border-[#E5E7EB]/60 luxury-card-shadow overflow-hidden transition-all duration-300 ${isOpen ? 'bg-[#FFFDF6] border-l-4 border-l-[#F4B400]' : 'bg-white border-l-0'}`}
              >
                <button
                  onClick={() => setOpenFaq(isOpen ? null : idx)}
                  className="w-full flex items-center justify-between p-5 text-left focus:outline-none cursor-pointer"
                  aria-expanded={isOpen}
                >
                  <span className="font-display font-extrabold text-sm sm:text-base text-[#1F2937] pr-4">
                    {faq.question}
                  </span>
                  <motion.div
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    transition={{ duration: 0.2 }}
                    className={`shrink-0 w-8 h-8 rounded-full flex items-center justify-center ${isOpen ? 'bg-[#FFFBEB] text-[#F4B400]' : 'bg-[#FCFCF8] text-[#6B7280]'}`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </motion.div>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25, ease: 'easeInOut' }}
                    >
                      <div className="px-5 pb-5 pt-1 border-t border-[#E5E7EB]/30">
                        <p className="font-sans text-xs sm:text-sm text-[#6B7280] leading-[1.7] font-medium">
                          {faq.answer}
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </section>

      {/* 10. NEED ASSISTANCE SECTION */}
      <section className="max-w-4xl mx-auto px-6 py-20 md:py-24 text-center">
        <h2 className="font-display font-extrabold text-2xl sm:text-3xl text-[#1F2937] mb-4">
          Need Assistance?
        </h2>
        <h3 className="font-display font-black text-xs text-[#0F8B8D] uppercase tracking-[1.5px] mb-4">
          Questions About Our Terms?
        </h3>
        <p className="font-sans text-sm sm:text-base text-[#6B7280] max-w-xl mx-auto mb-8 font-medium">
          If you need clarification regarding our policies, bookings, or website usage, our team is always happy to assist you.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 max-w-md mx-auto">
          <button
            onClick={onBookVisit}
            className="w-full sm:w-auto bg-[#F4B400] hover:bg-[#E0A300] text-[#1F2937] font-sans font-bold text-sm sm:text-base tracking-wide px-8 rounded-full shadow-[0_4px_14px_rgba(244,180,0,0.25)] hover:shadow-[0_8px_20px_rgba(244,180,0,0.4)] transition-all duration-250 ease-out flex items-center justify-center space-x-2.5 cursor-pointer hover:-translate-y-[2px] active:translate-y-0 h-[55px] shrink-0"
          >
            <Calendar className="w-5 h-5 text-[#1F2937]" />
            <span>Book a Visit</span>
          </button>

          <a
            href="https://wa.me/919456385202?text=Hi%20Unitas%20Home%2C%20I%20have%20questions%20regarding%20the%20terms%20of%20service."
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
            <span>Chat on WhatsApp</span>
          </a>
        </div>
      </section>

    </div>
  );
}
