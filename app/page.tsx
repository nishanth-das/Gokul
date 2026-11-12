'use client';

import React, { useState } from 'react';
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
import FloatingPlateBar from '@/components/FloatingPlateBar';
import MobileBottomNav from '@/components/MobileBottomNav';
import CartDrawer from '@/components/CartDrawer';
import LightboxModal from '@/components/LightboxModal';

export default function HomePage() {
  const [cart, setCart] = useState<Record<number, number>>({});
  const [cartOpen, setCartOpen] = useState(false);
  const [activeSheet, setActiveSheet] = useState<number | null>(null);

  const handleModifyQty = (itemId: number, delta: number) => {
    setCart((prev) => {
      const current = prev[itemId] || 0;
      const updated = current + delta;
      if (updated <= 0) {
        const copy = { ...prev };
        delete copy[itemId];
        return copy;
      }
      return { ...prev, [itemId]: updated };
    });
  };

  const handleClearCart = () => setCart({});

  const cartTotalCount = Object.values(cart).reduce((a, b) => a + b, 0);

  return (
    <main className="min-h-screen bg-[#faf7f0] text-[#161e1b] flex flex-col pb-28 lg:pb-0">
      <Navbar
        cartCount={cartTotalCount}
        onOpenCart={() => setCartOpen(true)}
      />

      <Hero
        onOpenSheet={(sheetNum) => setActiveSheet(sheetNum)}
      />

      <TrustStrip />

      <LegacyStory onOpenSheet={(sheetNum) => setActiveSheet(sheetNum)} />

      <SignatureJewels
        onOpenSheet={(sheetNum) => setActiveSheet(sheetNum)}
        onAddItem={(itemId) => handleModifyQty(itemId, 1)}
      />

      <MasterMenu
        cart={cart}
        onModifyQty={handleModifyQty}
        onOpenSheet={(sheetNum) => setActiveSheet(sheetNum)}
      />

      <MenuBookGallery onOpenSheet={(sheetNum) => setActiveSheet(sheetNum)} />

      <BanquetsSection />

      <Testimonials />

      <GalleryGlimpse />

      <HoursLocation />

      <Footer />

      <FloatingPlateBar cart={cart} onOpenCart={() => setCartOpen(true)} />

      <MobileBottomNav
        cart={cart}
        onOpenCart={() => setCartOpen(true)}
      />

      <CartDrawer
        isOpen={cartOpen}
        onClose={() => setCartOpen(false)}
        cart={cart}
        onModifyQty={handleModifyQty}
        onClearCart={handleClearCart}
      />

      <LightboxModal
        currentSheet={activeSheet}
        onClose={() => setActiveSheet(null)}
        onChangeSheet={(num) => setActiveSheet(num)}
      />
    </main>
  );
}
