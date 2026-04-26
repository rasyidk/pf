import { render, screen } from '@testing-library/react';
import Experience from './Experience';
import { ExperienceEntry } from '@/lib/types';

// Mock framer-motion
jest.mock('framer-motion', () => ({
  motion: {
    div: ({ children, ...props }: any) => <div {...props}>{children}</div>,
  },
}));

describe('Experience Component', () => {
  const mockEntries: ExperienceEntry[] = [
    {
      company: 'Ruangguru',
      role: 'Frontend Developer',
      period: '2022 — PRESENT',
      responsibilities: [
        'Developed responsive web applications using React and TypeScript',
        'Collaborated with design team to implement UI/UX improvements',
        'Optimized application performance and reduced load times by 40%',
      ],
    },
    {
      company: 'Gojek',
      role: 'Web Dev Intern',
      period: '2021',
      responsibilities: [
        'Built reusable React components for internal tools',
        'Participated in code reviews and agile development processes',
      ],
    },
  ];

  it('should render section header', () => {
    render(<Experience entries={mockEntries} />);
    expect(screen.getByText('// EXPERIENCE')).toBeInTheDocument();
  });

  it('should render all experience entries', () => {
    render(<Experience entries={mockEntries} />);
    expect(screen.getByText('Frontend Developer')).toBeInTheDocument();
    expect(screen.getByText('Ruangguru')).toBeInTheDocument();
    expect(screen.getByText('2022 — PRESENT')).toBeInTheDocument();
    expect(screen.getByText('Web Dev Intern')).toBeInTheDocument();
    expect(screen.getByText('Gojek')).toBeInTheDocument();
    expect(screen.getByText('2021')).toBeInTheDocument();
  });

  it('should render all responsibilities as bullet points', () => {
    render(<Experience entries={mockEntries} />);
    expect(
      screen.getByText('Developed responsive web applications using React and TypeScript')
    ).toBeInTheDocument();
    expect(
      screen.getByText('Collaborated with design team to implement UI/UX improvements')
    ).toBeInTheDocument();
    expect(
      screen.getByText('Optimized application performance and reduced load times by 40%')
    ).toBeInTheDocument();
    expect(
      screen.getByText('Built reusable React components for internal tools')
    ).toBeInTheDocument();
    expect(
      screen.getByText('Participated in code reviews and agile development processes')
    ).toBeInTheDocument();
  });

  it('should render timeline dots for each entry', () => {
    const { container } = render(<Experience entries={mockEntries} />);
    const dots = container.querySelectorAll('.bg-accent-primary.rounded-full');
    expect(dots.length).toBe(mockEntries.length);
  });

  it('should handle empty entries array', () => {
    render(<Experience entries={[]} />);
    expect(screen.getByText('// EXPERIENCE')).toBeInTheDocument();
    // Should not crash and should still render the section
  });

  it('should render responsibilities in surface containers', () => {
    const { container } = render(<Experience entries={mockEntries} />);
    const surfaceContainers = container.querySelectorAll('.bg-surface.border.border-border');
    expect(surfaceContainers.length).toBe(mockEntries.length);
  });
});
