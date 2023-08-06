'use client';

import React from 'react';
import { Provider as BalancerProvider } from 'react-wrap-balancer';
import { Toaster } from 'sonner';

interface Props {
  children: (React.ReactElement | React.ReactNode) | (React.ReactElement | React.ReactNode)[];
}

export const Providers = ({ children }: Props) => {
  return (
    <>
      <Toaster />
      <BalancerProvider>{children}</BalancerProvider>
    </>
  );
};