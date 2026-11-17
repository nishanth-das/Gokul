'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import {
  ArrowLeft,
  MapPin,
  Phone,
  Clock,
  Navigation,
  MessageCircle,
  ShieldCheck,
  Truck,
  Calendar,
} from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import TrustStrip from '@/components/TrustStrip';

export default function ContactView() {
  const [inquiryType, setInquiryType] = useState('Table Reservation');
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [guests, setGuests] = useState('2-4 Guests');
  const [message, setMessage] = useState('');

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const text = `*${inquiryType.toUpperCase()} - GOKUL VEG RESTAURANT*
----------------------------------------
*Name:* ${name || 'Guest'}
*Phone:* ${phone}
*Type:* ${inquiryType}
*Date:* ${date || 'Today'}
*Time:* ${time || 'Immediate'}
*Party Size:* ${guests}
*Notes:* ${message || 'Standard vegetarian dining'}
----------------------------------------
Please confirm my reservation / inquiry.`;

    const url = `https://wa.me/918732024422?text=${encodeURIComponent(text)}`;
    window.open(url, '_blank');
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
            <span>Central Agartala Location</span>
            <span className="inline-block w-1.5 h-1.5 rounded-full bg-[#c9a35e]" />
          </div>

          <h1 className="font-serif text-3xl sm:text-5xl font-bold text-white mb-3">
            Hours &amp; <span className="gold-text">Directions</span>
          </h1>

          <p className="max-w-2xl mx-auto text-xs sm:text-sm text-emerald-100/75 leading-relaxed mb-6">
            Located on prominent Chitta Ranjan Road in the heart of Agartala. Drop in for morning breakfast, family lunch, evening chaat, or order express delivery right to your doorstep.
          </p>

          <div className="flex flex-wrap justify-center gap-2 max-w-2xl mx-auto text-[11px]">
            <span className="bg-[#0b3127] border border-[#c9a35e]/50 text-[#e5c98d] px-3 py-1 rounded-full flex items-center gap-1.5">
              <MapPin className="w-3.5 h-3.5 text-[#e5c98d]" />
              <span>Chitta Ranjan Road, Agartala</span>
            </span>
            <span className="bg-[#0b3127] border border-[#c9a35e]/50 text-[#e5c98d] px-3 py-1 rounded-full flex items-center gap-1.5">
              <Clock className="w-3.5 h-3.5 text-[#2ecc71]" />
              <span>Open 7 Days (6 AM – 10:30 PM)</span>
            </span>
            <span className="bg-[#0b3127] border border-[#c9a35e]/50 text-[#e5c98d] px-3 py-1 rounded-full flex items-center gap-1.5">
              <Truck className="w-3.5 h-3.5 text-[#c9a35e]" />
              <span>20-30 Min Delivery (₹2,000+ • Selected Radius)</span>
            </span>
          </div>
        </div>
      </section>

      <TrustStrip />

      {/* Main Content */}
      <section className="py-12 sm:py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full flex-grow">
        {/* Contact Cards Row */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {/* Card 1: Address */}
          <div className="bg-white border border-[#c9a35e]/30 rounded-2xl p-6 shadow-sm">
            <div className="w-12 h-12 rounded-xl bg-emerald-50 border border-emerald-200 flex items-center justify-center text-emerald-800 mb-4">
              <MapPin className="w-6 h-6" />
            </div>
            <h3 className="font-serif text-lg font-bold text-[#04130f] mb-1.5">
              Our Location
            </h3>
            <p className="text-xs text-[#5e6b66] leading-relaxed mb-4">
              Chitta Ranjan Road, Agartala, Tripura - 799001 (Near Battala / Central City Market).
            </p>
            <a
              href="https://share.google/M9WrsvWS1dkh5skPU"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-xs text-[#0b3127] font-bold hover:text-[#c9a35e] transition-colors"
            >
              <Navigation className="w-3.5 h-3.5" />
              <span>Open in Google Maps</span>
            </a>
          </div>

          {/* Card 2: Contact Numbers */}
          <div className="bg-white border border-[#c9a35e]/30 rounded-2xl p-6 shadow-sm">
            <div className="w-12 h-12 rounded-xl bg-amber-50 border border-amber-200 flex items-center justify-center text-amber-800 mb-4">
              <Phone className="w-6 h-6" />
            </div>
            <h3 className="font-serif text-lg font-bold text-[#04130f] mb-1.5">
              Call &amp; WhatsApp
            </h3>
            <p className="text-xs text-[#5e6b66] leading-relaxed mb-4">
              Reach our restaurant floor desk for immediate orders, table bookings, or takeaway packaging.
            </p>
            <div className="space-y-1.5">
              <a
                href="tel:+918732024422"
                className="block text-sm font-bold text-[#04130f] hover:text-[#c9a35e] transition-colors"
              >
                +91 8732-024422
              </a>
              <a
                href="https://wa.me/918732024422"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-xs text-[#25d366] font-bold hover:underline"
              >
                <MessageCircle className="w-3.5 h-3.5" />
                <span>Chat on WhatsApp</span>
              </a>
            </div>
          </div>

          {/* Card 3: Operating Hours */}
          <div className="bg-white border border-[#c9a35e]/30 rounded-2xl p-6 shadow-sm">
            <div className="w-12 h-12 rounded-xl bg-purple-50 border border-purple-200 flex items-center justify-center text-purple-800 mb-4">
              <Clock className="w-6 h-6" />
            </div>
            <h3 className="font-serif text-lg font-bold text-[#04130f] mb-1.5">
              Daily Service Hours
            </h3>
            <ul className="text-xs text-[#5e6b66] space-y-1.5">
              <li className="flex justify-between border-b border-gray-100 pb-1">
                <span>Breakfast:</span>
                <strong className="text-[#04130f]">6:00 AM – 10:30 AM</strong>
              </li>
              <li className="flex justify-between border-b border-gray-100 pb-1">
                <span>Lunch &amp; Dinner:</span>
                <strong className="text-[#04130f]">11:00 AM – 10:30 PM</strong>
              </li>
              <li className="flex justify-between border-b border-gray-100 pb-1">
                <span>4 PM Chaat Bazaar:</span>
                <strong className="text-[#04130f]">4:00 PM – 9:30 PM</strong>
              </li>
              <li className="flex justify-between pt-0.5 text-[#9a7536] font-semibold">
                <span>Working Days:</span>
                <span>Open All 7 Days</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Map & Landmark Directions */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-12 items-start">
          {/* Map Column */}
          <div className="lg:col-span-7 bg-white border-2 border-[#c9a35e]/30 rounded-2xl p-4 shadow-sm overflow-hidden">
            <h3 className="font-serif text-lg font-bold text-[#04130f] mb-2 px-1">
              Interactive Map
            </h3>
            <div className="w-full h-80 sm:h-96 rounded-xl overflow-hidden border border-gray-200 relative">
              <iframe
                title="Gokul Veg Restaurant Location Map"
                src="https://maps.google.com/maps?q=Gokul+Veg+Restaurant,+Chitta+Ranjan+Rd,+Agartala,+Tripura+799001&t=&z=16&ie=UTF8&iwloc=&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
            <div className="mt-3 px-1 flex items-center justify-between text-xs text-[#5e6b66]">
              <span>Chitta Ranjan Road • Agartala</span>
              <a
                href="https://share.google/M9WrsvWS1dkh5skPU"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#0b3127] font-bold hover:underline"
              >
                Get Driving Directions →
              </a>
            </div>
          </div>

          {/* Landmarks Column */}
          <div className="lg:col-span-5 bg-white border border-[#c9a35e]/30 rounded-2xl p-6 shadow-sm">
            <h3 className="font-serif text-lg font-bold text-[#04130f] mb-3">
              Landmarks &amp; Transit Guide
            </h3>
            <div className="space-y-3.5 text-xs text-[#5e6b66]">
              <div className="border-l-2 border-[#c9a35e] pl-3 py-0.5">
                <h5 className="font-bold text-[#04130f] text-xs">From Ujjayanta Palace (~1.5 km)</h5>
                <p>Take Palace Compound Road towards Battala. Approximately 5-7 minutes by auto-rickshaw or car.</p>
              </div>

              <div className="border-l-2 border-[#c9a35e] pl-3 py-0.5">
                <h5 className="font-bold text-[#04130f] text-xs">From Battala Market (~800 m)</h5>
                <p>Head directly onto Chitta Ranjan Road. A brisk 3-minute drive or 8-minute walk.</p>
              </div>

              <div className="border-l-2 border-[#c9a35e] pl-3 py-0.5">
                <h5 className="font-bold text-[#04130f] text-xs">From Agartala Railway Station (~6 km)</h5>
                <p>Take Badharghat Main Road connecting to Central Agartala via HGB Road. Around 15-20 minutes by cab.</p>
              </div>

              <div className="border-l-2 border-[#c9a35e] pl-3 py-0.5">
                <h5 className="font-bold text-[#04130f] text-xs">From Maharaja Bir Bikram Airport (~12 km)</h5>
                <p>Direct cab transit via Airport Road and VIP Road into Chitta Ranjan Road. Around 25-30 minutes.</p>
              </div>
            </div>

            {/* Express delivery note */}
            <div className="mt-6 bg-[#faf7f0] border border-[#c9a35e]/30 rounded-xl p-3.5">
              <div className="flex items-center gap-2 text-[#0b3127] font-bold text-xs mb-1">
                <Truck className="w-4 h-4 text-[#9a7536]" />
                <span>Express Delivery Coverage</span>
              </div>
              <p className="text-[11px] text-[#5e6b66] leading-relaxed">
                20-30 min express delivery is available on orders of <strong>₹2,000+</strong> within our selected Agartala delivery radius. For orders below ₹2,000, takeaway pickup or standard delivery applies.
              </p>
            </div>
          </div>
        </div>

        {/* Table Reservation & Inquiry Form */}
        <div className="bg-gradient-to-br from-[#071f18] to-[#04130f] border-2 border-[#c9a35e]/40 rounded-3xl p-6 sm:p-10 text-white shadow-xl">
          <div className="max-w-2xl mx-auto">
            <div className="text-center mb-8">
              <div className="inline-flex items-center gap-1.5 text-xs font-bold tracking-widest uppercase text-[#e5c98d] mb-1">
                <Calendar className="w-3.5 h-3.5 text-[#c9a35e]" />
                <span>Direct Booking Desk</span>
              </div>
              <h3 className="font-serif text-2xl sm:text-3xl font-bold text-white mb-2">
                Reserve a Table or Inquire
              </h3>
              <p className="text-xs text-emerald-100/75 leading-relaxed">
                Planning a family dinner, anniversary, or special occasion? Fill out your details below and send your booking request directly to our restaurant manager on WhatsApp.
              </p>
            </div>

            <form onSubmit={handleFormSubmit} className="space-y-3.5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-[11px] font-bold text-emerald-100 mb-1">Your Name</label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Sourav Deb"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full text-xs px-3 py-2.5 rounded-xl border border-[#c9a35e]/30 bg-[#0b3127] text-white focus:outline-none focus:border-[#c9a35e]"
                  />
                </div>
                <div>
                  <label className="block text-[11px] font-bold text-emerald-100 mb-1">Phone Number</label>
                  <input
                    type="tel"
                    required
                    placeholder="e.g. +91 98765 43210"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="w-full text-xs px-3 py-2.5 rounded-xl border border-[#c9a35e]/30 bg-[#0b3127] text-white focus:outline-none focus:border-[#c9a35e]"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                <div>
                  <label className="block text-[11px] font-bold text-emerald-100 mb-1">Inquiry Type</label>
                  <select
                    value={inquiryType}
                    onChange={(e) => setInquiryType(e.target.value)}
                    className="w-full text-xs px-3 py-2.5 rounded-xl border border-[#c9a35e]/30 bg-[#0b3127] text-white focus:outline-none focus:border-[#c9a35e]"
                  >
                    <option>Table Reservation</option>
                    <option>Takeaway Pre-Order</option>
                    <option>Express Home Delivery</option>
                    <option>Feedback &amp; Inquiries</option>
                  </select>
                </div>

                <div>
                  <label className="block text-[11px] font-bold text-emerald-100 mb-1">Preferred Date</label>
                  <input
                    type="date"
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                    className="w-full text-xs px-3 py-2.5 rounded-xl border border-[#c9a35e]/30 bg-[#0b3127] text-white focus:outline-none focus:border-[#c9a35e]"
                  />
                </div>

                <div>
                  <label className="block text-[11px] font-bold text-emerald-100 mb-1">Preferred Time / Slot</label>
                  <input
                    type="time"
                    value={time}
                    onChange={(e) => setTime(e.target.value)}
                    className="w-full text-xs px-3 py-2.5 rounded-xl border border-[#c9a35e]/30 bg-[#0b3127] text-white focus:outline-none focus:border-[#c9a35e]"
                  />
                </div>
              </div>

              <div>
                <label className="block text-[11px] font-bold text-emerald-100 mb-1">Number of Guests</label>
                <select
                  value={guests}
                  onChange={(e) => setGuests(e.target.value)}
                  className="w-full text-xs px-3 py-2.5 rounded-xl border border-[#c9a35e]/30 bg-[#0b3127] text-white focus:outline-none focus:border-[#c9a35e]"
                >
                  <option>1-2 Guests</option>
                  <option>2-4 Guests</option>
                  <option>4-8 Guests</option>
                  <option>8-15 Guests (Family Feast)</option>
                  <option>15+ Guests (Private Area)</option>
                </select>
              </div>

              <div>
                <label className="block text-[11px] font-bold text-emerald-100 mb-1">Special Notes / Dietary Requirements</label>
                <textarea
                  rows={2}
                  placeholder="e.g. Jain food required, window booth preference, birthday celebration..."
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="w-full text-xs px-3 py-2 rounded-xl border border-[#c9a35e]/30 bg-[#0b3127] text-white focus:outline-none focus:border-[#c9a35e]"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-[#25d366] hover:bg-[#20ba59] text-white font-bold text-xs uppercase tracking-wider py-3 rounded-xl transition-all shadow-md flex items-center justify-center gap-2"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Confirm Booking via WhatsApp</span>
              </button>
            </form>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
