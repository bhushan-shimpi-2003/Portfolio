import React from 'react';
import { Download, MapPin, Mail, Phone, Globe, Linkedin, Github, ExternalLink, Printer, FileWarning } from 'lucide-react';
import { certifications } from '../data/certifications';
import RevealOnScroll from '../components/RevealOnScroll';

// Minimal valid PDF base64 to prevent crash if file is missing
const PLACEHOLDER_PDF = "data:application/pdf;base64,JVBERi0xLjcKCjEgMCBvYmogICUgZW50cnkgcG9pbnQKPDwKICAvVHlwZSAvQ2F0YWxvZwogIC9QYWdlcyAyIDAgUgo+PgplbmRvYmoKCjIgMCBvYmoKPDwKICAvVHlwZSAvUGFnZXwKICAvTWVkaWFCb3ggWyAwIDAgNTk1LjI4IDg0MS44OSBdCiAgL0NvdW50IDEKICAvS2lkcyBbIDMgMCBSIF0KPj4KZW5kb2JqCgozIDAgb2JqCjw8CiAgL1R5cGUgL1BhZ2UKICAvUGFyZW50IDIgMCBSCiAgL1Jlc291cmNlcyA8PAogICAgL0ZvbnQgPDwKICAgICAgL0YxIDQgMCBSCj4+CiAgPj4KICAvQ29udGVudHMgNSAwIFIKPj4KZW5kb2JqCgo0IDAgb2JqCjw8CiAgL1R5cGUgL1ZvbnQKICAvU3VidHlwZSAvVHlwZTEKICAvQmFzZUZvbnQgL0hlbHZldGljYQo+PgplbmRvYmoKCjUgMCBvYmoKPDwKICAvTGVuZ3RoIDIyMwo+PgpzdHJlYW0KQlQKL0YxIDI0IFRmCjEwMCA3MDAgVGQKKFBsZWFzZSByZXBsYWNlIHB1YmxpYy9yZXN1bWUucGRmIHdpdGggeW91ciBhY3R1YWwgcmVzdW1lLikgVGoKRVQKZW5kc3RyZWFtCmVuZG9iagoKeHJlZgowIDYKMDAwMDAwMDAwMCA2NTUzNSBmIAowMDAwMDAwMDEwIDAwMDAwIG4gCjAwMDAwMDAwNjAgMDAwMDAgbiAKMDAwMDAwMDE1NyAwMDAwMCBuIAowMDAwMDAwMjY0IDAwMDAwIG4gCjAwMDAwMDAzNTIgMDAwMDAgbiAKdHJhaWxlcgo8PAogIC9TaXplIDYKICAvUm9vdCAxIDAgUgo+PgpzdGFydHhyZWYKNjI1CiUlRU9GCg==";

const Resume: React.FC = () => {
  const handleDownload = async (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const downloadBtn = e.currentTarget;
    const originalText = downloadBtn.innerHTML;
    
    try {
      // Provide visual feedback
      downloadBtn.innerHTML = `<svg class="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"><circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle><path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path></svg> Checking...`;
      
      const response = await fetch('/resume.pdf', { method: 'HEAD' });
      const contentType = response.headers.get('content-type');
      
      // Check if file exists and is likely a PDF (not the HTML fallback)
      if (response.ok && contentType !== 'text/html') {
        window.location.href = '/resume.pdf';
      } else {
        throw new Error("File not found");
      }
    } catch (error) {
      // Fallback: Download placeholder
      const link = document.createElement('a');
      link.href = PLACEHOLDER_PDF;
      link.download = "Bhushan_Shimpi_Placeholder_Resume.pdf";
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      
      alert("Resume file (public/resume.pdf) not found. \n\nA placeholder PDF has been downloaded instead. \nPlease add your actual resume PDF to the public folder.");
    } finally {
       downloadBtn.innerHTML = originalText;
    }
  };

  return (
    <div className="py-12">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <RevealOnScroll animation="slide-down">
          <div className="flex flex-col sm:flex-row justify-between items-center mb-8 gap-4">
            <h1 className="text-4xl font-heading font-bold text-textMain dark:text-white">Resume</h1>
            
            <div className="flex flex-wrap justify-center gap-3">
              <button 
                onClick={() => window.print()}
                className="inline-flex items-center justify-center px-6 py-2.5 text-sm font-semibold text-textMain dark:text-white bg-white dark:bg-white/5 border border-gray-200 dark:border-white/10 rounded-lg hover:bg-gray-50 dark:hover:bg-white/10 transition-all"
              >
                <Printer className="mr-2" size={18} />
                Print View
              </button>
              
              <a 
                href="/resume.pdf" 
                onClick={handleDownload}
                className="inline-flex items-center justify-center px-6 py-2.5 text-sm font-semibold text-white bg-primary rounded-lg hover:bg-primary/90 transition-all shadow-lg shadow-primary/30"
              >
                <Download className="mr-2" size={18} />
                Download PDF
              </a>
            </div>
          </div>
        </RevealOnScroll>

        {/* Resume Container (A4 Aspect Ratio approx) */}
        <RevealOnScroll animation="fade-in" delay={200}>
          <div className="bg-white dark:bg-slate-900 shadow-2xl overflow-hidden print:shadow-none print:w-full print:max-w-none">
          
            {/* Header */}
            <div className="bg-textMain dark:bg-slate-950 text-white p-8 md:p-10">
              <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
                {/* Profile Photo */}
                <div className="flex-shrink-0">
                  <img 
                    src="/profile.jpg" 
                    alt="Bhushan Shimpi" 
                    className="w-48 h-48 rounded-full border-4 border-white/10 object-cover shadow-2xl"
                    onError={(e) => {
                      // Fallback if profile image is missing
                      e.currentTarget.src = "https://ui-avatars.com/api/?name=Bhushan+Shimpi&size=200&background=6366f1&color=fff";
                    }} 
                  />
                </div>

                {/* Text Info */}
                <div className="flex-grow text-center md:text-left">
                  <h2 className="text-4xl md:text-5xl font-heading font-bold mb-4 tracking-tight uppercase">Bhushan Shimpi</h2>
                  <div className="h-1 w-24 bg-primary mb-6 mx-auto md:mx-0"></div>
                  
                  <h3 className="text-lg font-bold uppercase tracking-wider text-primary mb-4">Contact Information</h3>
                  <div className="flex flex-wrap justify-center md:justify-start gap-x-8 gap-y-3 text-sm md:text-base text-gray-300">
                    <div className="flex items-center">
                      <MapPin size={16} className="mr-2 text-primary" />
                      Pune, Maharashtra, India
                    </div>
                    <div className="flex items-center">
                      <Phone size={16} className="mr-2 text-primary" />
                      +91 9579938131
                    </div>
                    <div className="flex items-center">
                      <Mail size={16} className="mr-2 text-primary" />
                      shimpibhushan2503@gmail.com
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="grid md:grid-cols-12 min-h-[1000px]">
              
              {/* Left Sidebar */}
              <div className="md:col-span-4 bg-gray-50 dark:bg-slate-800/50 p-8 border-r border-gray-100 dark:border-white/5">
                
                {/* Links */}
                <div className="mb-8">
                  <h3 className="text-lg font-bold uppercase tracking-wider text-textMain dark:text-white border-b-2 border-primary/20 pb-2 mb-4">
                    Links
                  </h3>
                  <div className="space-y-3 text-sm">
                    <div>
                      <span className="font-bold text-gray-700 dark:text-gray-300 block mb-1">LinkedIn:</span>
                      <a href="https://www.linkedin.com/in/bhushan-shimpi25634/" target="_blank" rel="noreferrer" className="text-primary hover:underline break-words">
                        linkedin.com/in/bhushanshimpi25634/
                      </a>
                    </div>
                    <div>
                      <span className="font-bold text-gray-700 dark:text-gray-300 block mb-1">GitHub:</span>
                      <a href="https://github.com/bhushanshimpi-2003" target="_blank" rel="noreferrer" className="text-primary hover:underline break-words">
                        github.com/bhushanshimpi-2003
                      </a>
                    </div>
                    <div>
                      <span className="font-bold text-gray-700 dark:text-gray-300 block mb-1">Portfolio:</span>
                      <a href="https://bhushanshimpi.online/" target="_blank" rel="noreferrer" className="text-primary hover:underline break-words">
                        bhushanshimpi.online
                      </a>
                    </div>
                  </div>
                </div>

                {/* Education */}
                <div className="mb-8">
                  <h3 className="text-lg font-bold uppercase tracking-wider text-textMain dark:text-white border-b-2 border-primary/20 pb-2 mb-4">
                    Education
                  </h3>
                  <div className="space-y-6">
                    <div>
                      <h4 className="font-bold text-textMain dark:text-white leading-tight">Master of Computer Applications (MCA)</h4>
                      <p className="text-xs text-primary font-bold uppercase mt-1">In Progress</p>
                      <p className="text-sm text-gray-600 dark:text-gray-300 mt-1">Indira College of Engineering & Management, Pune</p>
                      <p className="text-xs text-gray-500 mt-1">Expected Graduation: 2026</p>
                    </div>
                    
                    <div>
                      <h4 className="font-bold text-textMain dark:text-white leading-tight">Bachelor of Computer Applications (BCA)</h4>
                      <p className="text-sm text-gray-600 dark:text-gray-300 mt-1">North Maharashtra University</p>
                      <p className="text-xs text-gray-500 mt-1">Graduated in 2024</p>
                      <p className="text-sm font-medium text-textMain dark:text-white mt-1">CGPA: 9.21 / 10</p>
                    </div>

                    <div>
                      <h4 className="font-bold text-textMain dark:text-white leading-tight">Higher Secondary Certificate (HSC)</h4>
                      <p className="text-sm text-gray-600 dark:text-gray-300 mt-1">Maharashtra State Board</p>
                      <p className="text-xs text-gray-500 mt-1">Completed in 2021</p>
                      <p className="text-sm font-medium text-textMain dark:text-white mt-1">Percentage: 84.40%</p>
                    </div>

                    <div>
                      <h4 className="font-bold text-textMain dark:text-white leading-tight">Secondary School Certificate (SSC)</h4>
                      <p className="text-sm text-gray-600 dark:text-gray-300 mt-1">NMV School, Chunchale</p>
                      <p className="text-xs text-gray-500 mt-1">Completed in 2019</p>
                      <p className="text-sm font-medium text-textMain dark:text-white mt-1">Percentage: 76.60%</p>
                    </div>
                  </div>
                </div>

                {/* Technical Skills */}
                <div className="mb-8">
                  <h3 className="text-lg font-bold uppercase tracking-wider text-textMain dark:text-white border-b-2 border-primary/20 pb-2 mb-4">
                    Technical Skills
                  </h3>
                  <div className="space-y-3 text-sm text-gray-700 dark:text-gray-300">
                    <div>
                      <span className="font-bold block text-textMain dark:text-white">Programming Languages:</span>
                      Java, JavaScript, SQL
                    </div>
                    <div>
                      <span className="font-bold block text-textMain dark:text-white">Frontend:</span>
                      React.js, HTML5, CSS3
                    </div>
                    <div>
                      <span className="font-bold block text-textMain dark:text-white">Backend:</span>
                      Node.js, Express.js
                    </div>
                    <div>
                      <span className="font-bold block text-textMain dark:text-white">Databases:</span>
                      MySQL, MongoDB, PostgreSQL
                    </div>
                    <div>
                      <span className="font-bold block text-textMain dark:text-white">Tools & Technologies:</span>
                      Git, GitHub, VS Code, Shopify, Wix
                    </div>
                    <div>
                      <span className="font-bold block text-textMain dark:text-white">Core Concepts:</span>
                      OOPS, DBMS
                    </div>
                  </div>
                </div>

              </div>

              {/* Right Main Content */}
              <div className="md:col-span-8 p-8">
                
                {/* Profile Summary */}
                <div className="mb-10">
                  <h3 className="text-lg font-bold uppercase tracking-wider text-primary border-b-2 border-gray-200 dark:border-white/10 pb-2 mb-4">
                    Profile Summary
                  </h3>
                  <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-sm md:text-base">
                    Motivated and detail-oriented Java & MERN Stack Developer with hands-on experience in building scalable web applications, REST APIs, and AI-powered solutions. Proficient in database management, UI development, and problem-solving. Passionate about designing user-focused applications using clean code, modern frameworks, and cloud-ready deployment.
                  </p>
                </div>

                {/* Work Experience */}
                <div className="mb-10">
                  <h3 className="text-lg font-bold uppercase tracking-wider text-primary border-b-2 border-gray-200 dark:border-white/10 pb-2 mb-6">
                    Work Experience
                  </h3>
                  
                  <div className="mb-6">
                    <div className="flex justify-between items-baseline mb-2">
                      <h4 className="text-xl font-bold text-textMain dark:text-white">Yang75Year2k</h4>
                      <span className="text-sm font-medium text-gray-500 dark:text-gray-400">Feb 2024 - Mar 2024</span>
                    </div>
                    <p className="text-sm font-semibold text-gray-600 dark:text-gray-400 mb-3 italic">Web Developer</p>
                    <ul className="list-disc list-inside space-y-1.5 text-sm text-gray-700 dark:text-gray-300">
                      <li>Created and customized responsive websites using Wix</li>
                      <li>Improved UI elements to enhance user engagement</li>
                      <li>Collaborated using Agile methodology to deliver features on time</li>
                    </ul>
                  </div>
                </div>

                {/* Projects */}
                <div className="mb-10">
                  <h3 className="text-lg font-bold uppercase tracking-wider text-primary border-b-2 border-gray-200 dark:border-white/10 pb-2 mb-6">
                    Projects
                  </h3>
                  
                  <div className="mb-6">
                    <h4 className="text-lg font-bold text-textMain dark:text-white mb-1">RapidRescue Ambulance</h4>
                    <p className="text-sm text-gray-700 dark:text-gray-300 mb-2">
                      Developed a GPS-enabled real-time tracking and intelligent dispatch module using Java Servlets and JSP, reducing average wait time through optimized route and allocation logic.
                    </p>
                    <p className="text-sm font-semibold text-textMain dark:text-white mb-2">
                      <span className="text-primary">Tech:</span> Java, JSP, Servlets, MySQL
                    </p>
                    <div className="mb-2">
                      <span className="text-sm font-bold text-textMain dark:text-white">Features:</span>
                      <ul className="list-disc list-inside space-y-1 text-sm text-gray-700 dark:text-gray-300 mt-1">
                        <li>Real-time GPS tracking for ambulances.</li>
                        <li>Smart dispatch algorithm to reduce wait time.</li>
                        <li>User module for emergency booking & live tracking.</li>
                        <li>Admin dashboard for ambulance allocation & monitoring</li>
                      </ul>
                    </div>
                  </div>

                  <div className="mb-6">
                    <h4 className="text-lg font-bold text-textMain dark:text-white mb-1">JobGenie - AI-Powered Interview System (MERN + AI)</h4>
                    <p className="text-sm text-gray-700 dark:text-gray-300 mb-2">
                      A smart career preparation system with resume builder, skill tests, and AI voice-based mock interviews.
                    </p>
                    <p className="text-sm font-semibold text-textMain dark:text-white mb-2">
                      <span className="text-primary">Tech:</span> React, Node.js, Express, MongoDB, OpenAI API
                    </p>
                    <div>
                      <span className="text-sm font-bold text-textMain dark:text-white">Features:</span>
                      <ul className="list-disc list-inside space-y-1 text-sm text-gray-700 dark:text-gray-300 mt-1">
                        <li>AI-generated interview questions</li>
                        <li>Real-time audio-based interaction</li>
                        <li>Resume builder with PDF export</li>
                        <li>Dashboard for progress & scores</li>
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Certifications */}
                <div className="mb-10">
                  <h3 className="text-lg font-bold uppercase tracking-wider text-primary border-b-2 border-gray-200 dark:border-white/10 pb-2 mb-4">
                    Certifications
                  </h3>
                  <div className="space-y-3">
                    {certifications.map((cert) => (
                      <div key={cert.id} className="flex flex-col sm:flex-row sm:justify-between sm:items-baseline gap-1">
                         <div className="text-sm text-gray-700 dark:text-gray-300">
                            <span className="font-bold text-textMain dark:text-white">{cert.title}</span> - {cert.issuer}
                         </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Hobbies */}
                <div>
                  <h3 className="text-lg font-bold uppercase tracking-wider text-primary border-b-2 border-gray-200 dark:border-white/10 pb-2 mb-4">
                    Hobbies
                  </h3>
                  <ul className="list-disc list-inside space-y-2 text-sm text-gray-700 dark:text-gray-300">
                    <li>Create webpages with FIGMA</li>
                    <li>Enjoy playing volleyball</li>
                  </ul>
                </div>

              </div>
            </div>
          </div>
        </RevealOnScroll>

        {/* Print Styles */}
        <style>{`
          @media print {
            @page { margin: 0; }
            body { 
              background: white; 
              color: black; 
              margin: 0;
            }
            #root {
              width: 100%;
            }
            .animate-fade-in { animation: none !important; opacity: 1 !important; }
            .animate-slide-up { animation: none !important; opacity: 1 !important; }
            .animate-slide-down { animation: none !important; opacity: 1 !important; }
            .animate-scale-up { animation: none !important; opacity: 1 !important; }
            .opacity-0 { opacity: 1 !important; }
            
            button, a[download], nav, footer, .sr-only { display: none !important; }
            .min-h-screen { min-h-0 !important; }
            .shadow-2xl { shadow: none !important; box-shadow: none !important; }
            
            /* Color adjustments for print to ensure legibility */
            .bg-gray-50 { background-color: #f9fafb !important; -webkit-print-color-adjust: exact; print-color-adjust: exact; }
            .bg-textMain { background-color: #f9fafb !important; -webkit-print-color-adjust: exact; print-color-adjust: exact; color: white !important; }
            .text-white { color: white !important; -webkit-print-color-adjust: exact; print-color-adjust: exact; }
            .bg-primary { background-color: #6366f1 !important; -webkit-print-color-adjust: exact; print-color-adjust: exact; }
            .text-primary { color: #6366f1 !important; -webkit-print-color-adjust: exact; print-color-adjust: exact; }
            .print\\:hidden { display: none !important; }
            
            /* Ensure layout fits */
            .md\\:col-span-4 { width: 33.333333%; float: left; }
            .md\\:col-span-8 { width: 66.666667%; float: left; }
            .grid { display: block; }
            img { max-width: 100% !important; }
          }
        `}</style>
      </div>
    </div>
  );
};

export default Resume;