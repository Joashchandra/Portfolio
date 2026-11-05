'use client';

import { motion } from 'motion/react';
import Image from 'next/image';
import { Check, X } from 'lucide-react';
import type { ComparisonItem } from '@/types';

interface ComparisonCardProps {
  title: string;
  avatar?: string;
  traits: ComparisonItem[];
  isPrimary?: boolean;
  initialX?: number;
}

export default function ComparisonCard({
  title,
  avatar,
  traits,
  isPrimary = false,
  initialX = 0,
}: ComparisonCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, x: initialX }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.7, ease: 'easeOut' }}
      className={`relative rounded-xl p-3xl gap-3xl flex flex-col justify-between overflow-hidden ${
        isPrimary
          ? 'bg-purple-gradient text-neutral-25'
          : 'bg-white border border-neutral-300 text-neutral-950'
      }`}
    >
      <div className='flex flex-col items-center text-center gap-3xl'>
        <h3 className='text-lg font-semibold'>{title}</h3>

        {avatar ? (
          <div className='relative w-20 h-20 rounded-full overflow-hidden bg-white lg:w-25 lg:h-25'>
            <Image
              src={avatar}
              alt={title}
              fill
              sizes='71px'
              className='object-cover object-center lg:w-22.25 aspect-square'
            />
          </div>
        ) : (
          <div className='w-20 h-20 rounded-full bg-gray-300 flex items-center justify-center lg:w-25 lg:h-25'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              width='48'
              height='48'
              viewBox='0 0 24 24'
              fill='#ffffff'
              stroke='none'
              strokeWidth='2'
              strokeLinecap='round'
              strokeLinejoin='round'
              className='w-12 h-12 lg:w-15 lg:h-15'
              aria-hidden='true'
            >
              <path d='M 12 22 A 10 10 0 0 1 6.074 20.057 A 6 6 0 0 1 17.925 20.056 A 10 10 0 0 1 12 22 Z' />
              <circle cx='12' cy='9' r='5' />
            </svg>
          </div>
        )}
      </div>

      <ul className='flex flex-col gap-2xl lg:gap-3xl'>
        {traits.map((trait, index) => (
          <motion.li
            key={trait.id}
            initial={{ opacity: 0, x: initialX }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.1, duration: 0.4 }}
            className={`flex items-center justify-center gap-lg text-md lg:text-lg ${
              isPrimary ? 'font-medium' : 'font-normal'
            }`}
          >
            {isPrimary ? (
              <Check className='w-6 h-6 text-white stroke-2' />
            ) : (
              <X className='w-6 h-6 text-accent-red stroke-2' />
            )}
            <span>{trait.text}</span>
          </motion.li>
        ))}
      </ul>
    </motion.div>
  );
}
