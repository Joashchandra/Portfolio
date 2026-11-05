'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import Image from 'next/image';
import { skillset } from '@/data/skillsets';
import SectionHeader from '../ui/SectionHeader';
import Pagination from '../ui/Pagination';

export default function SkillsetSection() {
  const { badge, heading, skills } = skillset;
  const [currentPage, setCurrentPage] = useState(0);
  const [itemsPerPage, setItemsPerPage] = useState(6);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setItemsPerPage(3);
      } else {
        setItemsPerPage(6);
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const totalPages = Math.ceil(skills.length / itemsPerPage);
  const showPagination = skills.length > itemsPerPage;

  const safePage = currentPage >= totalPages ? 0 : currentPage;
  const startIndex = safePage * itemsPerPage;
  const currentSkills = skills.slice(startIndex, startIndex + itemsPerPage);

  const handlePrev = () => {
    if (safePage > 0) {
      setCurrentPage((prev) => prev - 1);
    }
  };

  const handleNext = () => {
    if (safePage < totalPages - 1) {
      setCurrentPage((prev) => prev + 1);
    }
  };

  const isFirstPage = safePage === 0;
  const isLastPage = safePage === totalPages - 1;

  return (
    <section
      id='skill'
      className='flex flex-col w-full py-5xl px-xl gap-3xl scroll-mt-20 md:px-5xl lg:py-8xl xl:px-10xl xl:gap-6xl xl:scroll-mt-21.5'
    >
      <SectionHeader
        badge={badge}
        heading={heading}
        className='text-center items-center'
      />

      <svg width='0' height='0' className='absolute'>
        <defs>
          <linearGradient
            id='purple-gradient'
            x1='0%'
            y1='0%'
            x2='100%'
            y2='100%'
          >
            <stop offset='29.66%' stopColor='#9747ff' />
            <stop offset='172.07%' stopColor='#1179fc' />
          </linearGradient>
        </defs>
      </svg>

      <div className='flex flex-col gap-xl lg:gap-4xl'>
        <AnimatePresence mode='wait'>
          <motion.div
            key={`${safePage}-${itemsPerPage}`}
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.35, ease: 'easeInOut' }}
            className='grid grid-cols-1 md:grid-cols-2 gap-xl'
          >
            {currentSkills.map((skill, index) => {
              const radius = 44;
              const circumference = 2 * Math.PI * radius;
              const targetDashoffset =
                circumference - (skill.percentage / 100) * circumference;

              return (
                <motion.div
                  key={skill.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.05, duration: 0.4 }}
                  className='border border-neutral-300 rounded-xl p-xl gap-xl shadow-xs flex items-center hover:shadow-md transition-shadow lg:p-3xl lg:gap-3xl'
                >
                  <div className='relative w-25 h-25 shrink-0 flex items-center justify-center'>
                    <svg className='w-full h-full' viewBox='0 0 100 100'>
                      <circle
                        cx='50'
                        cy='50'
                        r={radius}
                        fill='transparent'
                        className='stroke-neutral-300 stroke-10'
                      />

                      <motion.circle
                        cx='50'
                        cy='50'
                        r={radius}
                        stroke='url(#purple-gradient)'
                        strokeLinecap='round'
                        fill='transparent'
                        strokeDasharray={circumference}
                        initial={{ strokeDashoffset: circumference }}
                        whileInView={{ strokeDashoffset: targetDashoffset }}
                        transition={{
                          duration: 1.2,
                          ease: 'easeInOut',
                          delay: index * 0.1,
                        }}
                        className='stroke-10'
                      />
                    </svg>
                    <span className='absolute text-display-xs font-medium text-neutral-950'>
                      {skill.percentage}%
                    </span>
                  </div>

                  <div className='flex flex-col gap-md xl:gap-xs'>
                    <div className='flex items-center gap-md'>
                      {skill.iconUrl && (
                        <div className='relative w-8 h-8 rounded-full bg-neutral-100 shrink-0 flex items-center justify-center'>
                          <Image
                            src={skill.iconUrl}
                            alt={skill.name}
                            width={18}
                            height={18}
                            className='object-contain'
                          />
                        </div>
                      )}
                      <h3 className='text-md font-semibold text-gray-950 xl:text-lg'>
                        {skill.name}
                      </h3>
                    </div>
                    <p className='text-sm text-neutral-800 xl:text-md'>
                      {skill.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </AnimatePresence>

        {showPagination && (
          <Pagination
            onPrev={handlePrev}
            onNext={handleNext}
            isFirst={isFirstPage}
            isLast={isLastPage}
            prevLabel='Previous skills'
            nextLabel='Next skills'
          />
        )}
      </div>
    </section>
  );
}
