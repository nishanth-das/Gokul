'use client';

import React from 'react';
import { UtensilsCrossed, Phone, MessageCircle, ShoppingBag } from 'lucide-react';
import { MENU_ITEMS } from '@/data/menu-data';

interface MobileBottomNavProps {
  cart: Record<number, number>;
  onOpenCart: () => void;
}

export default function MobileBottomNav({
  cart,
  onOpenCart,
}: MobileBottomNavProps) {
  const entries = Object.entries(cart);
  const totalCount = entries.reduce((sum, [, qty]) => sum + qty, 0);
  const totalPrice = entries.reduce((sum, [idStr, qty]) => {
    const item = MENU_ITEMS.find((i) => i.id === parseInt(idStr));
    return sum + (item ? item.price * qty : 0);
  }, 0);

  return (
    <div className="lg:hidden fixed bottom-0 left-0 right-0 z-40 bg-[#071f18]/95 backdrop-blur-lg border-t border-[#c9a35e]/30 px-3 py-2 shadow-2xl">
      <div className="flex items-center justify-around gap-2 max-w-md mx-auto">
        <a
          href="#menu"
          className="flex flex-col items-center justify-center text-[#e5c98d] hover:text-white py-1 px-2 text-center"
        >
          <UtensilsCrossed className="w-5 h-5 text-[#c9a35e] mb-0.5" />
          <span className="text-[10px] font-semibold">Menu</span>
        </a>

        <a
          href="tel:+918732024422"
          className="flex flex-col items-center justify-center text-[#e5c98d] hover:text-white py-1 px-2 text-center"
        >
          <Phone className="w-5 h-5 text-[#c9a35e] mb-0.5" />
          <span className="text-[10px] font-semibold">Call</span>
        </a>

        <a
          href="https://wa.me/918732024422?text=Hello%20Gokul%20Veg%20Restaurant,%20I%20would%20like%20to%20order%20delicious%20food."
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center justify-center text-[#25d366] py-1 px-2 text-center"
        >
          <MessageCircle className="w-5 h-5 mb-0.5" />
          <span className="text-[10px] font-semibold">WhatsApp</span>
        </a>

        <button
          onClick={onOpenCart}
          className="relative inline-flex items-center gap-1.5 bg-gradient-to-r from-[#e5c98d] to-[#c9a35e] text-[#04130f] font-bold px-4 py-2 rounded-full shadow-md text-xs"
        >
          <ShoppingBag className="w-4 h-4" />
          <span>Plate</span>
          {totalCount > 0 ? (
            <span className="bg-[#0b3127] text-[#e5c98d] px-1.5 py-0.5 rounded-full text-[10px] price-display font-sans font-bold tabular-nums">
              ₹{totalPrice}
            </span>
          ) : null}
        </button>
      </div>
    </div>
  );
}

