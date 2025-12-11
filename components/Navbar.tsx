import React, { useState, useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { Menu, X, Sun, Moon, Code2, Github, Linkedin } from 'lucide-react';

interface NavbarProps {
  darkMode: boolean;
  toggleTheme: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ darkMode, toggleTheme }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu when route changes
  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  // Lock body scroll when mobile menu is open
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

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Projects', path: '/projects' },
    { name: 'Certifications', path: '/certifications' },
    { name: 'Resume', path: '/resume' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <>
      <nav 
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out ${
          scrolled 
            ? 'py-3 bg-white/80 dark:bg-slate-900/80 backdrop-blur-lg shadow-sm border-b border-gray-200/50 dark:border-white/5' 
            : 'py-5 bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <NavLink 
              to="/" 
              className="group flex items-center space-x-2.5 z-50 relative"
              onClick={() => setIsOpen(false)}
            >
              <div className="p-2 bg-gradient-to-tr from-primary/10 to-secondary/10 dark:from-primary/20 dark:to-secondary/20 rounded-xl group-hover:scale-110 transition-transform duration-300 border border-primary/10 dark:border-white/5 shadow-sm">
                 <Code2 size={24} className="text-primary dark:text-white group-hover:rotate-12 transition-transform duration-300" />
              </div>
              <span className="font-heading font-bold text-xl tracking-tight text-textMain dark:text-white">
                Bhushan <span className="text-primary">Shimpi</span>
              </span>
            </NavLink>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-1">
              <div className="flex items-center p-1 bg-gray-100/50 dark:bg-white/5 rounded-full border border-gray-200/50 dark:border-white/5 backdrop-blur-sm shadow-inner">
                {navLinks.map((link) => (
                  <NavLink
                    key={link.name}
                    to={link.path}
                    className={({ isActive }) =>
                      `px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 relative ${
                        isActive
                          ? 'text-primary dark:text-white bg-white dark:bg-white/10 shadow-sm font-semibold'
                          : 'text-gray-600 dark:text-gray-400 hover:text-primary dark:hover:text-white hover:bg-gray-200/50 dark:hover:bg-white/5'
                      }`
                    }
                  >
                    {link.name}
                  </NavLink>
                ))}
              </div>
            </div>

            {/* Desktop Right Actions */}
            <div className="hidden md:flex items-center space-x-3 pl-4">
              <div className="h-6 w-px bg-gray-200 dark:bg-gray-700 mx-2"></div>
              <button
                onClick={toggleTheme}
                className="p-2.5 rounded-full bg-gray-100 dark:bg-white/5 text-gray-600 dark:text-yellow-400 hover:bg-gray-200 dark:hover:bg-white/10 transition-all shadow-sm ring-1 ring-gray-200 dark:ring-white/10 hover:scale-105"
                aria-label="Toggle Theme"
              >
                {darkMode ? <Sun size={18} /> : <Moon size={18} className="text-primary" />}
              </button>
            </div>

            {/* Mobile Actions */}
            <div className="flex md:hidden items-center space-x-4">
               <button
                  onClick={toggleTheme}
                  className="p-2 rounded-full bg-gray-100 dark:bg-white/5 text-gray-600 dark:text-yellow-400 hover:bg-gray-200 dark:hover:bg-white/10 transition-colors"
                >
                  {darkMode ? <Sun size={20} /> : <Moon size={20} className="text-primary" />}
                </button>
              
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="relative z-50 p-2 text-textMain dark:text-white focus:outline-none hover:bg-gray-100 dark:hover:bg-white/5 rounded-full transition-colors"
                aria-label="Toggle Menu"
              >
                {isOpen ? <X size={28} /> : <Menu size={28} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu Overlay */}
        <div 
          className={`fixed inset-0 bg-white/95 dark:bg-slate-950/95 backdrop-blur-xl z-40 flex flex-col justify-center items-center transition-all duration-500 ease-in-out md:hidden ${
            isOpen ? 'opacity-100 visible' : 'opacity-0 invisible pointer-events-none'
          }`}
        >
           {/* Background Decoration */}
           <div className="absolute top-[-10%] right-[-10%] w-64 h-64 bg-primary/20 rounded-full blur-[80px] pointer-events-none"></div>
           <div className="absolute bottom-[-10%] left-[-10%] w-64 h-64 bg-secondary/20 rounded-full blur-[80px] pointer-events-none"></div>

           <div className="flex flex-col space-y-8 text-center relative z-10">
              {navLinks.map((link, idx) => (
                <NavLink
                  key={link.name}
                  to={link.path}
                  onClick={() => setIsOpen(false)}
                  className={({ isActive }) =>
                    `text-4xl font-heading font-bold transition-all duration-500 transform ${
                      isOpen ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'
                    } ${
                      isActive 
                        ? 'text-primary' 
                        : 'text-textMain dark:text-gray-400 hover:text-primary dark:hover:text-white'
                    }`
                  }
                  style={{ transitionDelay: `${100 + idx * 75}ms` }}
                >
                  {link.name}
                </NavLink>
              ))}
           </div>
           
           <div 
             className={`mt-16 flex items-center space-x-8 transition-all duration-500 delay-500 relative z-10 ${
               isOpen ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
             }`}
           >
              <a 
                href="https://github.com/bhushan-shimpi" 
                target="_blank" 
                rel="noreferrer" 
                className="p-3 bg-gray-50 dark:bg-white/5 rounded-full text-gray-600 hover:text-white hover:bg-black dark:text-gray-300 dark:hover:bg-white dark:hover:text-black transition-all transform hover:scale-110"
              >
                <Github size={24} />
              </a>
              <a 
                href="https://linkedin.com/in/bhushan-shimpi" 
                target="_blank" 
                rel="noreferrer" 
                className="p-3 bg-gray-50 dark:bg-white/5 rounded-full text-gray-600 hover:text-white hover:bg-[#0077b5] dark:text-gray-300 dark:hover:bg-[#0077b5] dark:hover:text-white transition-all transform hover:scale-110"
              >
                <Linkedin size={24} />
              </a>
           </div>
        </div>
      </nav>
      {/* Spacer is often needed if nav is fixed, but page padding usually handles it. 
          Keeping a safety margin just in case of layout shifts, though we can rely on main padding. */}
    </>
  );
};

export default Navbar;