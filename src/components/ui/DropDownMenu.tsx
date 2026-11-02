'use client';

import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import Button from './button';
import { Mail } from 'lucide-react';

interface MenuItem {
  id: string;
  label: string;
  path: string;
}

interface DropDownMenuProps {
  isOpen: boolean;
  menuItems: MenuItem[];
  onClose: () => void;
}

export default function DropDownMenu({
  isOpen,
  menuItems,
  onClose,
}: DropDownMenuProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.25, ease: 'easeInOut' }}
          className='absolute top-full left-0 w-full h-screen bg-white p-4 gap-xl flex flex-col z-40'
        >
          {menuItems.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.05 }}
            >
              <Link
                href={item.path}
                onClick={onClose}
                className='text-md text-gray-950'
              >
                {item.label}
              </Link>
            </motion.div>
          ))}

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: menuItems.length * 0.05 }}
          >
            <Button href='#contact' onClick={onClose}>
              <Mail className='w-5 h-5' />
              Hire Me
            </Button>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
