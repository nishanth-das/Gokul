'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Phone, ShoppingBag, Menu as MenuIcon, X } from 'lucide-react';

interface NavbarProps {
  cartCount?: number;
  onOpenCart?: () => void;
}

export default function Navbar({ cartCount = 0, onOpenCart }: NavbarProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 bg-[#071f18]/95 backdrop-blur-md border-b border-[#c9a35e]/25">
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 h-16 sm:h-20 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2.5 sm:gap-3 group">
          <img
            src="/gokul-logo.webp"
            alt="Gokul Veg Agartala"
            className="h-10 sm:h-12 w-auto object-contain transition-transform group-hover:scale-105 drop-shadow-[0_0_8px_rgba(255,255,255,0.35)]"
          />
          <span className="text-[11px] sm:text-xs tracking-[0.25em] uppercase text-[#e5c98d] font-semibold border-l border-[#c9a35e]/30 pl-2.5 sm:pl-3">
            Agartala
          </span>
        </Link>

        <nav className="hidden lg:flex items-center gap-5 xl:gap-7 text-sm font-medium text-emerald-100/80">
          <Link href="/" className="hover:text-white transition-colors">Home</Link>
          <Link href="/#menu" className="hover:text-white transition-colors">Menu (151)</Link>
          <Link href="/#signatures" className="hover:text-white transition-colors">Signatures</Link>
          <Link href="/#legacy" className="hover:text-white transition-colors">About</Link>
          <Link href="/gallery/" className="hover:text-white transition-colors">Gallery</Link>
          <Link href="/#banquets" className="hover:text-white transition-colors">Banquets</Link>
          <Link href="/#location" className="hover:text-white transition-colors">Contact</Link>
        </nav>

        <div className="flex items-center gap-2 sm:gap-3">
          <a
            href="tel:+918732024422"
            className="hidden sm:inline-flex items-center gap-1.5 bg-[#c9a35e]/15 hover:bg-[#c9a35e]/25 text-[#e5c98d] border border-[#c9a35e]/30 px-3 py-1.5 sm:px-3.5 sm:py-2 rounded-full font-bold text-xs transition-colors"
          >
            <Phone className="w-3.5 h-3.5 text-[#c9a35e]" />
            <span>+91 8732-024422</span>
          </a>

          {onOpenCart ? (
            <button
              onClick={onOpenCart}
              className="relative inline-flex items-center gap-1.5 bg-gradient-to-r from-[#e5c98d] to-[#c9a35e] hover:brightness-110 text-[#04130f] px-3.5 py-1.5 sm:px-4 sm:py-2 rounded-full font-bold text-xs sm:text-sm shadow-gold transition-all"
            >
              <ShoppingBag className="w-4 h-4" />
              <span>Cart</span>
              {cartCount > 0 && (
                <span className="w-5 h-5 rounded-full bg-red-600 text-white text-[11px] font-bold flex items-center justify-center animate-bounce">
                  {cartCount}
                </span>
              )}
            </button>
          ) : (
            <Link
              href="/#menu"
              className="relative inline-flex items-center gap-1.5 bg-gradient-to-r from-[#e5c98d] to-[#c9a35e] hover:brightness-110 text-[#04130f] px-3.5 py-1.5 sm:px-4 sm:py-2 rounded-full font-bold text-xs sm:text-sm shadow-gold transition-all"
            >
              <ShoppingBag className="w-4 h-4" />
              <span>Order Menu</span>
            </Link>
          )}

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
          <Link href="/" onClick={() => setMobileMenuOpen(false)} className="hover:text-[#c9a35e] py-1 border-b border-emerald-900/60">Home</Link>
          <Link href="/#menu" onClick={() => setMobileMenuOpen(false)} className="hover:text-[#c9a35e] py-1 border-b border-emerald-900/60">Master Menu (151 Items)</Link>
          <Link href="/#signatures" onClick={() => setMobileMenuOpen(false)} className="hover:text-[#c9a35e] py-1 border-b border-emerald-900/60">Chef&apos;s Signatures</Link>
          <Link href="/#legacy" onClick={() => setMobileMenuOpen(false)} className="hover:text-[#c9a35e] py-1 border-b border-emerald-900/60">About &amp; Founder</Link>
          <Link href="/gallery/" onClick={() => setMobileMenuOpen(false)} className="hover:text-[#c9a35e] py-1 border-b border-emerald-900/60">Photo Gallery</Link>
          <Link href="/#banquets" onClick={() => setMobileMenuOpen(false)} className="hover:text-[#c9a35e] py-1 border-b border-emerald-900/60">Banquets &amp; Catering</Link>
          <Link href="/#location" onClick={() => setMobileMenuOpen(false)} className="hover:text-[#c9a35e] py-1 border-b border-emerald-900/60">Hours &amp; Directions</Link>
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
