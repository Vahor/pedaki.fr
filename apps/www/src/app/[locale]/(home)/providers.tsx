'use client';

import { I18nProviderClient } from '~/locales/client';
import fr from '~/locales/fr';
import type { BaseLocale } from 'international-types';
import React from 'react';
import { Provider as BalancerProvider } from 'react-wrap-balancer';
import { Toaster } from 'sonner';

interface Props {
  children: (React.ReactElement | React.ReactNode) | (React.ReactElement | React.ReactNode)[];
}

export const Providers = ({ children }: Props) => {
  // TODO: fix usage of `as unknown as BaseLocale`, related to the use of object notation in the lang files
  return (
    <>
      <Toaster />
      <BalancerProvider>
        <I18nProviderClient fallbackLocale={fr as unknown as BaseLocale}>
          {children}
        </I18nProviderClient>
      </BalancerProvider>
    </>
  );
};
