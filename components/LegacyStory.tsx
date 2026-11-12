import React from 'react';
import { Quote, Flame, UtensilsCrossed, Building2 } from 'lucide-react';

interface LegacyStoryProps {
  onOpenSheet: (sheetNum: number) => void;
}

export default function LegacyStory({ onOpenSheet }: LegacyStoryProps) {
  return (
    <section
      id="legacy"
      className="relative py-14 sm:py-20 bg-cover bg-center md:bg-fixed border-b border-[#c9a35e]/30 overflow-hidden"
      style={{ backgroundImage: "url('/royal-feast-bg.webp')" }}
    >
      <div className="absolute inset-0 bg-gradient-to-r from-[#04130f]/90 via-[#04130f]/75 to-[#04130f]/80 pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10 sm:space-y-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          <div>
            <div className="inline-flex items-center gap-1.5 text-xs font-bold tracking-widest uppercase text-[#e5c98d] mb-2">
              <span>♦</span>
              <span>About Us • Heritage & Sourcing</span>
              <span>♦</span>
            </div>

            <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-bold text-white leading-snug mb-2">
              Rooted in Tradition, <span className="gold-text">Flavour in Every Bite</span>
            </h2>

            <p className="text-xs sm:text-sm text-emerald-100/85 mb-5 leading-relaxed">
              Artisanal desi ghee creations, fresh dairy, and stone-ground spices cooked with fresh garlic and onion. Custom Jain preparations available on request.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-2">
              <div className="bg-[#071f18]/80 backdrop-blur-md p-3.5 rounded-xl border border-[#c9a35e]/35 text-center sm:text-left shadow-lg">
                <Flame className="w-5 h-5 text-[#c9a35e] mb-1.5 mx-auto sm:mx-0" />
                <h5 className="font-bold text-[#e5c98d] text-xs">Garlic &amp; Onion Kitchen</h5>
                <p className="text-[10px] text-emerald-100/80">100% vegetarian, rich homestyle tadka.</p>
              </div>

              <div className="bg-[#071f18]/80 backdrop-blur-md p-3.5 rounded-xl border border-[#c9a35e]/35 text-center sm:text-left shadow-lg">
                <UtensilsCrossed className="w-5 h-5 text-[#c9a35e] mb-1.5 mx-auto sm:mx-0" />
                <h5 className="font-bold text-[#e5c98d] text-xs">4 PM Chaat Bazaar</h5>
                <p className="text-[10px] text-emerald-100/80">Raj Kachori, Pani Puri &amp; Pav Bhaji.</p>
              </div>

              <div className="bg-[#071f18]/80 backdrop-blur-md p-3.5 rounded-xl border border-[#c9a35e]/35 text-center sm:text-left shadow-lg">
                <Building2 className="w-5 h-5 text-[#c9a35e] mb-1.5 mx-auto sm:mx-0" />
                <h5 className="font-bold text-[#e5c98d] text-xs">Banquets &amp; Halls</h5>
                <p className="text-[10px] text-emerald-100/80">AC dining &amp; outdoor catering (500+).</p>
              </div>
            </div>
          </div>

          <div className="relative">
            <div
              onClick={() => onOpenSheet(6)}
              className="rounded-2xl overflow-hidden border border-[#c9a35e]/50 shadow-2xl bg-[#071f18] h-64 sm:h-80 cursor-pointer group relative"
              title="Tandoori Starters"
            >
              <img
                src="/6.webp"
                alt="Gokul Royal Tandoor Starters"
                loading="lazy"
                decoding="async"
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

        {/* Founder Spotlight */}
        <div className="bg-[#071f18]/85 backdrop-blur-md border border-[#c9a35e]/40 rounded-2xl p-6 sm:p-8 shadow-2xl flex flex-col md:flex-row items-center gap-6 sm:gap-8">
          <div className="relative shrink-0">
            <div className="w-28 h-28 sm:w-32 sm:h-32 rounded-full p-1 bg-gradient-to-br from-[#e5c98d] to-[#9a7536] shadow-gold">
              <img
                src="/founder-sanjeeb.webp"
                alt="Sanjeeb Sutradhar - Founder, Gokul Veg Restaurant"
                loading="lazy"
                decoding="async"
                className="w-full h-full rounded-full object-cover bg-[#04130f]"
              />
            </div>
          </div>

          <div className="text-center md:text-left flex-1">
            <div className="inline-flex items-center gap-1.5 text-[10px] sm:text-xs font-bold tracking-[0.18em] uppercase text-[#e5c98d] mb-2">
              <Quote className="w-3.5 h-3.5 text-[#c9a35e]" />
              <span>Founder&apos;s Note</span>
            </div>

            <blockquote className="font-serif italic text-sm sm:text-lg text-white leading-relaxed mb-3">
              &ldquo;Working with food has always been my deepest passion. Every recipe we craft and every plate we serve is made with honesty and care—bringing families in Agartala together over memorable vegetarian dining.&rdquo;
            </blockquote>

            <div className="flex flex-col sm:flex-row sm:items-center gap-0.5 sm:gap-2">
              <span className="font-serif text-sm sm:text-base font-bold text-[#e5c98d]">
                Sanjeeb Sutradhar
              </span>
              <span className="hidden sm:inline text-[#c9a35e]/50">•</span>
              <span className="text-xs text-emerald-100/75 font-medium">
                Founder, Gokul Veg Restaurant
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
