'use client';

import { useState, useRef, useEffect } from 'react';
import { testimonialData } from '@/data/testimonials';
import TestimonialCard from '@/components/ui/TestimonialCard';
import Pagination from '@/components/ui/Pagination';
import SectionHeader from '../ui/SectionHeader';

export default function TestimonialSection() {
  const { badge, heading, testimonials } = testimonialData;
  const [mobilePage, setMobilePage] = useState(0);

  const [isMdFirst, setIsMdFirst] = useState(true);
  const [isMdLast, setIsMdLast] = useState(false);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const totalMobilePages = testimonials.length;

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

  const currentMobileTestimonial = testimonials[mobilePage];

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
      const scrollAmount = direction === 'left' ? -450 : 450;
      scrollContainerRef.current.scrollBy({
        left: scrollAmount,
        behavior: 'smooth',
      });
    }
  };

  return (
    <section
      id='testimonials'
      className='relative flex flex-col w-full py-5xl px-xl gap-3xl scroll-mt-20 md:none lg:py-8xl xl:gap-6xl xl:scroll-mt-21.5 snap-start'
    >
      <SectionHeader
        badge={badge}
        heading={heading}
        className='text-center items-center'
      />

      <div className='w-full'>
        <div className='flex flex-col gap-6 md:hidden'>
          <TestimonialCard testimonial={currentMobileTestimonial} />

          <div className='flex justify-center'>
            <Pagination
              onPrev={prevMobilePage}
              onNext={nextMobilePage}
              isFirst={isFirstMobilePage}
              isLast={isLastMobilePage}
              prevLabel='Previous testimonial'
              nextLabel='Next testimonial'
            />
          </div>
        </div>

        <div className='hidden md:flex flex-col w-full gap-6xl'>
          <div
            ref={scrollContainerRef}
            className='flex gap-xl overflow-x-auto snap-x snap-mandatory scrollbar-none md:px-5xl xl:px-10xl pr-4'
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {testimonials.map((testimonial) => (
              <div key={testimonial.id}>
                <TestimonialCard testimonial={testimonial} />
              </div>
            ))}
          </div>

          <div className='flex justify-center'>
            <Pagination
              onPrev={() => scrollHorizontal('left')}
              onNext={() => scrollHorizontal('right')}
              isFirst={isMdFirst}
              isLast={isMdLast}
              prevLabel='Previous testimonials'
              nextLabel='Next testimonials'
            />
          </div>
        </div>
      </div>
    </section>
  );
}
