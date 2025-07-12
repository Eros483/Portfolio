import React from 'react';
import { GraduationCap, Code, Coffee, Lightbulb } from 'lucide-react';

const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-white dark:bg-dark-900 relative overflow-hidden">
      {/* Whimsical background decorations */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 right-10 w-32 h-32 bg-primary-500/10 rounded-full blur-2xl animate-float"></div>
        <div className="absolute bottom-20 left-10 w-40 h-40 bg-whimsy-500/8 rounded-full blur-3xl animate-squiggle"></div>
        <div className="absolute top-1/2 left-1/4 text-6xl text-primary-200/20 animate-wiggle">✦</div>
        <div className="absolute bottom-1/3 right-1/4 text-4xl text-whimsy-200/25 animate-float">♡</div>
        
        {/* Squiggly decorative line */}
        <svg className="absolute top-10 left-0 w-full h-16 opacity-12" viewBox="0 0 1200 80">
          <path d="M0,40 Q300,10 600,40 T1200,40" stroke="currentColor" strokeWidth="3" fill="none" className="text-primary-500 animate-squiggle"/>
        </svg>
        <svg className="absolute top-1/3 right-0 w-full h-16 opacity-8" viewBox="0 0 1200 80">
          <path d="M0,40 Q200,60 400,40 Q600,20 800,40 Q1000,60 1200,40" stroke="currentColor" strokeWidth="2" fill="none" className="text-whimsy-500 animate-float"/>
        </svg>
        <svg className="absolute bottom-20 left-0 w-full h-16 opacity-15" viewBox="0 0 1200 80">
          <path d="M0,40 Q150,20 300,40 Q450,60 600,40 Q750,20 900,40 Q1050,60 1200,40" stroke="currentColor" strokeWidth="1.5" fill="none" className="text-primary-400 animate-squiggle"/>
        </svg>
      </div>
      
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4 relative">
            About Me
            <span className="absolute -top-2 -right-4 text-2xl text-whimsy-400/60 animate-wiggle">✨</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary-500 to-whimsy-500 mx-auto mb-8 rounded-full animate-pulse-slow"></div>
          <p className="max-w-2xl mx-auto text-gray-600 dark:text-gray-300">
            A CS student dabbling in machine learning and data science, while keeping in touch with International Politics
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          {/* About Text */}
          <div className="space-y-6">
            <p className="text-gray-700 dark:text-gray-200 leading-relaxed">
              I'm currently majoring in CSE with a minor in International Relations at Shiv Nadar Institution of Eminence, slowly and steadily expanding my knowledge of the world while becoming technically proficient day by day. My goal has been and continues to be becoming a complete person, one who has experience in all fields and domains, while continuing to excel at my chosen subject, aka Computer Science.
            </p>
            <p className="text-gray-700 dark:text-gray-200 leading-relaxed">
              As a CS major, I'm well versed in using C, C# and Java for development, with Python being my preferred language of choice for most projects. I'm always interested in collaborating on projects. As a novice in AIML, I am currently exploring the vast field of deep learning along with exploring game dev in Unity, and appreciate assistance from everywhere.
            </p>
            <p className="text-gray-700 dark:text-gray-200 leading-relaxed">
              Apart from my chosen major, I'm additionally minoring in International Relations, learning more about the world, and global politics, and how I play a role in this dystopian arena of world power struggles.
            </p>
            <p className="text-gray-700 dark:text-gray-200 leading-relaxed">
              My other hobbies include debating, with multiple victories at several competitions, music, reading anything I can get my hands on, basketball, and being what's known conventionally as a "gym rat", or scrolling through medium articles.
            </p>
          </div>
          
          {/* Features/Interests */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="group bg-white/50 dark:bg-dark-900/50 backdrop-blur-sm p-6 rounded-xl shadow-sm border border-gray-200/50 dark:border-dark-800/50 transition-all duration-300 hover:transform hover:-translate-y-2 hover:shadow-lg hover:shadow-primary-500/10 hover:border-primary-500/30">
              <div className="text-primary-500 dark:text-whimsy-400 mb-4 group-hover:scale-110 transition-transform duration-300 animate-float">
                <Code size={30} className="group-hover:animate-wiggle" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">Building Projects</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Building efficient applications to solve existing problems
              </p>
            </div>
            
            <div className="group bg-white/50 dark:bg-dark-900/50 backdrop-blur-sm p-6 rounded-xl shadow-sm border border-gray-200/50 dark:border-dark-800/50 transition-all duration-300 hover:transform hover:-translate-y-2 hover:shadow-lg hover:shadow-primary-500/10 hover:border-primary-500/30">
              <div className="text-primary-500 dark:text-whimsy-400 mb-4 group-hover:scale-110 transition-transform duration-300 animate-float" style={{ animationDelay: '0.5s' }}>
                <GraduationCap size={30} className="group-hover:animate-wiggle" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">Learning through problems</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Constantly expanding my knowledge through courses and practical projects.
              </p>
            </div>
            
            <div className="group bg-white/50 dark:bg-dark-900/50 backdrop-blur-sm p-6 rounded-xl shadow-sm border border-gray-200/50 dark:border-dark-800/50 transition-all duration-300 hover:transform hover:-translate-y-2 hover:shadow-lg hover:shadow-primary-500/10 hover:border-primary-500/30">
              <div className="text-primary-500 dark:text-whimsy-400 mb-4 group-hover:scale-110 transition-transform duration-300 animate-float" style={{ animationDelay: '1s' }}>
                <Coffee size={30} className="group-hover:animate-wiggle" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">Working through Errors</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Tackling complex challenges with analytical thinking and creative solutions.
              </p>
            </div>
            
            <div className="group bg-white/50 dark:bg-dark-900/50 backdrop-blur-sm p-6 rounded-xl shadow-sm border border-gray-200/50 dark:border-dark-800/50 transition-all duration-300 hover:transform hover:-translate-y-2 hover:shadow-lg hover:shadow-primary-500/10 hover:border-primary-500/30">
              <div className="text-primary-500 dark:text-whimsy-400 mb-4 group-hover:scale-110 transition-transform duration-300 animate-float" style={{ animationDelay: '1.5s' }}>
                <Lightbulb size={30} className="group-hover:animate-wiggle" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">Innovation</h3>
              <p className="text-gray-600 dark:text-gray-300">
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