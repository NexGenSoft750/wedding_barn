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
      { days: 'Friday', price: '$4,500' },
      { days: 'Sunday', price: '$5,500' },
      { days: 'Monday - Thursday', price: '$4,000' }
    ],
    nonPeak: [
      { days: 'Saturday', price: '$5,500' },
      { days: 'Friday', price: '$4,000' },
      { days: 'Sunday', price: '$4,500' },
      { days: 'Monday - Thursday', price: '$2,000' }
    ]
  };

  const multiDayPricing = {
    peak: [
      { days: 'Fri - Sat - Sun', price: '$13,000' },
      { days: 'Fri & Sat', price: '$9,000' },
      { days: 'Sat & Sun', price: '$10,000' },
      { days: 'Monday - Thursday', price: '$8,000' }
    ],
    nonPeak: [
      { days: 'Fri - Sat - Sun', price: '$12,000' },
      { days: 'Fri & Sat', price: '$7,500' },
      { days: 'Sat & Sun', price: '$8,000' },
      { days: 'Monday - Thursday', price: '$5,000' }
    ]
  };

  const singleDayIncludes = [
    [
      "Exclusive Rental for ceremony and reception | 12:00 pm - midnight (11pm end time) Mon-Thur & Sunday 4pm - 10pm",
      "Up to 4 hours rehearsal time if needed (schedule with us) / overnight storage for next day",
      "4100 sq ft patio for outdoor ceremony",
      "All set up and clean up of venue amenities",
      "Outside unlimited space for seating/dining (we can assist in renting more chairs/tables/tents etc.)",
      "Outdoor 600 sq ft bar area for cocktail hour and for lawn games",
    ],
    [
      "Bridal Suite with private bathroom",
      "Groom's Suite",
      "Separate catering kitchen",
      "Gorgeous outdoor portraits area with pergola facing our heart-shaped pond",
      "Pergola with 4 chandeliers",
      "BYOB (TABC Bartenders are mandatory and security will be provided and scheduled by our staff for an added fee)",
      "Free parking",
      "Set up and breakdown of chairs and tables",
    ],
    [
      "Clear chiavari chairs",
      '10 60" round tables to seat 8-10',
      "4 farm style tables (2 8ft and 2 4ft)",
      "No set vendors list*",
    ],
  ];

  const multiDayIncludes = [
    [
      "Exclusive Rental for ceremony and reception | 12:00 pm - midnight (11pm end time) Mon-Thur & Sunday 4pm - 10pm",
      "Up to 4 hours rehearsal time if needed (schedule with us) / overnight storage for next day",
      "4100 sq ft patio for outdoor ceremony",
      "All set up and clean up of venue amenities",
      "Outside unlimited space for seating/dining (we can assist in renting more chairs/tables/tents etc.)",
      "Outdoor 600 sq ft bar area for cocktail hour and for lawn games",
    ],
    [
      "Bridal Suite with private bathroom",
      "Groom's Suite",
      "Separate catering kitchen",
      "Gorgeous outdoor portraits area with pergola facing our heart-shaped pond",
      "Pergola with 4 chandeliers",
      "BYOB (TABC Bartenders are mandatory and security will be provided and scheduled by our staff for an added fee)",
      "Free parking",
      "Set up and breakdown of chairs and tables",
    ],
    [
      "Clear chiavari chairs",
      '10 60" round tables to seat 8-10',
      "4 farm style tables (2 8ft and 2 4ft)",
      "No set vendors list*",
    ],
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