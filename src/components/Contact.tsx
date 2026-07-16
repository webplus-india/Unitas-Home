/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { 
  Mail, 
  Phone, 
  MapPin, 
  MessageSquare, 
  Calendar, 
  Check, 
  Send, 
  Navigation,
  User,
  Bed,
  Clock,
  CalendarDays,
  Users
} from 'lucide-react';
import { ROOMS_DATA } from '../data';
import { Inquiry } from '../types';

interface ContactProps {
  initialRoomId?: string | null;
  onSubmitInquiry: (inquiry: Omit<Inquiry, 'id' | 'timestamp' | 'status'>) => void;
  activeTab?: 'Inquiry' | 'Schedule Visit' | 'Reserve Room';
  onTabChange?: (tab: 'Inquiry' | 'Schedule Visit' | 'Reserve Room') => void;
}

export default function Contact({ initialRoomId, onSubmitInquiry, activeTab, onTabChange }: ContactProps) {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    roomType: initialRoomId || 'single-sharing',
    moveInDate: '',
    message: '',
    type: activeTab || 'Inquiry',
    timeSlot: '',
    visitorsCount: '',
    durationOfStay: ''
  });

  useEffect(() => {
    if (activeTab) {
      setFormData(prev => ({ ...prev, type: activeTab }));
    }
  }, [activeTab]);

  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [isSuccess, setIsSuccess] = useState(false);

  // SEO Dynamic Meta Title & Description
  useEffect(() => {
    document.title = 'Contact Unitas Home | Book a Visit or Reserve Your Premium PG in Dehradun';
    
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute('content', 'Contact Unitas Home to schedule a property visit, reserve your room, or inquire about premium student and working professional accommodation in Dehradun.');
    }

    let ogTitle = document.querySelector('meta[property="og:title"]');
    if (!ogTitle) {
      ogTitle = document.createElement('meta');
      ogTitle.setAttribute('property', 'og:title');
      document.head.appendChild(ogTitle);
    }
    ogTitle.setAttribute('content', 'Contact Unitas Home | Book a Visit or Reserve Your Premium PG in Dehradun');

    let ogDesc = document.querySelector('meta[property="og:description"]');
    if (!ogDesc) {
      ogDesc = document.createElement('meta');
      ogDesc.setAttribute('property', 'og:description');
      document.head.appendChild(ogDesc);
    }
    ogDesc.setAttribute('content', 'Contact Unitas Home to schedule a property visit, reserve your room, or inquire about premium student and working professional accommodation in Dehradun.');

    let twitterTitle = document.querySelector('meta[name="twitter:title"]');
    if (!twitterTitle) {
      twitterTitle = document.createElement('meta');
      twitterTitle.setAttribute('name', 'twitter:title');
      document.head.appendChild(twitterTitle);
    }
    twitterTitle.setAttribute('content', 'Contact Unitas Home | Book a Visit or Reserve Your Premium PG in Dehradun');
  }, []);

  // Sync initialRoomId if it changes
  useEffect(() => {
    if (initialRoomId) {
      setFormData(prev => ({ 
        ...prev, 
        roomType: initialRoomId,
        type: 'Reserve Room'
      }));
    }
  }, [initialRoomId]);

  // Real-time Validation helpers for checkmarks
  const isNameValid = formData.name.trim().length >= 3;
  const isPhoneValid = /^[0-9+() \-]{10,14}$/.test(formData.phone.trim()) && formData.phone.trim().replace(/[^0-9]/g, '').length >= 10;
  
  // Email is required for Reserve Room, optional for others (must be valid if filled)
  const isEmailEntered = formData.email.trim().length > 0;
  const isEmailFormatValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim());
  const isEmailValid = formData.type === 'Reserve Room'
    ? isEmailFormatValid
    : (!isEmailEntered || isEmailFormatValid);

  const isDateValid = formData.type === 'Inquiry' ? true : formData.moveInDate !== '';

  const validateForm = () => {
    const newErrors: { [key: string]: string } = {};
    if (!formData.name.trim()) {
      newErrors.name = 'Please enter your full name';
    } else if (formData.name.trim().length < 3) {
      newErrors.name = 'Name must be at least 3 characters long';
    }

    if (!formData.phone.trim()) {
      newErrors.phone = 'Please enter your phone number';
    } else if (!isPhoneValid) {
      newErrors.phone = 'Please enter a valid phone number';
    }

    if (formData.type === 'Reserve Room') {
      if (!formData.email.trim()) {
        newErrors.email = 'Please enter your email address';
      } else if (!isEmailFormatValid) {
        newErrors.email = 'Please enter a valid email address';
      }
    } else {
      if (isEmailEntered && !isEmailFormatValid) {
        newErrors.email = 'Please enter a valid email address';
      }
    }

    if (formData.type !== 'Inquiry') {
      if (!formData.moveInDate) {
        newErrors.moveInDate = formData.type === 'Schedule Visit'
          ? 'Please select a visit date'
          : 'Please select an expected move-in date';
      }
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;

    let finalMessage = formData.message;
    if (formData.type === 'Schedule Visit') {
      const extra = [];
      if (formData.timeSlot) extra.push(`Preferred Time: ${formData.timeSlot}`);
      if (formData.visitorsCount) extra.push(`Number of Visitors: ${formData.visitorsCount}`);
      if (extra.length > 0) {
        finalMessage = `${formData.message ? formData.message + '\n\n' : ''}[Visit Details: ${extra.join(', ')}]`;
      }
    } else if (formData.type === 'Reserve Room') {
      if (formData.durationOfStay) {
        finalMessage = `${formData.message ? formData.message + '\n\n' : ''}[Duration of Stay: ${formData.durationOfStay}]`;
      }
    }

    onSubmitInquiry({
      name: formData.name,
      phone: formData.phone,
      email: formData.email,
      roomType: formData.type === 'Schedule Visit' ? 'single-sharing' : formData.roomType,
      moveInDate: formData.type === 'Inquiry' ? '' : formData.moveInDate,
      message: finalMessage,
      type: formData.type
    });

    setIsSuccess(true);
  };

  const handleReset = () => {
    setIsSuccess(false);
    setFormData({
      name: '',
      phone: '',
      email: '',
      roomType: initialRoomId || 'single-sharing',
      moveInDate: '',
      message: '',
      type: 'Inquiry',
      timeSlot: '',
      visitorsCount: '',
      durationOfStay: ''
    });
    setErrors({});
  };

  const getButtonConfig = () => {
    switch (formData.type) {
      case 'Schedule Visit':
        return {
          text: 'Schedule My Visit',
          bgClass: 'bg-primary hover:bg-[#1B4332] text-white hover:shadow-[0_8px_20px_rgba(45, 106, 79,0.35)]',
          icon: <Calendar className="w-3.5 h-3.5 text-white" />
        };
      case 'Reserve Room':
        return {
          text: 'Reserve My Room',
          bgClass: 'bg-primary hover:bg-[#1B4332] text-white hover:shadow-[0_8px_20px_rgba(45, 106, 79,0.35)]',
          icon: <Send className="w-3.5 h-3.5 text-white" />
        };
      case 'Inquiry':
      default:
        return {
          text: 'Send Inquiry',
          bgClass: 'bg-primary hover:bg-[#1B4332] text-white hover:shadow-[0_8px_20px_rgba(45, 106, 79,0.35)]',
          icon: <Send className="w-3.5 h-3.5 text-white" />
        };
    }
  };

  const btnConfig = getButtonConfig();

  return (
    <section id="contact" className="py-[120px] bg-[#FAF9F6] relative scroll-mt-12 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Simplified Hero Section */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center space-x-2 bg-[#D4AF37]/[0.06] border border-[#D4AF37]/15 px-4 py-1.5 rounded-full shadow-xs mb-4">
            <span className="text-[11px] sm:text-[12px] tracking-wide text-[#D4AF37] font-extrabold uppercase">
              Get In Touch
            </span>
          </div>
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-charcoal leading-tight tracking-tight">
            Let's Get In Touch
          </h2>
          <p className="font-sans text-sm sm:text-base text-slate-gray mt-4 leading-relaxed font-medium">
            Have questions about room availability, property rules, or diet plans? Fill out the inquiry form or reach out to us directly. Our resident team is here to assist you.
          </p>
        </div>

        {/* Two-Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-12">
          
          {/* LHS: One Clean Contact Information Card */}
          <div className="lg:col-span-5">
            <div className="bg-white border border-[#E8E8E8] rounded-[24px] p-7 sm:p-8 shadow-3xs divide-y divide-[#E8E8E8]">
              
              {/* Phone Row */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-5 first:pt-0 last:pb-0">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 rounded-xl bg-[#E2F2F0] text-primary flex items-center justify-center flex-shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[11px] uppercase tracking-wider font-bold text-slate-gray/60 block">Phone</span>
                    <div className="mt-1">
                      <a href="tel:+919675591951" className="block text-base font-medium text-charcoal hover:text-primary transition-colors leading-tight">
                        +91 96755 91951
                      </a>
                      <a href="tel:+919927557505" className="block text-base font-medium text-charcoal hover:text-primary transition-colors mt-2">
                        +91 99275 57505
                      </a>
                    </div>
                  </div>
                </div>
                <div className="sm:text-right self-start sm:self-center">
                  <a href="tel:+919675591951" className="inline-flex items-center text-xs font-bold text-primary hover:text-primary-dark hover:underline transition-colors">
                    Call Now
                  </a>
                </div>
              </div>

              {/* WhatsApp Row */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 py-5 first:pt-0 last:pb-0">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 rounded-xl bg-[#25D366]/10 text-[#25D366] flex items-center justify-center flex-shrink-0">
                    <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current" fill="currentColor">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662c1.746.953 3.71 1.458 5.704 1.459h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                    </svg>
                  </div>
                  <div>
                    <span className="text-[11px] uppercase tracking-wider font-bold text-slate-gray/60 block">WhatsApp</span>
                    <div className="mt-1">
                      <a 
                        href="https://wa.me/919675591951?text=Hi%20Unitas%20Home%2C%20I%20am%20interested%20in%20inquiring%20about%20your%20rooms."
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block text-base font-medium text-charcoal hover:text-primary transition-colors leading-tight"
                      >
                        +91 96755 91951
                      </a>
                    </div>
                  </div>
                </div>
                <div className="sm:text-right self-start sm:self-center">
                  <a 
                    href="https://wa.me/919675591951?text=Hi%20Unitas%20Home%2C%20I%20am%20interested%20in%20inquiring%20about%20your%20rooms."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center space-x-2 bg-[#25D366] hover:bg-[#20C45A] text-white font-sans font-bold text-xs px-4.5 py-2.5 rounded-[18px] shadow-xs hover:shadow-md hover:-translate-y-0.5 transition-all duration-300 cursor-pointer"
                    aria-label="Chat with us on WhatsApp"
                  >
                    <svg viewBox="0 0 24 24" className="w-3.5 h-3.5 fill-white text-white" fill="currentColor">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662c1.746.953 3.71 1.458 5.704 1.459h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                    </svg>
                    <span>Chat Now</span>
                  </a>
                </div>
              </div>

              {/* Email Row */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 py-5 first:pt-0 last:pb-0">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 rounded-xl bg-[#E2F2F0] text-primary flex items-center justify-center flex-shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[11px] uppercase tracking-wider font-bold text-slate-gray/60 block">Email</span>
                    <a href="mailto:unitashomeuk@gmail.com" className="block text-base font-medium text-charcoal hover:text-primary transition-colors mt-1 leading-tight">
                      unitashomeuk@gmail.com
                    </a>
                  </div>
                </div>
                <div className="sm:text-right self-start sm:self-center">
                  <a href="mailto:unitashomeuk@gmail.com" className="inline-flex items-center text-xs font-bold text-primary hover:text-primary-dark hover:underline transition-colors">
                    Send Email
                  </a>
                </div>
              </div>

              {/* Address Row */}
              <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4 pt-5 first:pt-0 last:pb-0">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 rounded-xl bg-accent/10 text-accent flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[11px] uppercase tracking-wider font-bold text-slate-gray/60 block">Address</span>
                    <p className="text-sm font-medium text-charcoal mt-1 leading-relaxed">
                      1191K, Malviya Colony,<br />
                      Near Mahant Indresh Hospital,<br />
                      Dehradun, Uttarakhand – 248001
                    </p>
                  </div>
                </div>
                <div className="sm:self-end pt-2 sm:pt-0 self-start">
                  <a
                    href="https://maps.app.goo.gl/mRBFHHVnxPmNjtVe7"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center space-x-2 bg-primary hover:bg-primary-dark text-white font-sans font-bold text-xs px-4.5 py-2.5 rounded-[18px] shadow-xs transition-all hover:scale-[1.015]"
                  >
                    <Navigation className="w-3.5 h-3.5" />
                    <span>Get Directions</span>
                  </a>
                </div>
              </div>

            </div>
          </div>

          {/* RHS: One Clean Inquiry Form */}
          <div className="lg:col-span-7 bg-white p-7 sm:p-8 rounded-[24px] border border-[#E8E8E8] shadow-3xs">
            
            {isSuccess ? (
              <div className="flex flex-col items-center justify-center text-center py-10">
                <div className="w-12 h-12 rounded-full bg-success/15 border border-success/30 flex items-center justify-center text-success mb-4">
                  <Check className="w-6 h-6" />
                </div>
                <h3 className="font-display font-extrabold text-2xl text-charcoal mb-2">
                  ✅ Thank You!
                </h3>
                <p className="font-sans text-sm text-slate-gray leading-relaxed max-w-md mb-6 font-semibold">
                  Your request has been successfully received. Our resident team will contact you shortly.
                </p>

                <div className="grid grid-cols-2 gap-3 w-full max-w-sm mb-6">
                  <a
                    href="https://wa.me/919675591951?text=Hi%20Unitas%20Home%2C%20I%20just%20submitted%20my%20form%20and%20need%20an%20immediate%20response."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center space-x-1.5 py-3 bg-[#25D366] hover:bg-[#20C45A] text-white font-sans font-bold text-xs rounded-[18px] transition-all shadow-3xs cursor-pointer"
                    aria-label="Chat with us on WhatsApp"
                  >
                    <svg viewBox="0 0 24 24" className="w-3.5 h-3.5 fill-white text-white" fill="currentColor">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662c1.746.953 3.71 1.458 5.704 1.459h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                    </svg>
                    <span>Chat on WhatsApp</span>
                  </a>
                  <a
                    href="tel:+919675591951"
                    className="flex items-center justify-center space-x-1.5 py-3 bg-primary hover:bg-primary-dark text-white font-sans font-bold text-xs rounded-[18px] transition-all shadow-3xs cursor-pointer"
                  >
                    <Phone className="w-3.5 h-3.5 fill-white text-primary" />
                    <span>Call Now</span>
                  </a>
                </div>

                <button
                  onClick={handleReset}
                  className="text-xs text-slate-gray hover:text-primary font-bold underline transition-colors cursor-pointer"
                >
                  Submit another response
                </button>
              </div>
            ) : (
              <div className="space-y-6">
                {/* Segmented Tab Switcher */}
                <div className="flex border-b border-[#E8E8E8] -mx-7 sm:-mx-8 -mt-7 sm:-mt-8 mb-6 rounded-t-[24px] overflow-hidden bg-[#FAF9F6]/20">
                  {(['Inquiry', 'Schedule Visit', 'Reserve Room'] as const).map((tab) => {
                    const isActive = formData.type === tab;
                    return (
                      <button
                        key={tab}
                        type="button"
                        onClick={() => {
                          setFormData(prev => ({ 
                            ...prev, 
                            type: tab 
                          }));
                          setErrors({});
                          if (onTabChange) onTabChange(tab);
                        }}
                        className={`flex-1 py-3.5 text-xs sm:text-sm font-sans font-bold border-b-2 transition-all duration-200 cursor-pointer text-center ${
                          isActive
                            ? 'border-primary text-primary bg-white'
                            : 'border-transparent text-slate-gray hover:text-charcoal bg-[#FAF9F6]/40 hover:bg-[#FAF9F6]/80'
                        }`}
                      >
                        {tab}
                      </button>
                    );
                  })}
                </div>

                <form onSubmit={handleSubmit} className="space-y-5">
                  
                  {/* Row 1: Full Name & Mobile Number */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    
                    {/* Name */}
                    <div>
                      <label className="block text-[11px] font-semibold text-[#1F2937] mb-1.5 uppercase tracking-wider">
                        Full Name *
                      </label>
                      <div className="relative">
                        <User className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-[#2D6A4F]" strokeWidth={2} />
                        <input
                          type="text"
                          placeholder="e.g. Ayush Dobhal"
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          className={`w-full h-[56px] font-sans text-sm pl-[48px] pr-10 rounded-[16px] border bg-white text-[#1F2937] font-medium placeholder-[#9CA3AF] focus:border-[#2D6A4F] focus:ring-2 focus:ring-[#2D6A4F]/20 focus:outline-none focus:bg-white transition-all ${
                            errors.name ? 'border-red-500 ring-2 ring-red-100' : 'border-[#E9ECEF]'
                          }`}
                        />
                        {isNameValid && (
                          <Check className="w-4 h-4 text-emerald-500 absolute right-3.5 top-1/2 -translate-y-1/2" />
                        )}
                      </div>
                      {errors.name && <span className="block text-[10px] text-red-500 mt-1 font-semibold">{errors.name}</span>}
                    </div>

                    {/* Mobile Number */}
                    <div>
                      <label className="block text-[11px] font-semibold text-[#1F2937] mb-1.5 uppercase tracking-wider">
                        Mobile Number *
                      </label>
                      <div className="relative">
                        <Phone className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-[#2D6A4F]" strokeWidth={2} />
                        <input
                          type="text"
                          placeholder="e.g. +91 96755 91951"
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          className={`w-full h-[56px] font-sans text-sm pl-[48px] pr-10 rounded-[16px] border bg-white text-[#1F2937] font-medium placeholder-[#9CA3AF] focus:border-[#2D6A4F] focus:ring-2 focus:ring-[#2D6A4F]/20 focus:outline-none focus:bg-white transition-all ${
                            errors.phone ? 'border-red-500 ring-2 ring-red-100' : 'border-[#E9ECEF]'
                          }`}
                        />
                        {isPhoneValid && (
                          <Check className="w-4 h-4 text-emerald-500 absolute right-3.5 top-1/2 -translate-y-1/2" />
                        )}
                      </div>
                      {errors.phone && <span className="block text-[10px] text-red-500 mt-1 font-semibold">{errors.phone}</span>}
                    </div>

                  </div>

                  {/* Tab Specific Fields */}
                  {formData.type === 'Inquiry' && (
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      
                      {/* Email Address (Optional) */}
                      <div>
                        <label className="block text-[11px] font-semibold text-[#1F2937] mb-1.5 uppercase tracking-wider">
                          Email Address (Optional)
                        </label>
                        <div className="relative">
                          <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-[#2D6A4F]" strokeWidth={2} />
                          <input
                            type="email"
                            placeholder="e.g. student@gmail.com"
                            value={formData.email}
                            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                            className={`w-full h-[56px] font-sans text-sm pl-[48px] pr-10 rounded-[16px] border bg-white text-[#1F2937] font-medium placeholder-[#9CA3AF] focus:border-[#2D6A4F] focus:ring-2 focus:ring-[#2D6A4F]/20 focus:outline-none focus:bg-white transition-all ${
                              errors.email ? 'border-red-500 ring-2 ring-red-100' : 'border-[#E9ECEF]'
                            }`}
                          />
                          {formData.email.trim().length > 0 && isEmailValid && (
                            <Check className="w-4 h-4 text-emerald-500 absolute right-3.5 top-1/2 -translate-y-1/2" />
                          )}
                        </div>
                        {errors.email && <span className="block text-[10px] text-red-500 mt-1 font-semibold">{errors.email}</span>}
                      </div>

                      {/* Preferred Room Type */}
                      <div>
                        <label className="block text-[11px] font-semibold text-[#1F2937] mb-1.5 uppercase tracking-wider">
                          Preferred Room Type *
                        </label>
                        <div className="relative">
                          <Bed className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-[#2D6A4F]" strokeWidth={2} />
                          <select
                            value={formData.roomType}
                            onChange={(e) => setFormData({ ...formData, roomType: e.target.value })}
                            className="w-full h-[56px] font-sans text-sm pl-[48px] pr-10 rounded-[16px] border border-[#E9ECEF] bg-white text-[#1F2937] font-medium placeholder-[#9CA3AF] focus:border-[#2D6A4F] focus:ring-2 focus:ring-[#2D6A4F]/20 focus:outline-none focus:bg-white transition-all appearance-none cursor-pointer"
                          >
                            {ROOMS_DATA.map((r) => (
                              <option key={r.id} value={r.id}>
                                {r.name} - ₹{r.price.toLocaleString('en-IN')}/mo
                              </option>
                            ))}
                          </select>
                          <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none border-solid border-[#1F2937] border-t-4 border-x-transparent border-x-4 border-b-0" />
                        </div>
                      </div>

                    </div>
                  )}

                  {formData.type === 'Schedule Visit' && (
                    <div className="space-y-5">
                      
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                        {/* Email Address (Optional) */}
                        <div>
                          <label className="block text-[11px] font-semibold text-[#1F2937] mb-1.5 uppercase tracking-wider">
                            Email Address (Optional)
                          </label>
                          <div className="relative">
                            <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-[#2D6A4F]" strokeWidth={2} />
                            <input
                              type="email"
                              placeholder="e.g. student@gmail.com"
                              value={formData.email}
                              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                              className={`w-full h-[56px] font-sans text-sm pl-[48px] pr-10 rounded-[16px] border bg-white text-[#1F2937] font-medium placeholder-[#9CA3AF] focus:border-[#2D6A4F] focus:ring-2 focus:ring-[#2D6A4F]/20 focus:outline-none focus:bg-white transition-all ${
                                errors.email ? 'border-red-500 ring-2 ring-red-100' : 'border-[#E9ECEF]'
                              }`}
                            />
                            {formData.email.trim().length > 0 && isEmailValid && (
                              <Check className="w-4 h-4 text-emerald-500 absolute right-3.5 top-1/2 -translate-y-1/2" />
                            )}
                          </div>
                          {errors.email && <span className="block text-[10px] text-red-500 mt-1 font-semibold">{errors.email}</span>}
                        </div>

                        {/* Preferred Visit Date */}
                        <div>
                          <label className="block text-[11px] font-semibold text-[#1F2937] mb-1.5 uppercase tracking-wider">
                            Preferred Visit Date *
                          </label>
                          <div className="relative">
                            <Calendar className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-[#2D6A4F]" strokeWidth={2} />
                            <input
                              type="date"
                              value={formData.moveInDate}
                              onChange={(e) => setFormData({ ...formData, moveInDate: e.target.value })}
                              className={`w-full h-[56px] font-sans text-sm pl-[48px] pr-10 rounded-[16px] border bg-white text-[#1F2937] font-medium placeholder-[#9CA3AF] focus:border-[#2D6A4F] focus:ring-2 focus:ring-[#2D6A4F]/20 focus:outline-none focus:bg-white transition-all ${
                                errors.moveInDate ? 'border-red-500 ring-2 ring-red-100' : 'border-[#E9ECEF]'
                              }`}
                            />
                            {formData.moveInDate && (
                              <Check className="w-4 h-4 text-emerald-500 absolute right-3.5 top-1/2 -translate-y-1/2" />
                            )}
                          </div>
                          {errors.moveInDate && <span className="block text-[10px] text-red-500 mt-1 font-semibold">{errors.moveInDate}</span>}
                        </div>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                        {/* Preferred Time Slot */}
                        <div>
                          <label className="block text-[11px] font-semibold text-[#1F2937] mb-1.5 uppercase tracking-wider">
                            Preferred Time Slot
                          </label>
                          <div className="relative">
                            <Clock className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-[#2D6A4F]" strokeWidth={2} />
                            <select
                              value={formData.timeSlot}
                              onChange={(e) => setFormData({ ...formData, timeSlot: e.target.value })}
                              className="w-full h-[56px] font-sans text-sm pl-[48px] pr-10 rounded-[16px] border border-[#E9ECEF] bg-white text-[#1F2937] font-medium placeholder-[#9CA3AF] focus:border-[#2D6A4F] focus:ring-2 focus:ring-[#2D6A4F]/20 focus:outline-none focus:bg-white transition-all appearance-none cursor-pointer"
                            >
                              <option value="">Select a time slot</option>
                              <option value="Morning (9:30 AM - 12:00 PM)">Morning (9:30 AM - 12:00 PM)</option>
                              <option value="Afternoon (12:00 PM - 4:00 PM)">Afternoon (12:00 PM - 4:00 PM)</option>
                              <option value="Evening (4:00 PM - 7:00 PM)">Evening (4:00 PM - 7:00 PM)</option>
                            </select>
                            <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none border-solid border-[#1F2937] border-t-4 border-x-transparent border-x-4 border-b-0" />
                          </div>
                        </div>

                        {/* Number of Visitors (Optional) */}
                        <div>
                          <label className="block text-[11px] font-semibold text-[#1F2937] mb-1.5 uppercase tracking-wider">
                            Number of Visitors (Optional)
                          </label>
                          <div className="relative">
                            <Users className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-[#2D6A4F]" strokeWidth={2} />
                            <input
                              type="number"
                              min={1}
                              max={10}
                              placeholder="e.g. 2"
                              value={formData.visitorsCount}
                              onChange={(e) => setFormData({ ...formData, visitorsCount: e.target.value })}
                              className="w-full h-[56px] font-sans text-sm pl-[48px] pr-4 rounded-[16px] border border-[#E9ECEF] bg-white text-[#1F2937] font-medium placeholder-[#9CA3AF] focus:border-[#2D6A4F] focus:ring-2 focus:ring-[#2D6A4F]/20 focus:outline-none focus:bg-white transition-all"
                            />
                          </div>
                        </div>
                      </div>

                    </div>
                  )}

                  {formData.type === 'Reserve Room' && (
                    <div className="space-y-5">
                      
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                        {/* Email Address * */}
                        <div>
                          <label className="block text-[11px] font-semibold text-[#1F2937] mb-1.5 uppercase tracking-wider">
                            Email Address *
                          </label>
                          <div className="relative">
                            <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-[#2D6A4F]" strokeWidth={2} />
                            <input
                              type="email"
                              placeholder="e.g. student@gmail.com"
                              value={formData.email}
                              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                              className={`w-full h-[56px] font-sans text-sm pl-[48px] pr-10 rounded-[16px] border bg-white text-[#1F2937] font-medium placeholder-[#9CA3AF] focus:border-[#2D6A4F] focus:ring-2 focus:ring-[#2D6A4F]/20 focus:outline-none focus:bg-white transition-all ${
                                errors.email ? 'border-red-500 ring-2 ring-red-100' : 'border-[#E9ECEF]'
                              }`}
                            />
                            {formData.email.trim().length > 0 && isEmailValid && (
                              <Check className="w-4 h-4 text-emerald-500 absolute right-3.5 top-1/2 -translate-y-1/2" />
                            )}
                          </div>
                          {errors.email && <span className="block text-[10px] text-red-500 mt-1 font-semibold">{errors.email}</span>}
                        </div>

                        {/* Preferred Room Type */}
                        <div>
                          <label className="block text-[11px] font-semibold text-[#1F2937] mb-1.5 uppercase tracking-wider">
                            Preferred Room Type *
                          </label>
                          <div className="relative">
                            <Bed className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-[#2D6A4F]" strokeWidth={2} />
                            <select
                              value={formData.roomType}
                              onChange={(e) => setFormData({ ...formData, roomType: e.target.value })}
                              className="w-full h-[56px] font-sans text-sm pl-[48px] pr-10 rounded-[16px] border border-[#E9ECEF] bg-white text-[#1F2937] font-medium placeholder-[#9CA3AF] focus:border-[#2D6A4F] focus:ring-2 focus:ring-[#2D6A4F]/20 focus:outline-none focus:bg-white transition-all appearance-none cursor-pointer"
                            >
                              {ROOMS_DATA.map((r) => (
                                <option key={r.id} value={r.id}>
                                  {r.name} - ₹{r.price.toLocaleString('en-IN')}/mo
                                </option>
                              ))}
                            </select>
                            <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none border-solid border-[#1F2937] border-t-4 border-x-transparent border-x-4 border-b-0" />
                          </div>
                        </div>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                        {/* Expected Move-in Date * */}
                        <div>
                          <label className="block text-[11px] font-semibold text-[#1F2937] mb-1.5 uppercase tracking-wider">
                            Expected Move-in Date *
                          </label>
                          <div className="relative">
                            <Calendar className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-[#2D6A4F]" strokeWidth={2} />
                            <input
                              type="date"
                              value={formData.moveInDate}
                              onChange={(e) => setFormData({ ...formData, moveInDate: e.target.value })}
                              className={`w-full h-[56px] font-sans text-sm pl-[48px] pr-10 rounded-[16px] border bg-white text-[#1F2937] font-medium placeholder-[#9CA3AF] focus:border-[#2D6A4F] focus:ring-2 focus:ring-[#2D6A4F]/20 focus:outline-none focus:bg-white transition-all ${
                                errors.moveInDate ? 'border-red-500 ring-2 ring-red-100' : 'border-[#E9ECEF]'
                              }`}
                            />
                            {formData.moveInDate && (
                              <Check className="w-4 h-4 text-emerald-500 absolute right-3.5 top-1/2 -translate-y-1/2" />
                            )}
                          </div>
                          {errors.moveInDate && <span className="block text-[10px] text-red-500 mt-1 font-semibold">{errors.moveInDate}</span>}
                        </div>

                        {/* Duration of Stay */}
                        <div>
                          <label className="block text-[11px] font-semibold text-[#1F2937] mb-1.5 uppercase tracking-wider">
                            Duration of Stay
                          </label>
                          <div className="relative">
                            <CalendarDays className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-[#2D6A4F]" strokeWidth={2} />
                            <input
                              type="text"
                              placeholder="e.g. 6 months"
                              value={formData.durationOfStay}
                              onChange={(e) => setFormData({ ...formData, durationOfStay: e.target.value })}
                              className="w-full h-[56px] font-sans text-sm pl-[48px] pr-4 rounded-[16px] border border-[#E9ECEF] bg-white text-[#1F2937] font-medium placeholder-[#9CA3AF] focus:border-[#2D6A4F] focus:ring-2 focus:ring-[#2D6A4F]/20 focus:outline-none focus:bg-white transition-all"
                            />
                          </div>
                        </div>
                      </div>

                    </div>
                  )}

                  {/* Message (Optional) */}
                  <div>
                    <label className="block text-[11px] font-semibold text-[#1F2937] mb-1.5 uppercase tracking-wider">
                      {formData.type === 'Inquiry' ? 'Message (Optional)' : 'Message'}
                    </label>
                    <div className="relative">
                      <MessageSquare className="absolute left-4 top-[18px] w-5 h-5 text-[#2D6A4F]" strokeWidth={2} />
                      <textarea
                        placeholder="Ask about pricing, room availability, amenities, food, or anything else..."
                        rows={4}
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        className="w-full font-sans text-sm pl-[48px] pr-4 py-3.5 rounded-[16px] border border-[#E9ECEF] bg-white text-[#1F2937] font-medium placeholder-[#9CA3AF] focus:border-[#2D6A4F] focus:ring-2 focus:ring-[#2D6A4F]/20 focus:outline-none focus:bg-white transition-all resize-none"
                      />
                    </div>
                  </div>

                  {/* Submit Block */}
                  <div className="pt-2">
                    <button
                      type="submit"
                      className={`w-full h-14 font-sans font-bold text-xs uppercase tracking-wider rounded-[24px] transition-all duration-300 flex items-center justify-center space-x-2 cursor-pointer hover:-translate-y-0.5 active:translate-y-0 active:scale-[0.99] ${btnConfig.bgClass}`}
                    >
                      {btnConfig.icon}
                      <span>{btnConfig.text}</span>
                    </button>

                    <p className="text-[10px] text-center text-slate-gray mt-3 font-medium">
                      We respect your privacy. Your details will only be used to respond to your inquiry.
                    </p>
                  </div>

                </form>
              </div>
            )}

          </div>

        </div>

        {/* Embedded Full-Width Google Map Section */}
        <div className="mt-8 pt-8 border-t border-border-light/60">
          <div className="text-center mb-6">
            <h3 className="font-display font-extrabold text-2xl text-charcoal">
              Visit Unitas Home
            </h3>
          </div>

          <div className="space-y-4">
            {/* Map wrapper */}
            <div className="h-[350px] sm:h-[400px] lg:h-[500px] rounded-[20px] border border-border-light overflow-hidden shadow-2xs relative">
              <iframe
                title="Unitas Home – Girls & Boys PG/Hostel Official Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3444.649310442189!2d78.02105177556373!3d30.304043674793853!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390929cfd550b851%3A0x695bd5fd2072e6ca!2sUnitas%20Home%20%E2%80%93%20Girls%20%26%20Boys%20PG%2FHostel!5e0!3m2!1sen!2sin!4v1783508363100!5m2!1sen!2sin"
                className="w-full h-full border-0"
                style={{ border: 0, borderRadius: '20px' }}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="strict-origin-when-cross-origin"
              />
            </div>

            {/* Directions Button Centered Below map */}
            <div className="text-center">
              <a
                href="https://maps.app.goo.gl/mRBFHHVnxPmNjtVe7"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-2 bg-primary hover:bg-primary-dark text-white font-sans font-bold text-xs px-6 py-3 rounded-xl shadow-xs transition-all hover:scale-[1.015]"
              >
                <Navigation className="w-3.5 h-3.5" />
                <span>Get Directions on Google Maps</span>
              </a>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
