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
    title: 'Delphai: AI-Powered Astrology App',
    description:
      'Delphai Corporation, a former client, entrusted us to craft "DelphAI"—a mystical, AI-powered astrology companion that blends ancient prophetic traditions with modern technology.',
    image: '/images/projects/delphie.png',
    gradient: ['#6b2fa0', '#1e0a3c'],
    link: 'https://www.linkedin.com/company/delphai-corporation',
    tags: ['React', 'ReactNative', 'Supabase', 'OpenAI', 'CSS', 'iOS', 'Android', 'Postgres'],
    type: 'mobile',
  },
  {
    title: 'Covenant Care: Insurance Coverage',
    description:
      'Designed and developed a tailored landing page for Covenant Care’s insurance services, creating a streamlined experience that highlights coverage options and drives conversions.',
    image: '/images/projects/covenant-care.png',
    gradient: ['#f5e97a', '#fdf6c3'],
    link: 'https://covenantcare.ph/',
    tags: ['React', 'NextJS', 'Tailwind', 'Javascript(TS)', 'Vercel'],
    type: 'web',
  },
  {
    title: 'Data Genie: A Smart Lead Generation Platform',
    description:
      'We created Data Genie—a dynamic web app built for targeted direct marketing and lead generation. The platform enables users to generate highly customizable homeowner prospect lists using verified property and demographic data.',
    image: '/images/projects/data-genie.png',
    gradient: ['#2F6CBC', '#6DACFF'],
    link: 'https://godatagenie.com/',
    tags: ['React', 'NextJS', 'Tailwind', 'Javascript(TS)', 'Vercel'],
    type: 'web',
  },
  {
    title: 'Digital Difference Makers: Automotive Dealership Content Page Development',
    description:
      'Developed and maintained responsive blog and content pages for multiple U.S. automotive dealership websites under a digital marketing agency. Focused on building reusable front-end components, implementing CMS-driven layouts, and ensuring consistent, scalable page structures across different dealership brands.',
    image: '/images/projects/ddm.png',
    gradient: ['#0a7c4e', '#022b1a'],
    link: 'https://joecooperlincoln.com/blog/why-trade-in-your-lincoln-at-joe-cooper-lincoln-of-edmond',
    tags: ['HTML', 'CSS', 'JavaScript', 'WordPress', 'Motive', 'CMS'],
    type: 'web',
  },
  {
    title: 'NexLead: Delivering Exclusive, Verified Leads Without the Noise',
    description:
      'We developed Nex Lead, a streamlined lead generation platform designed to deliver exclusive, verified, pay-per-lead prospects directly to businesses—no contracts, no fluff. This tool was crafted for immediacy and efficiency, enabling clients to focus on closing deals instead of chasing unqualified leads.',
    image: '/images/projects/nexlead.png',
    gradient: ['#deded5', '#FFFFF5'],
    link: 'https://nexleads.net/',
    tags: ['React', 'NextJS', 'Tailwind', 'Javascript(TS)', 'Vercel'],
    type: 'web',
  },
  {
    title: 'LJCB: Retail and Warehousing',
    description:
      'Developed and maintained landing page and content pages for LJCB, a retail and warehousing company in Cebu.',
    image: '/images/projects/ljcb.png',
    gradient: ['#C0392B', '#d75244'],
    link: 'https://ljcb.vercel.app/',
    tags: ['React', 'NextJS', 'Tailwind', 'Javascript(TS)', 'Vercel'],
    type: 'web',
  },
  {
    title: 'Atlas Realty Leads: From Clicks to Property Leads',
    description:
      'We developed Atlas Realty Leads, a streamlined real-estate lead provider landing page.',
    image: '/images/projects/atlas.png',
    gradient: ['#e8f4ff', '#c5dff5'],
    link: 'https://atlasrealtyleads.com',
    tags: ['React', 'NextJS', 'Tailwind', 'Javascript(TS)', 'Vercel'],
    type: 'web',
  },
  {
    title: 'Creating Go Get Leads: Precision Lead Generation for Agents',
    description:
      'We developed a streamlined lead-generation platform called Go Get Leads, designed exclusively for real estate professionals. The app delivers verified, high-intent homeowner leads—double-confirmed and territory-exclusive—so agents can stop chasing fluff and start closing deals.',
    image: '/images/projects/go-get-leads.png',
    gradient: ['#EDCCB0', '#FF9840'],
    link: 'https://go-getleads.com/',
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

const ease = [0.22, 1, 0.36, 1] as [number, number, number, number]

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
    <section id="projects" className="flex flex-col items-center gap-[52px] bg-[#F8FDFF] px-[24px] py-[80px] md:px-[100px]">
      <motion.div
        className="flex flex-col items-center gap-[32px]"
        initial={{ opacity: 0, y: 45 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.9 }}
        transition={{ duration: 1.0, ease }}
      >
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
      </motion.div>

      <AnimatePresence mode="wait" custom={direction}>
        <motion.div
          key={activeTab}
          custom={direction}
          variants={slideVariants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{ duration: 0.32, ease: [0.4, 0, 0.2, 1] }}
          className="flex flex-col gap-[16px] w-full max-w-[1240px]"
        >
          <AnimatePresence initial={false}>
            {visible.map((project, i) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 45 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.9 }}
                transition={{
                  duration: 0.75,
                  ease,
                  delay: i >= PROJECTS_LIMIT ? (i - PROJECTS_LIMIT) * 0.1 : i * 0.06,
                }}
              >
                <ProjectCard {...project} />
              </motion.div>
            ))}
          </AnimatePresence>

          {hasMore && !showAll && (
            <div className="flex justify-center pt-[8px]">
              <Button variant="primary" onClick={() => setShowAll(true)}>
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
