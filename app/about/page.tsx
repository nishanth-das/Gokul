import type { Metadata } from 'next';
import AboutView from '@/components/AboutView';

export const metadata: Metadata = {
  title: 'About Us & Founder Sanjeeb Sutradhar | Gokul Veg Restaurant | Agartala',
  description:
    'Learn about Gokul Veg Restaurant on Chitta Ranjan Road, Agartala. Founder Sanjeeb Sutradhar’s story, pure vegetarian philosophy with fresh garlic & onion, Jain options, ISO 9001:2015 & FSSAI certified standards.',
};

export default function AboutPage() {
  return <AboutView />;
}
