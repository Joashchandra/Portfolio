import { motion } from 'motion/react';

interface SectionHeaderProps {
  badge: string;
  heading: string;
  className?: string;
}

export default function SectionHeader({
  badge,
  heading,
  className = '',
}: SectionHeaderProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.5 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className={`flex flex-col gap-lg ${className}`}
    >
      <span className='inline-block w-fit rounded-4xl border border-neutral-300 px-lg py-xxs gap-md text-xs text-neutral-700 xl:text-sm'>
        {badge}
      </span>

      <h2 className='text-display-md font-bold text-neutral-950 xl:text-display-2xl'>
        {heading}
      </h2>
    </motion.div>
  );
}
