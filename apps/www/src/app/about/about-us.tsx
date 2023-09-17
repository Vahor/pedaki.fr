import { Button } from '@pedaki/design/ui/button';
import SectionTitle from '~/components/section/SectionTitle';
import { env } from '~/env.mjs';
import React from 'react';


const AboutUs = () => {
  return (
    <section>
      <SectionTitle anchor="about-us">About Us</SectionTitle>
      <div className="pb-8 text-muted-foreground">
        <p>Ici on dit qu&apos;on est 3 gus qui font ça pour un projet de fin d&apos;études.</p>
        <p>
          Là on fait un beau bouton qui dit d&apos;aller sur la doc
          <a href={`${env.NEXT_PUBLIC_DOCS_URL}/news/introduction`}>
            <Button>ici</Button>
          </a>
        </p>
      </div>
    </section>
  );
};

export default AboutUs;