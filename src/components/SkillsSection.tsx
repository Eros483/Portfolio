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
    <section id="skills" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">My Skills</h2>
          <div className="w-20 h-1 bg-cyan-600 dark:bg-cyan-400 mx-auto mb-8"></div>
          <p className="max-w-2xl mx-auto text-gray-600 dark:text-gray-400">
            A collection of technologies and tools I've worked with and utilised in implementations
          </p>
        </div>

        <div className="space-y-12">
          {Object.entries(skillsByCategory).map(([category, categorySkills]) => (
            <div key={category}>
              <h3 className="text-2xl font-semibold text-gray-800 dark:text-gray-200 mb-6">
                {categoryNames[category] || category}
              </h3>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {categorySkills.map((skill) => {
                  const Icon = getIconComponent(skill.icon);
                  return (
                    <div 
                      key={skill.name}
                      className="bg-white dark:bg-gray-900 rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow"
                    >
                      <div className="flex items-center space-x-3 mb-4">
                        <div className="text-cyan-600 dark:text-cyan-400">
                          <Icon size={20} />
                        </div>
                        <h4 className="font-medium text-gray-800 dark:text-gray-200">{skill.name}</h4>
                      </div>
                      
                      <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                        <div 
                          className="bg-cyan-600 dark:bg-cyan-400 h-2 rounded-full transition-all duration-500"
                          style={{ width: `${(skill.level / 5) * 100}%` }}
                        ></div>
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