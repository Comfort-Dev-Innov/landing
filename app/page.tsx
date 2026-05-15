import HeroSection from '@/components/section/HeroSection';
import ProjectsSection from '@/components/section/ProjectsSection';
import TechSection from '@/components/section/TechSection';
import FormSection from '@/components/section/FormSection';
import React from 'react';

function LandingPage() {
  return (
      <>
        <HeroSection />
        <TechSection />
        <ProjectsSection />
        <FormSection />
      </>
  );
};

export default LandingPage;
