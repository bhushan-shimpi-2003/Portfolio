import React from 'react';
import { Link } from 'react-router-dom';
import { websiteCopy } from '../data/copy';
import { Github, Linkedin, Mail, MapPin, Code2, ChevronUp, ExternalLink } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer className="bg-white dark:bg-bgDark border-t border-gray-200 dark:border-white/5 pt-16 pb-8 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          
          {/* Brand Column */}
          <div className="space-y-4">
            <Link to="/" className="flex items-center space-x-2 group">
              <div className="p-1.5 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors">
                <Code2 size={24} className="text-primary" />
              </div>
              <span className="font-heading font-bold text-xl tracking-tight text-textMain dark:text-white">
                Bhushan<span className="text-primary">.dev</span>
              </span>
            </Link>
            <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed max-w-xs">
              Building scalable web applications with modern technologies. Focused on performance, accessibility, and user experience.
            </p>
            <div className="flex space-x-4 pt-2">
              <a 
                href="https://github.com/bhushan-shimpi-2003" 
                target="_blank" 
                rel="noreferrer"
                className="p-2 text-gray-500 hover:text-white hover:bg-black dark:text-gray-400 dark:hover:text-white dark:hover:bg-white/10 rounded-full transition-all duration-300"
                aria-label="GitHub"
              >
                <Github size={20} />
              </a>
              <a 
                href="https://www.linkedin.com/in/bhushan-shimpi25634/" 
                target="_blank" 
                rel="noreferrer"
                className="p-2 text-gray-500 hover:text-white hover:bg-[#0077b5] dark:text-gray-400 dark:hover:text-white dark:hover:bg-[#0077b5] rounded-full transition-all duration-300"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </a>
              <a 
                href={`mailto:${websiteCopy.contact.email}`} 
                className="p-2 text-gray-500 hover:text-white hover:bg-red-500 dark:text-gray-400 dark:hover:text-white dark:hover:bg-red-500 rounded-full transition-all duration-300"
                aria-label="Email"
              >
                <Mail size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold text-textMain dark:text-white mb-6">Quick Links</h4>
            <ul className="space-y-3 text-sm text-gray-600 dark:text-gray-400">
              <li>
                <Link to="/" className="hover:text-primary dark:hover:text-primary transition-colors flex items-center w-fit">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/projects" className="hover:text-primary dark:hover:text-primary transition-colors flex items-center w-fit">
                  Projects
                </Link>
              </li>
              <li>
                <Link to="/certifications" className="hover:text-primary dark:hover:text-primary transition-colors flex items-center w-fit">
                  Certifications
                </Link>
              </li>
              <li>
                <Link to="/resume" className="hover:text-primary dark:hover:text-primary transition-colors flex items-center w-fit">
                  Resume
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-bold text-textMain dark:text-white mb-6">Contact</h4>
            <ul className="space-y-4 text-sm text-gray-600 dark:text-gray-400">
              <li className="flex items-start">
                <MapPin size={18} className="mr-3 text-primary shrink-0 mt-0.5" />
                <span>{websiteCopy.contact.location}</span>
              </li>
              <li className="flex items-start">
                <Mail size={18} className="mr-3 text-primary shrink-0 mt-0.5" />
                <a href={`mailto:${websiteCopy.contact.email}`} className="hover:text-primary transition-colors break-all">
                  {websiteCopy.contact.email}
                </a>
              </li>
            </ul>
          </div>

          {/* Call to Action */}
          <div>
            <h4 className="font-bold text-textMain dark:text-white mb-6">Available for work?</h4>
            <p className="text-sm text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">
              I am currently open to new opportunities. Let's discuss how I can contribute to your team.
            </p>
            <Link 
              to="/contact" 
              className="inline-flex items-center justify-center px-6 py-2.5 text-sm font-bold text-white bg-primary rounded-lg hover:bg-primary/90 transition-all shadow-lg shadow-primary/20 hover:-translate-y-0.5"
            >
              Start a Conversation
            </Link>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-gray-200 dark:border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-sm text-gray-500 dark:text-gray-500 text-center md:text-left">
            <p>© {currentYear} Bhushan Shimpi. All rights reserved.</p>
            <p className="text-xs mt-1">Built with React & Tailwind CSS.</p>
          </div>

          <button 
            onClick={scrollToTop}
            className="group flex items-center gap-2 text-sm font-bold text-gray-500 hover:text-primary dark:text-gray-400 dark:hover:text-white transition-colors px-4 py-2 rounded-full hover:bg-gray-100 dark:hover:bg-white/5"
          >
            Back to Top
            <ChevronUp size={16} className="group-hover:-translate-y-1 transition-transform" />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;