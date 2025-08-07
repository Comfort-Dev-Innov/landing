'use client';
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import logo from '@/assets/logo.png';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div
      className="w-full px-4 fixed top-0flex justify-center z-50 py-4 mx-auto transition-all duration-500"
      style={{ backgroundColor: 'transparent', background: 'none' }}
    >
      <div
        className={`
          ${!isScrolled
            ? 'w-full mx-auto py-2 px-8 justify-between'
            : 'w-[60%] mx-auto px-4 py-2 justify-between'
          }
          flex items-center gap-4 bg-white/20 backdrop-blur-lg rounded-full border border-white/30 
          transition-all duration-700 ease-out
        `}
      >
        {/* Logo/Brand - show when at top, hide when scrolled */}
        <div
          className={`
          ${!isScrolled
              ? 'opacity-100 translate-x-0 w-auto'
              : 'opacity-0 -translate-x-6 w-0 overflow-hidden'
            } 
          transition-all duration-500 flex items-center gap-2
        `}
        >
          <div className="w-[180px] h-[59px] flex items-center justify-center">
            <Image src={logo} alt="Comfort Dev" width={180} height={59} />
          </div>
          {/* <span className="text-white font-bold text-lg whitespace-nowrap">
            Comfort Dev
          </span> */}
        </div>

        {/* Navigation Items */}
        <div
          className={`
        items-center hidden md:flex
          ${!isScrolled ? 'gap-8' : 'gap-4'}
          transition-all duration-500
        `}
        >
          <div className="flex items-center gap-2 cursor-pointer">
            <span
              className={`
                text-white hover:text-primary hover:shadow-amber-50 font-semibold tracking-widest drop-shadow-lg whitespace-nowrap transition-all duration-500 ${!isScrolled ? 'text-lg opacity-100' : 'text-md opacity-90'
                }`}
            >
              About Us
            </span>
          </div>

          <div className="w-px h-6 bg-white/50" />

          <div className="flex items-center gap-2 cursor-pointer">
            <span
              className={`
                text-white hover:text-primary hover:shadow-amber-50 font-semibold tracking-widest drop-shadow-lg whitespace-nowrap transition-all duration-500 ${!isScrolled ? 'text-lg opacity-100' : 'text-md opacity-90'
                }`}
            >
              Services
            </span>
          </div>

          <div className="w-px h-6 bg-white/50" />

          <div className="flex items-center gap-2 cursor-pointer">
            <span
              className={`
                text-white hover:text-primary hover:shadow-amber-50 font-semibold tracking-widest drop-shadow-lg whitespace-nowrap transition-all duration-500 ${!isScrolled ? 'text-lg opacity-100' : 'text-md opacity-90'
                }`}
            >
              Technologies
            </span>
          </div>

          <div className="w-px h-6 bg-white/50" />

          <div className="flex items-center gap-2 cursor-pointer">
            <span
              className={`
                text-white hover:text-primary hover:shadow-amber-50 font-semibold tracking-widest drop-shadow-lg whitespace-nowrap transition-all duration-500 ${!isScrolled ? 'text-lg opacity-100' : 'text-md opacity-90'
                }`}
            >
              Projects
            </span>
          </div>
        </div>

        {/* CTA Button - show when at top, hide when scrolled */}
        <div
          className={`
          ${!isScrolled
              ? 'opacity-100 translate-x-0 w-auto'
              : 'opacity-0 translate-x-6 w-0 overflow-hidden'
            } 
          transition-all duration-500
        `}
        >
          <button className="bg-primary/100 hover:bg-primary/80 backdrop-blur-lg rounded-full px-6 py-2 border-[2px] shadow-lg border-white/95 cursor-pointer text-white tracking-widest text-sm font-black transition-all duration-200 hover:scale-105 whitespace-nowrap">
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
}
