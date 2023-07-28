"use client";

import { Toaster } from "sonner";
import React from "react";

interface Props {
  children: (React.ReactElement | React.ReactNode) | (React.ReactElement | React.ReactNode)[];
}

export const Providers = ({ children }: Props) => {
  return (
    <>
      <Toaster />
      {children}
    </>
  );
};
