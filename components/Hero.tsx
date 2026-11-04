'use client';

import React from 'react';
import { ArrowRight, MessageCircle, Sparkles, Zap, ShieldCheck } from 'lucide-react';

interface HeroProps {
  onOpenSheet: (sheetNum: number) => void;
  onAddItem: (itemId: number) => void;
}

export default function Hero({ onOpenSheet, onAddItem }: HeroProps) {
  return (
    <section className="relative bg-gradient-to-br from-[#03110d] via-[#07221b] to-[#0d3b2f] text-white pt-8 pb-14 sm:py-16 lg:py-20 border-b-2 border-[#c9a35e]/30 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(201,163,94,0.12)_0%,transparent_50%)] pointer-events-none" />
      <div className="absolute inset-0 opacity-15 bg-[radial-gradient(#c9a35e_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
        <div className="lg:col-span-7 flex flex-col items-center lg:items-start text-center lg:text-left">
          
          <div className="inline-flex items-center gap-2 bg-[#c9a35e]/15 border border-[#c9a35e]/40 px-3.5 py-1 rounded-full text-[11px] sm:text-xs font-semibold text-[#e5c98d] mb-3 shadow-[0_0_15px_rgba(201,163,94,0.15)]">
            <span className="w-2 h-2 rounded-full bg-[#2ecc71] animate-beacon" />
            <span>Pure Vegetarian Sanctuary • Agartala</span>
          </div>

          <h1 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white mb-2 leading-[1.15]">
            Royal Vegetarian <span className="gold-text">Grandeur</span>
          </h1>

          <p className="text-xs sm:text-sm text-emerald-100/80 max-w-md mb-5 leading-normal">
            151+ Pure Desi Ghee Delicacies • Live Clay Tandoor • Agartala's Iconic 4 PM Chaat Bazaar
          </p>

          <div className="flex flex-wrap items-center justify-center lg:justify-start gap-2 mb-6 text-[11px] font-semibold">
            <div className="inline-flex items-center gap-1.5 bg-[#0b3127]/80 border border-[#c9a35e]/30 px-2.5 py-1 rounded-full text-[#e5c98d]">
              <Zap className="w-3 h-3 text-[#c9a35e]" />
              <span>20-30 Min Delivery</span>
            </div>
            <div className="inline-flex items-center gap-1.5 bg-[#0b3127]/80 border border-[#c9a35e]/30 px-2.5 py-1 rounded-full text-[#e5c98d]">
              <ShieldCheck className="w-3 h-3 text-[#c9a35e]" />
              <span>100% Desi Ghee</span>
            </div>
            <div className="inline-flex items-center gap-1.5 bg-[#0b3127]/80 border border-[#c9a35e]/30 px-2.5 py-1 rounded-full text-[#e5c98d]">
              <Sparkles className="w-3 h-3 text-[#c9a35e]" />
              <span>ISO & FSSAI</span>
            </div>
          </div>

          <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3 w-full sm:w-auto">
            <a
              href="#menu"
              className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-2 bg-gradient-to-r from-[#e5c98d] to-[#c9a35e] hover:brightness-110 text-[#04130f] font-bold px-6 py-3.5 rounded-full shadow-gold transition-all text-xs sm:text-sm uppercase tracking-wider"
            >
              <span>Explore 151 Dishes</span>
              <ArrowRight className="w-4 h-4" />
            </a>

            <a
              href="https://wa.me/918732024422?text=Hello%20Gokul%20Veg%20Restaurant,%20I%20would%20like%20to%20order%20delicious%20food."
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-2 bg-[#25d366] hover:bg-[#20ba59] text-white px-6 py-3.5 rounded-full font-semibold shadow-lg transition-all text-xs sm:text-sm"
            >
              <MessageCircle className="w-4 h-4" />
              <span>WhatsApp Order</span>
            </a>
          </div>
        </div>

        <div className="lg:col-span-5 w-full max-w-md mx-auto lg:max-w-none">
          <div className="bg-gradient-to-br from-[#103d31]/80 to-[#071f18]/95 border border-[#c9a35e]/40 rounded-2xl p-4 sm:p-5 shadow-2xl relative overflow-hidden group">
            <div className="flex items-center justify-between border-b border-[#c9a35e]/20 pb-3 mb-3">
              <div>
                <span className="text-[10px] sm:text-[11px] font-bold uppercase tracking-widest text-[#e5c98d]">
                  Chef's Signature
                </span>
                <h3 className="font-serif text-lg sm:text-xl font-bold text-white">Shaam Savera</h3>
              </div>
              <span className="bg-[#04130f] text-[#e5c98d] border border-[#c9a35e] text-xs font-bold px-3 py-1 rounded-full">
                ₹399
              </span>
            </div>

            <div
              onClick={() => onOpenSheet(9)}
              className="relative h-56 sm:h-64 w-full rounded-xl overflow-hidden border border-[#c9a35e]/30 cursor-pointer bg-black"
              title="Click to view full image in high resolution"
            >
              <img
                src="/9.png"
                alt="Chef's Special Shaam Savera"
                className="w-[200%] max-w-none h-full object-cover object-left transition-transform duration-700 group-hover:scale-105"
              />
            </div>

            <div className="pt-3">
              <p className="text-xs text-emerald-100/70 mb-3 line-clamp-2">
                Spinach dumplings stuffed with cottage cheese over velvety makhani and golden gravies.
              </p>
              <div className="flex items-center justify-between">
                <span className="font-serif text-xl sm:text-2xl font-bold text-[#e5c98d]">₹399/-</span>
                <button
                  onClick={() => onAddItem(112)}
                  className="bg-gradient-to-r from-[#e5c98d] to-[#c9a35e] text-[#04130f] font-bold text-xs px-4 py-2 rounded-full hover:brightness-110 transition-all uppercase tracking-wide"
                >
                  + Add to Plate
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
