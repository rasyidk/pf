import Skills from './Skills';
import { SkillCategory } from '@/lib/types';

/**
 * Skills Component Demo
 * 
 * This demo shows the Skills component with sample data for all three categories:
 * FRONTEND, BACKEND, and TOOLS.
 */

const demoCategories: SkillCategory[] = [
  {
    title: 'FRONTEND',
    skills: [
      { name: 'React', icon: 'devicon-react-original' },
      { name: 'TypeScript', icon: 'devicon-typescript-plain' },
      { name: 'Next.js', icon: 'devicon-nextjs-original' },
      { name: 'Tailwind CSS', icon: 'devicon-tailwindcss-plain' },
      { name: 'JavaScript', icon: 'devicon-javascript-plain' },
      { name: 'HTML5', icon: 'devicon-html5-plain' },
      { name: 'CSS3', icon: 'devicon-css3-plain' },
    ],
  },
  {
    title: 'BACKEND',
    skills: [
      { name: 'Node.js', icon: 'devicon-nodejs-plain' },
      { name: 'Express', icon: 'devicon-express-original' },
      { name: 'PostgreSQL', icon: 'devicon-postgresql-plain' },
      { name: 'MongoDB', icon: 'devicon-mongodb-plain' },
      { name: 'Redis', icon: 'devicon-redis-plain' },
      { name: 'GraphQL', icon: 'devicon-graphql-plain' },
    ],
  },
  {
    title: 'TOOLS',
    skills: [
      { name: 'Git', icon: 'devicon-git-plain' },
      { name: 'Docker', icon: 'devicon-docker-plain' },
      { name: 'VS Code', icon: 'devicon-vscode-plain' },
      { name: 'Figma', icon: 'devicon-figma-plain' },
      { name: 'Jest', icon: 'devicon-jest-plain' },
      { name: 'Webpack', icon: 'devicon-webpack-plain' },
    ],
  },
];

export default function SkillsDemo() {
  return (
    <div className="min-h-screen bg-background">
      <Skills categories={demoCategories} />
    </div>
  );
}
