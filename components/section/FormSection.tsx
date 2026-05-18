'use client'

import Image from 'next/image'
import React from 'react'
import { motion } from 'framer-motion'
import Form from '../ui/Form'

const ease = [0.22, 1, 0.36, 1] as [number, number, number, number]


const scrollFadeUp = (delay: number) => ({
  initial: { opacity: 0, y: 32 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.2 },
  transition: { duration: 0.7, ease, delay },
})

const FormSection = () => {
  return (
    <section id="form" className="relative w-full py-[64px] px-[24px] md:py-[80px] md:px-[100px] overflow-hidden mx-auto justify-center items-center flex">
      {/* Layer 1: linear gradient */}
      <div
        className="absolute inset-0"
        style={{
          background: 'linear-gradient(to bottom,#81EAFF 100% ,#F0F0F0 100%)',
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
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, amount: 0.2 }}
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

      <div className="relative z-10 flex max-[1000px]:flex-col gap-[40px] max-w-auto min-[1440px]:max-w-[1240px]">
        <div className="flex flex-col gap-[12px] items-start justify-center w-full min-[1000px]:w-1/2 min-[1440px]:w-[600px]">
          {/* Heading */}
          <motion.div {...scrollFadeUp(0.1)}>
            <motion.h1
              className="text-2xl md:text-3xl font-poppins font-bold text-left max-w-[600px]"
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
              Do you want your next vision to come to life?
            </motion.h1>
          </motion.div>

          {/* Subtext */}
          <motion.p
            className="text-left text-sm md:text-base font-inter text-black"
            {...scrollFadeUp(0.25)}
          >
            Comfort Dev is here to make it real with comfort. You may schedule a free call with us on the platform of your choice.
          </motion.p>
        </div>

        {/* Form */}
        <motion.div className="w-full min-[1000px]:w-1/2 min-[1440px]:w-[600px] flex" {...scrollFadeUp(0.4)}>
          <Form />
        </motion.div>
      </div>
    </section>
  )
}

export default FormSection
