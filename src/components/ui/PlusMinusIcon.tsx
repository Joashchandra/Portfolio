'use client';

import { MotionConfig, motion } from 'motion/react';

interface PlusMinusIconProps {
  className?: string;
  colorClass?: string;
}

export function PlusMinusIcon({
  className = 'size-4',
  colorClass = 'bg-current',
}: PlusMinusIconProps) {
  return (
    <MotionConfig
      transition={{
        duration: 0.5,
        ease: 'easeInOut',
      }}
    >
      <div
        className={`relative flex items-center justify-center shrink-0 ${className}`}
      >
        <span
          className={`absolute inset-x-0 border border-neutral-950 rounded-full ${colorClass}`}
        />

        <motion.span
          className={`absolute inset-y-0 border border-neutral-950 rounded-full ${colorClass} origin-center group-aria-expanded/accordion-trigger:rotate-90 group-aria-expanded/accordion-trigger:opacity-0 group-aria-expanded/accordion-trigger:scale-50 transition-all duration-500`}
        />
      </div>
    </MotionConfig>
  );
}
