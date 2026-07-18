/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Calendar, Key, CheckCircle, Download, Printer, Send, Bot, User, Clock, AlertTriangle, ShieldCheck, MapPin, QrCode } from 'lucide-react';
import { ROOMS_DATA } from '../data';
import { Room, Inquiry } from '../types';

interface SchedulerDashboardProps {
  inquiries: Inquiry[];
  onCancelInquiry: (id: string) => void;
}

export default function SchedulerDashboard({ inquiries, onCancelInquiry }: SchedulerDashboardProps) {
  const [chatMessages, setChatMessages] = useState<Array<{ sender: 'user' | 'bot'; text: string; time: string }>>([
    {
      sender: 'bot',
      text: 'Namaste! I am Arjun, the Senior Resident Warden at Unitas Home. I am here to assist you or your parents with any queries regarding our luxury rooms, food menu, security measures, or scheduling a visit. What can I help you with today?',
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    }
  ]);
  const [userInput, setUserInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);

  // Auto-respond chatbot
  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    if (!userInput.trim()) return;

    const userMsg = userInput.trim();
    const currentTime = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });

    setChatMessages((prev) => [...prev, { sender: 'user', text: userMsg, time: currentTime }]);
    setUserInput('');
    setIsTyping(true);

    setTimeout(() => {
      let botResponse = "That's a great question! For precise vacancy details, roommate matching, or immediate booking confirmations, please click the green WhatsApp button or Call us. I would be happy to discuss this over a call!";
      const text = userMsg.toLowerCase();

      if (text.includes('food') || text.includes('meal') || text.includes('eat') || text.includes('lunch') || text.includes('cook') || text.includes('dinner') || text.includes('diet') || text.includes('breakfast')) {
        botResponse = "We serve 3 highly nutritious, home-style buffet meals daily: Breakfast, Lunch, and Dinner. We have a weekly menu containing fresh vegetables, paneer, eggs, and non-veg options on weekends. Everything is prepared in our modern, immaculate commercial kitchen.";
      } else if (text.includes('wifi') || text.includes('internet') || text.includes('speed') || text.includes('wifi') || text.includes('net')) {
        botResponse = "Wi-Fi is 100% free and fully included in your rent! It runs on up to 150 Mbps symmetric commercial fiber lines. We have installed multiple high-frequency routers on every single floor to prevent coverage dead-zones.";
      } else if (text.includes('rent') || text.includes('price') || text.includes('cost') || text.includes('deposit') || text.includes('advance') || text.includes('payment') || text.includes('fee')) {
        botResponse = "Single sharing is ₹11,000/month, twin sharing is ₹5,500/month, and triple sharing is ₹4,500/month. We collect a security deposit equivalent to one month's rent at the time of check-in, which is fully refundable upon checkout (subject to a standard 30-day prior notice).";
      } else if (text.includes('security') || text.includes('safe') || text.includes('girls') || text.includes('camera') || text.includes('cctv') || text.includes('warden')) {
        botResponse = "Safety is our core foundation. Unitas Home has 24x7 gated watchmen, dynamic CCTV surveillance of all walkways and exits, a biometric fingerprint door access system, and strict visitor regulations. We maintain an extremely secure, quiet, and friendly campus.";
      } else if (text.includes('visit') || text.includes('schedule') || text.includes('locate') || text.includes('address') || text.includes('map') || text.includes('where')) {
        botResponse = "Our address is 1191K, Malviya Colony, Dehradkhas, Dehradun (Uttarakhand) – 248001. We are right next to Mahant Indresh Hospital. Visits and walkthroughs are open from 9:30 AM to 7:00 PM every day. You can schedule a visit via the form on our site!";
      } else if (text.includes('power') || text.includes('backup') || text.includes('electricity') || text.includes('inverter') || text.includes('generator')) {
        botResponse = "Yes! The property is equipped with an inverter-based power backup system that ensures uninterrupted electricity during power outages, keeping essential services running for a comfortable stay.";
      } else if (text.includes('visitor') || text.includes('friend') || text.includes('parent') || text.includes('overnight')) {
        botResponse = "Parents are always welcome to visit your rooms during daytime hours. To maintain absolute safety and study environments, unrelated outside guests are limited to the lobby lounge. Parents can stay overnight with pre-approval.";
      }

      setChatMessages((prev) => [...prev, { sender: 'bot', text: botResponse, time: currentTime }]);
      setIsTyping(false);
    }, 1200);
  };

  const handlePrintPass = (inquiryId: string) => {
    const printContent = document.getElementById(`pass-card-${inquiryId}`);
    if (printContent) {
      const originalBody = document.body.innerHTML;
      document.body.innerHTML = printContent.innerHTML;
      window.print();
      document.body.innerHTML = originalBody;
      window.location.reload(); // Reload to restore react states
    }
  };

  return (
    <section className="py-24 bg-bg-warm min-h-screen pt-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Dashboard Title */}
        <div className="mb-12 border-b border-border-light pb-6">
          <span className="text-xs uppercase font-extrabold text-primary tracking-widest bg-primary/10 px-3 py-1 rounded-full">
            Resident Portal
          </span>
          <h1 className="font-display font-extrabold text-3xl sm:text-4xl text-charcoal mt-3">
            My Bookings & Pass Dashboard
          </h1>
          <p className="font-sans text-sm text-slate-gray mt-1">
            Track active walkthrough passes, download bookings confirmation slips, and chat with Unitas Home warden live.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* LHS - Passes & Bookings list (Col span 7) */}
          <div className="lg:col-span-7 space-y-8">
            <h2 className="font-display font-bold text-xl text-charcoal flex items-center space-x-2">
              <ShieldCheck className="w-5 h-5 text-primary" />
              <span>Active Passes & Room Allocations ({inquiries.length})</span>
            </h2>

            {inquiries.length === 0 ? (
              <div className="bg-surface-white p-12 rounded-3xl border border-border-light text-center shadow-xs">
                <AlertTriangle className="w-12 h-12 text-accent mx-auto mb-4" />
                <h3 className="font-display font-bold text-lg text-charcoal">No Active Passes Found</h3>
                <p className="font-sans text-xs text-slate-gray max-w-sm mx-auto mt-2 leading-relaxed">
                  You haven't requested any room bookings or scheduled walkthrough visits yet. Use our inquiry form below to create your pass.
                </p>
              </div>
            ) : (
              <div className="space-y-6">
                {inquiries.map((inq) => {
                  const room = ROOMS_DATA.find((r) => r.id === inq.roomType) || ROOMS_DATA[0];
                  return (
                    <div
                      key={inq.id}
                      className="bg-surface-white rounded-3xl border border-border-light shadow-md luxury-card-shadow overflow-hidden"
                    >
                      {/* Printable Pass Container */}
                      <div id={`pass-card-${inq.id}`} className="p-6 sm:p-8 bg-surface-white">
                        <div className="border-4 border-dashed border-primary/20 rounded-2xl p-5 sm:p-6 bg-bg-warm/30 relative">
                          
                          {/* Cutout decors for boarding pass look */}
                          <div className="absolute top-1/2 -left-3 w-6 h-6 rounded-full bg-bg-warm border-r border-border-light -translate-y-1/2" />
                          <div className="absolute top-1/2 -right-3 w-6 h-6 rounded-full bg-bg-warm border-l border-border-light -translate-y-1/2" />

                          {/* Pass Header */}
                          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between border-b border-border-light/60 pb-4 mb-5 gap-3">
                            <div>
                              <span className="text-[10px] uppercase font-bold text-slate-gray tracking-wider">
                                {inq.type} Pass
                              </span>
                              <h3 className="font-display font-extrabold text-base text-charcoal">
                                Unitas Home Entry Pass
                              </h3>
                            </div>
                            <div className="flex items-center space-x-2 bg-success/10 text-success text-[10px] font-extrabold px-3 py-1 rounded-full uppercase">
                              <CheckCircle className="w-3.5 h-3.5" />
                              <span>{inq.status}</span>
                            </div>
                          </div>

                          {/* Pass Body Grid */}
                          <div className="grid grid-cols-2 gap-4 mb-5">
                            <div>
                              <span className="block text-[9px] uppercase text-slate-gray font-bold">Resident Name</span>
                              <span className="font-display font-bold text-xs sm:text-sm text-charcoal">{inq.name}</span>
                            </div>
                            <div>
                              <span className="block text-[9px] uppercase text-slate-gray font-bold">Inquiry ID</span>
                              <span className="font-mono text-xs text-charcoal font-semibold">{inq.id}</span>
                            </div>
                            <div>
                              <span className="block text-[9px] uppercase text-slate-gray font-bold">Allocated Sharing</span>
                              <span className="font-display font-bold text-xs text-primary">{room.name}</span>
                            </div>
                            <div>
                              <span className="block text-[9px] uppercase text-slate-gray font-bold">Scheduled Date</span>
                              <span className="font-sans text-xs text-charcoal font-bold">{inq.moveInDate}</span>
                            </div>
                            <div>
                              <span className="block text-[9px] uppercase text-slate-gray font-bold">Contact Number</span>
                              <span className="font-sans text-xs text-charcoal font-semibold">{inq.phone}</span>
                            </div>
                            <div>
                              <span className="block text-[9px] uppercase text-slate-gray font-bold">Property Address</span>
                              <span className="font-sans text-[10px] text-charcoal leading-tight flex items-center">
                                <MapPin className="w-3 h-3 text-accent mr-0.5 flex-shrink-0" />
                                Dehradkhas, Dehradun
                              </span>
                            </div>
                          </div>

                          {/* QR Code and directions slip */}
                          <div className="flex flex-col sm:flex-row items-center justify-between pt-4 border-t border-border-light/60 gap-4">
                            <div className="flex items-center space-x-3 text-left">
                              <QrCode className="w-12 h-12 text-primary border border-border-light p-1 bg-white rounded-lg" />
                              <div>
                                <span className="block text-[9px] uppercase text-slate-gray font-bold">Entry QR Slip</span>
                                <span className="block text-[10px] text-slate-gray leading-normal">Show at main gate for automatic walkthrough entry.</span>
                              </div>
                            </div>
                            <span className="text-[10px] font-mono text-slate-gray italic hidden sm:block">
                              Generated at: {inq.timestamp}
                            </span>
                          </div>

                        </div>
                      </div>

                      {/* Controls Area (Non-printable) */}
                      <div className="px-6 py-4 bg-bg-warm/50 border-t border-border-light flex flex-wrap items-center justify-between gap-3">
                        <button
                          onClick={() => handlePrintPass(inq.id)}
                          className="inline-flex items-center space-x-1.5 text-xs text-charcoal hover:text-primary font-sans font-bold bg-white px-4 py-2 rounded-lg border border-border-light shadow-2xs cursor-pointer"
                        >
                          <Printer className="w-3.5 h-3.5" />
                          <span>Print/PDF Slip</span>
                        </button>
                        
                        <button
                          onClick={() => onCancelInquiry(inq.id)}
                          className="inline-flex items-center space-x-1.5 text-xs text-red-600 hover:text-red-700 font-sans font-medium hover:bg-red-50 px-3 py-2 rounded-lg transition-colors cursor-pointer"
                        >
                          <span>Cancel Booking</span>
                        </button>
                      </div>
                    </div>
                  );
                })}
              </div>
            )}
          </div>

          {/* RHS - Real-time Warden Chat (Col span 5) */}
          <div className="lg:col-span-5 bg-surface-white rounded-3xl border border-border-light shadow-md luxury-card-shadow overflow-hidden flex flex-col h-[580px] lg:h-auto">
            
            {/* Chat Header */}
            <div className="bg-primary text-white p-5 flex items-center justify-between border-b border-primary-dark/20 flex-shrink-0">
              <div className="flex items-center space-x-3">
                <div className="relative">
                  <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-accent text-lg font-bold border border-white/20">
                    A
                  </div>
                  <span className="absolute bottom-0 right-0 w-2.5 h-2.5 bg-success rounded-full border-2 border-primary animate-pulse" />
                </div>
                <div>
                  <h3 className="font-display font-bold text-sm text-white">Arjun Dobhal</h3>
                  <span className="block text-[10px] text-accent font-semibold tracking-wider uppercase">Senior Property Warden</span>
                </div>
              </div>
              <div className="bg-white/10 px-2.5 py-1 rounded-md text-[9px] font-mono font-semibold text-white/90">
                ACTIVE
              </div>
            </div>

            {/* Chat Message Scroll */}
            <div className="flex-grow p-5 overflow-y-auto space-y-4 bg-bg-warm/30 min-h-[300px]">
              {chatMessages.map((msg, i) => {
                const isBot = msg.sender === 'bot';
                return (
                  <div key={i} className={`flex ${isBot ? 'justify-start' : 'justify-end'}`}>
                    <div className={`flex items-start space-x-2.5 max-w-[85%] ${isBot ? 'flex-row' : 'flex-row-reverse space-x-reverse'}`}>
                      {/* Avatar */}
                      <div className={`w-7 h-7 rounded-full flex-shrink-0 flex items-center justify-center text-xs font-bold ${
                        isBot ? 'bg-primary text-white' : 'bg-accent text-charcoal'
                      }`}>
                        {isBot ? <Bot className="w-3.5 h-3.5" /> : <User className="w-3.5 h-3.5" />}
                      </div>

                      {/* Bubble */}
                      <div>
                        <div className={`p-4 rounded-2xl text-xs sm:text-sm font-sans leading-relaxed shadow-3xs ${
                          isBot
                            ? 'bg-surface-white text-charcoal rounded-tl-none border border-border-light/60'
                            : 'bg-primary text-white rounded-tr-none'
                        }`}>
                          {msg.text}
                        </div>
                        <span className="block text-[9px] text-slate-gray mt-1 text-right font-mono">
                          {msg.time}
                        </span>
                      </div>
                    </div>
                  </div>
                );
              })}

              {isTyping && (
                <div className="flex justify-start">
                  <div className="flex items-center space-x-2 bg-white px-4 py-3 rounded-xl border border-border-light/60 text-xs text-slate-gray font-medium">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary animate-bounce" />
                    <span className="w-1.5 h-1.5 rounded-full bg-primary animate-bounce delay-100" />
                    <span className="w-1.5 h-1.5 rounded-full bg-primary animate-bounce delay-200" />
                    <span className="font-sans text-[10px]">Arjun is typing...</span>
                  </div>
                </div>
              )}
            </div>

            {/* Chat Input form */}
            <form onSubmit={handleSendMessage} className="p-4 bg-white border-t border-border-light flex items-center space-x-2 flex-shrink-0">
              <input
                type="text"
                placeholder="Ask about meals, rents, rules..."
                value={userInput}
                onChange={(e) => setUserInput(e.target.value)}
                className="flex-grow font-sans text-xs sm:text-sm px-4 py-3 border border-border-light rounded-xl bg-bg-warm/30 focus:bg-white focus:outline-none focus:border-primary transition-all"
              />
              <button
                type="submit"
                className="w-11 h-11 bg-primary hover:bg-primary-dark text-white rounded-xl flex items-center justify-center transition-colors cursor-pointer shadow-sm flex-shrink-0"
              >
                <Send className="w-4 h-4" />
              </button>
            </form>

          </div>

        </div>

      </div>
    </section>
  );
}
