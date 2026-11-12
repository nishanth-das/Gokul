import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  metadataBase: new URL('https://gokulveg.pages.dev'),
  title: 'Gokul Veg Restaurant | Royal Vegetarian Dining | Agartala',
  description: 'ISO 9001:2015 & FSSAI certified premier vegetarian restaurant in Agartala. 150+ delicacies, clay tandoor starters, royal paneer specialities, and 20-30 min express delivery on orders ₹2,000+ within selected radius.',
  keywords: ['Gokul Veg Restaurant', 'Agartala veg restaurant', 'veg restaurant Agartala', 'Tripura veg restaurant', 'Shaam Savera', 'vegetarian banquets', 'chaat bazaar'],
  authors: [{ name: 'Local Rank India', url: 'https://localrankindia.com/' }],
  creator: 'Local Rank India',
  publisher: 'Local Rank India',
  openGraph: {
    title: 'Gokul Veg Restaurant | Royal Vegetarian Dining | Agartala',
    description: 'ISO 9001:2015 & FSSAI certified premier vegetarian restaurant in Agartala. 150+ delicacies with 20-30 min delivery on orders ₹2,000+ within selected radius.',
    url: 'https://gokulveg.pages.dev',
    siteName: 'Gokul Veg Restaurant',
    images: [{ url: '/1.webp' }],
    locale: 'en_IN',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.png" type="image/png" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,600;0,700;0,800;1,600&family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap"
          rel="stylesheet"
        />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Restaurant',
              name: 'Gokul Veg Restaurant',
              image: '/gokul-logo.webp',
              logo: '/gokul-logo.webp',
              address: {
                '@type': 'PostalAddress',
                streetAddress: 'Chitta Ranjan Road',
                addressLocality: 'Agartala',
                addressRegion: 'Tripura',
                postalCode: '799001',
                addressCountry: 'IN',
              },
              geo: {
                '@type': 'GeoCoordinates',
                latitude: 23.8315,
                longitude: 91.2868,
              },
              telephone: '+918732024422',
              servesCuisine: ['North Indian', 'South Indian', 'Vegetarian', 'Chaat', 'Tandoori'],
              priceRange: '₹20 - ₹399',
            }),
          }}
        />
      </head>
      <body className="font-sans bg-[#faf7f0] text-[#161e1b] antialiased selection:bg-[#c9a35e] selection:text-[#04130f]">
        {children}
      </body>
    </html>
  );
}
