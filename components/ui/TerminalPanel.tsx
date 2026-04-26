'use client';

import { useState, useEffect } from 'react';
import TypewriterText from '../animations/TypewriterText';
import { TerminalLine } from '@/lib/types';

interface TerminalPanelProps {
  lines: TerminalLine[];
  speed?: number; // characters per second, default: 30
}

export default function TerminalPanel({ lines, speed = 30 }: TerminalPanelProps) {
  const [currentLineIndex, setCurrentLineIndex] = useState(0);
  const [isLineReady, setIsLineReady] = useState(false);

  // Handle initial delay for the first line
  useEffect(() => {
    if (currentLineIndex === 0) {
      const initialDelay = lines[0]?.delay || 0;
      const timeout = setTimeout(() => {
        setIsLineReady(true);
      }, initialDelay);
      return () => clearTimeout(timeout);
    }
  }, [currentLineIndex, lines]);

  // Handle line completion and move to next line
  const handleLineComplete = () => {
    if (currentLineIndex < lines.length - 1) {
      setIsLineReady(false);
      const nextLineDelay = lines[currentLineIndex + 1]?.delay || 0;
      
      setTimeout(() => {
        setCurrentLineIndex(prev => prev + 1);
        setIsLineReady(true);
      }, nextLineDelay);
    }
  };

  return (
    <div className="bg-[#0a0a0a] border border-[#1a1a1a] p-4 rounded font-mono text-sm text-[#a78bfa]">
      {lines.map((line, index) => {
        if (index < currentLineIndex) {
          // Already completed lines
          return (
            <div key={index} className="mb-1">
              <span className="text-purple-400">{line.prefix}</span> {line.text}
            </div>
          );
        } else if (index === currentLineIndex && isLineReady) {
          // Current line being animated
          return (
            <div key={index} className="mb-1">
              <span className="text-purple-400">{line.prefix}</span>{' '}
              <TypewriterText 
                text={line.text} 
                speed={speed}
                onComplete={handleLineComplete}
              />
            </div>
          );
        }
        return null;
      })}
    </div>
  );
}
