import * as React from 'react';
import { cn } from 'cn';

function Textarea({ className, ...props }: React.ComponentProps<'textarea'>) {
  return (
    <textarea
      data-slot='textarea'
      className={cn(
        'flex w-full rounded-xl border border-neutral-300 px-xl py-md gap-md text-md text-neutral-950 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-primary-200 transition-colors resize-none no-scrollbar',
        className
      )}
      {...props}
    />
  );
}

export { Textarea };
