'use client';

import React, { useEffect } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import { RESTAURANT_CONFIG } from '@/data/menu-data';

interface LightboxModalProps {
  currentSheet: number | null;
  onClose: () => void;
  onChangeSheet: (newSheet: number) => void;
}

export default function LightboxModal({
  currentSheet,
  onClose,
  onChangeSheet,
}: LightboxModalProps) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!currentSheet) return;
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowLeft') {
        const prev = currentSheet === 1 ? 11 : currentSheet - 1;
        onChangeSheet(prev);
      }
      if (e.key === 'ArrowRight') {
        const next = currentSheet === 11 ? 1 : currentSheet + 1;
        onChangeSheet(next);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [currentSheet, onClose, onChangeSheet]);

  if (!currentSheet) return null;

  const sheetData = RESTAURANT_CONFIG.gallery.find((g) => g.num === currentSheet);

  return (
    <div
      onClick={onClose}
      className="fixed inset-0 z-50 bg-[#04130f]/95 backdrop-blur-md flex items-center justify-center p-4 sm:p-6"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="relative max-w-5xl w-full flex flex-col items-center"
      >
        <button
          onClick={onClose}
          className="absolute -top-12 right-0 text-white hover:text-[#c9a35e] p-2 transition-colors"
          aria-label="Close Lightbox"
        >
          <X className="w-8 h-8" />
        </button>

        <div className="w-full max-h-[75vh] flex items-center justify-center overflow-hidden rounded-2xl border-2 border-[#c9a35e] bg-black shadow-2xl">
          <img
            src={`/${currentSheet}.webp`}
            alt={sheetData?.title || `Menu Sheet ${currentSheet}`}
            className="max-h-[75vh] w-auto object-contain"
          />
        </div>

        <div className="w-full flex items-center justify-between mt-4 text-white">
          <button
            onClick={() => onChangeSheet(currentSheet === 1 ? 11 : currentSheet - 1)}
            className="inline-flex items-center gap-1.5 bg-[#c9a35e]/20 hover:bg-[#c9a35e] text-[#e5c98d] hover:text-[#04130f] border border-[#c9a35e] px-4 py-2 rounded-full text-xs font-bold transition-all"
          >
            <ChevronLeft className="w-4 h-4" />
            <span>Previous</span>
          </button>

          <div className="text-center px-4">
            <h4 className="font-serif text-base sm:text-lg font-bold text-[#e5c98d]">
              {sheetData?.title}
            </h4>
            <p className="text-xs text-emerald-100/70 hidden sm:block">
              {sheetData?.desc}
            </p>
            <span className="text-[10px] text-[#c9a35e] font-semibold">
              {currentSheet} of 11
            </span>
          </div>

          <button
            onClick={() => onChangeSheet(currentSheet === 11 ? 1 : currentSheet + 1)}
            className="inline-flex items-center gap-1.5 bg-[#c9a35e]/20 hover:bg-[#c9a35e] text-[#e5c98d] hover:text-[#04130f] border border-[#c9a35e] px-4 py-2 rounded-full text-xs font-bold transition-all"
          >
            <span>Next</span>
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
}

