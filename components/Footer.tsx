import React from 'react';
import { MapPin, Phone, Clock } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-[#04120e] text-[#c0cfc8] border-t-2 border-[#c9a35e]/30 pt-10 pb-20 lg:pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-8 mb-10">
          <div className="lg:col-span-5">
            <div className="mb-3">
              <img
                src="/gokul-logo.png"
                alt="Gokul Veg Restaurant"
                className="h-10 w-auto object-contain drop-shadow-[0_0_8px_rgba(255,255,255,0.35)]"
              />
            </div>
            
            <p className="text-xs text-emerald-100/70 leading-relaxed mb-4 max-w-sm">
              Agartala’s premier sanctuary for 151+ vegetarian delicacies, live clay tandoor, and 4 PM Chaat Bazaar.
            </p>

            <div className="flex flex-wrap gap-2 text-[10px] font-semibold">
              <span className="bg-[#c9a35e]/15 text-[#e5c98d] border border-[#c9a35e]/30 px-2.5 py-0.5 rounded">
                ISO 9001:2015
              </span>
              <span className="bg-[#c9a35e]/15 text-[#e5c98d] border border-[#c9a35e]/30 px-2.5 py-0.5 rounded">
                FSSAI: 22526051001035
              </span>
            </div>
          </div>

          <div className="lg:col-span-3">
            <h5 className="font-serif text-xs font-bold text-white uppercase tracking-wider mb-3 border-l-2 border-[#c9a35e] pl-2">
              Menu Categories
            </h5>
            <ul className="space-y-1.5 text-xs text-emerald-100/70">
              <li><a href="#menu" className="hover:text-[#e5c98d] transition-colors">Breakfast (6-10 AM)</a></li>
              <li><a href="#menu" className="hover:text-[#e5c98d] transition-colors">Tandoori Starters</a></li>
              <li><a href="#menu" className="hover:text-[#e5c98d] transition-colors">Paneer Specialities</a></li>
              <li><a href="#menu" className="hover:text-[#e5c98d] transition-colors">Chaat Bazaar (4 PM+)</a></li>
            </ul>
          </div>

          <div className="lg:col-span-4">
            <h5 className="font-serif text-xs font-bold text-white uppercase tracking-wider mb-3 border-l-2 border-[#c9a35e] pl-2">
              Quick Contact
            </h5>
            <div className="space-y-2 text-xs text-emerald-100/70">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-[#c9a35e] shrink-0 mt-0.5" />
                <span>Chitta Ranjan Road, Agartala, Tripura</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-[#c9a35e] shrink-0" />
                <a href="tel:+918732024422" className="text-white hover:text-[#e5c98d] font-bold">
                  +91 8732-024422
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-[#c9a35e] shrink-0" />
                <span>20 - 30 Mins Express Dispatch</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-[#c9a35e]/20 pt-6 flex flex-col sm:flex-row items-center justify-between text-[11px] text-emerald-200/60 gap-3">
          <div>© {new Date().getFullYear()} Gokul Veg Restaurant. All rights reserved.</div>
          <div>
            Website made by{' '}
            <a
              href="https://localrankindia.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#e5c98d] hover:text-white font-semibold transition-colors underline underline-offset-2"
            >
              Local Rank India
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
