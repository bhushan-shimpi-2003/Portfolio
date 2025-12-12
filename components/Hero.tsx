import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { websiteCopy } from '../data/copy';
import { ArrowRight, Download, Linkedin, Github } from 'lucide-react';

const Typewriter = ({ words }: { words: string[] }) => {
  const [index, setIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [reverse, setReverse] = useState(false);
  const [blink, setBlink] = useState(true);

  // Blinking cursor
  useEffect(() => {
    const timeout2 = setTimeout(() => {
      setBlink((prev) => !prev);
    }, 500);
    return () => clearTimeout(timeout2);
  }, [blink]);

  // Typing logic
  useEffect(() => {
    if (index >= words.length) {
      setIndex(0);
      return;
    }

    if (subIndex === words[index].length + 1 && !reverse) {
      const timeout = setTimeout(() => {
        setReverse(true);
      }, 2000); // Wait before deleting
      return () => clearTimeout(timeout);
    }

    if (subIndex === 0 && reverse) {
      setReverse(false);
      setIndex((prev) => (prev + 1) % words.length);
      return;
    }

    const timeout = setTimeout(() => {
      setSubIndex((prev) => prev + (reverse ? -1 : 1));
    }, reverse ? 75 : 150);

    return () => clearTimeout(timeout);
  }, [subIndex, index, reverse, words]);

  return (
    <span>
      {words[index].substring(0, subIndex)}
      <span className={`${blink ? 'opacity-100' : 'opacity-0'} text-primary ml-1`}>|</span>
    </span>
  );
};

const Hero: React.FC = () => {
  return (
    <section className="relative pt-32 pb-20 lg:pt-30 lg:pb-25 overflow-hidden">
      {/* Background Animated Blobs - Slower float for background */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full z-0 pointer-events-none overflow-hidden">
        <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-primary/20 rounded-full blur-[100px] animate-float opacity-0 animate-fade-in" style={{ animationDuration: '8s' }}></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[600px] h-[600px] bg-secondary/20 rounded-full blur-[120px] animate-float opacity-0 animate-fade-in" style={{ animationDelay: '2s', animationDuration: '10s' }}></div>
        <div className="absolute top-[20%] right-[20%] w-[300px] h-[300px] bg-accent/20 rounded-full blur-[80px] animate-pulse opacity-0 animate-fade-in" style={{ animationDelay: '1s' }}></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col-reverse lg:flex-row items-center gap-12 lg:gap-20">
          
          <div className="w-full lg:w-1/2 text-center lg:text-left">
             <div className="inline-block px-4 py-1.5 mb-6 text-sm font-semibold tracking-wider text-primary dark:text-white uppercase bg-primary/10 dark:bg-primary/20 rounded-full border border-primary/20 opacity-0 animate-slide-down" style={{ animationDelay: '0.1s' }}>
              <span className="flex items-center gap-2">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
                </span>
                Open to Work
              </span>
            </div>
            
            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-heading font-extrabold text-textMain dark:text-white leading-tight mb-6 tracking-tight opacity-0 animate-slide-up" style={{ animationDelay: '0.3s' }}>
              Build. <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-accent to-secondary animate-gradient-x bg-[length:200%_auto]">Scale.</span> <br/>
              <Typewriter words={["Innovate.", "Deploy.", "Elevate."]} />
            </h1>
            
            <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto lg:mx-0 leading-relaxed font-light opacity-0 animate-slide-up" style={{ animationDelay: '0.5s' }}>
              <span className="font-semibold text-textMain dark:text-white">I'm Bhushan Shimpi.</span> {websiteCopy.about_short}
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start items-center opacity-0 animate-slide-up" style={{ animationDelay: '0.7s' }}>
              <Link 
                to="/projects"
                className="group relative inline-flex items-center justify-center px-8 py-3.5 text-base font-bold text-white bg-primary rounded-full overflow-hidden transition-all hover:shadow-[0_0_20px_rgba(99,102,241,0.5)] hover:-translate-y-1 animate-pulse-glow"
              >
                <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-primary via-accent to-primary opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-[length:200%_100%] animate-gradient"></div>
                <span className="relative flex items-center">
                  {websiteCopy.hero.cta_primary}
                  <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
                </span>
              </Link>
              
              <Link 
                to="/resume"
                className="inline-flex items-center justify-center px-8 py-3.5 text-base font-semibold text-textMain dark:text-white bg-white dark:bg-white/5 border border-gray-200 dark:border-white/10 rounded-full hover:bg-gray-50 dark:hover:bg-white/10 transition-all hover:-translate-y-1"
              >
                {websiteCopy.hero.cta_secondary}
                <Download className="ml-2" size={20} />
              </Link>

              <div className="flex gap-4 sm:ml-4 mt-4 sm:mt-0 border-t sm:border-t-0 sm:border-l border-gray-200 dark:border-gray-700 pt-4 sm:pt-0 sm:pl-4 opacity-0 animate-fade-in" style={{ animationDelay: '1s' }}>
                 <a href="https://github.com/bhushan-shimpi-2003" target="_blank" rel="noreferrer" className="text-gray-500 hover:text-primary transition-colors hover:scale-110 transform duration-300">
                  <Github size={24} />
                 </a>
                 <a href="https://www.linkedin.com/in/bhushan-shimpi25634/" target="_blank" rel="noreferrer" className="text-gray-500 hover:text-primary transition-colors hover:scale-110 transform duration-300">
                  <Linkedin size={24} />
                 </a>
              </div>
            </div>
          </div>

          <div className="w-full lg:w-1/2 flex justify-center lg:justify-end opacity-0 animate-scale-up" style={{ animationDelay: '0.5s' }}>
            <div className="animate-float">
                <div className="relative w-72 h-72 sm:w-96 sm:h-96 lg:w-[500px] lg:h-[500px] perspective-1000 group">
                {/* Abstract Shape Container */}
                <div className="absolute inset-0 bg-gradient-to-tr from-primary to-secondary rounded-[3rem] rotate-6 opacity-30 blur-2xl transform scale-105 group-hover:rotate-12 transition-transform duration-700"></div>
                
                <div className="relative w-full h-full bg-white dark:bg-slate-800 rounded-[2.5rem] overflow-hidden shadow-2xl border-4 border-white/50 dark:border-white/10 transform transition-transform group-hover:rotate-2 group-hover:scale-[1.02] duration-500">
                    <img 
                    src="../profile.jpg" 
                    alt="Bhushan Shimpi"
                    className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                    />
                </div>
                </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;