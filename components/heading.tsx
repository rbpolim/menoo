import React from 'react';
import { Slot } from '@radix-ui/react-slot';

import { cn } from '@/lib/utils';

type HeadingProps = {
  asChild?: boolean;
  className?: string;
  children: React.ReactNode;
}

export function Heading({
  asChild,
  className,
  children,
  ...props
}: HeadingProps) {
  const Comp = asChild ? Slot : 'h2';

  return (
    <Comp
      {...props}
      className={cn(
        'text-2xl font-semibold leading-8 capitalize',
        className,
      )}
    >
      {children}
    </Comp>
  )
}