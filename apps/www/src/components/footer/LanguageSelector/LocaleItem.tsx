'use client';

import { DropdownMenuItem, DropdownMenuLabel } from '@pedaki/common/ui/dropdown-menu';
import type {locales} from '~/config/locales';
import React from 'react';

export const LocaleItem = ({ locale }: { locale: (typeof locales)[0] }) => {
  const activeLocale = 'fr';
  const isActive = locale.code === activeLocale;

  return (
    <DropdownMenuItem
      disabled={isActive}
      key={locale.code}
      className="flex items-center space-x-2"
      onClick={() => alert('TODO: change locale to ' + locale.code)}
    >
      {locale.icon}
      <DropdownMenuLabel>{locale.name}</DropdownMenuLabel>
    </DropdownMenuItem>
  );
};