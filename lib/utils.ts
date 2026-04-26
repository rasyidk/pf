// Utility functions for portfolio website

import { Project } from './types';
import { projectsData } from './projectsData';

/**
 * Combines class names, filtering out falsy values
 * @param classes - Array of class names (strings, undefined, null, or false)
 * @returns Combined class string
 */
export function cn(...classes: (string | undefined | null | false)[]): string {
  return classes.filter(Boolean).join(' ');
}

/**
 * Loads project data from imported data
 * @returns Promise resolving to array of projects
 */
export async function loadProjects(): Promise<Project[]> {
  try {
    // Return projects from imported data
    return projectsData;
  } catch (error) {
    console.error('Error loading projects:', error);
    return []; // Return empty array as fallback
  }
}

/**
 * Smoothly scrolls to an element by ID
 * @param elementId - ID of the target element (without #)
 */
export function smoothScrollTo(elementId: string): void {
  const element = document.getElementById(elementId);
  if (!element) {
    console.warn(`Element with id "${elementId}" not found`);
    return;
  }
  element.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

/**
 * Copies text to clipboard using Clipboard API
 * @param text - Text to copy
 * @returns Promise that resolves when copy is successful
 * @throws Error if clipboard API is not available or copy fails
 */
export function copyToClipboard(text: string): Promise<void> {
  if (!navigator.clipboard) {
    return Promise.reject(new Error('Clipboard API not available'));
  }
  return navigator.clipboard.writeText(text);
}
