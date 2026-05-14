'use client'

import React, { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import Heading from '../layout/Heading'
import Tabs from '../ui/Tabs'
import ProjectCard, { Project } from '../ui/ProjectCard'
import Button from '../ui/Button'

const PROJECTS_LIMIT = 5

const projectTabs = [
  { label: 'Web', value: 'web' },
  { label: 'Mobile', value: 'mobile' },
]

const projects: Project[] = [
  {
    title: 'Delphai - AI-Powered Astrology App',
    description:
      'Delphai Corporation, a former client, entrusted us to craft "DelphAI"—a mystical, AI-powered astrology companion that blends ancient prophetic traditions with modern technology.',
    image: '/images/projects/delphie.png',
    gradient: ['#6b2fa0', '#1e0a3c'],
    link: 'https://delphai.com',
    tags: ['React', 'ReactNative', 'Supabase', 'OpenAI', 'CSS', 'iOS', 'Android', 'Postgres'],
    type: 'mobile',
  },
  {
    title: 'Data Genie - A Smart Lead Generation Platform',
    description:
      'We created Data Genie—a dynamic web app built for targeted direct marketing and lead generation. The platform enables users to generate highly customizable homeowner prospect lists using verified property and demographic data.',
    image: '/images/projects/data-genie.png',
    gradient: ['#2F6CBC', '#6DACFF'],
    link: 'https://datagenie.com',
    tags: ['React', 'NextJS', 'Tailwind', 'Javascript(TS)', 'Vercel'],
    type: 'web',
  },
  {
    title: 'NexLead - Delivering Exclusive, Verified Leads Without the Noise',
    description:
      'We developed Nex Lead, a streamlined lead generation platform designed to deliver exclusive, verified, pay-per-lead prospects directly to businesses—no contracts, no fluff. This tool was crafted for immediacy and efficiency, enabling clients to focus on closing deals instead of chasing unqualified leads.',
    image: '/images/projects/nexlead.png',
    gradient: ['#dff0e8', '#b8ddc8'],
    link: 'https://nexlead.com',
    tags: ['React', 'NextJS', 'Tailwind', 'Javascript(TS)', 'Vercel'],
    type: 'web',
  },
  {
    title: 'Atlas Realty Leads — From Clicks to Property Leads',
    description:
      'We developed Atlas Realty Leads, a streamlined real-estate lead provider landing page.',
    image: '/images/projects/atlas.png',
    gradient: ['#e8f4ff', '#c5dff5'],
    link: 'https://atlasrealtyleads.com',
    tags: ['React', 'NextJS', 'Tailwind', 'Javascript(TS)', 'Vercel'],
    type: 'web',
  },
]

const tabIndex = (v: string) => projectTabs.findIndex((t) => t.value === v)

const slideVariants = {
  enter: (dir: number) => ({ x: dir * 48, opacity: 0 }),
  center: { x: 0, opacity: 1 },
  exit: (dir: number) => ({ x: dir * -48, opacity: 0 }),
}

const ProjectsSection = () => {
  const [activeTab, setActiveTab] = useState<'web' | 'mobile'>('web')
  const [direction, setDirection] = useState(0)
  const [showAll, setShowAll] = useState(false)

  const handleTabChange = (v: string) => {
    const next = tabIndex(v)
    const prev = tabIndex(activeTab)
    setDirection(next > prev ? 1 : -1)
    setActiveTab(v as 'web' | 'mobile')
    setShowAll(false)
  }

  const filtered = projects.filter((p) => p.type === activeTab)
  const visible = showAll ? filtered : filtered.slice(0, PROJECTS_LIMIT)
  const hasMore = filtered.length > PROJECTS_LIMIT

  return (
    <section className="flex flex-col items-center gap-[52px] bg-[#F8FDFF] px-[24px] py-[80px] md:px-[100px]">
      <div className="flex flex-col items-center gap-[32px]">
        <Heading
          title="Works"
          subTitle="Projects"
          description="Here are some of the projects Comfort Dev has worked on."
        />
        <Tabs
          items={projectTabs}
          defaultValue="web"
          onValueChange={handleTabChange}
        />
      </div>

      <AnimatePresence mode="wait" custom={direction}>
        <motion.div
          key={activeTab}
          custom={direction}
          variants={slideVariants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{ duration: 0.32, ease: [0.4, 0, 0.2, 1] }}
          className="flex flex-col gap-[16px] w-full"
        >
          {visible.map((project) => (
            <ProjectCard key={project.title} {...project} />
          ))}

          {hasMore && !showAll && (
            <div className="flex justify-center pt-[8px]">
              <Button variant="secondary" onClick={() => setShowAll(true)}>
                Show more
              </Button>
            </div>
          )}
        </motion.div>
      </AnimatePresence>
    </section>
  )
}

export default ProjectsSection
