'use client';

import { motion } from 'motion/react';
import Image from 'next/image';
import Logo from '../ui/Logo';
import SocialLinks from '@/components/ui/SocialLinks';
import { navbarData } from '@/data/navbar';
import { socialLinksData } from '@/data/socials';

export default function Footer() {
  const { brand } = navbarData.navbar;

  return (
    <footer
      id='footer'
      className='relative w-full h-113 pb-5xl px-xl gap-7xl bg-neutral-950 text-neutral-25 flex flex-col items-center justify-center overflow-hidden snap-start'
    >
      <div className='absolute bottom-0 md:bottom-[-5%] lg:bottom-[-35%] xl:bottom-[-50%] 2xl:bottom-[-75%] left-0 right-0 w-full pointer-events-none overflow-hidden'>
        <Image
          src='/hero-background.svg'
          alt='Hero Background'
          width={1920}
          height={1080}
          sizes='100vw'
          className='w-full h-auto object-bottom'
        />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className='relative z-10 flex flex-col items-center text-center gap-4xl'
      >
        <Logo brand={brand} isOpen={false} scrolled={false} />

        <p className='text-sm lg:text-md text-neutral-25'>
          Front-End Developer with a passion for clean code and intuitive
          design. Turning ideas into functional beauty
        </p>

        <SocialLinks links={socialLinksData} />
      </motion.div>
    </footer>
  );
}
