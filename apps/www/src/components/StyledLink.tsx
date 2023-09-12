import { cn } from '@pedaki/design/utils';
import type { VariantProps } from 'class-variance-authority';
import { cva } from 'class-variance-authority';
import Link from 'next/link';
import * as React from 'react';

const styledLinkVariants = cva(
  'transition-colors disabled:pointer-events-none disabled:opacity-50  focus-visible:ring-offset-background focus-visible:ring-2 focus-visible:ring-ring focus-visible:outline-none focus-visible:ring-offset-2  focus-visible:ring-primary',
  {
    variants: {
      variant: {
        default: 'text-primary hover:text-primary/80',
        secondary: 'text-muted-foreground hover:text-foreground/80',
      },
    },
    defaultVariants: {
      variant: 'default',
    },
  },
);
export type StyledLinkProps = React.ComponentProps<typeof Link> &
  VariantProps<typeof styledLinkVariants> & {
    focusable?: boolean;
    linkClassName?: string;
  };

const StyledLink: React.FC<StyledLinkProps> = ({
  className,
  variant,
  focusable = true,
  linkClassName,
  ...props
}) => {
  if (focusable) {
    const { children, ...other } = props;

    return (
      <Link {...other} className={cn('block w-max', linkClassName)}>
        <button className={cn(styledLinkVariants({ variant, className }))}>{children}</button>
      </Link>
    );
  }
  return <Link className={cn(styledLinkVariants({ variant, className }))} {...props} />;
};
StyledLink.displayName = 'StyledLink';

export { StyledLink };
