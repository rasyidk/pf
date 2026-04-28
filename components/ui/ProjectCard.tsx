import Image from 'next/image';
import { Project } from '@/lib/types';
import BracketBadge from './BracketBadge';

interface ProjectCardProps {
  project: Project;
  onClick: () => void;
}

export default function ProjectCard({ project, onClick }: ProjectCardProps) {
  return (
    <article 
      className="group glass-panel glass-hover overflow-hidden flex flex-col h-full cursor-pointer" 
      aria-label={`${project.title} project`}
      onClick={onClick}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          onClick();
        }
      }}
    >
      {/* Project Image - Reduced height */}
      <div className="relative w-full h-[180px] overflow-hidden flex-shrink-0">
        <Image
          src={project.image}
          alt={`Screenshot of ${project.title} - ${project.description}`}
          width={600}
          height={400}
          loading="lazy"
          className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-105"
        />
        {/* Overlay on hover */}
        <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
          <span className="font-mono text-accent-primary text-sm">
            [CLICK TO VIEW DETAILS]
          </span>
        </div>
      </div>

      {/* Project Content - Compact */}
      <div className="p-4 space-y-3 flex flex-col flex-grow">
        {/* Project ID */}
        <div className="font-mono text-xs text-accent-primary">
          {`// PROJECT_${project.id}`}
        </div>

        {/* Title and Description */}
        <div className="flex-grow">
          <h3 className="text-xl font-bold text-text-primary mb-2 group-hover:text-accent-primary transition-colors">
            {project.title}
          </h3>
          <p className="text-text-secondary text-xs leading-relaxed line-clamp-3">
            {project.description}
          </p>
        </div>

        {/* Technology Tags - Compact */}
        <div className="flex flex-wrap gap-1.5">
          {project.tags.slice(0, 4).map((tag) => (
            <BracketBadge key={tag} text={tag} />
          ))}
          {project.tags.length > 4 && (
            <span className="font-mono text-xs text-text-muted">+{project.tags.length - 4}</span>
          )}
        </div>

        {/* Category Badge */}
        <div className="pt-2 border-t border-glass-border">
          <span className="inline-block px-2 py-1 bg-accent-primary/10 border border-accent-primary/30 text-accent-primary font-mono text-[10px] rounded">
            [{project.category.toUpperCase()}]
          </span>
        </div>
      </div>
    </article>
  );
}
