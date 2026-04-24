import type { Metadata } from 'next';
import './globals.css';
import { Poppins, Inter } from 'next/font/google';

const poppins = Poppins({
  subsets: ['latin'],
  variable: '--font-poppins',
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
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
  return (
    <html lang="en">
      <body className={`${poppins.variable} ${inter.variable} antialiased`}>
        <div className="flex flex-col w-full">{children}</div>
      </body>
    </html>
  );
}
