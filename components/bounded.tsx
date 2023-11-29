import React from 'react';
import { Slot } from '@radix-ui/react-slot';

import { cn } from '@/lib/utils';

type BondedProps = {
  asChild?: boolean;
  children: React.ReactNode;
  className?: string;
}

export function Bounded({
  asChild,
  children,
  className,
  ...props
}: BondedProps) {
  const Comp = asChild ? Slot : 'section';

  return (
    <Comp
      {...props}
      className={cn(
        'px-4',
        className,
      )}
    >
      <div className="w-full max-w-6xl mx-auto">
        {children}
      </div>
    </Comp>
  )
}
