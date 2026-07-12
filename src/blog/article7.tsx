import React from 'react';

export const article7Content = (
  <div className="space-y-8 font-sans text-charcoal/90 leading-relaxed text-sm sm:text-base">
    <div className="bg-[#0F8B8D]/5 border-l-4 border-[#0F8B8D] p-6 rounded-r-2xl shadow-3xs mb-8">
      <h3 className="font-display font-bold text-[#0F8B8D] text-base mb-2">🛡️ Security Standards</h3>
      <p className="text-slate-gray font-medium text-xs sm:text-sm">
        Safety is not an optional premium feature—it is a fundamental human right. When evaluating PG accommodations in Patel Nagar, Dehradun, you must treat safety as non-negotiable. This comprehensive guide highlights the essential security technologies and operating procedures every modern student PG should possess.
      </p>
    </div>

    {/* Section 1 */}
    <div>
      <h2 id="biometric-lock" className="font-display font-bold text-xl sm:text-2xl text-charcoal mb-4 tracking-tight">
        1. Biometric Entry vs. Replicable Metal Keys
      </h2>
      <p className="mb-4">
        Traditional metal keys can easily be copied by anyone who handles them. Furthermore, roommates constantly lose keys, resulting in locked-out students and compromised security.
      </p>
      
      {/* Stat block */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 my-6">
        <div className="bg-white border border-border-light p-5 rounded-2xl text-center shadow-3xs">
          <span className="block text-3xl font-display font-extrabold text-[#0F8B8D]">100%</span>
          <span className="text-xs text-slate-gray font-bold uppercase tracking-wider">Stranger Entry Prevented</span>
        </div>
        <div className="bg-white border border-border-light p-5 rounded-2xl text-center shadow-3xs">
          <span className="block text-3xl font-display font-extrabold text-[#F4B400]">Zero</span>
          <span className="text-xs text-slate-gray font-bold uppercase tracking-wider">Duplicate Keys Allowed</span>
        </div>
      </div>

      <p className="mb-4">
        At Unitas Home, we install biometric fingerprint and card access panels at all entry points. Only registered, active residents can enter our residential wings, creating a secure shield around our student community.
      </p>
    </div>

    {/* Section 2 */}
    <div>
      <h2 id="cctv-coverage" className="font-display font-bold text-xl sm:text-2xl text-charcoal mb-4 tracking-tight">
        2. HD Corridor surveillance & Active CCTV Monitoring
      </h2>
      <p className="mb-4">
        Active camera coverage is a powerful security tool. Ensure that security cameras are high-definition, feature night-vision, and maintain at least 30 days of local backup recording.
      </p>

      {/* Info Card Component */}
      <div className="bg-rose-50 border border-rose-200 p-5 rounded-2xl my-6 flex items-start space-x-3">
        <span className="text-xl">🔒</span>
        <div>
          <h4 className="font-display font-bold text-rose-900 text-sm mb-1">Privacy-Respecting Monitoring</h4>
          <p className="text-rose-800 text-xs font-medium leading-relaxed">
            While hallway and entrance surveillance are critical, CCTV cameras must **never** be placed inside bedrooms, restrooms, or private spaces. They should monitor main entrance gates, hallway corridors, lobbies, and common dining spaces only.
          </p>
        </div>
      </div>
    </div>

    {/* Section 3 */}
    <div>
      <h2 id="fire-standards" className="font-display font-bold text-xl sm:text-2xl text-charcoal mb-4 tracking-tight">
        3. Commercial-Grade Fire Safety and Power Backup
      </h2>
      <p className="mb-4">
        Sudden power cuts can plunge hallways and stairwells into pitch-black darkness, creating severe tripping hazards. An automatic generator backup system is vital to ensure that corridors and biometric security doors remain 100% operational.
      </p>
      
      {/* Checklist Component */}
      <div className="border border-border-light bg-white rounded-2xl p-6 my-6">
        <h4 className="font-display font-extrabold text-charcoal text-sm uppercase tracking-wide mb-4">
          📋 Essential Fire & Safety Compliance Checks
        </h4>
        <ul className="space-y-3">
          <li className="flex items-center space-x-2.5 text-xs sm:text-sm text-slate-gray font-semibold">
            <span className="text-[#0F8B8D]">✔</span>
            <span>Are fire extinguishers active, fully charged, and placed on every floor?</span>
          </li>
          <li className="flex items-center space-x-2.5 text-xs sm:text-sm text-slate-gray font-semibold">
            <span className="text-[#0F8B8D]">✔</span>
            <span>Are corridors and emergency escape pathways wide, well-lit, and completely unobstructed?</span>
          </li>
          <li className="flex items-center space-x-2.5 text-xs sm:text-sm text-slate-gray font-semibold">
            <span className="text-[#0F8B8D]">✔</span>
            <span>Is there a clear, posted emergency evacuation map in the lobby?</span>
          </li>
        </ul>
      </div>
    </div>
  </div>
);
