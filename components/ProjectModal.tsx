import React, { useEffect } from 'react';
import { Project } from '../types';
import { X, Github, ExternalLink } from 'lucide-react';

interface ProjectModalProps {
  project: Project | null;
  isOpen: boolean;
  onClose: () => void;
}

const ProjectModal: React.FC<ProjectModalProps> = ({ project, isOpen, onClose }) => {
  // Prevent body scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  if (!isOpen || !project) return null;

  return (
    <div className="fixed inset-0 z-[60] flex items-center justify-center p-4 sm:p-6">
      <div 
        className="absolute inset-0 bg-black/60 backdrop-blur-sm transition-opacity" 
        onClick={onClose}
      ></div>
      
      <div className="relative w-full max-w-3xl bg-white dark:bg-[#1e1e1e] rounded-2xl shadow-2xl overflow-hidden flex flex-col max-h-[90vh] animate-slide-up">
        {/* Header Image */}
        <div className="relative h-48 sm:h-64 bg-gray-200">
          <img 
            src={project.images[0]} 
            alt={project.title} 
            className="w-full h-full object-cover"
          />
          <button 
            onClick={onClose}
            className="absolute top-4 right-4 p-2 bg-black/50 hover:bg-black/70 text-white rounded-full transition-colors backdrop-blur-md"
          >
            <X size={20} />
          </button>
        </div>

        {/* Content - Scrollable */}
        <div className="flex-grow overflow-y-auto p-6 sm:p-8">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-6 gap-4">
            <div>
              <h2 className="text-2xl sm:text-3xl font-heading font-bold text-textMain dark:text-white mb-2">
                {project.title}
              </h2>
              <p className="text-primary dark:text-secondary font-medium">{project.role} | {project.year}</p>
            </div>
            
            <div className="flex gap-3">
              {project.links.github && (
                <a 
                  href={project.links.github} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2 rounded-lg bg-gray-100 dark:bg-white/10 text-textMain dark:text-white hover:bg-gray-200 dark:hover:bg-white/20 transition-colors text-sm font-semibold"
                >
                  <Github size={18} />
                  Code
                </a>
              )}
              {project.links.demo && (
                <a 
                  href={project.links.demo} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2 rounded-lg bg-primary text-white hover:bg-primary/90 transition-colors text-sm font-semibold shadow-lg shadow-primary/30"
                >
                  <ExternalLink size={18} />
                  Live Demo
                </a>
              )}
            </div>
          </div>

          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-bold text-textMain dark:text-white mb-2">Overview</h3>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                {project.long_description}
              </p>
            </div>

            <div>
              <h3 className="text-lg font-bold text-textMain dark:text-white mb-3">Key Highlights</h3>
              <ul className="space-y-2">
                {project.highlights.map((highlight, index) => (
                  <li key={index} className="flex items-start text-gray-600 dark:text-gray-300">
                    <span className="mr-3 mt-1.5 h-1.5 w-1.5 rounded-full bg-secondary flex-shrink-0"></span>
                    {highlight}
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-bold text-textMain dark:text-white mb-3">Technologies</h3>
              <div className="flex flex-wrap gap-2">
                {project.tech_stack.map((tech) => (
                  <span 
                    key={tech} 
                    className="px-3 py-1.5 rounded-md text-sm font-mono bg-primary/5 dark:bg-secondary/10 text-primary dark:text-secondary border border-primary/10 dark:border-secondary/20"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectModal;