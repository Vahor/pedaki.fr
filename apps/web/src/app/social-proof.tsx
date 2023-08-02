import Image from 'next/image';
import type {ImageProps} from 'next/image';
import React from 'react';
import grandEst from '../../public/a/sp/grand-est.png';
import mewo from '../../public/a/sp/mewo.png';
import univLorraine from '../../public/a/sp/univ-lorraine.png';


const SocialProof = () => {
  return (
    <section className="relative mx-auto block w-full max-w-screen-xl px-8">
      {/* TODO: flex w-max overflow-hidden + slider ? */}
      <div className="grid grid-cols-3 gap-12 py-4 pt-12 sm:py-12 2xl:pb-8 max-w-screen-md mx-auto">
        {/* TODO: svg ?*/}
        <OrganizationIcon src={grandEst} alt="grandest.fr" />
        <OrganizationIcon src={mewo} alt="mewo.fr" />
        <OrganizationIcon src={univLorraine} alt="univ-lorraine.fr" />
      </div>
    </section>
  );
};

const OrganizationIcon = ({ src, alt }: ImageProps) => (
    <div className="mx-auto h-10">
        <Image src={src} alt={alt} height={40} priority={false} />
    </div>
);

export default SocialProof;