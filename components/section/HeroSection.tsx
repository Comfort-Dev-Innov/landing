'use client'

import Image from 'next/image'
import React from 'react'
import Badge from '../ui/Badge'
import Button from '../ui/Button'
import Link from 'next/link'
import { motion } from 'framer-motion'

const ease = [0.22, 1, 0.36, 1] as [number, number, number, number]

const fadeUp = (delay: number) => ({
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.7, ease, delay },
})

const HeroSection = () => {
  const badgeText = ['Trusted', 'Tech Forward', 'Custom Solution']
  return (
    <section id="hero" className="relative w-full min-h-[500px] sm:min-h-screen p-[24px] pt-[56px] md:p-[64px] md:pt-[96px] overflow-hidden">
      {/* Layer 1: linear gradient */}
      <div
        className="absolute inset-0"
        style={{
          background: 'linear-gradient(to bottom, #F0F0F0 0%, #81EAFF 100%)',
        }}
      />
      {/* Layer 2: radial gradient */}
      <div
        className="absolute inset-0"
        style={{
          background:
            'radial-gradient(ellipse 150% 100% at 50% 100%, #29B3FF 0%, rgba(255, 255, 255, 0) 70%)',
        }}
      />
      {/* Layer 3: clouds image */}
      <motion.div
        className="absolute inset-0"
        initial={{ opacity: 0, scale: 1.04 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.4, ease }}
      >
        <Image
          src="/images/shared/clouds.png"
          alt=""
          fill
          className="object-cover opacity-[18%]"
          priority
        />
      </motion.div>
      {/* Layer 4: pixel pattern image */}
      <div className="absolute inset-0">
        <Image
          src="/images/shared/pixel-pattern.png"
          alt=""
          fill
          className="object-cover opacity-[16%]"
          priority
        />
      </div>

      <div className="relative z-10 flex flex-col gap-[32px] sm:gap-[64px] min-h-[500px] min-[390px]:min-h-[484px] sm:min-h-[calc(100dvh-96px)] md:min-h-[calc(100dvh-136px)] items-center justify-center">
        {/* Top */}
        <div className="flex flex-col gap-[24px] items-center justify-center">
          {/* Badges */}
          <div className="flex flex-wrap justify-center items-center gap-[8px]">
            {badgeText.map((text, index) => (
              <motion.span key={index} {...fadeUp(0.35 + index * 0.08)}>
                <Badge variant='primary'>{text}</Badge>
              </motion.span>
            ))}
          </div>

          <div className="flex flex-col gap-[12px] items-center justify-center">
            {/* Heading */}
            <motion.div {...fadeUp(0.55)}>
                <motion.h1
                  className="text-[34px] sm:text-[44px] md:text-[64px] lg:text-[94px] font-poppins font-semibold text-center"
                  style={{
                    background: 'linear-gradient(90deg, #0082C9 0%, #02263A 33%, #1A9AE0 41%, #5BC8FF 48%, #7DDBFF 50%, #5BC8FF 52%, #1A9AE0 59%, #0082C9 67%, #02263A 100%)',
                    backgroundSize: '300% 100%',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text',
                    lineHeight: '121.1%',
                    willChange: 'background-position',
                  }}
                  animate={{ backgroundPosition: ['100% center', '0% center'] }}
                  transition={{
                    duration: 1.4,
                    ease: 'easeInOut',
                    repeat: Infinity,
                    repeatDelay: 5,
                    delay: 2,
                  }}
                >
                  Development Made <br />Comfortable
                </motion.h1>
            </motion.div>

            {/* Subtext */}
            <motion.p
              className="text-center text-base lg:text-xl font-inter text-black"
              {...fadeUp(0.7)}
            >
              Empowering startups and enterprises with custom software<br className='max-md:hidden' /> solutions, on time, on budget, and without the stress.
            </motion.p>
          </div>
        </div>

        {/* CTA Button */}
        <motion.div
          className="flex items-center gap-[12px]"
          {...fadeUp(0.85)}
        >
          <Button variant='primary' className="text-base lg:text-xl px-[24px] py-[12px]">
            <Link href='#form'>Talk to our Team!</Link>
          </Button>
        </motion.div>
      </div>
    </section>
  )
}

export default HeroSection
