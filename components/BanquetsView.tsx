'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import {
  ArrowLeft,
  Users,
  Building,
  Sparkles,
  Phone,
  MessageCircle,
  Clock,
  ShieldCheck,
  CheckCircle2,
  Utensils,
  Award,
} from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import TrustStrip from '@/components/TrustStrip';

export default function BanquetsView() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    eventType: 'Corporate Summit',
    guests: '50 - 100 Guests',
    date: '',
    packageTier: 'Gold Royal Feast Package',
    notes: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const text = `*BANQUET & CATERING INQUIRY - GOKUL*
----------------------------------------
*Organizer:* ${formData.name || 'Guest'}
*Contact:* ${formData.phone}
*Event Type:* ${formData.eventType}
*Expected Guests:* ${formData.guests}
*Preferred Package:* ${formData.packageTier}
*Target Date:* ${formData.date || 'To be confirmed'}
*Special Notes:* ${formData.notes || 'Vegetarian Catering with Live Counters'}
----------------------------------------
Please share customized royal banquet package rates.`;

    const whatsappUrl = `https://wa.me/918732024422?text=${encodeURIComponent(text)}`;
    window.open(whatsappUrl, '_blank');
  };

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
            <span>Royal Hospitality &amp; Grand Feasts</span>
            <span className="inline-block w-1.5 h-1.5 rounded-full bg-[#c9a35e]" />
          </div>

          <h1 className="font-serif text-3xl sm:text-5xl font-bold text-white mb-3">
            Banquets &amp; <span className="gold-text">Catering</span>
          </h1>

          <p className="max-w-2xl mx-auto text-xs sm:text-sm text-emerald-100/75 leading-relaxed mb-6">
            Full-service vegetarian catering for corporate conferences, wedding receptions, anniversaries, and family celebrations from 50 to 500+ guests. Live clay tandoor naans, authentic chaat counters, and spotless service across Agartala.
          </p>

          <div className="flex flex-wrap justify-center gap-2 max-w-2xl mx-auto text-[11px]">
            <span className="bg-[#0b3127] border border-[#c9a35e]/50 text-[#e5c98d] px-3 py-1 rounded-full flex items-center gap-1.5">
              <Users className="w-3.5 h-3.5 text-[#e5c98d]" />
              <span>50 to 500+ Guest Capacity</span>
            </span>
            <span className="bg-[#0b3127] border border-[#c9a35e]/50 text-[#e5c98d] px-3 py-1 rounded-full flex items-center gap-1.5">
              <ShieldCheck className="w-3.5 h-3.5 text-[#2ecc71]" />
              <span>ISO 9001:2015 &amp; FSSAI Certified</span>
            </span>
            <span className="bg-[#0b3127] border border-[#c9a35e]/50 text-[#e5c98d] px-3 py-1 rounded-full flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5 text-[#c9a35e]" />
              <span>Live Tandoor &amp; Chaat Stalls</span>
            </span>
          </div>
        </div>
      </section>

      <TrustStrip />

      {/* Main Content */}
      <section className="py-12 sm:py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full flex-grow">
        {/* Service Formats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 mb-16">
          <div className="bg-white border border-[#c9a35e]/30 rounded-2xl p-5 sm:p-6 shadow-sm hover:shadow-md transition-all">
            <div className="w-12 h-12 rounded-xl bg-emerald-50 border border-emerald-200 flex items-center justify-center text-emerald-800 mb-3.5">
              <Building className="w-6 h-6" />
            </div>
            <h3 className="font-serif text-base sm:text-lg font-bold text-[#04130f] mb-1.5">
              Emerald AC Banquet Hall
            </h3>
            <p className="text-xs text-[#5e6b66] leading-relaxed mb-3">
              Elegant climate-controlled hall accommodating 50 to 150 guests. Plush booths, ambient lighting, and dedicated staff for intimate celebrations.
            </p>
            <span className="text-[10px] font-bold text-[#9a7536] uppercase tracking-wider block">In-House Dining</span>
          </div>

          <div className="bg-white border border-[#c9a35e]/30 rounded-2xl p-5 sm:p-6 shadow-sm hover:shadow-md transition-all">
            <div className="w-12 h-12 rounded-xl bg-amber-50 border border-amber-200 flex items-center justify-center text-amber-800 mb-3.5">
              <Utensils className="w-6 h-6" />
            </div>
            <h3 className="font-serif text-base sm:text-lg font-bold text-[#04130f] mb-1.5">
              Corporate Lunch Boxes
            </h3>
            <p className="text-xs text-[#5e6b66] leading-relaxed mb-3">
              Hygienic multi-compartment executive thali boxes delivered hot to conferences, government offices, and seminars across Agartala.
            </p>
            <span className="text-[10px] font-bold text-[#9a7536] uppercase tracking-wider block">Timely Delivery</span>
          </div>

          <div className="bg-white border border-[#c9a35e]/30 rounded-2xl p-5 sm:p-6 shadow-sm hover:shadow-md transition-all">
            <div className="w-12 h-12 rounded-xl bg-purple-50 border border-purple-200 flex items-center justify-center text-purple-800 mb-3.5">
              <Sparkles className="w-6 h-6" />
            </div>
            <h3 className="font-serif text-base sm:text-lg font-bold text-[#04130f] mb-1.5">
              Live Interactive Stalls
            </h3>
            <p className="text-xs text-[#5e6b66] leading-relaxed mb-3">
              Live clay tandoors baking hot butter naans, live pani puri fountains, and sizzling pav bhaji counters that delight every guest.
            </p>
            <span className="text-[10px] font-bold text-[#9a7536] uppercase tracking-wider block">Crowd Delight</span>
          </div>

          <div className="bg-white border border-[#c9a35e]/30 rounded-2xl p-5 sm:p-6 shadow-sm hover:shadow-md transition-all">
            <div className="w-12 h-12 rounded-xl bg-red-50 border border-red-200 flex items-center justify-center text-red-800 mb-3.5">
              <Users className="w-6 h-6" />
            </div>
            <h3 className="font-serif text-base sm:text-lg font-bold text-[#04130f] mb-1.5">
              Grand Weddings (500+)
            </h3>
            <p className="text-xs text-[#5e6b66] leading-relaxed mb-3">
              Full outdoor buffet catering with royal brass display vessels, bespoke thali menus, and professional uniformed hospitality teams.
            </p>
            <span className="text-[10px] font-bold text-[#9a7536] uppercase tracking-wider block">Complete Setup</span>
          </div>
        </div>

        {/* Package Tiers */}
        <div className="mb-16">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <div className="inline-flex items-center gap-1.5 text-xs font-bold tracking-widest uppercase text-[#9a7536] mb-1">
              <span className="inline-block w-1.5 h-1.5 rounded-full bg-[#c9a35e]" />
              <span>Curated Event Menus</span>
              <span className="inline-block w-1.5 h-1.5 rounded-full bg-[#c9a35e]" />
            </div>
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#04130f]">
              Catering Packages for Every Occasion
            </h2>
            <p className="text-xs text-[#5e6b66] mt-2">
              Customized pricing tailored to your guest count, menu preferences, and event setup.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Silver Package */}
            <div className="bg-white border border-[#c9a35e]/30 rounded-2xl p-6 sm:p-7 shadow-sm flex flex-col justify-between">
              <div>
                <div className="text-[11px] font-bold uppercase tracking-widest text-[#9a7536] mb-1">Executive Standard</div>
                <h3 className="font-serif text-xl font-bold text-[#04130f] mb-2">Silver Banquet Package</h3>
                <div className="text-xs font-bold uppercase tracking-wider text-[#0b3127] bg-[#faf7f0] border border-[#c9a35e]/30 px-3 py-1.5 rounded-lg inline-block mb-4">
                  Customized Rates on Inquiry
                </div>
                <ul className="space-y-2 text-xs text-[#5e6b66] mb-6">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>1 Welcome Cooler Drink</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>2 Starters (Hara Bhara Kabab &amp; Veg Cutlet)</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>1 Royal Paneer Gravy (Paneer Butter Masala)</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>1 Seasonal Dry Vegetable Special</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>Yellow Dal Tadka &amp; Steamed Basmati Rice</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>Hot Butter Tandoori Rotis</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>1 Dessert (Warm Gulab Jamun)</span>
                  </li>
                </ul>
              </div>
              <button
                onClick={() => setFormData({ ...formData, packageTier: 'Silver Executive Package' })}
                className="w-full bg-[#faf7f0] hover:bg-[#0b3127] text-[#04130f] hover:text-white border border-[#c9a35e] font-bold text-xs py-2.5 rounded-xl transition-all"
              >
                Select Silver Package
              </button>
            </div>

            {/* Gold Package */}
            <div className="bg-gradient-to-b from-[#071f18] to-[#04130f] text-white border-2 border-[#c9a35e] rounded-2xl p-6 sm:p-7 shadow-gold-lg flex flex-col justify-between relative transform md:-translate-y-2">
              <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#c9a35e] text-[#04130f] text-[10px] font-bold uppercase tracking-wider px-3 py-0.5 rounded-full shadow">
                Most Popular
              </span>
              <div>
                <div className="text-[11px] font-bold uppercase tracking-widest text-[#e5c98d] mb-1">Royal Feast</div>
                <h3 className="font-serif text-xl font-bold text-white mb-2">Gold Royal Package</h3>
                <div className="text-xs font-bold uppercase tracking-wider text-[#e5c98d] bg-[#0b3127] border border-[#c9a35e]/50 px-3 py-1.5 rounded-lg inline-block mb-4">
                  Tailored Quote on Request
                </div>
                <ul className="space-y-2 text-xs text-emerald-100/80 mb-6">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#e5c98d] shrink-0" />
                    <span>2 Welcome Mocktails / Sweet Lassi</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#e5c98d] shrink-0" />
                    <span>3 Clay Tandoori Starters (Paneer Tikka, Chaap, Aloo)</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#e5c98d] shrink-0" />
                    <span>1 Live Chaat Counter (Pani Puri &amp; Papdi Chaat)</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#e5c98d] shrink-0" />
                    <span>2 Curries (Paneer Lababdar &amp; Malai Kofta)</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#e5c98d] shrink-0" />
                    <span>Dal Makhani &amp; Veg Hyderabadi Dum Biryani</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#e5c98d] shrink-0" />
                    <span>Live Naan Counter (Butter, Garlic &amp; Laccha)</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#e5c98d] shrink-0" />
                    <span>2 Desserts (Gulab Jamun &amp; Saffron Kheer)</span>
                  </li>
                </ul>
              </div>
              <button
                onClick={() => setFormData({ ...formData, packageTier: 'Gold Royal Feast Package' })}
                className="w-full bg-[#c9a35e] hover:bg-[#e5c98d] text-[#04130f] font-bold text-xs py-2.5 rounded-xl transition-all shadow"
              >
                Select Gold Package
              </button>
            </div>

            {/* Diamond Package */}
            <div className="bg-white border border-[#c9a35e]/30 rounded-2xl p-6 sm:p-7 shadow-sm flex flex-col justify-between">
              <div>
                <div className="text-[11px] font-bold uppercase tracking-widest text-[#9a7536] mb-1">Grand Celebration</div>
                <h3 className="font-serif text-xl font-bold text-[#04130f] mb-2">Diamond Imperial Buffet</h3>
                <div className="text-xs font-bold uppercase tracking-wider text-[#0b3127] bg-[#faf7f0] border border-[#c9a35e]/30 px-3 py-1.5 rounded-lg inline-block mb-4">
                  Bespoke Grand Feast Rates
                </div>
                <ul className="space-y-2 text-xs text-[#5e6b66] mb-6">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>Unlimited Welcome Mocktails &amp; Thandai</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>4 Clay Tandoor Starters with Dips</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>2 Live Counters (Live Tandoor &amp; 4 PM Chaat Bazaar)</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>3 Luxury Curries (Shahi Paneer, Dum Aloo, Veg Jalfrezi)</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>Slow-cooked Dal Makhani &amp; Saffron Dum Biryani</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>Complete Breads Selection (Naan, Kulcha, Missi)</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>3 Desserts (Rasmalai, Gulab Jamun &amp; Ice Cream)</span>
                  </li>
                </ul>
              </div>
              <button
                onClick={() => setFormData({ ...formData, packageTier: 'Diamond Imperial Package' })}
                className="w-full bg-[#faf7f0] hover:bg-[#0b3127] text-[#04130f] hover:text-white border border-[#c9a35e] font-bold text-xs py-2.5 rounded-xl transition-all"
              >
                Select Diamond Package
              </button>
            </div>
          </div>
        </div>

        {/* WhatsApp Quote Inquiry Form */}
        <div className="bg-white border-2 border-[#c9a35e]/30 rounded-3xl p-6 sm:p-10 shadow-lg">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-5">
              <div className="inline-flex items-center gap-1.5 text-xs font-bold tracking-widest uppercase text-[#9a7536] mb-2">
                <Clock className="w-3.5 h-3.5 text-[#c9a35e]" />
                <span>Instant Catering Consultation</span>
              </div>
              <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#04130f] mb-3">
                Request a Custom Banquet Quote
              </h3>
              <p className="text-xs sm:text-sm text-[#5e6b66] leading-relaxed mb-6">
                Tell us about your upcoming event in Agartala. Our banquet manager will review your guest count, preferred date, and menu requests, and send you a transparent customized quotation via WhatsApp.
              </p>

              <div className="space-y-3 text-xs text-[#04130f] font-semibold">
                <div className="flex items-center gap-2.5">
                  <Phone className="w-4 h-4 text-[#c9a35e]" />
                  <span>Direct Banquet Desk: +91 8732-024422</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <ShieldCheck className="w-4 h-4 text-emerald-600" />
                  <span>ISO 9001:2015 &amp; FSSAI Hygiene Audited</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <Sparkles className="w-4 h-4 text-[#9a7536]" />
                  <span>Dedicated Jain counters available upon request</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-7 bg-[#faf7f0] border border-[#c9a35e]/30 rounded-2xl p-5 sm:p-7">
              <form onSubmit={handleSubmit} className="space-y-3.5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-[11px] font-bold text-[#161e1b] mb-1">Your Name</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Debabrata Roy"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full text-xs px-3 py-2.5 rounded-xl border border-gray-200 bg-white focus:outline-none focus:border-[#c9a35e]"
                    />
                  </div>
                  <div>
                    <label className="block text-[11px] font-bold text-[#161e1b] mb-1">Phone Number</label>
                    <input
                      type="tel"
                      required
                      placeholder="e.g. +91 98765 43210"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full text-xs px-3 py-2.5 rounded-xl border border-gray-200 bg-white focus:outline-none focus:border-[#c9a35e]"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  <div>
                    <label className="block text-[11px] font-bold text-[#161e1b] mb-1">Event Type</label>
                    <select
                      value={formData.eventType}
                      onChange={(e) => setFormData({ ...formData, eventType: e.target.value })}
                      className="w-full text-xs px-3 py-2.5 rounded-xl border border-gray-200 bg-white focus:outline-none focus:border-[#c9a35e]"
                    >
                      <option>Corporate Summit</option>
                      <option>Wedding Reception</option>
                      <option>Birthday Party</option>
                      <option>Anniversary Celebration</option>
                      <option>Conference Lunch Box</option>
                      <option>Private Family Dinner</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-[11px] font-bold text-[#161e1b] mb-1">Guest Count</label>
                    <select
                      value={formData.guests}
                      onChange={(e) => setFormData({ ...formData, guests: e.target.value })}
                      className="w-full text-xs px-3 py-2.5 rounded-xl border border-gray-200 bg-white focus:outline-none focus:border-[#c9a35e]"
                    >
                      <option>25 - 50 Guests</option>
                      <option>50 - 100 Guests</option>
                      <option>100 - 200 Guests</option>
                      <option>200 - 350 Guests</option>
                      <option>350 - 500+ Guests</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-[11px] font-bold text-[#161e1b] mb-1">Event Date</label>
                    <input
                      type="date"
                      value={formData.date}
                      onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                      className="w-full text-xs px-3 py-2.5 rounded-xl border border-gray-200 bg-white focus:outline-none focus:border-[#c9a35e]"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-[11px] font-bold text-[#161e1b] mb-1">Preferred Package</label>
                  <input
                    type="text"
                    value={formData.packageTier}
                    onChange={(e) => setFormData({ ...formData, packageTier: e.target.value })}
                    className="w-full text-xs px-3 py-2.5 rounded-xl border border-gray-200 bg-white focus:outline-none focus:border-[#c9a35e]"
                  />
                </div>

                <div>
                  <label className="block text-[11px] font-bold text-[#161e1b] mb-1">Special Requirements &amp; Preferences</label>
                  <textarea
                    rows={2}
                    placeholder="e.g. Live chaat counter, Jain items needed, AC banquet hall required..."
                    value={formData.notes}
                    onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                    className="w-full text-xs px-3 py-2 rounded-xl border border-gray-200 bg-white focus:outline-none focus:border-[#c9a35e]"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-[#25d366] hover:bg-[#20ba59] text-white font-bold text-xs uppercase tracking-wider py-3 rounded-xl transition-all shadow-md flex items-center justify-center gap-2"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Send Catering Inquiry via WhatsApp</span>
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
