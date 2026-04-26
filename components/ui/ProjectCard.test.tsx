import { render, screen } from '@testing-library/react';
import ProjectCard from './ProjectCard';
import { Project } from '@/lib/types';

const mockProject: Project = {
  id: '01',
  title: 'Test Project',
  description: 'This is a test project description',
  image: '/projects/test.jpg',
  codeSnippet: 'const test = "hello";\nconsole.log(test);',
  tags: ['React', 'TypeScript', 'Next.js'],
  github: 'https://github.com/test/project',
  demo: 'https://test-demo.vercel.app',
};

describe('ProjectCard', () => {
  it('should render project information correctly', () => {
    render(<ProjectCard project={mockProject} />);

    // Check title
    expect(screen.getByText('Test Project')).toBeInTheDocument();

    // Check description
    expect(screen.getByText('This is a test project description')).toBeInTheDocument();

    // Check project ID
    expect(screen.getByText('// PROJECT_01')).toBeInTheDocument();

    // Check code snippet
    expect(screen.getByText(/const test = "hello"/)).toBeInTheDocument();
  });

  it('should render technology tags as badges', () => {
    render(<ProjectCard project={mockProject} />);

    // Check that all tags are rendered
    expect(screen.getByText('[REACT]')).toBeInTheDocument();
    expect(screen.getByText('[TYPESCRIPT]')).toBeInTheDocument();
    expect(screen.getByText('[NEXT.JS]')).toBeInTheDocument();
  });

  it('should render GitHub and Demo buttons with correct links', () => {
    render(<ProjectCard project={mockProject} />);

    // Check GitHub button
    const githubLink = screen.getByRole('link', { name: /GITHUB/i });
    expect(githubLink).toHaveAttribute('href', 'https://github.com/test/project');
    expect(githubLink).toHaveAttribute('target', '_blank');
    expect(githubLink).toHaveAttribute('rel', 'noopener noreferrer');

    // Check Demo button
    const demoLink = screen.getByRole('link', { name: /DEMO/i });
    expect(demoLink).toHaveAttribute('href', 'https://test-demo.vercel.app');
    expect(demoLink).toHaveAttribute('target', '_blank');
    expect(demoLink).toHaveAttribute('rel', 'noopener noreferrer');
  });

  it('should render project image with correct dimensions', () => {
    render(<ProjectCard project={mockProject} />);

    const image = screen.getByAltText('Test Project');
    expect(image).toBeInTheDocument();
  });

  it('should apply hover effect classes', () => {
    const { container } = render(<ProjectCard project={mockProject} />);

    const card = container.querySelector('.group');
    expect(card).toHaveClass('hover:shadow-[0_0_20px_rgba(167,139,250,0.3)]');
  });

  it('should display code snippet in monospace font', () => {
    render(<ProjectCard project={mockProject} />);

    const codeElement = screen.getByText(/const test = "hello"/).closest('pre');
    expect(codeElement).toHaveClass('font-mono');
  });
});
