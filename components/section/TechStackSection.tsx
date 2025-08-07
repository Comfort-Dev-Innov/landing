'use client';

import Image from 'next/image';
import React from 'react';
import { motion } from 'motion/react';

export default function TechStack() {
  return (
    <div className="bg-white/20 backdrop-blur-lg rounded-3xl p-8 border border-white/30">
      <motion.p
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="text-4xl font-nunito font-bold text-white/90 text-shadow-lg my-4 mx-auto w-full flex items-center justify-center"
      >
        Tech Stack
      </motion.p>
      <p className="text-white/90 font-nunito text-center mb-4 text-lg text-shadow-md">
        These are the following technologies we use to build our projects at
        comfort.
      </p>
      <div className="w-full flex flex-col gap-8">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="w-full flex justify-center items-center"
        >
          <Image
            src="https://skillicons.dev/icons?i=androidstudio,apple,atom,aws,azure,bash,bootstrap,c,cs,cpp,cloudflare,codepen,css,devto,docker,eclipse,express,figma,firebase,flutter,gcp,git,github,githubactions,gitlab,gradle,html,java,js,jquery,laravel,linux,mongodb,mysql,nestjs,netlify,nextjs,nodejs,ps,php,electron,postgres,postman,powershell,py,react,redux,regex,sass,sequelize,sqlite,stackoverflow,svg,tailwind,tensorflow,twitter,ts,vercel,visualstudio,vite,vscode,webflow,webpack,windows,wordpress&perline=10"
            alt="My Skills"
            className="relative w-full h-full max-w-3xl"
            width={500}
            height={500}
            unoptimized
          />
        </motion.div>
      </div>
    </div>
  );
}
