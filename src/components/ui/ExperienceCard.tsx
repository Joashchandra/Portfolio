'use client';

import { motion } from 'motion/react';
import Image from 'next/image';
import type { ExperienceItem } from '@/types';

interface ExperienceCardProps {
  item: ExperienceItem;
  index: number;
}

export default function ExperienceCard({ item, index }: ExperienceCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.6, delay: index * 0.1, ease: 'easeOut' }}
      whileHover={{ y: -4 }}
      className='relative flex flex-col w-full rounded-xl bg-neutral-25 border border-neutral-300 overflow-hidden lg:flex-row lg:gap-xl'
    >
      <div className='flex items-center justify-center w-fit  bg-purple-gradient text-neutral-25 p-4 rounded-r-[3rem] lg:rounded-r-full lg:p-7'>
        <span className='w-full text-sm font-semibold md:text-md whitespace-nowrap'>
          {item.startYear} - {item.endYear}
        </span>
      </div>

      <div className='flex flex-col w-full md:flex-row items-start md:items-center justify-between p-4 gap-lg md:gap-3xl xl:gap-6xl'>
        <div className='flex flex-col gap-lg md:gap-md lg:justify-between whitespace-nowrap'>
          <h3 className='text-lg lg:text-xl font-semibold text-neutral-950'>
            {item.role}
          </h3>
          <div className='flex items-center gap-md'>
            {item.iconUrl && (
              <div className='relative flex items-center justify-center w-8 h-8 shrink-0'>
                <Image
                  src={item.iconUrl}
                  alt={item.company}
                  fill
                  className='object-contain w-7 h-7'
                />
              </div>
            )}
            <span className='text-md font-medium text-neutral-950 lg:text-lg'>
              {item.company}
            </span>
          </div>
        </div>

        <div className='flex max-w-184.5'>
          <p className='text-sm text-neutral-800 lg:text-md'>
            {item.description}
          </p>
        </div>
      </div>
    </motion.div>
  );
}
