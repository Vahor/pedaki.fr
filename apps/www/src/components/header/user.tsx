'use client';

import { Button } from '@pedaki/design/ui/button';
import { useScopedI18n } from '~/locales/client';
import { getCookie } from 'cookies-next';
import Link from 'next/link';
import React from 'react';
import {env} from "~/env.mjs";

const cookiesOptions = {
  httpOnly: true,
  secure: process.env.NODE_ENV === 'production',
  sameSite: 'lax',
  domain: process.env.NODE_ENV === 'production' ? '.pedaki.fr' : 'localhost',
} as const;
const cookieName = 'recent-workspace';

const getCookieValue = () => {
  const cookie = getCookie(cookieName, cookiesOptions);
  if (!cookie) return null;
  try {
    const data = JSON.parse(cookie);
    if (!data || typeof data !== 'object' || !('url' in data)) return null;
    const url = data.url;
    if (typeof url !== 'string') return null;
    return { url };
  } catch (e) {
    return null;
  }
};

const User = () => {
  const [cookie, setCookie] = React.useState<null | { url: string }>(null);

  React.useEffect(() => {
    setCookie(getCookieValue());
  }, []);

  if (cookie) {
    return <Authenticated url={cookie.url} />;
  }
  return <Guest />;
};

const Guest = () => {
  const headerT = useScopedI18n('components.header');

  return (
    <Link href={env.NEXT_PUBLIC_APP_URL} prefetch={false}>
      <Button variant="outline" className="font-semibold" suppressHydrationWarning>
        {headerT('user.guest')}
      </Button>
    </Link>
  );
};

const Authenticated = ({ url }: { url: string }) => {
  const headerT = useScopedI18n('components.header');

  return (
    <Link href={url} prefetch={false}>
      <Button variant="outline" className="font-semibold">
        {headerT('user.session')}
      </Button>
    </Link>
  );
};

export default User;
