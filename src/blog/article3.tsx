import React from 'react';

export const article3Content = (
  <div className="space-y-8 font-sans text-charcoal/90 leading-relaxed text-sm sm:text-base">
    <div className="bg-[#0F8B8D]/5 border-l-4 border-[#0F8B8D] p-6 rounded-r-2xl shadow-3xs mb-8">
      <h3 className="font-display font-bold text-[#0F8B8D] text-base mb-2">🎓 Decision Guide</h3>
      <p className="text-slate-gray font-medium text-xs sm:text-sm">
        As an incoming student in Dehradun, one of your biggest decisions is deciding where to live. Should you choose a traditional university-owned hostel on campus, a local off-campus paying guest (PG) room, or opt for a premium modern co-living space? This guide runs a rigorous comparison across dining quality, study environments, privacy, and community to help you choose the best space.
      </p>
    </div>

    {/* Section 1 */}
    <div>
      <h2 id="privacy-space" className="font-display font-bold text-xl sm:text-2xl text-charcoal mb-4 tracking-tight">
        1. Privacy, Comfort, and Personal Spaces
      </h2>
      <p className="mb-4">
        Traditional college hostels are infamous for overcrowding. They routinely force three, four, or even six students into small rooms equipped with creaking metal bunker beds and shared common hallway bathrooms. This lack of personal space can lead to sleep deprivation, roommate friction, and a complete lack of focused study time.
      </p>
      <p className="mb-4">
        On the other hand, a premium co-living property like Unitas Home offers spacious, high-end <a href="#rooms" className="text-[#0F8B8D] font-bold hover:underline">single or double-sharing rooms</a>. Every room is designed with premium wooden single beds, orthopedic comfortable mattresses, personal wardrobes, attached modern washrooms with private hot-water geysers, and dedicated study workstations. This offers you the comfort of a hotel with the quiet study sanctuary of a library.
      </p>
    </div>

    {/* Section 2 */}
    <div>
      <h2 id="mess-vs-kitchen" className="font-display font-bold text-xl sm:text-2xl text-charcoal mb-4 tracking-tight">
        2. Mass-Cooked Mess Food vs. Fresh, In-House Kitchens
      </h2>
      <p className="mb-4">
        University messes are built to feed hundreds of students at once. As a result, menus are highly repetitive, bland, and often deficient in vital nutrients. It is very common for hostel students to order spicy fast food daily, which causes stomach issues, weight fluctuations, and excessive expenses.
      </p>

      {/* Pro Tip Callout */}
      <div className="bg-[#FAF9F6] border border-border-light p-6 rounded-2xl my-6">
        <h4 className="font-display font-bold text-charcoal text-sm mb-1">🍽️ Unitas Dining Excellence</h4>
        <p className="text-slate-gray text-xs sm:text-sm font-semibold leading-relaxed">
          At Unitas Home, our meals are cooked on-site in small batches inside a spotless, modern kitchen. We serve four daily vegetarian meals—including paneer, seasonal green vegetables, fresh curd, warm chapatis, evening snacks with tea, and hot milk. It is nutrition that feels like home.
        </p>
      </div>
    </div>

    {/* Section 3 */}
    <div>
      <h2 id="rules-flexibility" className="font-display font-bold text-xl sm:text-2xl text-charcoal mb-4 tracking-tight">
        3. Rigid Curfews vs. Responsible Autonomy
      </h2>
      <p className="mb-4">
        Many campus hostels lock their gates as early as 7:00 PM, preventing students from taking part in evening university workshops, studying in off-site libraries, attending rotating clinical postings at <a href="#location" className="text-[#0F8B8D] font-bold hover:underline">Mahant Indresh Hospital</a>, or enjoying a casual evening dinner with friends.
      </p>
      <p className="mb-4">
        Premium co-living systems offer the perfect balance: a responsible, safe gate timing of 10:30 PM, backed by modern biometric access controls. Verified clinical rosters or evening classes are safely whitelisted, offering you the autonomy to manage your professional responsibilities.
      </p>
    </div>

    {/* Comprehensive Table */}
    <div>
      <h3 className="font-display font-bold text-base sm:text-lg text-charcoal mb-4">PG vs. Hostel vs. Unitas Home Co-Living</h3>
      <div className="overflow-x-auto border border-border-light rounded-2xl shadow-3xs bg-white">
        <table className="w-full text-left border-collapse text-xs sm:text-sm">
          <thead>
            <tr className="bg-neutral-50 border-b border-border-light font-display">
              <th className="p-4 font-bold text-charcoal">Feature</th>
              <th className="p-4 font-bold text-slate-gray">Campus Hostel</th>
              <th className="p-4 font-bold text-slate-gray">Standard Local PG</th>
              <th className="p-4 font-bold text-[#0F8B8D]">Unitas Home Co-Living</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b border-neutral-50">
              <td className="p-4 font-bold text-charcoal">Restrooms</td>
              <td className="p-4 text-slate-gray">Common hallway (shared by 20+)</td>
              <td className="p-4 text-slate-gray">Sometimes shared</td>
              <td className="p-4 text-charcoal font-semibold">Attached private washroom in every room</td>
            </tr>
            <tr className="border-b border-neutral-50">
              <td className="p-4 font-bold text-charcoal">Food Quality</td>
              <td className="p-4 text-slate-gray">Mass-cooked mess</td>
              <td className="p-4 text-slate-gray">Outsourced tiffins</td>
              <td className="p-4 text-charcoal font-semibold">4 Fresh, in-house vegetarian meals daily</td>
            </tr>
            <tr className="border-b border-neutral-50">
              <td className="p-4 font-bold text-charcoal">Security</td>
              <td className="p-4 text-slate-gray">Basic warden logbook</td>
              <td className="p-4 text-slate-gray">Manual padlock gate</td>
              <td className="p-4 text-charcoal font-semibold">24/7 Guards, biometric gates & corridor CCTV</td>
            </tr>
            <tr>
              <td className="p-4 font-bold text-charcoal">Housekeeping</td>
              <td className="p-4 text-slate-gray">Self-cleaning</td>
              <td className="p-4 text-slate-gray">Weekly or none</td>
              <td className="p-4 text-charcoal font-semibold">Daily in-room sweeping & washroom disinfection</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
);
