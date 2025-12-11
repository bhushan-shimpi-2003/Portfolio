import React, { useEffect, useRef, useState } from 'react';
import { skills } from '../data/skills';

const SkillsGrid: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect(); // Trigger only once
        }
      },
      { threshold: 0.1 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div ref={containerRef} className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {skills.map((skillGroup, idx) => (
        <div 
          key={skillGroup.category} 
          className={`group relative bg-white dark:bg-slate-800/50 p-6 rounded-2xl border border-gray-100 dark:border-white/5 hover:border-primary/30 transition-all duration-300 hover:shadow-lg ${
            isVisible ? 'animate-slide-up' : 'opacity-0'
          }`}
          style={{ 
            animationDelay: `${idx * 150}ms`,
            animationFillMode: 'both' 
          }}
        >
          <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-primary to-secondary rounded-l-2xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
          
          <h3 className="text-lg font-heading font-bold text-textMain dark:text-white mb-4 flex items-center">
            {skillGroup.category}
          </h3>
          
          <div className="flex flex-wrap gap-2">
            {skillGroup.items.map((skill) => (
              <div 
                key={skill} 
                className="px-3 py-1.5 bg-gray-50 dark:bg-white/5 text-gray-700 dark:text-gray-300 rounded-lg text-sm font-medium border border-gray-200 dark:border-white/5 hover:bg-primary hover:text-white dark:hover:bg-primary dark:hover:text-white hover:border-primary transition-all cursor-default transform hover:-translate-y-0.5"
              >
                {skill}
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default SkillsGrid;