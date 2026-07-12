import React from 'react';

export const article8Content = (
  <div className="space-y-8 font-sans text-charcoal/90 leading-relaxed text-sm sm:text-base">
    <div className="bg-[#0F8B8D]/5 border-l-4 border-[#0F8B8D] p-6 rounded-r-2xl shadow-3xs mb-8">
      <h3 className="font-display font-bold text-[#0F8B8D] text-base mb-2">🛡️ Women's Housing Guide</h3>
      <p className="text-slate-gray font-medium text-xs sm:text-sm">
        Moving to Dehradun for medical rotations, corporate positions, or college classes is an empowering phase in your life. Finding a highly secure, peaceful, and fully managed female housing facility is crucial to let you focus on your career with absolute peace of mind. This comprehensive guide covers what security features, warden setups, and neighborhood factors you should expect.
      </p>
    </div>

    {/* Section 1 */}
    <div>
      <h2 id="neighborhood-safety" className="font-display font-bold text-xl sm:text-2xl text-charcoal mb-4 tracking-tight">
        1. Location Check: Well-Lit, Main-Road Neighborhoods
      </h2>
      <p className="mb-4">
        Never rent rooms located in dark, isolated, or hard-to-reach alleys. If your shift at <a href="#location" className="text-[#0F8B8D] font-bold hover:underline">Mahant Indresh Hospital</a> ends late at night, or your college labs run into the evening, walking down a dark road is highly unsafe.
      </p>

      {/* Pro Tip */}
      <div className="bg-emerald-50 border border-emerald-200 p-5 rounded-2xl my-6 flex items-start space-x-3">
        <span className="text-xl">📍</span>
        <div>
          <h4 className="font-display font-bold text-emerald-900 text-sm mb-1">Main Road Safety</h4>
          <p className="text-emerald-800 text-xs font-medium leading-relaxed">
            Choose PGs situated right on major roads where local transport (autos, cabs, Vikrams) is readily available 24/7. Unitas Home is centrally located on Patel Nagar Road, providing well-lit pathways, active street lighting, and direct transit access at all hours.
          </p>
        </div>
      </div>
    </div>

    {/* Section 2 */}
    <div>
      <h2 id="female-warden" className="font-display font-bold text-xl sm:text-2xl text-charcoal mb-4 tracking-tight">
        2. The Importance of an On-Site Female Warden
      </h2>
      <p className="mb-4">
        A truly safe girls' wing must be supervised by a warm, mature, and experienced female warden who resides on the property. Wardens are not just rule-enforcers; they act as on-site local guardians.
      </p>
      <p className="mb-4">
        At Unitas Home, our dedicated female wardens:
      </p>
      <ul className="list-disc pl-5 space-y-2 mb-4 text-xs sm:text-sm text-slate-gray font-semibold">
        <li>Provide first-aid, medical care, and warm meals if a resident falls ill.</li>
        <li>Mediate roommates' issues and maintain strict study hours.</li>
        <li>Act as a direct point of contact for concerned parents, sharing regular updates.</li>
      </ul>
    </div>

    {/* Section 3 */}
    <div>
      <h2 id="visitor-protocol" className="font-display font-bold text-xl sm:text-2xl text-charcoal mb-4 tracking-tight">
        3. Clear Guest Verification Protocols
      </h2>
      <p className="mb-4">
        A secure female housing facility must enforce strict visitor boundaries. Delivery riders, commercial sales agents, or external maintenance staff must never be allowed onto residential bedroom corridors without supervision.
      </p>

      {/* Comparison block */}
      <div className="bg-[#FAF9F6] border border-border-light rounded-2xl p-6 my-6">
        <h4 className="font-display font-extrabold text-[#0F8B8D] text-xs uppercase tracking-wider mb-3">Unitas Guest Protocol</h4>
        <p className="font-sans text-xs sm:text-sm text-slate-gray font-semibold leading-relaxed">
          At Unitas Home, all deliveries (Zomato, Swiggy, Amazon) are safely logged and received by our main security guard gate. Guests and parents are warmly welcomed in our beautiful ground-floor lobby and reception lounge, preserving the privacy and security of our upper residential floors.
        </p>
      </div>
    </div>
  </div>
);
