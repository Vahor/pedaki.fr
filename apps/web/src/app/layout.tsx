import React from 'react';
import '@pedaki/common/styles/globals.css';
import '../styles/globals.css';
import { cn } from '@pedaki/common/lib/utils';
import { fontClassName } from '@pedaki/common/styles/fonts';
import { Providers } from './providers';
import Header from '../components/header';
import seoConfig from '../../seo.config';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr" className={cn(fontClassName)} suppressHydrationWarning>
      <body>
        <Providers>
          <Header />
          <main>{children}</main>
        </Providers>
      </body>
    </html>
  );
}

export const metadata = seoConfig;
