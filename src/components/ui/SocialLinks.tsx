'use client';

import Image from 'next/image';
import type { SocialLink } from '@/types';
import { motion } from 'motion/react';

interface SocialLinksProps {
  links?: SocialLink[];
  className?: string;
}

export default function SocialLinks({
  links = [],
  className = '',
}: SocialLinksProps) {
  return (
    <div className={`flex items-center gap-lg ${className}`}>
      {links.map((social) => (
        <motion.a
          key={social.id}
          href={social.url}
          target='_blank'
          rel='noopener noreferrer'
          aria-label={social.platform}
          whileHover={{ scale: 1.15 }}
          whileTap={{ scale: 0.95 }}
          transition={{ type: 'spring', stiffness: 400, damping: 17 }}
          className='w-12 h-12 rounded-full bg-neutral-950/50 hover:bg-white/20 backdrop-blur-[32px] flex items-center justify-center lg:w-15 lg:h-15'
        >
          <Image
            src={social.src}
            alt={social.alt}
            width={20}
            height={20}
            className='w-6 h-6 object-contain lg:w-9 lg:h-9'
          />
        </motion.a>
      ))}
    </div>
  );
}
