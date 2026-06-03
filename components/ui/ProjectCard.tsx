'use client'

import React, { useState } from 'react'
import Image from 'next/image'
import ArrowLinkIcon from '@/assets/icons/ArrowLinkIcon'
import Badge from '@/components/ui/Badge'

export type Project = {
  title: string
  description: string
  image: string
  /** Two-stop linear gradient (top → bottom) for the image backdrop, e.g. ['#2F6CBC', '#6DACFF'] */
  gradient: [string, string]
  link?: string
  tags: string[]
  type: 'web' | 'mobile'
}

const ProjectCard = ({ title, description, image, gradient, link, tags }: Project) => {
  const [colorFrom, colorTo] = gradient
  const [glowPos, setGlowPos] = useState<{ x: number; y: number } | null>(null)

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect()
    setGlowPos({ x: e.clientX - rect.left, y: e.clientY - rect.top })
  }

  const handleMouseLeave = () => setGlowPos(null)

  return (
    <div className="flex flex-col lg:flex-row w-full rounded-[24px] h-auto max-h-auto lg:h-[435px] lg:max-h-[435px] p-[12px] gap-[32px] bg-white border border-black/[0.08] shadow-sm transition-all duration-300 ease-out hover:-translate-y-0.5 hover:shadow-md hover:border-black/[0.12]">
      {/* Image panel with radial gradient backdrop */}
      <div
        className="relative w-full lg:w-1/2 shrink-0 self-stretch rounded-[12px] overflow-hidden"
        style={{
          background: `linear-gradient(to bottom, ${colorFrom} 0%, ${colorTo} 100%)`,
        }}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
      >
        {/* 4-pointed diamond ray — thick at center, tapers to tips */}
        <div
          className="absolute inset-0 z-[1] pointer-events-none"
          style={{
            background: `
              radial-gradient(ellipse 42% 100% at 50% 50%, rgba(255,255,255,0.32) 0%, transparent 100%),
              radial-gradient(ellipse 100% 42% at 50% 50%, rgba(255,255,255,0.32) 0%, transparent 100%)
            `,
          }}
        />

        <Image
          src={image}
          alt={title}
          width={600}
          height={430}
          className="relative z-10 w-full h-full object-contain"
        />

        {/* Radial cursor glow — sits between the gradient bg and the image */}
        {glowPos && (
          <div
            className="absolute inset-0 z-20 pointer-events-none"
            style={{
              background: `radial-gradient(circle 140px at ${glowPos.x}px ${glowPos.y}px, rgba(255,255,255,0.28) 0%, transparent 70%)`,
            }}
          />
        )}
      </div>

      {/* Content */}
      <div className="flex w-full lg:w-1/2 flex-col justify-center gap-[12px] xl:gap-[24px] lg:py-[32px] lg:pr-[12px]">
        <div className='flex flex-col gap-[12px]'>
          {/* Title row */}
          <div className="flex items-start justify-between gap-[12px]">
            <h1 className="font-inter font-bold text-xl lg:text-[22px] xl:text-3xl text-black">
              {title}
            </h1>
            {link && (
              <a
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Visit ${title}`}
                className="group shrink-0 transition-transform duration-200 ease-out hover:scale-110"
              >
                <ArrowLinkIcon className="transition-transform duration-200 ease-out group-hover:translate-x-[3px] group-hover:-translate-y-[3px]" />
              </a>
            )}
          </div>

          {/* Description */}
          <p className="font-inter text-sm lg:text-[14px] xl:text-base text-black">
            {description}
          </p>

          {/* Divider */}
          <div className='flex items-center gap-[10px] py-[10px] w-full'>
            <div className="w-[28px] h-[2px] bg-primary" />
            <div className="w-auto h-[2px] bg-black/[0.12] flex-1" />
          </div>
        </div>

        {/* Tags */}
        <div className="flex flex-wrap gap-[8px]">
          {tags.map((tag) => (
            <Badge key={tag} variant="secondary">
              {tag}
            </Badge>
          ))}
        </div>
      </div>
    </div>
  )
}

export default ProjectCard
