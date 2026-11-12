import type { Metadata } from 'next';
import GalleryView from '@/components/GalleryView';

export const metadata: Metadata = {
  title: 'Photo Gallery | Gokul Veg Restaurant | Agartala',
  description:
    'Explore photos of Gokul Veg Restaurant in Agartala — AC dining hall, royal vegetarian thalis, clay tandoor starters, 4 PM Chaat Bazaar, and traditional Indian sweets.',
};

export default function GalleryPage() {
  return <GalleryView />;
}

