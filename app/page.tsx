'use client';

import React from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import TrustStrip from '@/components/TrustStrip';
import LegacyStory from '@/components/LegacyStory';
import SignatureJewels from '@/components/SignatureJewels';
import MasterMenu from '@/components/MasterMenu';
import MenuBookGallery from '@/components/MenuBookGallery';
import BanquetsSection from '@/components/BanquetsSection';
import Testimonials from '@/components/Testimonials';
import GalleryGlimpse from '@/components/GalleryGlimpse';
import HoursLocation from '@/components/HoursLocation';
import Footer from '@/components/Footer';
import { useCart } from '@/context/CartContext';

export default function HomePage() {
  const { cart, modifyQty, addToCart, setActiveSheet } = useCart();

  return (
    <main className="min-h-screen bg-[#faf7f0] text-[#161e1b] flex flex-col pb-28 lg:pb-0">
      <Navbar />

      <Hero onOpenSheet={(sheetNum) => setActiveSheet(sheetNum)} />

      <TrustStrip />

      <LegacyStory onOpenSheet={(sheetNum) => setActiveSheet(sheetNum)} />

      <SignatureJewels
        onOpenSheet={(sheetNum) => setActiveSheet(sheetNum)}
        onAddItem={(itemId) => addToCart(itemId)}
      />

      <MasterMenu
        cart={cart}
        onModifyQty={modifyQty}
        onOpenSheet={(sheetNum) => setActiveSheet(sheetNum)}
      />

      <MenuBookGallery onOpenSheet={(sheetNum) => setActiveSheet(sheetNum)} />

      <BanquetsSection />

      <Testimonials />

      <GalleryGlimpse />

      <HoursLocation />

      <Footer />
    </main>
  );
}
