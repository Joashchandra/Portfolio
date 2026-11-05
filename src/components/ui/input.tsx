import * as React from 'react';
import { cn } from 'cn';

function Input({ className, type, ...props }: React.ComponentProps<'input'>) {
  return (
    <input
      type={type}
      data-slot='input'
      className={cn(
        'flex h-12 w-full rounded-xl border border-neutral-300 px-xl py-md gap-md text-md text-neutral-950 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-primary-200 transition-colors',
        className
      )}
      {...props}
    />
  );
}

export { Input };
