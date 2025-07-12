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
    <section id="skills" className="py-20 bg-white dark:bg-dark-950 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 right-10 w-64 h-64 bg-primary-500/10 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-20 left-10 w-64 h-64 bg-whimsy-500/8 rounded-full blur-3xl animate-squiggle"></div>
        
        {/* Cute small shapes */}
        <div className="absolute top-16 left-16 w-3 h-3 bg-primary-200/15 rounded-full animate-wiggle"></div>
        <div className="absolute top-32 right-32 w-4 h-4 bg-whimsy-300/25 rotate-45 animate-float"></div>
        <div className="absolute top-48 left-1/4 w-3 h-3 bg-accent-300/30 animate-squiggle" style={{clipPath: 'polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%)'}}></div>
        
        <div className="absolute top-1/3 left-1/4 w-4 h-4 bg-primary-200/15 animate-wiggle" style={{clipPath: 'polygon(20% 0%, 0% 20%, 30% 50%, 0% 80%, 20% 100%, 50% 70%, 80% 100%, 100% 80%, 70% 50%, 100% 20%, 80% 0%, 50% 30%)'}}></div>
        <div className="absolute top-1/2 right-20 w-2 h-5 bg-whimsy-300/30 rounded-full animate-float"></div>
        <div className="absolute top-2/3 left-20 w-3 h-3 bg-accent-400/35 rounded-full animate-squiggle"></div>
        
        <div className="absolute bottom-1/3 right-1/4 w-4 h-4 bg-whimsy-200/20 rotate-45 animate-float"></div>
        <div className="absolute bottom-20 left-1/3 w-3 h-3 bg-primary-300/25 animate-pulse-slow" style={{clipPath: 'polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%)'}}></div>
        <div className="absolute bottom-32 right-16 w-2 h-4 bg-accent-300/30 rounded-full animate-wiggle"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4 relative">
            My Skills
            <span className="absolute -top-2 -right-6 text-2xl text-accent-400/60 animate-wiggle">💫</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary-500 to-whimsy-500 mx-auto mb-8 rounded-full animate-pulse-slow"></div>
          <p className="max-w-2xl mx-auto text-gray-600 dark:text-gray-300">
            A collection of technologies and tools I've worked with and utilised in implementations
          </p>
        </div>

        <div className="space-y-12">
          {Object.entries(skillsByCategory).map(([category, categorySkills]) => (
            <div key={category}>
              <h3 className="text-2xl font-semibold text-gray-800 dark:text-gray-200 mb-6 text-center">
                <span className="bg-gradient-to-r from-primary-500 to-whimsy-500 bg-clip-text text-transparent animate-pulse-slow">
                  {categoryNames[category] || category}
                </span>
              </h3>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {categorySkills.map((skill) => {
                  const Icon = getIconComponent(skill.icon);
                  return (
                    <div 
                      key={skill.name}
                      className="group bg-white/80 dark:bg-dark-800/80 backdrop-blur-sm rounded-xl p-6 shadow-sm border-2 border-primary-200/50 dark:border-primary-700/50 hover:shadow-lg hover:shadow-primary-500/20 transition-all duration-300 hover:transform hover:-translate-y-1 hover:border-primary-400/60 hover:animate-float"
                    >
                      <div className="flex items-center space-x-3 mb-4">
                        <div className="text-primary-500 dark:text-whimsy-400 group-hover:scale-110 transition-transform duration-300 animate-float">
                          <Icon size={20} className="group-hover:animate-wiggle" />
                        </div>
                        <h4 className="font-medium text-gray-800 dark:text-gray-200 group-hover:text-primary-600 dark:group-hover:text-whimsy-300 transition-colors">{skill.name}</h4>
                      </div>
                      
                      <div className="w-full bg-gray-200 dark:bg-dark-700 rounded-full h-2 overflow-hidden border border-gray-300 dark:border-dark-600">
                        <div 
                          className="bg-gradient-to-r from-primary-500 to-whimsy-500 h-2 rounded-full transition-all duration-1000 ease-out group-hover:animate-pulse-slow"
                          style={{ width: `${(skill.level / 5) * 100}%` }}
                        ></div>
                      </div>
                      <div className="mt-2 text-right">
                        <span className="text-xs text-gray-500 dark:text-gray-400 group-hover:text-primary-500 dark:group-hover:text-whimsy-400 transition-colors">
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