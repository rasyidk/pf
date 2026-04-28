'use client';

import { motion } from 'framer-motion';

interface StatItem {
  value: string;
  label: string;
}

interface AboutProps {
  bio: string;
  stats: StatItem[];
}

export default function About({ bio, stats }: AboutProps) {
  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 border-t border-glass-border" aria-label="About section">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <h2 className="font-mono text-xl sm:text-2xl font-bold text-text-secondary tracking-[0.2em] mb-12">
          {'// ABOUT'}
        </h2>

        {/* Bio Text */}
        <div className="mb-12">
          <p className="text-base sm:text-lg text-text-primary leading-relaxed max-w-3xl">
            {bio}
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="glass-panel p-6 glass-hover group"
            >
              {/* Value */}
              <div className="font-mono text-4xl sm:text-5xl font-bold text-accent-primary mb-2 group-hover:scale-110 transition-transform">
                {stat.value}
              </div>
              
              {/* Label */}
              <div className="font-mono text-sm text-text-secondary uppercase tracking-wider">
                [{stat.label}]
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
