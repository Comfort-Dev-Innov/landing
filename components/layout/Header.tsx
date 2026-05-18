'use client'

import React, { useState, useCallback, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import Button from '../ui/Button'
import { NAV_LINKS } from '@/constant/navigation'
import logo from '@/public/images/shared/primary-logo.png'
import icon from '@/public/images/shared/primary-icon.png'
import HamburgerIcon from '@/assets/icons/HamburgerIcon'
import PhoneIcon from '@/assets/icons/PhoneIcon'
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from 'framer-motion'

const LIGHT_SECTION_IDS = ['technologies', 'projects', 'about', 'services']

const glassBg = {
    border: '1px solid transparent',
    background: `
        linear-gradient(to right, #F4FDFF, rgba(255,255,255,0.34)) padding-box,
        linear-gradient(to right, rgba(255,255,255,0.58) 0%, rgba(255,255,255,0.24) 100%) border-box
    `,
}

const Header = () => {
    const [drawerOpen, setDrawerOpen] = useState(false)
    const [isScrolled, setIsScrolled] = useState(false)
    const [isLightSection, setIsLightSection] = useState(false)

    const { scrollY } = useScroll()

    const checkLightSection = useCallback(() => {
        const headerBottom = 120
        for (const id of LIGHT_SECTION_IDS) {
            const el = document.getElementById(id)
            if (!el) continue
            const rect = el.getBoundingClientRect()
            if (rect.top <= headerBottom && rect.bottom >= 0) {
                setIsLightSection(true)
                return
            }
        }
        setIsLightSection(false)
    }, [])

    useMotionValueEvent(scrollY, 'change', (latest) => {
        setIsScrolled(latest > 50)
        checkLightSection()
    })

    useEffect(() => {
        checkLightSection()
    }, [checkLightSection])

    const overlayOpacity = isScrolled ? 0.94 : 0

    const boxShadow = isScrolled && isLightSection
        ? '0px 8px 40px rgba(0,0,0,0.22)'
        : isScrolled
            ? '0px 4px 20px rgba(0,0,0,0.07)'
            : '0px 0px 0px rgba(0,0,0,0)'

    return (
        <>
            <motion.div
                className='fixed top-0 left-0 right-0 z-50 max-w-[1312px] mx-auto font-poppins pt-[32px] max-[1400px]:px-[24px]'
                initial={{ opacity: 0, y: -32 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] }}
            >
                {/* Desktop */}
                <motion.header
                    className="relative w-full flex justify-between items-center py-[4px] px-[12px] rounded-[52px] max-md:hidden"
                    style={glassBg}
                    animate={{ boxShadow }}
                    transition={{ duration: 0.4, ease: 'easeInOut' }}
                >
                    {/* Near-white overlay that fades in on scroll */}
                    <motion.div
                        className="absolute inset-0 rounded-[52px] bg-white pointer-events-none"
                        animate={{ opacity: overlayOpacity }}
                        transition={{ duration: 0.45, ease: 'easeInOut' }}
                    />

                    <div className="relative z-10 xl:w-[216px] xl:h-[62px] lg:w-[180px] lg:h-[52px] w-[120px] h-[32px]">
                        <Image src={logo} alt="logo" width={216} height={100} className='w-full h-full object-contain' />
                    </div>
                    <nav className="relative z-10 flex items-center gap-[10px] xl:gap-[18px]">
                        {NAV_LINKS.map((link) => (
                            <Link
                                key={link.href}
                                href={link.href}
                                className="py-[4px] px-[2px] lg:px-[4px] xl:px-[8px] text-black text-[14px] lg:text-[16px] xl:text-[18px] font-medium hover:text-primary transition-colors duration-300"
                            >
                                {link.label}
                            </Link>
                        ))}
                    </nav>
                    <div className="relative z-10">
                        <Button variant='primary' className="max-lg:text-[14px]! max-xl:text-[16px]!">
                            <Link href='https://calendly.com/comfortdev-innovations/30min' target='_blank'>Contact Us</Link>
                        </Button>
                    </div>
                </motion.header>

                {/* Mobile */}
                <motion.header
                    className="relative w-full flex justify-between items-center py-[4px] px-[12px] rounded-[52px] md:hidden"
                    style={glassBg}
                    animate={{ boxShadow }}
                    transition={{ duration: 0.4, ease: 'easeInOut' }}
                >
                    {/* Near-white overlay that fades in on scroll */}
                    <motion.div
                        className="absolute inset-0 rounded-[52px] bg-white pointer-events-none"
                        animate={{ opacity: overlayOpacity }}
                        transition={{ duration: 0.45, ease: 'easeInOut' }}
                    />

                    <div className="relative z-10 w-[44px] h-[44px]">
                        <Image src={icon} alt="logo" width={44} height={44} className='w-full h-full object-contain' />
                    </div>
                    <div className='relative z-10 flex items-center gap-[12px]'>
                        <button
                            className='cursor-pointer transition-transform duration-200 hover:scale-110 active:scale-95'
                            onClick={() => setDrawerOpen(true)}
                            aria-label="Open menu"
                        >
                            <HamburgerIcon />
                        </button>
                        <div className='flex items-center p-[10px] rounded-full bg-tertiary cursor-pointer transition-all duration-300 hover:shadow-[0_0_18px_4px_rgba(251,192,14,0.45)] hover:brightness-105 hover:scale-[1.03] active:scale-[0.97]'>
                            <Link href='https://calendly.com/comfortdev-innovations/30min' target='_blank'>
                                <PhoneIcon size={18} />
                            </Link>
                        </div>
                    </div>
                </motion.header>
            </motion.div>

            {/* Drawer overlay */}
            <AnimatePresence>
                {drawerOpen && (
                    <motion.div
                        className="fixed inset-0 z-[60] bg-black/30 backdrop-blur-sm md:hidden"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.25 }}
                        onClick={() => setDrawerOpen(false)}
                    />
                )}
            </AnimatePresence>

            {/* Drawer panel */}
            <AnimatePresence>
                {drawerOpen && (
                    <motion.div
                        className="fixed top-0 right-0 z-[70] h-full w-[75vw] max-w-[320px] font-poppins flex flex-col pt-[32px] px-[24px] pb-[40px] md:hidden"
                        initial={{ x: '100%' }}
                        animate={{ x: 0 }}
                        exit={{ x: '100%' }}
                        transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] }}
                        style={{
                            border: '1px solid transparent',
                            background: `
                        linear-gradient(135deg, #F4FDFF, rgba(255,255,255,0.88)) padding-box,
                        linear-gradient(135deg, rgba(255,255,255,0.58), rgba(255,255,255,0.24)) border-box
                    `,
                            backdropFilter: 'blur(20px)',
                        }}
                    >
                {/* Drawer header */}
                <div className='flex justify-between items-center mb-[40px]'>
                    <div className="w-[44px] h-[44px]">
                        <Image src={icon} alt="logo" width={44} height={44} className='w-full h-full object-contain' />
                    </div>
                    <button
                        onClick={() => setDrawerOpen(false)}
                        aria-label="Close menu"
                        className='w-[36px] h-[36px] flex items-center justify-center rounded-full text-black/60 hover:cursor-pointer hover:text-black hover:bg-black/5 transition-all duration-200 text-[20px] leading-none'
                    >
                        ✕
                    </button>
                </div>

                {/* Nav links */}
                <nav className='flex flex-col gap-[4px] flex-1'>
                    {NAV_LINKS.map((link, i) => (
                        <motion.div
                            key={link.href}
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.1 + i * 0.06, duration: 0.3, ease: 'easeOut' }}
                        >
                            <Link
                                href={link.href}
                                onClick={() => setDrawerOpen(false)}
                                className='block py-[12px] px-[8px] text-black text-[16px] font-medium border-b border-black/5 hover:text-primary hover:pl-[14px] transition-all duration-200'
                            >
                                {link.label}
                            </Link>
                        </motion.div>
                    ))}
                </nav>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    )
}

export default Header
