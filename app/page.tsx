import React from 'react';
import TechStack from '@/components/section/TechStackSection';
import HeroSection from '@/components/section/HeroSection';

const ComfortCardPreview = () => {
  const cards = [
    {
      title: 'Liquid Design System',
      description:
        'Flowing, organic interfaces that adapt naturally to user needs',
      icon: '💧',
      gradient: 'from-primary to-secondary',
    },
    {
      title: 'Comfort-First UX',
      description:
        'Every interaction designed to feel effortless and intuitive',
      icon: '🛋️',
      gradient: 'from-tertiary to-quaternary',
    },
    {
      title: 'Adaptive Technology',
      description:
        'Smart solutions that learn and evolve with your preferences',
      icon: '🌊',
      gradient: 'from-secondary via-primary to-tertiary',
    },
  ];

  return (
    <div className="max-w-6xl mx-auto gap-12 flex flex-col">
      <HeroSection />

      <TechStack />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
        {cards.map((card, index) => (
          <div
            key={index}
            className="group relative overflow-hidden rounded-3xl bg-white/20 backdrop-blur-lg border border-white/30 hover:bg-white/30 transition-all duration-500 hover:scale-105 hover:-translate-y-2"
            style={{
              boxShadow:
                '0 20px 40px rgba(0,0,0,0.1), inset 0 1px 0 rgba(255,255,255,0.4)',
            }}
          >
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
              <div
                className="absolute inset-0 rounded-3xl"
                style={{
                  background:
                    index === 0
                      ? 'linear-gradient(135deg, #29b3ff 0%, #81eaff 100%)'
                      : index === 1
                      ? 'linear-gradient(135deg, #fbc00e 0%, #ffd774 100%)'
                      : 'linear-gradient(135deg, #81eaff 0%, #29b3ff 50%, #fbc00e 100%)',
                  opacity: 0.1,
                }}
              />
            </div>

            <div className="relative p-8">
              <div className="text-4xl mb-4 transform group-hover:scale-110 transition-transform duration-300">
                {card.icon}
              </div>
              <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-white transition-colors">
                {card.title}
              </h3>
              <p className="text-white/80 leading-relaxed group-hover:text-white/90 transition-colors">
                {card.description}
              </p>
            </div>

            <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-white/50 to-transparent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
          </div>
        ))}
      </div>

      <div className="bg-white/20 backdrop-blur-lg rounded-3xl p-8 border border-white/30">
        <h2 className="text-3xl font-bold text-white mb-6 text-center">
          Color Palette Preview
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          <div className="text-center">
            <div
              className="w-20 h-20 rounded-full mx-auto mb-3 shadow-lg border-4 border-white/30"
              style={{ backgroundColor: '#29b3ff' }}
            />
            <p className="text-white font-semibold">Primary</p>
            <p className="text-white/70 text-sm">#29b3ff</p>
          </div>
          <div className="text-center">
            <div
              className="w-20 h-20 rounded-full mx-auto mb-3 shadow-lg border-4 border-white/30"
              style={{ backgroundColor: '#81eaff' }}
            />
            <p className="text-white font-semibold">Secondary</p>
            <p className="text-white/70 text-sm">#81eaff</p>
          </div>
          <div className="text-center">
            <div
              className="w-20 h-20 rounded-full mx-auto mb-3 shadow-lg border-4 border-white/30"
              style={{ backgroundColor: '#fbc00e' }}
            />
            <p className="text-white font-semibold">Tertiary</p>
            <p className="text-white/70 text-sm">#fbc00e</p>
          </div>
          <div className="text-center">
            <div
              className="w-20 h-20 rounded-full mx-auto mb-3 shadow-lg border-4 border-white/30"
              style={{ backgroundColor: '#ffd774' }}
            />
            <p className="text-white font-semibold">Quaternary</p>
            <p className="text-white/70 text-sm">#ffd774</p>
          </div>
        </div>
      </div>

      <div className="bg-white/20 backdrop-blur-lg rounded-3xl p-8 border border-white/30">
        <h2 className="text-3xl font-bold text-white mb-6 text-center">
          Color Palette Preview
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          <div className="text-center">
            <div
              className="w-20 h-20 rounded-full mx-auto mb-3 shadow-lg border-4 border-white/30"
              style={{ backgroundColor: '#29b3ff' }}
            />
            <p className="text-white font-semibold">Primary</p>
            <p className="text-white/70 text-sm">#29b3ff</p>
          </div>
          <div className="text-center">
            <div
              className="w-20 h-20 rounded-full mx-auto mb-3 shadow-lg border-4 border-white/30"
              style={{ backgroundColor: '#81eaff' }}
            />
            <p className="text-white font-semibold">Secondary</p>
            <p className="text-white/70 text-sm">#81eaff</p>
          </div>
          <div className="text-center">
            <div
              className="w-20 h-20 rounded-full mx-auto mb-3 shadow-lg border-4 border-white/30"
              style={{ backgroundColor: '#fbc00e' }}
            />
            <p className="text-white font-semibold">Tertiary</p>
            <p className="text-white/70 text-sm">#fbc00e</p>
          </div>
          <div className="text-center">
            <div
              className="w-20 h-20 rounded-full mx-auto mb-3 shadow-lg border-4 border-white/30"
              style={{ backgroundColor: '#ffd774' }}
            />
            <p className="text-white font-semibold">Quaternary</p>
            <p className="text-white/70 text-sm">#ffd774</p>
          </div>
        </div>
      </div>

      <div className="bg-white/20 backdrop-blur-lg rounded-3xl p-8 border border-white/30">
        <h2 className="text-3xl font-bold text-white mb-6 text-center">
          Color Palette Preview
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          <div className="text-center">
            <div
              className="w-20 h-20 rounded-full mx-auto mb-3 shadow-lg border-4 border-white/30"
              style={{ backgroundColor: '#29b3ff' }}
            />
            <p className="text-white font-semibold">Primary</p>
            <p className="text-white/70 text-sm">#29b3ff</p>
          </div>
          <div className="text-center">
            <div
              className="w-20 h-20 rounded-full mx-auto mb-3 shadow-lg border-4 border-white/30"
              style={{ backgroundColor: '#81eaff' }}
            />
            <p className="text-white font-semibold">Secondary</p>
            <p className="text-white/70 text-sm">#81eaff</p>
          </div>
          <div className="text-center">
            <div
              className="w-20 h-20 rounded-full mx-auto mb-3 shadow-lg border-4 border-white/30"
              style={{ backgroundColor: '#fbc00e' }}
            />
            <p className="text-white font-semibold">Tertiary</p>
            <p className="text-white/70 text-sm">#fbc00e</p>
          </div>
          <div className="text-center">
            <div
              className="w-20 h-20 rounded-full mx-auto mb-3 shadow-lg border-4 border-white/30"
              style={{ backgroundColor: '#ffd774' }}
            />
            <p className="text-white font-semibold">Quaternary</p>
            <p className="text-white/70 text-sm">#ffd774</p>
          </div>
        </div>
      </div>

      <div className="bg-white/20 backdrop-blur-lg rounded-3xl p-8 border border-white/30">
        <h2 className="text-3xl font-bold text-white mb-6 text-center">
          Color Palette Preview
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          <div className="text-center">
            <div
              className="w-20 h-20 rounded-full mx-auto mb-3 shadow-lg border-4 border-white/30"
              style={{ backgroundColor: '#29b3ff' }}
            />
            <p className="text-white font-semibold">Primary</p>
            <p className="text-white/70 text-sm">#29b3ff</p>
          </div>
          <div className="text-center">
            <div
              className="w-20 h-20 rounded-full mx-auto mb-3 shadow-lg border-4 border-white/30"
              style={{ backgroundColor: '#81eaff' }}
            />
            <p className="text-white font-semibold">Secondary</p>
            <p className="text-white/70 text-sm">#81eaff</p>
          </div>
          <div className="text-center">
            <div
              className="w-20 h-20 rounded-full mx-auto mb-3 shadow-lg border-4 border-white/30"
              style={{ backgroundColor: '#fbc00e' }}
            />
            <p className="text-white font-semibold">Tertiary</p>
            <p className="text-white/70 text-sm">#fbc00e</p>
          </div>
          <div className="text-center">
            <div
              className="w-20 h-20 rounded-full mx-auto mb-3 shadow-lg border-4 border-white/30"
              style={{ backgroundColor: '#ffd774' }}
            />
            <p className="text-white font-semibold">Quaternary</p>
            <p className="text-white/70 text-sm">#ffd774</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ComfortCardPreview;
