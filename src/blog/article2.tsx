import React from 'react';

export const article2Content = (
  <div className="space-y-8 font-sans text-charcoal/90 leading-relaxed text-sm sm:text-base">
    <div className="bg-[#0F8B8D]/5 border-l-4 border-[#0F8B8D] p-6 rounded-r-2xl shadow-3xs mb-8">
      <h3 className="font-display font-bold text-[#0F8B8D] text-base mb-2">🎓 Quick Overview</h3>
      <p className="text-slate-gray font-medium text-xs sm:text-sm">
        Renting a paying guest (PG) room is a major step toward independence. But without a structured checklist, it is easy to fall into traps: hidden utility costs, poor hygiene, safety hazards, and restrictive landlord rules. Here are the 10 absolute things you must check before signing a PG agreement in Dehradun.
      </p>
    </div>

    {/* Things 1-3 */}
    <div>
      <h2 id="hidden-costs" className="font-display font-bold text-xl sm:text-2xl text-charcoal mb-4 tracking-tight">
        1. Watch Out For Hidden Utility & Maintenance Charges
      </h2>
      <p className="mb-4">
        A low rent advertised online is often a bait-and-switch. Many standard PGs charge a very low base rate, but add expensive bills for:
      </p>
      <ul className="list-disc pl-5 space-y-2 mb-4 text-xs sm:text-sm text-slate-gray font-semibold">
        <li>Commercial sub-metered electricity rates (sometimes as high as Rs. 12-15 per unit).</li>
        <li>Housekeeping, daily garbage collection, and water maintenance fees.</li>
        <li>Mandatory subscriptions for shared, low-speed Wi-Fi networks.</li>
      </ul>
      <p className="mb-4">
        At Unitas Home, we believe in 100% transparent pricing. Our flat-rate monthly subscription covers everything—four daily meals, high-speed fiber-optic Wi-Fi, electricity, backup generator usage, and premium laundry. There are absolutely no hidden bills.
      </p>
    </div>

    {/* Things 4-6 */}
    <div>
      <h2 id="amenity-check" className="font-display font-bold text-xl sm:text-2xl text-charcoal mb-4 tracking-tight">
        2. Flexible Gate Timings vs. Strict Landlord Curfews
      </h2>
      <p className="mb-4">
        While safety is key, extremely rigid curfews (such as 7:00 PM lockouts) can restrict your growth. For student medical interns at Mahant Indresh Hospital, night shift classes, or working professionals with hybrid rosters, these old-fashioned curfews make living impossible.
      </p>
      
      {/* Warning Box */}
      <div className="bg-rose-50 border border-rose-200 p-5 rounded-2xl my-6 flex items-start space-x-3">
        <span className="text-xl">🚨</span>
        <div>
          <h4 className="font-display font-bold text-rose-900 text-sm mb-1">Curfew Warning</h4>
          <p className="text-rose-800 text-xs font-medium leading-relaxed">
            Always confirm the lock-out policies in writing. Some properties lock gates early and charge heavy fines or lock students outside if they arrive late due to verified university academic obligations.
          </p>
        </div>
      </div>

      <p className="mb-4">
        We utilize a modern biometric keyless system. Residents scan their registered fingerprints or access cards, ensuring absolute tracking and security, while accommodating verified late shifts or evening hospital postings securely.
      </p>
    </div>

    {/* Things 7-10 */}
    <div>
      <h2 id="deposit-security" className="font-display font-bold text-xl sm:text-2xl text-charcoal mb-4 tracking-tight">
        3. Deposit Refund and Notice Period Terms
      </h2>
      <p className="mb-4">
        Landlord disputes regarding security deposits are extremely common in Dehradun. To protect yourself, always request a clear, written agreement detailing:
      </p>
      
      {/* Pro & Con Box */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 my-6">
        <div className="bg-emerald-50 border border-emerald-200 p-5 rounded-2xl">
          <h4 className="font-display font-bold text-emerald-900 text-sm mb-2">🟢 Safe Practice</h4>
          <p className="text-emerald-800 text-xs font-medium leading-relaxed">
            A standard 1-month security deposit that is fully returned on the departure day, backed by a written 30-day notice policy.
          </p>
        </div>
        <div className="bg-rose-50 border border-rose-200 p-5 rounded-2xl">
          <h4 className="font-display font-bold text-rose-900 text-sm mb-2">🔴 Landlord Traps</h4>
          <p className="text-rose-800 text-xs font-medium leading-relaxed">
            Demand of 3-6 months advance rent, long lock-in periods, and arbitrary deduction of paint or cleaning charges upon checkout.
          </p>
        </div>
      </div>

      <p className="mb-4">
        At Unitas Home, our legal leases are clear and simple. We require a minimal, straightforward deposit, which is fully refunded on the day of checkout without delay, ensuring complete trust and transparency.
      </p>
    </div>

    <div>
      <h3 className="font-display font-bold text-base sm:text-lg text-charcoal mb-2">The Complete 10-Point Checklist Summary</h3>
      <ol className="list-decimal pl-5 space-y-3 text-xs sm:text-sm text-slate-gray font-semibold">
        <li><strong>Food Quality Check:</strong> Inspect the kitchen and eat a trial meal.</li>
        <li><strong>Attached Restrooms:</strong> Ensure bathrooms feature private geysers and proper ventilation.</li>
        <li><strong>CCTV Coverage:</strong> Confirm cameras actively monitor main corridors and entrance gates.</li>
        <li><strong>Power Backup:</strong> Verify that generators cover Wi-Fi and study lights during outages.</li>
        <li><strong>Washing & Laundry:</strong> Ask if wet washing and professional steam ironing are included.</li>
        <li><strong>Biometric Security:</strong> Skip outdated padlocks; verify secure access.</li>
        <li><strong>Daily Housekeeping:</strong> Professional sanitization must be handled by dedicated on-site staff.</li>
        <li><strong>Storage Space:</strong> Personal wooden wardrobes and secure under-bed storage are essential.</li>
        <li><strong>Warden Availability:</strong> An experienced on-site warden must live on the property.</li>
        <li><strong>Proximity:</strong> Select a location under a 5-10 minute walk to major colleges or hospitals.</li>
      </ol>
    </div>
  </div>
);
