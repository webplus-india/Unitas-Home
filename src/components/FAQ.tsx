/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  HelpCircle, 
  Utensils, 
  Shield, 
  Calendar, 
  FileText, 
  Users, 
  Wifi, 
  WashingMachine, 
  Wallet, 
  Clock, 
  ShieldCheck, 
  ChevronDown, 
  MessageCircle 
} from 'lucide-react';

interface FAQItemType {
  id: string;
  question: string;
  icon: React.ComponentType<{ className?: string }>;
  answerElement: React.ReactNode;
  schemaAnswer: string;
}

export default function FAQ() {
  const [openId, setOpenId] = useState<string | null>('faq-meals');

  const toggleFAQ = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  const faqs: FAQItemType[] = [
    {
      id: 'faq-meals',
      question: 'What meals are included and what are the daily meal timings?',
      icon: Utensils,
      answerElement: (
        <div className="space-y-3 font-medium text-slate-gray">
          <p>
            We provide four highly nutritious, freshly prepared <strong>vegetarian meals</strong> every single day: Breakfast, Lunch, Evening Snacks with Tea, and Dinner. We offer a balanced weekly menu featuring North Indian, South Indian, and local cuisines with special desserts on weekends.
          </p>
          <p className="font-bold text-charcoal/90 mt-2">Daily Meal Timings:</p>
          <ul className="space-y-1.5 list-disc list-inside text-slate-gray pl-1">
            <li><strong>Breakfast:</strong> 7:30 AM – 9:30 AM</li>
            <li><strong>Lunch:</strong> 1:00 PM – 3:00 PM</li>
            <li><strong>Evening Snacks:</strong> 5:30 PM – 6:30 PM</li>
            <li><strong>Dinner:</strong> 8:00 PM – 10:00 PM</li>
          </ul>
        </div>
      ),
      schemaAnswer: "We provide four highly nutritious, freshly prepared vegetarian meals every single day: Breakfast (7:30 AM – 9:30 AM), Lunch (1:00 PM – 3:00 PM), Evening Snacks with Tea (5:30 PM – 6:30 PM), and Dinner (8:00 PM – 10:00 PM). We offer a balanced weekly menu featuring North Indian, South Indian, and local cuisines."
    },
    {
      id: 'faq-security',
      question: 'What security measures are available for residents?',
      icon: Shield,
      answerElement: (
        <div className="space-y-3 font-medium text-slate-gray">
          <p>
            Safety is our absolute cornerstone. Our comprehensive security infrastructure ensures complete peace of mind for both students, parents, and working professionals.
          </p>
          <ul className="space-y-1.5 list-disc list-inside text-slate-gray pl-1">
            <li><strong>24/7 Gate Security:</strong> Trained guards are stationed at the entrance at all hours.</li>
            <li><strong>CCTV Surveillance:</strong> Continuous monitoring of all corridors, entry/exit points, and common areas.</li>
            <li><strong>Biometric Fingerprint Access:</strong> Secure entry systems for resident doors to prevent any unauthorized entry.</li>
            <li><strong>Warden Supervision:</strong> Dedicated on-site warden and management team present 24/7.</li>
          </ul>
        </div>
      ),
      schemaAnswer: "Safety is our absolute cornerstone. Our comprehensive security infrastructure includes 24/7 gate security with trained guards, continuous CCTV surveillance of entry-exit points and corridors, strict biometric fingerprint access for resident doors, and dedicated warden supervision."
    },
    {
      id: 'faq-booking',
      question: 'How can I reserve a room at Unitas Home?',
      icon: Calendar,
      answerElement: (
        <div className="space-y-3 font-medium text-slate-gray">
          <p>
            Reserving your room or scheduling an in-person walkthrough of Unitas Home is simple and hassle-free:
          </p>
          <ul className="space-y-2 list-decimal list-inside text-slate-gray pl-1">
            <li><strong>Schedule a Visit:</strong> Use our online scheduling dashboard or click the WhatsApp button to book an in-person walkthrough of our co-living space.</li>
            <li><strong>Select Your Sharing Type:</strong> Choose between Single Sharing, Twin Sharing, or Triple Sharing accommodation.</li>
            <li><strong>Reserve Your Bed:</strong> Submit your required documents and pay the refundable security deposit to block your slot instantly.</li>
          </ul>
        </div>
      ),
      schemaAnswer: "Booking a room or scheduling a tour is simple: 1. Schedule a visit using our online scheduling dashboard or WhatsApp. 2. Select your preferred room type (Single, Twin, or Triple Sharing). 3. Reserve your bed by submitting the required documents and paying the security deposit."
    },
    {
      id: 'faq-documents',
      question: 'What documents are required during move-in?',
      icon: FileText,
      answerElement: (
        <div className="space-y-3 font-medium text-slate-gray">
          <p>
            To complete your hostel registration and comply with local housing regulations, please provide the following documents prior to or on your move-in day:
          </p>
          <ul className="space-y-1.5 list-disc list-inside text-slate-gray pl-1">
            <li><strong>Government ID Proof:</strong> Aadhaar Card, Passport, or Voter ID (original and photocopy).</li>
            <li><strong>Resident Status:</strong> Student ID/Admission Letter (for students) or Work ID/Appointment Letter (for working professionals).</li>
            <li><strong>Photographs:</strong> 2 passport-sized color photographs.</li>
            <li><strong>Guardian Details:</strong> Contact information and ID proof of parents or local guardian.</li>
          </ul>
        </div>
      ),
      schemaAnswer: "To comply with local housing regulations and ensure community safety, we require a government-issued ID proof (Aadhaar, Passport, etc.), college admission letter or student ID (for students), work ID or appointment letter (for working professionals), 2 passport-sized photographs, and contact/ID details of parents or guardians."
    },
    {
      id: 'faq-visitors',
      question: 'What is the visitor policy and are overnight stays allowed?',
      icon: Users,
      answerElement: (
        <div className="space-y-3 font-medium text-slate-gray">
          <p>
            Parents and immediate family members are welcome to visit your room during designated visiting hours from <strong>9:00 AM to 7:00 PM</strong> with prior coordinator clearance.
          </p>
          <p>
            To maintain privacy and security for all residents, unrelated friends or outside guests are restricted to the <strong>common lounge areas</strong> only.
          </p>
          <p>
            <strong>Overnight stays</strong> are strictly permitted for parents only, subject to prior approval, room availability, and nominal charges.
          </p>
        </div>
      ),
      schemaAnswer: "Parents and immediate family members can visit rooms between 9:00 AM and 7:00 PM with prior clearance. Unrelated friends and outside guests are restricted to common lounge areas. Overnight stays are permitted for parents only with prior approval and nominal charges."
    },
    {
      id: 'faq-wifi',
      question: 'What is the speed of the Wi-Fi and is there any extra cost?',
      icon: Wifi,
      answerElement: (
        <div className="space-y-3 font-medium text-slate-gray">
          <p>
            We offer high-speed, commercial-grade fiber-optic Wi-Fi with speeds <strong>up to 150 Mbps</strong>.
          </p>
          <ul className="space-y-1.5 list-disc list-inside text-slate-gray pl-1">
            <li><strong>Zero Extra Cost:</strong> The high-speed internet is fully included in your monthly rent.</li>
            <li><strong>Unlimited Data:</strong> No data caps, allowing seamless streaming, study sessions, and online classes.</li>
            <li><strong>Floor-specific Routers:</strong> Dedicated access routers are installed on every floor to ensure consistent, strong signals throughout the building.</li>
          </ul>
        </div>
      ),
      schemaAnswer: "We provide high-speed, commercial-grade fiber-optic Wi-Fi with speeds up to 150 Mbps. There are no extra costs; it is fully included in your monthly rent with unlimited data. Dedicated routers on every floor ensure seamless connectivity."
    },
    {
      id: 'faq-laundry',
      question: 'Is laundry service included in the rent?',
      icon: WashingMachine,
      answerElement: (
        <div className="space-y-3 font-medium text-slate-gray">
          <p>
            Yes, professional laundry and ironing services are completely included in your monthly rent.
          </p>
          <ul className="space-y-1.5 list-disc list-inside text-slate-gray pl-1">
            <li><strong>Weekly Schedule:</strong> We handle up to 12 pieces of clothing per week, which are professionally washed, steam-ironed, and folded nicely.</li>
            <li><strong>Self-Service Option:</strong> Residents also have access to high-end automatic washing machines and drying areas in the common wash zone.</li>
          </ul>
        </div>
      ),
      schemaAnswer: "Yes, a premium professional laundry and ironing service is included in your monthly rent. Every resident gets up to 12 pieces of clothing washed, steam-ironed, and folded nicely each week. Automated self-service washing machines are also available in the common area."
    },
    {
      id: 'faq-deposit',
      question: 'Is there a refundable security deposit and when is it paid?',
      icon: Wallet,
      answerElement: (
        <div className="space-y-3 font-medium text-slate-gray">
          <p>
            Yes, we require a refundable security deposit equivalent to <strong>one month’s rent</strong>, along with one month’s advance rent at the time of booking or move-in.
          </p>
          <p>
            This deposit secures your bed space and ensures it is reserved exclusively for you, especially during peak academic admission seasons.
          </p>
        </div>
      ),
      schemaAnswer: "We require a refundable security deposit equivalent to one month's rent, payable along with one month's advance rent during booking or move-in to secure your bed space."
    },
    {
      id: 'faq-refund',
      question: 'What is the refund policy for the security deposit?',
      icon: ShieldCheck,
      answerElement: (
        <div className="space-y-3 font-medium text-slate-gray">
          <p>
            The security deposit is <strong>fully refundable</strong> at the time of your move-out.
          </p>
          <p>
            To process a full refund, residents must meet the following criteria:
          </p>
          <ul className="space-y-1.5 list-disc list-inside text-slate-gray pl-1">
            <li>A minimum stay commitment of <strong>3 months</strong>.</li>
            <li>A standard <strong>30-day prior written notice</strong> given before move-out.</li>
            <li>Zero damages to the room, custom furniture, or property assets.</li>
          </ul>
        </div>
      ),
      schemaAnswer: "The security deposit is fully refundable at the time of move-out, subject to a minimum stay commitment of 3 months, a standard 30-day prior written notice, and no damages to the property."
    },
    {
      id: 'faq-gate-timings',
      question: 'What are the gate timings and entry rules?',
      icon: Clock,
      answerElement: (
        <div className="space-y-3 font-medium text-slate-gray">
          <p>
            To ensure the absolute safety, security, and discipline of all residents, we maintain standard gate entry guidelines:
          </p>
          <ul className="space-y-1.5 list-disc list-inside text-slate-gray pl-1">
            <li><strong>Daily Gate Timings:</strong> The main gate is open daily from <strong>6:00 AM to 10:30 PM</strong>.</li>
            <li><strong>Late Entry Policy:</strong> Any entry after 10:30 PM requires prior permission or notification to the warden from a parent or guardian.</li>
            <li><strong>Late Arrival Procedure:</strong> In case of delayed classes or travel, residents must update the resident warden in advance via call or coordinator message.</li>
            <li><strong>Emergency Exceptions:</strong> Medical interns and working professionals on night shifts are provided late-access permissions, subject to shift verification.</li>
          </ul>
        </div>
      ),
      schemaAnswer: "The main gate is open daily from 6:00 AM to 10:30 PM. Any entry after 10:30 PM requires prior notice or permission from parents or guardians. For late arrivals due to academic or emergency reasons, residents must update the warden. Medical interns and working professionals on night shifts are provided late-access permissions with verified shift schedules."
    }
  ];

  // Generate FAQ JSON-LD Schema
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map((faq) => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.schemaAnswer
      }
    }))
  };

  return (
    <section id="faq" className="py-[120px] bg-white relative scroll-mt-12 select-none overflow-hidden">
      
      {/* FAQ Schema JSON-LD for SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Title */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center space-x-2 bg-[#F4B400]/[0.06] border border-[#F4B400]/15 px-4 py-1.5 rounded-full shadow-xs">
            <span className="text-[12px] tracking-wide text-[#F4B400] font-extrabold uppercase">
              Frequently Asked Questions
            </span>
          </div>
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-charcoal mt-5 mb-4 tracking-tight leading-tight">
            Everything You Need to Know Before Booking
          </h2>
          <p className="font-sans text-sm sm:text-base text-slate-gray leading-relaxed font-medium">
            Everything students, parents, medical interns, and working professionals usually ask before choosing Unitas Home.
          </p>
        </div>

        {/* Accordions List - exactly 60-80px spacing from heading wrapper */}
        <div className="space-y-4 max-w-3xl mx-auto">
          {faqs.map((faq) => {
            const isOpen = openId === faq.id;
            const IconComponent = faq.icon;
            
            return (
              <div
                key={faq.id}
                className={`border rounded-[24px] overflow-hidden transition-all duration-300 ${
                  isOpen 
                    ? 'bg-[#0F8B8D]/[0.02] border-[#0F8B8D]/30 border-l-4 border-l-[#F4B400] shadow-sm' 
                    : 'border-border-light bg-bg-warm/40 hover:bg-bg-warm/85'
                }`}
              >
                {/* Header/Trigger */}
                <button
                  onClick={() => toggleFAQ(faq.id)}
                  className="w-full flex items-center justify-between p-5 sm:p-6 text-left font-display font-extrabold text-[15px] sm:text-base text-charcoal/90 cursor-pointer group focus:outline-hidden"
                >
                  <div className="flex items-center space-x-4 pr-4">
                    <span className={`flex-shrink-0 p-2 rounded-lg transition-colors duration-300 ${isOpen ? 'bg-primary/10 text-primary' : 'bg-white border border-neutral-200/50 text-slate-gray group-hover:text-primary group-hover:border-primary/20'}`}>
                      <IconComponent className="w-4.5 h-4.5" />
                    </span>
                    <span className="group-hover:text-primary transition-colors leading-snug">
                      {faq.question}
                    </span>
                  </div>

                  <div className={`flex-shrink-0 w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-white border border-border-light flex items-center justify-center text-charcoal group-hover:text-[#F4B400] group-hover:border-[#F4B400]/20 transition-all ${
                    isOpen ? 'bg-[#F4B400] text-[#1F2937] border-[#F4B400] shadow-2xs' : ''
                  }`}>
                    <ChevronDown className={`w-5 h-5 transform transition-transform duration-300 ${isOpen ? 'rotate-180 text-[#1F2937]' : ''}`} />
                  </div>
                </button>

                {/* Animated Body */}
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25, ease: 'easeInOut' }}
                    >
                      <div className="p-5 sm:p-6 pt-0 border-t-2 border-[#F4B400]/40 font-sans text-xs sm:text-sm text-slate-gray leading-relaxed bg-white/70">
                        <div className="pt-4">
                          {faq.answerElement}
                        </div>
                        
                        {/* Custom subtext context tag */}
                        <div className="mt-4 flex items-center space-x-2 text-[10px] text-primary-dark font-extrabold uppercase tracking-wider">
                          <span>Verified Policy</span>
                          <span>•</span>
                          <span>Unitas Management team</span>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

        {/* Contact CTA */}
        <div className="mt-8 sm:mt-11 md:mt-14 text-center max-w-xl mx-auto bg-neutral-50/60 border border-neutral-100 rounded-[24px] p-6 sm:p-8 shadow-2xs">
          <HelpCircle className="w-8 h-8 text-primary mx-auto mb-3" strokeWidth={2.5} />
          <h3 className="font-display font-extrabold text-lg text-charcoal tracking-tight">
            Need more information before booking?
          </h3>
          <p className="font-sans text-xs sm:text-sm text-slate-gray mt-1.5 mb-6 font-semibold">
            Our team is happy to answer your questions.
          </p>
          <a
            href="https://wa.me/919456385202?text=Hi%20Unitas%20Home%2C%20I%20have%20some%20questions%20regarding%20the%20co-living%20rules..."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center space-x-2.5 bg-[#25D366] hover:bg-[#20C45A] text-white px-8 py-3.5 rounded-full font-bold text-sm shadow-2xs hover:shadow-md hover:-translate-y-0.5 transition-all duration-300 cursor-pointer"
            aria-label="Chat with us on WhatsApp"
          >
            <svg viewBox="0 0 24 24" className="w-5 h-5 fill-white text-white" fill="currentColor">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662c1.746.953 3.71 1.458 5.704 1.459h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
            </svg>
            <span>Chat on WhatsApp</span>
          </a>
        </div>

      </div>
    </section>
  );
}
