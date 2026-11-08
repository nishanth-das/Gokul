'use client';

import React, { useState } from 'react';
import { Phone, ShoppingBag, Menu as MenuIcon, X } from 'lucide-react';

interface NavbarProps {
  cartCount: number;
  onOpenCart: () => void;
}

export default function Navbar({ cartCount, onOpenCart }: NavbarProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 bg-[#071f18]/95 backdrop-blur-md border-b border-[#c9a35e]/25">
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 h-16 sm:h-20 flex items-center justify-between">
        <a href="#" className="flex items-center gap-2 group">
          <img
            src="/gokul-logo.png"
            alt="Gokul Veg Restaurant"
            className="h-9 sm:h-11 w-auto object-contain transition-transform group-hover:scale-105 drop-shadow-[0_0_8px_rgba(255,255,255,0.35)]"
          />
          <div className="flex flex-col">
            <span className="text-[10px] sm:text-[11px] tracking-[0.16em] uppercase text-[#e5c98d] font-bold leading-tight">
              Gokul Veg
            </span>
            <span className="text-[8px] sm:text-[9px] tracking-[0.14em] uppercase text-emerald-200/70 font-medium">
              Agartala
            </span>
          </div>
        </a>

        <nav className="hidden lg:flex items-center gap-7 text-sm font-medium text-emerald-100/80">
          <a href="#menu" className="hover:text-white transition-colors">Menu (151)</a>
          <a href="#signatures" className="hover:text-white transition-colors">Signatures</a>
          <a href="#legacy" className="hover:text-white transition-colors">About</a>
          <a href="#menu-sheets" className="hover:text-white transition-colors">Menu Book</a>
          <a href="#banquets" className="hover:text-white transition-colors">Banquets</a>
          <a href="#location" className="hover:text-white transition-colors">Contact</a>
        </nav>

        <div className="flex items-center gap-2 sm:gap-3">
          <a
            href="tel:+918732024422"
            className="hidden sm:inline-flex items-center gap-1.5 bg-[#c9a35e]/15 hover:bg-[#c9a35e]/25 text-[#e5c98d] border border-[#c9a35e]/30 px-3 py-1.5 sm:px-3.5 sm:py-2 rounded-full font-bold text-xs transition-colors"
          >
            <Phone className="w-3.5 h-3.5 text-[#c9a35e]" />
            <span>+91 8732-024422</span>
          </a>

          <button
            onClick={onOpenCart}
            className="relative inline-flex items-center gap-1.5 bg-gradient-to-r from-[#e5c98d] to-[#c9a35e] hover:brightness-110 text-[#04130f] px-3.5 py-1.5 sm:px-4 sm:py-2 rounded-full font-bold text-xs sm:text-sm shadow-gold transition-all"
          >
            <ShoppingBag className="w-4 h-4" />
            <span>Plate</span>
            {cartCount > 0 && (
              <span className="w-5 h-5 rounded-full bg-red-600 text-white text-[11px] font-bold flex items-center justify-center animate-bounce">
                {cartCount}
              </span>
            )}
          </button>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 text-white hover:text-[#c9a35e] transition-colors"
            aria-label="Toggle Navigation"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <MenuIcon className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#071f18] border-b border-[#c9a35e]/30 px-6 py-5 flex flex-col gap-3 text-sm font-medium text-emerald-100">
          <a href="#menu" onClick={() => setMobileMenuOpen(false)} className="hover:text-[#c9a35e] py-1 border-b border-emerald-900/60">Master Menu (151 Items)</a>
          <a href="#signatures" onClick={() => setMobileMenuOpen(false)} className="hover:text-[#c9a35e] py-1 border-b border-emerald-900/60">Chef's Signatures</a>
          <a href="#menu-sheets" onClick={() => setMobileMenuOpen(false)} className="hover:text-[#c9a35e] py-1 border-b border-emerald-900/60">Official Menu Book (11 Sheets)</a>
          <a href="#banquets" onClick={() => setMobileMenuOpen(false)} className="hover:text-[#c9a35e] py-1 border-b border-emerald-900/60">Banquets & Catering</a>
          <a href="#location" onClick={() => setMobileMenuOpen(false)} className="hover:text-[#c9a35e] py-1 border-b border-emerald-900/60">Hours & Directions</a>
          <a
            href="tel:+918732024422"
            className="w-full mt-2 inline-flex items-center justify-center gap-2 bg-[#c9a35e]/20 text-[#e5c98d] border border-[#c9a35e]/40 font-bold py-2.5 rounded-full text-center text-xs uppercase tracking-wider"
          >
            <Phone className="w-4 h-4" />
            <span>Call +91 8732-024422</span>
          </a>
        </div>
      )}
    </header>
  );
}
