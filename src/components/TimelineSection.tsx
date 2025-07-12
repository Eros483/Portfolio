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
        <div className="absolute top-20 right-1/4 text-5xl text-primary-200/20 animate-wiggle">★</div>
        <div className="absolute bottom-20 left-1/4 text-4xl text-whimsy-200/25 animate-float">◆</div>
        
        {/* Squiggly decorative lines */}
        <svg className="absolute top-1/6 left-0 w-full h-20 opacity-12" viewBox="0 0 1200 100">
          <path d="M0,50 Q300,20 600,50 T1200,50" stroke="currentColor" strokeWidth="2" fill="none" className="text-primary-400 animate-squiggle"/>
        </svg>
        <svg className="absolute top-1/3 right-0 w-full h-20 opacity-10" viewBox="0 0 1200 100">
          <path d="M0,50 Q300,80 600,50 T1200,50" stroke="currentColor" strokeWidth="3" fill="none" className="text-whimsy-400 animate-float"/>
        </svg>
        <svg className="absolute top-1/2 left-0 w-full h-20 opacity-8" viewBox="0 0 1200 100">
          <path d="M0,50 Q200,30 400,50 Q600,70 800,50 Q1000,30 1200,50" stroke="currentColor" strokeWidth="2" fill="none" className="text-primary-300 animate-squiggle"/>
        </svg>
        <svg className="absolute bottom-1/4 right-0 w-full h-20 opacity-15" viewBox="0 0 1200 100">
          <path d="M0,50 Q150,20 300,50 Q450,80 600,50 Q750,20 900,50 Q1050,80 1200,50" stroke="currentColor" strokeWidth="1.5" fill="none" className="text-whimsy-300 animate-float"/>
        </svg>
        <svg className="absolute bottom-10 left-0 w-full h-20 opacity-12" viewBox="0 0 1200 100">
          <path d="M0,50 Q100,30 200,50 Q300,70 400,50 Q500,30 600,50 Q700,70 800,50 Q900,30 1000,50 Q1100,70 1200,50" stroke="currentColor" strokeWidth="2.5" fill="none" className="text-primary-400 animate-squiggle"/>
        </svg>
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