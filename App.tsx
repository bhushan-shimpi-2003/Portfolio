import React, { useState, useEffect } from 'react';
import { HashRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Projects from './pages/Projects';
import Certifications from './pages/Certifications';
import Resume from './pages/Resume';
import Contact from './pages/Contact';

const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

// Component to handle page animations
const AnimatedRoutes = () => {
  const location = useLocation();

  return (
    <div key={location.pathname} className="animate-fade-in w-full h-full">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/certifications" element={<Certifications />} />
        <Route path="/resume" element={<Resume />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  );
};

interface LayoutProps {
  darkMode: boolean;
  toggleTheme: () => void;
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ darkMode, toggleTheme, children }) => {
  const location = useLocation();
  const isHome = location.pathname === '/';

  return (
    <div className="flex flex-col min-h-screen bg-bgLight dark:bg-bgDark transition-colors duration-500">
      <Navbar darkMode={darkMode} toggleTheme={toggleTheme} />
      
      {/* 
        Conditional Padding:
        - Home: pt-0 allows the Hero background to extend behind the transparent navbar.
        - Others: pt-24 creates space for the fixed navbar so content isn't hidden.
      */}
      <main 
        id="main-content" 
        className={`flex-grow flex flex-col ${isHome ? 'pt-0' : 'pt-10 md:pt-10'}`}
      >
        {children}
      </main>
      
      <Footer />
    </div>
  );
};

const App: React.FC = () => {
  const [darkMode, setDarkMode] = useState<boolean>(() => {
    const saved = localStorage.getItem('theme');
    return saved === 'dark';
  });

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [darkMode]);

  const toggleTheme = () => setDarkMode(!darkMode);

  return (
    <Router future={{ v7_startTransition: true, v7_relativeSplatPath: true }}>
      <ScrollToTop />
      
      {/* Skip to Content Link for Accessibility */}
      <a 
        href="#main-content" 
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 z-[100] px-4 py-2 bg-primary text-white rounded-md font-bold shadow-lg transition-transform focus:outline-none focus:ring-2 focus:ring-white"
      >
        Skip to main content
      </a>

      <Layout darkMode={darkMode} toggleTheme={toggleTheme}>
        <AnimatedRoutes />
      </Layout>
    </Router>
  );
};

export default App;