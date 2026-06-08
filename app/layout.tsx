import type { Metadata } from 'next';
import './globals.css';
import Header from '@/components/layout/Header';

export const metadata: Metadata = {
  metadataBase: new URL('https://www.comfortdev.net'),
  title: 'Comfort Dev | Innovation made with and for comfort',
  description:
    'Comfort Dev is a platform dedicated to creating innovative technology solutions that prioritize user comfort and ease of use. Our mission is to develop tools and applications that enhance everyday experiences through thoughtful design and functionality.',
  keywords: ['Comfort Dev', 'software development', 'web applications', 'innovation', 'technology solutions'],
  authors: [{ name: 'Comfort Dev', url: 'https://www.comfortdev.net' }],
  openGraph: {
    title: 'Comfort Dev | Innovation made with and for comfort',
    description:
      'Comfort Dev is a platform dedicated to creating innovative technology solutions that prioritize user comfort and ease of use.',
    url: 'https://www.comfortdev.net',
    siteName: 'Comfort Dev',
    images: [
      {
        url: '/images/shared/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Comfort Dev – Innovation made with and for comfort',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Comfort Dev | Innovation made with and for comfort',
    description:
      'Comfort Dev is a platform dedicated to creating innovative technology solutions that prioritize user comfort and ease of use.',
    images: ['/images/shared/og-image.png'],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth scroll-pt-[60px]">
      <body className={`antialiased bg-black`}>
        <Header/>
        <div className="flex flex-col w-full">
          {children}
        </div>
      </body>
    </html>
  );
}
