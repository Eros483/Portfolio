import React from 'react';
import { GraduationCap, Code, Coffee, Lightbulb } from 'lucide-react';

const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">About Me</h2>
          <div className="w-20 h-1 bg-cyan-600 dark:bg-cyan-400 mx-auto mb-8"></div>
          <p className="max-w-2xl mx-auto text-gray-600 dark:text-gray-400">
            A CS student dabbling in machine learning and data science, while keeping in touch with International Politics
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          {/* About Text */}
          <div className="space-y-6">
            <p className="text-gray-700 dark:text-gray-300">
              I'm currently majoring in CSE with a minor in International Relations at Shiv Nadar Institution of Eminence, slowly and steadily expanding my knowledge of the world while becoming technically proficient day by day. My goal has been and continues to be becoming a complete person, one who has experience in all fields and domains, while continuing to excel at my chosen subject, aka Computer Science.
            </p>
            <p className="text-gray-700 dark:text-gray-300">
              As a CS major, I'm well versed in using C, C# and Java for development, with Python being my preferred language of choice for most projects. I'm always interested in collaborating on projects. As a novice in AIML, I am currently exploring the vast field of deep learning along with exploring game dev in Unity, and appreciate assistance from everywhere.
            </p>
            <p className="text-gray-700 dark:text-gray-300">
              Apart from my chosen major, I'm additionally minoring in International Relations, learning more about the world, and global politics, and how I play a role in this dystopian arena of world power struggles.
            </p>
            <p className="text-gray-700 dark:text-gray-300">
              My other hobbies include debating, with multiple victories at several competitions, music, reading anything I can get my hands on, basketball, and being what's known conventionally as a "gym rat", or scrolling through medium articles.
            </p>
          </div>
          
          {/* Features/Interests */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg shadow-sm transition-transform hover:transform hover:-translate-y-1">
              <div className="text-cyan-600 dark:text-cyan-400 mb-4">
                <Code size={30} />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">Building Projects</h3>
              <p className="text-gray-600 dark:text-gray-400">
                Building efficient applications to solve existing problems
              </p>
            </div>
            
            <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg shadow-sm transition-transform hover:transform hover:-translate-y-1">
              <div className="text-cyan-600 dark:text-cyan-400 mb-4">
                <GraduationCap size={30} />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">Learning through problems</h3>
              <p className="text-gray-600 dark:text-gray-400">
                Constantly expanding my knowledge through courses and practical projects.
              </p>
            </div>
            
            <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg shadow-sm transition-transform hover:transform hover:-translate-y-1">
              <div className="text-cyan-600 dark:text-cyan-400 mb-4">
                <Coffee size={30} />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">Working through Errors</h3>
              <p className="text-gray-600 dark:text-gray-400">
                Tackling complex challenges with analytical thinking and creative solutions.
              </p>
            </div>
            
            <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg shadow-sm transition-transform hover:transform hover:-translate-y-1">
              <div className="text-cyan-600 dark:text-cyan-400 mb-4">
                <Lightbulb size={30} />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">Innovation</h3>
              <p className="text-gray-600 dark:text-gray-400">
                Creating novel approaches to improve user experiences and system performance.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;