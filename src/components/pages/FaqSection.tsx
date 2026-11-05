'use client';

import { Accordion } from '@/components/ui/accordion';
import { faqData } from '@/data/faq';
import FaqCard from '../ui/FaqCard';
import SectionHeader from '../ui/SectionHeader';

export default function FaqSection() {
  const { badge, heading, faqs } = faqData;

  return (
    <section
      id='faq'
      className='flex flex-col w-full py-5xl px-xl gap-3xl scroll-mt-20 md:px-5xl lg:py-8xl xl:px-10xl xl:gap-6xl xl:scroll-mt-21.5 snap-start'
    >
      <SectionHeader
        badge={badge}
        heading={heading}
        className='text-center items-center'
      />

      <div className='w-full'>
        <Accordion
          type='single'
          collapsible
          className='flex flex-col gap-xl lg:gap-3xl'
        >
          {faqs.map((faq) => (
            <FaqCard key={faq.id} faq={faq} />
          ))}
        </Accordion>
      </div>
    </section>
  );
}
