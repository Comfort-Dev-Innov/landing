'use client';
import React from 'react';
import Image from 'next/image';
import { motion } from 'motion/react';

export default function HeroSection() {
  const features = [
    {
      name: 'Trusted',
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="white"
          className="w-5 h-5"
        >
          <path
            fillRule="evenodd"
            d="M16.403 12.652a3 3 0 000-5.304 3 3 0 00-3.75-3.751 3 3 0 00-5.305 0 3 3 0 00-3.751 3.75 3 3 0 000 5.305 3 3 0 003.75 3.751 3 3 0 005.305 0 3 3 0 003.751-3.75zm-2.546-4.46a.75.75 0 00-1.214-.883l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
            clipRule="evenodd"
          />
        </svg>
      ),
    },
    {
      name: 'Tech Forward',
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="white"
          className="w-5 h-5"
        >
          <path
            fillRule="evenodd"
            d="M1 4.75C1 3.784 1.784 3 2.75 3h14.5c.966 0 1.75.784 1.75 1.75v10.515a1.75 1.75 0 01-1.75 1.75h-1.5c-.078 0-.155-.005-.23-.015H4.48c-.075.01-.152.015-.23.015h-1.5A1.75 1.75 0 011 15.265V4.75zm16.5 7.385V11.01a.25.25 0 00-.25-.25h-1.5a.25.25 0 00-.25.25v1.125c0 .138.112.25.25.25h1.5a.25.25 0 00.25-.25zm0 2.005a.25.25 0 00-.25-.25h-1.5a.25.25 0 00-.25.25v1.125c0 .108.069.2.165.235h1.585a.25.25 0 00.25-.25v-1.11zm-15 1.11v-1.11a.25.25 0 01.25-.25h1.5a.25.25 0 01.25.25v1.125a.25.25 0 01-.164.235H2.75a.25.25 0 01-.25-.25zm2-4.24v1.125a.25.25 0 01-.25.25h-1.5a.25.25 0 01-.25-.25V11.01a.25.25 0 01.25-.25h1.5a.25.25 0 01.25.25zm13-2.005V7.88a.25.25 0 00-.25-.25h-1.5a.25.25 0 00-.25.25v1.125c0 .138.112.25.25.25h1.5a.25.25 0 00.25-.25zM4.25 7.63a.25.25 0 01.25.25v1.125a.25.25 0 01-.25.25h-1.5a.25.25 0 01-.25-.25V7.88a.25.25 0 01.25-.25h1.5zm0-3.13a.25.25 0 01.25.25v1.125a.25.25 0 01-.25.25h-1.5a.25.25 0 01-.25-.25V4.75a.25.25 0 01.25-.25h1.5zm11.5 1.625a.25.25 0 01-.25-.25V4.75a.25.25 0 01.25-.25h1.5a.25.25 0 01.25.25v1.125a.25.25 0 01-.25.25h-1.5zm-9 3.125a.75.75 0 000 1.5h6.5a.75.75 0 000-1.5h-6.5z"
            clipRule="evenodd"
          />
        </svg>
      ),
    },
    {
      name: 'Custom Solution',
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="white"
          className="w-5 h-5"
        >
          <path
            fillRule="evenodd"
            d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z"
            clipRule="evenodd"
          />
        </svg>
      ),
    },
  ];

  return (
    <motion.div
      id="hero"
      initial={{ opacity: 0, backgroundColor: 'rgba(203,203,203,1)' }}
      whileInView={{ opacity: 1, backgroundColor: 'rgba(203,203,203,0.3)' }}
      transition={{ duration: 1.5 }}
      viewport={{ once: true }}
      className="flex backdrop-blur-lg w-full h-screen rounded-3xl p-8 border border-white/30"
    >
      <motion.section
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        <div className="max-w-screen-xl mx-auto px-4 py-28 gap-12 text-gray-600 md:px-8 xl:flex">
          <div className="space-y-5 max-w-2xl mx-auto text-center xl:text-left">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
              className="flex flex-wrap items-center justify-center gap-6 xl:justify-start"
            >
              {features.map((item, idx) => (
                <motion.div
                  key={idx}
                  className="flex items-center gap-x-2 text-white text-sm"
                >
                  {item.icon}
                  {item.name}
                </motion.div>
              ))}
            </motion.div>
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              viewport={{ once: true }}
              className="text-4xl font-extrabold mx-auto md:text-5xl text-white"
            >
              Development made comfortable.
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              viewport={{ once: true }}
              className="max-w-xl mx-auto xl:mx-0 text-white"
            >
              Empowering startups and enterprises with custom software
              solutions, on time, on budget, and without the stress.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.7 }}
              viewport={{ once: true }}
              className="items-center justify-center gap-x-3 space-y-3 sm:flex sm:space-y-0 xl:justify-start"
            >
              <button
                onClick={() =>
                  (window.location.href =
                    process.env.NEXT_PUBLIC_CALENDLY || '')
                }
                className="bg-primary/50 hover:bg-primary/80 backdrop-blur-lg rounded-full px-6 py-2 border border-white/50 cursor-pointer text-white text-sm font-medium transition-all duration-200 hover:scale-105 whitespace-nowrap"
              >
                Talk to our Team
              </button>
            </motion.div>
          </div>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.8 }}
            viewport={{ once: true }}
            className="flex-1 max-w-xl mx-auto mt-14 xl:mt-0"
          >
            <Image
              className="rounded-lg shadow-lg"
              src="/images/pexels-olia-danilevich-4974914.jpg"
              alt="Hero Image"
              width={1920}
              height={1080}
            />
          </motion.div>
        </div>
      </motion.section>
    </motion.div>
  );
}
