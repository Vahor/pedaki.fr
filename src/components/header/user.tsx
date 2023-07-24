import React from "react";
import { auth } from "~/server/auth";
import { type Session } from "next-auth";
import { Avatar, AvatarFallback, AvatarImage } from "@pedaki/common/ui/avatar";

const User = async () => {
  const session = await auth();

  if (session) {
    return <Authenticated session={session} />;
  }
  return <Guest />;
};

const Guest = () => {
  return (
    <div>
      <span>Guest</span>
    </div>
  );
};

const Authenticated = ({ session }: { session: Session }) => {
  return (
    <div className="flex items-center space-x-2">
      <Avatar>
        <AvatarImage src={session.user.image} className="h-8 my-auto"/>
        <AvatarFallback>..</AvatarFallback>
      </Avatar>
    </div>
  );
};

export default User;
