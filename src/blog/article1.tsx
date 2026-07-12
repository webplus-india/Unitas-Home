import React from 'react';

export const article1Content = (
  <div className="space-y-8 font-sans text-charcoal/90 leading-relaxed text-sm sm:text-base">
    {/* Intro Summary Box */}
    <div className="bg-[#0F8B8D]/5 border-l-4 border-[#0F8B8D] p-6 rounded-r-2xl shadow-3xs mb-8">
      <h3 className="font-display font-bold text-[#0F8B8D] text-base mb-2">🎓 Executive Summary</h3>
      <p className="text-slate-gray font-medium text-xs sm:text-sm">
        Relocating to Dehradun for your college education is a major life milestone. However, choosing the wrong Paying Guest (PG) accommodation can severely impact your academic performance, mental peace, and budget. This ultra-comprehensive guide explains how to balance campus proximity, meal hygiene, student-focused study amenities, security, and transparent finances to choose the perfect home away from home.
      </p>
    </div>

    {/* Section 1 */}
    <div>
      <h2 id="proximity" className="font-display font-bold text-xl sm:text-2xl text-charcoal mb-4 tracking-tight">
        1. Why Proximity Controls Your Academic Success
      </h2>
      <p className="mb-4">
        In Dehradun, transit times can vary wildly depending on the hour of the day. Choosing an accommodation located far from your campus means sacrificing hours of potential study, sleep, or leisure time to stressful commutes. If you are attending Shri Guru Ram Rai (SGRR) University, Shri Guru Ram Rai Institute of Medical Sciences, or Graphic Era, living within walking distance is not just a convenience—it is a critical academic strategy.
      </p>
      
      {/* Stat Card Component */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 my-6">
        <div className="bg-white border border-border-light p-5 rounded-2xl shadow-3xs text-center">
          <span className="block text-3xl font-display font-extrabold text-[#0F8B8D] mb-1">10 Hrs</span>
          <span className="text-xs text-slate-gray font-bold uppercase tracking-wider">Saved Weekly on Commute</span>
        </div>
        <div className="bg-white border border-border-light p-5 rounded-2xl shadow-3xs text-center">
          <span className="block text-3xl font-display font-extrabold text-[#F4B400] mb-1">2x</span>
          <span className="text-xs text-slate-gray font-bold uppercase tracking-wider">Increase in Self-Study Time</span>
        </div>
      </div>

      <p className="mb-4">
        For medical students and nursing interns doing rotations at <a href="#location" className="text-[#0F8B8D] font-bold hover:underline">Mahant Indresh Hospital</a>, schedules are highly demanding. High-pressure rosters, unexpected emergency duties, and grueling overnight shifts mean you must have access to a peaceful home that is less than a 5-minute walk away. Living nearby ensures that you can rest instantly when your shift ends.
      </p>
    </div>

    {/* Section 2 */}
    <div>
      <h2 id="meal-hygiene" className="font-display font-bold text-xl sm:text-2xl text-charcoal mb-4 tracking-tight">
        2. Nutritional Standards: Mess Food vs. Pure Culinary Excellence
      </h2>
      <p className="mb-4">
        It is an open secret that cheap PG accommodations save costs by cutting corners on ingredients, using low-grade refined oils, and repeating bland menus. Over several months, eating unhygienic bulk food leads to nutritional deficiencies, stomach infections, and heavy spending on outside restaurant delivery.
      </p>

      {/* Info Card Component */}
      <div className="bg-amber-50/60 border border-amber-200 p-5 rounded-2xl my-6 flex items-start space-x-3">
        <span className="text-xl">⚠️</span>
        <div>
          <h4 className="font-display font-bold text-amber-900 text-sm mb-1">Watch Out For Tiffin Scams</h4>
          <p className="text-amber-800 text-xs font-medium leading-relaxed">
            Many standard PGs in Dehradun do not have an in-house kitchen. Instead, they outsource meals to external tiffin centers. This results in cold, stale meals with zero control over hygiene or ingredient quality.
          </p>
        </div>
      </div>

      <p className="mb-4">
        At Unitas Home, we believe food is the fuel for your intellect. Our state-of-the-art hygienic kitchen is managed on-site, serving four highly nutritious, home-style vegetarian meals every day (Breakfast, Lunch, Evening Snacks with Tea, and Dinner). We source premium ingredients, use heart-healthy cooking oils, and rotate our menus seasonally to provide tasty, protein-rich lentils, fresh vegetables, organic grains, and absolute culinary variety.
      </p>

      {/* Checklist Component */}
      <div className="border border-border-light bg-white rounded-2xl p-6 my-6">
        <h4 className="font-display font-extrabold text-charcoal text-sm uppercase tracking-wide mb-4">
          📋 Kitchen & Meal Checklist for Your Physical Visit
        </h4>
        <ul className="space-y-3">
          <li className="flex items-center space-x-2.5 text-xs sm:text-sm text-slate-gray font-semibold">
            <span className="text-[#0F8B8D]">✔</span>
            <span>Does the PG have an in-house kitchen or is the food outsourced via tiffins?</span>
          </li>
          <li className="flex items-center space-x-2.5 text-xs sm:text-sm text-slate-gray font-semibold">
            <span className="text-[#0F8B8D]">✔</span>
            <span>Are there clean, multi-stage RO water filtration systems installed?</span>
          </li>
          <li className="flex items-center space-x-2.5 text-xs sm:text-sm text-slate-gray font-semibold">
            <span className="text-[#0F8B8D]">✔</span>
            <span>Is the food menu rotated weekly with healthy proteins (paneer, milk, curd, dal)?</span>
          </li>
          <li className="flex items-center space-x-2.5 text-xs sm:text-sm text-slate-gray font-semibold">
            <span className="text-[#0F8B8D]">✔</span>
            <span>Can parents inspect the kitchen cleanliness without any advance booking?</span>
          </li>
        </ul>
      </div>
    </div>

    {/* Section 3 */}
    <div>
      <h2 id="study-amenities" className="font-display font-bold text-xl sm:text-2xl text-charcoal mb-4 tracking-tight">
        3. Essential Study Amenities: Setting Yourself Up for High Grades
      </h2>
      <p className="mb-4">
        Many student housing options present themselves as places of study, yet force you to study sitting on your bed. This practice strains your back and leads to drowsiness. A premium co-living space must treat study utilities with absolute seriousness.
      </p>

      {/* Comparison Table */}
      <div className="overflow-x-auto my-6 border border-border-light rounded-2xl shadow-3xs bg-white">
        <table className="w-full text-left border-collapse text-xs sm:text-sm">
          <thead>
            <tr className="bg-neutral-50 border-b border-border-light font-display">
              <th className="p-4 font-bold text-charcoal">Amenity / Feature</th>
              <th className="p-4 font-bold text-slate-gray">Standard PG in Patel Nagar</th>
              <th className="p-4 font-bold text-[#0F8B8D]">Unitas Home Co-Living</th>
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

      <p className="mb-4">
        At Unitas Home, we eliminate all household frictions so your focus remains strictly academic. Our rooms are fully optimized for productivity. High-speed, commercial fiber-optic Wi-Fi blankets our entire facility. No matter if you are researching online journals, taking a virtual lecture, or uploading heavy clinical reports, you will experience reliable, high-bandwidth connectivity at all hours.
      </p>
    </div>

    {/* Expert Tips */}
    <div className="bg-[#FAF9F6] border border-border-light rounded-2xl p-6 my-6">
      <h4 className="font-display font-extrabold text-[#0F8B8D] text-xs uppercase tracking-wider mb-2">💡 Expert Pro Tip</h4>
      <p className="font-sans text-xs sm:text-sm text-slate-gray font-semibold leading-relaxed">
        "Before finalizing a student PG, request to sit in the room for 15 minutes, connect to their Wi-Fi network, and run an internet speed test. This ensures that you won't suffer from weak network coverage during critical online examinations."
      </p>
    </div>

    {/* Section 4 */}
    <div>
      <h2 id="conclusion" className="font-display font-bold text-xl sm:text-2xl text-charcoal mb-4 tracking-tight">
        4. Conclusion: Making an Informed Decison
      </h2>
      <p className="mb-4">
        Renting a PG is not merely about finding a place to sleep—it is about choosing an ecosystem that nurtures your physical health, safety, and academic ambitions. Avoid hidden financial charges, demand premium nutrition, and prioritize structured study environments. Unitas Home is meticulously designed to offer Dehradun's finest luxury co-living environment, combining beautiful architecture, security, and warm, family-style hospitality.
      </p>
    </div>
  </div>
);
