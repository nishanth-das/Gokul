'use client';

import React, { useState } from 'react';
import { Phone, Users, Shield, Sparkles } from 'lucide-react';

export default function BanquetsSection() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    eventType: 'Corporate Summit',
    guests: '50 - 100 Guests',
    date: '',
    notes: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const text = `🦚 *BANQUET & CATERING INQUIRY - GOKUL*
----------------------------------------
*Organizer:* ${formData.name || 'Guest'}
*Contact:* ${formData.phone}
*Event:* ${formData.eventType}
*Guests:* ${formData.guests}
*Date:* ${formData.date}
*Notes:* ${formData.notes || 'Vegetarian Catering with Live Counters'}
----------------------------------------
Please share customized royal banquet package rates.`;

    const whatsappUrl = `https://wa.me/918732024422?text=${encodeURIComponent(text)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <section id="banquets" className="py-12 sm:py-16 bg-[#faf7f0]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          <div className="lg:col-span-6">
            <div className="inline-flex items-center gap-1.5 text-xs font-bold tracking-widest uppercase text-[#9a7536] mb-1">
              <span>♦</span>
              <span>Hospitality</span>
              <span>♦</span>
            </div>
            
            <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-bold text-[#04130f] leading-snug mb-3">
              Corporate Banquets & Outdoor Catering
            </h2>

            <p className="text-xs sm:text-sm text-[#5e6b66] leading-relaxed mb-6">
              Full-service vegetarian catering for conferences, weddings, and private parties from 50 to 500+ guests with live tandoor and chaat counters.
            </p>

            <div className="grid grid-cols-2 gap-3 mb-6">
              <div className="bg-white p-3 rounded-xl border border-[#c9a35e]/30 shadow-sm">
                <div className="flex items-center gap-1.5 text-[#0b3127] font-bold text-xs mb-0.5">
                  <Sparkles className="w-3.5 h-3.5 text-[#c9a35e]" />
                  <span>Conference Boxes</span>
                </div>
                <p className="text-[10px] text-[#5e6b66]">Packed meals & hi-tea chaats.</p>
              </div>

              <div className="bg-white p-3 rounded-xl border border-[#c9a35e]/30 shadow-sm">
                <div className="flex items-center gap-1.5 text-[#0b3127] font-bold text-xs mb-0.5">
                  <Sparkles className="w-3.5 h-3.5 text-[#c9a35e]" />
                  <span>Live Stalls</span>
                </div>
                <p className="text-[10px] text-[#5e6b66]">Hot naans & live chaat counters.</p>
              </div>

              <div className="bg-white p-3 rounded-xl border border-[#c9a35e]/30 shadow-sm">
                <div className="flex items-center gap-1.5 text-[#0b3127] font-bold text-xs mb-0.5">
                  <Users className="w-3.5 h-3.5 text-[#c9a35e]" />
                  <span>50 - 500+ Capacity</span>
                </div>
                <p className="text-[10px] text-[#5e6b66]">Large buffet setups.</p>
              </div>

              <div className="bg-white p-3 rounded-xl border border-[#c9a35e]/30 shadow-sm">
                <div className="flex items-center gap-1.5 text-[#0b3127] font-bold text-xs mb-0.5">
                  <Shield className="w-3.5 h-3.5 text-[#c9a35e]" />
                  <span>ISO Certified</span>
                </div>
                <p className="text-[10px] text-[#5e6b66]">Audited hygiene standards.</p>
              </div>
            </div>

            <a
              href="tel:+918732024422"
              className="inline-flex items-center gap-2 bg-[#0b3127] hover:bg-[#c9a35e] text-white hover:text-[#04130f] font-bold text-xs uppercase tracking-wider px-5 py-3 rounded-full transition-all"
            >
              <Phone className="w-3.5 h-3.5" />
              <span>Call Banquet: +91 8732-024422</span>
            </a>
          </div>

          <div className="lg:col-span-6">
            <div className="bg-white border-2 border-[#c9a35e]/30 rounded-2xl p-5 sm:p-7 shadow-lg">
              <h3 className="font-serif text-xl sm:text-2xl font-bold text-[#04130f] mb-1">
                Request Catering Quote
              </h3>
              <p className="text-xs text-[#5e6b66] mb-4">
                Instant customized catering packages via WhatsApp.
              </p>

              <form onSubmit={handleSubmit} className="space-y-3">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-[11px] font-bold text-[#161e1b] mb-1">Your Name</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Rahul Sharma"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full text-xs px-3 py-2.5 rounded-lg border border-gray-200 focus:outline-none focus:border-[#c9a35e]"
                    />
                  </div>
                  <div>
                    <label className="block text-[11px] font-bold text-[#161e1b] mb-1">Phone Number</label>
                    <input
                      type="tel"
                      required
                      placeholder="+91 98765 43210"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full text-xs px-3 py-2.5 rounded-lg border border-gray-200 focus:outline-none focus:border-[#c9a35e]"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-[11px] font-bold text-[#161e1b] mb-1">Event Type</label>
                    <select
                      value={formData.eventType}
                      onChange={(e) => setFormData({ ...formData, eventType: e.target.value })}
                      className="w-full text-xs px-3 py-2 rounded-lg border border-gray-200 bg-white"
                    >
                      <option>Corporate Summit</option>
                      <option>Wedding / Reception</option>
                      <option>Birthday / Party</option>
                      <option>Executive Lunch Boxes</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-[11px] font-bold text-[#161e1b] mb-1">Guests</label>
                    <select
                      value={formData.guests}
                      onChange={(e) => setFormData({ ...formData, guests: e.target.value })}
                      className="w-full text-xs px-3 py-2 rounded-lg border border-gray-200 bg-white"
                    >
                      <option>25 - 50 Guests</option>
                      <option>50 - 100 Guests</option>
                      <option>100 - 250 Guests</option>
                      <option>250 - 500+ Guests</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-[11px] font-bold text-[#161e1b] mb-1">Date</label>
                  <input
                    type="date"
                    required
                    value={formData.date}
                    onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                    className="w-full text-xs px-3 py-2 rounded-lg border border-gray-200"
                  />
                </div>

                <div>
                  <label className="block text-[11px] font-bold text-[#161e1b] mb-1">Notes (Optional)</label>
                  <textarea
                    rows={2}
                    placeholder="Live chaat stalls, Jain dietary requests..."
                    value={formData.notes}
                    onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                    className="w-full text-xs px-3 py-2 rounded-lg border border-gray-200"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-[#0b3127] to-[#071f18] hover:from-[#c9a35e] hover:to-[#9a7536] text-[#e5c98d] hover:text-[#04130f] border border-[#c9a35e] font-bold text-xs uppercase tracking-wider py-3 rounded-lg transition-all shadow-md"
                >
                  Send Inquiry on WhatsApp
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
