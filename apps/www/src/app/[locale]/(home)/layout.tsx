import GithubFooter from '~/app/[locale]/(home)/@github/footer';
import CallToActionBottom from '~/app/[locale]/(home)/cta-bottom';
import { FeatureWrapper } from '~/app/[locale]/(home)/features';
import type { ReactNode } from 'react';
import React from 'react';
import Balancer from 'react-wrap-balancer';

export default function HomeLayout(props: { children: ReactNode; github: ReactNode }) {
  return (
    <>
      {props.children}
      <section className="container py-16">
        <FeatureWrapper
          label="Open Source"
          title="Rejoignez notre communauté open source"
          labelClassName="bg-blueA-3 text-blue-10"
          titleClassName="mb-2"
        >
          <div className="max-w-lg md:max-w-4xl mb-12">
            <Balancer as="p" className="text-secondary">
              Tout notre code est open source, vous pouvez le consulter sur notre et y contribuer
              gratuitement.
            </Balancer>
          </div>
          {props.github}
        </FeatureWrapper>
        <GithubFooter />
      </section>
      <CallToActionBottom />
    </>
  );
}