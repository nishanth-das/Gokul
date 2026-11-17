'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';
import { MENU_ITEMS } from '@/data/menu-data';
import CartDrawer from '@/components/CartDrawer';
import FloatingPlateBar from '@/components/FloatingPlateBar';
import MobileBottomNav from '@/components/MobileBottomNav';
import LightboxModal from '@/components/LightboxModal';

interface CartContextType {
  cart: Record<number, number>;
  cartCount: number;
  totalAmount: number;
  isCartOpen: boolean;
  setIsCartOpen: (open: boolean) => void;
  openCart: () => void;
  closeCart: () => void;
  modifyQty: (itemId: number, delta: number) => void;
  addToCart: (itemId: number) => void;
  clearCart: () => void;
  activeSheet: number | null;
  setActiveSheet: (sheet: number | null) => void;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [cart, setCart] = useState<Record<number, number>>({});
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [activeSheet, setActiveSheet] = useState<number | null>(null);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    try {
      const saved = localStorage.getItem('gokul_cart');
      if (saved) {
        setCart(JSON.parse(saved));
      }
    } catch {
      // ignore
    }
  }, []);

  useEffect(() => {
    if (isMounted) {
      try {
        localStorage.setItem('gokul_cart', JSON.stringify(cart));
      } catch {
        // ignore
      }
    }
  }, [cart, isMounted]);

  const modifyQty = (itemId: number, delta: number) => {
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

  const addToCart = (itemId: number) => {
    modifyQty(itemId, 1);
  };

  const clearCart = () => setCart({});
  const openCart = () => setIsCartOpen(true);
  const closeCart = () => setIsCartOpen(false);

  const cartCount = Object.values(cart).reduce((a, b) => a + b, 0);
  const totalAmount = Object.entries(cart).reduce((sum, [idStr, qty]) => {
    const item = MENU_ITEMS.find((i) => i.id === parseInt(idStr));
    return sum + (item ? item.price * qty : 0);
  }, 0);

  return (
    <CartContext.Provider
      value={{
        cart,
        cartCount,
        totalAmount,
        isCartOpen,
        setIsCartOpen,
        openCart,
        closeCart,
        modifyQty,
        addToCart,
        clearCart,
        activeSheet,
        setActiveSheet,
      }}
    >
      {children}
      <CartDrawer
        isOpen={isCartOpen}
        onClose={closeCart}
        cart={cart}
        onModifyQty={modifyQty}
        onClearCart={clearCart}
      />
      <FloatingPlateBar cart={cart} onOpenCart={openCart} />
      <MobileBottomNav cart={cart} onOpenCart={openCart} />
      <LightboxModal
        currentSheet={activeSheet}
        onClose={() => setActiveSheet(null)}
        onChangeSheet={(num) => setActiveSheet(num)}
      />
    </CartContext.Provider>
  );
}

export function useCart() {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
}
