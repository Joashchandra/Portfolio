'use client';

import { motion } from 'motion/react';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { Send, Loader2 } from 'lucide-react';

import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import {
  contactFormSchema,
  type ContactFormValues,
} from '@/lib/validations/contact';
import Button from './button';
import ContactModal from './ContactModal';

const FORM_FIELDS = [
  {
    name: 'name' as const,
    label: 'Name',
    type: 'text',
    component: 'input',
  },
  {
    name: 'email' as const,
    label: 'Email',
    type: 'email',
    component: 'input',
  },
  {
    name: 'message' as const,
    label: 'Message',
    type: 'text',
    component: 'textarea',
    rows: 5,
  },
];

export default function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [modalState, setModalState] = useState<'success' | 'failed' | null>(
    null
  );

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormValues>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: '',
      email: '',
      message: '',
    },
  });

  const onSubmit = async (data: ContactFormValues) => {
    setIsSubmitting(true);
    await new Promise((resolve) => setTimeout(resolve, 1500));

    const isSuccess = !data.email.toLowerCase().includes('error');

    setIsSubmitting(false);

    if (isSuccess) {
      setModalState('success');
      reset();
    } else {
      setModalState('failed');
    }
  };

  const handleScrollToHome = () => {
    setModalState(null);
    const homeSection = document.getElementById('home');
    if (homeSection) {
      homeSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <motion.form
        onSubmit={handleSubmit(onSubmit)}
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className='relative flex flex-col z-10 p-xl gap-xl rounded-xl bg-white shadow-[0_4px_32px_0_rgba(207,207,207,0.25)] lg:rounded-2xl lg:p-4xl lg:gap-3xl'
      >
        {FORM_FIELDS.map((field) => {
          const errorMessage = errors[field.name]?.message;

          return (
            <div key={field.name} className='flex flex-col gap-sm lg:gap-md'>
              <label
                htmlFor={field.name}
                className='text-sm font-semibold text-neutral-950 lg:text-md'
              >
                {field.label}
              </label>

              {field.component === 'textarea' ? (
                <Textarea
                  id={field.name}
                  rows={4}
                  placeholder=''
                  {...register(field.name)}
                />
              ) : (
                <Input
                  id={field.name}
                  type={field.type}
                  placeholder=''
                  {...register(field.name)}
                />
              )}

              {errorMessage && (
                <p className='text-sm text-accent-red font-medium'>
                  {errorMessage}
                </p>
              )}
            </div>
          );
        })}

        <Button type='submit' disabled={isSubmitting} className='w-full'>
          {isSubmitting ? (
            <>
              <Loader2 className='w-5 h-5 animate-spin' />
              Submitting...
            </>
          ) : (
            <>
              <Send className='w-5 h-5' />
              Submit
            </>
          )}
        </Button>
      </motion.form>

      <ContactModal
        modalState={modalState}
        onClose={() => setModalState(null)}
        onAction={handleScrollToHome}
      />
    </>
  );
}
