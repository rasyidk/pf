'use client';

import { motion } from 'framer-motion';
import BracketBadge from './ui/BracketBadge';
import { SkillCategory } from '@/lib/types';

interface SkillsProps {
  categories: SkillCategory[];
}

export default function Skills({ categories }: SkillsProps) {
  return (
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8" aria-label="Skills section">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <h2 className="font-mono text-xl sm:text-2xl text-text-secondary tracking-[0.2em] mb-12 font-bold">
          {'// SKILLS'}
        </h2>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10 lg:gap-8">
          {categories.map((category, index) => (
            <motion.div
              key={category.title}
              className="space-y-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              {/* Category Title */}
              <h3 className="font-mono text-lg text-accent-primary font-bold">
                {category.title}
              </h3>

              {/* Skills List */}
              <div className="flex flex-wrap gap-3">
                {category.skills.map((skill) => (
                  <BracketBadge
                    key={skill.name}
                    text={skill.name}
                    icon={skill.icon}
                    hoverable={true}
                  />
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
