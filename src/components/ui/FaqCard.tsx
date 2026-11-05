'use client';

import { motion } from 'motion/react';
import {
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from '@/components/ui/accordion';
import type { FaqItem } from '@/types';

interface FaqCardProps {
  faq: FaqItem;
}

export default function FaqCard({ faq }: FaqCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className='w-full'
    >
      <AccordionItem
        value={faq.id}
        className='relative flex flex-col px-xl py-2xl gap-xl rounded-xl bg-neutral-50 border border-neutral-300 group overflow-hidden lg:px-4xl lg:gap-3xl'
      >
        <div className='absolute left-0 top-0 bottom-0 w-2.5 bg-purple-gradient' />

        <AccordionTrigger className='hover:no-underline'>
          <div className='flex items-center justify-between w-full text-left'>
            <span className='text-md font-semibold text-neutral-950 group-data-[state=open]:text-primary-300 transition-colors duration-300 lg:text-xl'>
              {faq.question}
            </span>
          </div>
        </AccordionTrigger>

        <AccordionContent className='text-sm text-neutral-950 lg:text-md '>
          {faq.answer}
        </AccordionContent>
      </AccordionItem>
    </motion.div>
  );
}
