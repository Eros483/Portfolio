import React from 'react';
import { Github, Linkedin, Mail, MapPin, Phone } from 'lucide-react';

const ContactSection: React.FC = () => {
  return (
    <section id="contact" className="py-20 bg-gray-50 dark:bg-dark-800 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-64 h-64 bg-primary-500/10 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-20 right-10 w-64 h-64 bg-whimsy-500/8 rounded-full blur-3xl animate-squiggle"></div>
        <div className="absolute top-1/4 right-1/4 text-5xl text-primary-200/15 animate-wiggle">📧</div>
        <div className="absolute bottom-1/4 left-1/4 text-4xl text-whimsy-200/20 animate-float">💬</div>
        
        {/* Squiggly decorative lines */}
        <svg className="absolute top-10 left-0 w-full h-20 opacity-10" viewBox="0 0 1200 100">
          <path d="M0,50 Q300,20 600,50 T1200,50" stroke="currentColor" strokeWidth="3" fill="none" className="text-primary-400 animate-squiggle"/>
        </svg>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4 relative">
            Get In Touch
            <span className="absolute -top-2 -right-8 text-2xl text-accent-400/60 animate-wiggle">✉️</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary-500 to-whimsy-500 mx-auto mb-8 rounded-full animate-pulse-slow"></div>
          <p className="max-w-2xl mx-auto text-gray-600 dark:text-gray-300">
            Interested in working together or have a question? Feel free to reach out!
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto bg-white/80 dark:bg-dark-900/80 backdrop-blur-sm rounded-2xl shadow-xl overflow-hidden border-2 border-primary-200/50 dark:border-primary-700/50 hover:shadow-2xl hover:shadow-primary-500/10 transition-all duration-300">
          <div className="grid grid-cols-1 md:grid-cols-2">
            {/* Contact Info */}
            <div className="bg-gradient-to-br from-primary-800 via-whimsy-800 to-primary-900 text-white p-8 md:p-12 relative overflow-hidden">
              {/* Background decoration */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary-600/20 to-whimsy-600/20"></div>
              <div className="absolute -top-20 -right-20 w-40 h-40 bg-white/10 rounded-full blur-2xl animate-float"></div>
              <div className="absolute -bottom-20 -left-20 w-40 h-40 bg-white/10 rounded-full blur-2xl animate-squiggle"></div>
              <div className="absolute top-10 right-10 text-3xl text-white/20 animate-wiggle">✨</div>
              
              <div className="relative z-10">
                <h3 className="text-2xl font-bold mb-6 animate-fadeIn">Contact Information</h3>
                <p className="text-gray-200 mb-8 leading-relaxed">
                  I'm open to opportunities, collaborations, and interesting conversations. 
                  Don't hesitate to reach out through any of these channels.
                </p>
                
                <div className="space-y-6">
                  <div className="flex items-start group">
                    <div className="mr-4 mt-1 text-accent-300 group-hover:scale-110 transition-transform duration-300 animate-float">
                      <Mail size={20} className="group-hover:animate-wiggle" />
                    </div>
                    <div>
                      <h4 className="text-lg font-medium text-white">Email</h4>
                      <a href="mailto:arnabmandal2912@gmail.com" className="text-gray-200 hover:text-white transition-all duration-300 hover:scale-105">
                        arnabmandal2912@gmail.com
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex items-start group">
                    <div className="mr-4 mt-1 text-accent-300 group-hover:scale-110 transition-transform duration-300 animate-float" style={{ animationDelay: '0.5s' }}>
                      <MapPin size={20} className="group-hover:animate-wiggle" />
                    </div>
                    <div>
                      <h4 className="text-lg font-medium text-white">Location</h4>
                      <p className="text-gray-200">
                        Vasant Kunj, New Delhi, India
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start group">
                    <div className="mr-4 mt-1 text-accent-300 group-hover:scale-110 transition-transform duration-300 animate-float" style={{ animationDelay: '1s' }}>
                      <Phone size={20} className="group-hover:animate-wiggle" />
                    </div>
                    <div>
                      <h4 className="text-lg font-medium text-white">Phone</h4>
                      <p className="text-gray-200">
                        +91-9560452773
                      </p>
                    </div>
                  </div>
                </div>
                
                {/* Social Links */}
                <div className="mt-12">
                  <h4 className="text-lg font-medium text-white mb-4">Connect with me</h4>
                  <div className="flex space-x-4">
                    <a 
                      href="https://github.com/Eros483" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="group p-3 bg-white/10 backdrop-blur-sm rounded-full text-white hover:bg-primary-500 transition-all duration-300 hover:scale-110 hover:shadow-lg animate-float"
                      aria-label="GitHub"
                    >
                      <Github size={20} className="group-hover:scale-110 transition-transform duration-300 group-hover:animate-wiggle" />
                    </a>
                    <a 
                      href="https://www.linkedin.com/in/arnabmandal2912" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="group p-3 bg-white/10 backdrop-blur-sm rounded-full text-white hover:bg-whimsy-500 transition-all duration-300 hover:scale-110 hover:shadow-lg animate-float"
                      aria-label="LinkedIn"
                      style={{ animationDelay: '0.5s' }}
                    >
                      <Linkedin size={20} className="group-hover:scale-110 transition-transform duration-300 group-hover:animate-wiggle" />
                    </a>
                    <a 
                      href="mailto:arnabmandal2912@gmail.com"
                      className="group p-3 bg-white/10 backdrop-blur-sm rounded-full text-white hover:bg-accent-500 transition-all duration-300 hover:scale-110 hover:shadow-lg animate-float"
                      aria-label="Email"
                      style={{ animationDelay: '1s' }}
                    >
                      <Mail size={20} className="group-hover:scale-110 transition-transform duration-300 group-hover:animate-wiggle" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Contact Form */}
            <div className="p-8 md:p-12">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Send a Message</h3>
              
              <form className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                    Name
                  </label>
                  <input 
                    type="text" 
                    id="name" 
                    placeholder="Your name"
                    className="w-full px-4 py-3 border-2 border-primary-200 dark:border-primary-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-400 dark:focus:ring-whimsy-400 focus:border-primary-400 dark:focus:border-whimsy-400 bg-white dark:bg-dark-800 text-gray-900 dark:text-white transition-all duration-300 hover:border-primary-300 dark:hover:border-primary-600" 
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                    Email
                  </label>
                  <input 
                    type="email" 
                    id="email" 
                    placeholder="Your email"
                    className="w-full px-4 py-3 border-2 border-primary-200 dark:border-primary-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-400 dark:focus:ring-whimsy-400 focus:border-primary-400 dark:focus:border-whimsy-400 bg-white dark:bg-dark-800 text-gray-900 dark:text-white transition-all duration-300 hover:border-primary-300 dark:hover:border-primary-600" 
                  />
                </div>
                
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                    Subject
                  </label>
                  <input 
                    type="text" 
                    id="subject" 
                    placeholder="Subject"
                    className="w-full px-4 py-3 border-2 border-primary-200 dark:border-primary-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-400 dark:focus:ring-whimsy-400 focus:border-primary-400 dark:focus:border-whimsy-400 bg-white dark:bg-dark-800 text-gray-900 dark:text-white transition-all duration-300 hover:border-primary-300 dark:hover:border-primary-600" 
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                    Message
                  </label>
                  <textarea 
                    id="message" 
                    rows={4} 
                    placeholder="Your message"
                    className="w-full px-4 py-3 border-2 border-primary-200 dark:border-primary-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-400 dark:focus:ring-whimsy-400 focus:border-primary-400 dark:focus:border-whimsy-400 bg-white dark:bg-dark-800 text-gray-900 dark:text-white resize-none transition-all duration-300 hover:border-primary-300 dark:hover:border-primary-600" 
                  ></textarea>
                </div>
                
                <button 
                  type="submit"
                  className="w-full bg-gradient-to-r from-primary-500 to-whimsy-500 hover:from-primary-600 hover:to-whimsy-600 text-white font-medium py-3 px-6 rounded-lg transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-400 dark:focus:ring-offset-dark-800 shadow-lg hover:shadow-xl hover:transform hover:-translate-y-0.5 hover:scale-105 animate-float"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;