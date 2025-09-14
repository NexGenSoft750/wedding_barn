import Carousel from "@/components/common/Caraousel";
import PricePackage from "@/components/price/PricePackage";
import { slides } from "@/data/slides";
import AllInclusiveSection from "@/components/price/AllInclusiveSection";
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Pricing',
  description: 'View Acre31 wedding venue pricing packages. Choose from single-day or multi-day wedding packages starting from $2,000. All-inclusive luxury wedding venue with accommodation.',
  keywords: ['wedding venue pricing', 'wedding packages', 'Acre31 pricing', 'luxury wedding cost', 'wedding venue rates', 'all-inclusive weddings'],
  openGraph: {
    title: 'Acre31 Wedding Venue Pricing',
    description: 'View Acre31 wedding venue pricing packages. Choose from single-day or multi-day wedding packages starting from $2,000.',
    url: 'https://acre31.com/price',
    images: [
      {
        url: '/images/acre31-logo.png',
        width: 1200,
        height: 630,
        alt: 'Acre31 Wedding Venue Pricing',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Acre31 Wedding Venue Pricing',
    description: 'View Acre31 wedding venue pricing packages. Choose from single-day or multi-day wedding packages starting from $2,000.',
    images: ['/images/acre31-logo.png'],
  },
};

export default function Home() {
  const singleDayPricing = {
    peak: [
      { days: 'Saturday', price: '$6,500' },
      { days: 'Friday', price: '$5,500' },
      { days: 'Sunday', price: '$4,500' },
      { days: 'Monday - Thursday', price: '$4,000' }
    ],
    nonPeak: [
      { days: 'Saturday', price: '$4,000' },
      { days: 'Friday', price: '$3,500' },
      { days: 'Sunday', price: '$2,500' },
      { days: 'Monday - Thursday', price: '$2,000' }
    ]
  };

  const multiDayPricing = {
    peak: [
      { days: 'Fri - Sat - Sun', price: '$12,000' },
      { days: 'Fri & Sat', price: '$10,000' },
      { days: 'Sat & Sun', price: '$9,500' },
      { days: 'Monday - Thursday', price: '$8,000' }
    ],
    nonPeak: [
      { days: 'Fri & Sat', price: '$8,000' },
      { days: 'Fri - Sat - Sun', price: '$7,000' },
      { days: 'Sat & Sun', price: '$7,000' },
      { days: 'Monday - Thursday', price: '$5,000' }
    ]
  };

  const singleDayIncludes = [
    '12 hours of facility access',
    'All tables and chairs + setup and tear down',
    'Venue attendant on the wedding day'
  ];

  const multiDayIncludes = [
    'Extended facility access across multiple days',
    'All tables and chairs + setup and tear down',
    'Venue attendant throughout the event',
    'Flexible scheduling between days',
    'Additional storage options'
  ];

  return (
    <>
      <Carousel slides={slides} />

      <PricePackage
        currentPricing={singleDayPricing as any}
        currentIncludes={singleDayIncludes}
        packageType="single"
      />

      <PricePackage
        currentPricing={multiDayPricing as any}
        currentIncludes={multiDayIncludes}
        packageType="multi"
      />

      <AllInclusiveSection />
    </>
  );
}