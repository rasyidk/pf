import type { Metadata, Viewport } from 'next';
import { Space_Grotesk } from 'next/font/google';
import './globals.css';

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-space-grotesk',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Rasyid Kusnady - Software Engineer',
  description: 'AI/ML Engineer and Full Stack Developer specializing in artificial intelligence, web development, and mobile applications',
  authors: [{ name: 'Rasyid Kusnady' }],
  keywords: ['Software Engineer', 'AI/ML Engineer', 'Full Stack Developer', 'Machine Learning', 'Web Development', 'Mobile Development', 'Next.js', 'React', 'TypeScript', 'Python', 'TensorFlow'],
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={spaceGrotesk.variable}>
      <head>
        {/* Preload devicons stylesheet for better performance */}
        <link
          rel="preload"
          href="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/devicon.min.css"
          as="style"
        />
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/devicon.min.css"
        />
      </head>
      <body className="antialiased bg-background text-text-primary dot-grid">
        {/* Skip to main content link for keyboard navigation */}
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-accent-primary focus:text-background focus:font-mono focus:text-sm"
        >
          Skip to main content
        </a>
        {children}
      </body>
    </html>
  );
}
