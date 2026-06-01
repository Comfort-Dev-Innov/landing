import React from 'react'

const AboutUsSection = () => {
  return (
    <section id="about" className="w-full bg-gradient-to-r from-[#F4FDFF] to-[#FFFFFF] rounded-t-[40px] px-[40px] py-[80px]">
        <div className="flex flex-col gap-[24px] w-full items-center">
          <h1 className="font-poppins font-bold text-4xl text-black">
            Comfort Dev is your <span className="text-primary italic">solution.</span>
          </h1>
          <p className="text-base font-inter text-black text-center">
          At Comfort Dev, we&apos;re more than just a development team. We are your <br className="max-md:hidden"/><span className="font-bold text-primary">long-term partner </span>in building, scaling, and maintaining software solutions that drive business growth. <br/><br/>With a focus on clear communication, dependable delivery, and scalable architecture, we make <br className="max-md:hidden"/>outsourcing feel like an in-house experience.
          </p>
        </div>
    </section>
  )
}

export default AboutUsSection