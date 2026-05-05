import Image from 'next/image'
import React from 'react'

const HeroSection = () => {
  return (
    <section className="relative w-full min-h-screen overflow-hidden">
      {/* Layer 1: linear gradient — #F0F0F0 at top → #81EAFF at bottom */}
      <div
        className="absolute inset-0"
        style={{
          background: 'linear-gradient(to bottom, #F0F0F0 0%, #81EAFF 100%)',
        }}
      />
      {/* Layer 2: radial gradient from bottom — #29B3FF at bottom → transparent at top */}
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
      {/* Layer 4: pixel pattern image (top-most background layer) */}
      <div className="absolute inset-0">
        <Image
          src="/images/pixel-pattern.png"
          alt=""
          fill
          className="object-cover opacity-[16%]"
          priority
        />
      </div>
      {/* Content goes here */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen" />
    </section>
  )
}

export default HeroSection