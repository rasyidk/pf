'use client';

import { useEffect } from 'react';
import Image from 'next/image';
import { X, Github, ExternalLink } from 'lucide-react';
import { Project } from '@/lib/types';
import BracketBadge from './BracketBadge';

interface ProjectModalProps {
  project: Project;
  isOpen: boolean;
  onClose: () => void;
}

export default function ProjectModal({ project, isOpen, onClose }: ProjectModalProps) {
  // Close modal on ESC key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };

    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
      document.body.style.overflow = 'hidden';
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
    >
      <div
        className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto glass-panel-strong border-2 border-accent-primary shadow-glass-glow-lg"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          style={{ borderRadius: '0.5rem' }}
          className="absolute top-4 right-4 z-10 p-2 glass-panel border border-accent-primary text-accent-primary hover:bg-accent-primary hover:text-white transition-colors"
          aria-label="Close modal"
        >
          <X size={20} />
        </button>

        {/* Modal Content */}
        <div className="p-6 sm:p-8">
          {/* Project Image */}
          <div className="relative w-full h-[300px] sm:h-[400px] mb-6 rounded overflow-hidden">
            <Image
              src={project.image}
              alt={`Screenshot of ${project.title}`}
              fill
              className="object-cover"
            />
          </div>

          {/* Project ID */}
          <div className="font-mono text-sm text-accent-primary mb-4">
            {`// PROJECT_${project.id}`}
          </div>

          {/* Title */}
          <h2 id="modal-title" className="text-3xl sm:text-4xl font-bold text-text-primary mb-4">
            {project.title}
          </h2>

          {/* Category Badge */}
          <div className="mb-6">
            <span className="inline-block px-3 py-1 bg-accent-primary/20 border border-accent-primary text-accent-primary font-mono text-xs rounded">
              [{project.category.toUpperCase()}]
            </span>
          </div>

          {/* Description */}
          <p className="text-text-primary text-base sm:text-lg leading-relaxed mb-6">
            {project.description}
          </p>

          {/* Technology Tags */}
          <div className="mb-6">
            <h3 className="font-mono text-sm text-text-secondary mb-3">
              {'// TECHNOLOGIES'}
            </h3>
            <div className="flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <BracketBadge key={tag} text={tag} />
              ))}
            </div>
          </div>

          {/* Contributions */}
          {project.contributions && project.contributions.length > 0 && (
            <div className="mb-6">
              <h3 className="font-mono text-sm text-text-secondary mb-3">
                {'// KEY CONTRIBUTIONS'}
              </h3>
              <ul className="space-y-2">
                {project.contributions.map((contribution, index) => (
                  <li key={index} className="flex items-start gap-3 text-text-primary">
                    <span className="text-accent-primary mt-1 flex-shrink-0">•</span>
                    <span className="text-sm sm:text-base">{contribution}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-3">
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                style={{ borderRadius: '0.5rem' }}
                className={`flex items-center justify-center gap-2 px-6 py-3 bg-transparent border-2 border-accent-primary text-accent-primary font-mono text-sm transition-all duration-200 hover:bg-accent-primary hover:text-white focus:outline-none focus:ring-2 focus:ring-accent-primary focus:ring-offset-2 focus:ring-offset-surface ${
                  project.github && project.demo ? 'flex-1' : 'w-full'
                }`}
              >
                <Github size={18} />
                [VIEW ON GITHUB]
              </a>
            )}
            {project.demo && (
              <a
                href={project.demo}
                target="_blank"
                rel="noopener noreferrer"
                style={{ borderRadius: '0.5rem' }}
                className={`flex items-center justify-center gap-2 px-6 py-3 bg-accent-primary text-white font-mono text-sm transition-all duration-200 hover:bg-accent-hover focus:outline-none focus:ring-2 focus:ring-accent-primary focus:ring-offset-2 focus:ring-offset-surface ${
                  project.github && project.demo ? 'flex-1' : 'w-full'
                }`}
              >
                <ExternalLink size={18} />
                [VIEW LIVE DEMO]
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
