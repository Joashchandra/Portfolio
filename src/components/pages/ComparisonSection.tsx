'use client';

import { comparisonData } from '@/data/comparison';
import ComparisonCard from '@/components/ui/ComparisonCard';
import SectionHeader from '../ui/SectionHeader';

export default function ComparisonSection() {
  const { badge, heading, myColumn, otherColumn } = comparisonData;

  return (
    <section
      id='comparison'
      className='relative flex flex-col items-center w-full py-5xl px-xl gap-3xl scroll-mt-20 md:px-5xl lg:py-8xl xl:px-10xl xl:gap-6xl xl:scroll-mt-21.5 bg-linear-to-b from-[#F3EBFF]/0 to-[#F3EBFF] overflow-hidden'
    >
      <SectionHeader
        badge={badge}
        heading={heading}
        className='text-center items-center'
      />

      <div className='w-full grid grid-cols-1 md:grid-cols-2 gap-xl lg:gap-3xl'>
        <ComparisonCard
          title={myColumn.title}
          avatar={myColumn.avatar}
          traits={myColumn.traits}
          isPrimary={true}
          initialX={-30}
        />

        <ComparisonCard
          title={otherColumn.title}
          traits={otherColumn.traits}
          isPrimary={false}
          initialX={30}
        />
      </div>
    </section>
  );
}
