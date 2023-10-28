import type { ImageProps } from 'next/image';
import Image from 'next/image';
import React from 'react';

const SocialProof = () => {
  return (
    <section className="relative -mt-16 border-t bg-white px-8 py-24">
      <div className="mx-auto block w-full max-w-screen-xl">
        {/* TODO: flex w-max overflow-hidden + slider ? */}
        <div className="flex flex-col items-center gap-4 pb-8">
          <p className="mb-2 text-xl font-medium text-muted">Soutenu par plusieurs universités</p>
          <div className="flex max-w-screen-sm items-center">
            {/* TODO: svg ?*/}
            <OrganizationIcon
              src="https://static.pedaki.fr/www/grand-est.png"
              alt="grandest.fr"
              width={131}
            />
            <OrganizationIcon
              src="https://static.pedaki.fr/www/mewo.png"
              alt="mewo.fr"
              width={59}
            />
            <OrganizationIcon
              src="https://static.pedaki.fr/www/univ-lorraine.png"
              alt="univ-lorraine.fr"
              width={115}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

const OrganizationIcon = ({ src, alt, width }: ImageProps) => (
  <div className="transition-grayscale mx-auto px-8 grayscale duration-200 hover:grayscale-0 md:h-10">
    <Image src={src} alt={alt} height={40} width={width} priority={false} />
  </div>
);

export default SocialProof;
