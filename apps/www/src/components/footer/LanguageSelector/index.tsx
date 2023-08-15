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
        <Button
          variant="outline"
          aria-label="Open language selector"
          className="data-[state=open]:bg-accent"
        >
          <div className="flex items-center">
            <div className="flex items-center gap-1">
              {/*TODO save icon on @pedaki/common/ui/icons (lucide-icon : languages)*/}
              <svg width="18" height="18" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="m5 8l6 6m-7 0l6-6l2-3M2 5h12M7 2h1m14 20l-5-10l-5 10m2-4h6"
                />
              </svg>
              <span>Change language</span>
            </div>
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
