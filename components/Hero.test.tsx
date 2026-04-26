import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import Hero from './Hero';
import { smoothScrollTo } from '@/lib/utils';

// Mock the utils module
jest.mock('@/lib/utils', () => ({
  smoothScrollTo: jest.fn(),
}));

// Mock Next.js Image component
jest.mock('next/image', () => ({
  __esModule: true,
  default: (props: any) => {
    // eslint-disable-next-line @next/next/no-img-element, jsx-a11y/alt-text
    return <img {...props} />;
  },
}));

describe('Hero Component', () => {
  const mockProps = {
    name: 'Rafi Ardian',
    roles: ['Full Stack Developer', 'Frontend Engineer', 'Problem Solver'],
    bio: 'Passionate software engineer building modern web applications with clean code and great user experiences.',
    profileImage: '/profile.jpg',
  };

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('should render the name correctly', () => {
    render(<Hero {...mockProps} />);
    expect(screen.getByText('Rafi Ardian')).toBeInTheDocument();
  });

  it('should render the SOFTWARE ENGINEER label', () => {
    render(<Hero {...mockProps} />);
    expect(screen.getByText('// SOFTWARE ENGINEER')).toBeInTheDocument();
  });

  it('should render the bio text', () => {
    render(<Hero {...mockProps} />);
    expect(screen.getByText(mockProps.bio)).toBeInTheDocument();
  });

  it('should render CTA buttons', () => {
    render(<Hero {...mockProps} />);
    expect(screen.getByText('[VIEW_PROJECTS]')).toBeInTheDocument();
    expect(screen.getByText('[CONTACT_ME]')).toBeInTheDocument();
  });

  it('should call smoothScrollTo when VIEW_PROJECTS button is clicked', () => {
    render(<Hero {...mockProps} />);
    const projectsButton = screen.getByText('[VIEW_PROJECTS]');
    fireEvent.click(projectsButton);
    expect(smoothScrollTo).toHaveBeenCalledWith('projects');
  });

  it('should call smoothScrollTo when CONTACT_ME button is clicked', () => {
    render(<Hero {...mockProps} />);
    const contactButton = screen.getByText('[CONTACT_ME]');
    fireEvent.click(contactButton);
    expect(smoothScrollTo).toHaveBeenCalledWith('contact');
  });

  it('should render profile image with correct props', () => {
    render(<Hero {...mockProps} />);
    const image = screen.getByAlt('Rafi Ardian');
    expect(image).toBeInTheDocument();
    expect(image).toHaveAttribute('src', '/profile.jpg');
  });

  it('should render profile label and status', () => {
    render(<Hero {...mockProps} />);
    expect(screen.getByText('// PROFILE.JPG')).toBeInTheDocument();
    expect(screen.getByText('[STATUS]')).toBeInTheDocument();
    expect(screen.getByText('Available for work')).toBeInTheDocument();
  });

  it('should cycle through roles', async () => {
    jest.useFakeTimers();
    render(<Hero {...mockProps} />);

    // First role should be visible
    const firstRole = screen.getByText('Full Stack Developer');
    expect(firstRole).toHaveClass('opacity-100');

    // Advance time by 2.5 seconds
    jest.advanceTimersByTime(2500);

    await waitFor(() => {
      const secondRole = screen.getByText('Frontend Engineer');
      expect(secondRole).toHaveClass('opacity-100');
    });

    jest.useRealTimers();
  });

  it('should display error message when image fails to load', () => {
    render(<Hero {...mockProps} />);
    const image = screen.getByAlt('Rafi Ardian');
    
    // Simulate image error
    fireEvent.error(image);

    expect(screen.getByText('[ERROR] Image not found')).toBeInTheDocument();
  });

  it('should render terminal panel lines', () => {
    render(<Hero {...mockProps} />);
    expect(screen.getByText('[INIT]')).toBeInTheDocument();
    expect(screen.getByText('[SCAN]')).toBeInTheDocument();
    expect(screen.getByText('[DONE]')).toBeInTheDocument();
  });
});
