import Image from 'next/image';
import React from 'react';
import mewo from '../../public/a/sp/mewo.png';

const SocialProof = () => {
  return (
    <section className="relative mx-auto block w-full max-w-screen-xl px-8">
      <div className="flex flex-col items-center justify-center py-4 sm:py-4 2xl:pb-8">
        <h1 className="text-sm font-semibold uppercase leading-7 text-muted-foreground">
          Ils nous font confiance
        </h1>
        <div className="grid grid-cols-3 gap-12 pt-12 sm:grid-cols-5 sm:py-12">
          <div className="h-8">
            <Image src={mewo} alt="Pedaki customer logo: mewo.fr" height={43} priority={false} />
          </div>
          <div className="h-8">
            <Image src={mewo} alt="Pedaki customer logo: mewo.fr" height={43} priority={false} />
          </div>
          <div className="h-8">
            <Image src={mewo} alt="Pedaki customer logo: mewo.fr" height={43} priority={false} />
          </div>
          <div className="h-8">
            <Image src={mewo} alt="Pedaki customer logo: mewo.fr" height={43} priority={false} />
          </div>
          <div className="h-8">
            <Image src={mewo} alt="Pedaki customer logo: mewo.fr" height={43} priority={false} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default SocialProof;
