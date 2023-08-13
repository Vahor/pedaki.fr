import { cn } from '@pedaki/common/lib/utils';
import type { VariantProps } from 'class-variance-authority';
import { cva } from 'class-variance-authority';
import Link from 'next/link';
import * as React from 'react';

const styledLinkVariants = cva('transition-colors disabled:pointer-events-none disabled:opacity-50  focus-visible:ring-offset-background focus-visible:ring-2 focus-visible:ring-ring focus-visible:outline-none focus-visible:ring-offset-2  focus-visible:ring-primary', {
  variants: {
    variant: {
      default:
        'text-primary hover:text-primary/80',
      secondary:
        'text-muted-foreground hover:text-foreground/80',
    },
  },
  defaultVariants: {
    variant: 'default',
  },
});
export type StyledLinkProps = React.ComponentProps<typeof Link> &
  VariantProps<typeof styledLinkVariants> & {
    focusable?: boolean;
  };

const StyledLink: React.FC<StyledLinkProps> = ({
  className,
  variant,
  focusable = true,
  ...props
}) => {
  const Comp = <Link className={cn(styledLinkVariants({ variant, className }))} {...props} />;
  if (focusable) {
    const { children, ...other } = props;

    return (
      <Link {...other}>
        <button className={cn(styledLinkVariants({ variant, className }))}>{children}</button>
      </Link>
    );
  }
  return <Comp />;
};
StyledLink.displayName = 'StyledLink';

export { StyledLink };
