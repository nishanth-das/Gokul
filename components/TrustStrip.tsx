import React from 'react';
import { ShieldCheck, Award, Clock, Sparkles } from 'lucide-react';

export default function TrustStrip() {
  const items = [
    { icon: <Award className="w-5 h-5 text-[#9a7536]" />, title: 'ISO 9001:2015', sub: 'Audited Hygiene' },
    { icon: <ShieldCheck className="w-5 h-5 text-[#9a7536]" />, title: 'FSSAI Certified', sub: 'Lic: 22526051001035' },
    { icon: <Clock className="w-5 h-5 text-[#9a7536]" />, title: '20-30 Min Delivery', sub: 'Across Agartala' },
    { icon: <Sparkles className="w-5 h-5 text-[#9a7536]" />, title: 'Pure Desi Ghee', sub: 'Fresh Dairy Sourcing' },
  ];

  return (
    <div className="bg-white border-b border-[#c9a35e]/20 py-4 sm:py-6 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-6">
          {items.map((it, idx) => (
            <div key={idx} className="flex items-center gap-2.5 sm:gap-3 p-1.5 sm:p-2">
              <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-[#c9a35e]/15 border border-[#c9a35e]/30 flex items-center justify-center shrink-0">
                {it.icon}
              </div>
              <div>
                <h5 className="font-bold text-xs sm:text-sm text-[#161e1b] leading-tight">{it.title}</h5>
                <span className="text-[10px] sm:text-xs text-[#5e6b66]">{it.sub}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
