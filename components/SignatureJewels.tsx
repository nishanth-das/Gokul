'use client';

import React from 'react';

interface SignatureJewelsProps {
  onOpenSheet: (sheetNum: number) => void;
  onAddItem: (itemId: number) => void;
}

export default function SignatureJewels({ onOpenSheet, onAddItem }: SignatureJewelsProps) {
  const signatures = [
    {
      id: 22,
      sheet: 2,
      badge: "SOUTH INDIAN HIT",
      title: "Masala Dosa & Sambar",
      price: 120,
      image: "/bestseller-dosa.webp",
      desc: "Golden fermented crepe rolled over spiced potato mash, served with piping hot vegetable sambar & fresh chutneys.",
    },
    {
      id: 55,
      sheet: 5,
      badge: "CROWD FAVOURITE",
      title: "Amritsari Chole Bhature",
      price: 120,
      image: "/bestseller-chole.webp",
      desc: "Two golden puffed bhature paired with slow-simmered spiced Amritsari chickpea gravy, pickled chillies and onions.",
    },
    {
      id: 30,
      sheet: 3,
      badge: "ROYAL PANEER",
      title: "Paneer Butter Masala",
      price: 299,
      image: "/bestseller-paneer.webp",
      desc: "Fresh cottage cheese cubes simmered in a velvety, buttery spiced tomato-cashew gravy with gentle whole spices.",
    },
    {
      id: 67,
      sheet: 5,
      badge: "DUM SPECIAL",
      title: "Hyderabadi Dum Biryani",
      price: 320,
      image: "/bestseller-biryani.webp",
      desc: "Aged basmati rice layered with garden vegetables, fresh mint, and saffron in authentic dum style.",
    },
    {
      id: 69,
      sheet: 6,
      badge: "CLAY TANDOOR",
      title: "Tandoori Aloo Tikka",
      price: 249,
      image: "/bestseller-aloo.webp",
      desc: "Scooped potatoes delicately seasoned with chatpata spices, chargrilled to smoky tenderness in traditional clay tandoor.",
    },
    {
      id: 54,
      sheet: 5,
      badge: "HERITAGE ICON",
      title: "Traditional Litti Chokha",
      price: 60,
      image: "/bestseller-litti.webp",
      desc: "Traditional baked wheat dumplings stuffed with spiced sattu, served with rustic roasted brinjal and tomato chokha.",
    },
  ];

  return (
    <section id="signatures" className="py-12 sm:py-16 bg-[#faf7f0]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-xl mx-auto mb-8 sm:mb-12">
          <div className="inline-flex items-center gap-1.5 text-xs font-bold tracking-widest uppercase text-[#9a7536] mb-1">
            <span>♦</span>
            <span>Bestselling Delicacies</span>
            <span>♦</span>
          </div>
          <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-bold text-[#04130f]">
            Agartala's Iconic Bestsellers
          </h2>
          <div className="w-12 h-0.5 bg-[#c9a35e] mx-auto mt-2" />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
          {signatures.map((sig) => (
            <div
              key={sig.id}
              className="bg-white rounded-2xl border border-[#c9a35e]/30 shadow-sm hover:shadow-md transition-all flex flex-col overflow-hidden group"
            >
              <div
                onClick={() => onOpenSheet(sig.sheet)}
                className="relative h-48 sm:h-52 bg-[#071f18] overflow-hidden cursor-pointer"
                title="Click to view menu sheet"
              >
                <img
                  src={sig.image}
                  alt={sig.title}
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <span className="absolute top-3 left-3 bg-[#071f18]/90 backdrop-blur-sm text-[#e5c98d] border border-[#c9a35e]/40 text-[10px] font-bold px-2.5 py-0.5 rounded-full uppercase tracking-wider">
                  {sig.badge}
                </span>
                <span className="absolute bottom-2 right-2 bg-black/60 backdrop-blur-xs text-white/80 text-[10px] px-2 py-0.5 rounded font-mono">
                  Sheet {sig.sheet}
                </span>
              </div>

              <div className="p-4 sm:p-5 flex flex-col flex-grow">
                <h4 className="font-serif text-base sm:text-lg font-bold text-[#04130f] mb-1.5">{sig.title}</h4>
                <p className="text-xs text-[#5e6b66] leading-relaxed mb-4 flex-grow line-clamp-2">
                  {sig.desc}
                </p>

                <div className="flex items-center justify-between border-t border-gray-100 pt-3 mt-auto">
                  <span className="text-lg font-bold text-[#0b3127]">₹{sig.price}/-</span>
                  <button
                    onClick={() => onAddItem(sig.id)}
                    className="bg-[#0b3127] hover:bg-[#c9a35e] text-white hover:text-[#04130f] text-xs font-bold px-4 py-2 rounded-full transition-colors uppercase tracking-wider"
                  >
                    + Add
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
