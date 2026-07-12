import React from 'react';

export const article9Content = (
  <div className="space-y-8 font-sans text-charcoal/90 leading-relaxed text-sm sm:text-base">
    <div className="bg-[#0F8B8D]/5 border-l-4 border-[#0F8B8D] p-6 rounded-r-2xl shadow-3xs mb-8">
      <h3 className="font-display font-bold text-[#0F8B8D] text-base mb-2">💼 Professional Living Guide</h3>
      <p className="text-slate-gray font-medium text-xs sm:text-sm">
        Managing an apartment—dealing with landlords, paying utility bills, cooking, doing laundry, and sweeping floors—is a massive drain on your time and energy after a demanding workday. Premium serviced co-living accommodations in Patel Nagar offer corporate professionals a stress-free alternative.
      </p>
    </div>

    {/* Section 1 */}
    <div>
      <h2 id="pro-location" className="font-display font-bold text-xl sm:text-2xl text-charcoal mb-4 tracking-tight">
        1. Central Locations & Hassle-Free Commutes
      </h2>
      <p className="mb-4">
        As a working professional, your time is your most valuable asset. Spending hours stuck in local traffic is a waste. Choosing a centrally located PG makes your commute to local corporate offices or hospital duties incredibly simple.
      </p>
      
      {/* Stat Card Component */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 my-6">
        <div className="bg-white border border-border-light p-5 rounded-2xl text-center shadow-3xs">
          <span className="block text-3xl font-display font-extrabold text-[#0F8B8D]">5 Mins</span>
          <span className="text-xs text-slate-gray font-bold uppercase tracking-wider">Walking distance to ISBT Route</span>
        </div>
        <div className="bg-white border border-border-light p-5 rounded-2xl text-center shadow-3xs">
          <span className="block text-3xl font-display font-extrabold text-[#F4B400]">100%</span>
          <span className="text-xs text-slate-gray font-bold uppercase tracking-wider">Worry-Free Serviced Living</span>
        </div>
      </div>

      <p className="mb-4">
        Unitas Home is centrally located in Patel Nagar, a major commercial hub. We are just minutes away from SGRR Medical College, Mahant Indresh Hospital, and major transit routes, ensuring you reach your workspace fresh and on time.
      </p>
    </div>

    {/* Section 2 */}
    <div>
      <h2 id="pro-internet" className="font-display font-bold text-xl sm:text-2xl text-charcoal mb-4 tracking-tight">
        2. High-Speed Commercial Fiber Internet
      </h2>
      <p className="mb-4">
        For software developers, remote workers, and creative professionals, slow internet is a dealbreaker. Standard shared local PGs install weak domestic connections that lag heavily during video conferences.
      </p>

      {/* Warning Box */}
      <div className="bg-rose-50 border border-rose-200 p-5 rounded-2xl my-6 flex items-start space-x-3">
        <span className="text-xl">💻</span>
        <div>
          <h4 className="font-display font-bold text-rose-900 text-sm mb-1">Wi-Fi Quality Check</h4>
          <p className="text-rose-800 text-xs font-medium leading-relaxed">
            Ensure your prospective room is covered by a high-bandwidth dual-band fiber connection, backed by continuous automatic power generators. A network drop during a critical client meeting can hurt your professional standing.
          </p>
        </div>
      </div>

      <p className="mb-4">
        We provide commercial-grade, high-bandwidth fiber Wi-Fi networks across our entire property, ensuring seamless video streaming, remote server access, and video calls. Our 100% automatic generator power restores connectivity in under 15 seconds during grid cuts.
      </p>
    </div>

    {/* Section 3 */}
    <div>
      <h2 id="pro-services" className="font-display font-bold text-xl sm:text-2xl text-charcoal mb-4 tracking-tight">
        3. Fully Serviced Co-Living: Reclaim Your Weekends
      </h2>
      <p className="mb-4">
        Weekends should be spent relaxing, traveling, or learning new skills—not doing piles of dirty laundry or wet-mopping floors. Opting for a fully managed co-living room allows you to completely outsource these daily chores.
      </p>

      {/* Checklist Component */}
      <div className="border border-border-light bg-white rounded-2xl p-6 my-6">
        <h4 className="font-display font-extrabold text-charcoal text-sm uppercase tracking-wide mb-4">
          📋 Services Included in Premium Co-Living
        </h4>
        <ul className="space-y-3">
          <li className="flex items-center space-x-2.5 text-xs sm:text-sm text-slate-gray font-semibold">
            <span className="text-[#0F8B8D]">✔</span>
            <span>Daily in-room sweeping, wet-mopping, and trash removal by dedicated staff.</span>
          </li>
          <li className="flex items-center space-x-2.5 text-xs sm:text-sm text-slate-gray font-semibold">
            <span className="text-[#0F8B8D]">✔</span>
            <span>Weekly professional washing, machine drying, and steam-ironing of clothes.</span>
          </li>
          <li className="flex items-center space-x-2.5 text-xs sm:text-sm text-slate-gray font-semibold">
            <span className="text-[#0F8B8D]">✔</span>
            <span>Healthy, home-style buffet meals prepared freshly inside our hygienic kitchen.</span>
          </li>
        </ul>
      </div>
    </div>
  </div>
);
