import Features from '~/app/[locale]/(home)/features';
import Hero from '~/app/[locale]/(home)/hero';
import SocialProof from '~/app/[locale]/(home)/social-proof';
import VideoDemo from '~/app/[locale]/(home)/video-demo';
import { getScopedI18n } from '~/locales/server';
import { setStaticParamsLocale } from 'next-international/server';
import React from 'react';

export const generateMetadata = async () => {
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
    </>
  );
};

export default Page;
