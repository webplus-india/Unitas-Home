import React from 'react';

export const article1Content = (
  <div className="space-y-8 font-sans text-charcoal/90 leading-relaxed text-sm sm:text-base">
    {/* Intro Summary Box */}
    <div className="bg-[#2D6A4F]/5 border-l-4 border-[#2D6A4F] p-6 rounded-r-2xl shadow-3xs mb-8">
      <h3 className="font-display font-extrabold text-[#2D6A4F] text-base mb-2">🎓 Executive Summary & Introduction</h3>
      <p className="text-slate-gray font-medium text-xs sm:text-sm">
        Relocating to Dehradun for higher education is an exciting life milestone. However, choosing the wrong Paying Guest (PG) accommodation can severely disrupt your academic progress, physical health, and mental peace. This comprehensive guide outlines the absolute essential criteria—proximity, nutritional hygiene, study-focused infrastructure, security, and transparent finances—to help you identify a premium, supportive co-living space near SGRR University, Graphic Era, and Mahant Indresh Hospital.
      </p>
    </div>

    {/* Section 1 */}
    <div>
      <h2 id="proximity" className="font-display font-bold text-xl sm:text-2xl text-charcoal mb-4 tracking-tight">
        1. Why Proximity Controls Your Academic Success & Why It Matters
      </h2>
      <p className="mb-4">
        In a bustling academic city like Dehradun, transit times can vary dramatically based on peak hours and narrow lanes. Selecting an accommodation far from your lecture halls forces you to sacrifice hours of study, sleep, and personal well-being to daily commutes. Proximity is a crucial academic strategy rather than a simple convenience.
      </p>
      
      <p className="mb-4">
        For medical students, nursing interns, and healthcare professionals doing rotations at <a href="#location" className="text-[#2D6A4F] font-bold hover:underline">Mahant Indresh Hospital</a>, demanding shifts make living nearby even more critical. GRR Institute of Medical Sciences and SGRR University students require an environment where they can walk to their rooms within 2-5 minutes, allowing immediate rest after strenuous overnight schedules.
      </p>

      {/* Supporting Image 1 */}
      <div className="my-6">
        <img 
          src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=800&auto=format&fit=crop" 
          alt="Students walking near campus showing close proximity" 
          className="rounded-2xl w-full h-[280px] object-cover border border-border-light shadow-3xs"
          referrerPolicy="no-referrer"
        />
        <span className="block text-center text-xs text-slate-gray font-medium mt-2">
          Strategic location near major academic hubs dramatically increases daily self-study time.
        </span>
      </div>

      <h3 className="font-display font-bold text-base sm:text-lg text-charcoal mb-2">🚨 Common Mistakes: The Trait of the Far-Off Commute</h3>
      <p className="mb-4 text-slate-gray text-xs sm:text-sm font-medium">
        Many students make the mistake of renting cheaper accommodations in peripheral neighborhoods, thinking they will easily travel by local autos (Vikrams) or two-wheelers. During Dehradun's heavy monsoon seasons or intense summer days, commuting becomes highly draining. The money saved on rent is lost on transportation and energy.
      </p>

      {/* Stat Card Component */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 my-6">
        <div className="bg-white border border-border-light p-5 rounded-2xl shadow-3xs text-center">
          <span className="block text-3xl font-display font-extrabold text-[#2D6A4F] mb-1">10 Hrs+</span>
          <span className="text-xs text-slate-gray font-bold uppercase tracking-wider">Saved Weekly on Commutes</span>
        </div>
        <div className="bg-white border border-border-light p-5 rounded-2xl shadow-3xs text-center">
          <span className="block text-3xl font-display font-extrabold text-[#D4AF37] mb-1">2.5x</span>
          <span className="text-xs text-slate-gray font-bold uppercase tracking-wider">Increase in Cognitive Focus</span>
        </div>
      </div>
    </div>

    {/* Section 2 */}
    <div>
      <h2 id="meal-hygiene" className="font-display font-bold text-xl sm:text-2xl text-charcoal mb-4 tracking-tight">
        2. Nutritional Standards: Mess Food vs. Pure Culinary Excellence
      </h2>
      <p className="mb-4">
        It is an open secret that budget-focused PGs reduce operating expenses by cutting corners on fresh produce, utilizing low-grade vegetable oils, and serving a highly repetitive, bland menu. Over a semester, poor culinary choices lead to physical lethargy, digestive issues, and expensive restaurant bills.
      </p>

      {/* Info Card Component */}
      <div className="bg-amber-50/60 border border-amber-200 p-5 rounded-2xl my-6 flex items-start space-x-3">
        <span className="text-xl">⚠️</span>
        <div>
          <h4 className="font-display font-bold text-amber-900 text-sm mb-1">Beware of outsourced tiffin services</h4>
          <p className="text-amber-800 text-xs font-medium leading-relaxed">
            Many standard PGs in Dehradun outsource meals to third-party tiffin operators. This leads to cold, stale food with absolutely zero control over cleanliness, fresh ingredients, or healthy oil selection.
          </p>
        </div>
      </div>

      <p className="mb-4">
        At Unitas Home, nutrition is treated as an intellectual fuel. Our state-of-the-art on-site kitchen serves three wholesome, home-style vegetarian meals daily (Breakfast, Lunch, and Dinner). We partner with premium local distributors to secure organic ingredients, heart-healthy oils, and a rich, rotating menu full of balanced proteins (paneer, curd, fresh lentils, green vegetables).
      </p>

      {/* Supporting Image 2 */}
      <div className="my-6">
        <img 
          src="https://images.unsplash.com/photo-1556910103-1c02745aae4d?q=80&w=800&auto=format&fit=crop" 
          alt="Hygienic kitchen with fresh ingredients" 
          className="rounded-2xl w-full h-[280px] object-cover border border-border-light shadow-3xs"
          referrerPolicy="no-referrer"
        />
        <span className="block text-center text-xs text-slate-gray font-medium mt-2">
          Hygienic, on-site food preparation ensures maximum nutritional absorption and health safety.
        </span>
      </div>

      <h3 className="font-display font-bold text-base sm:text-lg text-charcoal mb-2">📋 Detailed Step-by-Step Meal Evaluation Guidance</h3>
      <p className="mb-4">
        When touring any Paying Guest accommodation, do not just look at the menu card. Request a walkthrough of the kitchen area. Check for food storage containers, look at the brand of oil being utilized, and verify the multi-stage RO drinking water filtration setup. If the facility hesitates to show you the kitchen, it is a clear warning sign.
      </p>

      {/* Checklist Component */}
      <div className="border border-border-light bg-white rounded-2xl p-6 my-6">
        <h4 className="font-display font-extrabold text-charcoal text-sm uppercase tracking-wide mb-4">
          📋 Kitchen & Meal Checklist for Your Physical Visit
        </h4>
        <ul className="space-y-3">
          <li className="flex items-center space-x-2.5 text-xs sm:text-sm text-slate-gray font-semibold">
            <span className="text-[#2D6A4F]">✔</span>
            <span>Does the PG run an in-house kitchen, or is the meal outsourced via tiffins?</span>
          </li>
          <li className="flex items-center space-x-2.5 text-xs sm:text-sm text-slate-gray font-semibold">
            <span className="text-[#2D6A4F]">✔</span>
            <span>Are there clean, multi-stage RO water filtration systems installed?</span>
          </li>
          <li className="flex items-center space-x-2.5 text-xs sm:text-sm text-slate-gray font-semibold">
            <span className="text-[#2D6A4F]">✔</span>
            <span>Is the food menu rotated weekly with healthy proteins (paneer, milk, curd, dal)?</span>
          </li>
          <li className="flex items-center space-x-2.5 text-xs sm:text-sm text-slate-gray font-semibold">
            <span className="text-[#2D6A4F]">✔</span>
            <span>Can parents inspect the kitchen cleanliness without any advance booking?</span>
          </li>
        </ul>
      </div>
    </div>

    {/* Section 3 */}
    <div>
      <h2 id="study-amenities" className="font-display font-bold text-xl sm:text-2xl text-charcoal mb-4 tracking-tight">
        3. Essential Study Amenities: Setting Yourself Up for Academic Success
      </h2>
      <p className="mb-4">
        A premium co-living facility must treat academic productivity with absolute seriousness. Sleeping and studying on the same bed causes spinal strain, posture fatigue, and cognitive drowsiness. A dedicated wooden study desk with an ergonomic chair is a non-negotiable requirement.
      </p>

      <p className="mb-4">
        At Unitas Home, every room features custom-built wooden desks with multiple power ports, private storage shelves, and ergonomic mesh-back seating. Furthermore, we operate dual-band high-capacity commercial fiber-optic networks with multiple wireless routers placed on every floor. This guarantees fast, stable, and uninterrupted internet speeds whether you are taking online exams or researching academic projects.
      </p>

      {/* Comparison Table */}
      <div className="overflow-x-auto my-6 border border-border-light rounded-2xl shadow-3xs bg-white">
        <table className="w-full text-left border-collapse text-xs sm:text-sm">
          <thead>
            <tr className="bg-neutral-50 border-b border-border-light font-display">
              <th className="p-4 font-bold text-charcoal">Amenity / Feature</th>
              <th className="p-4 font-bold text-slate-gray">Standard PG in Patel Nagar</th>
              <th className="p-4 font-bold text-[#2D6A4F]">Unitas Home Co-Living</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b border-neutral-50">
              <td className="p-4 font-bold text-charcoal">Study Workspace</td>
              <td className="p-4 text-slate-gray">Shared table or none</td>
              <td className="p-4 text-charcoal font-semibold">Personal wooden workstation & ergonomic chair in every room</td>
            </tr>
            <tr className="border-b border-neutral-50">
              <td className="p-4 font-bold text-charcoal">Wi-Fi Quality</td>
              <td className="p-4 text-slate-gray">Single slow router</td>
              <td className="p-4 text-charcoal font-semibold">Dual-band commercial fiber routers on every floor</td>
            </tr>
            <tr className="border-b border-neutral-50">
              <td className="p-4 font-bold text-charcoal">Power Backup</td>
              <td className="p-4 text-slate-gray">Inverter for light only</td>
              <td className="p-4 text-charcoal font-semibold">Heavy-duty 100% generator power backup in 15s</td>
            </tr>
            <tr>
              <td className="p-4 font-bold text-charcoal">Housekeeping</td>
              <td className="p-4 text-slate-gray">Once a week or self-clean</td>
              <td className="p-4 text-charcoal font-semibold">Daily professional floor sweeping, wet-mopping & sanitation</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h3 className="font-display font-bold text-base sm:text-lg text-charcoal mb-2">💡 Expert Recommendations & Local Insights</h3>
      <p className="mb-4">
        "Power cuts in Patel Nagar and adjacent areas can occur unexpectedly during summers. Always ensure your chosen PG has a heavy-duty diesel generator backup, rather than a small battery inverter. A basic inverter will not run geysers, air coolers, or routers during extended city power grid outages."
      </p>

      {/* Supporting Image 3 */}
      <div className="my-6">
        <img 
          src="https://images.unsplash.com/photo-1524758631624-e2822e304c36?q=80&w=800&auto=format&fit=crop" 
          alt="Premium student lounge and workspace" 
          className="rounded-2xl w-full h-[280px] object-cover border border-border-light shadow-3xs"
          referrerPolicy="no-referrer"
        />
        <span className="block text-center text-xs text-slate-gray font-medium mt-2">
          An organized, dedicated environment eliminates distractions and elevates academic output.
        </span>
      </div>
    </div>

    {/* Section 4 */}
    <div>
      <h2 id="conclusion" className="font-display font-bold text-xl sm:text-2xl text-[#2D6A4F] mb-4 tracking-tight">
        4. Conclusion & Final Recommendation
      </h2>
      <p className="mb-4">
        Choosing your accommodation is more than renting a bed—it is selecting an intellectual and physical ecosystem that directly influences your college journey. Do not compromise on nutrition, security, or clean study environments. Demand transparency in prices and check out the physical facility in detail.
      </p>
      
      <p className="mb-4">
        At Unitas Home, we eliminate all household stress through professional housekeeping, full-stack laundry, premium nutrition, and biometric security. This ensures that you can channel your complete energy into achieving academic milestones. Plan a physical visit today to experience premium student co-living firsthand.
      </p>

      <div className="bg-[#FAF9F6] border border-border-light rounded-2xl p-6 my-6">
        <h4 className="font-display font-extrabold text-[#2D6A4F] text-xs uppercase tracking-wider mb-2">💡 Real-World Student Example</h4>
        <p className="font-sans text-xs sm:text-sm text-slate-gray font-semibold leading-relaxed">
          "Aditya, a medical intern, saved over 12 hours a week of commute time and skipped the hassle of managing tiffins by moving to Unitas Home. The immediate access to delicious meals, fast Wi-Fi, and a quiet study desk let him focus fully on his clinical practicals."
        </p>
      </div>
    </div>
  </div>
);
