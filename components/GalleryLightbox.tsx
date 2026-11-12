'use client';

import React, { useEffect } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import { GalleryItem } from '@/data/gallery-data';

interface GalleryLightboxProps {
  items: GalleryItem[];
  activeId: number | null;
  onClose: () => void;
  onSelect: (id: number) => void;
}

export default function GalleryLightbox({
  items,
  activeId,
  onClose,
  onSelect,
}: GalleryLightboxProps) {
  const currentIndex = items.findIndex((item) => item.id === activeId);
  const currentItem = currentIndex >= 0 ? items[currentIndex] : null;

  useEffect(() => {
    if (!currentItem) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowLeft') {
        const prevIdx = (currentIndex - 1 + items.length) % items.length;
        onSelect(items[prevIdx].id);
      }
      if (e.key === 'ArrowRight') {
        const nextIdx = (currentIndex + 1) % items.length;
        onSelect(items[nextIdx].id);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [currentItem, currentIndex, items, onClose, onSelect]);

  if (!currentItem) return null;

  const prevItem = items[(currentIndex - 1 + items.length) % items.length];
  const nextItem = items[(currentIndex + 1) % items.length];

  return (
    <div
      onClick={onClose}
      className="fixed inset-0 z-50 bg-[#04130f]/95 backdrop-blur-md flex items-center justify-center p-4 sm:p-6"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="relative max-w-4xl w-full flex flex-col items-center"
      >
        <button
          onClick={onClose}
          className="absolute -top-11 right-0 text-white hover:text-[#e5c98d] p-2 transition-colors"
          aria-label="Close Gallery Preview"
        >
          <X className="w-7 h-7" />
        </button>

        <div className="w-full max-h-[75vh] rounded-2xl overflow-hidden border-2 border-[#c9a35e]/70 bg-black shadow-2xl flex items-center justify-center">
          <img
            src={currentItem.image}
            alt={currentItem.title}
            className="max-h-[75vh] w-full object-contain"
          />
        </div>

        <div className="w-full flex items-center justify-between gap-4 mt-4 text-white">
          <button
            onClick={() => onSelect(prevItem.id)}
            className="inline-flex items-center gap-1.5 bg-[#c9a35e]/20 hover:bg-[#c9a35e] text-[#e5c98d] hover:text-[#04130f] border border-[#c9a35e] px-3.5 sm:px-4 py-2 rounded-full text-xs font-bold transition-all shrink-0"
          >
            <ChevronLeft className="w-4 h-4" />
            <span>Prev</span>
          </button>

          <span className="text-xs font-semibold tracking-wider text-[#e5c98d]">
            {currentIndex + 1} / {items.length}
          </span>

          <button
            onClick={() => onSelect(nextItem.id)}
            className="inline-flex items-center gap-1.5 bg-[#c9a35e]/20 hover:bg-[#c9a35e] text-[#e5c98d] hover:text-[#04130f] border border-[#c9a35e] px-3.5 sm:px-4 py-2 rounded-full text-xs font-bold transition-all shrink-0"
          >
            <span>Next</span>
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
}
