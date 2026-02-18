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
    'ISO certified culinary training and premium catering services in Uganda. Professional baking, chef training, and event catering.',
  keywords: [
    'catering Uganda',
    'culinary training Kampala',
    'baking courses',
    'chef training',
    'wedding catering',
    'Classic Catering Uganda',
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
      'Professional culinary courses and premium catering in Uganda. Join us today.',
    images: [
      {
        url: '/images/cla47jpgc.jpg',
        width: 1200,
        height: 630,
        alt: 'Classic Baking & Catering Uganda',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Classic Baking & Catering Uganda',
    description: 'Professional culinary training and premium catering services in Uganda.',
    images: ['/images/cla47jpgc.jpg'],
  },
  robots: {
    index: true,
    follow: true,
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
