'use client';
import React from 'react';
import { motion } from 'motion/react';
import ProjectCard, { ProjectCardProps } from '../ui/ProjectCard';

export default function ProjectsSection() {
  const projects: ProjectCardProps[] = [
    {
      title: 'Delphai',
      description:
        'Delphai Corporation, a former client, entrusted us to craft “DelphAI”—a mystical, AI-powered astrology companion that blends ancient prophetic traditions with modern technology.',
      images: [
        '/images/delphai-1.png',
        '/images/delphai-2.png',
        '/images/delphai-3.png',
        '/images/delphai-4.png',
      ],
      links: [
        {
          type: 'link',
          url: 'https://www.linkedin.com/company/delphai-corporation',
          label: 'LinkedIn',
        },
      ],
      technologies: [
        'React',
        'ReactNative',
        'MySQL',
        'OpenAI',
        'CSS',
        'iOS',
        'Android',
      ],
      index: 0,
    },
    {
      title: 'Data Genie',
      description:
        'We created Data Genie—a dynamic web app built for targeted direct marketing and lead generation. The platform enables users to generate highly customizable homeowner prospect lists using verified property and demographic data.',
      images: [
        '/images/datagenie-1.png',
        '/images/datagenie-2.png',
        '/images/datagenie-3.png',
        '/images/datagenie-4.png',
        '/images/datagenie-5.png',
      ],
      links: [
        {
          type: 'live',
          url: 'https://godatagenie.com',
          label: 'Data Genie',
        },
      ],
      technologies: [
        'React',
        'NextJS',
        'TailwindCSS',
        'JavaScript(TS)',
        'Vercel',
      ],
      index: 1,
    },
    {
      title: 'Go Get Leads',
      description:
        'We developed a streamlined lead-generation platform called Go Get Leads, designed exclusively for real estate professionals. The app delivers verified, high-intent homeowner leads—double-confirmed and territory-exclusive—so agents can stop chasing fluff and start closing deals.',
      images: [
        '/images/gogetleads-1.png',
        '/images/gogetleads-2.png',
        '/images/gogetleads-3.png',
        '/images/gogetleads-4.png',
      ],
      links: [
        {
          type: 'live',
          url: 'https://go-getleads.com',
          label: 'Go Get Leads',
        },
      ],
      technologies: [
        'React',
        'NextJS',
        'TailwindCSS',
        'JavaScript(TS)',
        'Vercel',
      ],
      index: 2,
    },
    {
      title: 'NexLead',
      description:
        'We developed Nex Lead, a streamlined lead generation platform designed to deliver exclusive, verified, pay-per-lead prospects directly to businesses—no contracts, no fluff. This tool was crafted for immediacy and efficiency, enabling clients to focus on closing deals instead of chasing unqualified leads.',
      images: [
        '/images/nextlead-1.png',
        '/images/nextlead-2.png',
        '/images/nextlead-3.png',
        '/images/nextlead-4.png',
        '/images/nextlead-5.png',
      ],
      links: [
        {
          type: 'live',
          url: 'https://nexleads.net',
          label: 'NexLead',
        },
      ],
      technologies: [
        'React',
        'NextJS',
        'TailwindCSS',
        'JavaScript(TS)',
        'Vercel',
      ],
      index: 3,
    },
  ];
  return (
    <motion.section
      id="services"
      className="w-full h-fit min-h-screen flex py-8 flex-col gap-12 sm:gap-16 justify-center items-center bg-slate-200/40 backdrop-blur-lg border border-white/50 pb-26 sm:pb-20"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
      viewport={{ once: true }}
    >
      <h1 className="flex uppercase text-xl tracking-[0.5em] min-[330px]:tracking-[0.8em] font-bold text-primary">
        Projects
      </h1>
      <motion.div className="grid grid-cols-1 md:grid-cols-2 gap-8 py-8 px-4 md:px-16 w-full justify-center items-center">
        {projects.map((project, index) => (
          <ProjectCard key={index} {...project} />
        ))}
      </motion.div>
    </motion.section>
  );
}
