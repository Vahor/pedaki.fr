import type { Metadata } from 'next';

const seoConfig = {
  metadataBase: new URL('https://docs.pedaki.fr'),
  title: {
    template: '%s - Pedaki',
    default: 'Pedaki',
  },
  description: 'todo',
  themeColor: '#ffffff',
  openGraph: {
    images: '/og-image.png',
    url: 'https://docs.pedaki.fr',
  },
  robots: 'index, follow',
  colorScheme: 'light',
  manifest: 'https://www.pedaki.fr/site.webmanifest',
  icons: [
    { rel: 'icon', url: 'https://www.pedaki.fr/favicon.ico' },
    { rel: 'apple-touch-icon', url: 'https://www.pedaki.fr/apple-touch-icon.png' },
    { rel: 'mask-icon', url: 'https://www.pedaki.fr/favicon.ico' },
    { rel: 'image/x-icon', url: 'https://www.pedaki.fr/favicon.ico' },
  ],
} satisfies Metadata;

export default seoConfig;
