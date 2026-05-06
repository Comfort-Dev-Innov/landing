import Image from 'next/image'
import React from 'react'
import Badge from '../ui/Badge'
import Button from '../ui/Button'
import Link from 'next/link'

const HeroSection = () => {
  const badgeText = ['Trusted','Tech Forward','Custom Solution']
  return (
    <section className="relative w-full min-h-[500px] sm:min-h-screen p-[24px] pt-[96px] md:p-[64px] md:pt-[136px] overflow-hidden">
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
      <div className="absolute inset-0">
        <Image
          src="/images/clouds.png"
          alt=""
          fill
          className="object-cover"
          priority
        />
      </div>
      {/* Layer 4: pixel pattern image */}
      <div className="absolute inset-0">
        <Image
          src="/images/pixel-pattern.png"
          alt=""
          fill
          className="object-cover opacity-[16%]"
          priority
        />
      </div>
      <div className="relative z-10 flex flex-col gap-[32px] sm:gap-[64px] min-h-[500px] min-[390px]:min-h-[484px] sm:min-h-[650px] items-center justify-center">
        {/* Top */}
        <div className="flex flex-col gap-[24px] items-center justify-center">
          <div className="flex flex-wrap justify-center items-center gap-[8px]">
            {badgeText.map((text, index) => (
              <Badge variant='primary' key={index}>
                {text}
              </Badge>
            ))}
          </div>
          <div className="flex flex-col gap-[12px] items-center justify-center">
            <h1
              className="text-[34px] sm:text-[44px] md:text-[64px] lg:text-[94px] font-poppins font-semibold text-center"
              style={{
                background: 'linear-gradient(to right, #0082C9 0%, #02263A 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
                lineHeight: '121.1%',
              }}
            >Development Made <br />Comfortable</h1>
            <p className="text-center text-base lg:text-xl font-inter text-black">Empowering startups and enterprises with custom software<br className='max-md:hidden'/> solutions, on time, on budget, and without the stress.</p>
          </div>
        </div>
        {/* Bottom */}
        <div className="flex items-center gap-[12px]">
          <Button variant='primary' className="text-base lg:text-xl px-[24px] py-[12px]">
            <Link href='https://calendly.com/comfortdev-innovations/30min' target='_blank'>Talk to our Team!</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}

export default HeroSection