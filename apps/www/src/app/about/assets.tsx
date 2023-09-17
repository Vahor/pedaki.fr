import { cn } from '@pedaki/design/utils';
import SectionTitle from '~/components/section/SectionTitle';
import Image from 'next/image';
import React from 'react';

const Assets = () => {
  return (
    <section>
      <SectionTitle anchor="assets">Assets</SectionTitle>
      <p className="mb-8 text-secondary">
        Tous nos assets sont à votre disposition, la seule chose que nous vous demandons est de nous
        citer si vous les utilisez, et de ne pas les modifier.
      </p>
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
        <AssetImage
          className="dark bg-primary"
          title="Logo"
          alt="Le logo de Pedaki"
          image="https://pedaki.fr/logo-dark.svg"
        />
        <AssetImage
          className="bg-secondary"
          title="Logo"
          alt="Le logo de Pedaki"
          image="https://pedaki.fr/logo-light.svg"
        />
        <AssetImage
          className="bg-secondary"
          title="Logo"
          alt="Icon"
          image="https://pedaki.fr/logo.png"
        />
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
      </div>
    </section>
  );
};

const AssetCard = ({
  className,
  children,
  style,
}: {
  className?: string;
  children: React.ReactNode;
  style?: React.CSSProperties;
}) => {
  return (
    <div
      className={cn(
        'group relative flex h-[300px] flex-col items-center justify-center rounded-lg border p-8 text-left',
        className,
      )}
      style={style}
    >
      {children}
    </div>
  );
};

const AssetImage = ({
  alt,
  image,
  className,
}: {
  title: string;
  alt: string;
  image: string;
  className?: string;
}) => {
  return (
    <AssetCard className={cn(className, 'select-none')}>
      <Image
        src={image}
        alt={alt}
        fill
        style={{ objectFit: 'contain' }}
        className="p-8"
        sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
      />
    </AssetCard>
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
    <AssetCard className={className} style={{ backgroundColor: hex }}>
      <div>
        <p className="text-foreground select-none text-lg font-medium">{title}</p>
        <p className={cn('text-sm', descriptionClassName)}>{hex}</p>
        <p className={cn('text-sm', descriptionClassName)}>{rgb}</p>
      </div>
    </AssetCard>
  );
};

export default Assets;
