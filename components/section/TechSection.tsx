'use client'

import React, { useEffect, useRef } from 'react'
import { motion, useAnimationFrame, useMotionValue } from 'framer-motion'
import Heading from '../layout/Heading'
import LogoCard from '../ui/LogoCard'
import AWSIcon from '../../assets/icons/technologies/AWSIcon'
import AndroidStudioIcon from '../../assets/icons/technologies/AndroidStudioIcon'
import AstroIcon from '../../assets/icons/technologies/AstroIcon'
import AzureIcon from '../../assets/icons/technologies/AzureIcon'
import CPlusPlusIcon from '../../assets/icons/technologies/CPlusPlusIcon'
import CSS3Icon from '../../assets/icons/technologies/CSS3Icon'
import CSharpIcon from '../../assets/icons/technologies/CSharpIcon'
import CloudflareIcon from '../../assets/icons/technologies/CloudflareIcon'
import DockerIcon from '../../assets/icons/technologies/DockerIcon'
import ElixirIcon from '../../assets/icons/technologies/ElixirIcon'
import ExpressIcon from '../../assets/icons/technologies/ExpressIcon'
import FigmaIcon from '../../assets/icons/technologies/FigmaIcon'
import FirebaseIcon from '../../assets/icons/technologies/FirebaseIcon'
import FlutterIcon from '../../assets/icons/technologies/FlutterIcon'
import GitHubIcon from '../../assets/icons/technologies/GitHubIcon'
import GitIcon from '../../assets/icons/technologies/GitIcon'
import GoogleCloudIcon from '../../assets/icons/technologies/GoogleCloudIcon'
import HTML5Icon from '../../assets/icons/technologies/HTML5Icon'
import JSIcon from '../../assets/icons/technologies/JSIcon'
import JavaIcon from '../../assets/icons/technologies/JavaIcon'
import LaravelIcon from '../../assets/icons/technologies/LaravelIcon'
import LinuxIcon from '../../assets/icons/technologies/LinuxIcon'
import MongoDBIcon from '../../assets/icons/technologies/MongoDBIcon'
import MySQLIcon from '../../assets/icons/technologies/MySQLIcon'
import NestJSIcon from '../../assets/icons/technologies/NestJSIcon'
import NextJSIcon from '../../assets/icons/technologies/NextJSIcon'
import NodeJSIcon from '../../assets/icons/technologies/NodeJSIcon'
import OpenAIIcon from '../../assets/icons/technologies/OpenAIIcon'
import PHPIcon from '../../assets/icons/technologies/PHPIcon'
import PhotoshopIcon from '../../assets/icons/technologies/PhotoshopIcon'
import PostgreSQLIcon from '../../assets/icons/technologies/PostgreSQLIcon'
import PowerShellIcon from '../../assets/icons/technologies/PowerShellIcon'
import PythonIcon from '../../assets/icons/technologies/PythonIcon'
import ReactIcon from '../../assets/icons/technologies/ReactIcon'
import SQLiteIcon from '../../assets/icons/technologies/SQLiteIcon'
import SassIcon from '../../assets/icons/technologies/SassIcon'
import TailwindCSSIcon from '../../assets/icons/technologies/TailwindCSSIcon'
import TensorFlowIcon from '../../assets/icons/technologies/TensorFlowIcon'
import TypeScriptIcon from '../../assets/icons/technologies/TypeScriptIcon'
import VSCodeIcon from '../../assets/icons/technologies/VSCodeIcon'
import VercelIcon from '../../assets/icons/technologies/VercelIcon'
import VisualStudioIcon from '../../assets/icons/technologies/VisualStudioIcon'
import ViteIcon from '../../assets/icons/technologies/ViteIcon'
import WindowsIcon from '../../assets/icons/technologies/WindowsIcon'
import WordPressIcon from '../../assets/icons/technologies/WordPressIcon'
import XcodeIcon from '../../assets/icons/technologies/XcodeIcon'
import KotlinIcon from '../../assets/icons/technologies/KotlinIcon'
import jQueryIcon from '../../assets/icons/technologies/jQueryIcon'

const allIcons = [
  AWSIcon, AndroidStudioIcon, AstroIcon, AzureIcon,
  CPlusPlusIcon, CSS3Icon, CSharpIcon, CloudflareIcon, DockerIcon,
  ElixirIcon, ExpressIcon, FigmaIcon, FirebaseIcon, FlutterIcon,
  GitHubIcon, GitIcon, GoogleCloudIcon, HTML5Icon, JSIcon,
  JavaIcon, LaravelIcon, LinuxIcon, MongoDBIcon, MySQLIcon,
  NestJSIcon, NextJSIcon, NodeJSIcon, OpenAIIcon, PHPIcon,
  PhotoshopIcon, PostgreSQLIcon, PowerShellIcon, PythonIcon, ReactIcon, 
  SQLiteIcon, SassIcon, TailwindCSSIcon,
  TensorFlowIcon, TypeScriptIcon, VSCodeIcon, VercelIcon, VisualStudioIcon,
  ViteIcon, WindowsIcon, WordPressIcon, XcodeIcon, KotlinIcon, jQueryIcon,
]

const chunkSize = Math.ceil(allIcons.length / 3)
const row1 = allIcons.slice(0, chunkSize)
const row2 = allIcons.slice(chunkSize, chunkSize * 2)
const row3 = allIcons.slice(chunkSize * 2)

interface ScrollRowProps {
  icons: React.ComponentType<{ className?: string }>[]
  direction: 'left' | 'right'
}

const SPEED = 58 // px per second

const ScrollRow = ({ icons, direction }: ScrollRowProps) => {
  const doubled = [...icons, ...icons]
  const ref = useRef<HTMLDivElement>(null)
  const x = useMotionValue(0)

  useEffect(() => {
    if (direction === 'right' && ref.current) {
      x.set(-ref.current.scrollWidth / 2)
    }
  }, [direction, x])

  useAnimationFrame((_, delta) => {
    if (!ref.current) return
    const halfWidth = ref.current.scrollWidth / 2
    const velocity = direction === 'left' ? -SPEED : SPEED
    let newX = x.get() + velocity * (delta / 1000)

    if (direction === 'left' && newX <= -halfWidth) {
      newX += halfWidth
    } else if (direction === 'right' && newX >= 0) {
      newX -= halfWidth
    }

    x.set(newX)
  })

  return (
    <div className="w-full overflow-hidden">
      <motion.div
        ref={ref}
        className="flex gap-[32px] w-max"
        style={{ x }}
      >
        {doubled.map((Icon, i) => (
          <LogoCard key={i} icon={<Icon className="w-[70px] h-[70px]" />} />
        ))}
      </motion.div>
    </div>
  )
}

interface VerticalColumnProps {
  icons: React.ComponentType<{ className?: string }>[]
  direction: 'up' | 'down'
}

const VerticalColumn = ({ icons, direction }: VerticalColumnProps) => {
  const doubled = [...icons, ...icons]
  const ref = useRef<HTMLDivElement>(null)
  const y = useMotionValue(0)

  useEffect(() => {
    if (direction === 'down' && ref.current) {
      y.set(-ref.current.scrollHeight / 2)
    }
  }, [direction, y])

  useAnimationFrame((_, delta) => {
    if (!ref.current) return
    const halfHeight = ref.current.scrollHeight / 2
    const velocity = direction === 'up' ? -SPEED : SPEED
    let newY = y.get() + velocity * (delta / 1000)

    if (direction === 'up' && newY <= -halfHeight) {
      newY += halfHeight
    } else if (direction === 'down' && newY >= 0) {
      newY -= halfHeight
    }

    y.set(newY)
  })

  return (
    <motion.div
      ref={ref}
      className="flex flex-col gap-[32px] items-center h-max"
      style={{ y }}
    >
      {doubled.map((Icon, i) => (
        <LogoCard key={i} icon={<Icon className="w-[70px] h-[70px]" />} />
      ))}
    </motion.div>
  )
}

const colHalf = Math.ceil(allIcons.length / 2)
const colLeft = allIcons.slice(0, colHalf)
const colRight = allIcons.slice(colHalf)

const VerticalScrollSection = () => {
  return (
    <div
      className="h-[928px] overflow-hidden px-[24px]"
      style={{
        maskImage: 'linear-gradient(to bottom, transparent 0%, black 15%, black 85%, transparent 100%)',
        WebkitMaskImage: 'linear-gradient(to bottom, transparent 0%, black 15%, black 85%, transparent 100%)',
      }}
    >
      <div className="flex gap-[32px] justify-center">
        <VerticalColumn icons={colLeft} direction="up" />
        <VerticalColumn icons={colRight} direction="down" />
      </div>
    </div>
  )
}

const ease = [0.22, 1, 0.36, 1] as [number, number, number, number]

const TechSection = () => {
  return (
    <section
      id="technologies"
      className="relative w-full overflow-hidden flex flex-col py-[40px] md:py-[80px] gap-[64px] items-center justify-center"
      style={{
        backgroundColor: '#F8FDFF',
        backgroundImage: 'linear-gradient(to right, #F4FDFF, #FFFFFF)',
      }}
    >
      <motion.div
        className="w-full px-[24px] md:px-[100px]"
        initial={{ opacity: 0, y: 45 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.6 }}
        transition={{ duration: 1.0, ease }}
      >
        <Heading title="Tech Stack" subTitle="Technologies" description="These are the following technologies we use to build projects at comfort." />
      </motion.div>
      <motion.div
        className="hidden md:flex w-full flex-col gap-[32px]"
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.6 }}
        transition={{ duration: 1.1, ease, delay: 0.15 }}
      >
        <ScrollRow icons={row1} direction="left" />
        <ScrollRow icons={row2} direction="right" />
        <ScrollRow icons={row3} direction="left" />
      </motion.div>
      <motion.div
        className="md:hidden w-full"
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.6 }}
        transition={{ duration: 1.1, ease, delay: 0.15 }}
      >
        <VerticalScrollSection />
      </motion.div>
    </section>
  )
}

export default TechSection