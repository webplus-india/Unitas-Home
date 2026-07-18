import React from 'react';

export const article3Content = (
  <div className="space-y-8 font-sans text-charcoal/90 leading-relaxed text-sm sm:text-base">
    {/* Executive Summary */}
    <div className="bg-[#2D6A4F]/5 border-l-4 border-[#2D6A4F] p-6 rounded-r-2xl shadow-3xs mb-8">
      <h3 className="font-display font-extrabold text-[#2D6A4F] text-base mb-2">🎓 Executive Summary</h3>
      <p className="text-slate-gray font-medium text-xs sm:text-sm">
        Choosing where to live is one of the most critical decisions a university student makes. Should you choose a traditional on-campus college hostel or an off-campus premium Paying Guest (PG) co-living facility? This comprehensive guide compares the two across privacy, meal standards, academic study infrastructure, curfews, and daily chores to help you make an informed decision in Dehradun.
      </p>
    </div>

    {/* Section 1 */}
    <div>
      <h2 id="privacy-space" className="font-display font-bold text-xl sm:text-2xl text-charcoal mb-4 tracking-tight">
        1. Privacy & Personal Space: Hostels vs. Modern Premium Co-Living
      </h2>
      <p className="mb-4">
        Traditional college hostels are infamous for crowded conditions. Many dormitories pack 3 to 4 students into a single room with shared common bathrooms down the hall. This layout leads to minimal personal privacy, constant noise distractions, and frequent restroom queues during early morning lecture hours.
      </p>

      {/* Supporting Image 1 */}
      <div className="my-6">
        <img 
          src="https://images.unsplash.com/photo-1555854877-bab0e564b8d5?q=80&w=800&auto=format&fit=crop" 
          alt="Modern hostel twin room with comfortable layout" 
          className="rounded-2xl w-full h-[280px] object-cover border border-border-light shadow-3xs"
          referrerPolicy="no-referrer"
        />
        <span className="block text-center text-xs text-slate-gray font-medium mt-2">
          Modern co-living suites strike the perfect balance between community interactions and personal privacy.
        </span>
      </div>

      <p className="mb-4">
        At Unitas Home, we believe personal space is essential for academic focus. Our premium suites offer single or double sharing options, featuring modern attached bathrooms with private geysers. Every resident receives a dedicated study desk, personal wooden closets, and ergonomic seating, ensuring a quiet study zone.
      </p>

      <h3 className="font-display font-bold text-base sm:text-lg text-charcoal mb-2">🚨 Common Mistakes: Sacrificing Privacy for Cheap Rent</h3>
      <p className="mb-4 text-slate-gray text-xs sm:text-sm font-medium">
        Many students prioritize the lowest possible rent and choose highly crowded hostels. After a few weeks, the constant noise, lack of private restrooms, and zero control over sleep schedules can lead to academic fatigue and emotional burnout.
      </p>
    </div>

    {/* Section 2 */}
    <div>
      <h2 id="mess-vs-kitchen" className="font-display font-bold text-xl sm:text-2xl text-charcoal mb-4 tracking-tight">
        2. Nutritional Standards: Bulk College Mess Food vs. Fresh In-House Dining
      </h2>
      <p className="mb-4">
        Nutrition is the physical foundation of your learning journey. On-campus college messes are managed under bulk catering contracts, cooking for hundreds of students at once. This volume often results in repetitive menus, high reliance on low-grade oils, and mediocre hygiene.
      </p>

      {/* Supporting Image 2 */}
      <div className="my-6">
        <img 
          src="https://images.unsplash.com/photo-1556910103-1c02745aae4d?q=80&w=800&auto=format&fit=crop" 
          alt="Freshly prepared healthy meals representing premium dining" 
          className="rounded-2xl w-full h-[280px] object-cover border border-border-light shadow-3xs"
          referrerPolicy="no-referrer"
        />
        <span className="block text-center text-xs text-slate-gray font-medium mt-2">
          In-house, hygienic kitchens focus on organic ingredients and balanced student nutrition.
        </span>
      </div>

      {/* Info Card Component */}
      <div className="bg-amber-50/60 border border-amber-200 p-5 rounded-2xl my-6 flex items-start space-x-3">
        <span className="text-xl">⚠️</span>
        <div>
          <h4 className="font-display font-bold text-amber-900 text-sm mb-1">Nutrition Warning</h4>
          <p className="text-amber-800 text-xs font-medium leading-relaxed">
            Consuming low-quality meals over a 9-month academic term frequently causes vitamin deficiencies, gut issues, and forces students to spend heavily on fast-food deliveries.
          </p>
        </div>
      </div>

      <p className="mb-4">
        Our premium kitchen at Unitas Home serves three freshly prepared, highly nutritious, home-style vegetarian meals every single day (Breakfast, Lunch, and Dinner). We focus on high-protein menu components like fresh paneer, curd, fresh lentils, and organic vegetables cooked with healthy oils to ensure you stay energized for studies.
      </p>
    </div>

    {/* Section 3 */}
    <div>
      <h2 id="rules-flexibility" className="font-display font-bold text-xl sm:text-2xl text-charcoal mb-4 tracking-tight">
        3. Rules & Curfews: Hostels Lockdowns vs. Biometric Flexibility
      </h2>
      <p className="mb-4">
        College hostels are notorious for imposing archaic, rigid curfews, such as locking main gates at 7:00 PM. This model doesn't support modern academic requirements, medical rotations at local hospitals like Mahant Indresh, or remote internships.
      </p>

      {/* Supporting Image 3 */}
      <div className="my-6">
        <img 
          src="https://images.unsplash.com/photo-1524758631624-e2822e304c36?q=80&w=800&auto=format&fit=crop" 
          alt="Secure biometric entrance and lobby setup" 
          className="rounded-2xl w-full h-[280px] object-cover border border-border-light shadow-3xs"
          referrerPolicy="no-referrer"
        />
        <span className="block text-center text-xs text-slate-gray font-medium mt-2">
          Biometric security systems provide secure, roster-linked gate access for student safety.
        </span>
      </div>

      <p className="mb-4">
        Unitas Home uses modern, secure biometric fingerprint keyless entry systems. The property is managed by an experienced resident warden who supports students on late-night academic rosters or medical shifts, ensuring absolute safety with practical flexibility.
      </p>

      {/* Comparison Matrix */}
      <div className="overflow-x-auto my-6 border border-border-light rounded-2xl shadow-3xs bg-white">
        <table className="w-full text-left border-collapse text-xs sm:text-sm">
          <thead>
            <tr className="bg-neutral-50 border-b border-border-light font-display">
              <th className="p-4 font-bold text-charcoal">Category</th>
              <th className="p-4 font-bold text-slate-gray">Standard College Hostel</th>
              <th className="p-4 font-bold text-[#2D6A4F]">Unitas Home Co-Living</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b border-neutral-50">
              <td className="p-4 font-bold text-charcoal">Curfew & Gate Access</td>
              <td className="p-4 text-slate-gray">Strict 7:00 PM lockouts, no entry</td>
              <td className="p-4 text-charcoal font-semibold">10:30 PM gate with biometric exception whitelisting for late shifts</td>
            </tr>
            <tr className="border-b border-neutral-50">
              <td className="p-4 font-bold text-charcoal">Restrooms</td>
              <td className="p-4 text-slate-gray">Common corridor toilets</td>
              <td className="p-4 text-charcoal font-semibold">Private, attached modern washroom with dedicated geyser</td>
            </tr>
            <tr className="border-b border-neutral-50">
              <td className="p-4 font-bold text-charcoal">Power Backup</td>
              <td className="p-4 text-slate-gray">Usually none, frequent outages</td>
              <td className="p-4 text-charcoal font-semibold">Inverter-based backup for lights and Wi-Fi included</td>
            </tr>
            <tr>
              <td className="p-4 font-bold text-charcoal">Internet Speed</td>
              <td className="p-4 text-slate-gray">Weak or blocked shared Wi-Fi</td>
              <td className="p-4 text-charcoal font-semibold">High-speed dual-band fiber routers on every floor</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h3 className="font-display font-bold text-base sm:text-lg text-charcoal mb-2">💡 Expert Recommendations & Local Dehradun Insights</h3>
      <p className="mb-4">
        "Many off-campus hostels in Dehradun located in remote lanes lack cell reception and basic security. When deciding between on-campus housing and a premium off-campus PG, evaluate the main road access. Unitas Home is centrally located directly on Patel Nagar main road, making public transport instantly accessible."
      </p>
    </div>

    {/* Summary and Checklist */}
    <div className="pt-6 border-t border-gray-100">
      <h3 className="font-display font-bold text-lg text-charcoal mb-2">Summary & Final Recommendation</h3>
      <p className="text-slate-gray font-semibold text-xs sm:text-sm mb-4">
        While college hostels offer proximity, they often compromise heavily on nutrition, comfort, study desks, and basic privacy. Reclaiming your chore-time and enjoying balanced nutrition allows you to perform far better academically. Unitas Home provides a premium co-living space designed specifically to eliminate daily friction, allowing you to prioritize your career goals.
      </p>
    </div>
  </div>
);
