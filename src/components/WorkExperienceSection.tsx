import React from 'react';
import { Calendar, MapPin, Briefcase, Award, Code } from 'lucide-react';
import { workExperience } from '../data/workExperience';

const WorkExperienceSection: React.FC = () => {
  // Format date to display as MMM YYYY (e.g., "Jul 2025")
  const formatDate = (dateString: string) => {
    if (dateString === 'Present') return 'Present';
    const [year, month] = dateString.split('-');
    const date = new Date(parseInt(year), parseInt(month) - 1);
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
    });
  };

  // Calculate duration between two dates
  const calculateDuration = (startDate: string, endDate: string) => {
    const start = new Date(startDate + '-01');
    const end = endDate === 'Present' ? new Date() : new Date(endDate + '-01');
    const diffTime = Math.abs(end.getTime() - start.getTime());
    const diffMonths = Math.ceil(diffTime / (1000 * 60 * 60 * 24 * 30));
    
    if (diffMonths < 12) {
      return `${diffMonths} month${diffMonths > 1 ? 's' : ''}`;
    } else {
      const years = Math.floor(diffMonths / 12);
      const months = diffMonths % 12;
      return `${years} year${years > 1 ? 's' : ''}${months > 0 ? ` ${months} month${months > 1 ? 's' : ''}` : ''}`;
    }
  };

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'internship':
        return 'bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 border-blue-200 dark:border-blue-800';
      case 'full-time':
        return 'bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300 border-green-200 dark:border-green-800';
      case 'part-time':
        return 'bg-yellow-100 dark:bg-yellow-900/30 text-yellow-700 dark:text-yellow-300 border-yellow-200 dark:border-yellow-800';
      case 'contract':
        return 'bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300 border-purple-200 dark:border-purple-800';
      default:
        return 'bg-gray-100 dark:bg-gray-900/30 text-gray-700 dark:text-gray-300 border-gray-200 dark:border-gray-800';
    }
  };

  return (
    <section id="experience" className="py-20 bg-gray-50 dark:bg-dark-900 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-64 h-64 bg-primary-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-64 h-64 bg-accent-500/5 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">Work Experience</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary-600 to-accent-500 mx-auto mb-8 rounded-full"></div>
          <p className="max-w-2xl mx-auto text-gray-600 dark:text-gray-400">
            My professional journey through various internships and research positions
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* Timeline */}
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-8 md:left-1/2 transform md:-translate-x-1/2 h-full w-1 bg-gradient-to-b from-primary-600 via-accent-500 to-primary-600 rounded-full"></div>
            
            {/* Experience items */}
            <div className="space-y-12">
              {workExperience.map((experience, index) => (
                <div key={experience.id} className="relative">
                  {/* Timeline dot */}
                  <div className="absolute left-8 md:left-1/2 transform -translate-x-1/2 w-6 h-6 bg-gradient-to-r from-primary-600 to-accent-500 rounded-full border-4 border-white dark:border-dark-900 shadow-lg z-10"></div>
                  
                  {/* Content */}
                  <div className={`ml-20 md:ml-0 ${index % 2 === 0 ? 'md:pr-1/2 md:text-right' : 'md:pl-1/2 md:ml-8'}`}>
                    <div className="group bg-white/70 dark:bg-dark-800/70 backdrop-blur-sm rounded-xl p-6 shadow-sm border border-gray-200/50 dark:border-dark-700/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary-500/10 hover:transform hover:-translate-y-1 hover:border-primary-500/30">
                      {/* Header */}
                      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4">
                        <div className="mb-2 sm:mb-0">
                          <h3 className="text-xl font-semibold text-gray-900 dark:text-white group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">
                            {experience.position}
                          </h3>
                          <p className="text-lg text-primary-600 dark:text-primary-400 font-medium">
                            {experience.company}
                          </p>
                        </div>
                        
                        <div className="flex flex-col sm:items-end space-y-2">
                          <span className={`px-3 py-1 text-xs rounded-full border ${getTypeColor(experience.type)} capitalize`}>
                            {experience.type}
                          </span>
                          <div className="flex items-center text-gray-500 dark:text-gray-400 text-sm">
                            <Calendar size={14} className="mr-1" />
                            <span>{formatDate(experience.startDate)} - {formatDate(experience.endDate)}</span>
                          </div>
                          <div className="text-xs text-gray-400 dark:text-gray-500">
                            {calculateDuration(experience.startDate, experience.endDate)}
                          </div>
                        </div>
                      </div>

                      {/* Description */}
                      <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                        {experience.description}
                      </p>

                      {/* Achievements */}
                      {experience.achievements && experience.achievements.length > 0 && (
                        <div className="mb-4">
                          <h4 className="flex items-center text-sm font-medium text-gray-800 dark:text-gray-200 mb-2">
                            <Award size={16} className="mr-2 text-accent-500" />
                            Key Achievements
                          </h4>
                          <ul className="space-y-1">
                            {experience.achievements.map((achievement, idx) => (
                              <li key={idx} className="text-sm text-gray-600 dark:text-gray-400 flex items-start">
                                <span className="w-1.5 h-1.5 bg-primary-500 rounded-full mt-2 mr-2 flex-shrink-0"></span>
                                {achievement}
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}

                      {/* Technologies */}
                      {experience.technologies && experience.technologies.length > 0 && (
                        <div>
                          <h4 className="flex items-center text-sm font-medium text-gray-800 dark:text-gray-200 mb-2">
                            <Code size={16} className="mr-2 text-primary-500" />
                            Technologies Used
                          </h4>
                          <div className="flex flex-wrap gap-2">
                            {experience.technologies.map((tech, idx) => (
                              <span 
                                key={idx}
                                className="px-2 py-1 bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300 text-xs rounded-md border border-primary-200 dark:border-primary-800"
                              >
                                {tech}
                              </span>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorkExperienceSection;