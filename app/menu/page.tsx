import type { Metadata } from 'next';
import MenuView from '@/components/MenuView';

export const metadata: Metadata = {
  title: 'Master Menu (151+ Pure Veg Dishes) | Gokul Veg Restaurant | Agartala',
  description:
    'Explore the complete 151+ vegetarian menu at Gokul Veg Restaurant on Chitta Ranjan Road, Agartala. Tandoori starters, paneer specialties, Indori breakfast, dal makhani, and 4 PM Chaat Bazaar. 20-30 min express delivery.',
};

export default function MenuPage() {
  return <MenuView />;
}
