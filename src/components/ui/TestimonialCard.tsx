'use client';

import { useState } from 'react';
import { motion } from 'motion/react';
import { Quote } from 'lucide-react';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';
import type { TestimonialItem } from '@/types';
import Image from 'next/image';

interface TestimonialCardProps {
  testimonial: TestimonialItem;
}

export default function TestimonialCard({ testimonial }: TestimonialCardProps) {
  const [isHovered, setIsHovered] = useState(false);

  const getInitials = (name: string) => {
    return name
      .split(' ')
      .map((n) => n[0])
      .join('')
      .toUpperCase();
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.5 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={`relative flex flex-col justify-between   w-full md:w-[388.75px] h-full shrink-0 snap-center rounded-2xl p-xl gap-4xl transition-all duration-500 border cursor-pointer overflow-hidden lg:p-3xl lg:gap-6xl ${
        isHovered
          ? 'bg-purple-gradient text-neutral-25 border-transparent'
          : 'bg-neutral-25 border border-neutral-300 text-neutral-950'
      }`}
    >
      <div className='flex flex-col items-start gap-4xl lg:gap-6xl'>
        {testimonial.companyLogo ? (
          <div className='relative w-16.5 h-6 lg:w-33.25 lg:h-12'>
            <Image
              src={testimonial.companyLogo}
              alt={testimonial.companyName}
              fill
              className={`object-contain object-left transition-all ${isHovered ? 'brightness-0 invert' : ''}`}
            />
          </div>
        ) : (
          <h3
            className={`text-sm font-semibold ${isHovered ? 'text-neutral-25' : 'text-neutral-900'}`}
          >
            {testimonial.companyName}
          </h3>
        )}

        <div
          className={`transition-colors ${isHovered ? 'text-neutral-25' : 'text-neutral-300'}`}
        >
          <Quote className='w-10 h-10 fill-current lg:w-12 lg:h-12' />
        </div>

        <p className={`text-xl font-medium lg:text-display-sm`}>
          &quot;{testimonial.quote}&quot;
        </p>
      </div>

      <div className='flex items-center gap-lg'>
        <Avatar className='w-15 h-15'>
          <AvatarImage
            src={testimonial.authorAvatar}
            alt={testimonial.authorName}
            className='object-cover'
          />
          <AvatarFallback className='bg-neutral-300 text-neutral-800 font-semibold'>
            {getInitials(testimonial.authorName)}
          </AvatarFallback>
        </Avatar>
        <div className='flex flex-col text-sm lg:text-md'>
          <h4
            className={`font-semibold transition ${isHovered ? 'text-neutral-25' : 'text-neutral-950'}`}
          >
            {testimonial.authorName}
          </h4>
          <span
            className={`transition ${isHovered ? 'text-neutral-25' : 'text-neutral-500'}`}
          >
            {testimonial.authorRole}
          </span>
        </div>
      </div>
    </motion.div>
  );
}
