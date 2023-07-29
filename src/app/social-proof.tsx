import React from "react";
import Image from "next/image";
import mewo from "../../public/a/sp/mewo.png";

const SocialProof = () => {
  return (
    <div className="relative z-10 block w-full bg-white px-8 pt-4 md:pt-0">
      <div className="flex flex-col items-center justify-center border-y py-16 md:-mt-[70px]">
        <h1 className="pb-8 font-medium leading-7 text-muted-foreground md:text-base">
          Ils nous font confiance
        </h1>
        <div className="grid w-full max-w-screen-sm grid-cols-2 place-items-center justify-between gap-4 sm:flex">
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
