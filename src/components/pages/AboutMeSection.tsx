'use client';

import { motion } from 'motion/react';
import { aboutMeData } from '@/data/aboutme';
import { Monitor, Layout, Briefcase } from 'lucide-react';
import FolderIcon from '../../../public/folder.svg';
import Image from 'next/image';
import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar';
import SectionHeader from '../ui/SectionHeader';

export default function AboutMe() {
  const { badge, heading, description, items, stats } = aboutMeData;

  const iconClass = 'w-7 h-7 xl:w-9 xl:h-9';

  const getIconConfig = (type: string) => {
    switch (type) {
      case 'monitor':
        return {
          icon: <Monitor className={iconClass} />,
          wrapperBg: 'bg-accent-blue',
        };
      case 'layout':
        return {
          icon: <Layout className={iconClass} />,
          wrapperBg: 'bg-primary-200',
        };
      case 'briefcase':
        return {
          icon: <Briefcase className={iconClass} />,
          wrapperBg: 'bg-accent-pink',
        };
      default:
        return {
          icon: <Monitor className={iconClass} />,
          wrapperBg: 'bg-accent-blue',
        };
    }
  };

  return (
    <section
      id='about'
      className='flex flex-col w-full py-5xl px-xl gap-5xl scroll-mt-20 md:px-5xl lg:flex-row lg:py-8xl xl:px-10xl xl:gap-7xl xl:scroll-mt-21.5'
    >
      <motion.div
        initial={{ opacity: 0, x: -30 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className='flex flex-col w-full bg-primary-100 p-xl gap-lg rounded-2xl lg:max-w-101.25 xl:p-3xl xl:gap-xl'
      >
        {items.map((item, index) => {
          const { icon, wrapperBg } = getIconConfig(item.iconType);

          return (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.15, duration: 0.5 }}
              whileHover={{ scale: 1.01 }}
              className='flex items-center bg-white p-xl gap-xl rounded-2xl shadow-sm hover:shadow-md transition-shadow xl:p-3xl'
            >
              <div
                className={`rounded-full p-2.5 text-white ${wrapperBg} flex items-center justify-center`}
              >
                {icon}
              </div>
              <div className='flex flex-col gap-xxs xl:gap-xs'>
                <h3 className='text-md font-semibold text-neutral-950 xl:text-lg'>
                  {item.title}
                </h3>
                <p className='text-sm text-neutral-500 xl:text-md'>
                  {item.projectsCount} Project
                </p>
              </div>
            </motion.div>
          );
        })}
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: 30 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className='flex flex-col gap-5xl'
      >
        <div className='flex flex-col gap-3xl'>
          <SectionHeader badge={badge} heading={heading} />

          <p className='text-sm text-neutral-800 xl:text-md'>{description}</p>
        </div>

        <div className='flex flex-col items-center gap-3xl md:flex-row md:justify-between xl:gap-15.25'>
          <div className='flex items-center gap-3xl'>
            <div className='flex w-39 md:w-fit justify-center'>
              <Image
                src={FolderIcon}
                alt='Projects completed icon'
                className='w-23 h-26'
              />
            </div>
            <div className='flex flex-col'>
              <h4 className='text-[32px] font-bold text-neutral-950 xl:text-display-2xl'>
                {stats.projectsCompleted.count}
              </h4>
              <p className='text-sm text-gray-500 xl:text-md'>
                {stats.projectsCompleted.label}
              </p>
            </div>
          </div>

          <div className='flex items-center gap-3xl'>
            <div className='flex -space-x-3'>
              {stats.happyClients.avatars.map((avatar, i) => (
                <Avatar key={i} className='w-12 h-12 xl:w-13 xl:h-13'>
                  <AvatarImage
                    src={avatar}
                    alt='Client avatar'
                    className='object-cover'
                  />
                  <AvatarFallback>CN</AvatarFallback>
                </Avatar>
              ))}
            </div>
            <div className='flex flex-col'>
              <h4 className='text-[32px] font-bold text-neutral-950 xl:text-display-2xl'>
                {stats.happyClients.count}
              </h4>
              <p className='text-sm text-gray-500 xl:text-md'>
                {stats.happyClients.label}
              </p>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
