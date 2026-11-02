'use client';

import { MotionConfig, motion } from 'motion/react';

interface HamburgerButtonProps {
  isOpen: boolean;
  isScrolled?: boolean;
  onClick: () => void;
}

export default function HamburgerButton({
  isOpen,
  isScrolled = false,
  onClick,
}: HamburgerButtonProps) {
  const iconColorClass = isScrolled || isOpen ? 'bg-black' : 'bg-white';

  return (
    <MotionConfig
      transition={{
        duration: 0.5,
        ease: 'easeInOut',
      }}
    >
      <motion.button
        initial={false}
        animate={isOpen ? 'open' : 'closed'}
        onClick={onClick}
        className='relative w-6 h-6 rounded-none'
      >
        <motion.span
          variants={VARIANTS.top}
          className={`absolute h-0.5 w-4.5 transition-colors duration-300 ${iconColorClass}`}
          style={{ y: '-50%', left: '50%', x: '-50%', top: '30%' }}
        />
        <motion.span
          variants={VARIANTS.middle}
          className={`absolute h-0.5 w-4.5 transition-colors duration-300 ${iconColorClass}`}
          style={{ left: '50%', x: '-50%', top: '50%', y: '-50%' }}
        />
        <motion.span
          variants={VARIANTS.bottom}
          className={`absolute h-0.5 w-2.25 transition-colors duration-300 ${iconColorClass}`}
          style={{
            x: '-50%',
            y: '50%',
            bottom: '30%',
            left: 'calc(50% + 2px)',
          }}
        />
      </motion.button>
    </MotionConfig>
  );
}

const VARIANTS = {
  top: {
    open: {
      rotate: ['0deg', '0deg', '45deg'],
      top: ['30%', '50%', '50%'],
    },
    closed: {
      rotate: ['45deg', '0deg', '0deg'],
      top: ['50%', '50%', '30%'],
    },
  },
  middle: {
    open: {
      rotate: ['0deg', '0deg', '-45deg'],
    },
    closed: {
      rotate: ['-45deg', '0deg', '0deg'],
    },
  },
  bottom: {
    open: {
      rotate: ['0deg', '0deg', '45deg'],
      bottom: ['30%', '50%', '50%'],
      left: '50%',
    },
    closed: {
      rotate: ['45deg', '0deg', '0deg'],
      bottom: ['50%', '50%', '30%'],
      left: 'calc(50% + 4px)',
    },
  },
};
