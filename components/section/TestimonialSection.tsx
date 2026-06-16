'use client'

import React, { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import TestimonialCard from '../ui/TestimonialCard'
import PaginationDots from '../ui/PaginationDots'
import ArrowLeftIcon from '@/assets/icons/ArrowLeftIcon'
import ArrowRightIcon from '@/assets/icons/ArrowRightIcon'

const testimonials = [
    {
        review: "Working with Kath, Angelou, and the team at Comfort Dev has been an absolute pleasure. From the very beginning, their professionalism, attention to detail, and seamless communication stood out. They took the time to truly understand our needs and delivered exceptional results. I highly recommend Comfort Dev to anyone looking for a reliable and top-notch development partner!",
        firstName: 'Rosalyn Pilar',
        lastName: 'Saavedra',
        position: 'Founder/President',
        company: 'Covenant Care',
        tags: ['Landing Page','React', 'NextJS', 'Tailwind', 'Javascript(TS)', 'Vercel'],
        imgUrl: '/images/testimonials/rosalyn-pilar.png',
    },
    {
        review: "I've worked with Comfort Dev to kickstart the online presence of two of my companies, Data Genie and Go Get Leads. After launching the websites, we've seen a significant growth in the business and an increase in our clientele. From our initial conversation and even after launching our sites, communication and the turn-around time with this team has been amazing. If you want a professional web development team that can make your vision for your website come to life and get the results that you want, I highly recommend Comfort Dev. I'm looking forward to working with these people again!",
        firstName: 'Bo',
        lastName: 'R.',
        position: 'Founder/Product Owner',
        company: 'Data Genie',
        tags: ['Landing Page','React', 'NextJS', 'Tailwind', 'Javascript(TS)', 'Vercel'],
    },
]

const TestimonialSection = () => {
    const [current, setCurrent] = useState(0)
    const [direction, setDirection] = useState(1)
    const total = testimonials.length
    const isOnly = total <= 1

    const handlePrev = () => {
        if (!isOnly) {
            setDirection(-1)
            setCurrent((prev) => (prev - 1 + total) % total)
        }
    }

    const handleNext = () => {
        if (!isOnly) {
            setDirection(1)
            setCurrent((prev) => (prev + 1) % total)
        }
    }

    const handleDotChange = (index: number) => {
        setDirection(index > current ? 1 : -1)
        setCurrent(index)
    }

    const variants = {
        enter: (dir: number) => ({ opacity: 0, x: dir * 60 }),
        center: { opacity: 1, x: 0 },
        exit: (dir: number) => ({ opacity: 0, x: dir * -60 }),
    }

    const arrowClass = (isOnly: boolean) =>
        `transition-all duration-300 ease-in-out ${
            isOnly
                ? 'text-[#D1D1D1] cursor-not-allowed'
                : 'text-primary hover:scale-125 hover:opacity-80 cursor-pointer'
        }`

    return (
        <section id="testimonials" className="bg-white flex flex-col px-[24px] md:px-[100px] py-[40px] md:py-[80px] items-center">
            <motion.div
                className="w-full max-w-[1240px] flex gap-[40px] justify-between items-center"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, ease: 'easeOut' }}
            >
                {/* Desktop-only left arrow */}
                <button
                    onClick={handlePrev}
                    disabled={isOnly}
                    className={`hidden md:block ${arrowClass(isOnly)}`}
                    aria-label="Previous testimonial"
                >
                    <ArrowLeftIcon className="w-[24px] h-[24px]" />
                </button>

                <div className="flex flex-col items-center gap-[32px] overflow-hidden w-full">
                    <AnimatePresence mode="wait" custom={direction}>
                        <motion.div
                            key={current}
                            custom={direction}
                            variants={variants}
                            initial="enter"
                            animate="center"
                            exit="exit"
                            transition={{ duration: 0.35, ease: 'easeInOut' }}
                        >
                            <TestimonialCard {...testimonials[current]} />
                        </motion.div>
                    </AnimatePresence>

                    {/* Desktop-only pagination dots */}
                    <div className="hidden md:flex">
                        <PaginationDots total={total} current={current} onChange={handleDotChange} />
                    </div>

                    {/* Mobile-only controls: arrows flanking pagination dots */}
                    <div className="flex md:hidden items-center justify-center gap-[40px] w-full">
                        <button
                            onClick={handlePrev}
                            disabled={isOnly}
                            className={arrowClass(isOnly)}
                            aria-label="Previous testimonial"
                        >
                            <ArrowLeftIcon className="w-[18px] h-[18px]" />
                        </button>
                        <PaginationDots total={total} current={current} onChange={handleDotChange} />
                        <button
                            onClick={handleNext}
                            disabled={isOnly}
                            className={arrowClass(isOnly)}
                            aria-label="Next testimonial"
                        >
                            <ArrowRightIcon className="w-[18px] h-[18px]" />
                        </button>
                    </div>
                </div>

                {/* Desktop-only right arrow */}
                <button
                    onClick={handleNext}
                    disabled={isOnly}
                    className={`hidden md:block ${arrowClass(isOnly)}`}
                    aria-label="Next testimonial"
                >
                    <ArrowRightIcon className="w-[24px] h-[24px]" />
                </button>
            </motion.div>
        </section>
    )
}

export default TestimonialSection
