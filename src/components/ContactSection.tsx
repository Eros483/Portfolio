import React from 'react';
import { Github, Linkedin, Mail, MapPin, Phone } from 'lucide-react';

const ContactSection: React.FC = () => {
  return (
    <section id="contact" className="py-20 bg-gray-50 dark:bg-dark-900 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-64 h-64 bg-primary-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-64 h-64 bg-accent-500/5 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">Get In Touch</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary-600 to-accent-500 mx-auto mb-8 rounded-full"></div>
          <p className="max-w-2xl mx-auto text-gray-600 dark:text-gray-400">
            Interested in working together or have a question? Feel free to reach out!
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto bg-white/70 dark:bg-dark-800/70 backdrop-blur-sm rounded-2xl shadow-xl overflow-hidden border border-gray-200/50 dark:border-dark-700/50">
          <div className="grid grid-cols-1 md:grid-cols-2">
            {/* Contact Info */}
            <div className="bg-gradient-to-br from-primary-900 via-primary-800 to-accent-900 text-white p-8 md:p-12 relative overflow-hidden">
              {/* Background decoration */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary-600/20 to-accent-600/20"></div>
              <div className="absolute -top-20 -right-20 w-40 h-40 bg-white/10 rounded-full blur-2xl"></div>
              <div className="absolute -bottom-20 -left-20 w-40 h-40 bg-white/10 rounded-full blur-2xl"></div>
              
              <div className="relative z-10">
                <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
                <p className="text-gray-200 mb-8 leading-relaxed">
                  I'm open to opportunities, collaborations, and interesting conversations. 
                  Don't hesitate to reach out through any of these channels.
                </p>
                
                <div className="space-y-6">
                  <div className="flex items-start group">
                    <div className="mr-4 mt-1 text-accent-300 group-hover:scale-110 transition-transform duration-300">
                      <Mail size={20} />
                    </div>
                    <div>
                      <h4 className="text-lg font-medium text-white">Email</h4>
                      <a href="mailto:arnabmandal2912@gmail.com" className="text-gray-200 hover:text-white transition-colors">
                        arnabmandal2912@gmail.com
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex items-start group">
                    <div className="mr-4 mt-1 text-accent-300 group-hover:scale-110 transition-transform duration-300">
                      <MapPin size={20} />
                    </div>
                    <div>
                      <h4 className="text-lg font-medium text-white">Location</h4>
                      <p className="text-gray-200">
                        Vasant Kunj, New Delhi, India
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start group">
                    <div className="mr-4 mt-1 text-accent-300 group-hover:scale-110 transition-transform duration-300">
                      <Phone size={20} />
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
                      className="group p-3 bg-white/10 backdrop-blur-sm rounded-full text-white hover:bg-primary-600 transition-all duration-300 hover:scale-110 hover:shadow-lg"
                      aria-label="GitHub"
                    >
                      <Github size={20} className="group-hover:scale-110 transition-transform duration-300" />
                    </a>
                    <a 
                      href="https://www.linkedin.com/in/arnabmandal2912" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="group p-3 bg-white/10 backdrop-blur-sm rounded-full text-white hover:bg-blue-600 transition-all duration-300 hover:scale-110 hover:shadow-lg"
                      aria-label="LinkedIn"
                    >
                      <Linkedin size={20} className="group-hover:scale-110 transition-transform duration-300" />
                    </a>
                    <a 
                      href="mailto:arnabmandal2912@gmail.com"
                      className="group p-3 bg-white/10 backdrop-blur-sm rounded-full text-white hover:bg-accent-600 transition-all duration-300 hover:scale-110 hover:shadow-lg"
                      aria-label="Email"
                    >
                      <Mail size={20} className="group-hover:scale-110 transition-transform duration-300" />
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
                    className="w-full px-4 py-3 border border-gray-300 dark:border-dark-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 dark:focus:ring-primary-400 focus:border-transparent bg-white dark:bg-dark-800 text-gray-900 dark:text-white transition-all duration-300" 
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
                    className="w-full px-4 py-3 border border-gray-300 dark:border-dark-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 dark:focus:ring-primary-400 focus:border-transparent bg-white dark:bg-dark-800 text-gray-900 dark:text-white transition-all duration-300" 
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
                    className="w-full px-4 py-3 border border-gray-300 dark:border-dark-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 dark:focus:ring-primary-400 focus:border-transparent bg-white dark:bg-dark-800 text-gray-900 dark:text-white transition-all duration-300" 
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
                    className="w-full px-4 py-3 border border-gray-300 dark:border-dark-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 dark:focus:ring-primary-400 focus:border-transparent bg-white dark:bg-dark-800 text-gray-900 dark:text-white resize-none transition-all duration-300" 
                  ></textarea>
                </div>
                
                <button 
                  type="submit"
                  className="w-full bg-gradient-to-r from-primary-600 to-accent-500 hover:from-primary-700 hover:to-accent-600 text-white font-medium py-3 px-6 rounded-lg transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500 dark:focus:ring-offset-dark-900 shadow-lg hover:shadow-xl hover:transform hover:-translate-y-0.5"
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