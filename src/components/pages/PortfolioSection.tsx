'use client';

import { useState, useRef, useEffect } from 'react';
import { portfolioData } from '@/data/portfolio';
import PortfolioCard from '@/components/ui/PortfolioCard';
import Pagination from '../ui/Pagination';
import SectionHeader from '../ui/SectionHeader';

export default function PortfolioSection() {
  const { badge, heading, projects } = portfolioData;
  const [mobilePage, setMobilePage] = useState(0);

  const [isMdFirst, setIsMdFirst] = useState(true);
  const [isMdLast, setIsMdLast] = useState(false);

  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const projectsPerPage = 2;
  const totalMobilePages = Math.ceil(projects.length / projectsPerPage);

  const prevMobilePage = () => {
    if (mobilePage > 0) {
      setMobilePage((prev) => prev - 1);
    }
  };

  const nextMobilePage = () => {
    if (mobilePage < totalMobilePages - 1) {
      setMobilePage((prev) => prev + 1);
    }
  };

  const isFirstMobilePage = mobilePage === 0;
  const isLastMobilePage = mobilePage === totalMobilePages - 1;

  const currentMobileProjects = projects.slice(
    mobilePage * projectsPerPage,
    (mobilePage + 1) * projectsPerPage
  );

  const handleScroll = () => {
    if (!scrollContainerRef.current) return;
    const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current;

    setIsMdFirst(scrollLeft <= 5);
    setIsMdLast(scrollLeft + clientWidth >= scrollWidth - 5);
  };

  useEffect(() => {
    const container = scrollContainerRef.current;
    if (container) {
      handleScroll();
      container.addEventListener('scroll', handleScroll);
      return () => container.removeEventListener('scroll', handleScroll);
    }
  }, []);

  const scrollHorizontal = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const scrollAmount = direction === 'left' ? -600 : 600;
      scrollContainerRef.current.scrollBy({
        left: scrollAmount,
        behavior: 'smooth',
      });
    }
  };

  return (
    <section
      id='portfolio'
      className='relative flex flex-col w-full py-5xl px-xl gap-3xl scroll-mt-20 md:none lg:py-8xl xl:gap-6xl xl:scroll-mt-21.5 snap-start'
    >
      <SectionHeader
        badge={badge}
        heading={heading}
        className='text-center items-center'
      />

      <div className='w-full'>
        <div className='flex flex-col gap-xl md:hidden'>
          {currentMobileProjects.map((project) => (
            <div key={project.id} className='w-full'>
              <PortfolioCard project={project} />
            </div>
          ))}

          <div className='mt-2'>
            <Pagination
              onPrev={prevMobilePage}
              onNext={nextMobilePage}
              isFirst={isFirstMobilePage}
              isLast={isLastMobilePage}
              prevLabel='Previous projects'
              nextLabel='Next projects'
            />
          </div>
        </div>

        <div className='hidden md:flex flex-col w-full gap-4xl'>
          <div
            ref={scrollContainerRef}
            className='flex gap-6 overflow-x-auto overflow-y-hidden snap-x snap-mandatory scrollbar-none md:px-5xl xl:px-10xl pr-4 touch-pan-x'
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {projects.map((project) => (
              <div key={project.id} className='w-145 shrink-0 snap-start'>
                <PortfolioCard project={project} />
              </div>
            ))}
          </div>
          <div className='flex justify-center'>
            <Pagination
              onPrev={() => scrollHorizontal('left')}
              onNext={() => scrollHorizontal('right')}
              isFirst={isMdFirst}
              isLast={isMdLast}
              prevLabel='Previous projects'
              nextLabel='Next projects'
            />
          </div>
        </div>
      </div>
    </section>
  );
}
