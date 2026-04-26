import { render, screen } from '@testing-library/react';
import Footer from './Footer';

describe('Footer Component', () => {
  it('should render copyright line with current year', () => {
    render(<Footer />);
    
    const currentYear = new Date().getFullYear();
    const copyrightText = screen.getByText(`© ${currentYear} Rafi Ardian`);
    
    expect(copyrightText).toBeInTheDocument();
  });

  it('should display "Rafi Ardian" as copyright holder', () => {
    render(<Footer />);
    
    const copyrightText = screen.getByText(/Rafi Ardian/);
    
    expect(copyrightText).toBeInTheDocument();
  });

  it('should use muted text color class', () => {
    render(<Footer />);
    
    const copyrightText = screen.getByText(/© \d{4} Rafi Ardian/);
    
    expect(copyrightText).toHaveClass('text-text-muted');
  });

  it('should use monospace font', () => {
    render(<Footer />);
    
    const copyrightText = screen.getByText(/© \d{4} Rafi Ardian/);
    
    expect(copyrightText).toHaveClass('font-mono');
  });

  it('should be centered', () => {
    render(<Footer />);
    
    const copyrightText = screen.getByText(/© \d{4} Rafi Ardian/);
    
    expect(copyrightText).toHaveClass('text-center');
  });
});
