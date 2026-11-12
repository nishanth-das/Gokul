import React from 'react';
import { Clock, Sparkles } from 'lucide-react';

export default function TrustStrip() {
  return (
    <div className="bg-white border-b border-[#c9a35e]/20 py-5 sm:py-6 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          <div className="flex flex-col sm:flex-row items-center sm:items-center text-center sm:text-left gap-2 sm:gap-3 p-1.5 sm:p-2">
            <div className="w-12 h-11 sm:w-14 sm:h-12 rounded-xl bg-white border border-gray-200/80 shadow-xs flex items-center justify-center shrink-0 p-1">
              <img
                src="/iso-9001-logo.webp"
                alt="ISO 9001:2015 Certified"
                className="w-full h-full object-contain"
              />
            </div>
            <div>
              <h5 className="font-bold text-xs sm:text-sm text-[#161e1b] leading-tight">ISO 9001:2015</h5>
              <span className="text-[10px] sm:text-xs text-[#5e6b66] block leading-tight mt-0.5">Certified Hygiene</span>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row items-center sm:items-center text-center sm:text-left gap-2 sm:gap-3 p-1.5 sm:p-2">
            <div className="w-14 h-11 sm:w-16 sm:h-12 rounded-xl bg-white border border-gray-200/80 shadow-xs flex items-center justify-center shrink-0 p-1.5">
              <img
                src="/fssai-logo.webp"
                alt="FSSAI Certified"
                className="w-full h-full object-contain"
              />
            </div>
            <div>
              <h5 className="font-bold text-xs sm:text-sm text-[#161e1b] leading-tight">FSSAI Certified</h5>
              <span className="text-[10px] sm:text-xs font-medium text-[#5e6b66] block leading-tight mt-0.5">Lic: 22526051001035</span>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row items-center sm:items-center text-center sm:text-left gap-2 sm:gap-3 p-1.5 sm:p-2">
            <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-xl bg-[#c9a35e]/15 border border-[#c9a35e]/30 flex items-center justify-center shrink-0">
              <Clock className="w-5 h-5 text-[#9a7536]" />
            </div>
            <div>
              <h5 className="font-bold text-xs sm:text-sm text-[#161e1b] leading-tight">20-30 Min Delivery</h5>
              <span className="text-[10px] sm:text-xs text-[#5e6b66] block leading-tight mt-0.5">Orders ₹2,000+ (Selected Radius)</span>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row items-center sm:items-center text-center sm:text-left gap-2 sm:gap-3 p-1.5 sm:p-2">
            <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-xl bg-[#c9a35e]/15 border border-[#c9a35e]/30 flex items-center justify-center shrink-0">
              <Sparkles className="w-5 h-5 text-[#9a7536]" />
            </div>
            <div>
              <h5 className="font-bold text-xs sm:text-sm text-[#161e1b] leading-tight">Desi Ghee Delicacies</h5>
              <span className="text-[10px] sm:text-xs text-[#5e6b66] block leading-tight mt-0.5">Fresh Dairy Sourcing</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
