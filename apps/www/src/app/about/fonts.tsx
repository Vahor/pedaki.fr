import { cn } from '@pedaki/design/utils';
import SectionTitle from '~/components/section/SectionTitle';
import React from 'react';

const Fonts = () => {
  // TODO: font du logo
  return (
    <section>
      <SectionTitle anchor="assets">Fonts</SectionTitle>
      <p className="mb-8 text-secondary">
        Les polices utilisées sur notre site web sont les suivantes.
      </p>
      <div className="grid grid-cols-1 gap-x-8 gap-y-2 md:grid-cols-2">
        <Font
          title="Opens sans"
          fontVar="--font-sans"
          descriptionClassName="text-primary-foreground"
          description="Police utilisée sur la majorité du site"
        />
        <Font
          title="Opens sans mono"
          fontVar="--font-mono"
          descriptionClassName="text-primary-foreground"
          description="Police utilisée pour le code"
        />
      </div>
    </section>
  );
};

const Font = ({
  title,
  description,
  fontVar,
  className,
  descriptionClassName,
}: {
  title: string;
  description: string;
  fontVar: string;
  className?: string;
  descriptionClassName?: string;
}) => {
  return (
    <div className={cn('rounded-lg border bg-secondary p-2', className)}>
      <p className="text-foreground mr-2 text-lg font-medium">{title}</p>
      <p className={cn('text-sm', descriptionClassName)}>{description}</p>
      <p style={{ fontFamily: `var(${fontVar})` }} className="mt-1">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      </p>
    </div>
  );
};

export default Fonts;
