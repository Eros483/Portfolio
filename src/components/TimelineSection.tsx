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
    <section id="projects" className="py-20 bg-white dark:bg-dark-950 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-40 left-20 w-72 h-72 bg-primary-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-40 right-20 w-72 h-72 bg-accent-500/5 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">My Projects</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary-600 to-accent-500 mx-auto mb-8 rounded-full"></div>
          <p className="max-w-2xl mx-auto text-gray-600 dark:text-gray-400">
            A timeline of my journey through various projects and explorations
          </p>
        </div>
        
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-primary-600 via-accent-500 to-primary-600 hidden md:block rounded-full"></div>
          
          {/* Projects by year */}
          <div className="space-y-12">
            {sortedYears.map((year) => (
              <div key={year} className="mb-16">
                {/* Year marker */}
                <div className="flex justify-center mb-8">
                  <div className="relative">
                    <div className="bg-gradient-to-r from-primary-600 to-accent-500 text-white px-8 py-3 rounded-full text-lg font-semibold z-10 relative shadow-lg">
                      {year}
                    </div>
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-6 h-6 bg-gradient-to-r from-primary-600 to-accent-500 rounded-full hidden md:block shadow-lg"></div>
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
                        <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-gradient-to-r from-primary-600 to-accent-500 rounded-full hidden md:block shadow-lg border-2 border-white dark:border-dark-950"></div>
                        
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