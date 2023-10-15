import { Card } from '@pedaki/design/ui/card';
import { cn } from '@pedaki/design/utils/cn';
import mock from '@public/a/mock-hero.webp';
import Image from 'next/image';
import React from 'react';
import Balancer from 'react-wrap-balancer';


const Features = () => {
  return (
    <section className="py-16">
      <div className="container py-4">
        <h2 className="sr-only" id="features">
          Features
        </h2>
        <div className="flex flex-col gap-16">
          <FeatureWrapper title="Lorem ipsum dolor sit amet, consectetur.">
            <Card>
              <div className="grid gap-8 px-6 py-6 lg:grid-cols-[2.5fr_1fr] lg:py-12">
                <Image
                  src={mock}
                  height={400}
                  width={600}
                  alt="Placeholder"
                  unoptimized
                  className="aspect-video w-full rounded-md border object-cover"
                />
                <div className="flex flex-col gap-2 lg:gap-4">
                  <h3 className="text-xl font-extrabold lg:text-3xl">
                    Lorem ipsum dolor sit amet, consectetur.
                  </h3>
                  <p className="text-lg font-medium text-secondary lg:text-2xl">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quo, velit.
                  </p>
                </div>
              </div>
            </Card>

            <div className="grid gap-8 lg:grid-cols-[2fr_1fr]">
              <Card>
                <Image
                  src={mock}
                  height={200}
                  width={300}
                  alt="Placeholder"
                  unoptimized
                  className="aspect-video w-full rounded-md border object-cover"
                />
              </Card>
              <Card>
                <div className="flex flex-col justify-between gap-4 px-6 pt-12 h-full">
                  <div className="flex flex-col gap-2 lg:gap-4">
                    <h3 className="text-base font-extrabold lg:text-xl">
                      Lorem ipsum dolor sit amet, consectetur.
                    </h3>
                    <p className="text-sm font-medium text-secondary lg:text-base">
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quo, velit.
                    </p>
                  </div>
                  <Image
                    src={mock}
                    height={200}
                    width={300}
                    alt="Placeholder"
                    unoptimized
                    className="aspect-video w-full rounded-md border object-cover"
                  />
                </div>
              </Card>
            </div>
          </FeatureWrapper>
        </div>
      </div>
    </section>
  );
};

export const FeatureWrapper: React.FC<{
  title: string;
  titleClassName?: string;
  children: React.ReactNode;
  wrapperClassName?: string;
}> = ({ title, children, titleClassName, wrapperClassName }) => {
  return (
    <div className="relative">
      <div className="max-w-lg md:max-w-2xl">
        <Balancer
          as="h3"
          className={cn('mb-12 text-4xl font-extrabold lg:text-5xl', titleClassName)}
          id="open-source"
        >
          {title}
        </Balancer>
      </div>
      <div className={cn('grid gap-8', wrapperClassName)}>{children}</div>
    </div>
  );
};

export default Features;