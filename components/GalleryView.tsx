'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { ArrowLeft, Expand } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import GalleryLightbox from '@/components/GalleryLightbox';
import { GALLERY_ITEMS } from '@/data/gallery-data';

export default function GalleryView() {
  const [activeId, setActiveId] = useState<number | null>(null);

  return (
    <div className="min-h-screen bg-[#faf7f0] text-[#161e1b] flex flex-col">
      <Navbar />

      <section className="relative bg-gradient-to-br from-[#03110d] via-[#07221b] to-[#0d3b2f] text-white py-10 sm:py-14 border-b-2 border-[#c9a35e]/30 overflow-hidden">
        <div className="absolute inset-0 opacity-15 bg-[radial-gradient(#c9a35e_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Link
            href="/"
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#e5c98d] hover:text-white mb-3 transition-colors"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Back to Home</span>
          </Link>

          <h1 className="font-serif text-3xl sm:text-5xl font-bold text-white">
            Photo <span className="gold-text">Gallery</span>
          </h1>
        </div>
      </section>

      <section className="py-10 sm:py-14 flex-grow">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-5">
            {GALLERY_ITEMS.map((item) => (
              <button
                key={item.id}
                type="button"
                onClick={() => setActiveId(item.id)}
                className="group relative rounded-2xl overflow-hidden border border-[#c9a35e]/30 hover:border-[#c9a35e] bg-[#071f18] shadow-sm hover:shadow-lg transition-all focus:outline-none focus:ring-2 focus:ring-[#c9a35e]"
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
                  <span className="absolute top-3 right-3 w-8 h-8 rounded-full bg-black/55 backdrop-blur-sm border border-[#c9a35e]/40 text-[#e5c98d] flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <Expand className="w-3.5 h-3.5" />
                  </span>
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>

      <Footer />

      <GalleryLightbox
        items={GALLERY_ITEMS}
        activeId={activeId}
        onClose={() => setActiveId(null)}
        onSelect={(id) => setActiveId(id)}
      />
    </div>
  );
}
