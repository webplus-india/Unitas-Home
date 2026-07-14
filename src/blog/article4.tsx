import React from 'react';

export const article4Content = (
  <div className="space-y-8 font-sans text-charcoal/90 leading-relaxed text-sm sm:text-base">
    {/* Executive Summary */}
    <div className="bg-[#0F8B8D]/5 border-l-4 border-[#0F8B8D] p-6 rounded-r-2xl shadow-3xs mb-8">
      <h3 className="font-display font-extrabold text-[#0F8B8D] text-base mb-2">🎓 Executive Summary</h3>
      <p className="text-slate-gray font-medium text-xs sm:text-sm">
        Relocating to college for your freshman year is an incredible milestone, but adjusting to a shared room, managing your laundry, adapting to mess meals, and structuring study blocks can be overwhelming. This guide compiles expert, practical tips to help you adapt seamlessly, establish roommate harmony, organize your study desk, and conquer homesickness in Dehradun.
      </p>
    </div>

    {/* Section 1 */}
    <div>
      <h2 id="roommate-harmony" className="font-display font-bold text-xl sm:text-2xl text-charcoal mb-4 tracking-tight">
        1. Roommate Harmony: The Foundation of Your First-Year Well-Being
      </h2>
      <p className="mb-4">
        Sharing your private room with a roommate is a classic college experience, but it requires patience, direct communication, and respect for boundaries. Misunderstandings regarding study lamp hours, alarm clocks, cleanliness, and guest protocols can create high daily stress.
      </p>

      {/* Supporting Image 1 */}
      <div className="my-6">
        <img 
          src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=800&auto=format&fit=crop" 
          alt="Group of students studying and chatting in a lounge representing community" 
          className="rounded-2xl w-full h-[280px] object-cover border border-border-light shadow-3xs"
          referrerPolicy="no-referrer"
        />
        <span className="block text-center text-xs text-slate-gray font-medium mt-2">
          Building proactive boundaries with roommates prevents future domestic disagreements.
        </span>
      </div>

      <h3 className="font-display font-bold text-base sm:text-lg text-charcoal mb-2">🚨 Common Roommate Mistakes</h3>
      <p className="mb-4 text-slate-gray text-xs sm:text-sm font-semibold">
        The most common freshman mistake is avoiding open discussions about daily schedules. Assuming your roommate has the exact same bedtime, study preferences, or cleanliness standard leads to passive-aggressive tension. Discuss boundaries directly on day one.
      </p>

      <p className="mb-4">
        At Unitas Home, we host a diverse, warm community of students from major institutions such as SGRR University and Graphic Era. Our experienced resident warden acts as a helpful mediator, ensuring that room assignments are compatible and guiding residents to coordinate boundaries constructively.
      </p>
    </div>

    {/* Section 2 */}
    <div>
      <h2 id="organizing-space" className="font-display font-bold text-xl sm:text-2xl text-charcoal mb-4 tracking-tight">
        2. Workstation Setup & Room Organization
      </h2>
      <p className="mb-4">
        A cluttered room leads to a cluttered mind. To keep your cognitive focus sharp, separate your workspace from your sleeping space. Avoid reading, highlighting, or working with your laptop while sitting on your bed, as this practice leads to fatigue and spinal strain.
      </p>

      {/* Supporting Image 2 */}
      <div className="my-6">
        <img 
          src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=800&auto=format&fit=crop" 
          alt="Organized study desk with laptop and notebook" 
          className="rounded-2xl w-full h-[280px] object-cover border border-border-light shadow-3xs"
          referrerPolicy="no-referrer"
        />
        <span className="block text-center text-xs text-slate-gray font-medium mt-2">
          An organized personal workstation separate from your sleeping area maximizes focus.
        </span>
      </div>

      <p className="mb-4">
        At Unitas Home, every student room features custom-designed wooden workstations with high-back ergonomic mesh chairs, multi-plug power hubs, and personal reading lights. No matter how late your study sessions run, you can learn comfortably without disturbing your roommate's sleep.
      </p>

      {/* Practical Tips Callout */}
      <div className="bg-emerald-50/60 border border-emerald-200 p-5 rounded-2xl my-6 flex items-start space-x-3">
        <span className="text-xl">💡</span>
        <div>
          <h4 className="font-display font-bold text-emerald-900 text-sm mb-1">Practical Tip: The 15-Minute Daily Habit</h4>
          <p className="text-emerald-800 text-xs font-medium leading-relaxed">
            Spend the final 15 minutes of your evening returning books to shelves, wiping down your study desk, and packing your college bag. Waking up to an organized room reduces early-morning anxiety and starts your day positively.
          </p>
        </div>
      </div>
    </div>

    {/* Section 3 */}
    <div>
      <h2 id="homesickness" className="font-display font-bold text-xl sm:text-2xl text-charcoal mb-4 tracking-tight">
        3. Overcoming Homesickness & Building Your Dehradun Network
      </h2>
      <p className="mb-4">
        Feeling homesick during your first few months is entirely normal. Transitioning from parent-supervised home comfort to a new academic environment is a major challenge. The best way to overcome this is by engaging in a healthy social circle and establishing structured routines.
      </p>

      {/* Supporting Image 3 */}
      <div className="my-6">
        <img 
          src="https://images.unsplash.com/photo-1524758631624-e2822e304c36?q=80&w=800&auto=format&fit=crop" 
          alt="Premium student lounge where community gathers" 
          className="rounded-2xl w-full h-[280px] object-cover border border-border-light shadow-3xs"
          referrerPolicy="no-referrer"
        />
        <span className="block text-center text-xs text-slate-gray font-medium mt-2">
          A welcoming lobby and dynamic common lounges make it easy to connect with peers.
        </span>
      </div>

      <h3 className="font-display font-bold text-base sm:text-lg text-charcoal mb-2">💡 Local Insights: Navigating Dehradun Weather</h3>
      <p className="mb-4">
        "Dehradun has unique local weather: extreme monsoon rains from July to September, and crisp winters from November to January. Pack quality waterproof gear for monsoons to avoid missing classes, and premium woolens for chilly winter evenings. Local markets like Paltan Bazaar and Rajpur Road are perfect for shopping for study essentials."
      </p>

      {/* Checklist Component */}
      <div className="border border-border-light bg-white rounded-2xl p-6 my-6">
        <h4 className="font-display font-extrabold text-charcoal text-sm uppercase tracking-wide mb-4">
          📋 Freshman Essential Packing & Setup Checklist
        </h4>
        <ul className="space-y-3">
          <li className="flex items-center space-x-2.5 text-xs sm:text-sm text-slate-gray font-semibold">
            <span className="text-[#0F8B8D]">✔</span>
            <span>Study Supplies: Heavy-duty extension cord, warm desk lamp, damage-free wall sticky notes.</span>
          </li>
          <li className="flex items-center space-x-2.5 text-xs sm:text-sm text-slate-gray font-semibold">
            <span className="text-[#0F8B8D]">✔</span>
            <span>Waterproof Gear: Windbreaker jacket, high-end umbrella, waterproof laptop backpack sleeve.</span>
          </li>
          <li className="flex items-center space-x-2.5 text-xs sm:text-sm text-slate-gray font-semibold">
            <span className="text-[#0F8B8D]">✔</span>
            <span>Room Hygiene: Quick-dry microfiber towels, multi-compartment laundry hamper bag.</span>
          </li>
          <li className="flex items-center space-x-2.5 text-xs sm:text-sm text-slate-gray font-semibold">
            <span className="text-[#0F8B8D]">✔</span>
            <span>Digital Setup: High-end noise-canceling headphones for quiet study in shared environments.</span>
          </li>
        </ul>
      </div>
    </div>

    {/* Summary and Final recommendation */}
    <div className="pt-6 border-t border-gray-100">
      <h3 className="font-display font-bold text-lg text-charcoal mb-2">Summary & Final Recommendation</h3>
      <p className="text-slate-gray font-semibold text-xs sm:text-sm">
        Freshman year passes quickly. By establishing transparent boundaries with roommates, maintaining an organized workstation, and adopting helpful routines, you set yourself up for academic success. Unitas Home is built to be your reliable home away from home—taking care of laundry, meals, and maintenance so you can focus entirely on your future.
      </p>
    </div>
  </div>
);
