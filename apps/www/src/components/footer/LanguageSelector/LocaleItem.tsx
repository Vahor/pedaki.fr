'use client';

import { DropdownMenuItem, DropdownMenuLabel } from '@pedaki/common/ui/dropdown-menu';
import { IconFlagFR, IconFlagGB  } from '@pedaki/common/ui/icons';
import type {IconType} from '@pedaki/common/ui/icons';
import type { LocaleCode, locales } from '~/config/locales';
import React from 'react';


const LocaleIcon: Record<LocaleCode, IconType> = {
    fr: IconFlagFR,
    en: IconFlagGB,
}

export const LocaleItem = ({ locale }: { locale: (typeof locales)[number] }) => {
  const activeLocale = 'fr';
  const isActive = locale.code === activeLocale;
  const Icon = LocaleIcon[locale.code];

  return (
    <DropdownMenuItem
      disabled={isActive}
      key={locale.code}
      className="flex items-center space-x-2"
      onClick={() => alert('TODO: change locale to ' + locale.code)}
    >
      <Icon className="w-6 h-6 rounded-lg" />
      <DropdownMenuLabel>{locale.name}</DropdownMenuLabel>
    </DropdownMenuItem>
  );
};