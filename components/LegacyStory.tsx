import React from 'react';

interface LegacyStoryProps {
  onOpenSheet: (sheetNum: number) => void;
}

export default function LegacyStory({ onOpenSheet }: LegacyStoryProps) {
  return (
    <section id="legacy" className="py-12 sm:py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          <div>
            <div className="inline-flex items-center gap-1.5 text-xs font-bold tracking-widest uppercase text-[#9a7536] mb-2">
              <span>♦</span>
              <span>Heritage & Sourcing</span>
              <span>♦</span>
            </div>
            
            <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-bold text-[#04130f] leading-snug mb-2">
              Rooted in Tradition, Pure in Every Bite
            </h2>

            <p className="text-xs sm:text-sm text-[#5e6b66] mb-5">
              Pure desi ghee creations, whole stone-ground spices, and artisanal dairy. Jain preparations available on request.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-6">
              <div className="bg-[#faf7f0] p-3 rounded-xl border border-[#c9a35e]/30 text-center sm:text-left">
                <div className="text-xl mb-1">🧈</div>
                <h5 className="font-bold text-[#0b3127] text-xs">Pure Desi Ghee</h5>
                <p className="text-[10px] text-[#5e6b66]">Fresh malai paneer & whole spices.</p>
              </div>

              <div className="bg-[#faf7f0] p-3 rounded-xl border border-[#c9a35e]/30 text-center sm:text-left">
                <div className="text-xl mb-1">🥘</div>
                <h5 className="font-bold text-[#0b3127] text-xs">4 PM Chaat Bazaar</h5>
                <p className="text-[10px] text-[#5e6b66]">Raj Kachori, Pani Puri & Pav Bhaji.</p>
              </div>

              <div className="bg-[#faf7f0] p-3 rounded-xl border border-[#c9a35e]/30 text-center sm:text-left">
                <div className="text-xl mb-1">🏛️</div>
                <h5 className="font-bold text-[#0b3127] text-xs">Banquets & Halls</h5>
                <p className="text-[10px] text-[#5e6b66]">AC dining & outdoor catering (500+).</p>
              </div>
            </div>
          </div>

          <div className="relative">
            <div
              onClick={() => onOpenSheet(6)}
              className="rounded-2xl overflow-hidden border border-[#c9a35e]/40 shadow-lg bg-[#071f18] h-64 sm:h-80 cursor-pointer group relative"
              title="Tandoori Starters"
            >
              <img
                src="/6.png"
                alt="Gokul Royal Tandoor Starters"
                className="w-[200%] max-w-none h-full object-cover object-left transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent pointer-events-none" />
              <div className="absolute bottom-3 left-3 right-3 bg-[#071f18]/90 backdrop-blur-md border border-[#c9a35e] rounded-xl p-3 text-white">
                <span className="text-[9px] uppercase tracking-wider text-[#e5c98d] font-bold">Clay Tandoor</span>
                <h4 className="font-serif text-xs sm:text-sm font-bold text-white">
                  Chargrilled Hara Bhara & Soya Malai Chaap
                </h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
