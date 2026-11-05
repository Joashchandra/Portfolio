import type { Metadata } from 'next';
import './globals.css';
import { Poppins } from 'next/font/google';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-poppins',
});

export const metadata: Metadata = {
  title: 'My Portfolio',
  description: 'Portfolio Joash Christian Chandra',
};

export default function RootLayout({ children }: LayoutProps<'/'>) {
  return (
    <html lang='en' className={`h-full antialiased ${poppins.variable}`}>
      <body className='min-h-full flex flex-col font-poppins'>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
