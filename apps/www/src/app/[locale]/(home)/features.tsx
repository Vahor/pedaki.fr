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
          <FeatureWrapper
            label="Sécurisé"
            title="Lorem ipsum dolor sit amet, consectetur."
            labelClassName="bg-green-3 text-green-10"
          >
            <div>oui</div>
          </FeatureWrapper>
        </div>
      </div>
    </section>
  );
};

export const FeatureWrapper: React.FC<{
  title: string;
  label: string;
  labelClassName: string;
  titleClassName?: string;
  children: React.ReactNode;
}> = ({ title, label, labelClassName, children, titleClassName }) => {
  return (
    <div className="relative">
      <div className={cn('w-max rounded-sm px-2 mb-2 py-1.5 font-medium text-sm', labelClassName)}>{label}</div>
      <div className="max-w-lg md:max-w-2xl">
        <Balancer as="h3" className={cn("text-4xl font-bold lg:text-5xl mb-12", titleClassName)} id="open-source">
          {title}
        </Balancer>
      </div>
      <div>{children}</div>
    </div>
  );
};

export default Features;