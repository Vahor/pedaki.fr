'use client';

import { I18nProviderClient } from '~/locales/client';
import React from 'react';
import { Provider as BalancerProvider } from 'react-wrap-balancer';
import { Toaster } from 'sonner';

interface Props {
  children: (React.ReactElement | React.ReactNode) | (React.ReactElement | React.ReactNode)[];
  locale: string;
}

export const Providers = ({ children, locale }: Props) => {
  return (
    <>
      <Toaster />
      <BalancerProvider>
        <I18nProviderClient locale={locale}>{children}</I18nProviderClient>
      </BalancerProvider>
    </>
  );
};
