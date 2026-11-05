'use client';

import { ArrowLeft, ArrowRight } from 'lucide-react';

interface PaginationProps {
  onPrev: () => void;
  onNext: () => void;
  isFirst: boolean;
  isLast: boolean;
  prevLabel?: string;
  nextLabel?: string;
  className?: string;
}

export default function Pagination({
  onPrev,
  onNext,
  isFirst,
  isLast,
  prevLabel = 'Previous page',
  nextLabel = 'Next page',
  className = '',
}: PaginationProps) {
  return (
    <div className={`flex items-center justify-center gap-4 ${className}`}>
      <button
        onClick={onPrev}
        disabled={isFirst}
        aria-label={prevLabel}
        className={`flex items-center justify-center w-12 h-12 p-sm gap-sm rounded-full border border-neutral-300 text-neutral-950 transition-colors ${
          isFirst
            ? 'border-neutral-300 cursor-not-allowed'
            : 'border-primary-200 hover:text-primary-200 cursor-pointer'
        }`}
      >
        <ArrowLeft className='w-4.5 h-4.5' />
      </button>

      <button
        onClick={onNext}
        disabled={isLast}
        aria-label={nextLabel}
        className={`flex items-center justify-center w-12 h-12 p-sm gap-sm rounded-full border border-neutral-300 text-neutral-950 transition-colors ${
          isLast
            ? 'border-neutral-300 cursor-not-allowed'
            : 'border-primary-200 hover:text-primary-200 cursor-pointer'
        }`}
      >
        <ArrowRight className='w-4.5 h-4.5' />
      </button>
    </div>
  );
}
