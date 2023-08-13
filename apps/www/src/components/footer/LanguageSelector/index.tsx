import { Button } from '@pedaki/common/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from '@pedaki/common/ui/dropdown-menu';
import { LocaleItem } from '~/components/footer/LanguageSelector/LocaleItem';
import { locales } from '~/config/locales';
import React from 'react';

const LanguageSelector = () => {
  // TODO: use the active locale from the i18n context
  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="group" asChild>
        <Button variant="outline" aria-label="Open language selector">
          <div className="flex items-center">
            <span>Change language</span>
            {/*TODO: add icon in @pedaki/common/ui/icons*/}
            <div className="relative top-[1px] ml-1 w-max transition duration-100 group-data-[state=open]:rotate-180">
              <svg width="16" height="16" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path
                  fill="none"
                  stroke="#000000"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="m6 9l6 6l6-6"
                />
              </svg>
            </div>
          </div>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" side="top">
        {locales.map(locale => {
          return <LocaleItem locale={locale} key={locale.code} />;
        })}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default LanguageSelector;
