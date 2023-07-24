import React from "react";
import { auth } from "~/server/auth";
import { type Session } from "next-auth";
import { Avatar, AvatarFallback, AvatarImage } from "@pedaki/common/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@pedaki/common/ui/dropdown-menu";
import { SignOutItem } from "~/components/header/signout-item";
import { Button } from "@pedaki/common/ui/button";
import Link from "next/link";

const User = async () => {
  const session = await auth();

  if (session) {
    return <Authenticated session={session} />;
  }
  return <Guest />;
};

const Guest = () => {
  return (
    <Button asChild>
      <Link href="/login">Connexion</Link>
    </Button>
  );
};

const Authenticated = ({ session }: { session: Session }) => {
  return (
    <div className="flex items-center space-x-2">
      <DropdownMenu>
        <DropdownMenuTrigger className="outline-none focus:outline-none">
          <Avatar>
            <AvatarImage src={session.user.image} className="my-auto h-8" />
            <AvatarFallback>..</AvatarFallback>
          </Avatar>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end">
          <DropdownMenuLabel>{session.user.email}</DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuItem>Dashboard</DropdownMenuItem>
          <DropdownMenuItem>Profile</DropdownMenuItem>
          <DropdownMenuSeparator />
          <SignOutItem />
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
};

export default User;
