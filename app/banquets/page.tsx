import type { Metadata } from 'next';
import BanquetsView from '@/components/BanquetsView';

export const metadata: Metadata = {
  title: 'Banquets, Corporate Catering & Events | Gokul Veg Restaurant | Agartala',
  description:
    'Plan royal vegetarian catering in Agartala with Gokul Veg Restaurant. AC Emerald Banquet hall (50-150 guests), outdoor weddings (up to 500+ guests), corporate conference lunch boxes, and live tandoor & chaat stalls.',
};

export default function BanquetsPage() {
  return <BanquetsView />;
}
