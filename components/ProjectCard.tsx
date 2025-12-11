import React from 'react';
import { Project } from '../types';
import { ArrowUpRight } from 'lucide-react';

interface ProjectCardProps {
  project: Project;
  onClick: (project: Project) => void;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project, onClick }) => {
  return (
    <div 
      className="group relative bg-white dark:bg-slate-800/50 rounded-2xl overflow-hidden border border-gray-100 dark:border-white/5 hover:border-primary/50 dark:hover:border-primary/50 transition-all duration-500 hover:shadow-2xl hover:shadow-primary/20 flex flex-col h-full cursor-pointer hover:-translate-y-3"
      onClick={() => onClick(project)}
    >
      {/* Image Container */}
      <div className="relative h-56 w-full overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-60 z-10 transition-opacity duration-500 group-hover:opacity-40" />
        <img 
          src={project.images[0]} 
          alt={project.title} 
          className="w-full h-full object-cover transform transition-transform duration-700 ease-out group-hover:scale-105"
        />
        <div className="absolute top-4 right-4 z-20">
          <span className="px-3 py-1 text-xs font-bold text-white bg-black/50 backdrop-blur-md rounded-full border border-white/10 shadow-sm">
            {project.year}
          </span>
        </div>
      </div>
      
      {/* Content */}
      <div className="p-6 flex-grow flex flex-col relative z-20">
        <h3 className="text-2xl font-heading font-bold text-textMain dark:text-white mb-2 group-hover:text-primary transition-colors flex items-center justify-between">
          {project.title}
          <ArrowUpRight size={20} className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 -translate-x-2 group-hover:translate-x-0" />
        </h3>
        
        <p className="text-gray-600 dark:text-gray-400 text-sm mb-6 line-clamp-3 leading-relaxed">
          {project.short_summary}
        </p>

        <div className="mt-auto">
          <div className="flex flex-wrap gap-2">
            {project.tech_stack.slice(0, 4).map((tech) => (
              <span 
                key={tech} 
                className="text-xs font-medium px-2.5 py-1 rounded-md bg-gray-100 dark:bg-white/5 text-gray-600 dark:text-gray-300 border border-gray-200 dark:border-white/5 group-hover:border-primary/20 transition-colors"
              >
                {tech}
              </span>
            ))}
            {project.tech_stack.length > 4 && (
               <span className="text-xs font-medium px-2.5 py-1 rounded-md bg-gray-100 dark:bg-white/5 text-gray-500">
                +{project.tech_stack.length - 4}
              </span>
            )}
          </div>
        </div>
      </div>
      
      {/* Hover Gradient Overlay - Border Effect */}
      <div className="absolute inset-0 border-2 border-transparent group-hover:border-primary/20 rounded-2xl pointer-events-none transition-colors duration-500"></div>
    </div>
  );
};

export default ProjectCard;