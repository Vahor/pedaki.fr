import Features from '~/app/(home)/features';
import Hero from '~/app/(home)/hero';
import SocialProof from '~/app/(home)/social-proof';
import VideoDemo from '~/app/(home)/video-demo';
import type { Metadata } from 'next';
import React from 'react';

export const metadata: Metadata = {
  description: 'lorem ipsum dolor sit amet',
  openGraph: {
    type: 'website',
  },
};

export default function Page() {
  return (
    <>
      <Hero />
      <VideoDemo />
      <SocialProof />
      <Features />
    </>
  );
}
