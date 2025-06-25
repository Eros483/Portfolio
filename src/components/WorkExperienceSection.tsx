import React from 'react';
import { Calendar } from 'lucide-react';
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
            {/* Timeline line - centered */}
            <div className="absolute left-6 md:left-1/2 transform md:-translate-x-1/2 h-full w-1 bg-gradient-to-b from-primary-600 via-accent-500 to-primary-600 rounded-full"></div>
            
            {/* Experience items */}
            <div className="space-y-12">
              {workExperience.map((experience, index) => (
                <div key={experience.id} className="relative">
                  {/* Timeline dot */}
                  <div className="absolute left-6 md:left-1/2 transform -translate-x-1/2 w-4 h-4 bg-gradient-to-r from-primary-600 to-accent-500 rounded-full border-2 border-white dark:border-dark-900 shadow-lg z-10"></div>
                  
                  {/* Content container */}
                  <div className={`flex ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                    {/* Spacer for alternating layout */}
                    <div className="hidden md:block md:w-1/2"></div>
                    
                    {/* Content card */}
                    <div className="ml-16 md:ml-0 md:w-1/2 md:px-8">
                      <div className="group bg-white/70 dark:bg-dark-800/70 backdrop-blur-sm rounded-lg p-6 shadow-sm border border-gray-200/50 dark:border-dark-700/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary-500/10 hover:transform hover:-translate-y-1 hover:border-primary-500/30">
                        {/* Position and Company */}
                        <div className="mb-4">
                          <h3 className="text-lg font-semibold text-gray-900 dark:text-white group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">
                            {experience.position}
                          </h3>
                          <p className="text-primary-600 dark:text-primary-400 font-medium">
                            {experience.company}
                          </p>
                        </div>

                        {/* Time and Type */}
                        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
                          <div className="flex items-center text-gray-500 dark:text-gray-400 text-sm mb-2 sm:mb-0">
                            <Calendar size={14} className="mr-2" />
                            <span>{formatDate(experience.startDate)} - {formatDate(experience.endDate)}</span>
                            <span className="mx-2">•</span>
                            <span className="text-xs text-gray-400 dark:text-gray-500">
                              {calculateDuration(experience.startDate, experience.endDate)}
                            </span>
                          </div>
                          
                          <span className={`px-2 py-1 text-xs rounded-full border ${getTypeColor(experience.type)} capitalize self-start sm:self-auto`}>
                            {experience.type}
                          </span>
                        </div>
                      </div>
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