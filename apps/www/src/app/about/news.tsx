import { env } from '~/env.mjs';
import React from 'react';

const News = () => {
  return (
    <section>
      <h3>News</h3>
      <p>
        Là on fait un beau bouton qui dit d&apos;aller sur la doc
        <a href={`${env.NEXT_PUBLIC_DOCS_URL}/news/introduction`}>ici</a>
      </p>
    </section>
  );
};

export default News;
