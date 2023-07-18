import React from "react";
import "~/styles/globals.css";

export default function DocumentationLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section>
      <header>
        <h1>Documentation</h1>
      </header>
      <main>{children}</main>
    </section>
  );
}
