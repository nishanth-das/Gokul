'use client';

import React from 'react';
import { RESTAURANT_CONFIG } from '@/data/menu-data';

interface MenuBookGalleryProps {
  onOpenSheet: (sheetNum: number) => void;
}

export default function MenuBookGallery({ onOpenSheet }: MenuBookGalleryProps) {
  return (
    <section id="menu-sheets" className="py-12 sm:py-16 bg-gradient-to-b from-[#071f18] to-[#04130f] text-white border-b-2 border-[#c9a35e]/30">
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
        <div className="text-center max-w-xl mx-auto mb-8 sm:mb-12">
          <div className="inline-flex items-center gap-1.5 text-xs font-bold tracking-widest uppercase text-[#e5c98d] mb-1">
            <span>♦</span>
            <span>Printed Menu Archives</span>
            <span>♦</span>
          </div>
          <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-bold text-white">
            Official Menu Book
          </h2>
          <div className="w-12 h-0.5 bg-[#c9a35e] mx-auto mt-2" />
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-5">
          {RESTAURANT_CONFIG.gallery.map((sheet) => (
            <div
              key={sheet.num}
              onClick={() => onOpenSheet(sheet.num)}
              className="bg-[#103d31]/40 border border-[#c9a35e]/30 hover:border-[#c9a35e] rounded-xl p-2 sm:p-3 cursor-pointer transition-all hover:-translate-y-1 hover:shadow-gold flex flex-col group"
            >
              <div className="h-32 sm:h-40 rounded-lg overflow-hidden bg-black mb-2 relative">
                <img
                  src={`/${sheet.num}.png`}
                  alt={sheet.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>

              <h5 className="font-serif text-xs sm:text-sm font-bold text-[#e5c98d] group-hover:text-white transition-colors truncate">
                {sheet.title}
              </h5>
              <p className="text-[10px] sm:text-xs text-emerald-100/60 leading-tight line-clamp-1 mt-0.5">
                {sheet.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
