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
    <div className="group bg-white/70 dark:bg-dark-800/70 backdrop-blur-sm rounded-xl shadow-sm overflow-hidden border border-gray-200/50 dark:border-dark-700/50 transition-all duration-300 hover:shadow-xl hover:shadow-primary-500/10 hover:transform hover:-translate-y-2 hover:border-primary-500/30">
      {/* Project Image */}
      {imageUrl && (
        <div className="h-48 overflow-hidden relative">
          <img 
            src={imageUrl} 
            alt={title} 
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" 
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        </div>
      )}
      
      {/* Content */}
      <div className="p-6">
        <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">
          {title}
        </h3>
        
        <p className="text-gray-600 dark:text-gray-400 mb-4 leading-relaxed">{description}</p>
        
        {/* Date */}
        <div className="flex items-center text-gray-500 dark:text-gray-400 text-sm mb-4">
          <Calendar size={16} className="mr-2" />
          <span>{formattedDate}</span>
        </div>
        
        {/* Technologies */}
        <div className="flex flex-wrap gap-2 mb-6">
          {technologies.slice(0, 3).map((tech, index) => (
            <span 
              key={index}
              className="px-3 py-1 bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300 text-xs rounded-full border border-primary-200 dark:border-primary-800"
            >
              {tech}
            </span>
          ))}
          {technologies.length > 3 && (
            <span className="px-3 py-1 bg-gray-100 dark:bg-dark-700 text-gray-700 dark:text-gray-300 text-xs rounded-full border border-gray-200 dark:border-dark-600">
              +{technologies.length - 3} more
            </span>
          )}
        </div>
        
        {/* Actions */}
        <div className="flex justify-between items-center">
          <button
            onClick={() => onView(project)}
            className="text-primary-600 dark:text-primary-400 hover:text-primary-700 dark:hover:text-primary-300 font-medium transition-colors hover:underline"
          >
            View Details
          </button>
          
          <div className="flex space-x-3">
            {githubUrl && (
              <a 
                href={githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 hover:bg-primary-50 dark:hover:bg-primary-900/20 rounded-lg transition-all duration-300"
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
                className="p-2 text-gray-600 dark:text-gray-400 hover:text-accent-600 dark:hover:text-accent-400 hover:bg-accent-50 dark:hover:bg-accent-900/20 rounded-lg transition-all duration-300"
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