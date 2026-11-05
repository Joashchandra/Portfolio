'use client';

import Image from 'next/image';
import ContactForm from '@/components/ui/ContactForm';
import SectionHeader from '../ui/SectionHeader';

export default function ContactSection() {
  return (
    <section
      id='contact'
      className='relative flex flex-col items-center w-full py-5xl px-xl gap-3xl scroll-mt-20 md:px-5xl lg:py-8xl xl:px-10xl xl:gap-6xl xl:scroll-mt-21.5 overflow-hidden snap-start'
    >
      <SectionHeader
        badge='Contact'
        heading='Get in Touch'
        className='text-center items-center'
      />

      <div className='relative z-10 w-full max-w-150'>
        <ContactForm />
      </div>

      <div className='absolute w-full h-full flex items-end justify-center pointer-events-none z-0'>
        <div className='relative w-[80%] xl:w-1/3 h-full bottom-0'>
          <Image
            src='/pattern.svg'
            alt='Pattern Left'
            fill
            className='object-contain mix-blend-multiply'
          />
        </div>
        <div className='relative w-[80%] xl:w-1/3 h-full'>
          <Image
            src='/pattern.svg'
            alt='Pattern Right'
            fill
            className='object-contain mix-blend-multiply'
          />
        </div>
      </div>

      <div className='absolute bottom-0 left-0 right-0 w-full overflow-hidden leading-none z-5 pointer-events-none'>
        <div className='relative w-full h-40 lg:h-50'>
          <Image
            src='/Subtract.svg'
            alt='Subtract Bottom Overlay'
            fill
            className='object-cover object-top brightness-0'
          />
        </div>
      </div>
    </section>
  );
}
