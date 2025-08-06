'use client';
import React, { useState, useEffect } from 'react';

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
          ${
            !isScrolled
              ? 'w-full mx-auto py-2 px-4 justify-between'
              : 'w-[60%] mx-auto px-4 py-2 justify-between'
          }
          flex items-center gap-4 bg-white/20 backdrop-blur-lg rounded-full border border-white/30 
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
          <div className="w-8 h-8 rounded-full bg-gradient-to-r from-blue-400 to-blue-600 flex items-center justify-center">
            <span className="text-white font-bold text-sm">CD</span>
          </div>
          <span className="text-white font-bold text-lg whitespace-nowrap">
            Comfort Dev
          </span>
        </div>

        {/* Navigation Items */}
        <div
          className={`
        items-center hidden md:flex
          ${!isScrolled ? 'gap-6' : 'gap-3'}
          transition-all duration-500
        `}
        >
          <div className="flex items-center gap-2 cursor-pointer">
            <div className="w-3 h-3 rounded-full bg-white/60 animate-pulse" />
            <span
              className={`text-white font-medium whitespace-nowrap transition-all duration-500 ${
                !isScrolled ? 'text-base opacity-100' : 'text-sm opacity-90'
              }`}
            >
              Feature
            </span>
          </div>

          <div className="w-px h-6 bg-white/30" />

          <div className="flex items-center gap-2 cursor-pointer">
            <div
              className="w-3 h-3 rounded-full"
              style={{ backgroundColor: '#29b3ff' }}
            />
            <span
              className={`text-white font-medium whitespace-nowrap transition-all duration-500 ${
                !isScrolled ? 'text-base opacity-100' : 'text-sm opacity-90'
              }`}
            >
              Services
            </span>
          </div>

          <div className="w-px h-6 bg-white/30" />

          <div className="flex items-center gap-2 cursor-pointer">
            <div
              className="w-3 h-3 rounded-full"
              style={{ backgroundColor: '#fbc00e' }}
            />
            <span
              className={`text-white font-medium whitespace-nowrap transition-all duration-500 ${
                !isScrolled ? 'text-base opacity-100' : 'text-sm opacity-90'
              }`}
            >
              Features
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
          <button className="bg-primary/50 hover:bg-primary/80 backdrop-blur-lg rounded-full px-6 py-2 border border-white/50 cursor-pointer text-white text-sm font-medium transition-all duration-200 hover:scale-105 whitespace-nowrap">
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
}
