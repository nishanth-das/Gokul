import type { Metadata } from 'next';
import SignaturesView from '@/components/SignaturesView';

export const metadata: Metadata = {
  title: "Chef's Signature Dishes & Iconic Delicacies | Gokul Veg Restaurant | Agartala",
  description:
    'Taste the iconic vegetarian bestsellers of Agartala: Masala Dosa, Amritsari Chole Bhature, Paneer Butter Masala, Hyderabadi Dum Biryani, Tandoori Aloo Tikka, and Traditional Litti Chokha at Gokul Veg Restaurant.',
};

export default function SignaturesPage() {
  return <SignaturesView />;
}
