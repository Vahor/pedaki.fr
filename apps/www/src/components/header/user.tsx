'use client';

import { Avatar, AvatarFallback, AvatarImage } from '@pedaki/common/ui/avatar';
import { Button } from '@pedaki/common/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@pedaki/common/ui/dropdown-menu';
import { Skeleton } from '@pedaki/common/ui/skeleton';
import type { Session } from 'next-auth';
import { SessionProvider, useSession } from 'next-auth/react';
import Link from 'next/link';
import React from 'react';
import { env } from '../../env.mjs';
import { SignOutItem } from './signout-item';

// TODO: RSC makes the page cache not work
//  See the UserWithProvider below, but with this there is a flicker
//  https://nextjs.org/docs/app/building-your-application/rendering/static-and-dynamic#dynamic-rendering
// headers(): Using these in a Server Component will opt the whole route into dynamic rendering at request time.

const User = () => {
  const { data: session, status } = useSession();
  console.log({
    session,
    status,
  });

  if (status === 'authenticated') {
    return <Authenticated session={session} />;
  }
  return <Guest />;
};

const UserWithProvider = () => {
  return (
    <SessionProvider>
      <User />
    </SessionProvider>
  );
};

const Guest = () => {
  return (
    <Link href="/login" prefetch={false}>
      <Button variant="default">Connexion</Button>
    </Link>
  );
};

const Authenticated = ({ session }: { session: Session }) => {
  return (
    <div className="flex items-center space-x-2">
      <DropdownMenu>
        <DropdownMenuTrigger
          className="outline-none focus:outline-none"
          aria-label="Open profile dropdown"
        >
          <Avatar className="h-8 w-8">
            <AvatarImage
              src={session.user.image}
              className="my-auto"
              alt={`Your avatar, ${session.user.name}`}
            />
            <AvatarFallback>
              <Skeleton />
            </AvatarFallback>
          </Avatar>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end">
          <DropdownMenuLabel>{session.user.email}</DropdownMenuLabel>
          <DropdownMenuSeparator />
          <a href={env.NEXT_PUBLIC_APP_URL}>
            <DropdownMenuItem>Dashboard</DropdownMenuItem>
          </a>
          <DropdownMenuItem>Profile</DropdownMenuItem>
          <DropdownMenuSeparator />
          <SignOutItem />
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
};

export default UserWithProvider;
