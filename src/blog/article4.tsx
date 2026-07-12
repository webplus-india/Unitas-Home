import React from 'react';

export const article4Content = (
  <div className="space-y-8 font-sans text-charcoal/90 leading-relaxed text-sm sm:text-base">
    <div className="bg-[#0F8B8D]/5 border-l-4 border-[#0F8B8D] p-6 rounded-r-2xl shadow-3xs mb-8">
      <h3 className="font-display font-bold text-[#0F8B8D] text-base mb-2">🎓 First-Year Survival Guide</h3>
      <p className="text-slate-gray font-medium text-xs sm:text-sm">
        Moving away from home for the first time is an incredible adventure. But between starting difficult college classes and adapting to co-living, many freshmen feel overwhelmed. These practical tips will help you stay focused, make lifelong friends, and thrive during your first year in Dehradun.
      </p>
    </div>

    {/* Section 1 */}
    <div>
      <h2 id="roommate-harmony" className="font-display font-bold text-xl sm:text-2xl text-charcoal mb-4 tracking-tight">
        1. Establishing Mutual Respect & Roommate Harmony
      </h2>
      <p className="mb-4">
        Sharing a room with a brand-new person requires communication and mutual respect. Some of your closest lifelong friendships will start in college rooms. Follow these simple guidelines during your first month:
      </p>
      <ul className="list-disc pl-5 space-y-2 mb-4 text-xs sm:text-sm text-slate-gray font-semibold">
        <li><strong>Discuss Sleep Cycles:</strong> Agree on lights-out timings and study rules.</li>
        <li><strong>Keep Spaces Separate:</strong> Respect personal boundaries regarding study desks, shelves, and clothes.</li>
        <li><strong>Cleanliness Standards:</strong> Discuss how trash is handled and keep your shared tables organized.</li>
      </ul>
      <p className="mb-4">
        We make this process easy. Unitas Home provides daily in-room sweeping, wet floor mopping, and waste disposal by our professional cleaning staff. This eliminates roommates' arguments over basic chores.
      </p>
    </div>

    {/* Section 2 */}
    <div>
      <h2 id="organizing-space" className="font-display font-bold text-xl sm:text-2xl text-charcoal mb-4 tracking-tight">
        2. Workstation Organization for Productive Study Blocks
      </h2>
      <p className="mb-4">
        A cluttered, disorganized room directly causes a cluttered, unfocused mind. Since your academic workload at major colleges like SGRR will be demanding, keeping a structured workspace is crucial.
      </p>

      {/* Info Card Component */}
      <div className="bg-[#FAF9F6] border border-border-light p-6 rounded-2xl my-6">
        <h4 className="font-display font-bold text-charcoal text-sm mb-1.5">📝 Pro Desk Layout</h4>
        <p className="text-slate-gray text-xs sm:text-sm font-semibold leading-relaxed">
          Keep your desk separate from your sleeping space. Avoid using your laptop on your bed. Keep a physical table calendar, store your active notebooks in reach, and ensure a dedicated desk lamp is placed to prevent eye strain during late-night exam prep.
        </p>
      </div>
    </div>

    {/* Section 3 */}
    <div>
      <h2 id="homesickness" className="font-display font-bold text-xl sm:text-2xl text-charcoal mb-4 tracking-tight">
        3. Overcoming Homesickness and Finding Your Community
      </h2>
      <p className="mb-4">
        Feeling homesick is completely natural during your first 2-4 weeks. The transition from home-cooked family meals to independent living can feel shocking. The best way to overcome this is to remain active:
      </p>
      <ul className="list-disc pl-5 space-y-2 mb-4 text-xs sm:text-sm text-slate-gray font-semibold">
        <li>Join campus groups, cultural committees, and sports clubs.</li>
        <li>Spend time in our community common lounges rather than isolating inside your room.</li>
        <li>Have dinner in our shared dining hall, which is a fantastic social hub to meet other medical interns and senior students.</li>
      </ul>
      <p className="mb-4">
        Our on-site resident wardens act as local guardians. They are always available for a warm cup of tea, a supportive chat, or to assist with medical care if you feel under the weather.
      </p>
    </div>

    {/* Dos and Don'ts Card */}
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 my-6">
      <div className="bg-emerald-50 border border-emerald-200 p-5 rounded-2xl">
        <h4 className="font-display font-bold text-emerald-900 text-sm mb-2">🟢 DO's for Freshmen</h4>
        <ul className="list-disc pl-4 space-y-1.5 text-xs text-emerald-800 font-medium leading-relaxed">
          <li>Introduce yourself to your room neighbors on day one.</li>
          <li>Set clear limits on noise and guest visits inside the bedroom.</li>
          <li>Keep emergency numbers (wardens, local hospital desk) on speed dial.</li>
        </ul>
      </div>
      <div className="bg-rose-50 border border-rose-200 p-5 rounded-2xl">
        <h4 className="font-display font-bold text-rose-900 text-sm mb-2">🔴 DONT's for Freshmen</h4>
        <ul className="list-disc pl-4 space-y-1.5 text-xs text-rose-800 font-medium leading-relaxed">
          <li>Don't keep valuable cash or sensitive documents in unlocked areas.</li>
          <li>Don't skip breakfast; it is the most critical meal for cognitive focus.</li>
          <li>Don't study on your bed; use the dedicated ergonomic desk.</li>
        </ul>
      </div>
    </div>
  </div>
);
