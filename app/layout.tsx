import type { Metadata } from 'next';
import './globals.css';
import { Nunito, Inter } from 'next/font/google';
import Header from '@/components/ui/header';
import ScrollArrow from '@/components/ui/scroll-arrow';

const nunito_sans = Nunito({
  style: ['normal', 'italic'],
  subsets: ['latin'],
  variable: '--font-nunito',
  weight: ['200', '300', '400', '500', '600', '700', '800', '900', '1000'],
});

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
});

export const metadata: Metadata = {
  title: 'Comfort Dev | Innovation made with and for comfort',
  description:
    'Comfort Dev is a platform dedicated to creating innovative technology solutions that prioritize user comfort and ease of use. Our mission is to develop tools and applications that enhance everyday experiences through thoughtful design and functionality.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // Debug: Check what value we're getting
  const powerSaving = process.env.NEXT_PUBLIC_POWERSAVING;
  console.log('Power saving env var:', powerSaving);
  console.log('Is power saving enabled:', powerSaving === 'true');

  return (
    <html lang="en">
      <body
        className={`${nunito_sans.variable} ${inter.variable} ${nunito_sans.className} antialiased`}
      >
        <Header />

        <div className="flex flex-col w-full">{children}</div>
        <ScrollArrow />
      </body>
    </html>
  );
}
