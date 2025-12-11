import React from 'react';
import { Certification } from '../types';
import { Award, Calendar, ExternalLink, ShieldCheck } from 'lucide-react';

interface CertificationCardProps {
  cert: Certification;
}

const CertificationCard: React.FC<CertificationCardProps> = ({ cert }) => {
  return (
    <div className="group h-full bg-white dark:bg-slate-800 rounded-xl p-1 border-2 border-transparent hover:border-primary/20 transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
      <div className="h-full bg-white dark:bg-slate-800/50 rounded-lg p-6 flex flex-col relative overflow-hidden">
        {/* Decorative Corner */}
        <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-bl from-primary/10 to-transparent rounded-bl-full -mr-4 -mt-4"></div>
        
        <div className="flex items-start gap-4 mb-4">
          <div className="flex-shrink-0 w-14 h-14 rounded-xl bg-gradient-to-br from-primary/10 to-secondary/10 flex items-center justify-center border border-white/10 shadow-inner">
             {/* If actual badge URL is a placeholder/image use img, else use icon */}
             <img 
              src={cert.badge_url} 
              alt={`${cert.title} Badge`}
              className="w-8 h-8 object-contain"
              onError={(e) => {
                  e.currentTarget.style.display = 'none';
                  e.currentTarget.nextElementSibling?.classList.remove('hidden');
              }}
            />
             <ShieldCheck className="hidden text-primary" size={28} />
          </div>
          
          <div className="flex-grow z-10">
            <h3 className="font-heading font-bold text-lg text-textMain dark:text-white leading-tight mb-1 group-hover:text-primary transition-colors">
              {cert.title}
            </h3>
            <p className="text-sm font-medium text-gray-500 dark:text-gray-400">
              {cert.issuer}
            </p>
          </div>
        </div>
        
        <div className="mt-auto border-t border-gray-100 dark:border-white/5 pt-4">
          <div className="flex justify-between items-center mb-4">
             <div className="flex items-center text-xs text-gray-400 dark:text-gray-500 bg-gray-100 dark:bg-white/5 px-2 py-1 rounded">
              <Calendar size={12} className="mr-1.5" />
              {cert.year}
            </div>
          </div>

          <div className="flex flex-wrap gap-2 mb-4">
            {cert.tags.map(tag => (
              <span key={tag} className="text-[10px] uppercase tracking-wider font-bold text-secondary bg-secondary/5 px-2 py-1 rounded border border-secondary/10">
                {tag}
              </span>
            ))}
          </div>

          <a 
            href={cert.certificate_url}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full flex items-center justify-center py-2 text-sm font-bold text-white bg-textMain dark:bg-white/10 dark:text-white rounded-lg hover:bg-primary dark:hover:bg-primary transition-colors group-hover:shadow-lg"
          >
            Show Credential
            <ExternalLink size={14} className="ml-2" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default CertificationCard;