import { render, screen } from '@testing-library/react';
import Skills from './Skills';
import { SkillCategory } from '@/lib/types';

describe('Skills Component', () => {
  const mockCategories: SkillCategory[] = [
    {
      title: 'FRONTEND',
      skills: [
        { name: 'React', icon: 'devicon-react-original' },
        { name: 'TypeScript', icon: 'devicon-typescript-plain' },
        { name: 'Next.js', icon: 'devicon-nextjs-original' },
      ],
    },
    {
      title: 'BACKEND',
      skills: [
        { name: 'Node.js', icon: 'devicon-nodejs-plain' },
        { name: 'PostgreSQL', icon: 'devicon-postgresql-plain' },
      ],
    },
    {
      title: 'TOOLS',
      skills: [
        { name: 'Git', icon: 'devicon-git-plain' },
        { name: 'Docker', icon: 'devicon-docker-plain' },
      ],
    },
  ];

  it('should render the section header', () => {
    render(<Skills categories={mockCategories} />);
    expect(screen.getByText('// SKILLS')).toBeInTheDocument();
  });

  it('should render all skill categories', () => {
    render(<Skills categories={mockCategories} />);
    expect(screen.getByText('FRONTEND')).toBeInTheDocument();
    expect(screen.getByText('BACKEND')).toBeInTheDocument();
    expect(screen.getByText('TOOLS')).toBeInTheDocument();
  });

  it('should render all skills in each category', () => {
    render(<Skills categories={mockCategories} />);
    
    // Frontend skills
    expect(screen.getByText('[REACT]')).toBeInTheDocument();
    expect(screen.getByText('[TYPESCRIPT]')).toBeInTheDocument();
    expect(screen.getByText('[NEXT.JS]')).toBeInTheDocument();
    
    // Backend skills
    expect(screen.getByText('[NODE.JS]')).toBeInTheDocument();
    expect(screen.getByText('[POSTGRESQL]')).toBeInTheDocument();
    
    // Tools
    expect(screen.getByText('[GIT]')).toBeInTheDocument();
    expect(screen.getByText('[DOCKER]')).toBeInTheDocument();
  });

  it('should render skills with devicons', () => {
    render(<Skills categories={mockCategories} />);
    
    // Check for devicon classes
    const reactIcon = document.querySelector('.devicon-react-original');
    expect(reactIcon).toBeInTheDocument();
    
    const nodeIcon = document.querySelector('.devicon-nodejs-plain');
    expect(nodeIcon).toBeInTheDocument();
  });

  it('should use three-column grid on desktop', () => {
    render(<Skills categories={mockCategories} />);
    
    const grid = screen.getByText('// SKILLS').nextElementSibling;
    expect(grid).toHaveClass('grid');
    expect(grid).toHaveClass('md:grid-cols-3');
  });

  it('should handle empty categories array', () => {
    render(<Skills categories={[]} />);
    expect(screen.getByText('// SKILLS')).toBeInTheDocument();
  });

  it('should render section with correct id for navigation', () => {
    const { container } = render(<Skills categories={mockCategories} />);
    const section = container.querySelector('#skills');
    expect(section).toBeInTheDocument();
  });
});
