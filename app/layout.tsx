import DataProvider from '@/providers/DataProvider';
import './globals.css';
import type { Metadata } from 'next';
import { Poppins } from 'next/font/google';
import { ToastContainer } from 'react-toastify';

const poppins = Poppins({ 
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Loop Nest - Modern EdTech Platform',
  description: 'Unlock your potential with Loop Nest - the premier online learning platform for technology and professional skills development.',
  keywords: 'online learning, edtech, courses, education, technology, programming, skills development',
  authors: [{ name: 'Loop Nest Team' }],
  openGraph: {
    title: 'Loop Nest - Modern EdTech Platform',
    description: 'Unlock your potential with Loop Nest - the premier online learning platform for technology and professional skills development.',
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Loop Nest - Modern EdTech Platform',
    description: 'Unlock your potential with Loop Nest - the premier online learning platform for technology and professional skills development.',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={poppins.className}><DataProvider>
        {children}
        <ToastContainer></ToastContainer>
        </DataProvider></body>
    </html>
  );
}