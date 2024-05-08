import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

import { AppProvider } from '@/providers/app-provider';
import { MainLayout } from '@/components/layout';

import 'react-grid-layout/css/styles.css';
import 'react-resizable/css/styles.css';
import { RechartFix } from '@/components/rechart-fix';

export const dynamic = 'force-dynamic';
export const revalidate = 0;

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Bask Health',
  description: 'Kaan Hakan AKIN Bask Health Task',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <RechartFix />
        <AppProvider>
          <MainLayout>{children}</MainLayout>
        </AppProvider>
      </body>
    </html>
  );
}
