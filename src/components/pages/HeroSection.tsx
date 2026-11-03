'use client';

import { motion } from 'motion/react';
import Image from 'next/image';
import { ArrowDown } from 'lucide-react';
import { heroData } from '@/data/hero';
import { socialLinksData } from '@/data/socials';
import SocialLinks from '@/components/ui/SocialLinks';

export default function HeroSection() {
  const { greeting, name, description, profileImage } = heroData;

  const scrollToNextSection = () => {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id='home'
      className='relative w-full min-h-screen bg-black text-white overflow-hidden snap-start'
    >
      <div className='absolute inset-0 bg-[url("/hero-background.svg")] w-full h-full bg-cover bg-bottom pointer-events-none z-0' />

      <div className='absolute top-34.25 lg:top-36.5 left-0 right-0 z-25 px-xl xl:px-10xl w-full flex flex-col lg:flex-row lg:justify-between gap-2xl'>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className='flex flex-col gap-3'
        >
          <h1 className='text-display-md font-extrabold text-neutral-25 lg:text-display-xl xl:text-display-3xl'>
            {greeting} <br />
            <span>{name}</span>
          </h1>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2, ease: 'easeOut' }}
          className='lg:w-109 '
        >
          <p className='text-sm text-neutral-25 lg:text-md xl:text-lg'>
            {description}
          </p>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 30 }}
        whileInView={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.3, ease: 'easeOut' }}
        className='absolute top-1/2 md:top-[45%] lg:top-1/3 left-1/2 -translate-x-1/2 z-5 w-full md:w-[60%] lg:w-[55%] xl:w-[40%] 2xl:w-[35%] aspect-square'
      >
        <div className='relative w-full h-full'>
          <Image
            src={profileImage}
            alt={name}
            fill
            priority
            className='object-cover object-top'
          />
        </div>
      </motion.div>

      <div className='absolute top-[85%] md:top-[80%] lg:top-[75%] left-0 right-0 z-30 px-xl xl:px-10xl w-full flex items-center justify-between'>
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <SocialLinks links={socialLinksData} />
        </motion.div>

        <motion.button
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          whileHover={{ scale: 1.15 }}
          whileTap={{ scale: 0.95 }}
          onClick={scrollToNextSection}
          className='group flex items-center justify-center p-xl gap-md rounded-full bg-neutral-950/50 hover:bg-white/20 backdrop-blur-[32px] cursor-pointer'
        >
          <span className='hidden lg:block text-lg'>Scroll Down</span>
          <ArrowDown className='w-5 h-5' />
        </motion.button>
      </div>

      <div className='absolute bottom-0 left-0 w-full leading-none pointer-events-none z-10'>
        <div className='relative w-full h-12 sm:h-16 md:h-20 lg:h-24'>
          <Image
            src='/Subtract.svg'
            alt='Section Curve Divider'
            fill
            priority
            className='object-cover object-top w-full h-full'
          />
        </div>
      </div>
    </section>
  );
}
