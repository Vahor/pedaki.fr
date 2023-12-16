import Features from '~/app/[locale]/(home)/features';
import Hero from '~/app/[locale]/(home)/hero';
import SocialProof from '~/app/[locale]/(home)/social-proof';
import VideoDemo from '~/app/[locale]/(home)/video-demo';
import { getScopedI18n } from '~/locales/server';
import type { LocaleCode } from '~/locales/server';
import { fallbackLocale, locales } from '~/locales/shared';
import { setStaticParamsLocale } from 'next-international/server';
import React from 'react';

export const generateMetadata = async ({ params }: { params: { locale: LocaleCode } }) => {
  setStaticParamsLocale(locales.includes(params.locale) ? params.locale : fallbackLocale);
  const homeT = await getScopedI18n('pages.home');

  return {
    title: { absolute: homeT('metadata.title') },
    description: homeT('metadata.description'),
  };
};

const Page = ({ params }: { params: { locale: string } }) => {
  setStaticParamsLocale(locales.includes(params.locale) ? params.locale : fallbackLocale);
  return (
    <>
      <Hero />
      <VideoDemo />
      <SocialProof />
      <Features />
      <Features />
    </>
  );
};

export default Page;
