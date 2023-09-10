'use client';

import { DropdownMenuItem } from '@pedaki/design';
import { signOut } from 'next-auth/react';
import React from 'react';
import { toast } from 'sonner';

export const SignOutItem = () => {
  const onSignOut = async () => {
    console.log('signout');
    await signOut({ callbackUrl: '/' }).then(() => {
      toast.success('Déconnexion réussie');
    });
  };

  return (
    <DropdownMenuItem className="text-red-500" onClick={onSignOut}>
      Déconnexion
    </DropdownMenuItem>
  );
};
