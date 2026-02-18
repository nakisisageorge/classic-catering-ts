import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';
import LocalBusinessSchema from '@/components/SEO/LocalBusinessSchema';
import BreadcrumbSchema from '@/components/SEO/BreadcrumbSchema';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://classiccateringuganda.com'),
  title: {
    default: 'Classic Baking & Catering Uganda | Culinary Excellence',
    template: '%s | Classic Catering Uganda',
  },
  description:
    'ISO 45001:2018 certified culinary training and premium catering services in Uganda. We offer professional baking courses, chef training, and catering for weddings and corporate events.',
  keywords: [
    'catering services Uganda',
    'culinary training Kampala',
    'professional baking courses',
    'chef training Uganda',
    'wedding catering Kampala',
    'corporate catering Uganda',
    'Classic Catering Uganda',
    'baking school Kampala',
    'hospitality training Uganda',
  ],
  authors: [{ name: 'Classic Baking & Catering Uganda' }],
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://classiccateringuganda.com',
    siteName: 'Classic Catering Uganda',
    title: 'Classic Baking & Catering Uganda | Culinary Excellence',
    description:
      'ISO 45001:2018 certified culinary training and premium catering services in Uganda. Join our professional courses or book us for your event.',
    images: [
      {
        url: '/og-image.jpg', // Make sure this exists or I will need to generate/check it
        width: 1200,
        height: 630,
        alt: 'Classic Baking & Catering Uganda',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Classic Baking & Catering Uganda | Culinary Excellence',
    description:
      'Professional culinary training and premium catering services in Uganda.',
    images: ['/og-image.jpg'],
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
  verification: {
    google: 'your-google-verification-code', // Placeholder, user might provide later
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.variable} font-sans antialiased bg-white text-slate-900`}>
        <LocalBusinessSchema />
        <BreadcrumbSchema />
        <Header />
        <main className="min-h-screen">{children}</main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
