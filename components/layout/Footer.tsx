import React from 'react'
import Image from 'next/image'
import logo from '@/public/images/shared/primary-logo.png'
import { FOOTER_LINKS, CONTACT_ITEMS, SOCIAL_LINKS } from '@/constant/navigation'
import Link from 'next/link'
import CallIcon from '@/assets/icons/CallIcon'
import DistanceIcon from '@/assets/icons/DistanceIcon'
import MailIcon from '@/assets/icons/MailIcon'
import FacebookIcon from '@/assets/icons/FacebookIcon'
import InstagramIcon from '@/assets/icons/InstagramIcon'
import LinkedinIcon from '@/assets/icons/LinkedinIcon'
import GithubIcon from '@/assets/icons/GithubIcon'

const Footer = () => {
    return (
        <footer className="bg-white p-[24px] md:px-[80px] md:py-[40px]">
            <div className="max-w-[1280px] w-full md:mx-auto flex flex-col md:items-center justify-center gap-[10px]">

                {/* First Section */}
                <div className="flex max-md:flex-col max-md:gap-[40px] md:justify-between w-full md:items-center">
                    {/* Left Side */}
                    <div className="flex flex-col gap-[40px] md:max-w-[448px]">
                        <div className="flex flex-col gap-[10px]">
                            <div className="relative z-10 w-[176px] h-[50px] md:w-[236px] md:h-[68px]">
                                <Image src={logo} alt="logo" width={236} height={68} className='w-full h-full object-contain' />
                            </div>
                            <p className="font-inter text-sm md:text-base text-[#535862]">
                                Comfort Dev is here to make it real with comfort. You may schedule a free call with us on the platform of your choice.
                            </p>
                        </div>
                        <div className="flex max-md:flex-col gap-[16px]">
                            {
                                FOOTER_LINKS.map((link) => (
                                    <Link {...(!link.href.startsWith('#') && { target: '_blank', rel: 'noopener noreferrer' })} className="font-inter font-semibold text-[14px] md:text-[16px] text-[#535862] hover:text-primary transition-colors duration-300 hover:underline" href={link.href} key={link.href}>
                                        {link.label}
                                    </Link>
                                ))
                            }
                        </div>
                    </div>

                    {/* Right Side */}
                    <div className="flex flex-col gap-[16px]">
                        <h1 className="text-black font-inter font-bold text-base md:text-lg">Contact Us</h1>
                        <div className="flex flex-col gap-[16px]">
                            {CONTACT_ITEMS.map((item) => (
                                <div key={item.text} className="flex items-center gap-[8px]">
                                    <div className="bg-primary rounded-[37px] p-[8px]">
                                        {item.icon === 'call' && <CallIcon />}
                                        {item.icon === 'distance' && <DistanceIcon />}
                                        {item.icon === 'mail' && <MailIcon />}
                                    </div>
                                    <p className="font-inter text-sm md:text-base text-[#535862]">{item.text}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Second Section */}
                <div className="flex w-full justify-between gap-[10px] py-[10px]">
                    <div className="w-[28px] h-[2.1px] bg-primary"></div>
                    <div className="w-full h-[2.1px] bg-black/12"></div>
                </div>

                {/* Third Section */}
                <div className="flex max-md:flex-col w-full md:items-center md:justify-between max-md:gap-[24px]">
                    <p className="font-inter text-[11px] md:text-sm text-[#717680]">© 2026 Comfort Dev Innovations. All rights reserved.</p>
                    <div className="flex items-center gap-[24px]">
                        {SOCIAL_LINKS.map((social) => (
                            <Link key={social.icon} href={social.href} target="_blank" rel="noopener noreferrer" aria-label={social.label} className="hover:opacity-70 transition-opacity duration-300">
                                {social.icon === 'instagram' && <InstagramIcon />}
                                {social.icon === 'linkedin' && <LinkedinIcon />}
                                {social.icon === 'facebook' && <FacebookIcon />}
                                {social.icon === 'github' && <GithubIcon />}
                            </Link>
                        ))}
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer