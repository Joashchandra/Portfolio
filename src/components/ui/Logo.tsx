// components/ui/Logo.tsx (or wherever your components live)
import Link from 'next/link';
import Image from 'next/image';

interface LogoProps {
  brand: {
    logo: string;
    name: string;
  };
  isOpen: boolean;
  scrolled: boolean;
}

export default function Logo({ brand, isOpen, scrolled }: LogoProps) {
  return (
    <Link
      href='#'
      className='group flex items-center gap-2 font-semibold text-lg cursor-pointer'
    >
      <div className='relative flex items-center justify-center w-6 h-6'>
        <Image
          src={brand.logo}
          alt='logo'
          fill
          sizes='24px'
          className={`object-contain ${isOpen || scrolled ? 'brightness-0' : 'brightness-0 invert'}`}
        />
      </div>
      <span>{brand.name}</span>
    </Link>
  );
}
