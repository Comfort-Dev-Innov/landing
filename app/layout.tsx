import type { Metadata } from 'next';
import './globals.css';
import Header from '@/components/layout/Header';

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
