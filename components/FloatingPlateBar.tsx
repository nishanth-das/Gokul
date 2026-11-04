'use client';

import React from 'react';
import { ShoppingBag, ChevronRight } from 'lucide-react';
import { MENU_ITEMS } from '@/data/menu-data';

interface FloatingPlateBarProps {
  cart: Record<number, number>;
  onOpenCart: () => void;
}

export default function FloatingPlateBar({ cart, onOpenCart }: FloatingPlateBarProps) {
  const entries = Object.entries(cart);
  const count = entries.reduce((sum, [, qty]) => sum + qty, 0);

  if (count === 0) return null;

  const total = entries.reduce((sum, [idStr, qty]) => {
    const item = MENU_ITEMS.find((i) => i.id === parseInt(idStr));
    return sum + (item ? item.price * qty : 0);
  }, 0);

  return (
    <aside aria-label="Floating Order Plate Bar" className="hidden lg:block fixed bottom-6 right-6 z-40 animate-in fade-in slide-in-from-bottom duration-300">
      <button
        onClick={onOpenCart}
        className="bg-gradient-to-r from-[#071f18] to-[#04130f] border-2 border-[#c9a35e] text-[#e5c98d] hover:brightness-110 px-5 py-3 rounded-full shadow-gold-lg flex items-center gap-3 transition-all transform hover:-translate-y-1"
      >
        <span className="w-6 h-6 rounded-full bg-red-600 text-white text-xs font-bold flex items-center justify-center shrink-0">
          {count}
        </span>
        <div className="flex items-center gap-2 text-sm font-bold">
          <span>View Plate</span>
          <span className="text-white">(₹{total})</span>
        </div>
        <ChevronRight className="w-4 h-4 text-[#c9a35e]" />
      </button>
    </aside>
  );
}
