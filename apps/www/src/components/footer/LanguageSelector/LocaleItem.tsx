'use client';

import { DropdownMenuItem, DropdownMenuLabel } from '@pedaki/design/ui/dropdown-menu';
import type { IconType } from '@pedaki/design/ui/icons';
import { IconFlagFR, IconFlagGB } from '@pedaki/design/ui/icons';
import type { locales } from '~/config/locales';
import { useChangeLocale, useCurrentLocale } from '~/locales/client';
import type { LocaleCode } from '~/locales/server';
import React from 'react';

const LocaleIcon: Record<LocaleCode, IconType> = {
  fr: IconFlagFR,
  en: IconFlagGB,
};

export const LocaleItem = ({ locale }: { locale: (typeof locales)[number] }) => {
  const activeLocale = useCurrentLocale();
  const isActive = locale.code === activeLocale;
  const Icon = LocaleIcon[locale.code];

  const changeLocale = useChangeLocale({ preserveSearchParams: true });

  return (
    <DropdownMenuItem
      disabled={isActive}
      key={locale.code}
      onClick={() => changeLocale(locale.code)}
    >
      <Icon className="h-6 w-6 rounded-lg" />
      <DropdownMenuLabel>{locale.name}</DropdownMenuLabel>
    </DropdownMenuItem>
  );
};
