import React from 'react';
import '@pedaki/design/tailwind/index.css';
import '../../styles/globals.css';
import { getStaticParams } from '~/locales/server';
import type { LocaleCode } from '~/locales/server';
import { locales } from '~/locales/shared';
import { fixLocale } from '~/locales/utils';
import type { Metadata } from 'next';
import { setStaticParamsLocale } from 'next-international/server';
import { notFound } from 'next/navigation';
import Footer from '../../components/footer';
import Header from '../../components/header';
import { Providers } from './(home)/providers';

export default function Layout({
  children,
  params: { locale },
}: {
  children: React.ReactNode;
  params: { locale: LocaleCode };
}) {
  if (!locales.includes(locale)) {
    notFound();
    return null;
  }

  return (
    <Providers locale={locale}>
      <Header />
      <main>{children}</main>
      <Footer />
    </Providers>
  );
}

export function generateStaticParams() {
  return getStaticParams();
}

export const viewport = {
  colorScheme: 'light',
  themeColor: '#ffffff',
};

export const generateMetadata = ({ params }: { params: { locale: string } }) => {
  const locale = fixLocale(params.locale);
  setStaticParamsLocale(locale);

  return {
    metadataBase: new URL('https://www.pedaki.fr'),
    title: {
      template: '%s - Pedaki',
      default: 'Pedaki',
    },
    description: 'todo',
    applicationName: 'Pedaki',
    openGraph: {
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
      { rel: 'icon', url: 'https://static.pedaki.fr/logo/favicon.ico' },
      { rel: 'apple-touch-icon', url: 'https://static.pedaki.fr/logo/apple-touch-icon.png' },
      { rel: 'mask-icon', url: 'https://static.pedaki.fr/logo/favicon.ico' },
      { rel: 'image/x-icon', url: 'https://static.pedaki.fr/logo/favicon.ico' },
    ],
    other: {
      'content-language': locale,
    },
  } satisfies Metadata;
};
