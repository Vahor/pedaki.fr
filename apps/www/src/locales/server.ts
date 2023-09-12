import type { BaseLocale } from 'international-types';
import { createI18nServer } from 'next-international/server';
import fr from './fr';

export const { getI18n, getScopedI18n, getStaticParams } = createI18nServer(
  {
    en: () => import('./en'),
    fr: () => import('./fr'),
  },
  {
    // TODO: fix usage of `as unknown as BaseLocale`, related to the use of object notation in the lang files
    fallbackLocale: fr as unknown as BaseLocale,
  },
);
