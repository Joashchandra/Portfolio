'use client';

import { createPortal } from 'react-dom';
import { motion, AnimatePresence } from 'motion/react';
import Image from 'next/image';
import Button from './button';

interface ContactModalProps {
  modalState: 'success' | 'failed' | null;
  onClose: () => void;
  onAction: () => void;
}

const MODAL_CONTENT = {
  success: {
    icon: '/success.png',
    iconAlt: 'Success Icon',
    title: 'Message Sent Successfully!',
    description:
      "Thank you for reaching out. I'll get back to you as soon as possible.",
    buttonText: 'Back to Home',
  },
  failed: {
    icon: '/failed.png',
    iconAlt: 'Failed Icon',
    title: 'Oops! Something went wrong.',
    description:
      "We couldn't send your message. Please try again later or contact us directly.",
    buttonText: 'Try Again',
  },
};

export default function ContactModal({
  modalState,
  onAction,
}: ContactModalProps) {
  if (!modalState) return null;

  const content = MODAL_CONTENT[modalState];

  return createPortal(
    <AnimatePresence>
      {modalState && (
        <div className='fixed inset-0 z-100 flex items-center justify-center p-4 bg-black/70 backdrop-blur-xs'>
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ duration: 0.3, ease: 'easeOut' }}
            className='relative flex flex-col items-center text-center w-full max-w-90.25 md:max-w-119.75 rounded-2xl p-3xl pt-8xl gap-3xl bg-white shadow-[0px_0px_24px_rgba(165,165,165,0.2)]'
          >
            <div className='absolute -top-14 md:top-[-96px] left-1/2 -translate-x-1/2 w-28 h-28 md:w-40 md:h-40'>
              <Image
                src={modalState === 'success' ? '/success.png' : '/failed.png'}
                alt={modalState === 'success' ? 'Success Icon' : 'Failed Icon'}
                fill
                className='object-contain'
              />
            </div>

            <div className='flex flex-col items-center gap-2 w-full max-w-78.25 md:max-w-103.75'>
              <h3 className='font-semibold text-lg md:text-xl text-neutral-950'>
                {content.title}
              </h3>

              <p className='w-full text-sm md:text-md text-neutral-500'>
                {content.description}
              </p>
            </div>

            <div className='w-full flex justify-center'>
              <Button
                onClick={onAction}
                className='flex flex-row justify-center items-center w-full h-12 rounded-full p-md gap-md bg-purple-gradient text-sm font-medium text-white cursor-pointer'
              >
                {modalState === 'success' ? 'Back to Home' : 'Try Again'}
              </Button>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>,
    document.body
  );
}
