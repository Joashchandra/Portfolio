'use client';

import { motion } from 'motion/react';
import Image from 'next/image';
import { ArrowUpRight } from 'lucide-react';
import type { PortfolioItem } from '@/types';

interface PortfolioCardProps {
  project: PortfolioItem;
}

export default function PortfolioCard({ project }: PortfolioCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      whileHover={{ scale: 1.01 }}
      className='relative group w-full aspect-580/441 rounded-2xl cursor-pointer shrink-0 snap-center overflow-hidden'
    >
      {/* Background Image */}
      <Image
        src={project.image}
        alt={project.title}
        fill
        sizes='(max-width: 580px) 100vw, 580px'
        className='object-cover object-top transition-transform duration-70005'
      />

      <div className='absolute inset-0 lg:top-1/2 lg:h-1/2 bg-linear-to-t from-black/80 via-black/25 to-transparent opacity-100 lg:opacity-0 lg:group-hover:opacity-100 transition-opacity duration-400' />

      <div className='absolute inset-0 p-4 flex flex-col justify-end lg:opacity-0 lg:group-hover:opacity-100 transition-opacity duration-500 md:p-8'>
        <div className='flex items-center justify-between'>
          <motion.div
            initial={false}
            animate={{
              opacity: 1,
              y: 0,
            }}
            className='flex flex-col gap-lg'
          >
            <h3 className='text-lg font-semibold text-neutral-25'>
              {project.title}
            </h3>

            <div className='flex flex-wrap items-center gap-md'>
              {project.tags.map((tag, idx) => (
                <span
                  key={idx}
                  className='flex items-center px-md py-xs h-6 rounded-full bg-neutral-25 border border-neutral-25 text-xs text-neutral-950 lg:h-fit lg:text-sm'
                >
                  {tag}
                </span>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{
              scale: 1,
              opacity: 1,
            }}
            transition={{ duration: 0.2 }}
            className='hidden lg:block'
          >
            <a
              href={project.link}
              aria-label={`View ${project.title}`}
              className='flex items-center justify-center w-16 h-16 rounded-full bg-white border border-neutral-300 p-md text-neutral-950'
            >
              <ArrowUpRight className='w-6 h-6 stroke-2' />
            </a>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
}
