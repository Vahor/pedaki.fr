import CallToActionBottom from '~/app/(home)/cta-bottom';
import Features from '~/app/(home)/features';
import Hero from '~/app/(home)/hero';
import Price from '~/app/(home)/price';
import SocialProof from '~/app/(home)/social-proof';
import VideoDemo from '~/app/(home)/video-demo';
import type { ReactNode } from 'react';
import React from 'react';

export default function HomeLayout(props: { children: ReactNode; roadmap: ReactNode }) {
  return (
    <>
      <Hero />
      <VideoDemo />
      <SocialProof />
      <Features />
      <Price />
      {props.roadmap}
      <CallToActionBottom />
    </>
  );
}
