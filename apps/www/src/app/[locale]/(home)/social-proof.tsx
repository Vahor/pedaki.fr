import grandEst from '@public/a/sp/grand-est.png';
import mewo from '@public/a/sp/mewo.png';
import univLorraine from '@public/a/sp/univ-lorraine.png';
import type { ImageProps } from 'next/image';
import Image from 'next/image';
import React from 'react';

const SocialProof = () => {
  return (
    <section className="relative mx-auto block w-full max-w-screen-xl px-8 py-24 -mt-16 bg-white border-t">
      {/* TODO: flex w-max overflow-hidden + slider ? */}
      <div className="flex flex-col items-center gap-4 pb-8">
        <p className="text-muted text-xl font-medium mb-2">Soutenu par plusieurs universités</p>
        <div className="flex max-w-screen-sm items-center">
          {/* TODO: svg ?*/}
          <OrganizationIcon src={grandEst} alt="grandest.fr" />
          <OrganizationIcon src={mewo} alt="mewo.fr" />
          <OrganizationIcon src={univLorraine} alt="univ-lorraine.fr" />
        </div>
      </div>
    </section>
  );
};

const OrganizationIcon = ({ src, alt }: ImageProps) => (
  <div className="mx-auto px-8 md:h-10 grayscale hover:grayscale-0 transition-grayscal duration-200">
    <Image src={src} alt={alt} height={40} priority={false} />
  </div>
);

export default SocialProof;
