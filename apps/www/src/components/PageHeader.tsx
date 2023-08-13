import { cn } from '@pedaki/common/lib/utils';
import React from 'react';
import Balancer from 'react-wrap-balancer';


interface PageHeaderProps {
  title: string;
  description?: string;
  withPadding?: boolean;
}

export const PageHeader = ({ title, description, withPadding = true }: PageHeaderProps) => {
  return (
    <div className={cn("flex flex-col items-center justify-center gap-4", withPadding && wrapperClassName)}>
        <Balancer
          as="h1"
          className="text-center font-bold tracking-tighter text-gray-900 text-5xl"
        >
          {title}
        </Balancer>
      {description && description.length > 0 && (
        <div className="max-w-[350px] md:max-w-[500px]">
          <Balancer
            as="p"
            className="text-center text-base leading-7 text-muted-foreground md:text-lg"
          >
            {description}
          </Balancer>
        </div>
      )}
    </div>
  );
};

export const wrapperClassName = 'px-4 pt-8';