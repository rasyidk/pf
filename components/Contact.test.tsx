import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import Contact from './Contact';
import { copyToClipboard } from '@/lib/utils';

// Mock the utils module
jest.mock('@/lib/utils', () => ({
  copyToClipboard: jest.fn(),
}));

describe('Contact Component', () => {
  const mockProps = {
    email: 'rafi@example.com',
    social: {
      github: 'https://github.com/rafiardian',
      linkedin: 'https://linkedin.com/in/rafiardian',
      twitter: 'https://twitter.com/rafiardian',
    },
  };

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('should render the section header', () => {
    render(<Contact {...mockProps} />);
    expect(screen.getByText('// CONTACT')).toBeInTheDocument();
  });

  it('should render terminal panel with availability status', () => {
    render(<Contact {...mockProps} />);
    expect(screen.getByText('[STATUS]')).toBeInTheDocument();
    expect(screen.getByText('[LOCATION]')).toBeInTheDocument();
    expect(screen.getByText('[RESPONSE]')).toBeInTheDocument();
  });

  it('should render email address', () => {
    render(<Contact {...mockProps} />);
    expect(screen.getByText('rafi@example.com')).toBeInTheDocument();
  });

  it('should render GET IN TOUCH heading', () => {
    render(<Contact {...mockProps} />);
    expect(screen.getByText('GET IN TOUCH')).toBeInTheDocument();
  });

  it('should render CONNECT heading', () => {
    render(<Contact {...mockProps} />);
    expect(screen.getByText('CONNECT')).toBeInTheDocument();
  });

  it('should render social media buttons', () => {
    render(<Contact {...mockProps} />);
    expect(screen.getByText('GITHUB')).toBeInTheDocument();
    expect(screen.getByText('LINKEDIN')).toBeInTheDocument();
    expect(screen.getByText('TWITTER')).toBeInTheDocument();
  });

  it('should have correct links for social media buttons', () => {
    render(<Contact {...mockProps} />);
    
    const githubLink = screen.getByLabelText('GitHub Profile');
    expect(githubLink).toHaveAttribute('href', mockProps.social.github);
    expect(githubLink).toHaveAttribute('target', '_blank');
    expect(githubLink).toHaveAttribute('rel', 'noopener noreferrer');

    const linkedinLink = screen.getByLabelText('LinkedIn Profile');
    expect(linkedinLink).toHaveAttribute('href', mockProps.social.linkedin);
    expect(linkedinLink).toHaveAttribute('target', '_blank');

    const twitterLink = screen.getByLabelText('Twitter Profile');
    expect(twitterLink).toHaveAttribute('href', mockProps.social.twitter);
    expect(twitterLink).toHaveAttribute('target', '_blank');
  });

  it('should call copyToClipboard when email is clicked', async () => {
    (copyToClipboard as jest.Mock).mockResolvedValue(undefined);
    
    render(<Contact {...mockProps} />);
    const emailButton = screen.getByText('rafi@example.com');
    
    fireEvent.click(emailButton);
    
    expect(copyToClipboard).toHaveBeenCalledWith('rafi@example.com');
  });

  it('should display confirmation message when email is copied', async () => {
    (copyToClipboard as jest.Mock).mockResolvedValue(undefined);
    
    render(<Contact {...mockProps} />);
    const emailButton = screen.getByText('rafi@example.com');
    
    fireEvent.click(emailButton);
    
    await waitFor(() => {
      expect(screen.getByText('[COPIED] Email copied to clipboard!')).toBeInTheDocument();
    });
  });

  it('should hide confirmation message after 3 seconds', async () => {
    jest.useFakeTimers();
    (copyToClipboard as jest.Mock).mockResolvedValue(undefined);
    
    render(<Contact {...mockProps} />);
    const emailButton = screen.getByText('rafi@example.com');
    
    fireEvent.click(emailButton);
    
    await waitFor(() => {
      expect(screen.getByText('[COPIED] Email copied to clipboard!')).toBeInTheDocument();
    });

    // Advance time by 3 seconds
    jest.advanceTimersByTime(3000);

    await waitFor(() => {
      expect(screen.queryByText('[COPIED] Email copied to clipboard!')).not.toBeInTheDocument();
    });

    jest.useRealTimers();
  });

  it('should show alert when clipboard API fails', async () => {
    const alertMock = jest.spyOn(window, 'alert').mockImplementation(() => {});
    const consoleErrorMock = jest.spyOn(console, 'error').mockImplementation(() => {});
    (copyToClipboard as jest.Mock).mockRejectedValue(new Error('Clipboard API not available'));
    
    render(<Contact {...mockProps} />);
    const emailButton = screen.getByText('rafi@example.com');
    
    fireEvent.click(emailButton);
    
    await waitFor(() => {
      expect(alertMock).toHaveBeenCalledWith('Please copy manually: rafi@example.com');
    });

    alertMock.mockRestore();
    consoleErrorMock.mockRestore();
  });

  it('should render [CLICK_TO_COPY] hint', () => {
    render(<Contact {...mockProps} />);
    expect(screen.getByText('[CLICK_TO_COPY]')).toBeInTheDocument();
  });
});
