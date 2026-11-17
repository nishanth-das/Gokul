'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowLeft, Quote, ShieldCheck, Award, Heart, Sparkles, CheckCircle2 } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import TrustStrip from '@/components/TrustStrip';

export default function AboutView() {
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
            <span>Heritage, Passion &amp; Integrity</span>
            <span className="inline-block w-1.5 h-1.5 rounded-full bg-[#c9a35e]" />
          </div>

          <h1 className="font-serif text-3xl sm:text-5xl font-bold text-white mb-3">
            About <span className="gold-text">Gokul</span>
          </h1>

          <p className="max-w-2xl mx-auto text-xs sm:text-sm text-emerald-100/75 leading-relaxed">
            The story behind Agartala&apos;s premier vegetarian landmark on Chitta Ranjan Road — founded on the simple belief that authentic vegetarian food should be royal, honest, and crafted with whole-hearted dedication.
          </p>
        </div>
      </section>

      <TrustStrip />

      {/* Main Content */}
      <section className="py-12 sm:py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full flex-grow">
        {/* Founder Spotlight Card */}
        <div className="bg-[#071f18] border-2 border-[#c9a35e]/40 rounded-3xl p-6 sm:p-10 shadow-2xl mb-16 text-white relative overflow-hidden">
          <div className="absolute -right-20 -bottom-20 w-80 h-80 rounded-full bg-[#c9a35e]/10 blur-3xl pointer-events-none" />

          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center relative z-10">
            <div className="md:col-span-4 flex flex-col items-center">
              <div className="w-36 h-36 sm:w-44 sm:h-44 rounded-full p-1.5 bg-gradient-to-br from-[#e5c98d] via-[#c9a35e] to-[#9a7536] shadow-gold-lg mb-4">
                <img
                  src="/founder-sanjeeb.webp"
                  alt="Sanjeeb Sutradhar - Founder of Gokul Veg Restaurant"
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full rounded-full object-cover bg-[#04130f]"
                />
              </div>
              <h3 className="font-serif text-lg sm:text-xl font-bold text-[#e5c98d]">
                Sanjeeb Sutradhar
              </h3>
              <span className="text-xs text-emerald-100/70 font-medium">
                Founder, Gokul Veg Restaurant
              </span>
            </div>

            <div className="md:col-span-8">
              <div className="inline-flex items-center gap-1.5 text-xs font-bold tracking-[0.18em] uppercase text-[#e5c98d] mb-3">
                <Quote className="w-4 h-4 text-[#c9a35e]" />
                <span>Founder&apos;s Vision &amp; Philosophy</span>
              </div>

              <blockquote className="font-serif italic text-base sm:text-xl text-white leading-relaxed mb-5">
                &ldquo;Working with food has always been my deepest passion. Every recipe we craft and every plate we serve is made with honesty and care—bringing families in Agartala together over memorable vegetarian dining.&rdquo;
              </blockquote>

              <p className="text-xs sm:text-sm text-emerald-100/80 leading-relaxed mb-4">
                When Sanjeeb Sutradhar set out to build Gokul on Chitta Ranjan Road, he saw a distinct need in Agartala: a premier, family-friendly vegetarian restaurant that honoured traditional Indian culinary heritage without cutting corners on ingredients, hygiene, or customer service.
              </p>

              <p className="text-xs sm:text-sm text-emerald-100/80 leading-relaxed">
                Today, Gokul stands as a proud landmark in Tripura, welcoming hundreds of patrons daily for morning breakfasts, leisurely family thalis, festive banquet celebrations, and vibrant evening chaats.
              </p>
            </div>
          </div>
        </div>

        {/* 4 Pillars of Gokul */}
        <div className="mb-16">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <div className="inline-flex items-center gap-1.5 text-xs font-bold tracking-widest uppercase text-[#9a7536] mb-1">
              <span className="inline-block w-1.5 h-1.5 rounded-full bg-[#c9a35e]" />
              <span>Our Guiding Principles</span>
              <span className="inline-block w-1.5 h-1.5 rounded-full bg-[#c9a35e]" />
            </div>
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#04130f]">
              How We Cook &amp; Serve Every Single Day
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Pillar 1 */}
            <div className="bg-white border border-[#c9a35e]/30 rounded-2xl p-6 sm:p-7 shadow-sm">
              <div className="w-12 h-12 rounded-xl bg-emerald-50 border border-emerald-200 flex items-center justify-center text-emerald-800 mb-4">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <h3 className="font-serif text-lg font-bold text-[#04130f] mb-2">
                Honest Kitchen Transparency
              </h3>
              <p className="text-xs sm:text-sm text-[#5e6b66] leading-relaxed mb-3">
                As an authentic North &amp; South Indian vegetarian kitchen, we use fresh garlic and onions in our curries and gravies to achieve deep, rich, homestyle flavor.
              </p>
              <div className="bg-[#faf7f0] border-l-2 border-[#c9a35e] p-3 rounded-r-lg text-xs text-[#04130f] font-medium">
                <strong>Jain Options Available:</strong> For patrons observing Jain dietary vows, our chefs prepare dedicated dishes strictly without onion, garlic, or root vegetables upon request.
              </div>
            </div>

            {/* Pillar 2 */}
            <div className="bg-white border border-[#c9a35e]/30 rounded-2xl p-6 sm:p-7 shadow-sm">
              <div className="w-12 h-12 rounded-xl bg-amber-50 border border-amber-200 flex items-center justify-center text-amber-800 mb-4">
                <Sparkles className="w-6 h-6" />
              </div>
              <h3 className="font-serif text-lg font-bold text-[#04130f] mb-2">
                Pure Desi Ghee &amp; Dairy Integrity
              </h3>
              <p className="text-xs sm:text-sm text-[#5e6b66] leading-relaxed mb-3">
                We believe great Indian food cannot be faked with synthetic cooking oils. Our dals, parathas, halwas, and signature curries are enriched with pure golden desi ghee.
              </p>
              <p className="text-xs sm:text-sm text-[#5e6b66] leading-relaxed">
                Our malai paneer is sourced daily from verified dairies, ensuring a pillowy-soft texture that melts gracefully without rubberiness.
              </p>
            </div>

            {/* Pillar 3 */}
            <div className="bg-white border border-[#c9a35e]/30 rounded-2xl p-6 sm:p-7 shadow-sm">
              <div className="w-12 h-12 rounded-xl bg-red-50 border border-red-200 flex items-center justify-center text-red-800 mb-4">
                <Award className="w-6 h-6" />
              </div>
              <h3 className="font-serif text-lg font-bold text-[#04130f] mb-2">
                Live Clay Tandoor &amp; Slow Dum
              </h3>
              <p className="text-xs sm:text-sm text-[#5e6b66] leading-relaxed mb-3">
                Our kitchen houses authentic charcoal-fired clay tandoors. Our naans, tandoori rotis, soya chaap, and stuffed aloo tikkas are slapped directly against earthen walls for that irreplaceable smoky crispness.
              </p>
              <p className="text-xs sm:text-sm text-[#5e6b66] leading-relaxed">
                For our Hyderabadi Dum Biryani and Dal Makhani, we employ traditional slow handi simmering lasting hours over gentle heat.
              </p>
            </div>

            {/* Pillar 4 */}
            <div className="bg-white border border-[#c9a35e]/30 rounded-2xl p-6 sm:p-7 shadow-sm">
              <div className="w-12 h-12 rounded-xl bg-purple-50 border border-purple-200 flex items-center justify-center text-purple-800 mb-4">
                <Heart className="w-6 h-6" />
              </div>
              <h3 className="font-serif text-lg font-bold text-[#04130f] mb-2">
                Certified Hygiene &amp; Cleanliness
              </h3>
              <p className="text-xs sm:text-sm text-[#5e6b66] leading-relaxed mb-3">
                Gokul Veg Restaurant is certified under <strong>ISO 9001:2015</strong> for audited quality management and licensed by the Food Safety and Standards Authority of India (<strong>FSSAI: 22526051001035</strong>).
              </p>
              <p className="text-xs sm:text-sm text-[#5e6b66] leading-relaxed">
                From multi-stage reverse osmosis (RO) drinking water to sanitized preparation stations and temperature-controlled storage, hygiene is non-negotiable.
              </p>
            </div>
          </div>
        </div>

        {/* Certifications Strip */}
        <div className="bg-white border-2 border-[#c9a35e]/30 rounded-2xl p-6 sm:p-8 shadow-sm flex flex-col md:flex-row items-center justify-between gap-6 mb-16">
          <div className="flex items-center gap-4">
            <img
              src="/iso-9001-logo.webp"
              alt="ISO 9001:2015 Audited Hygiene"
              className="h-16 w-auto object-contain"
            />
            <img
              src="/fssai-logo.webp"
              alt="FSSAI Licensed Restaurant"
              className="h-14 w-auto object-contain"
            />
          </div>

          <div className="text-center md:text-left flex-1">
            <h4 className="font-serif text-base font-bold text-[#04130f] mb-1">
              Officially Certified &amp; Audited
            </h4>
            <p className="text-xs text-[#5e6b66]">
              ISO 9001:2015 Quality Management • FSSAI License: 22526051001035 • Central Agartala, Tripura.
            </p>
          </div>

          <Link
            href="/contact"
            className="bg-[#0b3127] hover:bg-[#c9a35e] text-white hover:text-[#04130f] text-xs font-bold px-6 py-3 rounded-full transition-all uppercase tracking-wider whitespace-nowrap"
          >
            Visit Our Restaurant
          </Link>
        </div>

        {/* Experience Highlights */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-gradient-to-br from-[#071f18] to-[#04130f] text-white p-6 rounded-2xl border border-[#c9a35e]/30">
            <h4 className="font-serif text-lg font-bold text-[#e5c98d] mb-2">AC Emerald Dining Sanctuary</h4>
            <p className="text-xs text-emerald-100/70 leading-relaxed mb-3">
              Thoughtfully air-conditioned family hall with emerald upholstered booths, warm brass accents, and serene ambient acoustics.
            </p>
            <span className="text-[11px] font-semibold text-[#c9a35e]">Open Daily: 6 AM – 10:30 PM</span>
          </div>

          <div className="bg-gradient-to-br from-[#071f18] to-[#04130f] text-white p-6 rounded-2xl border border-[#c9a35e]/30">
            <h4 className="font-serif text-lg font-bold text-[#e5c98d] mb-2">4 PM Chaat Bazaar</h4>
            <p className="text-xs text-emerald-100/70 leading-relaxed mb-3">
              Agartala&apos;s celebrated evening ritual. Giant crisp Raj Kachoris, live Pani Puri fountains, and buttery Mumbai Pav Bhaji.
            </p>
            <span className="text-[11px] font-semibold text-[#c9a35e]">Every Evening: 4 PM – 9:30 PM</span>
          </div>

          <div className="bg-gradient-to-br from-[#071f18] to-[#04130f] text-white p-6 rounded-2xl border border-[#c9a35e]/30">
            <h4 className="font-serif text-lg font-bold text-[#e5c98d] mb-2">Banquets &amp; Catering</h4>
            <p className="text-xs text-emerald-100/70 leading-relaxed mb-3">
              Host conferences, weddings, receptions, and parties from 50 to 500+ guests with custom live counters and packed meals.
            </p>
            <span className="text-[11px] font-semibold text-[#c9a35e]">Custom Packages Available</span>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
