'use client';
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import logo from '@/assets/logo.png';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [currentSection, setCurrentSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '-10% 0px -50% 0px',
      threshold: [0, 0.25, 0.5, 0.75, 1],
    };

    const observer = new IntersectionObserver((entries) => {
      let highestRatio = 0;
      let mostVisibleSection = 'hero';

      entries.forEach((entry) => {
        if (entry.intersectionRatio > highestRatio) {
          highestRatio = entry.intersectionRatio;
          mostVisibleSection = entry.target.id;
        }
      });

      if (highestRatio > 0.1) {
        setCurrentSection(mostVisibleSection);
      }
    }, observerOptions);

    const sections = document.querySelectorAll('section[id], div[id]');
    sections.forEach((section) => {
      observer.observe(section);
    });

    return () => {
      sections.forEach((section) => {
        observer.unobserve(section);
      });
    };
  }, []);

  const getTextColor = () => {
    return 'text-white';
    // switch (currentSection) {
    //   case 'about':
    //     return '!text-primary';
    //   case 'hero':
    //   case 'tech-stack':
    //   default:
    //     return 'text-white';
    // }
  };

  const getHoverColor = () => {
    switch (currentSection) {
      case 'about':
        return 'hover:text-primary/80'; // Slightly transparent primary
      case 'tech-stack':
        return 'hover:text-yellow-300'; // Brighter yilo nyehehe
      case 'hero':
      case 'services':
      default:
        return 'hover:text-primary'; // Primary color on hover
    }
  };

  const getBackgroundColor = () => {
    switch (currentSection) {
      case 'about':
      case 'services':
      case 'tech-stack':
        return 'bg-black/30 backdrop-blur-lg border-white/30';
      case 'hero':
      default:
        return 'bg-white/20 backdrop-blur-lg border-white/30';
    }
  };

  return (
    <div
      className="w-full px-4 fixed top-0 flex justify-center z-50 py-4 mx-auto transition-all duration-500"
      style={{ backgroundColor: 'transparent', background: 'none' }}
    >
      <div
        className={`
          ${
            !isScrolled
              ? 'w-full mx-auto py-2 px-4 lg:px-8 justify-between'
              : 'w-[60%] mx-auto px-2 lg:px-4 py-2 justify-between hidden md:flex'
          }
          flex items-center gap-4 ${getBackgroundColor()} rounded-full border
          transition-all duration-700 ease-out
        `}
      >
        {/* Logo/Brand - show when at top, hide when scrolled */}
        <div
          className={`
          ${
            !isScrolled
              ? 'opacity-100 translate-x-0 w-auto'
              : 'opacity-0 -translate-x-6 w-0 overflow-hidden'
          } 
          transition-all duration-500 flex items-center gap-2
        `}
        >
          <div className="w-[120px] h-[39px] sm:w-[150px] sm:h-[49px] lg:w-[180px] lg:h-[59px] flex items-center justify-center">
            <Image
              src={logo}
              className="w-full h-full"
              alt="Comfort Dev"
              width={180}
              height={59}
            />
          </div>
        </div>

        {/* Navigation Items */}
        <div
          className={`
        items-center hidden md:flex
          ${!isScrolled ? 'gap-4 lg:gap-8' : 'gap-2 lg:gap-4'}
          transition-all duration-500
        `}
        >
          <div
            className="flex items-center gap-2 cursor-pointer"
            onClick={() => (window.location.href = '#about')}
          >
            <span
              className={`
                ${getTextColor()} ${getHoverColor()} font-semibold tracking-wide lg:tracking-widest drop-shadow-lg whitespace-nowrap transition-all duration-500 
                ${
                  !isScrolled
                    ? 'text-md lg:text-lg opacity-100'
                    : 'text-md opacity-90'
                }`}
            >
              About Us
            </span>
          </div>

          <div className={`w-px h-6 bg-white/50`} />

          <div
            className="flex items-center gap-2 cursor-pointer"
            onClick={() => (window.location.href = '#services')}
          >
            <span
              className={`
                ${getTextColor()} ${getHoverColor()} font-semibold tracking-wide lg:tracking-widest drop-shadow-lg whitespace-nowrap transition-all duration-500 
                ${
                  !isScrolled
                    ? 'text-md lg:text-lg opacity-100'
                    : 'text-md opacity-90'
                }`}
            >
              Services
            </span>
          </div>

          <div className={`w-px h-6 bg-white/50`} />

          <div
            className="flex items-center gap-2 cursor-pointer"
            onClick={() => (window.location.href = '#tech-stack')}
          >
            <span
              className={`
                ${getTextColor()} ${getHoverColor()} font-semibold tracking-wide lg:tracking-widest drop-shadow-lg whitespace-nowrap transition-all duration-500 
                ${
                  !isScrolled
                    ? 'text-md lg:text-lg opacity-100'
                    : 'text-md opacity-90'
                }`}
            >
              Technologies
            </span>
          </div>

          <div className={`w-px h-6 bg-white/50`} />

          <div
            className="flex items-center gap-2 cursor-pointer"
            onClick={() => (window.location.href = '#projects')}
          >
            <span
              className={`
                ${getTextColor()} ${getHoverColor()} font-semibold tracking-wide lg:tracking-widest drop-shadow-lg whitespace-nowrap transition-all duration-500 
                ${
                  !isScrolled
                    ? 'text-md lg:text-lg opacity-100'
                    : 'text-md opacity-90'
                }`}
            >
              Projects
            </span>
          </div>
        </div>

        {/* CTA Button - show when at top, hide when scrolled */}
        <div
          className={`
          ${
            !isScrolled
              ? 'opacity-100 translate-x-0 w-auto'
              : 'opacity-0 translate-x-6 w-0 overflow-hidden'
          } 
          transition-all duration-500
        `}
        >
          <button
            onClick={() =>
              (window.location.href = process.env.NEXT_PUBLIC_CALENDLY || '')
            }
            className="bg-primary/100 hover:bg-primary/80 backdrop-blur-lg rounded-full px-4 lg:px-6 py-2 border-[2px] shadow-lg border-white/95 cursor-pointer text-white tracking-wide lg:tracking-widest text-xs lg:text-sm font-black transition-all duration-200 hover:scale-105 whitespace-nowrap"
          >
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
}
