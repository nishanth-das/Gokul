'use client';

import React, { useState, useMemo } from 'react';
import Link from 'next/link';
import { Search, Flame, Award, Star, Tag, BookOpen, Clock, ShieldCheck, Sparkles, ArrowLeft } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import TrustStrip from '@/components/TrustStrip';
import { MENU_CATEGORIES, MENU_ITEMS, RESTAURANT_CONFIG } from '@/data/menu-data';
import { useCart } from '@/context/CartContext';

export default function MenuView() {
  const { cart, modifyQty, addToCart, setActiveSheet } = useCart();
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [dietFilter, setDietFilter] = useState<string>('all');

  const filteredItems = useMemo(() => {
    return MENU_ITEMS.filter((item) => {
      // Category filter
      if (selectedCategory !== 'all' && item.category !== selectedCategory) {
        return false;
      }

      // Quick filter
      if (dietFilter === 'bestseller' && !item.tags.includes('Bestseller') && !item.tags.includes('Popular')) {
        return false;
      }
      if (dietFilter === 'chef' && !item.tags.includes("Chef's Pick") && !item.tags.includes('Signature')) {
        return false;
      }
      if (dietFilter === 'tandoor' && !item.tags.includes('Tandoor') && item.category !== 'starters' && item.category !== 'breads') {
        return false;
      }
      if (dietFilter === 'under100' && item.price >= 100) {
        return false;
      }
      if (dietFilter === 'under150' && item.price >= 150) {
        return false;
      }
      if (dietFilter === 'under250' && item.price >= 250) {
        return false;
      }

      // Search query
      if (searchQuery.trim() !== '') {
        const query = searchQuery.toLowerCase();
        const matchName = item.name.toLowerCase().includes(query);
        const matchDesc = item.desc.toLowerCase().includes(query);
        const matchTag = item.tags.some((t) => t.toLowerCase().includes(query));
        return matchName || matchDesc || matchTag;
      }

      return true;
    });
  }, [selectedCategory, dietFilter, searchQuery]);

  return (
    <div className="min-h-screen bg-[#faf7f0] text-[#161e1b] flex flex-col pb-28 lg:pb-0">
      <Navbar />

      {/* Hero Header */}
      <section className="relative bg-gradient-to-br from-[#04130f] via-[#071f18] to-[#0b3127] text-white py-12 sm:py-16 border-b-2 border-[#c9a35e]/30 overflow-hidden">
        <div className="absolute inset-0 opacity-15 bg-[radial-gradient(#c9a35e_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none" />
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Link
            href="/"
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#e5c98d] hover:text-white mb-3 transition-colors"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Back to Home</span>
          </Link>

          <div className="inline-flex items-center gap-1.5 text-[11px] font-bold tracking-[0.2em] uppercase text-[#e5c98d] mb-2">
            <span className="inline-block w-1.5 h-1.5 rounded-full bg-[#c9a35e]" />
            <span>Complete Culinary Repertoire</span>
            <span className="inline-block w-1.5 h-1.5 rounded-full bg-[#c9a35e]" />
          </div>

          <h1 className="font-serif text-3xl sm:text-5xl font-bold text-white mb-3">
            Master <span className="gold-text">Menu</span>
          </h1>

          <p className="max-w-2xl mx-auto text-xs sm:text-sm text-emerald-100/75 leading-relaxed mb-6">
            Explore all 151+ authentic vegetarian dishes prepared fresh daily on Chitta Ranjan Road. From early morning Indori poha &amp; dosas to smokey clay tandoor specialties, rich paneer curries, and our famous 4 PM Chaat Bazaar.
          </p>

          {/* Kitchen Disclosure Badges */}
          <div className="flex flex-wrap justify-center gap-2 max-w-3xl mx-auto text-[11px]">
            <span className="bg-[#0b3127] border border-[#c9a35e]/50 text-[#e5c98d] px-3 py-1 rounded-full flex items-center gap-1.5">
              <ShieldCheck className="w-3.5 h-3.5 text-[#2ecc71]" />
              <span>Prepared with Fresh Garlic &amp; Onion</span>
            </span>
            <span className="bg-[#0b3127] border border-[#c9a35e]/50 text-[#e5c98d] px-3 py-1 rounded-full flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5 text-[#e5c98d]" />
              <span>Jain Options Available on Request</span>
            </span>
            <span className="bg-[#0b3127] border border-[#c9a35e]/50 text-[#e5c98d] px-3 py-1 rounded-full flex items-center gap-1.5">
              <Clock className="w-3.5 h-3.5 text-[#c9a35e]" />
              <span>20-30 Min Delivery (₹2,000+ • Selected Radius)</span>
            </span>
          </div>
        </div>
      </section>

      <TrustStrip />

      {/* Main Interactive Menu Explorer */}
      <section className="py-8 sm:py-12 flex-grow max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 w-full">
        {/* Search & Filter Bar */}
        <div className="bg-white border border-[#c9a35e]/30 rounded-2xl p-4 sm:p-6 shadow-sm mb-8">
          <div className="flex flex-col md:flex-row gap-3 items-center justify-between mb-5">
            <div className="relative w-full md:w-96">
              <Search className="w-4 h-4 text-[#5e6b66] absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
              <input
                type="text"
                placeholder="Search dishes (e.g., paneer, biryani, dosa, chole)..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2.5 text-xs sm:text-sm rounded-xl border border-gray-200 focus:outline-none focus:border-[#c9a35e] bg-[#faf7f0]/50"
              />
            </div>

            <div className="flex items-center gap-2 text-xs text-[#5e6b66] self-end md:self-auto font-medium">
              <span>Showing <strong>{filteredItems.length}</strong> of {MENU_ITEMS.length} dishes</span>
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="text-red-600 hover:underline text-[11px] font-semibold"
                >
                  Clear search
                </button>
              )}
            </div>
          </div>

          {/* Category Tabs */}
          <div className="flex items-center gap-1.5 overflow-x-auto pb-2 scrollbar-none border-b border-gray-100 mb-3">
            {MENU_CATEGORIES.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`text-xs font-semibold px-3.5 py-2 rounded-xl whitespace-nowrap transition-all ${
                  selectedCategory === cat.id
                    ? 'bg-[#0b3127] text-white shadow-sm'
                    : 'bg-[#faf7f0] text-[#5e6b66] hover:bg-[#c9a35e]/15 hover:text-[#04130f]'
                }`}
              >
                {cat.name}
              </button>
            ))}
          </div>

          {/* Quick Diet & Price Filters */}
          <div className="flex items-center gap-1.5 overflow-x-auto pb-1 scrollbar-none">
            {[
              { id: 'all', label: 'All Items', icon: null },
              { id: 'bestseller', label: 'Bestsellers', icon: <Star className="w-3 h-3" /> },
              { id: 'chef', label: "Chef's Picks", icon: <Award className="w-3 h-3" /> },
              { id: 'tandoor', label: 'Clay Tandoor', icon: <Flame className="w-3 h-3" /> },
              { id: 'under100', label: 'Under ₹100', icon: <Tag className="w-3 h-3" /> },
              { id: 'under150', label: 'Under ₹150', icon: <Tag className="w-3 h-3" /> },
              { id: 'under250', label: 'Under ₹250', icon: <Tag className="w-3 h-3" /> },
            ].map((pill) => (
              <button
                key={pill.id}
                onClick={() => setDietFilter(pill.id)}
                className={`inline-flex items-center gap-1.5 text-[11px] font-semibold px-3 py-1.5 rounded-full border whitespace-nowrap transition-all ${
                  dietFilter === pill.id
                    ? 'bg-[#c9a35e] text-[#04130f] border-[#c9a35e] font-bold'
                    : 'bg-white text-[#5e6b66] border-gray-200 hover:border-[#c9a35e]'
                }`}
              >
                {pill.icon}
                <span>{pill.label}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Menu Items Grid */}
        {filteredItems.length === 0 ? (
          <div className="bg-white border border-[#c9a35e]/30 rounded-2xl p-12 text-center my-8">
            <h3 className="font-serif text-lg font-bold text-[#04130f] mb-1">No dishes match your filter</h3>
            <p className="text-xs text-[#5e6b66] mb-4">Try clearing your search term or choosing a different category.</p>
            <button
              onClick={() => {
                setSelectedCategory('all');
                setDietFilter('all');
                setSearchQuery('');
              }}
              className="bg-[#0b3127] text-white text-xs font-bold px-4 py-2 rounded-full"
            >
              Reset Filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
            {filteredItems.map((item) => {
              const qty = cart[item.id] || 0;
              return (
                <div
                  key={item.id}
                  className="bg-white border border-[#c9a35e]/25 hover:border-[#c9a35e] rounded-xl p-3.5 sm:p-4 shadow-sm hover:shadow-md transition-all flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-start justify-between gap-2 mb-1.5">
                      <div className="flex-1">
                        <div className="flex items-center gap-1.5 flex-wrap">
                          <h4 className="font-serif text-sm sm:text-base font-bold text-[#04130f]">
                            {item.name}
                          </h4>
                          {item.sheet && (
                            <button
                              onClick={() => setActiveSheet(item.sheet)}
                              className="text-[9px] bg-gray-100 hover:bg-[#c9a35e]/20 text-[#5e6b66] px-1.5 py-0.5 rounded font-mono transition-colors"
                              title={`View Sheet ${item.sheet} in high resolution`}
                            >
                              Sheet {item.sheet}
                            </button>
                          )}
                        </div>

                        <div className="flex flex-wrap gap-1 mt-1">
                          {item.tags.map((tag, idx) => (
                            <span
                              key={idx}
                              className={`text-[9px] font-bold px-1.5 py-0.2 rounded ${
                                tag === 'Bestseller'
                                  ? 'bg-amber-100 text-amber-800'
                                  : tag === 'Signature'
                                  ? 'bg-emerald-100 text-emerald-800'
                                  : tag === 'Chef’s Pick'
                                  ? 'bg-purple-100 text-purple-800'
                                  : 'bg-[#c9a35e]/15 text-[#9a7536]'
                              }`}
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>

                      <div className="price-display font-sans text-base sm:text-lg font-bold text-[#0b3127] shrink-0 tabular-nums tracking-tight">
                        ₹{item.price}
                      </div>
                    </div>

                    <p className="text-[11px] sm:text-xs text-[#5e6b66] leading-relaxed mb-3 line-clamp-2">
                      {item.desc}
                    </p>
                  </div>

                  <div className="flex items-center justify-between border-t border-gray-100 pt-2.5 mt-2">
                    <span className="text-[10px] text-emerald-800/70 font-semibold">
                      100% Veg
                    </span>

                    {qty > 0 ? (
                      <div className="inline-flex items-center border border-[#c9a35e] bg-white rounded-full overflow-hidden shadow-sm">
                        <button
                          onClick={() => modifyQty(item.id, -1)}
                          className="w-7 h-7 flex items-center justify-center text-[#0b3127] font-bold hover:bg-[#c9a35e]/20 transition-colors text-sm"
                          aria-label={`Decrease ${item.name}`}
                        >
                          −
                        </button>
                        <span className="min-w-[22px] text-center text-xs font-bold text-[#0b3127]">
                          {qty}
                        </span>
                        <button
                          onClick={() => modifyQty(item.id, 1)}
                          className="w-7 h-7 flex items-center justify-center text-[#0b3127] font-bold hover:bg-[#c9a35e]/20 transition-colors text-sm"
                          aria-label={`Increase ${item.name}`}
                        >
                          +
                        </button>
                      </div>
                    ) : (
                      <button
                        onClick={() => addToCart(item.id)}
                        className="bg-[#0b3127] hover:bg-[#c9a35e] text-white hover:text-[#04130f] text-[11px] font-bold px-3 py-1.5 rounded-full transition-colors uppercase tracking-wider"
                      >
                        + Add
                      </button>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        )}

        {/* Printed Menu Book Section */}
        <div className="mt-16 bg-gradient-to-b from-[#071f18] to-[#04130f] text-white rounded-2xl p-6 sm:p-10 border border-[#c9a35e]/40 shadow-xl">
          <div className="text-center max-w-2xl mx-auto mb-8">
            <div className="inline-flex items-center gap-1.5 text-xs font-bold tracking-widest uppercase text-[#e5c98d] mb-1">
              <BookOpen className="w-3.5 h-3.5 text-[#c9a35e]" />
              <span>Printed Menu Archives</span>
            </div>
            <h3 className="font-serif text-2xl sm:text-3xl font-bold text-white mb-2">
              Browse Official Laminated Menu Pages
            </h3>
            <p className="text-xs text-emerald-100/70">
              Click any menu sheet to inspect authentic printed pricing, complete category listings, and dish details in full screen.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4">
            {RESTAURANT_CONFIG.gallery.map((sheet) => (
              <div
                key={sheet.num}
                onClick={() => setActiveSheet(sheet.num)}
                className="bg-[#103d31]/40 border border-[#c9a35e]/30 hover:border-[#c9a35e] rounded-xl p-2 sm:p-2.5 cursor-pointer transition-all hover:-translate-y-1 hover:shadow-gold flex flex-col group"
              >
                <div className="h-28 sm:h-36 rounded-lg overflow-hidden bg-black mb-2 relative">
                  <img
                    src={`/${sheet.num}.webp`}
                    alt={sheet.title}
                    loading="lazy"
                    decoding="async"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <h5 className="font-serif text-xs font-bold text-[#e5c98d] group-hover:text-white transition-colors truncate">
                  {sheet.title}
                </h5>
                <p className="text-[10px] text-emerald-100/60 leading-tight line-clamp-1 mt-0.5">
                  {sheet.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
