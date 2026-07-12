import React from 'react';

export const article5Content = (
  <div className="space-y-8 font-sans text-charcoal/90 leading-relaxed text-sm sm:text-base">
    <div className="bg-[#0F8B8D]/5 border-l-4 border-[#0F8B8D] p-6 rounded-r-2xl shadow-3xs mb-8">
      <h3 className="font-display font-bold text-[#0F8B8D] text-base mb-2">🎓 Productivity Playbook</h3>
      <p className="text-slate-gray font-medium text-xs sm:text-sm">
        Renting a PG gives you incredible independence. However, with independence comes the responsibility of managing your own schedule, academic load, health, and personal life. Learn how to optimize your daily routine and design a distraction-free study environment to achieve academic excellence.
      </p>
    </div>

    {/* Section 1 */}
    <div>
      <h2 id="time-blocking" className="font-display font-bold text-xl sm:text-2xl text-charcoal mb-4 tracking-tight">
        1. Master Time-Blocking and Daily Schedules
      </h2>
      <p className="mb-4">
        Successful students do not study when they find free time—they schedule dedicated time blocks in advance. Use Google Calendar or Notion to block your fixed lecture hours, sleep windows, self-study intervals, and social interactions.
      </p>
      
      {/* Stat block */}
      <div className="bg-white border border-border-light p-6 rounded-2xl my-6 flex justify-around text-center">
        <div>
          <span className="block text-2xl font-display font-extrabold text-[#0F8B8D]">2 Hours</span>
          <span className="text-[10px] text-slate-gray font-bold uppercase tracking-wider">Uninterrupted Study block</span>
        </div>
        <div className="w-px bg-gray-100" />
        <div>
          <span className="block text-2xl font-display font-extrabold text-[#F4B400]">8 Hours</span>
          <span className="text-[10px] text-slate-gray font-bold uppercase tracking-wider">Optimal Sleep Nightly</span>
        </div>
      </div>

      <p className="mb-4">
        Keep your study blocks dedicated. Turn off smartphone notifications, use website blockers, and study with high-speed, stable fiber internet. At Unitas Home, we have commercial-grade routers on all floors to prevent lag during online study.
      </p>
    </div>

    {/* Section 2 */}
    <div>
      <h2 id="study-zone" className="font-display font-bold text-xl sm:text-2xl text-charcoal mb-4 tracking-tight">
        2. Design a Distraction-Free Study Zone
      </h2>
      <p className="mb-4">
        Your sleeping area should be associated strictly with rest, while your desk is for high focus. Studying on the bed causes micro-naps and decreases study efficiency.
      </p>
      <p className="mb-4">
        Every room in our co-living facility is designed with this ergonomic separation in mind:
      </p>
      <ul className="list-disc pl-5 space-y-2 mb-4 text-xs sm:text-sm text-slate-gray font-semibold">
        <li><strong>Personal Desks:</strong> Solid, spacious wooden desks with multiple power points.</li>
        <li><strong>Ergonomic Chairs:</strong> High-back, cushioned support to protect your posture during long study sessions.</li>
        <li><strong>Silent Hours:</strong> Our on-site wardens enforce strict quiet hours after 10:30 PM.</li>
      </ul>
    </div>

    {/* Section 3 */}
    <div>
      <h2 id="no-chores" className="font-display font-bold text-xl sm:text-2xl text-charcoal mb-4 tracking-tight">
        3. Eliminate Time-Consuming Household Chores
      </h2>
      <p className="mb-4">
        Washing clothes, cleaning restrooms, Sweeping rooms, and coordinating tiffin services eat up to 15 hours of study time weekly. By outsourcing these tasks to a fully managed co-living space, you reclaim massive chunks of productive time.
      </p>

      {/* Info Card Component */}
      <div className="bg-emerald-50 border border-emerald-200 p-5 rounded-2xl my-6 flex items-start space-x-3">
        <span className="text-xl">💡</span>
        <div>
          <h4 className="font-display font-bold text-emerald-900 text-sm mb-1">Reclaim Your Time</h4>
          <p className="text-emerald-800 text-xs font-medium leading-relaxed">
            At Unitas Home, laundry, housekeeping, sanitization, and premium dining are fully taken care of. That is over 60 hours of reclaimed time monthly—enough to raise your academic grades significantly or prepare for major entrance exams like NEET-PG or civil services.
          </p>
        </div>
      </div>
    </div>
  </div>
);
