import type { Metadata } from 'next';
import './globals.css';
import { Nunito } from 'next/font/google';

const nunito_sans = Nunito({
  style: ['normal', 'italic'],
  subsets: ['latin'],
  variable: '--font-nunito',
  weight: ['200', '300', '400', '500', '600', '700', '800', '900', '1000'],
});

export const metadata: Metadata = {
  title: 'Comfort Dev Innovations | Tech made with and for comfort',
  description:
    'Comfort Dev Innovations is a platform dedicated to creating innovative technology solutions that prioritize user comfort and ease of use. Our mission is to develop tools and applications that enhance everyday experiences through thoughtful design and functionality.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${nunito_sans.variable} ${nunito_sans.className} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
