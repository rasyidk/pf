import { render, screen } from '@testing-library/react';
import About from './About';

// Mock framer-motion
jest.mock('framer-motion', () => ({
  motion: {
    div: ({ children, ...props }: any) => <div {...props}>{children}</div>,
  },
}));

describe('About Component', () => {
  const mockStats = [
    { value: '3.90', label: 'GPA' },
    { value: '4+', label: 'YEARS EXPERIENCE' },
    { value: '15+', label: 'PROJECTS' },
    { value: '100%', label: 'CLIENT SATISFACTION' },
  ];

  it('should render the section header', () => {
    render(<About stats={mockStats} />);
    expect(screen.getByText('// ABOUT')).toBeInTheDocument();
  });

  it('should render all stat items', () => {
    render(<About stats={mockStats} />);
    
    expect(screen.getByText('3.90')).toBeInTheDocument();
    expect(screen.getByText('[GPA]')).toBeInTheDocument();
    
    expect(screen.getByText('4+')).toBeInTheDocument();
    expect(screen.getByText('[YEARS EXPERIENCE]')).toBeInTheDocument();
    
    expect(screen.getByText('15+')).toBeInTheDocument();
    expect(screen.getByText('[PROJECTS]')).toBeInTheDocument();
    
    expect(screen.getByText('100%')).toBeInTheDocument();
    expect(screen.getByText('[CLIENT SATISFACTION]')).toBeInTheDocument();
  });

  it('should render correct number of stat cards', () => {
    const { container } = render(<About stats={mockStats} />);
    const statCards = container.querySelectorAll('.border.border-border');
    expect(statCards).toHaveLength(4);
  });

  it('should have proper accessibility attributes', () => {
    const { container } = render(<About stats={mockStats} />);
    const section = container.querySelector('section');
    expect(section).toHaveAttribute('aria-label', 'About section');
  });

  it('should handle empty stats array', () => {
    render(<About stats={[]} />);
    expect(screen.getByText('// ABOUT')).toBeInTheDocument();
  });

  it('should apply responsive grid classes', () => {
    const { container } = render(<About stats={mockStats} />);
    const grid = container.querySelector('.grid');
    expect(grid).toHaveClass('grid-cols-1');
    expect(grid).toHaveClass('sm:grid-cols-2');
    expect(grid).toHaveClass('lg:grid-cols-4');
  });
});
