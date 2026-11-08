'use client';

import React, { useState, useMemo } from 'react';
import { Search, RotateCcw, BookOpen, X } from 'lucide-react';
import { MENU_CATEGORIES, MENU_ITEMS } from '@/data/menu-data';

interface MasterMenuProps {
  cart: Record<number, number>;
  onModifyQty: (itemId: number, delta: number) => void;
  onOpenSheet: (sheetNum: number) => void;
}

export default function MasterMenu({ cart, onModifyQty, onOpenSheet }: MasterMenuProps) {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [activeDietFilter, setActiveDietFilter] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const filteredItems = useMemo(() => {
    return MENU_ITEMS.filter((item) => {
      if (activeCategory !== 'all' && item.category !== activeCategory) {
        return false;
      }

      if (activeDietFilter === 'bestseller') {
        if (!item.tags.some((t) => t.toLowerCase().includes('bestseller') || t.toLowerCase().includes('signature'))) {
          return false;
        }
      } else if (activeDietFilter === 'chef') {
        if (!item.tags.some((t) => t.toLowerCase().includes('chef') || t.toLowerCase().includes('masterpiece') || t.toLowerCase().includes('royal'))) {
          return false;
        }
      } else if (activeDietFilter === 'under100') {
        if (item.price >= 100) return false;
      } else if (activeDietFilter === 'tandoor') {
        if (!item.tags.some((t) => t.toLowerCase().includes('tandoor')) && item.category !== 'starters' && item.category !== 'breads') {
          return false;
        }
      }

      if (searchQuery.trim()) {
        const q = searchQuery.toLowerCase().trim();
        const matchName = item.name.toLowerCase().includes(q);
        const matchDesc = item.desc.toLowerCase().includes(q);
        const matchTag = item.tags.some((t) => t.toLowerCase().includes(q));
        if (!matchName && !matchDesc && !matchTag) return false;
      }

      return true;
    });
  }, [activeCategory, activeDietFilter, searchQuery]);

  const resetFilters = () => {
    setActiveCategory('all');
    setActiveDietFilter('all');
    setSearchQuery('');
  };

  return (
    <section id="menu" className="py-12 sm:py-16 bg-white border-y border-[#c9a35e]/20">
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
        <div className="text-center max-w-xl mx-auto mb-6 sm:mb-10">
          <div className="inline-flex items-center gap-1.5 text-xs font-bold tracking-widest uppercase text-[#9a7536] mb-1">
            <span>♦</span>
            <span>Master Menu</span>
            <span>♦</span>
          </div>
          <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-bold text-[#04130f]">
            151 Authentic Dishes
          </h2>
          <div className="w-12 h-0.5 bg-[#c9a35e] mx-auto mt-2" />
        </div>

        <div className="bg-[#faf7f0] border border-[#c9a35e]/30 rounded-2xl p-3 sm:p-5 mb-6 shadow-sm">
          <div className="relative mb-3 sm:mb-4">
            <Search className="w-4 h-4 text-[#5e6b66] absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search dishes (e.g. Dosa, Paneer, Biryani, Chaat)..."
              className="w-full pl-10 pr-9 py-2.5 sm:py-3 rounded-full border border-[#c9a35e]/40 bg-white text-xs sm:text-sm text-[#161e1b] focus:outline-none focus:ring-2 focus:ring-[#c9a35e]"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 p-1"
              >
                <X className="w-4 h-4" />
              </button>
            )}
          </div>

          <div className="flex items-center gap-1.5 overflow-x-auto pb-2 mb-2 sm:mb-3 scrollbar-none">
            {[
              { id: 'all', label: 'All Items' },
              { id: 'bestseller', label: '⭐ Bestsellers' },
              { id: 'chef', label: '👑 Chef\'s Picks' },
              { id: 'tandoor', label: '🔥 Clay Tandoor' },
              { id: 'under100', label: '💰 Under ₹100' },
            ].map((pill) => (
              <button
                key={pill.id}
                onClick={() => setActiveDietFilter(pill.id)}
                className={`text-[11px] sm:text-xs font-semibold px-3 py-1.5 rounded-full border whitespace-nowrap transition-all ${activeDietFilter === pill.id
                    ? 'bg-[#0b3127] text-white border-[#0b3127]'
                    : 'bg-white text-[#5e6b66] border-gray-200 hover:border-[#c9a35e]'
                  }`}
              >
                {pill.label}
              </button>
            ))}
          </div>

          <div className="flex items-center gap-1.5 sm:gap-2 overflow-x-auto pb-1 scrollbar-none">
            {MENU_CATEGORIES.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`whitespace-nowrap inline-flex items-center gap-1.5 text-xs font-bold px-3 sm:px-4 py-2 rounded-full border transition-all ${activeCategory === cat.id
                    ? 'bg-gradient-to-r from-[#0b3127] to-[#071f18] text-[#e5c98d] border-[#c9a35e] shadow-sm'
                    : 'bg-white text-[#161e1b] border-[#c9a35e]/25 hover:border-[#c9a35e]'
                  }`}
              >
                <span>{cat.icon}</span>
                <span>{cat.name}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Results Info & Sheet Trigger */}
        <div className="flex items-center justify-between text-xs text-[#5e6b66] mb-4 px-1">
          <span>
            Showing <strong className="text-[#0b3127] font-bold">{filteredItems.length}</strong> items
          </span>
          <button
            onClick={() => onOpenSheet(1)}
            className="inline-flex items-center gap-1 text-[#9a7536] hover:text-[#0b3127] font-semibold text-xs"
          >
            <BookOpen className="w-3.5 h-3.5" />
            <span>View Menu Cards</span>
          </button>
        </div>

        {/* Dishes Grid */}
        {filteredItems.length === 0 ? (
          <div className="text-center py-12 bg-[#faf7f0] rounded-2xl border border-dashed border-[#c9a35e]/40 p-4">
            <div className="text-3xl mb-2">🍃</div>
            <h4 className="font-serif text-lg font-bold text-[#04130f]">No matching dishes</h4>
            <p className="text-xs text-[#5e6b66] mb-3">Try searching for "Paneer", "Dosa", "Biryani" or reset filters.</p>
            <button
              onClick={resetFilters}
              className="inline-flex items-center gap-1.5 bg-[#c9a35e] text-[#04130f] font-bold text-xs uppercase px-4 py-2 rounded-full hover:brightness-110"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              <span>Reset Filters</span>
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3.5 sm:gap-5">
            {filteredItems.map((item) => {
              const qty = cart[item.id] || 0;
              const isChef = item.tags.some(
                (t) => t.toLowerCase().includes('chef') || t.toLowerCase().includes('signature')
              );

              return (
                <div
                  key={item.id}
                  className="bg-[#faf7f0] hover:bg-white border border-[#c9a35e]/25 hover:border-[#c9a35e] rounded-xl p-3.5 sm:p-4 transition-all shadow-sm flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-start justify-between gap-2 mb-1.5">
                      <div className="flex items-start gap-2">
                        <div className="w-3.5 h-3.5 border border-[#27ae60] p-0.5 rounded flex items-center justify-center shrink-0 mt-0.5 bg-white">
                          <div className="w-1.5 h-1.5 rounded-full bg-[#27ae60]" />
                        </div>
                        <div>
                          <h4 className="font-serif text-sm sm:text-base font-bold text-[#161e1b] leading-tight">
                            {item.name}
                          </h4>
                          <div className="flex items-center gap-1 flex-wrap mt-1">
                            {item.tags.slice(0, 2).map((tag, tIdx) => (
                              <span
                                key={tIdx}
                                className={`text-[9px] font-semibold px-1.5 py-0.5 rounded ${isChef
                                    ? 'bg-red-50 text-red-600 border border-red-200'
                                    : 'bg-[#c9a35e]/15 text-[#9a7536]'
                                  }`}
                              >
                                {tag}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                      <div className="font-serif text-base sm:text-lg font-bold text-[#0b3127] shrink-0">
                        ₹{item.price}
                      </div>
                    </div>

                    <p className="text-[11px] sm:text-xs text-[#5e6b66] leading-relaxed mb-3 line-clamp-2">
                      {item.desc}
                    </p>
                  </div>

                  <div className="flex items-center justify-between border-t border-gray-200/50 pt-2.5 mt-1">
                    <span className="text-[10px] text-emerald-800/60 font-medium">
                      100% Veg
                    </span>

                    {qty > 0 ? (
                      <div className="inline-flex items-center border border-[#c9a35e] bg-white rounded-full overflow-hidden shadow-sm">
                        <button
                          onClick={() => onModifyQty(item.id, -1)}
                          className="w-8 h-8 flex items-center justify-center text-[#0b3127] font-bold hover:bg-[#c9a35e]/20 transition-colors text-sm"
                        >
                          −
                        </button>
                        <span className="min-w-[24px] text-center text-xs font-bold text-[#0b3127]">
                          {qty}
                        </span>
                        <button
                          onClick={() => onModifyQty(item.id, 1)}
                          className="w-8 h-8 flex items-center justify-center text-[#0b3127] font-bold hover:bg-[#c9a35e]/20 transition-colors text-sm"
                        >
                          +
                        </button>
                      </div>
                    ) : (
                      <button
                        onClick={() => onModifyQty(item.id, 1)}
                        className="bg-white hover:bg-[#0b3127] text-[#0b3127] hover:text-white border border-[#0b3127] text-xs font-bold px-3.5 py-1.5 rounded-full transition-all"
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
      </div>
    </section>
  );
}
