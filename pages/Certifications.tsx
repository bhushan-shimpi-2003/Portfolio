import React from 'react';
import { certifications } from '../data/certifications';
import CertificationGrid from '../components/CertificationGrid';
import { websiteCopy } from '../data/copy';

const Certifications: React.FC = () => {
  return (
    <div className="py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-heading font-bold text-textMain dark:text-white mb-4">
            {websiteCopy.certifications_page.title}
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            {websiteCopy.certifications_page.description}
          </p>
        </div>

        <CertificationGrid certifications={certifications} />
      </div>
    </div>
  );
};

export default Certifications;