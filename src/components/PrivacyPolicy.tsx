/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { 
  Phone, 
  Calendar, 
  Lock, 
  Shield, 
  MessageSquare, 
  Mail, 
  FileCheck, 
  UserCheck, 
  Cookie, 
  Share2, 
  AlertTriangle, 
  Heart,
  Globe,
  MapPin,
  Eye,
  CheckCircle2,
  ShieldCheck,
  ShieldOff
} from 'lucide-react';

interface PrivacyPolicyProps {
  onBookVisit: () => void;
  onNavigateToHome: () => void;
}

const sections = [
  { id: 'collect', label: 'Information We Collect', icon: FileCheck },
  { id: 'use', label: 'How We Use Information', icon: Eye },
  { id: 'cookies', label: 'Cookies & Tracking', icon: Cookie },
  { id: 'third-party', label: 'Third-Party Services', icon: Share2 },
  { id: 'security', label: 'Data Security', icon: Lock },
  { id: 'rights', label: 'Your Rights', icon: UserCheck },
  { id: 'contact-legal', label: 'Contact Information', icon: Mail }
];

export default function PrivacyPolicy({ onBookVisit, onNavigateToHome }: PrivacyPolicyProps) {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [activeSection, setActiveSection] = useState('collect');

  // Track scroll progress for the top reading bar
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

  // Intersection Observer to highlight active section in sticky Table of Contents
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
      const offset = 100; // Account for fixed header
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
      icon: Lock,
      title: 'Your Data is Protected',
      description: 'We take reasonable measures and follow standard industry protocols to protect your information.',
      color: 'text-[#0F8B8D] bg-[#ECF9F8]'
    },
    {
      icon: MessageSquare,
      title: 'WhatsApp Communication',
      description: 'We only contact you regarding your inquiry, scheduled walkthrough, or booking.',
      color: 'text-[#F4B400] bg-[#FFFBEB]'
    },
    {
      icon: Mail,
      title: 'No Spam Guarantee',
      description: 'We never send unnecessary promotional messages, newsletters, or sell your inbox details.',
      color: 'text-[#0F8B8D] bg-[#ECF9F8]'
    },
    {
      icon: Shield,
      title: 'Secure Booking Forms',
      description: 'Your submitted information is handled securely and stored with restricted credential access.',
      color: 'text-[#F4B400] bg-[#FFFBEB]'
    },
    {
      icon: UserCheck,
      title: 'Your Privacy Matters',
      description: 'You remain in full control of your personal information, visit schedules, and data deletions.',
      color: 'text-[#0F8B8D] bg-[#ECF9F8]'
    },
    {
      icon: Calendar,
      title: 'Updated Regularly',
      description: 'Our privacy practices are actively reviewed and updated whenever regulations or workflows change.',
      color: 'text-[#F4B400] bg-[#FFFBEB]'
    }
  ];

  return (
    <div className="w-full bg-[#FCFCF8] py-2 pt-[80px] pb-10">
      {/* 0. READING PROGRESS BAR */}
      <div 
        className="fixed top-0 left-0 h-1 bg-[#0F8B8D] z-50 transition-all duration-100 ease-out" 
        style={{ width: `${scrollProgress}%` }}
        aria-hidden="true"
      />

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
          <nav className="flex items-center justify-center space-x-2 text-xs md:text-sm font-sans font-semibold tracking-wide text-[#F4B400] mb-8 select-none uppercase">
            <button 
              onClick={onNavigateToHome}
              className="hover:text-white transition-colors duration-200 cursor-pointer"
            >
              Home
            </button>
            <span className="text-white/40">/</span>
            <span className="text-white/90">Privacy Policy</span>
          </nav>

          <span className="font-sans text-xs font-bold text-[#F4B400] tracking-widest uppercase mb-3 block">
            LEGAL INFORMATION
          </span>

          <h1 className="font-display font-extrabold text-4xl sm:text-5xl md:text-6xl text-white leading-tight tracking-tight mb-8">
            Privacy Policy
          </h1>

          <p className="font-sans text-sm sm:text-base md:text-lg text-white/80 leading-relaxed max-w-2xl mx-auto font-medium mb-6">
            Learn how Unitas Home collects, uses, stores, and protects your personal information when you visit our website, book a visit, reserve a room, or contact our team.
          </p>

          {/* Last Updated Information Row with divider */}
          <div className="flex flex-col items-center">
            <div className="w-16 h-[1px] bg-white/15 my-4"></div>
            <div className="inline-flex items-center space-x-2 text-white/60 text-xs sm:text-sm font-sans font-medium select-none bg-white/5 px-4 py-1.5 rounded-full border border-white/10">
              <Calendar className="w-3.5 h-3.5 text-white/50" />
              <span>Last Updated: 11 July 2026</span>
            </div>
          </div>
        </div>
      </section>

      {/* 2. QUICK PRIVACY SNAPSHOT */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20 text-center">
        <span className="font-sans text-xs font-bold text-[#0F8B8D] tracking-wider uppercase mb-2 block">
          Overview
        </span>
        <h2 className="font-display font-extrabold text-2xl sm:text-3xl text-[#1F2937] mb-3">
          Quick Privacy Snapshot
        </h2>
        <p className="font-sans text-sm sm:text-base text-[#6B7280] leading-relaxed max-w-xl mx-auto mb-12 font-medium">
          Everything you need to know about how your information is handled at Unitas Home.
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

      {/* 2.5 PRIVACY PRINCIPLES SECTION */}
      <section className="bg-[#FCFCF8] border-t border-[#E5E7EB]/30 py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-3xl mx-auto mb-16">
            <span className="font-sans text-xs font-bold text-[#0F8B8D] tracking-wider uppercase mb-2 block">
              Core Values
            </span>
            <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-[#1F2937] mb-4 tracking-tight">
              Our Privacy Principles
            </h2>
            <p className="font-sans text-sm sm:text-base text-[#6B7280] leading-relaxed max-w-2xl mx-auto font-medium">
              At Unitas Home, privacy is more than a legal requirement—it's a commitment. These principles guide how we collect, use, and protect your personal information every day.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 lg:gap-8 max-w-5xl mx-auto">
            {/* Card 1: Shield Lock */}
            <div className="bg-white rounded-[20px] p-8 border border-[#E5E7EB]/60 luxury-card-shadow flex flex-col items-start text-left md:hover:-translate-y-[5px] md:hover:shadow-[0_12px_28px_rgba(0,0,0,0.08)] transition-all duration-[250ms] ease-out h-full group">
              <div className="flex items-center justify-between w-full mb-6">
                <div className="w-12 h-12 rounded-xl bg-emerald-50 text-emerald-700 flex items-center justify-center transition-transform duration-300 group-hover:scale-105">
                  <ShieldCheck className="w-6 h-6 shrink-0" />
                </div>
                <span className="px-3 py-1 rounded-full text-[11px] font-semibold uppercase tracking-wider bg-emerald-50 text-emerald-700">
                  Protected
                </span>
              </div>
              <h3 className="font-display font-extrabold text-[#1F2937] text-lg mb-2">
                We Protect Your Data
              </h3>
              <p className="font-sans text-sm text-[#6B7280] leading-relaxed font-medium">
                Your personal information is handled with care and protected using appropriate security measures to help keep it safe.
              </p>
            </div>

            {/* Card 2: Shield with Slash / Secure Privacy */}
            <div className="bg-white rounded-[20px] p-8 border border-[#E5E7EB]/60 luxury-card-shadow flex flex-col items-start text-left md:hover:-translate-y-[5px] md:hover:shadow-[0_12px_28px_rgba(0,0,0,0.08)] transition-all duration-[250ms] ease-out h-full group">
              <div className="flex items-center justify-between w-full mb-6">
                <div className="w-12 h-12 rounded-xl bg-[#ECF9F8] text-[#0F8B8D] flex items-center justify-center transition-transform duration-300 group-hover:scale-105">
                  <ShieldOff className="w-6 h-6 shrink-0" />
                </div>
                <span className="px-3 py-1 rounded-full text-[11px] font-semibold uppercase tracking-wider bg-[#ECF9F8] text-[#0F8B8D]">
                  Never Shared
                </span>
              </div>
              <h3 className="font-display font-extrabold text-[#1F2937] text-lg mb-2">
                We Never Sell Your Data
              </h3>
              <p className="font-sans text-sm text-[#6B7280] leading-relaxed font-medium">
                We never sell, rent, or trade your personal information to third-party marketers or advertising companies.
              </p>
            </div>

            {/* Card 3: Chat Bubble */}
            <div className="bg-white rounded-[20px] p-8 border border-[#E5E7EB]/60 luxury-card-shadow flex flex-col items-start text-left md:hover:-translate-y-[5px] md:hover:shadow-[0_12px_28px_rgba(0,0,0,0.08)] transition-all duration-[250ms] ease-out h-full group">
              <div className="flex items-center justify-between w-full mb-6">
                <div className="w-12 h-12 rounded-xl bg-[#FFFBEB] text-[#F4B400] flex items-center justify-center transition-transform duration-300 group-hover:scale-105">
                  <MessageSquare className="w-6 h-6 shrink-0" />
                </div>
                <span className="px-3 py-1 rounded-full text-[11px] font-semibold uppercase tracking-wider bg-[#FFFBEB] text-amber-700">
                  No Spam
                </span>
              </div>
              <h3 className="font-display font-extrabold text-[#1F2937] text-lg mb-2">
                Only Relevant Communication
              </h3>
              <p className="font-sans text-sm text-[#6B7280] leading-relaxed font-medium">
                We only contact you regarding your inquiry, booking, reservation, stay updates, or information you have requested.
              </p>
            </div>

            {/* Card 4: User Shield */}
            <div className="bg-white rounded-[20px] p-8 border border-[#E5E7EB]/60 luxury-card-shadow flex flex-col items-start text-left md:hover:-translate-y-[5px] md:hover:shadow-[0_12px_28px_rgba(0,0,0,0.08)] transition-all duration-[250ms] ease-out h-full group">
              <div className="flex items-center justify-between w-full mb-6">
                <div className="w-12 h-12 rounded-xl bg-[#ECF9F8] text-[#0F8B8D] flex items-center justify-center transition-transform duration-300 group-hover:scale-105">
                  <UserCheck className="w-6 h-6 shrink-0" />
                </div>
                <span className="px-3 py-1 rounded-full text-[11px] font-semibold uppercase tracking-wider bg-[#ECF9F8] text-[#0F8B8D]">
                  Your Choice
                </span>
              </div>
              <h3 className="font-display font-extrabold text-[#1F2937] text-lg mb-2">
                You Stay in Control
              </h3>
              <p className="font-sans text-sm text-[#6B7280] leading-relaxed font-medium">
                You may request updates, corrections, or removal of your personal information by contacting our team at any time.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. PAGE INTRODUCTION */}
      <section className="bg-[#ECF9F8]/30 border-y border-[#E5E7EB]/30 py-16 text-center">
        <div className="max-w-3xl mx-auto px-6">
          <div className="w-12 h-12 rounded-2xl bg-[#ECF9F8] text-[#0F8B8D] flex items-center justify-center mx-auto mb-6">
            <Heart className="w-6 h-6" />
          </div>
          <h2 className="font-display font-extrabold text-2xl sm:text-3xl text-[#1F2937] mb-4">
            Our Commitment to Your Privacy
          </h2>
          <div className="w-12 h-1 bg-[#F4B400] mx-auto mb-6 rounded-full"></div>
          <p className="font-sans text-sm sm:text-base md:text-lg text-[#6B7280] leading-relaxed max-w-2xl mx-auto font-medium">
            At Unitas Home, we value your privacy and are committed to protecting the personal information you share with us. This Privacy Policy explains what information we collect, why we collect it, how we use it, and how we keep it secure.
          </p>
        </div>
      </section>

      {/* 4 & 5. SECTION LAYOUT & TABLE OF CONTENTS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-12 items-start">
          
          {/* Main Legal Content (3 cols) */}
          <div className="lg:col-span-3 space-y-16">
            
            {/* Section: Collect */}
            <motion.div 
              id="collect"
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, ease: 'easeOut' }}
              className="scroll-mt-24"
            >
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-10 h-10 rounded-lg bg-[#ECF9F8] text-[#0F8B8D] flex items-center justify-center shrink-0">
                  <FileCheck className="w-5 h-5" />
                </div>
                <h2 className="font-display font-extrabold text-2xl text-[#1F2937]">
                  1. Information We Collect
                </h2>
              </div>
              <div className="w-full h-[1px] bg-[#E5E7EB] my-5" />
              <div className="font-sans text-sm sm:text-base text-[#6B7280] space-y-4 leading-relaxed font-medium">
                <p>
                  To provide a seamless, premium co-living booking experience and respond to inquiries, we collect specific details when you interact with Unitas Home. The scope of information we collect includes:
                </p>
                <ul className="space-y-3 pl-4 list-none">
                  <li className="flex items-start space-x-2.5">
                    <span className="text-[#0F8B8D] font-bold text-base leading-none mt-1">•</span>
                    <span><strong>Personal Identification Details:</strong> Name, phone number, email address, and parent or guardian emergency contact details.</span>
                  </li>
                  <li className="flex items-start space-x-2.5">
                    <span className="text-[#0F8B8D] font-bold text-base leading-none mt-1">•</span>
                    <span><strong>Resident Booking Details:</strong> Scheduled visit dates, preferred sharing category (single, double, or triple occupancy), and potential moving dates.</span>
                  </li>
                  <li className="flex items-start space-x-2.5">
                    <span className="text-[#0F8B8D] font-bold text-base leading-none mt-1">•</span>
                    <span><strong>Academic or Professional Background:</strong> College/university name or corporate workplace information to ensure a compatible living community.</span>
                  </li>
                  <li className="flex items-start space-x-2.5">
                    <span className="text-[#0F8B8D] font-bold text-base leading-none mt-1">•</span>
                    <span><strong>Technical Access Logs:</strong> IP address, device specifications, browser type, and navigation patterns recorded automatically during your visit.</span>
                  </li>
                </ul>
              </div>
            </motion.div>

            {/* Section: Use */}
            <motion.div 
              id="use"
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, ease: 'easeOut' }}
              className="scroll-mt-24"
            >
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-10 h-10 rounded-lg bg-[#ECF9F8] text-[#0F8B8D] flex items-center justify-center shrink-0">
                  <Eye className="w-5 h-5" />
                </div>
                <h2 className="font-display font-extrabold text-2xl text-[#1F2937]">
                  2. How We Use Information
                </h2>
              </div>
              <div className="w-full h-[1px] bg-[#E5E7EB] my-5" />
              <div className="font-sans text-sm sm:text-base text-[#6B7280] space-y-4 leading-relaxed font-medium">
                <p>
                  Unitas Home will never sell, lease, or distribute your private information to third-party brokers or advertisers. We utilize collected metrics exclusively for operational purposes:
                </p>
                <ul className="space-y-3 pl-4 list-none">
                  <li className="flex items-start space-x-2.5">
                    <span className="text-[#0F8B8D] font-bold text-base leading-none mt-1">•</span>
                    <span><strong>Reservation Management:</strong> Confirming your digital room holds, generating your visual visit pass, and managing on-site schedules.</span>
                  </li>
                  <li className="flex items-start space-x-2.5">
                    <span className="text-[#0F8B8D] font-bold text-base leading-none mt-1">•</span>
                    <span><strong>Direct Support:</strong> Contacting you directly through phone, SMS, or WhatsApp regarding your scheduled walkthrough times and room queries.</span>
                  </li>
                  <li className="flex items-start space-x-2.5">
                    <span className="text-[#0F8B8D] font-bold text-base leading-none mt-1">•</span>
                    <span><strong>Continuous Improvement:</strong> Analyzing website load metrics and interface interactions to polish and speed up our booking experience.</span>
                  </li>
                </ul>
              </div>
            </motion.div>

            {/* Section: Cookies */}
            <motion.div 
              id="cookies"
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, ease: 'easeOut' }}
              className="scroll-mt-24"
            >
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-10 h-10 rounded-lg bg-[#ECF9F8] text-[#0F8B8D] flex items-center justify-center shrink-0">
                  <Cookie className="w-5 h-5" />
                </div>
                <h2 className="font-display font-extrabold text-2xl text-[#1F2937]">
                  3. Cookies & Tracking Technologies
                </h2>
              </div>
              <div className="w-full h-[1px] bg-[#E5E7EB] my-5" />
              <div className="font-sans text-sm sm:text-base text-[#6B7280] space-y-4 leading-relaxed font-medium">
                <p>
                  Cookies are tiny text files placed on your device to help us record user navigation. Unitas Home uses essential and analytics cookies to optimize web performance:
                </p>
                <p>
                  <strong>Functional Cookies:</strong> These help save your session information so you don't have to retype your contact name or email each time you interact with our booking prompts.
                </p>
                <p>
                  <strong>Performance Analytics:</strong> We use lightweight tracking parameters to understand general geographic traffic levels and browser compatibility. You can choose to refuse or disable all cookies via your web browser settings, although some interactive booking features might load slower.
                </p>
              </div>
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
                  <Share2 className="w-5 h-5" />
                </div>
                <h2 className="font-display font-extrabold text-2xl text-[#1F2937]">
                  4. Third-Party Services
                </h2>
              </div>
              <div className="w-full h-[1px] bg-[#E5E7EB] my-5" />
              <div className="font-sans text-sm sm:text-base text-[#6B7280] space-y-4 leading-relaxed font-medium">
                <p>
                  We coordinate with trusted technical partners to manage communications and platform integrity:
                </p>
                <ul className="space-y-3 pl-4 list-none">
                  <li className="flex items-start space-x-2.5">
                    <span className="text-[#0F8B8D] font-bold text-base leading-none mt-1">•</span>
                    <span><strong>Communication APIs:</strong> Secure WhatsApp integrations to process immediate support requests and send booking updates.</span>
                  </li>
                  <li className="flex items-start space-x-2.5">
                    <span className="text-[#0F8B8D] font-bold text-base leading-none mt-1">•</span>
                    <span><strong>Hosting Infrastructure:</strong> Secure cloud environments carrying restricted credential databases and modern firewalls.</span>
                  </li>
                </ul>
                <p>
                  These third-party platforms are bound by strict agreements protecting your data and are forbidden from utilizing student metrics for secondary purposes or marketing campaigns.
                </p>
              </div>
            </motion.div>

            {/* Section: Security */}
            <motion.div 
              id="security"
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, ease: 'easeOut' }}
              className="scroll-mt-24"
            >
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-10 h-10 rounded-lg bg-[#ECF9F8] text-[#0F8B8D] flex items-center justify-center shrink-0">
                  <Lock className="w-5 h-5" />
                </div>
                <h2 className="font-display font-extrabold text-2xl text-[#1F2937]">
                  5. Data Security Measures
                </h2>
              </div>
              <div className="w-full h-[1px] bg-[#E5E7EB] my-5" />
              <div className="font-sans text-sm sm:text-base text-[#6B7280] space-y-4 leading-relaxed font-medium">
                <p>
                  We prioritize student record safety. Unitas Home leverages standard encryption structures (SSL/TLS) during internet transfer of form details.
                </p>
                <p>
                  On-site warden records, rent receipts, and personal identification documents are backed up in password-restricted local databases with access permitted exclusively to authorized managerial personnel. While we employ high-standard shields, please remember that no physical or web transmission can guarantee complete security.
                </p>
              </div>
            </motion.div>

            {/* Section: Rights */}
            <motion.div 
              id="rights"
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
                <h2 className="font-display font-extrabold text-2xl text-[#1F2937]">
                  6. Your Privacy Rights
                </h2>
              </div>
              <div className="w-full h-[1px] bg-[#E5E7EB] my-5" />
              <div className="font-sans text-sm sm:text-base text-[#6B7280] space-y-4 leading-relaxed font-medium">
                <p>
                  You hold full control over how your inquiries are logged. As a prospective resident or visitor, you have the right to:
                </p>
                <ul className="space-y-3 pl-4 list-none">
                  <li className="flex items-start space-x-2.5">
                    <span className="text-[#0F8B8D] font-bold text-base leading-none mt-1">•</span>
                    <span><strong>Review & Access:</strong> Request a summary of the exact personal details we have recorded regarding your name or phone number.</span>
                  </li>
                  <li className="flex items-start space-x-2.5">
                    <span className="text-[#0F8B8D] font-bold text-base leading-none mt-1">•</span>
                    <span><strong>Modify & Update:</strong> Correct typos or outdated contact details listed inside your registered walkthrough passes.</span>
                  </li>
                  <li className="flex items-start space-x-2.5">
                    <span className="text-[#0F8B8D] font-bold text-base leading-none mt-1">•</span>
                    <span><strong>Full Deletion:</strong> Request our team to erase your booking histories and inquiry forms from our databases completely.</span>
                  </li>
                </ul>
                <p>
                  To exercise any of these privileges, simply connect with our desk coordinator using the contact resources provided below.
                </p>
              </div>
            </motion.div>

            {/* Section: Contact */}
            <motion.div 
              id="contact-legal"
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
                <h2 className="font-display font-extrabold text-2xl text-[#1F2937]">
                  7. Contact Information
                </h2>
              </div>
              <div className="w-full h-[1px] bg-[#E5E7EB] my-5" />
              <div className="font-sans text-sm sm:text-base text-[#6B7280] space-y-6 leading-relaxed font-medium">
                <p>
                  If you have questions, feedback, or queries regarding how we secure your data, please reach out to our dedicated resident relations desk:
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
                      <a href="tel:+919675591951" className="text-xs sm:text-sm text-[#F4B400] hover:underline transition-colors">
                        +91 96755 91951
                      </a>
                    </div>
                  </div>

                  <div className="p-5 rounded-2xl border border-[#E5E7EB]/50 bg-white flex items-start space-x-3.5 luxury-card-shadow sm:col-span-2">
                    <div className="w-9 h-9 rounded-xl bg-[#ECF9F8] text-[#0F8B8D] flex items-center justify-center shrink-0">
                      <MapPin className="w-4 h-4" />
                    </div>
                    <div>
                      <h4 className="font-display font-bold text-sm text-[#1F2937] mb-1">Corporate Address</h4>
                      <p className="text-xs sm:text-sm text-[#6B7280]">
                        Unitas Home, Patel Nagar, Near SGRR Medical College, Dehradun, Uttarakhand, India
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

          </div>

          {/* Sticky Navigation Sidebar (Desktop Only) */}
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
              Privacy Notice
            </h4>
            <p className="font-sans text-xs sm:text-sm text-[#6B7280] leading-relaxed font-semibold">
              We may update this Privacy Policy from time to time to reflect changes in our services, legal requirements, or privacy practices. Please review this page periodically for the latest information.
            </p>
          </div>
        </div>
      </section>

      {/* 9. NEED ASSISTANCE SECTION */}
      <section className="max-w-4xl mx-auto px-6 py-20 md:py-24 text-center">
        <h2 className="font-display font-extrabold text-2xl sm:text-3xl text-[#1F2937] mb-4">
          Need Assistance?
        </h2>
        <h3 className="font-display font-black text-xs text-[#0F8B8D] uppercase tracking-[1.5px] mb-4">
          Questions About Your Privacy?
        </h3>
        <p className="font-sans text-sm sm:text-base text-[#6B7280] max-w-xl mx-auto mb-8 font-medium">
          If you have any questions about how your information is collected or used, our team is happy to assist you.
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
            href="https://wa.me/919675591951?text=Hi%20Unitas%20Home%2C%20I%20have%20questions%20regarding%20the%20privacy%20policy."
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
