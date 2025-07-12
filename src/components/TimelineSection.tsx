import React, { useState } from 'react';
import { projects } from '../data/projects';
import ProjectCard from './ProjectCard';
import ProjectModal from './ProjectModal';
import { Project } from '../types';

const TimelineSection: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  
  // Group projects by year
  const projectsByYear = projects.reduce((acc, project) => {
    const year = new Date(project.date).getFullYear().toString();
    if (!acc[year]) {
      acc[year] = [];
    }
    acc[year].push(project);
    return acc;
  }, {} as Record<string, Project[]>);
  
  // Sort years in descending order
  const sortedYears = Object.keys(projectsByYear).sort((a, b) => parseInt(b) - parseInt(a));

  const handleViewProject = (project: Project) => {
    setSelectedProject(project);
  };

  const handleCloseModal = () => {
    setSelectedProject(null);
  };

  return (
    <section id="projects" className="py-20 bg-gray-50 dark:bg-dark-800 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-40 left-20 w-72 h-72 bg-primary-500/10 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-40 right-20 w-72 h-72 bg-whimsy-500/8 rounded-full blur-3xl animate-squiggle"></div>
        
        {/* Cute small shapes */}
        <div className="absolute top-20 right-1/4 w-5 h-5 bg-primary-200/20 animate-wiggle" style={{clipPath: 'polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%)'}}></div>
        <div className="absolute top-32 left-1/4 w-3 h-3 bg-whimsy-300/30 rounded-full animate-float"></div>
        <div className="absolute top-48 right-1/3 w-4 h-4 bg-accent-300/25 rotate-45 animate-squiggle"></div>
        <div className="absolute top-64 left-1/5 w-2 h-5 bg-primary-300/30 rounded-full animate-pulse-slow"></div>
        
        <div className="absolute top-1/3 right-20 w-3 h-3 bg-whimsy-200/35 animate-float" style={{clipPath: 'polygon(20% 0%, 0% 20%, 30% 50%, 0% 80%, 20% 100%, 50% 70%, 80% 100%, 100% 80%, 70% 50%, 100% 20%, 80% 0%, 50% 30%)'}}></div>
        <div className="absolute top-1/2 left-16 w-4 h-2 bg-accent-400/40 rounded-full animate-wiggle"></div>
        <div className="absolute top-2/3 right-1/4 w-3 h-3 bg-primary-400/35 rounded-full animate-squiggle"></div>
        
        <div className="absolute bottom-20 left-1/4 w-4 h-4 bg-whimsy-200/25 rotate-45 animate-float"></div>
        <div className="absolute bottom-32 right-1/3 w-3 h-3 bg-accent-300/30 animate-pulse-slow" style={{clipPath: 'polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%)'}}></div>
        <div className="absolute bottom-48 left-20 w-2 h-4 bg-primary-300/35 rounded-full animate-wiggle"></div>
        <div className="absolute bottom-64 right-16 w-3 h-3 bg-whimsy-300/40 animate-squiggle" style={{clipPath: 'polygon(20% 0%, 0% 20%, 30% 50%, 0% 80%, 20% 100%, 50% 70%, 80% 100%, 100% 80%, 70% 50%, 100% 20%, 80% 0%, 50% 30%)'}}></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4 relative">
            My Projects
            <span className="absolute -top-2 -right-6 text-2xl text-accent-400/60 animate-wiggle">🚀</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary-500 to-whimsy-500 mx-auto mb-8 rounded-full animate-pulse-slow"></div>
          <p className="max-w-2xl mx-auto text-gray-600 dark:text-gray-300">
            A timeline of my journey through various projects and explorations
          </p>
        </div>
        
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-primary-500 via-whimsy-500 to-primary-500 hidden md:block rounded-full animate-pulse-slow"></div>
          
          {/* Projects by year */}
          <div className="space-y-12">
            {sortedYears.map((year) => (
              <div key={year} className="mb-16">
                {/* Year marker */}
                <div className="flex justify-center mb-8">
                  <div className="relative">
                    <div className="bg-gradient-to-r from-primary-500 to-whimsy-500 text-white px-8 py-3 rounded-full text-lg font-semibold z-10 relative shadow-lg animate-float border-2 border-white/20">
                      {year}
                    </div>
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-6 h-6 bg-gradient-to-r from-primary-500 to-whimsy-500 rounded-full hidden md:block shadow-lg animate-wiggle"></div>
                  </div>
                </div>
                
                {/* Projects in this year */}
                <div>
                  {projectsByYear[year].map((project, index) => (
                    <div key={project.id} className="mb-12 md:mb-16">
                      <div className={`flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                        {/* Spacer for alternating layout */}
                        <div className="md:w-1/2 hidden md:block"></div>
                        
                        {/* Timeline dot for mobile */}
                        <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-gradient-to-r from-primary-500 to-whimsy-500 rounded-full hidden md:block shadow-lg border-2 border-white dark:border-dark-800 animate-pulse-slow"></div>
                        
                        {/* Project card */}
                        <div className="md:w-1/2 px-4">
                          <ProjectCard project={project} onView={handleViewProject} />
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      
      {/* Project Modal */}
      {selectedProject && (
        <ProjectModal 
          project={selectedProject} 
          onClose={handleCloseModal} 
        />
      )}
    </section>
  );
};

export default TimelineSection;