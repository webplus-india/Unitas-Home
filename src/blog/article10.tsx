import React from 'react';

export const article10Content = (
  <div className="space-y-8 font-sans text-charcoal/90 leading-relaxed text-sm sm:text-base">
    <div className="bg-[#0F8B8D]/5 border-l-4 border-[#0F8B8D] p-6 rounded-r-2xl shadow-3xs mb-8">
      <h3 className="font-display font-bold text-[#0F8B8D] text-base mb-2">🌃 Night-Shift & Hybrid Guide</h3>
      <p className="text-slate-gray font-medium text-xs sm:text-sm">
        Working rotating rosters, overnight medical shifts, or hybrid corporate roles demands a highly flexible living space. Standard student hostels with rigid curfews and fixed dinner schedules simply do not fit your lifestyle. This comprehensive guide covers how to choose a PG optimized for non-traditional work schedules.
      </p>
    </div>

    {/* Section 1 */}
    <div>
      <h2 id="gate-access" className="font-display font-bold text-xl sm:text-2xl text-charcoal mb-4 tracking-tight">
        1. Roster-Linked Gate Access & Keyless Security
      </h2>
      <p className="mb-4">
        Rigid lock-out curfews (such as locking gates at 9:00 PM) make overnight shifts or evening rotations impossible. If you are a medical intern at <a href="#location" className="text-[#0F8B8D] font-bold hover:underline">Mahant Indresh Hospital</a> or work for a global outsourcing firm, you need hassle-free entry at all hours.
      </p>

      {/* Pro Tip Callout */}
      <div className="bg-[#FAF9F6] border border-border-light p-6 rounded-2xl my-6">
        <h4 className="font-display font-bold text-charcoal text-sm mb-1.5">🔑 Biometric Convenience</h4>
        <p className="text-slate-gray text-xs sm:text-sm font-semibold leading-relaxed">
          At Unitas Home, we use digital biometric card keyless entries. Residents can access our facility late at night or early in the morning by scanning their registered cards, with all entry logs tracked automatically. Your work schedule is whitelisted securely.
        </p>
      </div>
    </div>

    {/* Section 2 */}
    <div>
      <h2 id="daytime-sleep" className="font-display font-bold text-xl sm:text-2xl text-charcoal mb-4 tracking-tight">
        2. Enforcing Daytime Quietness for Deep Rest
      </h2>
      <p className="mb-4">
        Getting uninterrupted, high-quality sleep during the day is critical for your health and focus. Many student PGs are noisy during the afternoon with loud music and slamming doors, destroying your sleep cycle.
      </p>
      
      {/* Stat block */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 my-6">
        <div className="bg-white border border-border-light p-5 rounded-2xl text-center shadow-3xs">
          <span className="block text-3xl font-display font-extrabold text-[#0F8B8D]">A+</span>
          <span className="text-xs text-slate-gray font-bold uppercase tracking-wider">Soundproofing & Solid Doors</span>
        </div>
        <div className="bg-white border border-border-light p-5 rounded-2xl text-center shadow-3xs">
          <span className="block text-3xl font-display font-extrabold text-[#F4B400]">Quiet Wings</span>
          <span className="text-xs text-slate-gray font-bold uppercase tracking-wider">Enforced Daytime Serenity</span>
        </div>
      </div>

      <p className="mb-4">
        We maintain strict quiet hallway guidelines and use solid wooden room doors to reduce noise transmission. Our on-site wardens actively monitor and enforce a peaceful, quiet environment during daytime hours, ensuring night-shift workers get deep, restful sleep.
      </p>
    </div>

    {/* Section 3 */}
    <div>
      <h2 id="meal-safety" className="font-display font-bold text-xl sm:text-2xl text-charcoal mb-4 tracking-tight">
        3. Meal Packaging & Food Preservation Support
      </h2>
      <p className="mb-4">
        When you work non-traditional hours, you will inevitably miss standard dining windows (e.g., missing lunch or dinner due to a late shift). If your PG does not support food preservation, you are forced to spend heavily on outside restaurants.
      </p>

      {/* Info Card Component */}
      <div className="bg-emerald-50 border border-emerald-200 p-5 rounded-2xl my-6 flex items-start space-x-3">
        <span className="text-xl">🍲</span>
        <div>
          <h4 className="font-display font-bold text-emerald-900 text-sm mb-1">Hygienic Food Packaging</h4>
          <p className="text-emerald-800 text-xs font-medium leading-relaxed">
            At Unitas Home, our kitchen team can package your fresh vegetarian meals in insulated thermal boxes on request. We also provide a common pantry equipped with clean refrigerators and microwave ovens, letting you preserve and reheat your healthy meals at any hour.
          </p>
        </div>
      </div>
    </div>
  </div>
);
