"use client";

import { Toaster } from "sonner";
import React from "react";

interface Props {
  children: React.ReactElement;
}

export const Providers = ({ children }: Props) => {
  return (
    <>
      <Toaster />
      {children}
    </>
  );
};
