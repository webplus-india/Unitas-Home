import React from 'react';

export const article2Content = (
  <div className="space-y-8 font-sans text-charcoal/90 leading-relaxed text-sm sm:text-base">
    {/* Executive Summary Callout */}
    <div className="bg-[#2D6A4F]/5 border-l-4 border-[#2D6A4F] p-6 rounded-r-2xl shadow-3xs mb-8">
      <h3 className="font-display font-extrabold text-[#2D6A4F] text-base mb-2">🎓 Executive Summary</h3>
      <p className="text-slate-gray font-medium text-xs sm:text-sm">
        Renting a Paying Guest (PG) accommodation is a massive step toward student independence. However, without a methodical inspection, students often find themselves trapped in bad contracts, paying unexpected bills, eating substandard food, or facing stressful rules. This educational guide breaks down the 10 absolute features you must inspect, verify, and confirm before putting down any booking deposit in Dehradun.
      </p>
    </div>

    {/* Section 1 */}
    <div>
      <h2 id="hidden-costs" className="font-display font-bold text-xl sm:text-2xl text-charcoal mb-4 tracking-tight">
        1. Watch Out For Hidden Utility & Maintenance Charges (Common Mistakes)
      </h2>
      <p className="mb-4">
        A low rent advertised online is often a bait-and-switch. Many traditional PG landlords attract students by quoting an extremely low base rent, but then charge heavy monthly add-ons that aren't mentioned in the initial discussion.
      </p>

      {/* Warning Box */}
      <div className="bg-rose-50 border border-rose-200 p-5 rounded-2xl my-6 flex items-start space-x-3">
        <span className="text-xl">🚨</span>
        <div>
          <h4 className="font-display font-bold text-rose-900 text-sm mb-1">Common Mistake: Verbal Pricing Promises</h4>
          <p className="text-rose-800 text-xs font-medium leading-relaxed">
            Never trust verbal assurances like "electricity is minimal" or "Wi-Fi is included." Many landlords install sub-meters with inflated commercial rates (Rs. 12 to 15 per unit) or limit Wi-Fi data speed after a few gigabytes, forcing you to pay extra.
          </p>
        </div>
      </div>

      <p className="mb-4">
        At Unitas Home, we eliminate financial anxiety through an all-inclusive pricing system. Our flat monthly fee covers your luxury room, high-speed fiber-optic Wi-Fi, laundry, professional daily cleaning, electricity, and three delicious on-site vegetarian meals. There are absolutely no hidden surprises on your bill.
      </p>

      {/* Supporting Image 1 */}
      <div className="my-6">
        <img 
          src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=800&q=80" 
          alt="Rental agreement signing representing financial transparency" 
          className="rounded-2xl w-full h-[280px] object-cover border border-border-light shadow-3xs"
          referrerPolicy="no-referrer"
        />
        <span className="block text-center text-xs text-slate-gray font-medium mt-2">
          Verify every single cost component in writing before making a booking deposit.
        </span>
      </div>
    </div>

    {/* Section 2 */}
    <div>
      <h2 id="amenity-check" className="font-display font-bold text-xl sm:text-2xl text-charcoal mb-4 tracking-tight">
        2. Amenity Verification: Gate Timings, Wi-Fi, and Power Backup
      </h2>
      <p className="mb-4">
        A student's life operates on a dynamic roster. While safety is vital, rigid curfews like a 7:30 PM lockdown restrict your growth, prevent you from taking late classes, and disrupt medical internships at SGRR or Mahant Indresh Hospital.
      </p>
      
      <p className="mb-4">
        Verify that the accommodation utilizes a keyless biometric system instead of manual locks. At Unitas Home, biometric fingerprint locks allow authorized residents secure, keyless access while maintaining a detailed digital log, accommodating verified late-night clinical postings and evening schedules.
      </p>

      {/* Supporting Image 2 */}
      <div className="my-6">
        <img 
          src="https://images.unsplash.com/photo-1558002038-1055907df827?auto=format&fit=crop&w=800&q=80" 
          alt="Biometric security and smart locks" 
          className="rounded-2xl w-full h-[280px] object-cover border border-border-light shadow-3xs"
          referrerPolicy="no-referrer"
        />
        <span className="block text-center text-xs text-slate-gray font-medium mt-2">
          Modern co-living facilities prioritize biometric access logs over outdated padlocks.
        </span>
      </div>

      <h3 className="font-display font-bold text-base sm:text-lg text-charcoal mb-2">💡 Local Insights: Dehradun Power & Water Infrastructure</h3>
      <p className="mb-4">
        Dehradun can experience frequent voltage fluctuations and power cuts, especially during summer storms. If a PG relies solely on standard battery inverters, your study lights will dim, and the Wi-Fi routers will turn off. Ask if the property operates an automatic diesel generator.
      </p>
    </div>

    {/* Section 3 */}
    <div>
      <h2 id="deposit-security" className="font-display font-bold text-xl sm:text-2xl text-charcoal mb-4 tracking-tight">
        3. Deposit Terms, Expert Recommendations & Refund Practices
      </h2>
      <p className="mb-4">
        Deposit disputes are a common source of stress between students and local landlords. To safeguard your finances, always check the exact notice period and ensure the deposit refund terms are clearly documented.
      </p>

      {/* Comparison Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 my-6">
        <div className="bg-emerald-50 border border-emerald-200 p-5 rounded-2xl">
          <h4 className="font-display font-bold text-emerald-900 text-sm mb-2">🟢 Safe Practice</h4>
          <p className="text-emerald-800 text-xs font-medium leading-relaxed">
            A standard 1-month security deposit that is fully returned on the departure day, backed by a written 30-day notice policy and minimal stay clauses.
          </p>
        </div>
        <div className="bg-rose-50 border border-rose-200 p-5 rounded-2xl">
          <h4 className="font-display font-bold text-rose-900 text-sm mb-2">🔴 Landlord Traps</h4>
          <p className="text-rose-800 text-xs font-medium leading-relaxed">
            Arbitrary deduction of painting, deep-cleaning, or administrative fees upon checkout, alongside demanding 3-6 months of advance rent.
          </p>
        </div>
      </div>

      <p className="mb-4">
        At Unitas Home, we believe mutual trust is the foundation of co-living. We collect a standard, minimal security deposit which is refunded directly on your checkout day without any arbitrary deductions, ensuring complete peace of mind.
      </p>

      {/* Supporting Image 3 */}
      <div className="my-6">
        <img 
          src="https://images.unsplash.com/photo-1515187029135-18ee286d815b?auto=format&fit=crop&w=800&q=80" 
          alt="Transparent and premium student lounge room" 
          className="rounded-2xl w-full h-[280px] object-cover border border-border-light shadow-3xs"
          referrerPolicy="no-referrer"
        />
        <span className="block text-center text-xs text-slate-gray font-medium mt-2">
          A supportive, transparent community layout allows students to focus entirely on learning.
        </span>
      </div>

      <h3 className="font-display font-extrabold text-charcoal text-base mb-3">📋 The 10-Point Student Inspection Checklist</h3>
      <ol className="list-decimal pl-5 space-y-3 text-xs sm:text-sm text-slate-gray font-semibold">
        <li><strong>Food Quality Audit:</strong> Always taste a trial lunch or dinner meal before booking.</li>
        <li><strong>Attached Restrooms:</strong> Verify the presence of dedicated instant geysers and proper ventilation.</li>
        <li><strong>CCTV Operations:</strong> Confirm active cameras monitor corridors, exits, and lobbies 24/7.</li>
        <li><strong>Generator Power Backup:</strong> Check if Wi-Fi and study lights are on the backup generator circuit.</li>
        <li><strong>Full-Service Laundry:</strong> Ensure professional wet-washing and steam ironing are fully managed.</li>
        <li><strong>Warden Presence:</strong> Make sure an experienced resident warden resides on the property.</li>
        <li><strong>Daily Housekeeping:</strong> Floors must be sanitized daily by professional staff, not once a week.</li>
        <li><strong>Workplace Setup:</strong> Verify you have an in-room study desk separate from your bed.</li>
        <li><strong>Secure Wardrobes:</strong> Ensure the room includes personal wooden closets with separate locks.</li>
        <li><strong>Biometric Security:</strong> Choose facilities with biometric access to prevent unauthorized entry.</li>
      </ol>
    </div>

    {/* Conclusion */}
    <div className="pt-6 border-t border-gray-100">
      <h3 className="font-display font-bold text-lg text-charcoal mb-2">Summary & Final Recommendation</h3>
      <p className="text-slate-gray font-semibold text-xs sm:text-sm">
        Do not let hasty booking decisions ruin your academic year. Take a physical tour, ask difficult questions, and verify every single point in this guide. At Unitas Home in Patel Nagar, we are proud to offer Dehradun's finest fully serviced student experience—blending premium hospitality with absolute operational transparency.
      </p>
    </div>
  </div>
);
