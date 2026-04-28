'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ExperienceEntry } from '@/lib/types';
import { loadExperience } from '@/lib/utils';

export default function Experience() {
  const [entries, setEntries] = useState<ExperienceEntry[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  // Load experience on mount
  useEffect(() => {
    async function fetchExperience() {
      setIsLoading(true);
      const data = await loadExperience();
      setEntries(data);
      setIsLoading(false);
    }
    fetchExperience();
  }, []);

  if (isLoading) {
    return (
      <section id="experience" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="font-mono text-xl sm:text-2xl text-text-secondary tracking-[0.2em] mb-12 font-bold">
            {'// EXPERIENCE'}
          </h2>
          <div className="text-center text-text-secondary font-mono">
            [LOADING...]
          </div>
        </div>
      </section>
    );
  }

  if (entries.length === 0) {
    return (
      <section id="experience" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="font-mono text-xl sm:text-2xl text-text-secondary tracking-[0.2em] mb-12 font-bold">
            {'// EXPERIENCE'}
          </h2>
          <div className="text-center text-text-secondary font-mono">
            [NO EXPERIENCE FOUND]
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="experience" className="py-20 px-4 sm:px-6 lg:px-8" aria-label="Experience section">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <h2 className="font-mono text-xl sm:text-2xl text-text-secondary tracking-[0.2em] mb-12 font-bold">
          {'// EXPERIENCE'}
        </h2>

        {/* Timeline Container */}
        <div className="relative">
          {/* Vertical Timeline Line */}
          <div className="absolute left-0 md:left-8 lg:left-1/2 top-0 bottom-0 w-0.5 bg-accent-primary transform lg:-translate-x-1/2" aria-hidden="true" />

          {/* Experience Entries */}
          <div className="space-y-12">
            {entries.map((entry, index) => (
              <motion.article
                key={`${entry.company}-${entry.period}`}
                className={`relative flex flex-col lg:flex-row gap-8 ${
                  index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
                }`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-100px' }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                aria-label={`${entry.role} at ${entry.company}`}
              >
                {/* Timeline Dot */}
                <div className="absolute left-0 md:left-8 lg:left-1/2 top-0 transform lg:-translate-x-1/2 -translate-x-[3px] md:translate-x-0 lg:translate-x-0" aria-hidden="true">
                  <div className="w-3 h-3 bg-accent-primary rounded-full border-2 border-background" />
                </div>

                {/* Content Container */}
                <div
                  className={`flex-1 pl-8 md:pl-20 lg:pl-0 ${
                    index % 2 === 0 ? 'lg:pr-12 lg:text-right' : 'lg:pl-12 lg:text-left'
                  }`}
                >
                  {/* Company and Role */}
                  <div className="mb-4">
                    <h3 className="text-xl font-bold text-text-primary mb-1">
                      {entry.role}
                    </h3>
                    <div className="font-mono text-sm text-accent-primary">
                      {entry.company}
                    </div>
                    <div className="font-mono text-xs text-text-secondary mt-1">
                      {entry.period}
                    </div>
                  </div>

                  {/* Responsibilities */}
                  <div className="glass-panel p-4 sm:p-6">
                    <ul
                      className={`space-y-2 text-sm sm:text-base text-text-secondary ${
                        index % 2 === 0 ? 'lg:text-right' : 'lg:text-left'
                      }`}
                    >
                      {entry.responsibilities.map((responsibility, idx) => (
                        <li
                          key={idx}
                          className={`flex items-start gap-2 ${
                            index % 2 === 0 ? 'lg:flex-row-reverse' : 'lg:flex-row'
                          }`}
                        >
                          <span className="text-accent-primary mt-1 flex-shrink-0">•</span>
                          <span className="flex-1">{responsibility}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Spacer for alternating layout on desktop */}
                <div className="hidden lg:block flex-1" />
              </motion.article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
