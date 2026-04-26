import { render, screen, waitFor } from '@testing-library/react';
import TerminalPanel from './TerminalPanel';

describe('TerminalPanel Component', () => {
  beforeEach(() => {
    jest.useFakeTimers();
  });

  afterEach(() => {
    jest.runOnlyPendingTimers();
    jest.useRealTimers();
  });

  const mockLines = [
    { prefix: '[INIT]', text: 'Initializing build process...' },
    { prefix: '[SCAN]', text: 'Scanning dependencies...' },
    { prefix: '[DONE]', text: 'Build complete!' }
  ];

  it('should render terminal panel with dark background', () => {
    const { container } = render(<TerminalPanel lines={mockLines} />);
    const panel = container.firstChild;
    
    expect(panel).toHaveClass('bg-[#0a0a0a]');
    expect(panel).toHaveClass('border');
    expect(panel).toHaveClass('border-[#1a1a1a]');
  });

  it('should use monospace font with purple text', () => {
    const { container } = render(<TerminalPanel lines={mockLines} />);
    const panel = container.firstChild;
    
    expect(panel).toHaveClass('font-mono');
    expect(panel).toHaveClass('text-[#a78bfa]');
  });

  it('should display first line with typewriter animation', async () => {
    render(<TerminalPanel lines={mockLines} speed={60} />);
    
    // Prefix should be visible immediately
    expect(screen.getByText('[INIT]')).toBeInTheDocument();
    
    // Text should animate character by character
    jest.advanceTimersByTime(1000 / 60);
    await waitFor(() => {
      expect(screen.getByText(/I/)).toBeInTheDocument();
    });
  });

  it('should display lines sequentially', async () => {
    const { container } = render(<TerminalPanel lines={mockLines} speed={120} />);
    
    // First line should start
    expect(screen.getByText('[INIT]')).toBeInTheDocument();
    
    // Complete first line
    const firstLineLength = mockLines[0].text.length;
    jest.advanceTimersByTime((firstLineLength * 1000) / 120 + 100);
    
    await waitFor(() => {
      expect(screen.getByText('[SCAN]')).toBeInTheDocument();
    });
    
    // Complete second line
    const secondLineLength = mockLines[1].text.length;
    jest.advanceTimersByTime((secondLineLength * 1000) / 120 + 100);
    
    await waitFor(() => {
      expect(screen.getByText('[DONE]')).toBeInTheDocument();
    });
  });

  it('should respect line delays', async () => {
    const linesWithDelay = [
      { prefix: '[INIT]', text: 'Starting...', delay: 500 },
      { prefix: '[DONE]', text: 'Complete!', delay: 1000 }
    ];
    
    render(<TerminalPanel lines={linesWithDelay} speed={120} />);
    
    // First line should not appear immediately due to delay
    expect(screen.queryByText('Starting...')).not.toBeInTheDocument();
    
    // Advance by initial delay
    jest.advanceTimersByTime(500);
    
    await waitFor(() => {
      expect(screen.getByText('[INIT]')).toBeInTheDocument();
    });
  });

  it('should display status prefixes with correct styling', () => {
    render(<TerminalPanel lines={mockLines} />);
    
    const prefix = screen.getByText('[INIT]');
    expect(prefix).toHaveClass('text-purple-400');
  });

  it('should handle empty lines array', () => {
    const { container } = render(<TerminalPanel lines={[]} />);
    
    expect(container.firstChild).toBeInTheDocument();
    expect(container.textContent).toBe('');
  });

  it('should handle single line', async () => {
    const singleLine = [{ prefix: '[TEST]', text: 'Single line' }];
    render(<TerminalPanel lines={singleLine} speed={60} />);
    
    expect(screen.getByText('[TEST]')).toBeInTheDocument();
    
    jest.advanceTimersByTime((singleLine[0].text.length * 1000) / 60 + 100);
    
    await waitFor(() => {
      expect(screen.getByText('Single line')).toBeInTheDocument();
    });
  });

  it('should use default speed of 30 characters per second', async () => {
    const lines = [{ prefix: '[TEST]', text: 'A' }];
    render(<TerminalPanel lines={lines} />);
    
    // Advance by default speed timing
    jest.advanceTimersByTime(1000 / 30);
    
    await waitFor(() => {
      expect(screen.getByText('A')).toBeInTheDocument();
    });
  });

  it('should display completed lines without animation', async () => {
    render(<TerminalPanel lines={mockLines} speed={120} />);
    
    // Complete first line
    jest.advanceTimersByTime((mockLines[0].text.length * 1000) / 120 + 100);
    
    await waitFor(() => {
      expect(screen.getByText(mockLines[0].text)).toBeInTheDocument();
    });
    
    // First line should remain visible while second line animates
    expect(screen.getByText('[INIT]')).toBeInTheDocument();
    expect(screen.getByText(mockLines[0].text)).toBeInTheDocument();
  });

  it('should show blinking cursor on current line', () => {
    const { container } = render(<TerminalPanel lines={mockLines} />);
    
    // Cursor character should be present
    expect(container.textContent).toContain('▌');
  });
});
