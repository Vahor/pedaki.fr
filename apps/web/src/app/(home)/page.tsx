import Hero from "~/app/(home)/hero";
import VideoDemo from "~/app/(home)/video-demo";
import SocialProof from "~/app/(home)/social-proof";
import Features from "~/app/(home)/features";
import Price from "~/app/(home)/price";
import React from "react";

export default function Page() {
  return (
      <>
          <pre>
                {new Date().toISOString()}
          </pre>
        <Hero />
        <VideoDemo />
        <SocialProof />
        <Features />
        <Price />
      </>
  );
}

