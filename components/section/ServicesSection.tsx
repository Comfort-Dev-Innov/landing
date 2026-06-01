import React from 'react'
import Heading from '../layout/Heading'
import WebMobileIcon from '@/assets/icons/services/WebMobileIcon'
import UsersIcon from '@/assets/icons/services/UsersIcon'
import BrushIcon from '@/assets/icons/services/BrushIcon'
import CloudIcon from '@/assets/icons/services/CloudIcon'
import BugIcon from '@/assets/icons/services/BugIcon'
import CodeFolderIcon from '@/assets/icons/services/CodeFolderIcon'
import ServiceCard from '../ui/ServiceCard'

const ServicesSection = () => {
  const services = [
    {
      icon: <WebMobileIcon />,
      serviceName: 'Web & Mobile App Development',
      serviceDescription: 'Build high-performance apps with modern frameworks and scalable architecture.',
    },
    {
      icon: <UsersIcon />,
      serviceName: 'Dedicated Development Teams',
      serviceDescription: 'Extend your team with vetted people who align with your goals and workflow.',
    },
    {
      icon: <BrushIcon />,
      serviceName: 'UI/UX Design',
      serviceDescription: 'Create intuitive, engaging user experiences with design systems that scale.',
    },
    {
      icon: <CloudIcon />,
      serviceName: 'Cloud & DevOps',
      serviceDescription: 'Deploy faster and more reliably with cloud-native solutions and CI/CD pipelines.',
    },
    {
      icon: <BugIcon />,
      serviceName: 'QA & Testing',
      serviceDescription: 'Ensure quality from day one with manual and automated testing strategies.',
    },
    {
      icon: <CodeFolderIcon />,
      serviceName: 'Custom Software Solutions',
      serviceDescription: 'From MVPs to enterprise platforms - if you can imagine it, we can build it.',
    },
  ]
  return (
    <section id="services" className="w-full bg-gradient-to-r from-[#F4FDFF] to-[#FFFFFF] mx-auto flex justify-center">
      <div className="flex flex-col px-[24px] md:px-[100px] py-[40px] md:py-[80px] gap-[32px] md:gap-[64px] max-w-[1392px]">
       <Heading title="What We Do" subTitle="Services" description={"Custom software services to support your vision. Whether you\nare building from scratch or expanding your existing product."} leftAlign/>
       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[24px]">
        {services.map((service) => (
          <ServiceCard key={service.serviceName} {...service} />
        ))}

        </div>
        </div>
    </section>
  )
}

export default ServicesSection