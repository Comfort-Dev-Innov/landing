'use client'

import React from 'react'
import { motion } from 'framer-motion'

const ease = [0.22, 1, 0.36, 1] as [number, number, number, number]

const AboutUsSection = () => {
  return (
    <section id="about" className="w-full bg-gradient-to-r from-[#F4FDFF] to-[#FFFFFF] rounded-t-[40px] px-[24px] md:px-[40px] py-[40px] md:py-[80px]">
        <div className="flex flex-col gap-[24px] w-full items-center text-center">
          <motion.h1
            className="font-poppins font-bold text-2xl md:text-4xl text-black text-center"
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.6 }}
            transition={{ duration: 0.8, ease }}
          >
            Comfort Dev is your <span className="text-primary italic">solution.</span>
          </motion.h1>
          <motion.p
            className="text-sm md:text-base font-inter text-black text-center"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.6 }}
            transition={{ duration: 0.8, ease, delay: 0.15 }}
          >
          At Comfort Dev, we&apos;re more than just a development team. We are your <br className="max-md:hidden"/><span className="font-bold text-primary">long-term partner </span>in building, scaling, and maintaining software solutions that drive business growth. <br/><br/>With a focus on clear communication, dependable delivery, and scalable architecture, we make <br className="max-md:hidden"/>outsourcing feel like an in-house experience.
          </motion.p>
        </div>
    </section>
  )
}

export default AboutUsSection