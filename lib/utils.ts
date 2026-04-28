// Utility functions for portfolio website

import { Project, ExperienceEntry } from './types';

/**
 * Combines class names, filtering out falsy values
 * @param classes - Array of class names (strings, undefined, null, or false)
 * @returns Combined class string
 */
export function cn(...classes: (string | undefined | null | false)[]): string {
  return classes.filter(Boolean).join(' ');
}

/**
 * Loads project data from projects.json file
 * @returns Promise resolving to array of projects
 */
export async function loadProjects(): Promise<Project[]> {
  try {
    // Dynamic import of JSON file
    const projectsModule = await import('@/data/projects.json');
    return projectsModule.projects || [];
  } catch (error) {
    console.error('Error loading projects:', error);
    return []; // Return empty array as fallback
  }
}

/**
 * Loads experience data from experience.json file
 * @returns Promise resolving to array of experience entries
 */
export async function loadExperience(): Promise<ExperienceEntry[]> {
  try {
    // Dynamic import of JSON file
    const experienceModule = await import('@/data/experience.json');
    return experienceModule.experience || [];
  } catch (error) {
    console.error('Error loading experience:', error);
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
