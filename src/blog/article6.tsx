import React from 'react';

export const article6Content = (
  <div className="space-y-8 font-sans text-charcoal/90 leading-relaxed text-sm sm:text-base">
    {/* Executive Summary */}
    <div className="bg-[#2D6A4F]/5 border-l-4 border-[#2D6A4F] p-6 rounded-r-2xl shadow-3xs mb-8">
      <h3 className="font-display font-extrabold text-[#2D6A4F] text-base mb-2">🎓 Executive Summary for Parents</h3>
      <p className="text-slate-gray font-medium text-xs sm:text-sm">
        Sending your child to pursue an education in Dehradun is a proud and emotional moment for parents. Ensuring they live in a safe, healthy, and supportive environment is your top priority. This parent's guide outlines how to evaluate security controls, kitchen hygiene, warden care, and medical emergency preparedness to help you choose a premium co-living space.
      </p>
    </div>

    {/* Section 1 */}
    <div>
      <h2 id="parent-safety" className="font-display font-bold text-xl sm:text-2xl text-charcoal mb-4 tracking-tight">
        1. Safety Verification: Ensuring Complete Peace of Mind (Why This Matters)
      </h2>
      <p className="mb-4">
        As a parent, your primary concern is your child's safety and well-being. A secure student PG must go beyond simple manual locks. Look for active, multi-layered security measures that protect residents around the clock.
      </p>

      {/* Supporting Image 1 */}
      <div className="my-6">
        <img 
          src="https://images.unsplash.com/photo-1558002038-1055907df827?auto=format&fit=crop&w=800&q=80" 
          alt="Secure biometric access system with lock representing safety" 
          className="rounded-2xl w-full h-[280px] object-cover border border-border-light shadow-3xs"
          referrerPolicy="no-referrer"
        />
        <span className="block text-center text-xs text-slate-gray font-medium mt-2">
          Advanced security features like biometric locks and active CCTV provide peace of mind for parents.
        </span>
      </div>

      <h3 className="font-display font-bold text-base sm:text-lg text-charcoal mb-2">🚨 Common Mistakes: Relying on Basic Manual Guest Logs</h3>
      <p className="mb-4 text-slate-gray text-xs sm:text-sm font-semibold">
        Many old-fashioned student accommodations rely on manual paper logbooks at the gate, which are rarely monitored. Unsupervised gates and a lack of active security personnel make properties vulnerable. Always verify that security features are digital and actively managed.
      </p>

      <p className="mb-4">
        At Unitas Home, we prioritize resident safety. Our facility operates a modern, secure biometric fingerprint keyless entry system that ensures only authorized residents can access the residential floors. In addition, professional security guards patrol the main gate and perimeter 24/7, keeping digital records of all visitors.
      </p>
    </div>

    {/* Section 2 */}
    <div>
      <h2 id="parent-hygiene" className="font-display font-bold text-xl sm:text-2xl text-charcoal mb-4 tracking-tight">
        2. Kitchen Cleanliness: Evaluating Sourcing, Hygiene, and Fresh Food Sourcing
      </h2>
      <p className="mb-4">
        Nutrition is essential for your child's physical health and academic energy. Consuming low-quality, greasy food leads to lethary, low immunity, and digestive illness. This makes evaluating kitchen hygiene and food quality a crucial part of your visit.
      </p>

      {/* Supporting Image 2 */}
      <div className="my-6">
        <img 
          src="https://images.unsplash.com/photo-1556910103-1c02745aae4d?auto=format&fit=crop&w=800&q=80" 
          alt="Hygienic kitchen showing fresh food preparation and clean counters" 
          className="rounded-2xl w-full h-[280px] object-cover border border-border-light shadow-3xs"
          referrerPolicy="no-referrer"
        />
        <span className="block text-center text-xs text-slate-gray font-medium mt-2">
          An on-site kitchen managed with high hygiene standards protects student health.
        </span>
      </div>

      <p className="mb-4">
        At Unitas Home, our kitchen team prepares three nutritious, home-style vegetarian meals every single day (Breakfast, Lunch, and Dinner). We partner with premium local distributors to secure organic ingredients, heart-healthy oils, and a rich, rotating menu full of balanced proteins (paneer, curd, fresh lentils, green vegetables).
      </p>

      {/* Warning Box */}
      <div className="bg-amber-50 border border-amber-200 p-5 rounded-2xl my-6 flex items-start space-x-3">
        <span className="text-xl">⚠️</span>
        <div>
          <h4 className="font-display font-bold text-amber-900 text-sm mb-1">Parent's Meal Tip: Ask for a Kitchen Tour</h4>
          <p className="text-amber-800 text-xs font-medium leading-relaxed">
            During your tour, request to see the food storage containers and check the brand of cooking oil being used. If a facility hesitates to show you their kitchen, it is a clear warning sign of poor hygiene standards.
          </p>
        </div>
      </div>
    </div>

    {/* Section 3 */}
    <div>
      <h2 id="parent-emergency" className="font-display font-bold text-xl sm:text-2xl text-charcoal mb-4 tracking-tight">
        3. Medical Emergency Support: Protocols and Professional Warden Care
      </h2>
      <p className="mb-4">
        Knowing your child has access to support in a medical emergency provides immense peace of mind. A reliable student accommodation must have a clear medical protocol and an experienced on-site warden who can assist 24/7.
      </p>

      {/* Supporting Image 3 */}
      <div className="my-6">
        <img 
          src="https://images.unsplash.com/photo-1524758631624-e2822e304c36?q=80&w=800&auto=format&fit=crop" 
          alt="On-site office and supportive resident warden lobby" 
          className="rounded-2xl w-full h-[280px] object-cover border border-border-light shadow-3xs"
          referrerPolicy="no-referrer"
        />
        <span className="block text-center text-xs text-slate-gray font-medium mt-2">
          Having a supportive, experienced resident warden on-site ensures professional emergency care.
        </span>
      </div>

      <p className="mb-4">
        Unitas Home is strategically located in Patel Nagar, just a 2-minute walk from the renowned <a href="#location" className="text-[#2D6A4F] font-bold hover:underline">Mahant Indresh Hospital</a>. If a resident falls ill, our warden assists them immediately, coordinates professional treatment, and informs parents, ensuring timely care.
      </p>

      <h3 className="font-display font-bold text-base sm:text-lg text-charcoal mb-2">💡 Local Insights: The Value of Location Safety</h3>
      <p className="mb-4">
        "Patel Nagar is a central, highly accessible area in Dehradun. Unitas Home is located directly on the main Patel Nagar road, which is well-lit and active throughout the evening. This eliminates the safety concerns of narrow, dark side lanes and makes public transport instantly accessible."
      </p>

      {/* Checklist Component */}
      <div className="border border-border-light bg-white rounded-2xl p-6 my-6">
        <h4 className="font-display font-extrabold text-charcoal text-sm uppercase tracking-wide mb-4">
          📋 Parent's 6-Point Safety & Hygiene Inspection Checklist
        </h4>
        <ul className="space-y-3">
          <li className="flex items-center space-x-2.5 text-xs sm:text-sm text-slate-gray font-semibold">
            <span className="text-[#2D6A4F]">✔</span>
            <span>Are security cameras actively monitoring corridors, staircases, and exits?</span>
          </li>
          <li className="flex items-center space-x-2.5 text-xs sm:text-sm text-slate-gray font-semibold">
            <span className="text-[#2D6A4F]">✔</span>
            <span>Does the property use secure biometric access, or basic manual locks?</span>
          </li>
          <li className="flex items-center space-x-2.5 text-xs sm:text-sm text-slate-gray font-semibold">
            <span className="text-[#2D6A4F]">✔</span>
            <span>Is there an experienced resident warden living on the property full-time?</span>
          </li>
          <li className="flex items-center space-x-2.5 text-xs sm:text-sm text-slate-gray font-semibold">
            <span className="text-[#2D6A4F]">✔</span>
            <span>Is the kitchen on-site and managed with professional cleanliness standards?</span>
          </li>
          <li className="flex items-center space-x-2.5 text-xs sm:text-sm text-slate-gray font-semibold">
            <span className="text-[#2D6A4F]">✔</span>
            <span>Are there clean, multi-stage RO water purification systems installed?</span>
          </li>
          <li className="flex items-center space-x-2.5 text-xs sm:text-sm text-slate-gray font-semibold">
            <span className="text-[#2D6A4F]">✔</span>
            <span>Is the property located on a safe, well-lit main road with nearby medical access?</span>
          </li>
        </ul>
      </div>
    </div>

    {/* Summary and Final recommendation */}
    <div className="pt-6 border-t border-gray-100">
      <h3 className="font-display font-bold text-lg text-charcoal mb-2">Summary & Final Recommendation</h3>
      <p className="text-slate-gray font-semibold text-xs sm:text-sm">
        Renting student housing is a major decision that directly affects your child's health and grades. By verifying safety systems, checking kitchen hygiene, and ensuring on-site support, you can make an informed choice. Unitas Home is designed to offer a safe, warm, and professional environment that feels like a home away from home.
      </p>
    </div>
  </div>
);
