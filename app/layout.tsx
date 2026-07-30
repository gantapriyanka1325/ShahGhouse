import './globals.css';
import type { Metadata } from 'next';
import { Playfair_Display, Poppins } from 'next/font/google';
import { Toaster } from '@/components/ui/toaster';
import { JsonLd } from '@/components/json-ld';

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
  display: 'swap',
  weight: ['400', '500', '600', '700', '800', '900'],
});

const poppins = Poppins({
  subsets: ['latin'],
  variable: '--font-poppins',
  display: 'swap',
  weight: ['300', '400', '500', '600', '700'],
});

const siteUrl = 'https://shahghouse.example.com';

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: 'Shah Ghouse | The True Taste of Hyderabad Since 1985',
    template: '%s | Shah Ghouse',
  },
  description:
    'Shah Ghouse has served authentic Hyderabadi cuisine since 1985. Savour legendary dum biryani, haleem, kebabs and traditional desserts across our six Hyderabad branches. Reserve your table today.',
  keywords: [
    'Shah Ghouse',
    'Hyderabadi biryani',
    'Hyderabad restaurant',
    'dum biryani',
    'haleem',
    'kebabs',
    'Mughlai cuisine',
    'best biryani Hyderabad',
    'Hyderabad dining',
    'restaurant in Hyderabad',
  ],
  authors: [{ name: 'Shah Ghouse' }],
  creator: 'Shah Ghouse',
  publisher: 'Shah Ghouse',
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: siteUrl,
    siteName: 'Shah Ghouse',
    title: 'Shah Ghouse | The True Taste of Hyderabad Since 1985',
    description:
      'Authentic Hyderabadi cuisine since 1985. Legendary dum biryani, haleem, kebabs and more across our six Hyderabad branches.',
    images: [
      {
        url: 'https://images.pexels.com/photos/28674660/pexels-photo-28674660.jpeg?auto=compress&cs=tinysrgb&w=1200',
        width: 1200,
        height: 630,
        alt: 'Shah Ghouse Hyderabadi biryani served with raita and garnish',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Shah Ghouse | The True Taste of Hyderabad',
    description:
      'Authentic Hyderabadi cuisine since 1985. Reserve your table today.',
    images: [
      'https://images.pexels.com/photos/28674660/pexels-photo-28674660.jpeg?auto=compress&cs=tinysrgb&w=1200',
    ],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  category: 'Food & Beverage',
};

export const viewport = {
  themeColor: '#7B1E1E',
  width: 'device-width',
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${playfair.variable} ${poppins.variable}`}>
      <body className="font-sans antialiased">
        <JsonLd />
        {children}
        <Toaster />
      </body>
    </html>
  );
}
