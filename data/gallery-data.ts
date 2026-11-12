export interface GalleryItem {
  id: number;
  title: string;
  image: string;
  featuredOnHome?: boolean;
}

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: 1,
    title: 'AC Emerald Dining Sanctuary',
    image: '/gallery-ambience-hall.webp',
    featuredOnHome: true,
  },
  {
    id: 2,
    title: 'Grand Royal Veg Thali',
    image: '/gallery-royal-thali.webp',
    featuredOnHome: true,
  },
  {
    id: 3,
    title: 'Signature Raj Kachori',
    image: '/gallery-raj-kachori.webp',
    featuredOnHome: true,
  },
  {
    id: 4,
    title: 'Mumbai Butter Pav Bhaji',
    image: '/gallery-pav-bhaji.webp',
    featuredOnHome: true,
  },
  {
    id: 5,
    title: 'Dal Makhani & Butter Naan',
    image: '/gallery-dal-makhani.webp',
    featuredOnHome: true,
  },
  {
    id: 6,
    title: 'Warm Saffron Gulab Jamun',
    image: '/gallery-gulab-jamun.webp',
    featuredOnHome: true,
  },
  {
    id: 7,
    title: 'Evening Candlelit Feast',
    image: '/royal-feast-bg.webp',
  },
  {
    id: 8,
    title: 'Crispy Pani Puri & Jaljeera',
    image: '/gallery-pani-puri.webp',
  },
  {
    id: 9,
    title: 'South Indian Breakfast Platter',
    image: '/hero-dosa-idli.webp',
  },
  {
    id: 10,
    title: 'Chilled Dahi Bhalla Chaat',
    image: '/gallery-dahi-bhalla.webp',
  },
  {
    id: 11,
    title: 'Chargrilled Paneer Tikka',
    image: '/gallery-paneer-tikka.webp',
  },
  {
    id: 12,
    title: 'Artisanal Palak Paneer',
    image: '/gallery-palak-paneer.webp',
  },
  {
    id: 13,
    title: 'Ragda Samosa Chaat',
    image: '/gallery-samosa-chaat.webp',
  },
  {
    id: 14,
    title: 'Desi Ghee Gajar Ka Halwa',
    image: '/gallery-gajar-halwa.webp',
  },
  {
    id: 15,
    title: 'Fresh Brewed Masala Chai',
    image: '/gallery-masala-chai.webp',
  },
  {
    id: 16,
    title: 'Amritsari Chole Bhature',
    image: '/bestseller-chole.webp',
  },
];
