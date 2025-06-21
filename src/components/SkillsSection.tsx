import React from 'react';
import { skills } from '../data/skills';
import * as LucideIcons from 'lucide-react';

const SkillsSection: React.FC = () => {
  // Group skills by category
  const skillsByCategory = skills.reduce((acc, skill) => {
    if (!acc[skill.category]) {
      acc[skill.category] = [];
    }
    acc[skill.category].push(skill);
    return acc;
  }, {} as Record<string, typeof skills>);

  // Function to get the Lucide icon component by name
  const getIconComponent = (iconName: string | undefined) => {
    if (!iconName) return LucideIcons.Code;
    return (LucideIcons as any)[iconName] || LucideIcons.Code;
  };

  // Category display names
  const categoryNames: Record<string, string> = {
    'frontend': 'Frontend Development',
    'backend': 'Backend Development',
    'languages': 'Programming Languages',
    'tools': 'Tools & Technologies',
    'other': 'Other Skills',
    'ml': 'Machine Learning and Data Science'
  };

  return (
    <section id="skills" className="py-20 bg-gray-50 dark:bg-dark-900 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 right-10 w-64 h-64 bg-primary-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-10 w-64 h-64 bg-accent-500/5 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">My Skills</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary-600 to-accent-500 mx-auto mb-8 rounded-full"></div>
          <p className="max-w-2xl mx-auto text-gray-600 dark:text-gray-400">
            A collection of technologies and tools I've worked with and utilised in implementations
          </p>
        </div>

        <div className="space-y-12">
          {Object.entries(skillsByCategory).map(([category, categorySkills]) => (
            <div key={category}>
              <h3 className="text-2xl font-semibold text-gray-800 dark:text-gray-200 mb-6 text-center">
                <span className="bg-gradient-to-r from-primary-600 to-accent-500 bg-clip-text text-transparent">
                  {categoryNames[category] || category}
                </span>
              </h3>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {categorySkills.map((skill) => {
                  const Icon = getIconComponent(skill.icon);
                  return (
                    <div 
                      key={skill.name}
                      className="group bg-white/70 dark:bg-dark-800/70 backdrop-blur-sm rounded-xl p-6 shadow-sm border border-gray-200/50 dark:border-dark-700/50 hover:shadow-lg hover:shadow-primary-500/10 transition-all duration-300 hover:transform hover:-translate-y-1 hover:border-primary-500/30"
                    >
                      <div className="flex items-center space-x-3 mb-4">
                        <div className="text-primary-600 dark:text-primary-400 group-hover:scale-110 transition-transform duration-300">
                          <Icon size={20} />
                        </div>
                        <h4 className="font-medium text-gray-800 dark:text-gray-200">{skill.name}</h4>
                      </div>
                      
                      <div className="w-full bg-gray-200 dark:bg-dark-700 rounded-full h-2 overflow-hidden">
                        <div 
                          className="bg-gradient-to-r from-primary-600 to-accent-500 h-2 rounded-full transition-all duration-1000 ease-out group-hover:animate-pulse"
                          style={{ width: `${(skill.level / 5) * 100}%` }}
                        ></div>
                      </div>
                      <div className="mt-2 text-right">
                        <span className="text-xs text-gray-500 dark:text-gray-400">
                          {skill.level}/5
                        </span>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;