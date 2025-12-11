import React from 'react';
import Hero from '../components/Hero';
import SkillsGrid from '../components/SkillsGrid';
import { websiteCopy } from '../data/copy';
import { projects } from '../data/projects';
import { educationData, experienceData } from '../data/timeline';
import ProjectCard from '../components/ProjectCard';
import ProjectModal from '../components/ProjectModal';
import { Project } from '../types';
import { Link } from 'react-router-dom';
import { ArrowRight, Sparkles, Layers, GraduationCap, Briefcase, Clock } from 'lucide-react';
import RevealOnScroll from '../components/RevealOnScroll';

const Home: React.FC = () => {
  const [selectedProject, setSelectedProject] = React.useState<Project | null>(null);

  // Show only featured projects (first 2)
  const featuredProjects = projects.slice(0, 2);

  return (
    <div className="overflow-hidden">
      <Hero />
      
      {/* Decorative Divider */}
      <div className="w-full h-px bg-gradient-to-r from-transparent via-gray-200 dark:via-white/10 to-transparent my-0"></div>

      {/* About & Skills Section */}
      <section className="pt-24 pb-12 bg-white dark:bg-bgDark relative">
         <div className="absolute inset-0 bg-hero-pattern opacity-[0.03] pointer-events-none"></div>
         
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-12 gap-12 items-start">
            
            <div className="lg:col-span-5">
              <RevealOnScroll animation="slide-right">
                <div>
                  <div className="flex items-center gap-2 mb-4">
                    <Sparkles className="text-secondary" size={24} />
                    <span className="text-secondary font-bold tracking-wider text-sm uppercase">About Me</span>
                  </div>
                  <h2 className="text-3xl md:text-4xl font-heading font-bold mb-6 text-textMain dark:text-white leading-tight">
                    Architecting digital experiences with <span className="text-primary">passion</span> and <span className="text-primary">precision</span>.
                  </h2>
                  
                  <div className="block">
                    <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-8 text-lg">
                      {websiteCopy.about_long}
                    </p>
                  </div>

                  <div className="clear-both">
                    <Link to="/contact" className="group text-primary font-bold hover:text-primary/80 inline-flex items-center text-lg mb-4">
                      Let's Connect 
                      <ArrowRight size={20} className="ml-2 group-hover:translate-x-2 transition-transform" />
                    </Link>
                  </div>
                </div>
              </RevealOnScroll>
            </div>

            <div className="lg:col-span-7">
               <RevealOnScroll animation="slide-left" delay={200}>
                 <div className="flex items-center gap-2 mb-8">
                    <Layers className="text-primary" size={24} />
                    <h2 className="text-2xl font-heading font-bold text-textMain dark:text-white">Technical Arsenal</h2>
                 </div>
                 <SkillsGrid />
               </RevealOnScroll>
            </div>

          </div>
        </div>
      </section>

      {/* Education & Experience Section */}
      <section className="py-8 bg-gray-50/50 dark:bg-white/5 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <RevealOnScroll animation="slide-up">
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-textMain dark:text-white mb-4">My Journey</h2>
              <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
                A timeline of my academic background and practical development experience.
              </p>
            </RevealOnScroll>
          </div>

          <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
            
            {/* Education Column */}
            <RevealOnScroll animation="slide-right" delay={100}>
              <div className="flex items-center gap-3 mb-4">
                <div className="p-3 bg-primary/10 rounded-xl text-primary">
                  <GraduationCap size={28} />
                </div>
                <h3 className="text-2xl font-bold font-heading text-textMain dark:text-white">Education</h3>
              </div>
              
              <div className="space-y-4 pl-4 border-l-2 border-gray-200 dark:border-white/10">
                {educationData.map((edu, idx) => (
                  <div key={idx} className="relative pl-8 group">
                    {/* Timeline Dot */}
                    <span className="absolute -left-[9px] top-6 h-4 w-4 rounded-full border-4 border-white dark:border-bgDark bg-gray-300 dark:bg-gray-600 group-hover:bg-primary transition-colors duration-300 shadow-sm"></span>
                    
                    {/* Card */}
                    <div className="bg-white dark:bg-slate-800 p-6 rounded-2xl shadow-sm border border-gray-100 dark:border-white/5 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group-hover:border-primary/20">
                      <span className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-bold mb-3">
                        {edu.year}
                      </span>
                      <h4 className="text-lg font-bold text-textMain dark:text-white mb-1">{edu.degree}</h4>
                      <p className="text-gray-600 dark:text-gray-300 font-medium mb-2">{edu.institution}</p>
                      <div className="flex flex-wrap gap-2 justify-between items-center">
                         <span className="text-sm text-gray-500 dark:text-gray-400">{edu.details}</span>
                         {edu.score && (
                           <span className="text-xs font-bold px-2 py-1 bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400 rounded">
                             {edu.score}
                           </span>
                         )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </RevealOnScroll>

            {/* Experience Column */}
            <RevealOnScroll animation="slide-left" delay={300}>
              <div className="flex items-center gap-3 mb-4">
                <div className="p-3 bg-secondary/10 rounded-xl text-secondary">
                  <Briefcase size={28} />
                </div>
                <h3 className="text-2xl font-bold font-heading text-textMain dark:text-white">Work Experience</h3>
              </div>
              
              <div className="space-y-8 pl-4 border-l-2 border-gray-200 dark:border-white/10">
                {experienceData.map((exp, idx) => (
                  <div key={idx} className="relative pl-8 group">
                    {/* Timeline Dot */}
                    <span className="absolute -left-[9px] top-6 h-4 w-4 rounded-full border-4 border-white dark:border-bgDark bg-gray-300 dark:bg-gray-600 group-hover:bg-secondary transition-colors duration-300 shadow-sm"></span>
                    
                    {/* Card */}
                    <div className="bg-white dark:bg-slate-800 p-6 rounded-2xl shadow-sm border border-gray-100 dark:border-white/5 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group-hover:border-secondary/20">
                      <div className="flex justify-between items-start mb-1">
                        <span className="inline-block px-3 py-1 rounded-full bg-secondary/10 text-secondary text-xs font-bold mb-2">
                          {exp.year}
                        </span>
                      </div>
                      <h4 className="text-lg font-bold text-textMain dark:text-white mb-1">{exp.role}</h4>
                      
                      <div className="flex flex-wrap items-center gap-x-3 gap-y-1 mb-3">
                        <p className="text-gray-600 dark:text-gray-300 font-medium">{exp.company}</p>
                        <span className="hidden sm:block text-gray-300 dark:text-gray-600">•</span>
                        <div className="flex items-center text-xs text-gray-500 dark:text-gray-400 bg-gray-100 dark:bg-white/5 px-2 py-1 rounded">
                          <Clock size={12} className="mr-1.5" />
                          {exp.duration}
                        </div>
                      </div>

                      <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed">
                        {exp.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </RevealOnScroll>

          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-24 bg-white dark:bg-bgDark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <RevealOnScroll animation="slide-up">
            <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-4">
              <div>
                <span className="text-primary font-bold tracking-wider text-sm uppercase mb-2 block">Portfolio</span>
                <h2 className="text-3xl md:text-4xl font-heading font-bold text-textMain dark:text-white">Featured Projects</h2>
              </div>
              <Link to="/projects" className="hidden sm:flex items-center font-bold text-textMain dark:text-white hover:text-primary transition-colors">
                View All Works <ArrowRight size={20} className="ml-2" />
              </Link>
            </div>
          </RevealOnScroll>
          
          <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10">
            {featuredProjects.map((project, idx) => (
              <RevealOnScroll key={project.id} animation="scale-up" delay={idx * 150}>
                <ProjectCard 
                  project={project} 
                  onClick={setSelectedProject} 
                />
              </RevealOnScroll>
            ))}
          </div>

          <div className="mt-12 sm:hidden text-center">
             <Link to="/projects" className="btn-primary inline-flex items-center font-bold text-primary">
              View All Projects <ArrowRight size={20} className="ml-2" />
            </Link>
          </div>
        </div>
      </section>

      <ProjectModal 
        project={selectedProject} 
        isOpen={!!selectedProject} 
        onClose={() => setSelectedProject(null)} 
      />
    </div>
  );
};

export default Home;