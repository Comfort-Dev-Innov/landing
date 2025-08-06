import React from 'react';
import styles from './card.module.css';
interface Card {
  title: string;
  description: string;
  icon: string | React.ReactNode;
}

export default function Card({ title, description, icon }: Card) {
  return (
    <div
      className="group relative overflow-hidden rounded-3xl bg-white/20 backdrop-blur-lg border border-white/30 hover:bg-white/30 transition-all duration-500 hover:scale-105 hover:-translate-y-2"
      style={{
        boxShadow:
          '0 20px 40px rgba(0,0,0,0.1), inset 0 1px 0 rgba(255,255,255,0.4)',
      }}
    >
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
        <div
          className={`absolute inset-0 rounded-3xl ${styles.cardbackground}`}
        />
      </div>

      <div className="relative p-8">
        <div className="text-4xl mb-4 transform group-hover:scale-110 transition-transform duration-300">
          {icon}
        </div>
        <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-white transition-colors">
          {title}
        </h3>
        <p className="text-black/80 leading-relaxed group-hover:text-black/90 transition-colors">
          {description}
        </p>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-white/50 to-transparent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
    </div>
  );
}
