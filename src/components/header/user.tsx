import React from "react";
import { auth } from "~/server/auth";
import { type Session } from "next-auth";

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
    <div>
      <span>{session.user.name}</span>
    </div>
  );
};

export default User;
