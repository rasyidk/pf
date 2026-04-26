import { render, screen, waitFor } from '@testing-library/react';
import TypewriterText from './TypewriterText';

describe('TypewriterText Component', () => {
  beforeEach(() => {
    jest.useFakeTimers();
  });

  afterEach(() => {
    jest.runOnlyPendingTimers();
    jest.useRealTimers();
  });

  it('should render with empty text initially', () => {
    render(<TypewriterText text="Hello World" />);
    const element = screen.getByText('', { exact: false });
    expect(element).toBeInTheDocument();
  });

  it('should display text character by character', async () => {
    const { container } = render(<TypewriterText text="Test" speed={60} />);
    
    // Initially empty
    expect(container.textContent).toMatch(/^▌?$/);
    
    // Advance time for first character (1000/60 ms per character)
    jest.advanceTimersByTime(1000 / 60);
    await waitFor(() => {
      expect(container.textContent).toContain('T');
    });
    
    // Advance for second character
    jest.advanceTimersByTime(1000 / 60);
    await waitFor(() => {
      expect(container.textContent).toContain('Te');
    });
  });

  it('should display blinking cursor during animation', () => {
    const { container } = render(<TypewriterText text="Hello" />);
    
    // Cursor should be present
    expect(container.textContent).toContain('▌');
  });

  it('should hide cursor after animation completes', async () => {
    const text = "Hi";
    const speed = 60;
    const { container } = render(<TypewriterText text={text} speed={speed} />);
    
    // Advance time to complete animation
    jest.advanceTimersByTime((text.length * 1000) / speed + 100);
    
    await waitFor(() => {
      expect(container.textContent).toBe(text);
    });
  });

  it('should call onComplete callback when animation finishes', async () => {
    const onComplete = jest.fn();
    const text = "Done";
    const speed = 120;
    
    render(<TypewriterText text={text} speed={speed} onComplete={onComplete} />);
    
    // Advance time to complete animation
    jest.advanceTimersByTime((text.length * 1000) / speed + 100);
    
    await waitFor(() => {
      expect(onComplete).toHaveBeenCalledTimes(1);
    });
  });

  it('should use default speed of 30 characters per second', () => {
    const { container } = render(<TypewriterText text="A" />);
    
    // Advance by default speed timing (1000/30 ms)
    jest.advanceTimersByTime(1000 / 30);
    
    expect(container.textContent).toContain('A');
  });

  it('should apply monospace font class', () => {
    const { container } = render(<TypewriterText text="Test" />);
    const span = container.querySelector('span');
    
    expect(span).toHaveClass('font-mono');
  });
});
