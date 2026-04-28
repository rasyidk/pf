'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { loadProjects } from '@/lib/utils';
import { Project } from '@/lib/types';
import ProjectCard from './ui/ProjectCard';
import ProjectModal from './ui/ProjectModal';
import { ChevronLeft, ChevronRight } from 'lucide-react';

export default function Projects() {
  const [projects, setProjects] = useState<Project[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [isLoading, setIsLoading] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const itemsPerPage = 6; // Changed from 3 to 6

  // Define categories
  const categories = ['All', 'AI/ML', 'Website', 'Mobile App'];

  // Load projects on mount
  useEffect(() => {
    async function fetchProjects() {
      setIsLoading(true);
      const data = await loadProjects();
      setProjects(data);
      setIsLoading(false);
    }
    fetchProjects();
  }, []);

  // Filter projects by category
  const filteredProjects = selectedCategory === 'All' 
    ? projects 
    : projects.filter(project => project.category === selectedCategory);

  // Calculate pagination
  const totalPages = Math.ceil(filteredProjects.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentProjects = filteredProjects.slice(startIndex, endIndex);

  // Handle category change
  const handleCategoryChange = (category: string) => {
    setSelectedCategory(category);
    setCurrentPage(1); // Reset to first page when category changes
  };

  // Handle project click
  const handleProjectClick = (project: Project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  // Handle modal close
  const handleModalClose = () => {
    setIsModalOpen(false);
    setTimeout(() => setSelectedProject(null), 300); // Clear after animation
  };

  // Handle page change
  const handlePageChange = (page: number) => {
    if (page < 1 || page > totalPages) return;
    setCurrentPage(page);
    
    // Scroll to projects section top
    const projectsSection = document.getElementById('projects');
    if (projectsSection) {
      projectsSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  // Generate page numbers
  const pageNumbers = Array.from({ length: totalPages }, (_, i) => i + 1);

  if (isLoading) {
    return (
      <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="font-mono text-xl sm:text-2xl text-text-secondary tracking-[0.2em] mb-12 font-bold">
            {'// PROJECTS'}
          </h2>
          <div className="text-center text-text-secondary font-mono">
            [LOADING...]
          </div>
        </div>
      </section>
    );
  }

  if (projects.length === 0) {
    return (
      <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="font-mono text-xl sm:text-2xl text-text-secondary tracking-[0.2em] mb-12 font-bold">
            {'// PROJECTS'}
          </h2>
          <div className="text-center text-text-secondary font-mono">
            [NO PROJECTS FOUND]
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8" aria-label="Projects section">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <h2 className="font-mono text-xl sm:text-2xl text-text-secondary tracking-[0.2em] mb-8 font-bold">
          {'// PROJECTS'}
        </h2>

        {/* Category Filter */}
        <div className="flex flex-wrap gap-3 mb-12" role="tablist" aria-label="Project categories">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => handleCategoryChange(category)}
              role="tab"
              aria-selected={selectedCategory === category}
              style={{ borderRadius: '0.5rem' }}
              className={`px-4 py-2 font-mono text-sm transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-accent-primary focus:ring-offset-2 focus:ring-offset-background ${
                selectedCategory === category
                  ? 'bg-accent-primary text-white border border-accent-primary'
                  : 'glass-panel glass-hover text-accent-primary'
              }`}
            >
              [{category.toUpperCase()}]
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={`${selectedCategory}-${currentPage}`}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
          >
            {currentProjects.length > 0 ? (
              currentProjects.map((project) => (
                <ProjectCard 
                  key={project.id} 
                  project={project}
                  onClick={() => handleProjectClick(project)}
                />
              ))
            ) : (
              <div className="col-span-full text-center text-text-secondary font-mono py-12">
                [NO PROJECTS IN THIS CATEGORY]
              </div>
            )}
          </motion.div>
        </AnimatePresence>

        {/* Project Modal */}
        {selectedProject && (
          <ProjectModal
            project={selectedProject}
            isOpen={isModalOpen}
            onClose={handleModalClose}
          />
        )}

        {/* Pagination Controls */}
        {totalPages > 1 && (
          <nav className="flex flex-col sm:flex-row items-center justify-center gap-4 font-mono text-sm" aria-label="Project pagination">
            {/* Previous Button */}
            <button
              onClick={() => handlePageChange(currentPage - 1)}
              disabled={currentPage === 1}
              className={`flex items-center gap-1 px-4 py-3 transition-all duration-200 w-full sm:w-auto justify-center focus:outline-none focus:ring-2 focus:ring-accent-primary focus:ring-offset-2 focus:ring-offset-background ${
                currentPage === 1
                  ? 'glass-panel text-text-muted cursor-not-allowed opacity-50'
                  : 'glass-panel glass-hover text-accent-primary'
              }`}
              aria-label="Previous page"
            >
              <ChevronLeft size={16} aria-hidden="true" />
              [PREV]
            </button>

            {/* Page Numbers */}
            <div className="flex gap-2 w-full sm:w-auto justify-center">
              {pageNumbers.map((pageNum) => (
                <button
                  key={pageNum}
                  onClick={() => handlePageChange(pageNum)}
                  style={{ borderRadius: '0.5rem' }}
                  className={`px-4 py-3 transition-all duration-200 flex-1 sm:flex-none focus:outline-none focus:ring-2 focus:ring-accent-primary focus:ring-offset-2 focus:ring-offset-background ${
                    currentPage === pageNum
                      ? 'bg-accent-primary text-white border border-accent-primary'
                      : 'glass-panel glass-hover text-accent-primary'
                  }`}
                  aria-label={`Go to page ${pageNum}`}
                  aria-current={currentPage === pageNum ? 'page' : undefined}
                >
                  [{pageNum.toString().padStart(2, '0')}]
                </button>
              ))}
            </div>

            {/* Next Button */}
            <button
              onClick={() => handlePageChange(currentPage + 1)}
              disabled={currentPage === totalPages}
              className={`flex items-center gap-1 px-4 py-3 transition-all duration-200 w-full sm:w-auto justify-center focus:outline-none focus:ring-2 focus:ring-accent-primary focus:ring-offset-2 focus:ring-offset-background ${
                currentPage === totalPages
                  ? 'glass-panel text-text-muted cursor-not-allowed opacity-50'
                  : 'glass-panel glass-hover text-accent-primary'
              }`}
              aria-label="Next page"
            >
              [NEXT]
              <ChevronRight size={16} aria-hidden="true" />
            </button>
          </nav>
        )}
      </div>
    </section>
  );
}
