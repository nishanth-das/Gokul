import React from 'react';
import { Star } from 'lucide-react';

export default function Testimonials() {
  const reviews = [
    {
      stars: 5,
      quote:
        'Gokul has set a new benchmark for vegetarian fine dining in Tripura. Their Shaam Savera is sheer poetry on a plate, and the Paneer Tikka came smoking hot from the clay tandoor. Exemplary hygiene!',
      author: 'Dr. Ananya Roy',
      role: 'Conference Delegate & Food Columnist',
    },
    {
      stars: 5,
      quote:
        'We booked Gokul for a 150-person corporate summit lunch on Chitta Ranjan Road. The food was delivered with Swiss precision—hot rotis, rich dal makhani, and outstanding packaging. Highly recommended!',
      author: 'Vikramaditya Debbarma',
      role: 'Regional Business Summit Organizer',
    },
    {
      stars: 5,
      quote:
        'The 4 PM Chaat Bazaar is heaven! The Raj Kachori is huge, stuffed with fresh curd and chutneys, and the Pani Puri water has that unmistakable fresh mint punch. Always fresh, hygienic, and full of authentic flavour.',
      author: 'Pooja Sen',
      role: 'Local Agartala Resident',
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 text-xs font-bold tracking-[0.15em] uppercase text-[#9a7536] mb-2">
            <span>♦</span>
            <span>Patron Accolades</span>
            <span>♦</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#04130f] mb-4">
            Praised by Food Lovers & Critics
          </h2>
          <div className="w-16 h-0.5 bg-[#c9a35e] mx-auto" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((rev, idx) => (
            <div
              key={idx}
              className="bg-[#faf7f0] border border-[#c9a35e]/30 rounded-2xl p-6 sm:p-8 shadow-sm flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center gap-1 text-amber-500 mb-4">
                  {[...Array(rev.stars)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                  ))}
                </div>
                <p className="text-xs sm:text-sm text-[#5e6b66] leading-relaxed italic mb-6">
                  "{rev.quote}"
                </p>
              </div>

              <div className="border-t border-[#c9a35e]/20 pt-4">
                <h5 className="font-bold text-[#0b3127] text-sm">{rev.author}</h5>
                <span className="text-[11px] text-[#9a7536] font-medium">{rev.role}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

