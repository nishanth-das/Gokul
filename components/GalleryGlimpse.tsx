'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { ArrowRight, Expand } from 'lucide-react';
import { GALLERY_ITEMS } from '@/data/gallery-data';
import GalleryLightbox from '@/components/GalleryLightbox';

export default function GalleryGlimpse() {
  const [activeId, setActiveId] = useState<number | null>(null);
  const glimpses = GALLERY_ITEMS.filter((item) => item.featuredOnHome).slice(0, 6);

  return (
    <section
      id="gallery-glimpse"
      className="py-12 sm:py-16 bg-gradient-to-b from-[#071f18] to-[#04130f] text-white border-t-2 border-[#c9a35e]/30"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
          <div>
            <div className="inline-flex items-center gap-1.5 text-xs font-bold tracking-widest uppercase text-[#e5c98d] mb-1">
              <span>♦</span>
              <span>Gallery</span>
              <span>♦</span>
            </div>
            <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-bold text-white">
              Photo Gallery
            </h2>
          </div>

          <Link
            href="/gallery/"
            className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-[#e5c98d] to-[#c9a35e] hover:brightness-110 text-[#04130f] font-bold text-xs uppercase tracking-wider px-5 py-3 rounded-full shadow-gold transition-all shrink-0 self-start sm:self-auto"
          >
            <span>View Full Gallery ({GALLERY_ITEMS.length})</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-5">
          {glimpses.map((item) => (
            <button
              key={item.id}
              type="button"
              onClick={() => setActiveId(item.id)}
              className="group relative rounded-2xl overflow-hidden border border-[#c9a35e]/35 hover:border-[#c9a35e] bg-[#04130f] shadow-lg transition-all hover:-translate-y-1 focus:outline-none focus:ring-2 focus:ring-[#c9a35e]"
              aria-label={`View gallery photo ${item.id}`}
            >
              <div className="relative aspect-[4/3] w-full overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <span className="absolute top-3 right-3 w-8 h-8 rounded-full bg-black/50 backdrop-blur-sm border border-[#c9a35e]/40 text-[#e5c98d] flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <Expand className="w-3.5 h-3.5" />
                </span>
              </div>
            </button>
          ))}
        </div>
      </div>

      <GalleryLightbox
        items={glimpses}
        activeId={activeId}
        onClose={() => setActiveId(null)}
        onSelect={(id) => setActiveId(id)}
      />
    </section>
  );
}
