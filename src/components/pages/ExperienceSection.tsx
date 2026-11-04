'use client';

import { experienceData } from '@/data/experience';
import ExperienceCard from '@/components/ui/ExperienceCard';
import SectionHeader from '../ui/SectionHeader';

export default function ExperienceSection() {
  const { badge, heading, experiences } = experienceData;

  const orderedExperiences = [...experiences].reverse();

  return (
    <section
      id='experience'
      className='flex flex-col w-full py-5xl px-xl gap-3xl scroll-mt-20 md:px-5xl lg:py-8xl xl:px-10xl xl:gap-6xl xl:scroll-mt-21.5'
    >
      <SectionHeader
        badge={badge}
        heading={heading}
        className='text-center items-center'
      />

      <div className='w-full flex flex-col gap-xl'>
        {orderedExperiences.map((item, index) => (
          <ExperienceCard key={item.id} item={item} index={index} />
        ))}
      </div>
    </section>
  );
}
