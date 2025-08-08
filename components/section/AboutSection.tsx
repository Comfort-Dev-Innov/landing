'use client'
import React, { useState, useEffect } from 'react'
import Image from 'next/image'
import { motion } from 'motion/react'
import about from '@/assets/about-image.jpeg'

const TypewriterText = () => {
    const [currentWordIndex, setCurrentWordIndex] = useState(0)
    const [currentText, setCurrentText] = useState('')
    const [isDeleting, setIsDeleting] = useState(false)
    const [showCursor, setShowCursor] = useState(true)

    useEffect(() => {
        const words = ['partner.', 'solution.', 'team.', 'family.', 'comfort.'];
        const typeSpeed = isDeleting ? 100 : 200
        const deleteSpeed = 50
        const pauseTime = 2000

        const type = () => {
            const currentWord = words[currentWordIndex]

            if (isDeleting) {
                setCurrentText(prev => prev.slice(0, -1))
                if (currentText === '') {
                    setIsDeleting(false)
                    setCurrentWordIndex((prev) => (prev + 1) % words.length)
                }
            } else {
                if (currentText === currentWord) {
                    setTimeout(() => setIsDeleting(true), pauseTime)
                    return
                }
                setCurrentText(currentWord.slice(0, currentText.length + 1))
            }
        }

        const timer = setTimeout(type, isDeleting ? deleteSpeed : typeSpeed)
        return () => clearTimeout(timer)
    }, [currentText, isDeleting, currentWordIndex])

    useEffect(() => {
        const cursorTimer = setInterval(() => {
            setShowCursor(prev => !prev)
        }, 500)
        return () => clearInterval(cursorTimer)
    }, [])

    return (
        <span className="flex items-center text-2xl min-[330px]:text-3xl min-[500px]:text-4xl font-black text-primary">
            {currentText}
            <span className={`w-0.5 h-12 bg-primary ml-1 transition-opacity duration-200 ${showCursor ? 'opacity-100' : 'opacity-0'}`}></span>
        </span>
    )
}

const AboutSection = () => {
    return (
        <motion.section 
            id="about" 
            className="w-full min-h-screen h-[1100px] sm:h-screen flex flex-col gap-12 sm:gap-16 justify-center items-center bg-white backdrop-blur-lg border border-white/50"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true, margin: "-100px" }}
        >
            <motion.div 
                className="flex w-full justify-center"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
            >
                <h1 className="flex uppercase text-xl tracking-[0.5em] min-[330px]:tracking-[0.8em] font-bold text-primary">Who We Are</h1>
            </motion.div>
            
            <div className="flex flex-col min-[1000px]:flex-row gap-8 xl:gap-16 justify-between px-4 sm:px-12 xl:px-0 w-full xl:w-6xl mx-auto">
                <motion.div 
                    className="w-full min-[1000px]:w-1/2 h-[300px] min-[1000px]:h-auto rounded-[20px] overflow-hidden"
                    initial={{ opacity: 0, x: -50, scale: 0.95 }}
                    whileInView={{ opacity: 1, x: 0, scale: 1 }}
                    transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.02 }}
                >
                    <Image src={about} alt="About" className="w-full h-full object-cover" width={500} height={500} />
                </motion.div>
                
                <motion.div 
                    className="w-full min-[1000px]:w-1/2 flex flex-col gap-4"
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
                    viewport={{ once: true }}
                >
                    <motion.div 
                        className="font-inter flex gap-1 min-[500px]:gap-3 items-center flex-wrap justify-center min-[1000px]:justify-start"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.5 }}
                        viewport={{ once: true }}
                    >
                        <h1 className="text-2xl min-[330px]:text-3xl min-[500px]:text-4xl font-black">Comfort Dev is your</h1>
                        <TypewriterText />
                    </motion.div>
                    
                    <motion.p 
                        className="text-base min-[330px]:text-md min-[500px]:text-lg text-black text-center min-[1000px]:text-left"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.6 }}
                        viewport={{ once: true }}
                    >
                        At ComfortDev, we&apos;re more than just a development team. We are your <span className="text-primary font-bold">long-term partner</span>  in building, scaling, and maintaining software solutions that drive business growth. 
                        <br/><br/> 
                        With a focus on <span className="italic">clear communication, dependable delivery, and scalable architecture,</span> we make outsourcing feel like an in-house experience.
                    </motion.p>
                </motion.div>
            </div>
        </motion.section>
    )
}

export default AboutSection