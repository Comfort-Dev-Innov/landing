'use client';
import React, { useState } from 'react';
import { motion } from 'motion/react';
import { ChevronLeft, ChevronRight, ExternalLink, Github } from 'lucide-react';

export interface ProjectCardProps {
  title: string;
  description: string;
  images: string[];
  links: {
    type: 'github' | 'live' | 'demo' | 'link';
    url: string;
    label: string;
  }[];
  technologies: string[];
  index: number;
}

const ProjectCard = ({
  title,
  description,
  images,
  links,
  technologies,
  index,
}: ProjectCardProps) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  const getLinkIcon = (type: string) => {
    switch (type) {
      case 'github':
        return <Github className="w-4 h-4" />;
      case 'live':
      case 'demo':
      case 'link':
        return <ExternalLink className="w-4 h-4" />;
      default:
        return <ExternalLink className="w-4 h-4" />;
    }
  };

  return (
    <motion.div
      className="group relative backdrop-blur-lg bg-white border border-white/20 rounded-2xl shadow-2xl hover:shadow-3xl transition-all duration-500 hover:scale-[1.02] w-full h-[600px] flex flex-col overflow-hidden"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      viewport={{ once: true }}
      whileHover={{ y: -8 }}
      style={{
        background:
          'linear-gradient(135deg, rgba(255,255,255,0.1) 80%, rgba(255,255,255,0.05) 100%)',
        backdropFilter: 'blur(20px)',
        WebkitBackdropFilter: 'blur(20px)',
      }}
    >
      {/* Gradient overlay for enhanced glass effect */}
      <div className="absolute inset-0 bg-gradient-to-br bg-white/80 pointer-events-none rounded-2xl" />

      {/* macOS-style header */}
      <div className="relative bg-slate-200 border-b border-white/10 px-4 py-3 flex items-center justify-between backdrop-blur-sm">
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-full bg-red-400/80"></div>
          <div className="w-3 h-3 rounded-full bg-yellow-400/80"></div>
          <div className="w-3 h-3 rounded-full bg-green-400/80"></div>
        </div>
        <div className="flex-1 mx-4">
          <div className="w-full h-1 bg-white/20 rounded-full">
            <div className="w-3/4 h-full bg-white/40 rounded-full"></div>
          </div>
        </div>
      </div>

      {/* Image carousel section */}
      <div className="relative h-1/2 overflow-hidden bg-white/5 p-2">
        {images.length > 0 && (
          <>
            <motion.img
              key={currentImageIndex}
              src={images[currentImageIndex]}
              alt={`${title} screenshot ${currentImageIndex + 1}`}
              className="w-full h-full object-contain"
              initial={{ opacity: 0, scale: 1.1 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
            />

            {/* Image navigation */}
            {images.length > 1 && (
              <>
                <button
                  onClick={prevImage}
                  className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/30 border border-white hover:bg-black/50 text-tertiary rounded-full p-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 backdrop-blur-sm"
                >
                  <ChevronLeft className="w-4 h-4" />
                </button>
                <button
                  onClick={nextImage}
                  className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/30 border border-white hover:bg-black/50 text-tertiary rounded-full p-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 backdrop-blur-sm"
                >
                  <ChevronRight className="w-4 h-4" />
                </button>

                {/* Image indicators */}
                <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-1">
                  {images.map((_, idx) => (
                    <button
                      key={idx}
                      onClick={() => setCurrentImageIndex(idx)}
                      className={`w-2 h-2 rounded-full transition-all duration-200 ${
                        idx === currentImageIndex
                          ? 'bg-primary'
                          : 'bg-gray-400/40 hover:bg-gray-400/60'
                      }`}
                    />
                  ))}
                </div>
              </>
            )}
          </>
        )}
      </div>

      {/* Card content */}
      <div className="flex-1 p-6 flex flex-col justify-between relative">
        <div className="flex-1">
          <h3 className="text-lg min-[530px]:text-xl font-black text-black mb-3 leading-tight">
            {title}
          </h3>
          <p className="text-black text-sm min-[530px]:text-base leading-relaxed mb-4">
            {description}
          </p>

          {/* Technologies */}
          <div className="flex flex-wrap gap-2 mb-4">
            {technologies.map((tech, idx) => (
              <span
                key={idx}
                className="px-3 py-1 text-xs font-medium bg-primary/20 text-black rounded-full border border-primary/30 backdrop-blur-sm hover:bg-primary/30 transition-colors duration-200"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Links */}

        <div className="flex gap-3 mx-[-2rem] mb-[-1.5rem] border-t border-white/10 bg-primary/50 items-center justify-between h-1/3 py-4 px-8 rounded-md">
          {links.map((link, idx) => (
            <a
              key={idx}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 bg-white/10 hover:bg-white/20 text-white text-sm rounded-lg border border-white/20 transition-all duration-200 hover:scale-105 backdrop-blur-sm"
            >
              {getLinkIcon(link.type)}
              {link.label}
            </a>
          ))}
        </div>
      </div>

      {/* Subtle shine effect on hover */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
      </div>
    </motion.div>
  );
};

export default ProjectCard;
