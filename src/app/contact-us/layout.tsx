import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Contact Us',
    description: 'Contact Acre31 wedding venue for private tours and bookings. Located at 35 Becks Road, Drysdale Victoria 3222, Australia. 15 minutes from Portarlington, 30 minutes from Geelong.',
    keywords: ['contact Acre31', 'wedding venue contact', 'book tour', 'wedding venue Australia', 'Drysdale venue', 'Geelong wedding venue', 'private tours'],
    openGraph: {
        title: 'Contact Acre31 - Wedding Venue',
        description: 'Contact Acre31 wedding venue for private tours and bookings. Located at 35 Becks Road, Drysdale Victoria 3222, Australia.',
        url: 'https://acre31.com/contact-us',
        images: [
            {
                url: '/images/acre31-logo.png',
                width: 1200,
                height: 630,
                alt: 'Contact Acre31 Wedding Venue',
            },
        ],
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Contact Acre31 - Wedding Venue',
        description: 'Contact Acre31 wedding venue for private tours and bookings. Located at 35 Becks Road, Drysdale Victoria 3222, Australia.',
        images: ['/images/acre31-logo.png'],
    },
};

const ContactUsLayout = ({ children }: { children: React.ReactNode }) => {
    return (
        <>
            {children}
        </>
    );
};

export default ContactUsLayout;