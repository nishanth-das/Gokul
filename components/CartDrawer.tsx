'use client';

import React, { useState } from 'react';
import { X, MessageCircle, Clock, UtensilsCrossed } from 'lucide-react';
import { MENU_ITEMS } from '@/data/menu-data';

interface CartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  cart: Record<number, number>;
  onModifyQty: (itemId: number, delta: number) => void;
  onClearCart: () => void;
}

export default function CartDrawer({
  isOpen,
  onClose,
  cart,
  onModifyQty,
}: CartDrawerProps) {
  const [orderType, setOrderType] = useState('Home Delivery (20-30 Mins on ₹2,000+)');
  const [customerName, setCustomerName] = useState('');
  const [customerPhone, setCustomerPhone] = useState('');
  const [customerAddress, setCustomerAddress] = useState('');

  if (!isOpen) return null;

  const entries = Object.entries(cart);
  const totalAmount = entries.reduce((sum, [idStr, qty]) => {
    const item = MENU_ITEMS.find((i) => i.id === parseInt(idStr));
    return sum + (item ? item.price * qty : 0);
  }, 0);

  const isExpressDelivery = orderType.startsWith('Home Delivery');
  const qualifiesForExpress = totalAmount >= 2000;

  const handleWhatsAppCheckout = () => {
    if (entries.length === 0) {
      alert('Please add at least one dish to your cart before ordering.');
      return;
    }

    const lines: string[] = [
      `*NEW ORDER - GOKUL VEG RESTAURANT*`,
      `_Chitta Ranjan Road, Agartala, Tripura_`,
      `--------------------------------------`,
      `*Order Type:* ${orderType}`,
      `*Customer:* ${customerName.trim() || 'Guest'}`,
      `*Phone:* ${customerPhone.trim() || 'Not specified'}`,
      `*Address/Table:* ${customerAddress.trim() || 'Agartala City'}`,
      `--------------------------------------`,
      `*ITEMS ORDERED:*`,
    ];

    entries.forEach(([idStr, qty]) => {
      const item = MENU_ITEMS.find((i) => i.id === parseInt(idStr));
      if (item) {
        lines.push(`• ${qty}x ${item.name} (₹${item.price}) = ₹${item.price * qty}`);
      }
    });

    lines.push(`--------------------------------------`);
    lines.push(`*TOTAL: ₹${totalAmount}*`);
    if (isExpressDelivery) {
      lines.push(
        qualifiesForExpress
          ? `*Delivery:* 20-30 Mins Express (Qualifies ₹2,000+ within selected radius)`
          : `*Delivery Note:* Order below ₹2,000 minimum for 20-30 min express delivery (please confirm delivery ETA)`
      );
    }

    const message = encodeURIComponent(lines.join('\n'));
    const url = `https://wa.me/918732024422?text=${message}`;
    window.open(url, '_blank');
  };

  return (
    <div
      onClick={onClose}
      className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex justify-end"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="bg-white w-full max-w-md h-full flex flex-col shadow-2xl animate-in slide-in-from-right duration-300"
      >
        <div className="bg-gradient-to-r from-[#0b3127] to-[#071f18] text-white p-4 flex items-center justify-between border-b-2 border-[#c9a35e]">
          <div className="flex items-center gap-2.5">
            <img
              src="/gokul-logo.webp"
              alt="Gokul Logo"
              className="h-9 w-auto object-contain drop-shadow-[0_0_6px_rgba(255,255,255,0.4)]"
            />
            <div>
              <h3 className="font-serif text-base font-bold text-[#e5c98d]">Your Order Cart</h3>
              <span className="text-[10px] text-emerald-100/70">20-30 Min Delivery (₹2,000+ • Selected Radius)</span>
            </div>
          </div>
          <button
            onClick={onClose}
            className="text-white hover:text-[#c9a35e] transition-colors p-1"
            aria-label="Close Drawer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="p-4 sm:p-5 flex-grow overflow-y-auto space-y-3">
          {entries.length === 0 ? (
            <div className="text-center py-16 text-[#5e6b66]">
              <UtensilsCrossed className="w-8 h-8 text-[#c9a35e] mx-auto mb-2" />
              <h4 className="font-serif text-base font-bold text-[#04130f]">Your cart is empty</h4>
              <p className="text-xs text-[#5e6b66]">Add dishes from our 151-item menu to start your order.</p>
            </div>
          ) : (
            entries.map(([idStr, qty]) => {
              const item = MENU_ITEMS.find((i) => i.id === parseInt(idStr));
              if (!item) return null;
              const itemTotal = item.price * qty;

              return (
                <div
                  key={item.id}
                  className="flex items-center justify-between py-2.5 border-b border-gray-100"
                >
                  <div className="flex-1 pr-2">
                    <h5 className="font-bold text-xs sm:text-sm text-[#161e1b]">{item.name}</h5>
                    <div className="text-[11px] text-[#5e6b66] font-sans">
                      ₹{item.price} × {qty} = <strong className="text-[#0b3127] font-bold price-display tabular-nums">₹{itemTotal}</strong>
                    </div>
                  </div>

                  <div className="inline-flex items-center border border-[#c9a35e] rounded-full overflow-hidden bg-white shrink-0">
                    <button
                      onClick={() => onModifyQty(item.id, -1)}
                      className="w-7 h-7 flex items-center justify-center text-[#0b3127] font-bold hover:bg-[#c9a35e]/20"
                    >
                      −
                    </button>
                    <span className="min-w-[20px] text-center text-xs font-bold text-[#0b3127]">
                      {qty}
                    </span>
                    <button
                      onClick={() => onModifyQty(item.id, 1)}
                      className="w-7 h-7 flex items-center justify-center text-[#0b3127] font-bold hover:bg-[#c9a35e]/20"
                    >
                      +
                    </button>
                  </div>
                </div>
              );
            })
          )}
        </div>

        {entries.length > 0 && (
          <div className="bg-[#faf7f0] border-t border-[#c9a35e]/30 p-4 space-y-2.5">
            <div>
              <label className="block text-[10px] font-bold text-[#161e1b] mb-1">Order Mode</label>
              <select
                value={orderType}
                onChange={(e) => setOrderType(e.target.value)}
                className="w-full text-xs px-3 py-1.5 rounded-lg border border-gray-200 bg-white"
              >
                <option value="Home Delivery (20-30 Mins on ₹2,000+)">
                  Home Delivery (20-30 Mins on ₹2,000+ • Selected Radius)
                </option>
                <option value="Dine-In Table Pre-Order">Dine-In Table Pre-Order</option>
                <option value="Takeaway Pickup Counter">Takeaway Pickup Counter</option>
              </select>
            </div>

            {isExpressDelivery && (
              <div
                className={`flex items-start gap-2 rounded-lg px-2.5 py-2 text-[11px] leading-snug border ${qualifiesForExpress
                    ? 'bg-emerald-50 border-emerald-200 text-emerald-900'
                    : 'bg-amber-50 border-amber-200 text-amber-900'
                  }`}
              >
                <Clock className="w-3.5 h-3.5 shrink-0 mt-0.5 text-[#9a7536]" />
                <span>
                  {qualifiesForExpress
                    ? 'Qualifies for 20-30 min express delivery (within selected radius).'
                    : `20-30 min delivery applies on orders of ₹2,000+ within selected radius. Add ₹${2000 - totalAmount
                    } more to qualify.`}
                </span>
              </div>
            )}

            <div className="grid grid-cols-2 gap-2">
              <input
                type="text"
                placeholder="Your Name"
                value={customerName}
                onChange={(e) => setCustomerName(e.target.value)}
                className="w-full text-xs px-3 py-1.5 rounded-lg border border-gray-200 bg-white"
              />
              <input
                type="tel"
                placeholder="Phone"
                value={customerPhone}
                onChange={(e) => setCustomerPhone(e.target.value)}
                className="w-full text-xs px-3 py-1.5 rounded-lg border border-gray-200 bg-white"
              />
            </div>

            <input
              type="text"
              placeholder="Address / Table #"
              value={customerAddress}
              onChange={(e) => setCustomerAddress(e.target.value)}
              className="w-full text-xs px-3 py-1.5 rounded-lg border border-gray-200 bg-white"
            />

            <div className="pt-2 border-t border-gray-200 text-xs text-[#5e6b66] space-y-1">
              <div className="flex justify-between font-bold text-sm text-[#0b3127]">
                <span>Total Amount</span>
                <span className="price-display font-sans text-base font-bold text-[#0b3127] tabular-nums tracking-tight">₹{totalAmount}</span>
              </div>
            </div>

            <button
              onClick={handleWhatsAppCheckout}
              className="w-full bg-[#25d366] hover:bg-[#20ba59] text-white font-bold text-xs uppercase tracking-wider py-3 rounded-xl shadow-md transition-all flex items-center justify-center gap-2"
            >
              <MessageCircle className="w-4 h-4" />
              <span>Send Order on WhatsApp</span>
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
