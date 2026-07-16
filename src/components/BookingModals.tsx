import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  X, 
  Star, 
  Check, 
  Calendar, 
  Clock, 
  Users, 
  ShieldCheck, 
  GraduationCap, 
  CheckCircle2, 
  Compass,
  ArrowRight,
  Sparkles,
  Home,
  MapPin,
  Phone
} from 'lucide-react';
import { ROOMS_DATA } from '../data';
import { Inquiry } from '../types';

interface BookVisitModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (inquiry: Omit<Inquiry, 'id' | 'timestamp' | 'status'>) => void;
  onExploreRooms?: () => void;
}

export function BookVisitModal({ isOpen, onClose, onSubmit, onExploreRooms }: BookVisitModalProps) {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    visitDate: '',
    timeSlot: '',
    visitorsCount: '1',
    message: ''
  });
  
  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [isSuccess, setIsSuccess] = useState(false);
  const modalRef = useRef<HTMLDivElement>(null);

  // Prevent background scroll
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  // Handle ESC key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  // Handle outside click
  const handleBackdropClick = (e: React.MouseEvent) => {
    if (modalRef.current && !modalRef.current.contains(e.target as Node)) {
      onClose();
    }
  };

  const validate = () => {
    const newErrors: { [key: string]: string } = {};
    if (!formData.name.trim()) newErrors.name = 'Full Name is required';
    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone Number is required';
    } else if (!/^\+?[\d\s-]{10,15}$/.test(formData.phone.trim())) {
      newErrors.phone = 'Please enter a valid 10-digit phone number';
    }
    if (formData.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }
    if (!formData.visitDate) newErrors.visitDate = 'Visit Date is required';
    if (!formData.timeSlot) newErrors.timeSlot = 'Time Slot is required';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    // Call submit handler with matching Inquiry structure
    onSubmit({
      name: formData.name,
      phone: formData.phone,
      email: formData.email,
      roomType: 'single-sharing', // Default roomType for visit
      moveInDate: formData.visitDate, // Store date
      message: `Preferred Time: ${formData.timeSlot}. Visitors: ${formData.visitorsCount}. ${formData.message}`,
      type: 'Schedule Visit',
      timeSlot: formData.timeSlot,
      visitorsCount: formData.visitorsCount,
      durationOfStay: ''
    });

    setIsSuccess(true);
  };

  const handleReset = () => {
    setFormData({
      name: '',
      phone: '',
      email: '',
      visitDate: '',
      timeSlot: '',
      visitorsCount: '1',
      message: ''
    });
    setErrors({});
    setIsSuccess(false);
  };

  if (!isOpen) return null;

  return (
    <div 
      className="fixed inset-0 z-100 flex items-end lg:items-center justify-center p-0 lg:p-4 select-none"
      onClick={handleBackdropClick}
    >
      {/* Backdrop with Blur - Optimized with bg-black/65 on mobile to avoid compositor layer trees and rendering bugs on mobile browsers */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="absolute inset-0 bg-black/65 lg:bg-black/55 lg:backdrop-blur-[6px]"
      />

      {/* Reusable Popup Box */}
      <motion.div
        ref={modalRef}
        initial={{ y: '100%', opacity: 0.9, scale: 1 }}
        animate={{ y: 0, opacity: 1, scale: 1 }}
        exit={{ y: '100%', opacity: 0, scale: 0.95 }}
        lg-animate-override="true"
        className="relative w-full lg:max-w-[850px] h-[92vh] lg:h-[90vh] lg:max-h-[660px] bg-white rounded-t-[24px] lg:rounded-[24px] shadow-2xl flex flex-col lg:flex-row overflow-hidden z-10"
        style={{
          // For desktop override spring values
          transition: 'transform 0.25s cubic-bezier(0.16, 1, 0.3, 1), opacity 0.25s ease-out'
        }}
      >
        {/* Close Button - Premium refinement */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-30 w-9 h-9 flex items-center justify-center rounded-full bg-white border border-slate-200/80 shadow-md text-slate-600 hover:text-[#2D6A4F] hover:border-[#D4AF37] hover:shadow-[0_0_15px_rgba(244,180,0,0.4)] transition-all duration-300 hover:rotate-90 cursor-pointer"
          aria-label="Close booking popup"
        >
          <X className="w-4.5 h-4.5" />
        </button>

        {/* Left Side: Premium Visual Section (Desktop Only - 40%) */}
        <div className="hidden lg:flex lg:w-[40%] relative shrink-0 select-none overflow-hidden">
          {/* Background Image with subtle enhancements */}
          <img 
            src="https://lh3.googleusercontent.com/gps-cs-s/APNQkAExBnLPdRDf0jCy7M1rsm_hHeykGF_BBbBKmHIy0KbsLNO-i3F-SbXyNfrswmmonbw_RWe0Sa8VdHB5nz9WRuh4yxfjcJPcDbfDkBsxl_c5OD18nQLpMD_Ll0SYeRG5nZTBHZkHjQ=s1360-w1360-h1020-rw"
            alt="Unitas Home Building Night View"
            title="Unitas Home Building Night View"
            className="absolute inset-0 w-full h-full object-cover"
            style={{ filter: 'brightness(1.05) contrast(1.08) saturate(1.05)' }}
            loading="lazy"
            decoding="async"
            referrerPolicy="no-referrer"
          />
        </div>

        {/* Right Side / Mobile: Form content (60%) */}
        <div className="lg:w-[60%] w-full flex flex-col h-full bg-white text-left relative overflow-hidden">
          <AnimatePresence mode="wait">
            {!isSuccess ? (
              <motion.form
                key="form-step"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onSubmit={handleSubmit}
                className="flex flex-col h-full overflow-hidden"
              >
                {/* Scrollable Container */}
                <div className="flex-grow overflow-y-auto px-6 sm:px-8 pt-8 pb-6 space-y-5">
                  {/* Popup Header */}
                  <div className="text-center max-w-lg mx-auto pb-2">
                    <h2 className="font-display font-extrabold text-2xl text-charcoal tracking-tight">
                      Book Your Visit
                    </h2>
                    <p className="font-sans text-xs sm:text-sm text-slate-gray mt-2 leading-relaxed">
                      Schedule a free property visit and explore premium student living at Unitas Home before making your decision.
                    </p>
                  </div>

                  {/* Form fields */}
                  <div className="space-y-4">
                    {/* Full Name */}
                    <div>
                      <label className="block text-[11px] font-bold text-charcoal uppercase tracking-wider mb-1.5">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className={`w-full h-11 px-4 rounded-xl border bg-slate-50/50 font-sans text-xs font-semibold text-charcoal transition-all placeholder:text-slate-400 focus:outline-hidden focus:bg-white ${
                          errors.name 
                            ? 'border-red-500 focus:ring-2 focus:ring-red-100' 
                            : 'border-slate-200 focus:border-[#2D6A4F] focus:ring-4 focus:ring-[#2D6A4F]/10'
                        }`}
                        placeholder="e.g. Ayush Dobhal"
                      />
                      {errors.name && <span className="text-[10px] text-red-500 font-bold mt-1 block">{errors.name}</span>}
                    </div>

                    {/* Row: Phone & Email */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {/* Phone */}
                      <div>
                        <label className="block text-[11px] font-bold text-charcoal uppercase tracking-wider mb-1.5">
                          Phone Number *
                        </label>
                        <input
                          type="tel"
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          className={`w-full h-11 px-4 rounded-xl border bg-slate-50/50 font-sans text-xs font-semibold text-charcoal transition-all placeholder:text-slate-400 focus:outline-hidden focus:bg-white ${
                            errors.phone 
                              ? 'border-red-500 focus:ring-2 focus:ring-red-100' 
                              : 'border-slate-200 focus:border-[#2D6A4F] focus:ring-4 focus:ring-[#2D6A4F]/10'
                          }`}
                          placeholder="e.g. +91 98765 43210"
                        />
                        {errors.phone && <span className="text-[10px] text-red-500 font-bold mt-1 block">{errors.phone}</span>}
                      </div>

                      {/* Email */}
                      <div>
                        <label className="block text-[11px] font-bold text-charcoal uppercase tracking-wider mb-1.5">
                          Email Address (Optional)
                        </label>
                        <input
                          type="email"
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          className={`w-full h-11 px-4 rounded-xl border bg-slate-50/50 font-sans text-xs font-semibold text-charcoal transition-all placeholder:text-slate-400 focus:outline-hidden focus:bg-white ${
                            errors.email 
                              ? 'border-red-500 focus:ring-2 focus:ring-red-100' 
                              : 'border-slate-200 focus:border-[#2D6A4F] focus:ring-4 focus:ring-[#2D6A4F]/10'
                          }`}
                          placeholder="e.g. ayush@gmail.com"
                        />
                        {errors.email && <span className="text-[10px] text-red-500 font-bold mt-1 block">{errors.email}</span>}
                      </div>
                    </div>

                    {/* Row: Visit Date & Time Slot */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {/* Preferred Visit Date */}
                      <div>
                        <label className="block text-[11px] font-bold text-charcoal uppercase tracking-wider mb-1.5">
                          Preferred Visit Date *
                        </label>
                        <div className="relative">
                          <input
                            type="date"
                            min={new Date().toISOString().split('T')[0]}
                            value={formData.visitDate}
                            onChange={(e) => setFormData({ ...formData, visitDate: e.target.value })}
                            className={`w-full h-11 px-4 rounded-xl border bg-slate-50/50 font-sans text-xs font-semibold text-charcoal transition-all focus:outline-hidden focus:bg-white ${
                              errors.visitDate 
                                ? 'border-red-500 focus:ring-2 focus:ring-red-100' 
                                : 'border-slate-200 focus:border-[#2D6A4F] focus:ring-4 focus:ring-[#2D6A4F]/10'
                            }`}
                            placeholder="Select your visit date"
                          />
                        </div>
                        {errors.visitDate && <span className="text-[10px] text-red-500 font-bold mt-1 block">{errors.visitDate}</span>}
                      </div>

                      {/* Preferred Time Slot */}
                      <div>
                        <label className="block text-[11px] font-bold text-charcoal uppercase tracking-wider mb-1.5">
                          Preferred Time Slot *
                        </label>
                        <select
                          value={formData.timeSlot}
                          onChange={(e) => setFormData({ ...formData, timeSlot: e.target.value })}
                          className={`w-full h-11 px-4 rounded-xl border bg-slate-50/50 font-sans text-xs font-semibold text-charcoal transition-all focus:outline-hidden focus:bg-white ${
                            errors.timeSlot 
                              ? 'border-red-500 focus:ring-2 focus:ring-red-100' 
                              : 'border-slate-200 focus:border-[#2D6A4F] focus:ring-4 focus:ring-[#2D6A4F]/10'
                          }`}
                        >
                          <option value="">Choose a preferred time</option>
                          <option value="10:00 AM - 12:00 PM">10:00 AM - 12:00 PM</option>
                          <option value="12:00 PM - 02:00 PM">12:00 PM - 02:00 PM</option>
                          <option value="02:00 PM - 04:00 PM">02:00 PM - 04:00 PM</option>
                          <option value="04:00 PM - 06:00 PM">04:00 PM - 06:00 PM</option>
                        </select>
                        {errors.timeSlot && <span className="text-[10px] text-red-500 font-bold mt-1 block">{errors.timeSlot}</span>}
                      </div>
                    </div>

                    {/* Visitors Count */}
                    <div>
                      <label className="block text-[11px] font-bold text-charcoal uppercase tracking-wider mb-1.5">
                        Number of Visitors (Optional)
                      </label>
                      <select
                        value={formData.visitorsCount}
                        onChange={(e) => setFormData({ ...formData, visitorsCount: e.target.value })}
                        className="w-full h-11 px-4 rounded-xl border border-slate-200 bg-slate-50/50 font-sans text-xs font-semibold text-charcoal transition-all focus:outline-hidden focus:bg-white focus:border-[#2D6A4F] focus:ring-4 focus:ring-[#2D6A4F]/10"
                      >
                        <option value="1">1 Person</option>
                        <option value="2">2 People</option>
                        <option value="3">3 People</option>
                        <option value="4+">4+ People</option>
                      </select>
                    </div>

                    {/* Message */}
                    <div>
                      <label className="block text-[11px] font-bold text-charcoal uppercase tracking-wider mb-1.5">
                        Message (Optional)
                      </label>
                      <textarea
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        className="w-full h-20 p-3 rounded-xl border border-slate-200 bg-slate-50/50 font-sans text-xs font-semibold text-charcoal transition-all placeholder:text-slate-400 focus:outline-hidden focus:bg-white focus:border-[#2D6A4F] focus:ring-4 focus:ring-[#2D6A4F]/10 resize-none"
                        placeholder="Tell us if you have any room preference, college, budget or special requirements..."
                      />
                    </div>
                  </div>
                </div>

                {/* Sticky CTA Footer - Always visible, with a subtle divider above */}
                <div className="bg-white border-t border-slate-100 p-4 sm:px-8 flex items-center justify-center z-20 shrink-0">
                  <button
                    type="submit"
                    className="w-full h-12 bg-[#D4AF37] hover:bg-[#C79A17] text-[#1F2937] font-sans font-bold text-xs uppercase tracking-wider rounded-full shadow-[0_4px_14px_rgba(212,175,55,0.25)] hover:shadow-[0_8px_20px_rgba(212,175,55,0.4)] transition-all duration-250 flex items-center justify-center space-x-2 cursor-pointer hover:-translate-y-0.5 active:translate-y-0"
                  >
                    <Calendar className="w-4 h-4 text-[#1F2937]" />
                    <span>Book My Visit</span>
                  </button>
                </div>
              </motion.form>
            ) : (
              <motion.div
                key="success-step"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                className="flex-grow overflow-y-auto px-6 sm:px-8 py-8 flex flex-col items-center justify-center text-center space-y-5 h-full"
              >
                <div className="w-16 h-16 rounded-full bg-[#2D6A4F]/10 flex items-center justify-center text-[#2D6A4F]">
                  <Check className="w-8 h-8 stroke-[3]" />
                </div>
                <div className="space-y-2">
                  <h3 className="font-display font-extrabold text-2xl text-charcoal">
                    Visit Request Sent Successfully!
                  </h3>
                  <p className="font-sans text-sm text-slate-gray max-w-sm mx-auto leading-relaxed">
                    Thank you for your interest in Unitas Home. Our team will contact you shortly to confirm your visit.
                  </p>
                </div>
                <div className="flex flex-col sm:flex-row items-center gap-3 w-full max-w-xs pt-4">
                  <button
                    onClick={onClose}
                    className="w-full h-11 bg-[#2D6A4F] hover:bg-[#1B4332] text-white font-sans font-bold text-xs uppercase tracking-wider rounded-full transition-all cursor-pointer shadow-xs"
                  >
                    Close
                  </button>
                  {onExploreRooms && (
                    <button
                      onClick={() => {
                        onExploreRooms();
                        onClose();
                      }}
                      className="w-full h-11 bg-white border border-[#2D6A4F]/20 text-[#2D6A4F] hover:bg-[#2D6A4F]/5 font-sans font-bold text-xs uppercase tracking-wider rounded-full transition-all cursor-pointer flex items-center justify-center gap-1.5"
                    >
                      Explore Rooms
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  )}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </motion.div>
    </div>
  );
}

interface ReserveRoomModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (inquiry: Omit<Inquiry, 'id' | 'timestamp' | 'status'>) => void;
  initialRoomId?: string | null;
  onBookVisit?: () => void;
}

export function ReserveRoomModal({ isOpen, onClose, onSubmit, initialRoomId, onBookVisit }: ReserveRoomModalProps) {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    roomType: initialRoomId || '',
    moveInDate: '',
    duration: '',
    message: ''
  });

  const [isDateFocused, setIsDateFocused] = useState(false);
  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [isSuccess, setIsSuccess] = useState(false);
  const modalRef = useRef<HTMLDivElement>(null);

  // Sync initialRoomId if it changes
  useEffect(() => {
    if (initialRoomId) {
      setFormData(prev => ({ ...prev, roomType: initialRoomId }));
    }
  }, [initialRoomId]);

  // Prevent background scroll
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  // Handle ESC key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  // Handle outside click
  const handleBackdropClick = (e: React.MouseEvent) => {
    if (modalRef.current && !modalRef.current.contains(e.target as Node)) {
      onClose();
    }
  };

  const validate = () => {
    const newErrors: { [key: string]: string } = {};
    if (!formData.name.trim()) newErrors.name = 'Full Name is required';
    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone Number is required';
    } else if (!/^\+?[\d\s-]{10,15}$/.test(formData.phone.trim())) {
      newErrors.phone = 'Please enter a valid 10-digit phone number';
    }
    if (formData.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }
    if (!formData.roomType) newErrors.roomType = 'Preferred Room Type is required';
    if (!formData.moveInDate) newErrors.moveInDate = 'Expected Move-In Date is required';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    onSubmit({
      name: formData.name,
      phone: formData.phone,
      email: formData.email,
      roomType: formData.roomType,
      moveInDate: formData.moveInDate,
      message: formData.duration 
        ? `Stay Duration: ${formData.duration} Months. ${formData.message}`
        : formData.message,
      type: 'Reserve Room',
      timeSlot: '',
      visitorsCount: '',
      durationOfStay: formData.duration ? `${formData.duration} Months` : ''
    });

    setIsSuccess(true);
  };

  if (!isOpen) return null;

  return (
    <div 
      className="fixed inset-0 z-100 flex items-end lg:items-center justify-center p-0 lg:p-4 select-none"
      onClick={handleBackdropClick}
    >
      {/* Backdrop with Blur - Optimized with bg-black/65 on mobile to avoid compositor layer trees and rendering bugs on mobile browsers */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="absolute inset-0 bg-black/65 lg:bg-black/55 lg:backdrop-blur-[6px]"
      />

      {/* Reusable Popup Box */}
      <motion.div
        ref={modalRef}
        initial={{ y: '100%', opacity: 0.9, scale: 1 }}
        animate={{ y: 0, opacity: 1, scale: 1 }}
        exit={{ y: '100%', opacity: 0, scale: 0.95 }}
        className="relative w-full lg:max-w-[760px] h-[92vh] lg:h-[90vh] lg:max-h-[660px] bg-white rounded-t-[24px] lg:rounded-[24px] shadow-2xl flex flex-col lg:flex-row overflow-hidden z-10"
        style={{
          transition: 'transform 0.25s cubic-bezier(0.16, 1, 0.3, 1), opacity 0.25s ease-out'
        }}
      >
        {/* Close Button - Premium refinement */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-30 w-9 h-9 flex items-center justify-center rounded-full bg-white border border-slate-200/80 shadow-md text-slate-600 hover:text-[#2D6A4F] hover:border-[#D4AF37] hover:shadow-[0_0_15px_rgba(244,180,0,0.4)] transition-all duration-300 hover:rotate-90 cursor-pointer"
          aria-label="Close reservation popup"
        >
          <X className="w-4.5 h-4.5" />
        </button>

        {/* Left Side: Premium Trust Panel (Desktop Only) - Soft yellow accent background */}
        <div className="hidden lg:flex w-[35%] bg-[#D4AF37]/5 p-8 flex-col justify-between border-r border-slate-100 text-left shrink-0">
          <div>
            <div className="flex items-center gap-0.5 text-[#D4AF37] mb-2.5">
              <Star className="w-4.5 h-4.5 fill-[#D4AF37] stroke-[#D4AF37]" />
              <Star className="w-4.5 h-4.5 fill-[#D4AF37] stroke-[#D4AF37]" />
              <Star className="w-4.5 h-4.5 fill-[#D4AF37] stroke-[#D4AF37]" />
              <Star className="w-4.5 h-4.5 fill-[#D4AF37] stroke-[#D4AF37]" />
              <Star className="w-4.5 h-4.5 fill-[#D4AF37] stroke-[#D4AF37]" />
            </div>
            <p className="font-display font-extrabold text-[28px] text-[#2D6A4F] tracking-tight leading-none">
              4.6 <span className="text-xs font-bold text-slate-500 uppercase tracking-wider ml-1">Google Rating</span>
            </p>
            <p className="font-sans text-xs text-slate-gray font-semibold mt-1">
              Based on Google Reviews
            </p>
          </div>

          <div className="space-y-4 py-6">
            <div className="flex items-center gap-2.5">
              <Check className="w-4.5 h-4.5 text-[#2D6A4F] shrink-0 stroke-[2.5]" />
              <span className="font-sans text-xs font-bold text-charcoal/85">Secure Your Preferred Room</span>
            </div>
            <div className="flex items-center gap-2.5">
              <Check className="w-4.5 h-4.5 text-[#2D6A4F] shrink-0 stroke-[2.5]" />
              <span className="font-sans text-xs font-bold text-charcoal/85">Zero Brokerage</span>
            </div>
            <div className="flex items-center gap-2.5">
              <Check className="w-4.5 h-4.5 text-[#2D6A4F] shrink-0 stroke-[2.5]" />
              <span className="font-sans text-xs font-bold text-charcoal/85">Flexible Move-in</span>
            </div>
            <div className="flex items-center gap-2.5">
              <Check className="w-4.5 h-4.5 text-[#2D6A4F] shrink-0 stroke-[2.5]" />
              <span className="font-sans text-xs font-bold text-charcoal/85">Premium Student Living</span>
            </div>
            <div className="flex items-center gap-2.5">
              <Check className="w-4.5 h-4.5 text-[#2D6A4F] shrink-0 stroke-[2.5]" />
              <span className="font-sans text-xs font-bold text-charcoal/85">Reservation Confirmed by Our Team</span>
            </div>
          </div>

          <div className="pt-4 border-t border-[#D4AF37]/25 text-slate-700">
            <span className="text-[10px] uppercase font-bold tracking-widest text-slate-400">
              Need Assistance?
            </span>
            <div className="mt-2.5 space-y-2">
              <a 
                href="tel:+919675591951"
                className="flex items-center gap-2 text-xs font-semibold hover:text-[#2D6A4F] transition-colors"
              >
                <Phone className="w-3.5 h-3.5 text-[#2D6A4F] shrink-0" />
                <span>Call Now: <strong className="font-bold">+91 96755 91951</strong></span>
              </a>
              <div className="text-[9px] uppercase font-bold tracking-wider text-slate-300 pl-5.5">or</div>
              <a 
                href="https://wa.me/919675591951?text=Hi%20Unitas%20Home%2C%20I%20need%20assistance%20with%20booking%20a%20room."
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 text-xs font-semibold hover:text-[#20C65A] transition-colors"
              >
                <svg className="w-3.5 h-3.5 fill-[#25D366] text-[#25D366] shrink-0" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662c1.746.953 3.71 1.458 5.704 1.459h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                </svg>
                <span>Chat on WhatsApp</span>
              </a>
            </div>
          </div>
        </div>

        {/* Right Side / Mobile: Form content */}
        <div className="flex-1 flex flex-col h-full bg-white text-left relative overflow-hidden">
          <AnimatePresence mode="wait">
            {!isSuccess ? (
              <motion.form
                key="reserve-form-step"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onSubmit={handleSubmit}
                className="flex flex-col h-full overflow-hidden"
              >
                {/* Scrollable Container */}
                <div className="flex-grow overflow-y-auto px-6 sm:px-8 pt-8 pb-6 space-y-5">
                  {/* Popup Header */}
                  <div className="text-center max-w-lg mx-auto pb-2">
                    <h2 className="font-display font-extrabold text-2xl text-charcoal tracking-tight">
                      Reserve Your Room
                    </h2>
                    <p className="font-sans text-xs sm:text-sm text-slate-gray mt-2 leading-relaxed">
                      Complete the details below and our team will contact you to confirm your reservation.
                    </p>
                  </div>

                  {/* Form fields */}
                  <div className="space-y-4">
                    {/* Full Name */}
                    <div>
                      <label className="block text-[11px] font-bold text-charcoal uppercase tracking-wider mb-1.5">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className={`w-full h-11 px-4 rounded-xl border bg-slate-50/50 font-sans text-xs font-semibold text-charcoal transition-all placeholder:text-slate-400 focus:outline-hidden focus:bg-white ${
                          errors.name 
                            ? 'border-red-500 focus:ring-2 focus:ring-red-100' 
                            : 'border-slate-200 focus:border-[#2D6A4F] focus:ring-4 focus:ring-[#2D6A4F]/10'
                        }`}
                        placeholder="e.g. Ayush Dobhal"
                      />
                      {errors.name && <span className="text-[10px] text-red-500 font-bold mt-1 block">{errors.name}</span>}
                    </div>

                    {/* Row: Phone & Email */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {/* Phone */}
                      <div>
                        <label className="block text-[11px] font-bold text-charcoal uppercase tracking-wider mb-1.5">
                          Phone Number *
                        </label>
                        <input
                          type="tel"
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          className={`w-full h-11 px-4 rounded-xl border bg-slate-50/50 font-sans text-xs font-semibold text-charcoal transition-all placeholder:text-slate-400 focus:outline-hidden focus:bg-white ${
                            errors.phone 
                              ? 'border-red-500 focus:ring-2 focus:ring-red-100' 
                              : 'border-slate-200 focus:border-[#2D6A4F] focus:ring-4 focus:ring-[#2D6A4F]/10'
                          }`}
                          placeholder="e.g. +91 98765 43210"
                        />
                        {errors.phone && <span className="text-[10px] text-red-500 font-bold mt-1 block">{errors.phone}</span>}
                      </div>

                      {/* Email */}
                      <div>
                        <label className="block text-[11px] font-bold text-charcoal uppercase tracking-wider mb-1.5">
                          Email (Optional)
                        </label>
                        <input
                          type="email"
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          className={`w-full h-11 px-4 rounded-xl border bg-slate-50/50 font-sans text-xs font-semibold text-charcoal transition-all placeholder:text-slate-400 focus:outline-hidden focus:bg-white ${
                            errors.email 
                              ? 'border-red-500 focus:ring-2 focus:ring-red-100' 
                              : 'border-slate-200 focus:border-[#2D6A4F] focus:ring-4 focus:ring-[#2D6A4F]/10'
                          }`}
                          placeholder="e.g. ayush@gmail.com"
                        />
                        {errors.email && <span className="text-[10px] text-red-500 font-bold mt-1 block">{errors.email}</span>}
                      </div>
                    </div>

                    {/* Row: Room Type & Expected Move-In Date */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {/* Preferred Room Type */}
                      <div>
                        <label className="block text-[11px] font-bold text-charcoal uppercase tracking-wider mb-1.5">
                          Preferred Room Type *
                        </label>
                        <select
                          value={formData.roomType}
                          onChange={(e) => setFormData({ ...formData, roomType: e.target.value })}
                          className={`w-full h-11 px-4 rounded-xl border bg-slate-50/50 font-sans text-xs font-semibold text-charcoal transition-all focus:outline-hidden focus:bg-white ${
                            errors.roomType 
                              ? 'border-red-500 focus:ring-2 focus:ring-red-100' 
                              : 'border-slate-200 focus:border-[#2D6A4F] focus:ring-4 focus:ring-[#2D6A4F]/10'
                          }`}
                        >
                          <option value="" disabled hidden>Select your preferred room</option>
                          {ROOMS_DATA.map((room) => (
                            <option key={room.id} value={room.id}>
                              {room.name}
                            </option>
                          ))}
                        </select>
                        {errors.roomType && <span className="text-[10px] text-red-500 font-bold mt-1 block">{errors.roomType}</span>}
                      </div>

                      {/* Expected Move-in Date */}
                      <div>
                        <label className="block text-[11px] font-bold text-charcoal uppercase tracking-wider mb-1.5">
                          Expected Move-in Date *
                        </label>
                        <input
                          type={isDateFocused || formData.moveInDate ? "date" : "text"}
                          onFocus={() => setIsDateFocused(true)}
                          onBlur={() => setIsDateFocused(false)}
                          placeholder="Select your expected move-in date"
                          min={new Date().toISOString().split('T')[0]}
                          value={formData.moveInDate}
                          onChange={(e) => setFormData({ ...formData, moveInDate: e.target.value })}
                          className={`w-full h-11 px-4 rounded-xl border bg-slate-50/50 font-sans text-xs font-semibold text-charcoal transition-all focus:outline-hidden focus:bg-white ${
                            errors.moveInDate 
                              ? 'border-red-500 focus:ring-2 focus:ring-red-100' 
                              : 'border-slate-200 focus:border-[#2D6A4F] focus:ring-4 focus:ring-[#2D6A4F]/10'
                          }`}
                        />
                        {errors.moveInDate && <span className="text-[10px] text-red-500 font-bold mt-1 block">{errors.moveInDate}</span>}
                      </div>
                    </div>

                    {/* Duration of Stay */}
                    <div>
                      <label className="block text-[11px] font-bold text-charcoal uppercase tracking-wider mb-1.5">
                        Duration of Stay (Optional)
                      </label>
                      <select
                        value={formData.duration}
                        onChange={(e) => setFormData({ ...formData, duration: e.target.value })}
                        className="w-full h-11 px-4 rounded-xl border border-slate-200 bg-slate-50/50 font-sans text-xs font-semibold text-charcoal transition-all focus:outline-hidden focus:bg-white focus:border-[#2D6A4F] focus:ring-4 focus:ring-[#2D6A4F]/10"
                      >
                        <option value="" disabled hidden>Select duration of stay</option>
                        <option value="1">1 Month</option>
                        <option value="3">3 Months</option>
                        <option value="6">6 Months</option>
                        <option value="12">12 Months (Full Academic Year)</option>
                      </select>
                    </div>

                    {/* Message */}
                    <div>
                      <label className="block text-[11px] font-bold text-charcoal uppercase tracking-wider mb-1.5">
                        Message (Optional)
                      </label>
                      <textarea
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        className="w-full h-20 p-3 rounded-xl border border-slate-200 bg-slate-50/50 font-sans text-xs font-semibold text-charcoal transition-all placeholder:text-slate-400 focus:outline-hidden focus:bg-white focus:border-[#2D6A4F] focus:ring-4 focus:ring-[#2D6A4F]/10 resize-none"
                        placeholder="Tell us your preferred move-in date, college/company, or any special requirements..."
                      />
                    </div>
                  </div>
                </div>

                {/* Sticky CTA Footer - Always visible, with a subtle divider above */}
                <div className="bg-white border-t border-slate-100 p-4 sm:px-8 flex items-center justify-center z-20 shrink-0">
                  <button
                    type="submit"
                    className="w-full h-12 bg-[#2D6A4F] hover:bg-[#1B4332] text-white font-sans font-bold text-xs uppercase tracking-wider rounded-full shadow-[0_4px_14px_rgba(45,106,79,0.25)] hover:shadow-[0_8px_20px_rgba(45,106,79,0.35)] transition-all duration-250 ease-out flex items-center justify-center space-x-2 cursor-pointer hover:-translate-y-[2px] active:translate-y-0"
                  >
                    <Check className="w-4 h-4 text-white stroke-[3]" />
                    <span>Reserve My Room</span>
                  </button>
                </div>
              </motion.form>
            ) : (
              <motion.div
                key="reserve-success-step"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                className="flex-grow overflow-y-auto px-6 sm:px-8 py-8 flex flex-col items-center justify-center text-center space-y-5 h-full"
              >
                <div className="w-16 h-16 rounded-full bg-[#D4AF37]/15 flex items-center justify-center text-[#C59B27]">
                  <Check className="w-8 h-8 stroke-[3]" />
                </div>
                <div className="space-y-2">
                  <h3 className="font-display font-extrabold text-2xl text-charcoal">
                    Reservation Request Received!
                  </h3>
                  <p className="font-sans text-sm font-bold text-[#C59B27] max-w-sm mx-auto leading-relaxed">
                    Your room has not been booked yet.
                  </p>
                  <p className="font-sans text-xs sm:text-sm text-slate-gray max-w-sm mx-auto leading-relaxed">
                    Our team will contact you shortly to verify availability and confirm your reservation.
                  </p>
                </div>
                <div className="flex flex-col sm:flex-row items-center gap-3 w-full max-w-xs pt-4">
                  <button
                    onClick={onClose}
                    className="w-full h-11 bg-slate-100 hover:bg-slate-200 text-[#1F2937] font-sans font-bold text-xs uppercase tracking-wider rounded-full transition-all cursor-pointer"
                  >
                    Close
                  </button>
                  {onBookVisit && (
                    <button
                      onClick={onBookVisit}
                      className="w-full h-11 bg-[#D4AF37] hover:bg-[#C79A17] text-[#1F2937] font-sans font-bold text-xs uppercase tracking-wider rounded-full transition-all cursor-pointer shadow-[0_4px_14px_rgba(212,175,55,0.25)] flex items-center justify-center gap-1.5"
                    >
                      Book a Visit
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  )}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </motion.div>
    </div>
  );
}
