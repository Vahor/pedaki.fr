import React from 'react';
import '@pedaki/design/tailwind/index.css';
import '../../styles/globals.css';
import { cn } from '@pedaki/design/utils';
import { fontClassName } from '~/config/font';
import { getCurrentLocale, getStaticParams } from '~/locales/server';
import Footer from '../../components/footer';
import Header from '../../components/header';
import { Providers } from './(home)/providers';

export default function RootLayout({
  children,
  params: { locale },
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  return (
    <html lang={locale} dir="ltr" className={cn(fontClassName)} suppressHydrationWarning>
      <body>
        <Providers locale={locale}>
          <Header />
          <main>{children}</main>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}

export function generateStaticParams() {
  return getStaticParams();
}

export const viewport = {
  colorScheme: 'light',
  themeColor: '#ffffff',
};

export const generateMetadata = () => {
  const locale = getCurrentLocale();

  return {
    metadataBase: new URL('https://www.pedaki.fr'),
    title: {
      template: '%s - Pedaki',
      default: 'Pedaki',
    },
    description: 'todo',
    applicationName: 'Pedaki',
    openGraph: {
      title: 'Pedaki',
      description: 'todo',
      siteName: 'Pedaki',
      locale: locale,
      url: '/',
    },
    keywords: ['management', 'school', 'école', 'gestion'], // TODO
    robots: 'index, follow',
    manifest: 'https://www.pedaki.fr/site.webmanifest',
    alternates: {
      canonical: '/',
      languages: {
        'x-default': '/',
        fr: '/',
        en: '/en',
      },
    },
    authors: [
      {
        name: 'Nathan David',
        url: 'https://github.com/Vahor',
      },
      {
        name: 'Clément Ricatte',
        url: 'https://github.com/AvaN0x',
      },
      {
        name: 'Alex Piquard',
        url: 'https://github.com/AlexPiquard',
      },
    ],
    icons: [
      { rel: 'icon', url: 'https://www.pedaki.fr/favicon.ico' },
      { rel: 'apple-touch-icon', url: 'https://www.pedaki.fr/apple-touch-icon.png' },
      { rel: 'mask-icon', url: 'https://www.pedaki.fr/favicon.ico' },
      { rel: 'image/x-icon', url: 'https://www.pedaki.fr/favicon.ico' },
    ],
  };
};
