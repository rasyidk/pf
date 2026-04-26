import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import Projects from './Projects';
import { loadProjects } from '@/lib/utils';
import { Project } from '@/lib/types';

// Mock the loadProjects utility
jest.mock('@/lib/utils', () => ({
  loadProjects: jest.fn(),
}));

// Mock framer-motion
jest.mock('framer-motion', () => ({
  motion: {
    div: ({ children, ...props }: any) => <div {...props}>{children}</div>,
  },
  AnimatePresence: ({ children }: any) => <>{children}</>,
}));

const mockProjects: Project[] = [
  {
    id: '01',
    title: 'Project 1',
    description: 'Description 1',
    image: '/projects/project1.jpg',
    codeSnippet: 'const test = 1;',
    tags: ['React', 'TypeScript'],
    github: 'https://github.com/test/project1',
    demo: 'https://demo1.com',
    category: 'Website',
  },
  {
    id: '02',
    title: 'Project 2',
    description: 'Description 2',
    image: '/projects/project2.jpg',
    codeSnippet: 'const test = 2;',
    tags: ['Next.js', 'Node.js'],
    github: 'https://github.com/test/project2',
    demo: 'https://demo2.com',
    category: 'AI/ML',
  },
  {
    id: '03',
    title: 'Project 3',
    description: 'Description 3',
    image: '/projects/project3.jpg',
    codeSnippet: 'const test = 3;',
    tags: ['Vue.js', 'Python'],
    github: 'https://github.com/test/project3',
    demo: 'https://demo3.com',
    category: 'Mobile App',
  },
  {
    id: '04',
    title: 'Project 4',
    description: 'Description 4',
    image: '/projects/project4.jpg',
    codeSnippet: 'const test = 4;',
    tags: ['Angular', 'Java'],
    github: 'https://github.com/test/project4',
    demo: 'https://demo4.com',
    category: 'Website',
  },
  {
    id: '05',
    title: 'Project 5',
    description: 'Description 5',
    image: '/projects/project5.jpg',
    codeSnippet: 'const test = 5;',
    tags: ['Svelte', 'Go'],
    github: 'https://github.com/test/project5',
    demo: 'https://demo5.com',
    category: 'AI/ML',
  },
  {
    id: '06',
    title: 'Project 6',
    description: 'Description 6',
    image: '/projects/project6.jpg',
    codeSnippet: 'const test = 6;',
    tags: ['React', 'Rust'],
    github: 'https://github.com/test/project6',
    demo: 'https://demo6.com',
    category: 'Mobile App',
  },
];

describe('Projects Component', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('should render section header', async () => {
    (loadProjects as jest.Mock).mockResolvedValue(mockProjects);
    render(<Projects />);
    
    await waitFor(() => {
      expect(screen.getByText('// PROJECTS')).toBeInTheDocument();
    });
  });

  it('should display loading state initially', () => {
    (loadProjects as jest.Mock).mockImplementation(
      () => new Promise(() => {}) // Never resolves
    );
    render(<Projects />);
    
    expect(screen.getByText('[LOADING...]')).toBeInTheDocument();
  });

  it('should display 3 projects per page', async () => {
    (loadProjects as jest.Mock).mockResolvedValue(mockProjects);
    render(<Projects />);
    
    await waitFor(() => {
      expect(screen.getByText('Project 1')).toBeInTheDocument();
      expect(screen.getByText('Project 2')).toBeInTheDocument();
      expect(screen.getByText('Project 3')).toBeInTheDocument();
      expect(screen.queryByText('Project 4')).not.toBeInTheDocument();
    });
  });

  it('should display pagination controls with correct page numbers', async () => {
    (loadProjects as jest.Mock).mockResolvedValue(mockProjects);
    render(<Projects />);
    
    await waitFor(() => {
      expect(screen.getByText('[PREV]')).toBeInTheDocument();
      expect(screen.getByText('[01]')).toBeInTheDocument();
      expect(screen.getByText('[02]')).toBeInTheDocument();
      expect(screen.getByText('[NEXT]')).toBeInTheDocument();
    });
  });

  it('should navigate to next page when NEXT button is clicked', async () => {
    (loadProjects as jest.Mock).mockResolvedValue(mockProjects);
    render(<Projects />);
    
    await waitFor(() => {
      expect(screen.getByText('Project 1')).toBeInTheDocument();
    });
    
    const nextButton = screen.getByLabelText('Next page');
    fireEvent.click(nextButton);
    
    await waitFor(() => {
      expect(screen.getByText('Project 4')).toBeInTheDocument();
      expect(screen.getByText('Project 5')).toBeInTheDocument();
      expect(screen.getByText('Project 6')).toBeInTheDocument();
      expect(screen.queryByText('Project 1')).not.toBeInTheDocument();
    });
  });

  it('should navigate to previous page when PREV button is clicked', async () => {
    (loadProjects as jest.Mock).mockResolvedValue(mockProjects);
    render(<Projects />);
    
    await waitFor(() => {
      expect(screen.getByText('Project 1')).toBeInTheDocument();
    });
    
    // Go to page 2
    const nextButton = screen.getByLabelText('Next page');
    fireEvent.click(nextButton);
    
    await waitFor(() => {
      expect(screen.getByText('Project 4')).toBeInTheDocument();
    });
    
    // Go back to page 1
    const prevButton = screen.getByLabelText('Previous page');
    fireEvent.click(prevButton);
    
    await waitFor(() => {
      expect(screen.getByText('Project 1')).toBeInTheDocument();
      expect(screen.queryByText('Project 4')).not.toBeInTheDocument();
    });
  });

  it('should navigate to specific page when page number is clicked', async () => {
    (loadProjects as jest.Mock).mockResolvedValue(mockProjects);
    render(<Projects />);
    
    await waitFor(() => {
      expect(screen.getByText('Project 1')).toBeInTheDocument();
    });
    
    const page2Button = screen.getByLabelText('Go to page 2');
    fireEvent.click(page2Button);
    
    await waitFor(() => {
      expect(screen.getByText('Project 4')).toBeInTheDocument();
      expect(screen.queryByText('Project 1')).not.toBeInTheDocument();
    });
  });

  it('should disable PREV button on first page', async () => {
    (loadProjects as jest.Mock).mockResolvedValue(mockProjects);
    render(<Projects />);
    
    await waitFor(() => {
      const prevButton = screen.getByLabelText('Previous page');
      expect(prevButton).toBeDisabled();
    });
  });

  it('should disable NEXT button on last page', async () => {
    (loadProjects as jest.Mock).mockResolvedValue(mockProjects);
    render(<Projects />);
    
    await waitFor(() => {
      expect(screen.getByText('Project 1')).toBeInTheDocument();
    });
    
    // Navigate to last page
    const page2Button = screen.getByLabelText('Go to page 2');
    fireEvent.click(page2Button);
    
    await waitFor(() => {
      const nextButton = screen.getByLabelText('Next page');
      expect(nextButton).toBeDisabled();
    });
  });

  it('should highlight current page number', async () => {
    (loadProjects as jest.Mock).mockResolvedValue(mockProjects);
    render(<Projects />);
    
    await waitFor(() => {
      const page1Button = screen.getByLabelText('Go to page 1');
      expect(page1Button).toHaveAttribute('aria-current', 'page');
    });
    
    // Navigate to page 2
    const page2Button = screen.getByLabelText('Go to page 2');
    fireEvent.click(page2Button);
    
    await waitFor(() => {
      expect(page2Button).toHaveAttribute('aria-current', 'page');
      const page1Button = screen.getByLabelText('Go to page 1');
      expect(page1Button).not.toHaveAttribute('aria-current');
    });
  });

  it('should handle empty projects array', async () => {
    (loadProjects as jest.Mock).mockResolvedValue([]);
    render(<Projects />);
    
    await waitFor(() => {
      expect(screen.getByText('[NO PROJECTS FOUND]')).toBeInTheDocument();
      expect(screen.queryByText('[PREV]')).not.toBeInTheDocument();
      expect(screen.queryByText('[NEXT]')).not.toBeInTheDocument();
    });
  });

  it('should not display pagination when there is only one page', async () => {
    const threeProjects = mockProjects.slice(0, 3);
    (loadProjects as jest.Mock).mockResolvedValue(threeProjects);
    render(<Projects />);
    
    await waitFor(() => {
      expect(screen.getByText('Project 1')).toBeInTheDocument();
      expect(screen.queryByText('[PREV]')).not.toBeInTheDocument();
      expect(screen.queryByText('[NEXT]')).not.toBeInTheDocument();
    });
  });

  it('should display responsive grid classes', async () => {
    (loadProjects as jest.Mock).mockResolvedValue(mockProjects);
    const { container } = render(<Projects />);
    
    await waitFor(() => {
      const grid = container.querySelector('.grid');
      expect(grid).toHaveClass('grid-cols-1');
      expect(grid).toHaveClass('md:grid-cols-2');
      expect(grid).toHaveClass('lg:grid-cols-3');
    });
  });
});
