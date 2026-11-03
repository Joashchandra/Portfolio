'use client';

import { useState, useEffect } from 'react';
import { navbarData } from '@/data/navbar';
import HamburgerButton from '../ui/HamburgerButton';
import DropDownMenu from '../ui/DropDownMenu';
import Button from '../ui/button';
import { Mail } from 'lucide-react';
import Logo from '../ui/Logo';
import Link from 'next/link';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { brand, menuItems } = navbarData.navbar;

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 w-full h-20 lg:h-21.5 flex items-center justify-between px-xl xl:px-10xl z-50 transition-colors duration-300 ${
        isOpen || scrolled ? 'bg-white text-black' : 'bg-transparent text-white'
      }`}
    >
      <Logo brand={brand} isOpen={isOpen} scrolled={scrolled} />

      <nav className='hidden lg:flex gap-4xl'>
        {menuItems.map((item) => (
          <Link
            key={item.id}
            href={item.path}
            className={`${isOpen || scrolled ? 'text-black' : 'text-white'}`}
          >
            {item.label}
          </Link>
        ))}
      </nav>

      <Button className='hidden lg:flex max-w-43'>
        <Mail className='w-5 h-5' />
        Hire Me
      </Button>

      <div className='lg:hidden'>
        <HamburgerButton
          isOpen={isOpen}
          isScrolled={scrolled}
          onClick={() => setIsOpen(!isOpen)}
        />
      </div>

      <DropDownMenu
        isOpen={isOpen}
        menuItems={menuItems}
        onClose={() => setIsOpen(false)}
      />
    </header>
  );
}
