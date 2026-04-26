'use client';

import ProjectCard from './ProjectCard';
import { Project } from '@/lib/types';

const demoProjects: Project[] = [
  {
    id: '01',
    title: 'StoreKit',
    description: 'E-commerce platform with real-time inventory management, secure payment processing, and admin dashboard. Built with modern web technologies for optimal performance.',
    image: '/projects/storekit.jpg',
    codeSnippet: 'const cart = useCart();\ncart.addItem(product, {\n  quantity: 1,\n  variant: selectedVariant\n});',
    tags: ['Next.js', 'Stripe', 'PostgreSQL', 'Redis'],
    github: 'https://github.com/rafiardiann/storekit',
    demo: 'https://storekit-demo.vercel.app',
    category: 'Website',
  },
  {
    id: '02',
    title: 'Logify',
    description: 'Centralized logging and monitoring platform for distributed systems. Real-time log aggregation with powerful search and alerting capabilities.',
    image: '/projects/logify.jpg',
    codeSnippet: "logger.info('User action', {\n  userId: user.id,\n  action: 'purchase',\n  metadata: { amount: 99.99 }\n});",
    tags: ['Node.js', 'Elasticsearch', 'Docker', 'WebSocket'],
    github: 'https://github.com/rafiardiann/logify',
    demo: 'https://logify-demo.vercel.app',
    category: 'Website',
  },
];

export default function ProjectCardDemo() {
  const handleProjectClick = (project: Project) => {
    console.log('Project clicked:', project.title);
  };

  return (
    <div className="min-h-screen bg-background p-8">
      <div className="max-w-7xl mx-auto space-y-8">
        <div>
          <h1 className="text-3xl font-bold text-text-primary mb-2">
            ProjectCard Component Demo
          </h1>
          <p className="text-text-secondary">
            Showcasing the ProjectCard component with different projects
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {demoProjects.map((project) => (
            <ProjectCard 
              key={project.id} 
              project={project}
              onClick={() => handleProjectClick(project)}
            />
          ))}
        </div>

        <div className="border-t border-border pt-8">
          <h2 className="text-xl font-bold text-text-primary mb-4">
            Component Features
          </h2>
          <ul className="space-y-2 text-text-secondary">
            <li>✓ Next.js Image optimization (600x400)</li>
            <li>✓ Project ID in monospace format</li>
            <li>✓ Title and description display</li>
            <li>✓ Technology tags as BracketBadge components</li>
            <li>✓ Click to view details (modal popup)</li>
            <li>✓ Hover overlay with call-to-action</li>
            <li>✓ Glowing border on hover</li>
            <li>✓ Surface color #0d0d0d with 1px border #1a1a1a</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
