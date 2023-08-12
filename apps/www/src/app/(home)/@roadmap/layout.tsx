import { Button } from '@pedaki/common/ui/button';
import Link from 'next/link';
import React from 'react';

const RoadmapLayout = ({ children }: { children: React.ReactElement | React.ReactNode }) => {
  return (
    <section className="container border-t bg-gray-100 py-16">
      {/* TODO: faire un composant pour les header de section, je les ai repris 4 fois */}
      <div className="flex flex-col justify-between lg:flex-row lg:items-center">
        <div className="space-y-2">
          <h2 className="text-4xl font-bold">Rejoignez notre communauté open source</h2>
          <p className="text-muted-foreground">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur debitis, ipsam
          </p>
        </div>
      </div>
      {children}
      <div className="mt-6 flex w-full justify-center">
        <Button variant="outline" className="gap-2" asChild>
          {/*TODO: add env variable for the github url*/}
          <Link href="https://github.com/vahor/pedaki-pedaki.fr" prefetch={false} target="_blank">
            <span>Rejoindre la communauté</span>
            {/* TODO: replace with arrow icon from @pedaki/common/ui/icons */}
            <svg width="18" height="18" viewBox="0 0 256 256" xmlns="http://www.w3.org/2000/svg">
              <path
                fill="currentColor"
                d="m220.24 132.24l-72 72a6 6 0 0 1-8.48-8.48L201.51 134H40a6 6 0 0 1 0-12h161.51l-61.75-61.76a6 6 0 0 1 8.48-8.48l72 72a6 6 0 0 1 0 8.48Z"
              />
            </svg>
          </Link>
        </Button>
      </div>
    </section>
  );
};

export default RoadmapLayout;