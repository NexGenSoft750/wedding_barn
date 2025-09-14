import Carousel from "@/components/common/Caraousel";
import IntroSection from "@/components/home/IntroSection";
import OurVenue from "@/components/home/OurVenue";
import OurWeddingHall from "@/components/home/OurWeddingHall";
import WeddingExperience from "@/components/home/WeddingExperience";
import StickyBackgroundSection from "@/components/home/StickyBackgroundSection";
import { slides } from "@/data/slides";
import type { Metadata } from 'next';
import TestimonialCarousel from "@/components/home/TestimonialCarousel";

export const metadata: Metadata = {
  title: 'Home',
  description: 'Welcome to Acre31, a luxury wedding venue featuring stunning countryside views, elegant facilities, and exclusive accommodation. Perfect for intimate ceremonies to grand celebrations of 50-180 guests.',
  keywords: ['wedding venue', 'luxury weddings', 'Acre31', 'wedding barn', 'destination weddings', 'countryside venue', 'wedding packages'],
  openGraph: {
    title: 'Acre31 - Luxury Wedding Venue',
    description: 'Welcome to Acre31, a luxury wedding venue featuring stunning countryside views, elegant facilities, and exclusive accommodation.',
    url: 'https://acre31.com',
    images: [
      {
        url: '/images/acre31-logo.png',
        width: 1200,
        height: 630,
        alt: 'Acre31 Wedding Venue',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Acre31 - Luxury Wedding Venue',
    description: 'Welcome to Acre31, a luxury wedding venue featuring stunning countryside views, elegant facilities, and exclusive accommodation.',
    images: ['/images/acre31-logo.png'],
  },
};

export default function HomePage() {
  return (
    <>
      <Carousel slides={slides} />
      <IntroSection />
      <OurVenue />
      <StickyBackgroundSection />
      <OurWeddingHall />
      <WeddingExperience />
      <TestimonialCarousel />
    </>
  );
}
