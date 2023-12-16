import Features from '~/app/[locale]/(home)/features';
import Hero from '~/app/[locale]/(home)/hero';
import SocialProof from '~/app/[locale]/(home)/social-proof';
import VideoDemo from '~/app/[locale]/(home)/video-demo';
import { getScopedI18n } from '~/locales/server';
import type { LocaleCode } from '~/locales/server';
import { setStaticParamsLocale } from '~/locales/utils';
import React from 'react';

export const generateMetadata = async ({ params }: { params: { locale: LocaleCode } }) => {
  setStaticParamsLocale(params.locale);
  const homeT = await getScopedI18n('pages.home');

  return {
    title: { absolute: homeT('metadata.title') },
    description: homeT('metadata.description'),
  };
};

const Page = ({ params }: { params: { locale: string } }) => {
  setStaticParamsLocale(params.locale);
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
