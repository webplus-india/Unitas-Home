import React from 'react';

export const article6Content = (
  <div className="space-y-8 font-sans text-charcoal/90 leading-relaxed text-sm sm:text-base">
    <div className="bg-[#0F8B8D]/5 border-l-4 border-[#0F8B8D] p-6 rounded-r-2xl shadow-3xs mb-8">
      <h3 className="font-display font-bold text-[#0F8B8D] text-base mb-2">👨‍👩‍👧 Parent Guide</h3>
      <p className="text-slate-gray font-medium text-xs sm:text-sm">
        As parents, your child's physical safety, health, and nutritional well-being are non-negotiable. While students are often swayed by wall colors and room decor, parents must look deeper. This comprehensive guide outlines the essential infrastructure, dining standards, and emergency systems you must check during physical site inspections.
      </p>
    </div>

    {/* Section 1 */}
    <div>
      <h2 id="parent-safety" className="font-display font-bold text-xl sm:text-2xl text-charcoal mb-4 tracking-tight">
        1. Evaluating Real Security vs. Simple Logbooks
      </h2>
      <p className="mb-4">
        Do not trust simple padlocks or manual guard logs. Anyone can easily access standard residential hallways if entry isn't locked down. Ensure your child's prospective home has:
      </p>
      <ul className="list-disc pl-5 space-y-2 mb-4 text-xs sm:text-sm text-slate-gray font-semibold">
        <li><strong>Biometric Fingerprint Access:</strong> Keeps random visitors or unregistered delivery drivers out of the residential wings.</li>
        <li><strong>HD CCTV Monitoring:</strong> Full camera coverage across corridors, exit gates, stairwells, and main lobbies.</li>
        <li><strong>24/7 Gate Guard:</strong> Active guards verifying visitor registrations, delivery handoffs, and neighborhood safety.</li>
      </ul>
      <p className="mb-4">
        At Unitas Home, we separate girls' and boys' wings with dedicated secure biometric gates. Parents can sleep peacefully knowing their daughters reside in a safe, fully supervised environment.
      </p>
    </div>

    {/* Section 2 */}
    <div>
      <h2 id="parent-hygiene" className="font-display font-bold text-xl sm:text-2xl text-charcoal mb-4 tracking-tight">
        2. Inspecting Kitchen Cleanliness & RO Water Filtration
      </h2>
      <p className="mb-4">
        Many local PG accommodations hide their cooking spaces, and for a good reason—they are dirty, hot, and lack proper sanitation. When visiting a PG, demand a physical tour of the kitchen.
      </p>

      {/* Info Card Component */}
      <div className="bg-amber-50/60 border border-amber-200 p-5 rounded-2xl my-6 flex items-start space-x-3">
        <span className="text-xl">🥛</span>
        <div>
          <h4 className="font-display font-bold text-amber-900 text-sm mb-1">Water and Milk Safety</h4>
          <p className="text-amber-800 text-xs font-medium leading-relaxed">
            Stomach infections, typhoid, and food poisoning are common among first-year students. Confirm that drinking water is treated with an industrial-grade RO water filter with regular filter replacements, and that milk is pasteurized and fresh daily.
          </p>
        </div>
      </div>

      <p className="mb-4">
        We maintain a 100% transparent kitchen policy. Parents can inspect our state-of-the-art kitchen at any time. We serve fresh, home-style vegetarian meals, clean our kitchen utensils with high-temperature sanitizers, and use industrial-grade RO systems to provide completely safe, chilled drinking water.
      </p>
    </div>

    {/* Section 3 */}
    <div>
      <h2 id="parent-emergency" className="font-display font-bold text-xl sm:text-2xl text-charcoal mb-4 tracking-tight">
        3. Clear Emergency Medical Responses
      </h2>
      <p className="mb-4">
        What happens if your child falls ill or suffers a sudden medical emergency at night? If you live in another state, you need absolute trust in local support.
      </p>
      
      {/* Alert Block */}
      <div className="bg-emerald-50 border border-emerald-200 p-5 rounded-2xl my-6">
        <h4 className="font-display font-bold text-emerald-900 text-sm mb-1">🏥 Proximity to Medical Care</h4>
        <p className="text-[#0F8B8D] text-xs sm:text-sm font-semibold leading-relaxed">
          Unitas Home is uniquely located just a <strong>2-minute walking distance</strong> from <strong>Mahant Indresh Hospital</strong> (Shri Guru Ram Rai Institute of Medical Sciences). This guarantees that professional medical care, specialist doctors, and emergency treatment are available in seconds. Our wardens are trained in first-aid and live on-site to assist.
        </p>
      </div>
    </div>
  </div>
);
