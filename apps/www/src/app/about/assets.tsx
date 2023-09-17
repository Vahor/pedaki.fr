import { cn } from '@pedaki/design/utils';
import SectionTitle from '~/components/section/SectionTitle';
import Image from 'next/image';
import React from 'react';

const Assets = () => {
  return (
    <section>
      <SectionTitle anchor="assets">Assets</SectionTitle>
      <p className="pb-8 text-muted-foreground">
        Là on fait une petite grille avec le logo, les couleurs, les polices, etc. Et qui dit les
        conditions pour utiliser tout ça.
      </p>

      <p className="text-orange-500">
        orange -500
      </p>
      <p className="text-orange-500/50">
        orange -500/50
      </p>
      <p className="text-orange-300">
        orange -300
      </p>

        <p className="text-primary">
            text-primary
        </p>
        <p className="text-primary/50">
            text-primary/50
        </p>

      <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
        <AssetImage
          className="dark bg-background text-foreground"
          title="Logo"
          alt="Le logo de Pedaki"
          image="https://pedaki.fr/logo-dark.svg"
          width={200}
          height={200}
        />
        <AssetImage
          className="bg-gray-50 text-black"
          title="Logo"
          alt="Le logo de Pedaki"
          image="https://pedaki.fr/logo-light.svg"
          width={200}
          height={200}
        />
        <AssetImage
          className="bg-gray-50 p-16 text-black"
          title="Logo"
          alt="Icon"
          image="https://pedaki.fr/logo.png"
          width={700}
          height={700}
        />
        <AssetColor title="Primary" hex="#F97316" hsl="HSL 25, 90%, 60%" descriptionClassName="text-primary-foreground"/>
        <AssetColor title="Accent" hex="#F97316" />
        <AssetColor title="Muted white" hex="#F4F5F8" />
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
  width,
  height,
  className,
}: {
  title: string;
  alt: string;
  image: string;
  width: number;
  height: number;
  className?: string;
}) => {
  return (
    <AssetCard className={cn(className, 'select-none')}>
      <Image src={image} alt={alt} width={width} height={height} />
    </AssetCard>
  );
};

const AssetColor = ({
  title,
  hex,
  hsl,
  className,
    descriptionClassName,
}: {
  title: string;
  hex: string;
  hsl?: string;
  className?: string;
  descriptionClassName?: string;
}) => {
  return (
    <AssetCard className={className} style={{ backgroundColor: hex }}>
      <div>
        <p className="select-none text-lg font-medium text-foreground">{title}</p>
        <p className={cn("text-sm", descriptionClassName)}>{hex}</p>
        <p className={cn("text-sm", descriptionClassName)}>{hsl}</p>
      </div>
    </AssetCard>
  );
};

export default Assets;