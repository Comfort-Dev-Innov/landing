import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  /* config options here */
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        'nunito-sans': ['var(--font-nunito-sans)', 'sans-serif'],
      },
    },
  },
  plugins: [],
};

export default nextConfig;
