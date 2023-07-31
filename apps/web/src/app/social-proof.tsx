import Image from 'next/image';
import React from 'react';
import mewo from '../../public/a/sp/mewo.png';

const SocialProof = () => {
  return (
    <div className="relative z-10 block w-full bg-gray-50 max-w-screen-xl px-8 mx-auto pt-4 md:pt-0">
      <div className="flex flex-col items-center justify-center border-y py-16 md:-mt-[70px] md:py-20">
        <h1 className="pb-8 font-semibold leading-7 text-muted-foreground md:text-base">
          Ils nous font confiance
        </h1>
        <div className="grid w-full grid-cols-2 place-items-center justify-between gap-4 sm:grid-cols-3 md:flex ">
          <Image src={mewo} alt="mewo" height={48} />
          <Image src={mewo} alt="mewo" height={48} />
          <Image src={mewo} alt="mewo" height={48} />
          <Image src={mewo} alt="mewo" height={48} />
          <Image src={mewo} alt="mewo" height={48} />
          <Image src={mewo} alt="mewo" height={48} />
        </div>
      </div>
    </div>
  );
};

export default SocialProof;
