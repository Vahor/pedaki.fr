import { Card, CardDescription, CardHeader, CardTitle } from '@pedaki/common/ui/card';
import Image from 'next/image';
import React from 'react';
import mock from '../../public/a/mock-hero.webp';

const Features = () => {
  return (
    <section className="container pb-7">
      <h2 className="text-center text-2xl font-bold">Lorem ipsum dolor sit amet, consectetur.</h2>
      <p className="mx-auto mt-6 max-w-md text-center text-base font-medium text-muted-foreground">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci, eveniet!
      </p>

      <div className="relative mb-2 mt-12 grid grid-cols-1 gap-8 md:grid-cols-2">
        <Card className="relative flex h-[380px] flex-col overflow-hidden bg-white shadow bgi-grid-gray-200 sm:h-[400px] lg:h-[500px]">
          <div className="absolute inset-0 bg-gradient-to-br from-transparent via-gray-50/90 to-white"></div>
          <CardHeader className="relative space-y-4">
            <CardTitle>Lorem ipsum dolor sit amet, consectetur 1.</CardTitle>
            <CardDescription>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum, eos?
            </CardDescription>
          </CardHeader>
          <div className="relative -bottom-4 -left-6">
            <Image src={mock} alt="mock" priority height={420} />
          </div>
        </Card>

        <Card className="relative h-[380px] overflow-hidden bg-white shadow bgi-grid-gray-200 sm:h-[400px] lg:h-[500px]">
          <div className="absolute inset-0 bg-gradient-to-br from-transparent via-gray-50/90 to-white"></div>
          <CardHeader className="relative space-y-4">
            <CardTitle className="">Lorem ipsum dolor sit amet, consectetur.</CardTitle>
            <CardDescription>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum, eos?
            </CardDescription>
          </CardHeader>
          <div className="relative -bottom-4 -right-6">
            <Image src={mock} alt="mock" priority />
          </div>
        </Card>
      </div>

      <div className="relative mb-2 mt-12 grid grid-cols-1 gap-8 md:grid-cols-2">
        <Card className="relative col-span-2 h-[380px] overflow-hidden bg-white shadow bgi-grid-gray-200 sm:h-[400px] lg:h-[500px]">
          <div className="absolute inset-0 bg-gradient-to-br from-transparent via-gray-50/90 to-white"></div>
          <CardHeader className="relative space-y-4">
            <CardTitle className="">Lorem ipsum dolor sit amet, consectetur.</CardTitle>
            <CardDescription>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum, eos?
            </CardDescription>
          </CardHeader>
          <div className="relative ">
            <Image src={mock} alt="mock" priority />
          </div>
        </Card>
      </div>
    </section>
  );
};

export default Features;
