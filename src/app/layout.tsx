import 'bootstrap/dist/css/bootstrap.min.css';
import '@/styles/globals.scss';
import Layout from '@/components/layout/Layout';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: {
    default: 'Acre31 - Luxury Wedding Venue',
    template: '%s | Acre31'
  },
  description: 'Acre31 offers a luxury wedding venue with stunning countryside views, elegant facilities, and exclusive accommodation. Perfect for intimate ceremonies to grand celebrations.',
  keywords: ['wedding venue', 'luxury weddings', 'Acre31', 'wedding barn', 'destination weddings', 'wedding packages'],
  authors: [{ name: 'Acre31' }],
  creator: 'Acre31',
  publisher: 'Acre31',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://acre31.com'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'Acre31 - Luxury Wedding Venue',
    description: 'Acre31 offers a luxury wedding venue with stunning countryside views, elegant facilities, and exclusive accommodation.',
    url: 'https://acre31.com',
    siteName: 'Acre31',
    images: [
      {
        url: '/images/acre31-logo.png',
        width: 1200,
        height: 630,
        alt: 'Acre31 Wedding Venue',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Acre31 - Luxury Wedding Venue',
    description: 'Acre31 offers a luxury wedding venue with stunning countryside views, elegant facilities, and exclusive accommodation.',
    images: ['/images/acre31-logo.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: '/images/acre31-logo.png',
    shortcut: '/images/acre31-logo.png',
    apple: '/images/acre31-logo.png',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/favicon-16x16.png" sizes="16x16" type="image/png" />
        <link rel="icon" href="/favicon-32x32.png" sizes="32x32" type="image/png" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="shortcut icon" href="/favicon.ico" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#b57059" />
        <meta name="msapplication-TileColor" content="#b57059" />
        <meta name="msapplication-TileImage" content="/images/acre31-logo.png" />
        <meta name="application-name" content="Acre31" />
        <meta name="apple-mobile-web-app-title" content="Acre31" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
      </head>
      <body suppressHydrationWarning>
        <Layout>
          {children}
        </Layout>
      </body>
    </html>
  );
}
