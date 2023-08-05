import React from 'react';
import '@pedaki/common/styles/globals.css';
import '../styles/globals.css';
import { cn } from '@pedaki/common/lib/utils';
import { fontClassName } from '@pedaki/common/styles/fonts';
import seoConfig from '~/config/seo';
import Footer from '../components/footer';
import Header from '../components/header';
import { Providers } from './providers';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr" className={cn(fontClassName)} suppressHydrationWarning>
      <body>
        <Providers>
          <Header />
          <main>{children}</main>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}

export const metadata = seoConfig;
