import type { Metadata } from 'next';
import ContactView from '@/components/ContactView';

export const metadata: Metadata = {
  title: 'Contact, Hours & Directions | Gokul Veg Restaurant | Agartala',
  description:
    'Find Gokul Veg Restaurant on Chitta Ranjan Road, Agartala, Tripura. Direct contact (+91 8732-024422), operating hours (6:00 AM – 10:30 PM), Google Maps directions, and 20-30 min express delivery information.',
};

export default function ContactPage() {
  return <ContactView />;
}
