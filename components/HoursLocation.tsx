import React from 'react';
import { MapPin, Phone, MessageCircle, ExternalLink } from 'lucide-react';

export default function HoursLocation() {
  const shifts = [
    { icon: '🍳', name: 'Breakfast', hours: '6:00 AM - 10:00 AM' },
    { icon: '🍛', name: 'Royal Lunch', hours: '11:00 AM - 3:00 PM' },
    { icon: '🥘', name: 'Chaat Bazaar', hours: '4:00 PM Onwards' },
    { icon: '🌙', name: 'Royal Dinner', hours: '7:00 PM - 10:00 PM' },
  ];

  return (
    <section id="location" className="py-12 sm:py-16 bg-[#faf7f0] border-t border-[#c9a35e]/25">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-xl mx-auto mb-8 sm:mb-12">
          <div className="inline-flex items-center gap-1.5 text-xs font-bold tracking-widest uppercase text-[#9a7536] mb-1">
            <span>♦</span>
            <span>Visit & Delivery</span>
            <span>♦</span>
          </div>
          <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-bold text-[#04130f]">
            Hours & Location
          </h2>
          <div className="w-12 h-0.5 bg-[#c9a35e] mx-auto mt-2" />
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 mb-8">
          {shifts.map((s, idx) => (
            <div
              key={idx}
              className="bg-white border border-[#c9a35e]/30 rounded-xl p-3 sm:p-4 text-center shadow-sm"
            >
              <div className="text-2xl mb-1">{s.icon}</div>
              <h4 className="font-serif text-xs sm:text-sm font-bold text-[#0b3127]">{s.name}</h4>
              <div className="text-[11px] font-bold text-[#9a7536] mt-0.5">{s.hours}</div>
            </div>
          ))}
        </div>

        <div className="bg-gradient-to-br from-[#071f18] to-[#04120e] border border-[#c9a35e]/40 rounded-2xl p-6 sm:p-10 text-white shadow-xl grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
          <div className="lg:col-span-7">
            <span className="text-[10px] sm:text-xs font-bold uppercase tracking-widest text-[#e5c98d]">
              Direct Contact
            </span>
            <h3 className="font-serif text-2xl sm:text-3xl font-bold mt-1 mb-3">Gokul Veg Restaurant</h3>

            <div className="space-y-2 text-xs sm:text-sm text-emerald-100/80 mb-6">
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-[#c9a35e] shrink-0" />
                <span>Chitta Ranjan Road, Agartala, Tripura</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-[#c9a35e] shrink-0" />
                <a href="tel:+918732024422" className="text-white hover:text-[#e5c98d] font-bold underline">
                  +91 8732-024422
                </a>
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-3">
              <a
                href="tel:+918732024422"
                className="bg-gradient-to-r from-[#e5c98d] to-[#c9a35e] text-[#04130f] font-bold text-xs uppercase px-5 py-3 rounded-full tracking-wider"
              >
                Call Desk
              </a>
              <a
                href="https://wa.me/918732024422?text=Hello%20Gokul%20Veg%20Restaurant,%20I%20would%20like%20to%20order%20food."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 bg-[#25d366] hover:bg-[#20ba59] text-white text-xs font-bold px-5 py-3 rounded-full shadow-md"
              >
                <MessageCircle className="w-4 h-4" />
                <span>WhatsApp</span>
              </a>
              <a
                href="https://maps.google.com/?q=Chitta+Ranjan+Road+Agartala+Tripura"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-xs font-bold border border-[#c9a35e] text-[#e5c98d] px-4 py-3 rounded-full"
              >
                <span>Google Maps</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          <div className="lg:col-span-5 bg-[#103d31]/50 border border-[#c9a35e]/30 rounded-xl p-5 text-center">
            <h4 className="font-serif text-base font-bold text-[#e5c98d] mb-1">
              Central Agartala Location
            </h4>
            <p className="text-xs text-emerald-100/70 leading-relaxed">
              Dine-in AC hall, takeaway counter, and rapid 20-30 min city delivery.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
