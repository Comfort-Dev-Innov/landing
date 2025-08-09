'use client';

import Image from 'next/image';
import React from 'react';
import { motion } from 'motion/react';
import { StaticAuroraBackground } from '../ui/aurora-background';

export default function TechStack() {
  return (
    <StaticAuroraBackground className="h-fit flex py-8">
      <div
        id="tech-stack"
        className="flex flex-col gap-8 w-[92%] xl:w-6xl mx-auto bg-white/20 backdrop-blur-lg rounded-3xl border px-4 py-8 xl:px-0 border-white/30"
      >
        <div className="flex flex-col gap-2">
          <motion.div
            className="flex w-full justify-center drop-shadow-2xl"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h1 className="flex uppercase text-lg sm:text-3xl tracking-[0.5em] min-[330px]:tracking-[0.8em] font-bold text-white drop-shadow-lg">
              Tech Stack
            </h1>
          </motion.div>
          <p className="text-white text-center text-sm sm:text-lg text-shadow-md">
            These are the following technologies we use to build projects at
            comfort.
          </p>
        </div>
        <div className="w-full flex flex-col gap-8">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="w-full flex justify-center items-center"
          >
            <Image
              src="https://skillicons.dev/icons?i=androidstudio,apple,atom,aws,azure,bash,bootstrap,c,cs,cpp,cloudflare,codepen,css,devto,docker,eclipse,express,figma,firebase,flutter,gcp,git,github,githubactions,gitlab,gradle,html,java,js,jquery,laravel,linux,mongodb,mysql,nestjs,netlify,nextjs,nodejs,ps,php,electron,postgres,postman,powershell,py,react,redux,regex,sass,sequelize,sqlite,stackoverflow,svg,tailwind,tensorflow,twitter,ts,vercel,visualstudio,vite,vscode,webflow,webpack,windows,wordpress&perline=12"
              alt="My Skills"
              className="hidden md:flex w-full h-full px-8"
              width={500}
              height={500}
              unoptimized
            />

            <Image
              src="https://skillicons.dev/icons?i=androidstudio,apple,atom,aws,azure,bash,bootstrap,c,cs,cpp,cloudflare,codepen,css,devto,docker,eclipse,express,figma,firebase,flutter,gcp,git,github,githubactions,gitlab,gradle,html,java,js,jquery,laravel,linux,mongodb,mysql,nestjs,netlify,nextjs,nodejs,ps,php,electron,postgres,postman,powershell,py,react,redux,regex,sass,sequelize,sqlite,stackoverflow,svg,tailwind,tensorflow,twitter,ts,vercel,visualstudio,vite,vscode,webflow,webpack,windows,wordpress&perline=4"
              alt="My Skills"
              className="relative md:hidden w-full h-full px-8"
              width={500}
              height={500}
              unoptimized
            />
          </motion.div>
        </div>
      </div>
    </StaticAuroraBackground>
  );
}
