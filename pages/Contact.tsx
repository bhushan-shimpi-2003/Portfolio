import React from 'react';
import ContactForm from '../components/ContactForm';
import { websiteCopy } from '../data/copy';
import { Mail, MapPin, Linkedin, Github } from 'lucide-react';
import RevealOnScroll from '../components/RevealOnScroll';

const Contact: React.FC = () => {
  return (
    <div className="py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid md:grid-cols-2 gap-12 lg:gap-20">
          
          {/* Contact Info */}
          <RevealOnScroll animation="slide-right">
            <div>
              <h1 className="text-4xl font-heading font-bold text-textMain dark:text-white mb-4">
                {websiteCopy.contact.title}
              </h1>
              <p className="text-lg text-gray-600 dark:text-gray-400 mb-8">
                {websiteCopy.contact.subtitle}. Feel free to reach out for collaborations or just a friendly hello.
              </p>

              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center text-primary dark:text-secondary">
                    <Mail size={24} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-textMain dark:text-white">Email</h3>
                    <a href={`mailto:${websiteCopy.contact.email}`} className="text-gray-600 dark:text-gray-400 hover:text-primary transition-colors">
                      {websiteCopy.contact.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center text-primary dark:text-secondary">
                    <MapPin size={24} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-textMain dark:text-white">Location</h3>
                    <p className="text-gray-600 dark:text-gray-400">{websiteCopy.contact.location}</p>
                  </div>
                </div>

                <div className="pt-8 border-t border-gray-200 dark:border-white/10">
                  <h3 className="font-heading font-bold text-textMain dark:text-white mb-4">Follow Me</h3>
                  <div className="flex space-x-4">
                    <a href="https://linkedin.com/in/bhushan-shimpi" target="_blank" rel="noopener noreferrer" className="p-3 bg-white dark:bg-[#252525] border border-gray-200 dark:border-white/10 rounded-lg hover:border-primary dark:hover:border-secondary transition-colors text-gray-700 dark:text-gray-300">
                      <Linkedin size={24} />
                    </a>
                    <a href="https://github.com/bhushan-shimpi" target="_blank" rel="noopener noreferrer" className="p-3 bg-white dark:bg-[#252525] border border-gray-200 dark:border-white/10 rounded-lg hover:border-primary dark:hover:border-secondary transition-colors text-gray-700 dark:text-gray-300">
                      <Github size={24} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </RevealOnScroll>

          {/* Form */}
          <RevealOnScroll animation="slide-left" delay={200}>
            <div className="bg-white dark:bg-[#1e1e1e] p-8 rounded-2xl shadow-xl border border-gray-100 dark:border-white/5">
              <h3 className="text-2xl font-bold font-heading mb-6 text-textMain dark:text-white">Send a Message</h3>
              <ContactForm />
            </div>
          </RevealOnScroll>

        </div>
      </div>
    </div>
  );
};

export default Contact;