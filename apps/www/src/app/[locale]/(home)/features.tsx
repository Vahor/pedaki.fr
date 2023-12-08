import { cn } from '@pedaki/design/utils/cn';
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
            <div>oui</div>
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
}> = ({ title, children, titleClassName }) => {
  return (
    <div className="relative">
      <div className="max-w-lg md:max-w-2xl">
        <Balancer
          as="h3"
          className={cn(
            'mb-12 text-title-3 font-bold lg:text-title-2 lg:font-bold',
            titleClassName,
          )}
          id="open-source"
        >
          {title}
        </Balancer>
      </div>
      <div>{children}</div>
    </div>
  );
};

export default Features;
