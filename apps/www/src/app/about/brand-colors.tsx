import { cn } from '@pedaki/design/utils';
import SectionTitle from '~/components/section/SectionTitle';
import React from 'react';

const BrandColors = () => {
  return (
    <section>
      <SectionTitle anchor="assets">Brand colors</SectionTitle>
      <p className="mb-8 text-secondary">
        Les couleurs de notre marque sont les suivantes, vous pouvez les voir en action sur notre
        site web.
      </p>
      <div className="grid grid-cols-1 gap-x-8 gap-y-2 rounded-lg border bg-secondary p-2 md:grid-cols-2 lg:grid-cols-3">
        <AssetColor
          title="Orange"
          hex="#F76808"
          rgb="RGB 243 88 21"
          descriptionClassName="text-primary-foreground"
        />
        <AssetColor
          title="Brown Orange"
          hex="#E48844"
          rgb="RGB 228 136 68"
          descriptionClassName="text-primary-foreground"
        />
        <AssetColor
          title="Logo green"
          hex="#4e867e"
          rgb="RGB 78 134 126"
          descriptionClassName="text-primary-foreground"
        />
        <AssetColor
          title="Light gray"
          hex="#F9F9F9"
          rgb="RGB 249 249 249"
          descriptionClassName="text-primary-foreground"
        />
        <AssetColor
          title="Dark gray"
          hex="#1a1a1a"
          rgb="RGB 26 26 26"
          descriptionClassName="text-primary-foreground"
        />
      </div>
    </section>
  );
};

const AssetColor = ({
  title,
  hex,
  rgb,
  className,
  descriptionClassName,
}: {
  title: string;
  hex: string;
  rgb?: string;
  className?: string;
  descriptionClassName?: string;
}) => {
  return (
    <div className={cn('flex items-center', className)}>
      <div
        className="mr-2 inline-block h-5 w-5 rounded-full border"
        style={{ backgroundColor: hex }}
      ></div>
      <div className="inline-block">
        <p>
          <span className="text-foreground mr-2 select-none text-lg font-medium">{title}</span>
          <span className={cn('mr-2 text-sm', descriptionClassName)}>{hex}</span>
          <span className={cn('mr-2 text-sm', descriptionClassName)}>{rgb}</span>
        </p>
      </div>
    </div>
  );
};

export default BrandColors;
