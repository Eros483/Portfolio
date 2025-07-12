import React from 'react';
import { Calendar, Github, ExternalLink } from 'lucide-react';
import { Project } from '../types';

interface ProjectCardProps {
  project: Project;
  onView: (project: Project) => void;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project, onView }) => {
  const { title, description, technologies, imageUrl, githubUrl, liveUrl, date } = project;
  
  // Format date to display as MMM YYYY (e.g., "May 2023")
  const formattedDate = new Date(date).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'short',
  });

  return (
    <div className="group bg-white/80 dark:bg-dark-900/80 backdrop-blur-sm rounded-xl shadow-sm overflow-hidden border-2 border-primary-200/50 dark:border-primary-700/50 transition-all duration-300 hover:shadow-xl hover:shadow-primary-500/20 hover:transform hover:-translate-y-2 hover:border-primary-400/60 hover:animate-float">
      {/* Project Image */}
      {imageUrl && (
        <div className="h-48 overflow-hidden relative">
          <img 
            src={imageUrl} 
            alt={title} 
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" 
          />
          <div className="absolute inset-0 bg-gradient-to-t from-primary-900/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        </div>
      )}
      
      {/* Content */}
      <div className="p-6">
        <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2 group-hover:text-primary-500 dark:group-hover:text-whimsy-400 transition-colors relative">
          {title}
          <span className="absolute -top-1 -right-3 text-sm text-whimsy-400/0 group-hover:text-whimsy-400/60 transition-all duration-300 animate-wiggle">✨</span>
        </h3>
        
        <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">{description}</p>
        
        {/* Date */}
        <div className="flex items-center text-gray-500 dark:text-gray-400 text-sm mb-4 group-hover:text-primary-500 dark:group-hover:text-whimsy-400 transition-colors">
          <Calendar size={16} className="mr-2" />
          <span>{formattedDate}</span>
        </div>
        
        {/* Technologies */}
        <div className="flex flex-wrap gap-2 mb-6">
          {technologies.slice(0, 3).map((tech, index) => (
            <span 
              key={index}
              className="px-3 py-1 bg-primary-100 dark:bg-primary-900/40 text-primary-700 dark:text-primary-300 text-xs rounded-full border border-primary-200 dark:border-primary-700 group-hover:animate-wiggle transition-all duration-300"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {tech}
            </span>
          ))}
          {technologies.length > 3 && (
            <span className="px-3 py-1 bg-whimsy-100 dark:bg-whimsy-900/30 text-whimsy-700 dark:text-whimsy-300 text-xs rounded-full border border-whimsy-200 dark:border-whimsy-700 group-hover:animate-wiggle">
              +{technologies.length - 3} more
            </span>
          )}
        </div>
        
        {/* Actions */}
        <div className="flex justify-between items-center">
          <button
            onClick={() => onView(project)}
            className="text-primary-500 dark:text-whimsy-400 hover:text-primary-600 dark:hover:text-whimsy-300 font-medium transition-all duration-300 hover:underline hover:scale-105"
          >
            View Details
          </button>
          
          <div className="flex space-x-3">
            {githubUrl && (
              <a 
                href={githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 text-gray-600 dark:text-gray-400 hover:text-primary-500 dark:hover:text-whimsy-400 hover:bg-primary-50 dark:hover:bg-primary-900/30 rounded-lg transition-all duration-300 hover:scale-110 hover:animate-wiggle"
                aria-label="GitHub Repository"
              >
                <Github size={18} />
              </a>
            )}
            {liveUrl && (
              <a 
                href={liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 text-gray-600 dark:text-gray-400 hover:text-accent-500 dark:hover:text-accent-400 hover:bg-accent-50 dark:hover:bg-accent-900/30 rounded-lg transition-all duration-300 hover:scale-110 hover:animate-wiggle"
                aria-label="Live Demo"
              >
                <ExternalLink size={18} />
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;