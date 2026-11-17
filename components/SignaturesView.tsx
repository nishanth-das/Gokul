'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowLeft, Clock, ShieldCheck, Flame, Sparkles, ShoppingBag } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import TrustStrip from '@/components/TrustStrip';
import { useCart } from '@/context/CartContext';

interface SignatureItem {
  id: number;
  title: string;
  badge: string;
  sheet: number;
  price: number;
  image: string;
  tagline: string;
  story: string;
  ingredients: string[];
  pairing: string;
}

const SIGNATURE_DETAILS: SignatureItem[] = [
  {
    id: 1,
    title: 'Masala Dosa & Steamed Idli Sambar',
    badge: 'South Indian Hit',
    sheet: 2,
    price: 120,
    image: '/bestseller-dosa.webp',
    tagline: 'Fermented stone-ground batter, pure desi ghee roast & authentic sambar.',
    story:
      'Our dosas start with an authentic 18-hour fermented rice and urad dal batter stone-ground to silky consistency. Spread thinly over a seasoned iron tava and roasted golden with desi ghee, each crepe is rolled around a spiced mustard-tempered potato mash. We serve it alongside two pillowy steamed idlis, fresh coconut chutney, and piping hot aromatic sambar brewed with authentic drumsticks and whole spices.',
    ingredients: ['Fermented Rice-Lentil Batter', 'Desi Ghee', 'Spiced Potato Mash', 'Fresh Coconut Chutney', 'Traditional Sambar'],
    pairing: 'Pairs ideally with our freshly brewed Filter Coffee or Kadak Chai.',
  },
  {
    id: 2,
    title: 'Amritsari Chole Bhature',
    badge: 'Crowd Favourite',
    sheet: 8,
    price: 120,
    image: '/bestseller-chole.webp',
    tagline: 'Dark slow-simmered kabuli chana with two balloon-puffed golden bhature.',
    story:
      'Crafted in the authentic Punjabi tradition, our Kabuli chickpeas are steeped overnight with black tea and spices before slow-simmering in a deep, robust gravy seasoned with dried pomegranate seeds (anardana), roasted cumin, and ajwain. Accompanied by two hand-stretched, balloon-puffed bhature fried to golden crispness, tangy house-made mango pickle, and spiced onion rings.',
    ingredients: ['Overnight Kabuli Chana', 'Anardana (Dried Pomegranate)', 'Golden Balloon Bhature', 'House Pickled Chillies'],
    pairing: 'Best enjoyed with fresh sweet Punjabi Lassi or Salted Jeera Chaas.',
  },
  {
    id: 3,
    title: 'Paneer Butter Masala',
    badge: 'Royal Delicacy',
    sheet: 3,
    price: 299,
    image: '/bestseller-paneer.webp',
    tagline: 'Velvety tomato-cashew makhani gravy with fresh farm malai paneer.',
    story:
      'Our signature Paneer Butter Masala is a celebration of royal North Indian gastronomy. Tender cubes of fresh cottage cheese are gently folded into a velvety, slow-simmered gravy of vine-ripened tomatoes, whole cardamom, creamy cashew paste, and generous butter. Finished with roasted kasuri methi (fenugreek leaves) and a swirl of fresh farm cream.',
    ingredients: ['Fresh Malai Paneer', 'Vine Tomatoes', 'Cashew Cream', 'Pure Butter', 'Hand-rubbed Kasuri Methi'],
    pairing: 'Pairs majestically with Clay Tandoori Butter Naan or Laccha Paratha.',
  },
  {
    id: 4,
    title: 'Hyderabadi Dum Biryani',
    badge: 'Dum Speciality',
    sheet: 5,
    price: 320,
    image: '/bestseller-biryani.webp',
    tagline: 'Aged long-grain basmati layered with seasonal veggies & saffron milk.',
    story:
      'A masterpiece of slow-cooking patience. We layer extra-long grain aged basmati rice with spiced garden-fresh vegetables, paneer cubes, saffron-infused dairy milk, fresh mint leaves, and caramelized golden onions. Sealed with dough in a heavy handi and dum-cooked on low charcoal embers, ensuring every grain absorbs deep aromatic essence.',
    ingredients: ['Aged Long-Grain Basmati', 'Pure Saffron Milk', 'Garden Vegetables', 'Caramelized Crispy Onions', 'Fresh Mint'],
    pairing: 'Served with fresh chilled Boondi Raita and tangy spicy Salan.',
  },
  {
    id: 5,
    title: 'Tandoori Aloo Tikka',
    badge: 'Clay Tandoor',
    sheet: 6,
    price: 249,
    image: '/bestseller-aloo.webp',
    tagline: 'Stuffed potatoes chargrilled in our authentic live clay tandoor.',
    story:
      'Selected potatoes are gently scooped and stuffed with seasoned cottage cheese, chopped cashews, and fresh herbs. Marinated in thick hung curd blended with mustard oil, Kashmiri degi mirch, and roasted spices, the skewers are lowered into our blistering clay tandoor until blistered with aromatic char.',
    ingredients: ['Selected Scooped Potatoes', 'Herb & Paneer Stuffing', 'Hung Curd Marinade', 'Clay Tandoor Chargrill'],
    pairing: 'Served with fresh mint-coriander dip and shredded tandoori salad.',
  },
  {
    id: 6,
    title: 'Traditional Litti Chokha',
    badge: 'Heritage Special',
    sheet: 8,
    price: 60,
    image: '/bestseller-litti.webp',
    tagline: 'Roasted whole-wheat dough balls filled with spiced sattu & dipped in desi ghee.',
    story:
      'Bringing authentic rustic Indian heritage to Agartala. Stuffed with roasted gram flour (sattu), ajwain, kalonji, crushed green chillies, and pungent mustard oil, the wheat littis are slow-baked to a firm crust and dipped generously in molten desi ghee. Accompanied by traditional chokha made from open-fire roasted brinjal, garlic, and ripe tomatoes.',
    ingredients: ['Roasted Gram Sattu', 'Stone-ground Wheat', 'Pure Molten Desi Ghee', 'Charred Brinjal Chokha'],
    pairing: 'Enjoyed alongside chilled spiced Buttermilk or fresh lime soda.',
  },
];

export default function SignaturesView() {
  const { cart, modifyQty, addToCart, setActiveSheet } = useCart();

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
            <span>Handcrafted Culinary Gems</span>
            <span className="inline-block w-1.5 h-1.5 rounded-full bg-[#c9a35e]" />
          </div>

          <h1 className="font-serif text-3xl sm:text-5xl font-bold text-white mb-3">
            Agartala&apos;s Iconic <span className="gold-text">Signatures</span>
          </h1>

          <p className="max-w-2xl mx-auto text-xs sm:text-sm text-emerald-100/75 leading-relaxed mb-6">
            Six time-tested vegetarian masterpieces that have made Gokul Veg Restaurant the top culinary destination in Agartala. Prepared with pure desi ghee, clay tandoor chargrilling, and uncompromised ingredient integrity.
          </p>

          <div className="flex flex-wrap justify-center gap-2 max-w-2xl mx-auto text-[11px]">
            <span className="bg-[#0b3127] border border-[#c9a35e]/50 text-[#e5c98d] px-3 py-1 rounded-full flex items-center gap-1.5">
              <ShieldCheck className="w-3.5 h-3.5 text-[#2ecc71]" />
              <span>Prepared with Fresh Garlic &amp; Onion</span>
            </span>
            <span className="bg-[#0b3127] border border-[#c9a35e]/50 text-[#e5c98d] px-3 py-1 rounded-full flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5 text-[#e5c98d]" />
              <span>Jain Customization Available</span>
            </span>
            <span className="bg-[#0b3127] border border-[#c9a35e]/50 text-[#e5c98d] px-3 py-1 rounded-full flex items-center gap-1.5">
              <Clock className="w-3.5 h-3.5 text-[#c9a35e]" />
              <span>20-30 Min Delivery (₹2,000+ • Selected Radius)</span>
            </span>
          </div>
        </div>
      </section>

      <TrustStrip />

      {/* Signature Deep Dive List */}
      <section className="py-10 sm:py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full flex-grow">
        <div className="space-y-12 sm:space-y-16">
          {SIGNATURE_DETAILS.map((item, idx) => {
            const isReversed = idx % 2 === 1;
            const qty = cart[item.id] || 0;

            return (
              <div
                key={item.id}
                className="bg-white border-2 border-[#c9a35e]/30 rounded-2xl sm:rounded-3xl p-5 sm:p-8 shadow-md hover:shadow-xl transition-all overflow-hidden"
              >
                <div className={`grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-10 items-center ${isReversed ? 'lg:grid-flow-dense' : ''}`}>
                  {/* Photo Column */}
                  <div className={`lg:col-span-5 ${isReversed ? 'lg:col-start-8' : ''}`}>
                    <div className="relative aspect-[4/3] rounded-2xl overflow-hidden border border-[#c9a35e]/30 bg-[#071f18] group">
                      <img
                        src={item.image}
                        alt={item.title}
                        loading="lazy"
                        decoding="async"
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                      <span className="absolute top-3 left-3 bg-[#071f18]/90 backdrop-blur-sm text-[#e5c98d] border border-[#c9a35e]/50 text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                        {item.badge}
                      </span>
                      <button
                        onClick={() => setActiveSheet(item.sheet)}
                        className="absolute bottom-3 right-3 bg-black/60 backdrop-blur-sm text-white/90 text-[10px] font-mono px-2.5 py-1 rounded border border-white/20 hover:border-[#c9a35e] transition-colors"
                      >
                        Sheet {item.sheet}
                      </button>
                    </div>
                  </div>

                  {/* Content Column */}
                  <div className={`lg:col-span-7 flex flex-col justify-between ${isReversed ? 'lg:col-start-1' : ''}`}>
                    <div>
                      <div className="flex items-center justify-between gap-3 mb-2 flex-wrap">
                        <h3 className="font-serif text-xl sm:text-2xl font-bold text-[#04130f]">
                          {item.title}
                        </h3>
                        <div className="price-display font-sans text-xl sm:text-2xl font-bold text-[#0b3127] tabular-nums tracking-tight">
                          ₹{item.price}/-
                        </div>
                      </div>

                      <p className="text-xs sm:text-sm text-[#9a7536] font-semibold mb-3">
                        {item.tagline}
                      </p>

                      <p className="text-xs sm:text-sm text-[#5e6b66] leading-relaxed mb-4">
                        {item.story}
                      </p>

                      {/* Ingredients */}
                      <div className="mb-4">
                        <span className="text-[11px] font-bold text-[#161e1b] uppercase tracking-wider block mb-1.5">
                          Key Ingredients &amp; Preparation:
                        </span>
                        <div className="flex flex-wrap gap-1.5">
                          {item.ingredients.map((ing, i) => (
                            <span
                              key={i}
                              className="text-[10px] sm:text-[11px] bg-[#faf7f0] border border-[#c9a35e]/30 text-[#04130f] px-2.5 py-1 rounded-lg font-medium"
                            >
                              {ing}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* Pairing recommendation */}
                      <div className="bg-[#faf7f0] border-l-2 border-[#c9a35e] p-2.5 sm:p-3 rounded-r-lg mb-5 text-[11px] sm:text-xs text-[#5e6b66]">
                        <strong className="text-[#04130f]">Chef&apos;s Recommendation:</strong> {item.pairing}
                      </div>
                    </div>

                    {/* Action Bar */}
                    <div className="flex items-center justify-between border-t border-gray-100 pt-4">
                      <span className="text-xs text-emerald-800 font-semibold flex items-center gap-1.5">
                        <span className="w-2 h-2 rounded-full bg-emerald-600" />
                        <span>100% Vegetarian</span>
                      </span>

                      {qty > 0 ? (
                        <div className="inline-flex items-center border border-[#c9a35e] bg-white rounded-full overflow-hidden shadow-sm">
                          <button
                            onClick={() => modifyQty(item.id, -1)}
                            className="w-9 h-9 flex items-center justify-center text-[#0b3127] font-bold hover:bg-[#c9a35e]/20 transition-colors text-base"
                            aria-label={`Decrease ${item.title}`}
                          >
                            −
                          </button>
                          <span className="min-w-[28px] text-center text-xs font-bold text-[#0b3127]">
                            {qty}
                          </span>
                          <button
                            onClick={() => modifyQty(item.id, 1)}
                            className="w-9 h-9 flex items-center justify-center text-[#0b3127] font-bold hover:bg-[#c9a35e]/20 transition-colors text-base"
                            aria-label={`Increase ${item.title}`}
                          >
                            +
                          </button>
                        </div>
                      ) : (
                        <button
                          onClick={() => addToCart(item.id)}
                          className="bg-[#0b3127] hover:bg-[#c9a35e] text-white hover:text-[#04130f] text-xs font-bold px-5 py-2.5 rounded-full transition-all flex items-center gap-1.5 uppercase tracking-wider shadow-sm"
                        >
                          <ShoppingBag className="w-3.5 h-3.5" />
                          <span>Add to Order Cart</span>
                        </button>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Explore Full Repertoire Banner */}
        <div className="mt-16 bg-gradient-to-r from-[#071f18] to-[#04130f] border-2 border-[#c9a35e]/40 rounded-2xl p-6 sm:p-10 text-white text-center shadow-xl">
          <h3 className="font-serif text-2xl sm:text-3xl font-bold mb-2">
            Hungry for More Delicious Creations?
          </h3>
          <p className="max-w-xl mx-auto text-xs sm:text-sm text-emerald-100/75 leading-relaxed mb-6">
            Our full master menu includes 151+ distinct culinary dishes across 9 categories, complete with Indori morning snacks, Punjabi dal makhani, and traditional chaats.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <Link
              href="/menu"
              className="bg-[#c9a35e] hover:bg-[#e5c98d] text-[#04130f] font-bold text-xs uppercase tracking-wider px-6 py-3 rounded-full transition-all shadow-gold"
            >
              Explore All 151 Dishes
            </Link>
            <Link
              href="/contact"
              className="bg-transparent hover:bg-white/10 text-white border border-[#c9a35e]/50 font-bold text-xs uppercase tracking-wider px-6 py-3 rounded-full transition-all"
            >
              Table Reservations &amp; Directions
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
