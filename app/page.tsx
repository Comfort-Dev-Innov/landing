import HeroSection from '@/components/section/HeroSection';
import ProjectsSection from '@/components/section/ProjectsSection';
import TechSection from '@/components/section/TechSection';
import FormSection from '@/components/section/FormSection';
import AboutUsSection from '@/components/section/AboutUsSection';
import ServicesSection from '@/components/section/ServicesSection';
import React from 'react';
import TestimonialSection from '@/components/section/TestimonialSection';

function LandingPage() {
  return (
      <>
        <HeroSection />
        <div
          className="flex flex-col px-[24px]"
          style={{
            background: `
              linear-gradient(to top, #ffffff, #65C5F5),
              linear-gradient(to right, rgba(125,208,244,0.2) 0%, rgba(81,188,244,0.2) 52%, rgba(143,216,245,0.2) 100%)
            `
          }}
        >
            <AboutUsSection />
            <ServicesSection />
        </div>
        <TechSection />
        <ProjectsSection />
        <TestimonialSection />
        <FormSection />
      </>
  );
};

export default LandingPage;
