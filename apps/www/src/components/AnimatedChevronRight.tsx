import { IconChevronRight } from '@pedaki/design/ui/icons';
import React from 'react';
import {cn} from "@pedaki/design/utils";

interface AnimatedChevronRightProps {
    className?: string;
}

export const AnimatedChevronRight = ({ className }: AnimatedChevronRightProps) => {
  return (
    <>
      <IconChevronRight className={cn("relative left-0 inline h-4 w-4 transition-all group-hover:left-0.5 text-orange-500", className)} />
    </>
  );
};
